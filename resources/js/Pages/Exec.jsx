import Layout from "@/Layouts/Layout.jsx";
import Modal from "@/components/Modal.jsx";
import {useState} from "react";
import {useStore} from "@/store.ts";
export default function Exec({tasks})
{
    const taskList=tasks.map((item)=><li onClick={()=>showTask(item)} key={item.id}>{item.headline}</li>);
    const modalOpen=useStore((state)=>state.modalOpen);
    const openModal=useStore((state)=>state.OpenModal)
    const [task,setTask]=useState({})

    function showTask(task)
    {
        setTask(task);
        openModal();
    }
    return(
        <Layout>
            <h1 className={"text-2xl"}>Open Tasks:</h1>
            {taskList}
            {modalOpen === true ? <Modal task={task} /> : ""}
        </Layout>
    )
}
