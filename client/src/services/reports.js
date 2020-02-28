import axios from 'axios'

const baseUrl = 'https://pbo-lern.herokuapp.com/reports'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newReport => {
  const requesst = axios.post(baseUrl, newReport)

  return requesst.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`)

  return request.then(response => response.data)
}

const deleteOne = id => {
  axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, deleteOne }
