# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

My project steps:

1. Navigating to the project directory before running any commands.

cd WORKS_ITGirls/Internship_17.03-13.04.2025/App_User_Look-up_3/vite-app-user-look-up

2. Initializing a new Vite project with the latest version and start the development server.
	•	Framework: React
	•	Variant: TypeScript

npm create vite@latest. npm run dev

3. Installing Tailwind CSS along with its Vite plugin for styling.

npm install tailwindcss @tailwindcss/vite. npm run dev

4. Installing TypeScript definitions for Node.js to avoid type-related issues.

vite-app-user-look-up % npm install --save-dev @types/node.  npm run dev
 
 VITE v6.2.2  ready in 142 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose

5. This step repeats the previous one and may not be necessary unless the installation failed earlier.

npm install --save-dev @types/node

6. Testing how to add the “button” component from ShadCN UI.

npx shadcn@latest add button. npm run dev
✔ You need to create a components.json file to add components. Proceed? … yes
✔ Which color would you like to use as the base color? › Neutral
✔ Writing components.json.
NB: It looks like you are using React 19. 
Some packages may fail to install due to peer dependency issues in npm (see https://ui.shadcn.com/react-19).

7. Installing React Router for client-side navigation and its TypeScript definitions.

npm install react-router-dom
npm install --save-dev @types/react-router-dom

8. Adding the “card” component from ShadCN UI.

npx shadcn@latest add card

9. Deleting the .vite directory to clear cached dependencies, which may help resolve build issues.

rm -rf node_modules/.vite

10. npm install framer-motion

11. npx shadcn@latest init
find . -name "components.json"
rm ./components.json
npx shadcn@latest init

12.  