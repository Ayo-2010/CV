# Project Structure

This document outlines the organized structure of the personal website project.

## Directory Layout

```
personal-website/
├── src/
│   ├── components/           # Reusable HTML components
│   │   ├── navigation.html
│   │   ├── hero.html
│   │   ├── about.html
│   │   ├── experience.html
│   │   ├── skills.html
│   │   ├── projects.html
│   │   ├── testimonials.html
│   │   ├── contact.html
│   │   └── footer.html
│   ├── styles/              # CSS modules
│   │   ├── variables.css    # CSS custom properties and theme variables
│   │   └── base.css         # Base styles, resets, and typography
│   ├── js/                  # JavaScript modules
│   │   ├── main.js          # Entry point, initializes all modules
│   │   ├── navigation.js    # Navigation menu and active link logic
│   │   ├── scroll.js        # Smooth scroll and scroll animations
│   │   └── utils.js         # Utility functions
│   ├── styles.css           # Main component and layout styles
│   ├── script.js            # Original script file (deprecated)
│   └── script.js            # Original stylesheet (deprecated)
├── assets/                  # Images and static assets
├── public/                  # Public files (resume, etc.)
├── index.html               # Main entry point
├── package.json
├── LICENSE
├── README.md
└── STRUCTURE.md            # This file

```

## Key Changes

### 1. Modular CSS
- **variables.css**: Centralized design tokens (colors, spacing, shadows)
- **base.css**: Base styles, typography, and utility classes
- **styles.css**: Component styles and layouts

This separation allows for easy theme customization and maintenance.

### 2. Modular JavaScript
- **main.js**: Entry point that imports and initializes all modules
- **navigation.js**: Handles menu toggle and active link highlighting
- **scroll.js**: Smooth scrolling and intersection observer animations
- **utils.js**: Helper functions like footer year update

Each module has a single responsibility, making code easier to test and maintain.

### 3. Component Files
HTML components are separated into individual files in `src/components/` for reference and potential future template compilation.

## Usage

### Development
```bash
npm run dev
```

### Production Preview
```bash
npm run preview
```

## Styling Approach

The CSS is organized using:
- **Custom properties (CSS variables)** for consistent theming
- **BEM-like naming** for class organization
- **Mobile-first responsive design** with media queries
- **Flexbox and CSS Grid** for layouts

### Adding New Styles
1. If it's a new color/spacing value, add to `variables.css`
2. Base element styles go in `base.css`
3. Component and layout styles go in `styles.css`
4. Use CSS custom properties for theming

## JavaScript Architecture

The JavaScript uses ES6 modules for better code organization:
- Each module exports specific functions
- `main.js` imports and calls initialization functions
- Event listeners are properly cleaned up
- No global state pollution

### Adding New Functionality
1. Create a new module file in `src/js/`
2. Export initialization functions
3. Import in `main.js` and call from `DOMContentLoaded` handler

## Browser Compatibility
- ES6 modules require modern browsers
- Uses CSS Grid and Flexbox
- IntersectionObserver for scroll animations
- Compatible with all modern browsers (Chrome, Firefox, Safari, Edge)

## Future Improvements
- Consider using a build tool (Vite, Webpack) for bundling
- Add CSS preprocessor (SCSS/SASS) for variables and mixins
- Implement component framework if site grows
- Add automated testing for JavaScript modules
