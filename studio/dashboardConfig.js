export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6118a295268d21d20629c513',
                  title: 'Sanity Studio',
                  name: 'gfc-studio',
                  apiId: 'c10dea39-9685-4da1-99e8-899598384922'
                },
                {
                  buildHookId: '6118a295fed150246b1f8f51',
                  title: 'Blog Website',
                  name: 'gfc-web',
                  apiId: '436e3075-5d77-4f7f-9c98-4112056e9896'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xoc99x/gfc',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://gfc-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
