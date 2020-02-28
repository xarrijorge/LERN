import axios from 'axios'

const baseUrl = 'https://pbo-lern.herokuapp.com/messages'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getAll }
