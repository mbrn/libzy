const MainPage = require('libzy-lib').MainPage;
const GetStarted = require('./src/pages/docs/get-started.md').default;
const Install = require('./src/pages/docs/install.md').default;
const LiveCodeExample = require('./src/pages/docs/live-code-example.mdx').default;

module.exports = {
  title: 'Libzy',
  subTitle: 'Make documentation faster',
  github: 'https://github.com/mbrn/libzy',  
  githubShort: 'mbrn/libzy',  
  menuTree: [
    {
      path: '',
      component: MainPage,
      data: {
        features: [
          {
            title: 'Easy to start',
            text: 'You can start documentation easily. Just install libzy and create your new documentation project. It is done. Lets do :)',
            button: {
              path: '/docs/get-started',
              text: 'Get Started'
            }
          },
          {
            title: 'MDX Support',
            text: 'You don\'t have to write your pages as code. You can add your pages as md, mdx or react component.',
          },
          {
            title: 'react-live Support',
            text: 'You can add your react components to let user play with it.',
          },
          {
            title: 'Build ready',
            text: 'Libzy is configured ready for ES5 build.',
          },

        ]
      }
    },
    {
      path: 'docs',
      tree: [
        {
          text: 'Get Started',
          path: 'get-started',
          component: GetStarted
        },
        {
          text: 'Install',
          path: 'install',
          component: Install
        },
        {
          text: 'Live Code Example',
          path: 'live-code-example',
          component: LiveCodeExample
        }
      ]
    }
  ],
  theme: {
    palette: {
      primary: {
        main: '#01579b'
      },
      secondary: {
        main: '#e65100',
      },
    }
  },
  options: {
    routerType: 'hash', // hash | browser
  }
}