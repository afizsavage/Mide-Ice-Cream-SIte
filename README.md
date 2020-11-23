# Mide's Ice Cream

Mide's Ice Cream is a static website built with GatsbyJs. Users can order ice cream or cake through the site, see available flavours, get direction to a nearby Mide's Ice Cream shop, contact the website and sign up for newsletter.

## Project Status

This project is currently in development. Site Footer has been completed, currently working on the site Header.

## 🚀 Quick start

### Cloning the Repository.

1.  First, navigate to the directory that you would like to clone the repository into using commands like
    - cd: to change your working directory.
    - cd ../ to "go back" a level in your directory tree.
2.  Next, clone the remote repository and create a local copy on your machine using this command:

- git clone https://github.com/afizsavage/Mide-Ice-Cream-SIte

3. Now you can see the contents of the remote repository on your machine by moving into the newly cloned directory:

- cd Mide-Ice-Cream-SIte/
- ls -la

### 🧐 File Structure.

A quick look at the top-level files and directories you'll see in the project.

    .
    ├── node_modules
    ├── public
    ├── src
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/public`**: This directory contains all static elements of the website.

3.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

4.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5.  **`.prettierignore`**: This file tells
    Prettier which files it should not track / not format.

6.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

7.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

8.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

9.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

10. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

11. **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

12. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

13. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

14. **`README.md`**: A text file containing useful reference information about your project.

### Usage.

**Note**: **Use Node v14.0.0**

#### Available Scripts

In the project directory, you can run:

**npm start**

Runs the app in the development mode.
Open http://localhost:8000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

**npm test**

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

**npm run build**

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.
