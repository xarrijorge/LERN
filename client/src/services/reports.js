import axios from 'axios'

const baseUrl = 'https://pbo-lern.herokuapp.com/reports'

const getAll = async () => {
  const request = await axios.get(baseUrl)

  return request.data
}

const create = async newReport => {
  const request = await axios.post(baseUrl, newReport)

  return request.data
}

const update = async (id, newObject) => {
  const request = await axios.put(`${baseUrl}/${id}`)

  return request.data
}

const deleteOne = id => {
  axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, deleteOne }
