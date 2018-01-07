let nextId = 0
export const addContact = (name,age,number) => {
	console.log('name:'+name)
  return {
    type: 'ADD_CONTACT',
    id: nextId++,
    name,
    age,
    number
  }
}