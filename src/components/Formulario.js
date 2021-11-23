import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Formulario = ({ crearCita }) => {
  // Crear state para los datos de cita:
  const [cita, actualizarCita] = useState({
    nombre: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  // Crear state para los errores:
  const [error, actualizarError] = useState(false);

  // Obtener los datos de los inputs y actualizar el state de cita:
  const actualizarState = (e) => {
    // Agrega a cita el valor anterior + el valor actual:
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // Destructuring de los datos de cita
  const { nombre, propietario, fecha, hora, sintomas } = cita;

  // Validar formulario:
  const submitCita = (e) => {
    // Detener submit:
    e.preventDefault();

    // Si algun input esta vacio:
    if (
      nombre.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      // Agregar msj de error:
      actualizarError(true);
      return;
    }
    // Eliminar el msj previo de error:
    actualizarError(false);

    // Asignar un ID (utilizando UUID):
    cita.id = uuidv4();

    // Crear la cita:
    crearCita(cita);

    // Reiniciar el formulario:
    actualizarCita({
      nombre: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };
  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="nombre"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={nombre}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño Mascota"
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Enviar
        </button>
      </form>
    </Fragment>
  );
};

// Los PropTypes son una forma de documentar los componentes:
Formulario.propTypes = {
  // crearCita es de tipo funcion y es obligatoria:
  crearCita: PropTypes.func.isRequired,
};

export default Formulario;
