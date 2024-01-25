import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux'
import logger from 'redux-logger'
import favoritesReducer from './reducers/favoritesReducer'

export const reducers = combineReducers({
  favorite: favoritesReducer,
})

export const myStore = createStore(reducers, applyMiddleware(logger))
