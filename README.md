# React Webpack Typescript Redux Sagas React Router Axios Material UI Husky Template

> Template of Javier Garcia

- **[React](https://facebook.github.io/react/)** (18.x)
- **[Webpack](https://webpack.js.org/)** (5.x)
- **[Typescript](https://www.typescriptlang.org/)** (4.x)
- **[Redux Sagas](https://redux-saga.js.org/)** (1.x)
- **[Redux Router Dom](https://reactrouter.com/)** (6.x)
- **[Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)** + [Fast Refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin)
- Image support ([Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader))
- [SASS](http://sass-lang.com/) support
- Production build script
- Code linting ([ESLint](https://github.com/eslint/eslint)) and formatting ([Prettier](https://github.com/prettier/prettier))
- Test frameworks ([Jest](https://facebook.github.io/jest/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro))
- Husky (https://typicode.github.io/husky/#/) precommit (with commit lint https://github.com/conventional-changelog/commitlint/#what-is-commitlint) and prepush (test coverage) configured

## Installation

1. Clone/download repo
2. `npm install` (or `yarn install` for yarn)

## Usage

**Development**

`npm run start:dev`

- Build app continuously (HMR enabled)
- App served @ `http://localhost:8080`

**Production**

`npm run start:prod`

- Build app once (HMR disabled) to `/dist/`
- App served @ `http://localhost:3000`

---

**All commands**

| Command              | Description                                                                   |
| -------------------- | ----------------------------------------------------------------------------- |
| `npm run start:dev`  | Build app continuously (HMR enabled) and serve @ `http://localhost:8080`      |
| `npm run start:prod` | Build app once (HMR disabled) to `/dist/` and serve @ `http://localhost:3000` |
| `npm run build`      | Build app to `/dist/`                                                         |
| `npm run test`       | Run tests                                                                     |
| `npm run lint`       | Run linter                                                                    |
| `npm run lint --fix` | Run linter and fix issues                                                     |
| `npm run start`      | (alias of `npm run start-dev`)                                                |

## See also

- [React Webpack Babel Starter](https://github.com/vikpe/react-webpack-babel-starter)
- [Snowpack](https://github.com/snowpackjs/snowpack)
- [Create React App](https://github.com/facebook/create-react-app)
