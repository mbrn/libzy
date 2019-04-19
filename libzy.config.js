const MainPage = require('./src/pages/main-page').default;
const GetStarted = require('./src/pages/docs/get-started.md').default;
const Install = require('./src/pages/docs/install.md').default;

module.exports = {
  title: 'Libzy',
  subTitle: 'Make documentation faster',
  github: 'https://github.com/mbrn/libzy',  
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
            text: 'Libzy is configured ready for ES5 build. In addition, it supports scss.',
          },

        ]
      }
    },
    {
      path: 'docs',
      tree: [
        {
          icon: 'save',
          text: 'Get Started',
          path: 'get-started',
          component: GetStarted
        },
        {
          icon: 'setup',
          text: 'Install',
          path: 'install',
          component: Install
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