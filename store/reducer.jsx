const initialState = {
  todos: [
    {
      id: 0,
      text: undefined,
      completed: false,
    },
  ],
}

export const reducer = (state = initialState.todos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(state)
      console.log('ふが')
      return {
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false,
          },
        ],
      }
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(e => {
          console.log(e)
          console.log(action)
          return e.id !== action.id
            ? e
            : {
                // 対象のidだけcompletedを反転
                ...e,
                completed: !e.completed,
              }
        }),
      }
    default:
      console.log('初期')
      return state
  }
}
