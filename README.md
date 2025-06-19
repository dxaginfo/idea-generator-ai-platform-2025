# AI Content Idea Generator

An AI-powered web application that helps content creators, marketers, and social media managers generate fresh, engaging content ideas across multiple formats.

## Project Overview

The AI Content Idea Generator leverages artificial intelligence to:

- Generate blog post, video, and social media content ideas
- Analyze trending topics relevant to your industry
- Optimize content with keyword suggestions
- Plan and schedule your content calendar
- Track content performance and engagement

## Key Features

- **AI-Powered Idea Generation**: Get unlimited content ideas for any niche or industry
- **Trend Analysis**: Discover what's popular and trending in your space
- **Keyword Optimization**: Boost SEO with targeted keyword suggestions
- **Content Calendar**: Plan, schedule, and organize your content strategy
- **User Profiles**: Save preferences and favorite ideas for future reference

## Technology Stack

### Frontend
- React.js with TypeScript
- Material-UI for UI components
- Redux for state management
- React Router for navigation

### Backend
- Node.js with Express
- MongoDB for database
- JWT for authentication
- OpenAI API integration

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB database
- OpenAI API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/dxaginfo/idea-generator-ai-platform-2025.git
cd idea-generator-ai-platform-2025
```

2. Set up the backend
```bash
cd backend
npm install
cp .env.example .env  # Configure with your API keys and MongoDB URI
npm run dev
```

3. Set up the frontend
```bash
cd frontend
npm install
cp .env.example .env  # Configure with backend URL
npm start
```

## Project Structure

```
├── frontend/                  # React frontend application
│   ├── public/                # Static files
│   ├── src/                   # React components and logic
│   │   ├── components/        # UI components
│   │   ├── pages/             # Page components
│   │   ├── services/          # API services
│   │   ├── store/             # Redux store
│   │   └── utils/             # Utility functions
│   └── package.json           # Frontend dependencies
│
├── backend/                   # Node.js backend
│   ├── src/                   # Server source code
│   │   ├── controllers/       # Request handlers
│   │   ├── models/            # Database models
│   │   ├── routes/            # API routes
│   │   ├── services/          # Business logic
│   │   └── utils/             # Utility functions
│   └── package.json           # Backend dependencies
│
└── README.md                  # Project documentation
```

## API Documentation

The backend API provides the following endpoints:

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate a user
- `GET /api/ideas/generate` - Generate content ideas
- `GET /api/trends` - Get trending topics
- `POST /api/ideas/save` - Save a generated idea
- `GET /api/ideas` - Get saved ideas
- `GET /api/calendar` - Get content calendar
- `POST /api/calendar` - Add item to calendar

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgements

- OpenAI for their powerful API
- All the open-source libraries that made this project possible