const contactReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          age : action.age,
          number: action.number
        }
      ]
      default:
      return state
  }
}
export default contactReducer