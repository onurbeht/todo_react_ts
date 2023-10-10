//CSS
import styles from "./TaskList.module.css";

//Icons
import { BsPencil, BsTrash } from "react-icons/bs";

//Interface
import { ITask } from "../../interface/Task";

type Props = {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
};

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.container}>
            <div className={styles.details}>
              <h3>{task.title}</h3>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <BsPencil onClick={() => handleEdit(task)} />
              <BsTrash onClick={() => handleDelete(task.id)} />
            </div>
          </div>
        ))
      ) : (
        <p>Ainda não há tarefas.</p>
      )}
    </>
  );
};

export default TaskList;
