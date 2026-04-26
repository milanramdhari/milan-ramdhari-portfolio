# Milan Ramdhari Portfolio

A personal portfolio website built with React + Vite.

## Stack

- **React 19** — UI components (JSX)
- **Vite 7** — dev server and bundler
- **ESLint 9** — linting with flat config

## Commands

```bash
npm run dev      # start dev server (HMR)
npm run build    # production build → dist/
npm run preview  # preview production build locally
npm run lint     # run ESLint
```

## Project Structure

```
src/
  App.jsx        # root component
  App.css        # root styles
  main.jsx       # entry point
  assets/        # static assets imported by JS

public/
  assets/        # static assets served as-is (images, etc.)
  vite.svg
```

## Notes

- Entry point: `src/main.jsx` mounts `<App />` into `#root`
- Static images (profile, projects) live in `public/assets/`
- No router or state management library installed yet
