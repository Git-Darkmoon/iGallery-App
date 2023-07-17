import { createContext, useContext, useEffect, useState } from "react"

export const AppContext = createContext()

export const useGlobalContext = () => useContext(AppContext)

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

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
    <AppContext.Provider value={{ isDarkTheme, toggleDarkMode }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
