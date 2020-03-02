import axios from 'axios'

const baseUrl = 'https://pbo-lern.herokuapp.com/messages'

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}

const deleteOne = id => {
  axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, deleteOne }
