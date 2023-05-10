import axios from 'axios'
// const loginBaseUrl = `http://localhost:8085/cricket/login`
const loginBaseUrl = `http://localhost:8085/api/auth/authenticate`

const login = async (credentials) => {
  
  const response = await axios.post(loginBaseUrl, credentials)
  window.localStorage.setItem('BearerToken', JSON.stringify(response.data.token))
  return response.data
}

const exportObject = { login }
export default exportObject