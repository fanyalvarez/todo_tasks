import { useForm } from "react-hook-form";
// import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";



export const TasksFormPage = () => {


  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  // const { createTasks, getTask, updateTask } = useTasks();
  const params = useParams();

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      // updateTask(params.id, dataValid);
    } else {
      // createTasks(dataValid);
    }
    console.log("creado")
    navigate("/tasks");
  });

  // useEffect(() => {
  //   async function loadTask() {
  //     if (params.id) {
  //       const taskId = await getTask(params.id);
  //       setValue("title", taskId.title);
  //       setValue("description", taskId.description);
  //     }
  //   }
  //   loadTask();
  // }, []);





  return (
    <div className="flex h-full items-center justify-center ">
      <div className="w-full max-w-lg bg-green-950 rounded-md p-10 m-2">
        <h1 className="text-white text-center text-3xl font-bold mb-5">
          Form Task
        </h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="title">Title</label>
          <input
            className="w-full bg-zinc-700 rounded-md text-white px-4 py-2 my-3"
            type="text"
            placeholder="title"
            {...register("title")}
            autoFocus
          />
          <br />

          <label htmlFor="description">Description</label>
          <textarea
            className="w-full bg-zinc-700 rounded-md text-white px-4 py-2 my-3"
            rows="3"
            placeholder="description"
            {...register("description")}></textarea>

          <button className="bg-sky-700 px-4 py-2 rounded">Save</button>
        </form>
      </div>
    </div>
  )
}
