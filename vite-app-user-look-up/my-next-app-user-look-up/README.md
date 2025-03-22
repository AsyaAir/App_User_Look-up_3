# Test task for 1 Week project: 
Application for viewing users

## Description
It is necessary to create a simple application for displaying a list of users with the ability to view detailed information about each user.

## Tech stack:
- Next.js
- TypeScript
- Tailwind CSS
- Shadcn UI
- API: jsonplaceholder (https://jsonplaceholder.typicode.com)

## Functional requirements:

### Home page (/)
1. Get a list of users from API endpoint: https://jsonplaceholder.typicode.com/users
2. Display users as cards (use the Card component from shadcn)
3. Each card should contain:
- Username
- Email
- Company
- Button or option to go to a detailed page

### User page (/user/[id])
1. Get data of a specific user by ID
2. Display detailed information:
- Full name
- Username
- Email
- Address (street, city)
- Phone
- Website
- Company name
Отправить отзыв
Боковые панели
История
Сохраненные

### My project steps:

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

10. Installing Framer Motion, animation library for React and Next.js.
It allows for smooth and complex animations with an easy-to-use API.
npm install framer-motion

11. Initializing ShadCN UI, a component library for Next.js and React projects. 
npx shadcn@latest init

Searching for the `components.json` file in the project directory.
This file stores the configuration for ShadCN components.
find . -name "components.json"

Deletes the `components.json` file if it exists. 
This is useful when re-initializing ShadCN to reset its configuration.  
rm ./components.json

Re-initializing ShadCN UI after removing the old configuration.
npx shadcn@latest init

12. Creating a new Next.js application with the latest version of Next.js.
This sets up the project with a ready-to-use folder structure,
including support for TypeScript, ESLint, and other best practices. 
The project will be created in the "my-next-app-user-look-up" folder.

npx create-next-app@latest my-next-app-user-look-up

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



