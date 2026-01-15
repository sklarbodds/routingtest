# React with React Router for Azure Static Web Apps

A basic [React](https://reactjs.org/) site with [React Router](https://reactrouter.com/) built in, configured to work seamlessly with [Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview).

## Features

- ✅ React 16.x with React Router v5
- ✅ Client-side routing with multiple pages (Home, About, Contact)
- ✅ Navigation menu with hover/focus states
- ✅ Configured for Azure Static Web Apps deployment

## Running Locally

```bash
npm install
npm start
```

The app will run at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

The production build will be in the `build/` folder, ready for deployment to Azure Static Web Apps.

## Azure Static Web Apps Configuration

The `staticwebapp.config.json` file includes the necessary `navigationFallback` configuration to ensure all client-side routes work correctly when deployed to Azure Static Web Apps.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
