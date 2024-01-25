import { ADD_FAVORİTE, DELETE_FAVORİTE } from '../actions/favoritesActions'

const initialState = {
  favorites: [],
}

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORİTE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }
    case DELETE_FAVORİTE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item),
      }
    default:
      return state
  }
}

export default favoritesReducer
