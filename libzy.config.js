const MainPage = require('./src/pages/main-page').default;
const GetStarted = require('./src/pages/docs/get-started').default;
const Install = require('./src/pages/docs/install').default;

module.exports = {
  title: 'Libzy',
  github: 'https://github.com/mbrn/libzy',  
  menuTree: [
    {
      path: '',
      component: MainPage
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
  ]
}