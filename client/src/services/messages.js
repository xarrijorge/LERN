import axios from 'axios'

// const baseUrl = 'https://pbo-lern.herokuapp.com/messages'
const baseUrl = 'http://localhost:3001/messages'

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request
}

const create = async () => {
  const request = await axios.get(baseUrl)
  return request
}

const deleteOne = (id) => {
  axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, deleteOne }
