import axios from 'axios'

// const setAsync = promisify(client.set).bind(client)

// const baseUrl = 'https://pbo-lern.herokuapp.com/reports'
const baseUrl = 'http://localhost:3001/reports'

const getAll = async () => {
  const request = await axios.get(baseUrl)

  return request
}

const create = async (newReport) => {
  const request = await axios.post(baseUrl, newReport)

  return request
}

const update = async (id, newObject) => {
  const request = await axios.put(`${baseUrl}/${id}`)

  return request
}

const deleteOne = async (id) => {
  await axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, deleteOne }
