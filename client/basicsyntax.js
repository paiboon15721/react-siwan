const user = {
  name: 'My name',
  lastName: 'My Lastname',
}

const { name, lastName } = user

const animal = ['cat', 'dog']

const [mycat, dog] = animal

function useState(initialState) {
  return [initialState, () => 'setState']
}

const [cat, setCat] = useState('catt')

console.log(cat)

