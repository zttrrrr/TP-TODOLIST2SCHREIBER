import React from "react";
import "./TodoButtons.css";

function Boton({ type }) {
  if (type === "Añadir") {
    return <button className="Añadir">Añadir Tarea</button>;
  } else if (type === "Eliminar") {
    return <button className="Eliminar">Eliminar Tarea</button>;
  } else if (type === "Marcar") {
    return <button className="Marcar">Marcar como hecha</button>;
  }
  return null;
}

export default Boton;