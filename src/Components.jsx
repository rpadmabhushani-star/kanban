import Input_data from "./Input_data";
function UseComponents({
    title, 
    status,
    tasks,
    deleteTask,
    editTask,
    changeStatus,
    onDrop,
    onDragOver
}) {
    return (
    <div className="column"

    onDrop={ (e) => onDrop(e,status)}

    onDragOver={(e)=> e.preventDefault()}>

        <h2>{title}</h2>
        
            {tasks
                .filter((task) => task.status === status)

                .map((task) => (
                    <Input_data
                        key={task.id}
                        deleteTask={deleteTask}
                        editTask={editTask}
                        task={task}
                        changeStatus={changeStatus}
                            
                        
                    />
                ))}
    </div>    
    )
}
export default UseComponents;

