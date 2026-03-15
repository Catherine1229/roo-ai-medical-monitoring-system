import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './styles/App.css';

// Placeholder components - to be implemented in Phase 2+
const Dashboard = () => (
  <div className="dashboard">
    <h1>AI Medical Monitoring System</h1>
    <p>Dashboard coming in Phase 2...</p>
    <div className="status-cards">
      <div className="status-card">
        <h3>System Status</h3>
        <p>✅ Backend API: Connected</p>
        <p>⏳ Authentication: Phase 2</p>
        <p>⏳ Patient Management: Phase 2</p>
        <p>⏳ Vital Signs: Phase 2</p>
      </div>
    </div>
  </div>
);

const Login = () => (
  <div className="login">
    <h2>Login</h2>
    <p>Authentication system coming in Phase 2...</p>
  </div>
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>AI Medical Monitoring System</h1>
            <nav>
              <a href="/">Dashboard</a>
              <a href="/login">Login</a>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <footer>
            <p>Phase 1: Foundation Complete - Ready for Phase 2</p>
          </footer>
        </div>
      </Router>
    </Provider>
  );
}

export default App;