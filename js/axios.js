import axios from 'axios'

let instance = axios.create({})

// Add request interceptor
instance.interceptors.request.use(
  // Do something before request is sent
  config => {
    config.headers = {
      test: 'testAxios'
    }
    return config
  },
  // Do something with request error
  error => {
    return Promise.reject(error)
  }
)

// Add response interceptor
instance.interceptors.response.use(
  // Do something with response data
  response => {
    return response
  },
  // Do something with response error
  error => {
    return Promise.reject(error)
  }
)

// instance.get('http://yapi.sankuai.com/mock/13712/sortConfig/{sortitem}/{processtype}/{nodename}')
//   .then(response => console.log(response.data))

instance.put('http://yapi.sankuai.com/mock/13712/sortConfig/{sortitem}/{processtype}/{nodename}')
  .then(response => console.log(response))
  .catch(e => console.log(e))
