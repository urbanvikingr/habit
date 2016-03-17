import DATABASEURL from '../constants/databaseUrl'

export const createDocument = data => {
  console.log('createDocument', data)
  return fetch(DATABASEURL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
