import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

import styles from "./TaskForm.module.css";

//Interface
import { ITask } from "../../interface/Task";

type Props = {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void;
};

const TaskForm = ({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task?.id);
      setTitle(task?.title);
      setDifficulty(task?.difficulty);
    }
  }, [task]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      setId(Math.floor(Math.random() * 1000));
      const newTask: ITask = { id, title, difficulty };

      setTaskList!([...taskList, newTask]);

      setTitle("");
      setDifficulty(0);
    }
  };

  return (
    <form className={styles.form} onSubmit={addTaskHandler}>
      <label>
        Título:
        <input
          type="text"
          name="title"
          placeholder="Título da sua tarefa"
          value={title}
          onChange={handleChange}
        />
      </label>
      <label>
        Dificuldade:
        <input
          type="number"
          name="difficulty"
          placeholder="Insira a dificuldade da tarefa"
          value={difficulty}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
