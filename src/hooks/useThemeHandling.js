import { useEffect, useState } from 'react'

const useThemeHandling = () => {
    const [theme, setTheme] = useState(localStorage?.getItem("theme"));
    const element = document.documentElement

    useEffect(() => {
        if (localStorage?.getItem("theme") !== "dark") {
            element.classList.remove('dark')
            localStorage.removeItem("theme")
        }
        else {
            element.classList.add('dark')
            localStorage.setItem("theme", "dark")
        }
        switch (theme) {
            case "dark":
                element.classList.add('dark')
                localStorage.setItem("theme", "dark")
                break;
            case "light":
                element.classList.remove('dark')
                localStorage.removeItem("theme")
                break;
            default:
                break
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme]);

    const toggleTheme = () => {
        switch (theme) {
            case "dark":
                setTheme("light")
                break;
            default:
                setTheme("dark")
                break;
        }
    }
  return {
    theme,
    toggleTheme
  }
}

export default useThemeHandling