import React, { useState } from 'react'
import { LogoTitle } from '../components/link/LogoTitle'
// import logo from "../assets/logo.png"
import logoWhite from "../assets/logoWhite.png"
import { DefaultCard } from '../components/card/DefaultCard'
import { DefaultTitle } from '../components/font/defaultTitle'
import { DefaultAlert } from '../components/alert/DefaultAlert'
import { Form, Formik } from 'formik'
import { Input } from '../components/form/input'
import { DefaultSubmit } from '../components/form/DefaultSubmit'
import { requestAuth } from '../http/httpRequest'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {  loginOn, saveToken, saveUserDetail } from '../store/slices/auth'
import { toastOn } from '../store/slices/toast/toastSlice'

export const Login = () => {
  const [message, setMessage] = useState(false)
  const [textMessage, setTextMessage] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 ">
      <LogoTitle
        to="/login"
        src={logoWhite}
        // text='SOYA SARI'
      />
      <DefaultCard>
        <DefaultTitle text='Inicie sesión en su cuenta' />
        <DefaultAlert
          color='red'
          show={message}
          setShow={setMessage}
          text={textMessage}
        />
        <Formik
          initialValues={{
            codigo: '',
            password: '',
          }}

          // validationSchema={loginScheme}

          onSubmit={async (values) => {
            setMessage(false)
            await requestAuth(
              'post',
              `/auth/login`,
              values
            )
              .then((response) => {
                dispatch(loginOn())
                navigate("/")
                dispatch(toastOn({ type: "success", message: "Inicio de sesión exitoso!" }))
                dispatch(saveToken(response.data.token))
                // console.log(response)
                dispatch(saveUserDetail(response.data.user))
              }
              )
              .catch(error => {
                setMessage(true)
                setTextMessage(error?.response?.data?.message || 'Usuario o contraseña incorrectos!')
                // dispatch(addUserDetail(null))
              })
          }}
        >
          {({ errors, isSubmitting, touched, }) => (
            <Form className="space-y-2 md:space-y-4">
              <Input
                type="text"
                name="codigo"
                id="codigo"
                placeholder="Código de usuario"
                required={true}
                label="Usuario o correo electrónico"
                errorMessage={errors.codigo && touched.codigo ? (
                  <div className="text-xs mt-1 font-semibold text-red-600 dark:text-red-600">{errors.codigo}</div>
                ) : null}
              />
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                required={true}
                label="Contraseña"
                errorMessage={errors.password && touched.password ? (
                  <div className="text-xs mt-1 font-semibold text-red-600 dark:text-red-600">{errors.password}</div>
                ) : null}
              />
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                </div>
                {/* <LinkSimple text={'Forgot password?'} /> */}
              </div>
              <DefaultSubmit
                isloading={isSubmitting}
                text={'Iniciar sesión'}
              />
            </Form>
          )}
        </Formik>
        {/* <LinkLabel
          prevLabel='No tienes una cuenta?'
          to='/register'
          label='Registrate!'
        /> */}
      </DefaultCard>
    </div>
  )
}
