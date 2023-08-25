import { useEffect } from "react";
import { AppRouter } from "./router/AppRouter";
import { requestAuth } from "./http/httpRequest";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginOn, loginOut, removeToken, saveUserDetail } from "./store/slices/auth";
import { ToastContainer } from "react-toastify";

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const element = document.documentElement

  const auth = async () => {
    if (localStorage?.getItem("token")) {

      await requestAuth(
        'get',
        `/user/Detail`,
        null
      )
        .then((response) => {
          dispatch(loginOn())
          dispatch(saveUserDetail(response.data))
          // navigate("/")
          // dispatch(toastOn({ type: "success", message: "Registro exitoso!" }))
          // dispatch(saveToken(response.data.token))

        }
        )
        .catch(error => {
          dispatch(loginOut())
          dispatch(removeToken())
          navigate("/login")
          // dispatch(toastOn({ type: "danger", message: "Sesión expirada!" }))
          dispatch(saveUserDetail(null))
          localStorage.removeItem("token")
        })
    }
  }

  useEffect(() => {
    auth()

    if (localStorage?.getItem("theme") !== "dark") {
      element.classList.remove('dark')
      localStorage.removeItem("theme")
    }
    else {
      element.classList.add('dark')
      localStorage.setItem("theme", "dark")
    }
    switch (localStorage.getItem("theme")) {
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
  }, []);
  return (
    <div>
      <AppRouter />
      <ToastContainer />
    </div>
  );
}

export default App;