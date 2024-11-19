module.exports = (plop) => {
  // create your generators here
  plop.setGenerator('components', {
    description: 'Create a component',
    prompts: [
      { type: 'input', name: 'name', message: "What's your component's name?" }
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: '../src/app/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Components.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/app/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/app/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/app/components/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
