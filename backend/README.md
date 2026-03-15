# AI Medical Monitoring System - Backend

Backend API service for the AI Medical Monitoring System built with Node.js and Express.

## Features

- RESTful API endpoints
- PostgreSQL database integration
- JWT authentication (framework ready)
- Winston logging
- Health check endpoints
- Docker support
- Comprehensive testing with Jest

## Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL 12+
- Redis (for future background jobs)

### Installation

1. Clone the repository and navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your database credentials
```

4. Start PostgreSQL and create database:
```bash
createdb medical_monitoring
```

5. Run database migrations:
```bash
npm run migrate
```

6. Start the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3001`

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## API Endpoints

### Health Check
- `GET /api/health` - Basic health check
- `GET /api/health/detailed` - Detailed health check with service status

### Future Endpoints (Phase 2+)
- `POST /api/auth/login` - User authentication
- `GET /api/patients` - List patients
- `POST /api/patients` - Create patient
- `GET /api/vital-signs` - Get vital signs
- `POST /api/vital-signs` - Submit vital signs

## Project Structure

```
backend/
├── src/
│   ├── config/          # Database and app configuration
│   ├── middleware/      # Express middleware
│   ├── models/          # Database models
│   ├── routes/          # API route handlers
│   ├── services/        # Business logic services
│   ├── utils/           # Utility functions
│   └── index.js         # Application entry point
├── db/
│   ├── migrations/      # Database migration files
│   ├── seeds/           # Database seed data
│   └── schema.sql       # Complete database schema
├── tests/               # Test files
├── .env.example         # Environment variables template
├── package.json         # Dependencies and scripts
├── jest.config.js       # Jest testing configuration
└── .eslintrc.json       # ESLint configuration
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | development |
| `PORT` | Server port | 3001 |
| `DB_HOST` | PostgreSQL host | localhost |
| `DB_PORT` | PostgreSQL port | 5432 |
| `DB_NAME` | Database name | medical_monitoring |
| `DB_USER` | Database user | postgres |
| `DB_PASSWORD` | Database password | password |
| `JWT_SECRET` | JWT signing secret | (required) |
| `LOG_LEVEL` | Logging level | info |

## Development

### Running Tests
```bash
npm test
```

### Code Linting
```bash
npm run lint
npm run lint:fix
```

### Database Management
```bash
# Run migrations
npm run migrate

# Seed database
npm run seed
```

## Docker Support

Build and run with Docker:
```bash
docker build -t medical-monitoring-backend .
docker run -p 3001:3001 medical-monitoring-backend
```

## Contributing

1. Follow the existing code style
2. Write tests for new features
3. Update documentation as needed
4. Ensure all tests pass before submitting PR

## License

MIT