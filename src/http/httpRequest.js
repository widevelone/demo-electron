import axios from 'axios'
import config from './config.json'
import { toastOn } from '../store/slices/toast'
// const hostname = window.location.hostname
// axios.defaults.baseURL = `${config?.hostname2 === hostname
//     ? config.requestURL2
//     : config?.hostname === hostname
//       ? config.requestURL
//       : config.requestURL
//   }`

axios.defaults.baseURL = config.urlApi
// const instance = axios.create()

// export function request(method, url, data) {
//   // return instance({ method, url, data })
//   return axios({
//     method,
//     headers: {
//       Authorization: 'Bearer ' + localStorage.getItem('token_seguridad'),
//     },
//     url,
//     data,
//   })
// }
export function requestAuth(method, url, data) {
  return axios({
    method,
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
    url,
    data,
  })
}

export async function requestAuthPaginate(
  method,
  url,
  data,
  paginate,
  setData,
  setStateData,
  setPaginate,
  dispatch
) {
  setStateData('loading')
  let dateFilter = ''
  if (paginate.final !== '' || paginate.initial !== '') {
    dateFilter = `&initial=${paginate.initial}&final=${paginate.final}`
  }
  const urlpaginate = `${url}?pageSize=${paginate.pageSize}&page=${paginate.currentPage}&filterBy=${paginate.filterBy}&filterParam=${paginate.filterParam}${dateFilter}${paginate.filters}`
  return axios({
    method,
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
    url: urlpaginate,
    data,
  })
    .then((response) => {
      setData(response.data)
      if (response.data.data.length > 0) {
        setStateData('')
      }
      else {
        setStateData('empty')

      }
      setPaginate({
        ...paginate,
        totalItems: response.data.totalItems,
        totalPages: response.data.totalPages,
        currentPage: response.data.currentPage,
        pageSize: response.data.pageSize
      })
    }
    )
    .catch(error => {
      dispatch(toastOn({ type: "danger", message: (`Error: ${error?.response?.data?.message || 'error desconocido!'}`) }))
      setStateData('error')
    })
}