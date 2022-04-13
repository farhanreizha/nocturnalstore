import axios from 'axios'

const apiUrl = 'https://fakestoreapi.com'

const errorResponseHandler = (err) => {
  return Promise.reject(err)
}

const getInstance = () => {
  const instance = axios.create({
    baseURL: apiUrl,
    timeout: 60000,
  })

  instance.interceptors.response.use((response) => response, errorResponseHandler)

  return instance
}

const routes = {
  getUsers: () => `/users`,
  getProducts: () => `/products`,
}

export { apiUrl, getInstance, routes }
