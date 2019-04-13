const MainPage = require('./src/pages/main-page').default;
const GetStarted = require('./src/pages/docs/get-started').default;

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
          text: 'page1',
          path: 'get-started',
          component: GetStarted
        }
      ]
    }
  ]
}