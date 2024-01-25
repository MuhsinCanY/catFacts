import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key))
    } else {
      return initialValue
    }
  })

  const changeValue = (newValue) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [value, changeValue]
}
