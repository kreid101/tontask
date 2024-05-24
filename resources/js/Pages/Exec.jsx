import Layout from "@/Layouts/Layout.jsx";
import Modal from "@/components/Modal.jsx";
import {useState} from "react";
import {useStore} from "@/store.ts";
import {List, ListItem, Navbar, Page} from "konsta/react";
import {router} from "@inertiajs/react";
export default function Exec({tasks})
{
    //const taskList=tasks.map((item)=><li onClick={()=>showTask(item)} key={item.id}>{item.headline}</li>);
    const taskList=tasks.map(task=><ListItem link subtitle={"Price: "+task.price} title={task.headline} text={task.description} after={task.created_at} onClick={()=>{ router.get('/task/'+task.id) }} key={task.id}> </ListItem>)

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
            <Page>
                <Navbar title={"Open tasks"}/>
                <List strongIos outlineIos>
                {taskList}
                </List>
            </Page>
        </Layout>
    )
}
