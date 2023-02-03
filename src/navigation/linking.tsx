
export const linking = {
  prefixes: ['demo://app'],
  // Custom function to subscribe to incoming links

  config: {
    screens: {
      Home: {
        path: 'Home'
      },
      AddTask: {
        path: 'AddTask/:id',
        parse: {
          id: (id: any) => `${id}`
        }
      }
    }
  }
}