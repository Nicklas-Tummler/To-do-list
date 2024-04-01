import React from "react"
import { useState } from "react"

const Todo = () => {
    const [tasks, setTask] = useState(["Games"])
    const [newTask, setNewTask] = useState("")
    const [higlight, setHiglight] = useState([])


    function handdleEvent (event) {
        setNewTask(event.target.value)
        console.log(event)
    }

    function addTask() {
        console.log("Added")
        if(newTask.trim() !=="") { //cant add task if you havent written any
        setTask( tasks => [...tasks, newTask]) //updater funciton
        setNewTask(""); //reset
        }
    }

    function deleteTask(index) {
        
        const updateTask = tasks.filter((e, i) => i !== index)
        setTask(updateTask) //so if index match the other index we want to delete it.
        //thats why we have index on the button
        //if i is strictlly not = to index (if it matches) delete it
    }

    function highlight(index) {
        const updatedHiglight = [...higlight];
        updatedHiglight[index] = !updatedHiglight[index]
        setHiglight(updatedHiglight)
    }

    return(

    <div className="to-do-list">

        <h1>Todo List</h1>

         <div>
        <input className="todo-input"
        type="text" 
        value={newTask}
        placeholder="Enter Task"
        onChange={handdleEvent}
        />
        <button onClick={addTask} className="add-task">Add Task</button>
        </div>

        <ol>
            {tasks.map((task, index) => (
                <li key={index}>
                    <span className="tasks">{task}</span>
                    <div className="buttons">
                    <button className="remove-button" onClick={() => deleteTask(index)}>Remove</button>
                    <button className="Higlight-button" onClick={() => highlight(index)}>{higlight[index] ? "Un-higlighted" : "higlighted"}</button>
                    </div>
                </li>
            ))}
        </ol>
    </div>
    
    )
}


export default Todo;
