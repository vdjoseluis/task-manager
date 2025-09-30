# Task Manager Frontend (Angular)

A modern, responsive task management application built with Angular 19 and Angular Material.

## Features

- **User Authentication**: Login and registration with JWT tokens
- **Task Management**: Create, read, update, and delete tasks
- **User Profile**: View and manage user information
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, Material Design interface
- **Real-time Updates**: Instant feedback for user actions

## Prerequisites

Before running this application, make sure you have:

- Node.js (version 18 or higher)
- npm (version 9 or higher)
- The backend NestJS API running on `http://localhost:3000`

## Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend-angular
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:4200`

## Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build the application for production
- `npm run watch` - Build and watch for changes
- `npm test` - Run unit tests

## Project Structure

```
src/
├── app/
│   ├── auth/                    # Authentication components
│   │   ├── login/              # Login component
│   │   └── register/           # Registration component
│   ├── core/                   # Core services and models
│   │   ├── interceptors/       # HTTP interceptors
│   │   ├── models/             # TypeScript interfaces
│   │   └── services/           # API and auth services
│   ├── shared/                 # Shared components
│   │   └── navbar/             # Navigation component
│   ├── tasks/                  # Task management components
│   │   ├── task-form/          # Task creation/editing dialog
│   │   └── task-list/          # Task listing component
│   ├── user/                   # User management components
│   │   └── profile/            # User profile component
│   ├── app.component.*         # Root component
│   ├── app.config.ts           # Application configuration
│   └── app.routes.ts           # Routing configuration
├── environments/               # Environment configurations
└── styles.css                  # Global styles
```

## Key Features

### Authentication
- JWT-based authentication
- Automatic token refresh
- Route guards for protected pages
- Persistent login state

### Task Management
- Create new tasks with title and description
- Mark tasks as complete/incomplete
- Edit existing tasks
- Delete tasks with confirmation
- Visual separation of pending and completed tasks
- Task statistics dashboard

### User Experience
- Responsive design for all screen sizes
- Loading states and error handling
- Success/error notifications
- Intuitive navigation
- Clean, modern interface

## API Integration

The frontend integrates with the NestJS backend API:

- **Authentication**: `/auth/login`, `/users/register`
- **Tasks**: `/tasks` (GET, POST, PATCH, DELETE)
- **User Profile**: `/users/me`

## Environment Configuration

The application uses environment files for configuration:

- `environment.ts` - Development settings
- `environment.prod.ts` - Production settings

Update the `apiUrl` in these files to point to your backend API.

## Technologies Used

- **Angular 19** - Frontend framework
- **Angular Material** - UI component library
- **RxJS** - Reactive programming
- **TypeScript** - Type-safe JavaScript
- **CSS3** - Styling and animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
