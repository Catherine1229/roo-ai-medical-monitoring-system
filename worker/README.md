# AI Medical Monitoring System - Worker

Background job processing service for the AI Medical Monitoring System using Bull queue and Redis.

## Features

- Bull queue for reliable job processing
- Redis-backed job storage
- Configurable concurrency and retry logic
- Comprehensive logging with Winston
- Health monitoring and metrics
- Graceful shutdown handling

## Quick Start

### Prerequisites

- Node.js 18+
- Redis server
- PostgreSQL database

### Installation

1. Navigate to worker directory:
```bash
cd worker
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your Redis and database credentials
```

4. Start the worker:
```bash
npm run dev
```

## Available Scripts

- `npm start` - Start production worker
- `npm run dev` - Start development worker with nodemon
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## Project Structure

```
worker/
├── src/
│   ├── jobs/               # Job processor classes
│   │   └── BaseJobProcessor.js
│   ├── utils/              # Utility functions
│   │   ├── logger.js       # Winston logger configuration
│   │   └── queue.js        # Bull queue utilities
│   └── index.js            # Worker entry point
├── .env.example            # Environment variables template
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | development |
| `REDIS_HOST` | Redis server host | localhost |
| `REDIS_PORT` | Redis server port | 6379 |
| `REDIS_PASSWORD` | Redis password | (empty) |
| `DB_HOST` | PostgreSQL host | localhost |
| `DB_PORT` | PostgreSQL port | 5432 |
| `DB_NAME` | Database name | medical_monitoring |
| `DB_USER` | Database user | postgres |
| `DB_PASSWORD` | Database password | password |
| `MAX_JOB_CONCURRENCY` | Max concurrent jobs | 5 |
| `LOG_LEVEL` | Logging level | info |

## Job Types (Phase 2+)

### Vital Signs Analysis
- **Queue**: `vital-signs-analysis`
- **Purpose**: Analyze patient vital signs for anomalies
- **Input**: `{ patientId, vitalSigns: [...] }`
- **Output**: `{ patientId, anomaliesDetected, alertsGenerated }`

### Report Generation
- **Queue**: `report-generation`
- **Purpose**: Generate periodic reports
- **Input**: `{ reportType, dateRange, filters }`
- **Output**: `{ reportId, fileUrl, generatedAt }`

### Data Cleanup
- **Queue**: `data-cleanup`
- **Purpose**: Remove old data based on retention policies
- **Input**: `{ retentionDays, dataTypes }`
- **Output**: `{ recordsRemoved, cleanedAt }`

## Development

### Adding New Job Types

1. Create a new job processor class extending `BaseJobProcessor`
2. Implement the `process(job)` method
3. Add the processor to the `jobProcessors` object in `index.js`
4. Create a corresponding queue in the worker initialization

### Testing Jobs

```javascript
// Example test for a job processor
const { createQueue, addJob } = require('./src/utils/queue');
const AnalyzePatientVitalsJob = require('./src/jobs/AnalyzePatientVitalsJob');

const queue = createQueue('test-queue', AnalyzePatientVitalsJob.prototype.process);
await addJob(queue, { patientId: '123', vitalSigns: [...] });
```

### Monitoring

The worker logs all job processing activity. Monitor the logs for:
- Job completion/failure rates
- Processing times
- Error patterns
- Queue backlogs

## Docker Support

Build and run with Docker:
```bash
docker build -t medical-monitoring-worker .
docker run -e REDIS_HOST=host.docker.internal medical-monitoring-worker
```

## Scaling

For production deployment:
- Run multiple worker instances behind a load balancer
- Use Redis cluster for high availability
- Monitor queue depths and processing rates
- Implement circuit breakers for external dependencies

## Contributing

1. Follow the existing job processor pattern
2. Add comprehensive error handling
3. Include logging for all significant operations
4. Write tests for new job types
5. Update documentation

## License

MIT