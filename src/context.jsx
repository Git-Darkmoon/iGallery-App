/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react"

export const AppContext = createContext()

export const useGlobalContext = () => useContext(AppContext)

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [userPrompt, setUserPrompt] = useState("landscapes")

  const API_URL = `https://api.unsplash.com/search/photos?client_id=${
    import.meta.env.VITE_API_KEY
  }`

  function toggleDarkMode() {
    const darkMode = !isDarkTheme
    setIsDarkTheme(darkMode)

    const $body = document.querySelector("body")
    $body.classList.toggle("dark-theme", darkMode)
    console.log("hello")
  }

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme)
  }, [])

  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        toggleDarkMode,
        userPrompt,
        setUserPrompt,
        API_URL,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
