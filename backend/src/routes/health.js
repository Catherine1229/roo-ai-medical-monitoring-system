const express = require('express');
const { query } = require('../config/database');
const { logger } = require('../utils/logger');

const router = express.Router();

// Health check endpoint
router.get('/', async (req, res) => {
  try {
    // Test database connection
    await query('SELECT 1');

    res.status(200).json({
      success: true,
      message: 'API is healthy',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      version: '1.0.0'
    });
  } catch (error) {
    logger.error('Health check failed', { error: error.message });
    res.status(503).json({
      success: false,
      message: 'Service unavailable',
      timestamp: new Date().toISOString(),
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Detailed health check
router.get('/detailed', async (req, res) => {
  const health = {
    success: true,
    timestamp: new Date().toISOString(),
    services: {}
  };

  try {
    // Database health
    const start = Date.now();
    await query('SELECT 1');
    health.services.database = {
      status: 'healthy',
      responseTime: Date.now() - start
    };
  } catch (error) {
    health.services.database = {
      status: 'unhealthy',
      error: error.message
    };
    health.success = false;
  }

  // Redis health check (placeholder for future)
  health.services.redis = {
    status: 'not_configured',
    message: 'Redis connection not yet implemented'
  };

  // Background jobs health check (placeholder for future)
  health.services.worker = {
    status: 'not_configured',
    message: 'Background worker not yet implemented'
  };

  const statusCode = health.success ? 200 : 503;
  res.status(statusCode).json(health);
});

module.exports = router;