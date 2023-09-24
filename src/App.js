import React, { useEffect } from "react";
import useClientesApi from "./server/clientes.api";
import { requestDefaultApi } from "./server/requestApi";
import { Field, Form, Formik } from "formik";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const {
    handleSubmit,
    handleEdit,
    handleDelete,
    data,
    setData,
  } = useClientesApi({ generalApi: 'clientes' })

  useEffect(() => {
    requestDefaultApi('clientes', setData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="App">
        <h1>Clientes</h1>
        <Formik
          initialValues={{
            nombre: '',
            descripcion: '',
            telefono: '',
          }}

          onSubmit={async (values, { resetForm }) => {
            handleSubmit('POST', 'clientes', values)
            resetForm()
          }}
          onReset={() => console.log("reset")}
        >
          {() => (
            <Form className="space-y-2 md:space-y-4">
              <Field
                type="text"
                name="nombre"
                placeholder="Código de usuario"
                required={true}
              />
              <Field
                type="text"
                name="descripcion"
                placeholder="Código de usuario"
                required={true}
              />
              <Field
                type="text"
                name="telefono"
                placeholder="Código de usuario"
                required={true}
              />

              <button type="submit">guardar</button>
            </Form>
          )}
        </Formik>
        <Link to='home'>
          ir a home
        </Link>
        <br />
        <Link to='productos'>
          productos
        </Link>
        <br />
        <Link to='/'>
          volver
        </Link>
        <ul>
          {data.map((i) => (
            <li key={i.id}>
              <div>ID: <span className="font-bold">{i.id}</span></div>
              <div>Codigo: <span className="font-bold">{i.codigo}</span></div>
              <div>Nombre: <span className="font-bold">{i.nombre}</span></div>
              <div>Descripcion: <span className="font-bold">{i.descripcion}</span></div>
              <div>Telefono: <span className="font-bold">{i.telefono}</span></div>
              <button onClick={() => handleEdit(i)}>Editar</button>
              <button onClick={() => handleDelete('DELETE', `clientes/${i.id}`)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
      <Routes>
        <Route index path='/home' element={<div>home page</div>} />
        <Route index path='/productos' element={<div>productos</div>} />
      </Routes>
    </>
  );
}

export default App;
