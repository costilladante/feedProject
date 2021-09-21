# 🚀 Feed Project

## Table of Content

  - [About](#about)
  - [Getting started](#getting-started)
  - [Folder structure](#folder-structure)
  - [Technology Stack:](#technology-stack)
## ℹ️ About

This project fetches posts and their respective comments using [JSON Placeholder API](https://jsonplaceholder.typicode.com). Posts are shown a responsive grid. Click in a post to see its details and comments.

🔎 *Preview*:

![Sample](/documents/sample.gif "App Preview")

## 🖥️ Getting started

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Install the dependencies before running the project with `yarn install`.

*Available scripts*:

- `yarn start`: runs the project
- `yarn test`: run tests
- `yarn build`: builds the app into the `/build` folder

## 📁 Folder structure

```
src
├───assets                      -> visual resources like SVG,PNG
├───components                  -> stateless components
│   ├───card
│   ├───comment
│   └───pagination
│
├───hooks
│
├───redux                       -> redux reducers, actions and store
│   ├───actions
│   │   └───__tests__
│   ├───reducers
│   │   └───__tests__
│   └───store.ts
│
├───scss                        -> Sass preprocessor files
├───services                    -> Async functions / API 
│   ├───comments.service.ts
│   └───posts.service.ts
│
├───types                       -> Object Models (interfaces/types)
│
└───views                       -> Main containers / Routes
    ├───home
    │   ├───homeBody
    │   └───homeHeader
    └─── postSection
        └───comments
```

## 🛠️ Technology Stack

These are the main libraries and frameworks that are being used in this project:

- Typescript
- React
- Redux
- React-Router
- Axios
- Sass
- Jest
