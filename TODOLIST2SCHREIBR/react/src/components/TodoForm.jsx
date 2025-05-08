import React from "react";
import "./TodoForm.css"
import Boton from "./TodoButtons";
function Form (){
    return(
        <div>
        <h1>Mi Lista de Tareas</h1>
            <form id="todo-form">
                <input type="text" id="new-task" placeholder="Agregar nueva tarea" required />
                <Boton type="Añadir"/>
            </form>
    </div>
    )

}
export default Form