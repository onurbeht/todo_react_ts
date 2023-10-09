//CSS
import styles from "./App.module.css";

//Interface
import { ITask } from "./interface/Task";

import { useState } from "react";

//Components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const handleDelete = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas Tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={handleDelete} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
