import React from "react";
import "./TodoList.css"
import Item from "./TodoItem";
function List (){
    return (
        <div>
            <Item tarea="Estudiar React" estado={true} fecha="2025-04-22" />
            <Item tarea="Estudiar Fuentes" estado={false} fecha="2025-04-23" />
        </div>
    )
    
}
export default List;