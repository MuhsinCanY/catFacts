import { useEffect, useState } from 'react'
import './App.css'
import { NavLink, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Favorite from './components/Favorite'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite } from './store/actions/favoritesActions'

function App() {
  const dispatch = useDispatch()
  const [fact, setFact] = useState('')
  const favorites = useSelector((store) => store.favorite.favorites)

  console.log(favorites)
  useEffect(() => {
    axios.get('https://catfact.ninja/fact').then(function (response) {
      setFact(`"${response.data.fact}"`)
    })
  }, [])

  const nextButtonHandler = () => {
    axios.get('https://catfact.ninja/fact').then(function (response) {
      setFact(`"${response.data.fact}"`)
    })
  }

  const addFavoriteHandler = () => {
    dispatch(addFavorite(fact))
    console.log(favorites)
  }

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Rastgele
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Favoriler
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <div className="flex flex-col gap-4">
            <div className="p-[40px] bg-white text-gray-600 text-xs italic">
              <h1>{fact}</h1>
            </div>
            <div className="flex flex-row justify-end gap-4">
              <button
                onClick={nextButtonHandler}
                className="rounded-none bg-white select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              >
                Başka bir tane
              </button>
              <button
                className="rounded-none select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
                onClick={addFavoriteHandler}
              >
                Favorilere Ekle
              </button>
            </div>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favorites.map((favFact, i) => (
              <Favorite key={i} fact={favFact} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  )
}

export default App
