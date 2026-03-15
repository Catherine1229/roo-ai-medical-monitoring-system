# AI Medical Monitoring System - Frontend

React-based dashboard for the AI Medical Monitoring System providing real-time patient monitoring and alert management.

## Features

- React 18 with modern hooks
- Redux Toolkit for state management
- Responsive dashboard design
- Real-time data visualization (framework ready)
- Authentication UI (framework ready)
- Patient management interface (framework ready)
- Alert monitoring system (framework ready)

## Quick Start

### Prerequisites

- Node.js 16+
- Backend API running on port 3001

### Installation

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env if needed (defaults should work for development)
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## Project Structure

```
frontend/
├── public/
│   ├── index.html          # Main HTML template
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page components
│   ├── services/           # API service functions
│   ├── store/              # Redux store and slices
│   ├── styles/             # CSS stylesheets
│   ├── utils/              # Utility functions
│   ├── App.js              # Main application component
│   ├── App.test.js         # Application tests
│   └── index.js            # Application entry point
├── .env.example            # Environment variables template
└── package.json            # Dependencies and scripts
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `REACT_APP_API_BASE_URL` | Backend API URL | http://localhost:3001/api |
| `REACT_APP_API_TIMEOUT` | API request timeout | 10000 |
| `REACT_APP_NAME` | Application name | AI Medical Monitoring System |

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

### Building for Production
```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## Component Architecture

### Current Phase 1 Components
- `App.js` - Main application with routing
- Placeholder components for future features

### Phase 2+ Components (Planned)
- `LoginForm` - User authentication
- `PatientList` - Patient overview table
- `PatientDetail` - Individual patient view
- `VitalSignsChart` - Real-time vital signs visualization
- `AlertsPanel` - Active alerts display
- `Dashboard` - Main monitoring dashboard

## State Management

Uses Redux Toolkit with the following slices (Phase 2+):
- `authSlice` - Authentication state
- `patientsSlice` - Patient data management
- `vitalsSlice` - Vital signs data
- `alertsSlice` - Alert management

## API Integration

Axios-based API client with:
- Automatic token attachment (Phase 2)
- Error handling and retries
- Request/response interceptors
- Timeout configuration

## Styling

- CSS modules for component-scoped styles
- Responsive design principles
- Accessible color schemes
- Mobile-first approach

## Testing

- Jest for unit testing
- React Testing Library for component testing
- API mocking for integration tests
- Coverage reporting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Follow the existing code structure
2. Write tests for new components
3. Use ESLint and follow the style guide
4. Ensure responsive design
5. Test across supported browsers

## License

MIT