import * as repository from './repository'

export function findAll(params) {
  return repository.fetchAPI({ path: `/todos/`, params })
    .then(res => {
      const response = res

      if (res.error) {
        throw new Error()
      }
      return response
    })
    .catch(() => {
      return []
    })
}

export function findOne(id) {
  const params = { id }
  return repository.fetchAPI({ path: `/todos/`, params })
  .then(res => {
    const response = res

    if (res.error) {
      throw new Error()
    }
    return response
  })
  .catch(() => {
    return []
  })
}

export function create(data) {
  return repository.postAPI({
    path: `/todos/`,
    data,
  })
}

export function update({id, data}) {
  return repository.updateAPI({
    path: `/todos/${id}`,
    data,
  })
}

export function remove(id) {
  return repository.deleteAPI({ path: `/todos/${id}` })
}
