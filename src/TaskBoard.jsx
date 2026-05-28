import { useState } from "react";
import useMap from './Map'
import UseComponents from "./Components";

function TaskBoard() {
  const initialTasks = useMap()//assiging arrat from map.js

  const [tasks, setTasks] = useState(initialTasks)//main state(stores all task)

   const [newTask,setNewTask]=useState("")//stores title input 
   const [ newDescription, setnewDescription]=useState("")//stores decription input 


  const addTask = (title,description) => { //receiving title and decription

    const newTaskObj = {
      id: crypto.randomUUID() ,// asigns ramdom id to fetch task data
      title:title,
      description:description,
      status: "Task_To_Do" //pre asigned status
    };
    setTasks([...tasks, newTaskObj]); //add new tasks to to array 
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); //deletes by id  
  };

  const editTask = (id,newTitle,newDescription) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {         //get and maps id titlrasnd des
        return {
          ...task,                       
          title: newTitle,              //updates all (task and des)
          description:newDescription,
        };
      }
      return task;
    });
    setTasks(updatedTasks); 
  };

  const handleDrop = (e, newStatus) => { 
    const taskId =e.dataTransfer.getData("taskId");
    const updatedTasks = tasks.map((task) =>
      task.id ===taskId 
    ?{ ...task, status: newStatus}
    :task
    )
    setTasks(updatedTasks);
  };

  const changeStatus = (id,newStatus) =>{
    const updatedTasks = tasks.map((task) => 
      task.id ===id 
    ?{...task,status: newStatus} : task) 

    setTasks(updatedTasks);
  }

  return (
    <div style ={{marginBottom :"20px"}}>
      <input 
      type="text"
      placeholder="Enter Task"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}

      style={{
        padding:"10px",
        width:"250px",
        marginRight:"10px",
      }}
      />
      <textarea
       placeholder="description"
       value={newDescription}
       onChange={(e) => setnewDescription(e.target.value)}
      style={{
        padding:"10px",
        width: "250px",
        marginRight:"10px"
      }}
      />
      <button
  onClick={() => { addTask(newTask,newDescription)
                   setNewTask("")
                   setnewDescription("")
  }}>Add Task</button>


      <div style={{
        display: "flex",
        border: "2px solid white",
        gap: "20px"
      }}>
        <UseComponents
          title="Task_To_Do"
          status="Task_To_Do"
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
          handleDrop={handleDrop}
          changeStatus={changeStatus}
          onDrop={handleDrop}
        />

        <UseComponents
          title="In_Progress"
          status="In_Progress"
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
          handleDrop={handleDrop}
          changeStatus={changeStatus}
          onDrop={handleDrop}
        />

        <UseComponents
          title="Completed_Task"
          status="Completed_Task"
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
          handleDrop={handleDrop}
          changeStatus={changeStatus}
          onDrop={handleDrop}
        />
      </div>
    </div>
  );
}

export default TaskBoard


  
