import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  //-- Citas en local storage --
  // Chequear si el localStorage tiene alguna cita:
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));

  // Si citasIniciales es null, crear un arreglo vacio:
  if (citasIniciales === null) {
    citasIniciales = [];
  }

  // Arreglo de citas: citas se inicia con el valor de citasIniciales
  const [citas, guardarCitas] = useState(citasIniciales);

  //-- Use Effect reacciona cuando el componente este listo y/o haya cambios en el state --
  useEffect(() => {
    // Cuando detecta un cambio en citas agrega citas al localStorage;
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  // Funcion que toma las citas actuales y agrega la nueva:
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  // Funcion que elimina las citas
  function eliminarCita(citaID) {
    console.log("Eliminando Cita...", citaID);
    // Obtener todas las citas que tengan un ID diferente a citaID:
    const nuevaCitas = citas.filter((elemento) => {
      return elemento.id !== citaID;
    });
    // Agregar el nuevo arreglo de citas
    guardarCitas(nuevaCitas);
  }
  // Mensaje condicional
  const titulo = citas.length > 0 ? "Administra tus citas" : "Agrega una cita";

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container ">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((elemento) => (
              <Cita
                key={elemento.id}
                cita={elemento}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
