# `React Tailwind Css Stater`

## Steps for creating `react-tailwind-css-stater` with `yarn`

### Create a new react project with yarn

```sh
yarn create react-app react-tailwind-css-stater
```

### Install Tailwind CSS with postcss & autoprefixer

```sh
yarn add -D tailwindcss postcss autoprefixer
```

### Generate `tailwind.config.js` and `postcss.config.js`

```sh
yarn tailwindcss init -p
```

### Modify `tailwind.config.js` file

```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Add tailwind base, components and utilities to `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
