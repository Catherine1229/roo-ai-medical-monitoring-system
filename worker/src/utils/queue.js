const Queue = require('bull');
const { logger } = require('./logger');

// Create a Bull queue with configuration
function createQueue(name, processor, options = {}) {
  const defaultOptions = {
    redis: {
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT) || 6379,
      password: process.env.REDIS_PASSWORD || undefined,
    },
    defaultJobOptions: {
      removeOnComplete: parseInt(process.env.JOB_REMOVE_ON_COMPLETE) || 100,
      removeOnFail: parseInt(process.env.JOB_REMOVE_ON_FAIL) || 50,
      attempts: 3,
      backoff: {
        type: 'exponential',
        delay: 2000,
      },
    },
    settings: {
      maxStalledCount: 10,
      lockDuration: 30000,
      lockRenewTime: 15000,
    },
  };

  const queue = new Queue(name, { ...defaultOptions, ...options });

  // Add processor if provided
  if (processor) {
    queue.process(
      parseInt(process.env.MAX_JOB_CONCURRENCY) || 5,
      async (job) => {
        logger.info(`Processing job ${job.id} from queue ${name}`, {
          jobId: job.id,
          data: job.data
        });

        try {
          const result = await processor(job);
          logger.info(`Job ${job.id} completed successfully`, { jobId: job.id });
          return result;
        } catch (error) {
          logger.error(`Job ${job.id} failed`, {
            jobId: job.id,
            error: error.message,
            stack: error.stack
          });
          throw error;
        }
      }
    );

    // Event listeners
    queue.on('completed', (job) => {
      logger.info(`Job ${job.id} completed`, { jobId: job.id });
    });

    queue.on('failed', (job, err) => {
      logger.error(`Job ${job.id} failed`, {
        jobId: job.id,
        error: err.message
      });
    });

    queue.on('stalled', (jobId) => {
      logger.warn(`Job ${jobId} stalled`, { jobId });
    });
  }

  return queue;
}

// Helper function to add jobs to queue
async function addJob(queue, data, options = {}) {
  try {
    const job = await queue.add(data, options);
    logger.info(`Job added to queue`, {
      queueName: queue.name,
      jobId: job.id,
      data
    });
    return job;
  } catch (error) {
    logger.error(`Failed to add job to queue`, {
      queueName: queue.name,
      error: error.message,
      data
    });
    throw error;
  }
}

module.exports = {
  createQueue,
  addJob,
};