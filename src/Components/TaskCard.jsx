import React from "react";

export const TaskCard = ({ task }) => {
  const { deleteTask } = useTasks();

  return (
    <div className="bg-zinc-800 max-w-md p-6 rounded-md grid grid-col-1">
      <h3 className="text-2xl font-bold mb-2">{task.title}</h3>

      <p className="text-stale-300 text-xl">{task.description}</p>

      <div className=" flex justify-between items-center mt-3"> 
        <div className="my-4 flex gap-x-4 justify-end ">
          <button
            onClick={() => deleteTask(task._id)}
            className="bg-rose-900 px-4 py-2 rounded">
            Delete
          </button>
          <Link
            to={`/tasks/${task._id}`}
            className="bg-sky-700 px-4 py-2 rounded">
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};
