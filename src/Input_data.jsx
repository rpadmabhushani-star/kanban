
import React, { useState,useEffect } from 'react';

function Input_data ({
    task,
    deleteTask,
    editTask,
    changeStatus}) {

        const[isEditing, setIsEditing] = useState(false)

        const[updatedTitle,setUpdateTitle]=useState(task.title)

        const [updatedDescription,setupdatedDesription] = useState(task.description)

        useEffect(() => {
          setUpdateTitle(task.title)
        },
        [task.title]
      )

        const handleSave =() =>{
          editTask(
            task.id,
            updatedTitle,
            updatedDescription)

            setIsEditing(false)
        }

    return (
        <div
          
          draggable

          onDragStart={(e) => {
            e.dataTransfer.setData("taskId",task.id)
          }}
          
            
            style ={{
                background:"#556",
                border : "1px solid white",
                padding :"10px",
                marginBottom:"10px",
            }}
            >
          {isEditing?(
          <div> 
            <input
               value={updatedTitle}
               onChange={(e) =>
                setUpdateTitle(e.target.value)
               }

               style={{
                padding:"8px",
                width:"100%",
                marginBottom:"10px",
               }}
                />
                <textarea
                value={updatedDescription}
                onChange={(e)=>
                  setupdatedDesription(e.target.value)
                 }
                />
                <button onClick = {handleSave}>Save</button>
          </div> ) :(
            <>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            </>
          )}    
          <div 
           style={{
            display:"flex",
            gap:"10px",
            flexWrap:"wrap",
           }}
          >
            <button onClick ={() => setIsEditing(true)}> Edit</button>
            <button onClick = {() => deleteTask(task.id)}>Delete</button>
            <select
              value ={task.status}
              onChange ={(e) =>
                changeStatus(task.id,e.target.value)
              }
              >
                <option value ="Task_To_Do">Task_To_Do</option>
                <option value= "In_Progress"> In_Progress</option>
                <option value= "Completed_Task"> Completed_Task</option>
                </select>
          </div>
        </div>
        
    );
}

export default Input_data;

