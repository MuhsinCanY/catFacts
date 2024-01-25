export const ADD_FAVORİTE = 'ADD_FAVORİTE'
export const DELETE_FAVORİTE = 'DELETE_FAVORİTE'

export const addFavorite = (fact) => {
  return { type: ADD_FAVORİTE, payload: fact }
}

export const deleteFavorite = (fact) => {
  return { type: DELETE_FAVORİTE, payload: fact }
}
