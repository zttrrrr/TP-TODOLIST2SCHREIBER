import React from "react";
import Boton from "./TodoButtons";
import "./TodoItem.css";

function Item({ tarea, estado, fecha }) {
  return (
    <div className="todo-item">
      <p className="tarea">{tarea}</p>
      <p className={`estado ${estado ? "completada" : "pendiente"}`}>
        {estado ? "Completada" : "Pendiente"}
      </p>
      <p className="fecha">{fecha}</p>
      <Boton type="Marcar"/>
      <Boton type="Eliminar" />
    </div>
  );
}

export default Item;
