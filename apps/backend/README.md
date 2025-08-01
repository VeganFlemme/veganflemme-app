# 🌱 VeganFlemme Engine

> **API backend for nutrition analysis, menu generation, and vegan meal planning**

The VeganFlemme Engine is a Node.js/Express API that provides intelligent vegan nutrition tools, menu optimization algorithms, and comprehensive nutritional analysis based on ANSES (French health agency) reference values.

## 🌐 Production Deployment

**The VeganFlemme Engine is live and operational:**
- **Production URL**: https://veganflemme-engine.onrender.com
- **API Base**: https://veganflemme-engine.onrender.com/api
- **Health Check**: https://veganflemme-engine.onrender.com/api/health
- **Status**: ✅ All services initialized and running

## 📋 Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [NPM Scripts](#npm-scripts)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Deployment](#deployment)

## 🎯 Overview

### Key Features - Operational in Production
- **Menu Generation**: Vegan menu creation with genetic algorithms ✅ Active
- **Quality Analysis**: Complete Nutri-Score, Eco-Score, and NOVA classification ✅ Running
- **Profile Management**: User profile structure (partial implementation) 🔧 In development
- **Nutrition Data**: ANSES RNP reference data integration ✅ 3,211 foods loaded
- **Health Monitoring**: Comprehensive health check endpoints ✅ Monitored

### Tech Stack
- **Runtime**: Node.js (≥18.0.0)
- **Framework**: Express.js with TypeScript
- **Testing**: Jest with Supertest
- **Logging**: Winston
- **Validation**: Joi
- **Math**: Math.js for nutritional calculations
- **Security**: Helmet, CORS

## 🚀 Quick Start

### Production Access (Recommended)
The API is fully operational in production:
```bash
# Test the live API
curl https://veganflemme-engine.onrender.com/api/health

# Generate a menu in production
curl -X POST https://veganflemme-engine.onrender.com/api/menu/generate \
  -H "Content-Type: application/json" \
  -d '{"people": 2, "budget": "medium", "daysCount": 3}'
```

### Local Development (Optional)

### Prerequisites
- Node.js ≥18.0.0
- npm ≥8.0.0

### Local Installation (For Development Only)
```bash
# Clone the repository (optional - API is live)
cd apps/backend

# Install dependencies
npm install

# Copy environment configuration
cp .env.example .env

# Start development server
npm run dev
```

The local API will be available at `http://localhost:3001/api`

### Health Check (Production or Local)
```bash
# Production
curl https://veganflemme-engine.onrender.com/api/health

# Local development
curl http://localhost:3001/api/health
```

## 📜 NPM Scripts

### Development
```bash
npm run dev           # Start development server with hot reload
npm run build         # Build TypeScript to JavaScript
npm run start         # Start production server
```

### Quality Assurance
```bash
npm run lint          # Run ESLint
npm run lint:fix      # Fix ESLint issues automatically
npm run test          # Run Jest tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

### Build & Deployment
```bash
npm run prebuild         # Clean dist folder
npm run postbuild        # Post-build validation
npm run build:verified   # Type-check and build
npm run build:render     # Build for Render.com deployment
npm run build:production # Production build with all checks
```

### Utilities
```bash
npm run verify-types       # Check TypeScript types
npm run verify-deployment  # Verify deployment readiness
```

## 📁 Project Structure

```
engine/
├── src/                    # Source code
│   ├── controllers/        # Request handlers
│   │   ├── healthController.ts     # Health check endpoints
│   │   ├── menuController.ts       # Menu generation
│   │   ├── nutritionController.ts  # Nutrition analysis (partial)
│   │   ├── profileController.ts    # User profiles (partial)
│   │   └── qualityController.ts    # Quality scoring (complete)
│   ├── middleware/         # Express middleware
│   │   └── errorHandler.ts # Global error handling
│   ├── routes/            # Route definitions
│   │   ├── health.ts      # Health endpoints
│   │   ├── menu.ts        # Menu endpoints
│   │   ├── nutrition.ts   # Nutrition endpoints
│   │   ├── profile.ts     # Profile endpoints
│   │   └── quality.ts     # Quality endpoints
│   ├── services/          # Business logic
│   │   ├── menuOptimizationService.ts  # Menu algorithms
│   │   ├── profileService.ts           # Profile management (partial)
│   │   └── qualityScorerService.ts     # Quality analysis (complete)
│   ├── utils/             # Utilities
│   │   └── logger.ts      # Winston logger setup
│   ├── app.ts             # Express app configuration
│   └── index.ts           # Server entry point
├── __tests__/             # Test files
│   ├── health.test.ts     # Health endpoint tests
│   └── menu.test.ts       # Menu endpoint tests
├── scripts/               # Build and deployment scripts
│   ├── build-render.sh    # Render.com build script
│   ├── verify-types.sh    # TypeScript verification
│   └── verify-deployment.sh # Deployment checks
├── coverage/              # Test coverage reports (generated)
├── dist/                  # Compiled JavaScript (generated)
├── .env.example           # Environment variables template
├── .eslintrc.js          # ESLint configuration
├── jest.config.js        # Jest configuration
├── jest.setup.js         # Jest setup
├── tsconfig.json         # TypeScript configuration
├── tsconfig.test.json    # TypeScript test configuration
├── package.json          # Dependencies and scripts
└── API.md               # API documentation
```

## 🔧 Environment Variables

### Core Configuration
```bash
# Server
NODE_ENV=development          # Environment (development|production)
PORT=3001                    # Server port
FRONTEND_URL=http://localhost:3000  # Frontend URL for CORS

# Logging
LOG_LEVEL=info              # Logging level (error|warn|info|debug)
```

### Optional Integrations
```bash
# External APIs (future features)
CIQUAL_API_KEY=your_key     # French food composition database
OPENFOODFACTS_API_KEY=your_key  # Open Food Facts API

# Database (when implemented)
DATABASE_URL=postgresql://...   # PostgreSQL connection
REDIS_URL=redis://...          # Redis for caching

# Email Services (notifications)
SENDGRID_API_KEY=your_key      # SendGrid for emails
MAILGUN_API_KEY=your_key       # Mailgun alternative

# Security (production)
JWT_SECRET=your_secret         # JWT token signing
ENCRYPTION_KEY=your_key        # Data encryption

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000    # Rate limit window (15 min)
RATE_LIMIT_MAX_REQUESTS=100    # Max requests per window
```

### Feature Flags
```bash
# Features
ENABLE_MENU_GENERATION=true    # Enable menu generation
ENABLE_CART_BUILDER=true       # Enable shopping cart features
ENABLE_ANALYTICS=true          # Enable analytics tracking
```

### ⚠️ Security Notes
- Never commit real API keys or secrets to version control
- Use `.env.example` for documentation only
- Set strong `JWT_SECRET` and `ENCRYPTION_KEY` in production
- Review all environment variables before deployment

## 📚 API Documentation

Comprehensive API documentation is available in [`API.md`](./API.md).

### Quick API Overview
- **Base URL**: `http://localhost:3001/api` (development)
- **Health Check**: `GET /health` ✅ (fully tested)
- **Menu Generation**: `POST /menu/generate` ✅ (functional with tests)
- **Quality Analysis**: `POST /quality/analyze` ✅ (complete with 8 endpoints)
- **Profile Management**: CRUD operations on `/profile/*` 🟡 (partial implementation)
- **Nutrition Analysis**: `GET /nutrition/rnp` 🟡 (data only, limited logic)

### Example API Call
```bash
# Generate a vegan menu
curl -X POST http://localhost:3001/api/menu/generate \
  -H "Content-Type: application/json" \
  -d '{
    "people": 2,
    "budget": "medium",
    "cookingTime": "medium",
    "restrictions": 1,
    "daysCount": 7,
    "userId": "demo_user"
  }'
```

## 🧪 Testing

### Test Structure
- Unit tests for controllers and services
- Integration tests for API endpoints
- Coverage reporting with Jest

### Running Tests
```bash
# Run all tests
npm test

# Watch mode for development
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Coverage
Current coverage targets:
- **Statements**: >80%
- **Branches**: >70%
- **Functions**: >80%
- **Lines**: >80%

## 🚀 Deployment

### Render.com (Production)
The engine is deployed on Render.com with automatic deployments from the `main` branch.

```bash
# Build for production
npm run build:production

# Start production server
npm start
```

### Environment Setup
1. Set all required environment variables in Render.com dashboard
2. Ensure `NODE_ENV=production`
3. Configure health check endpoint: `/api/health`

### Health Monitoring
- **Health Check**: `GET /api/health`
- **Detailed Health**: `GET /api/health/detailed`
- **Uptime Monitoring**: Configured via Render.com

## 🔍 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process on port 3001
lsof -ti:3001 | xargs kill -9
```

**TypeScript compilation errors**
```bash
# Verify types
npm run verify-types

# Clean build
rm -rf dist && npm run build
```

**Test failures**
```bash
# Run tests with verbose output
npm test -- --verbose

# Run specific test file
npm test health.test.ts
```

### Debug Mode
```bash
# Enable debug logging
LOG_LEVEL=debug npm run dev
```

## 🤝 Contributing

1. Follow TypeScript strict mode guidelines
2. Maintain test coverage above 80%
3. Use ESLint configuration provided
4. Write meaningful commit messages
5. Update API documentation for new endpoints

## 📄 License

MIT License - see [LICENSE](../LICENSE) for details.

---

> **VeganFlemme Engine** - Powering intelligent vegan nutrition 🌱