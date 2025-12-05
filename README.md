# Pomodoro Timer

A beautiful Pomodoro timer application built with React, TypeScript, and Tailwind CSS.

## Features

- 🍅 Pomodoro timer (25 minutes)
- ☕ Short break (5 minutes)
- 🏖️ Long break (15 minutes)
- 🎨 Beautiful, modern UI design
- 📱 Responsive design

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
pomodoro-2/
├── src/
│   ├── components/
│   │   └── Timer.tsx      # Timer component with circular progress
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles with Tailwind
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.ts          # Vite configuration
```

## Technologies Used

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server

## Notes

- Image assets are currently loaded from Figma's CDN. These URLs expire after 7 days. For production, consider downloading and hosting these assets locally.

