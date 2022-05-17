import { ITask } from "../../interfaces/ITask"
import { Container } from "./style"

interface Props {
    taskList: ITask[]
    handleDelete(id: number): void
}

export function TaskList({taskList ,handleDelete}: Props) {
    return (
        <Container>
            {taskList.length > 0 ? (
               taskList.map((task) => (
                   <div key={task.id} className="task">
                       
                       <div>
                           <h4>{task.title}</h4>
                           <p>Dificuldade: {task.difficulty}</p>
                       </div>
                       <div className="actions" >
                           <i className="bi bi-pencil" onClick={() => {handleDelete(task.id)}}>X</i>
                           <i className="bi bi-trash"></i>
                       </div>
                   </div>
               ))
            ): (
                <p>Nao Ah Tarefas Cadaastradas</p>
            )}
        </Container>
    )
}