import PropTypes from "prop-types";

const Cita = ({ cita, eliminarCita }) => {
  return (
    <div className={"cita"}>
      <p>
        Mascota: <span>{cita.nombre}</span>
      </p>
      <p>
        Propietario: <span>{cita.propietario}</span>
      </p>
      <p>
        Fecha: <span>{cita.fecha}</span>
      </p>
      <p>
        Hora: <span>{cita.hora}</span>
      </p>
      <p>
        Sintomas: <span>{cita.sintomas}</span>
      </p>
      <button
        className={"button eliminar u-full-width"}
        onClick={() => eliminarCita(cita.id)}
      >
        ELiminar Cita
      </button>
    </div>
  );
};

Cita.propTypes = {
  cita: PropTypes.object.isRequired, // cita es de tipo objeto y es obligario
  eliminarCita: PropTypes.func.isRequired, // eliminarCita es de tipo funcion y es obligatorio
};

export default Cita;
