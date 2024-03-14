import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../Components/TaskCard";

export const TaksPage = () => {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) {
    return (
      <div>
        <h1>No tasks</h1>
      </div>
    );
  }

  // console.log(tasks);
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 w-11/12 m-auto">
        {tasks.map((task) => (
          <TaskCard task={task} key={task._id} />
        ))}
      </div>
    </div>
  )
}
