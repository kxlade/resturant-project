# Restaurant Project

A food and restaurant discovery website built with React and Vite. Browse food collections and themed menus, explore dishes, save favourites to a shortlist, and visit the site's newsletter, offers, and shop pages.

## Features

- Home page with featured food and navigation to the site's sections
- Dish collections for comfort food, Italian dishes, global street food, healthy modern food, new dishes, and offers
- Shortlist controls for saving dishes while browsing
- About, newsletter, and shop sections
- Reusable React components and locally stored food imagery

## Getting started

### Requirements

- Node.js
- npm (included with Node.js)

### Install and run

```bash
git clone https://github.com/kxlade/resturant-project.git
cd resturant-project
npm install
npm run dev
```

Vite prints a local URL in the terminal. Open it in your browser to view the site. The development server supports hot module replacement, so changes appear as you work.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the project with ESLint |

## Project structure

```text
public/             Static public assets
src/
  assets/           Food photography and other imported assets
  components/       Shared site sections and interface components
  pages/            Food collections and supporting pages
  App.jsx           Page selection and shared shortlist state
  main.jsx          React application entry point
```

## Built with

- React
- Vite
- Font Awesome icons
- Plain CSS

## Notes

This repository contains the front-end application. The shortlist is held in React state while the app is open; it is not saved across page reloads. To contribute, create a branch, make your changes, and open a pull request.
