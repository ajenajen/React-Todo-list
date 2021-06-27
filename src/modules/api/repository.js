import axios from 'axios'

export function fetchAPI({ apiUrl = process.env.API_URL, path, params }) {
  return axios({
    baseURL: `${apiUrl}${path}`,
    timeout: 5000,
    ...params,
  }).then(({ data }) => data)
}

export function postAPI({ apiUrl = process.env.API_URL, path, params, data }) {
  return axios({
    method: 'POST',
    baseURL: `${apiUrl}${path}`,
    timeout: 5000,
    data,
    ...params,
  }).then(({ data }) => data)
}

export function updateAPI({ apiUrl = process.env.API_URL, path, params, data }) {
  return axios({
    method: 'PUT',
    baseURL: `${apiUrl}${path}`,
    timeout: 5000,
    data,
    ...params,
  }).then(({ data }) => data)
}


export function deleteAPI({ apiUrl = process.env.API_URL, path, params }) {
  return axios({
    method: 'DELETE',
    baseURL: `${apiUrl}${path}`,
    timeout: 5000,
    ...params,
  }).then(({ data }) => data)
}
