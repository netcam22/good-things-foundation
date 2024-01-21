🧞 Good Things Foundation

by Annette Le Sage version 1.0 (updated 21/1/24)

## Introduction 🧑

This is a demo project for a sample charity website in the form of a Single Page Application. It has been developed with 'Vue' - [Vue](https://vuejs.org/), using 'Vite' - [Vite](https://vitejs.dev/guide/).

## Project Structure

Vue Single-File Components are used which incorporate JavaScript, HTML and CSS into one file. A data-driven approach has been taken in the design, with values stored in the state for page content and some css classes.

Components have been built with reusability in mind, allowing the potential for further extension to use in a component library. An example of this flexibility can be demonstrated in the conditional rendering within the HeadlineBlock component, in which paragraphs and buttons are optional. 

The project uses Vue's store library 'Pinia' - [Pinia](https://pinia.vuejs.org/introduction.html), to enable state to be shared among components.

Vue Router [Vue Router](https://router.vuejs.org/) is used to to create routes for the navigation menu.

The BEM naming convention has been used to create the css for the project. Components have generally been considered as blocks, although in some cases when components are intended to be used as direct children of parent components, they are considered as elements of their parent block. An example of this can be demonstrated in the NavItem component, where the component is clearly a child of NavMenu. The ability to modify css classes in component use enables flexibility in component styling.

## Project Setup

npm install

## Compile and Hot-Reload for Development

npm run dev

## Compile and Minify for Production

npm run build

## Potential for extension

There is potential for components to be separated out further for greater reusability and generic use. An example of this is the opportunity to refactor the button element into a single reusable component, into which preferred css classes and data values could be passed in depending on design and functionality.

Separation of concerns could be developed more extensively. For example, variables for css classes could be separated, with core css for blocks and elements living within the components and modifiers passed into components for flexible reuse.
