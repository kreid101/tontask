import {useTonConnect} from "@/hooks/useTonConnect.ts";
import {useEffect, useState} from "react";
import {router} from "@inertiajs/react";
import Layout from "@/Layouts/Layout.jsx";
import {useTonAddress} from "@tonconnect/ui-react";
import {useStore} from "@/store.ts";
import ChooseModal from "@/components/ChooseModal.jsx";
import {Fab, Navbar,ListItem,List} from "konsta/react";
import {Plus} from "@/components/Icons.jsx";


export default function Tasks({CreatedTasks})
{
    const OpenChooseModal= (task)=>{
        setChTask(task);
        chmodal();
    }
    const chooseModalOpen=useStore((state)=>state.chooseModal);
    const chmodal=useStore((state)=>state.OpenChooseModal)
    const tonConnect=useTonConnect();

    const CrList=CreatedTasks.map(task=><ListItem link subtitle={"status:"} title={task.headline} text={task.description} after={task.created_at} onClick={()=>{ router.get('/task/'+task.id) }} key={task.id}> </ListItem>)
    useEffect(() => {
        if (tonConnect.connected === false)
            router.get('/')
    },[tonConnect.connected])

    const [chTask,setChTask]=useState()
    const create=()=>{router.get('/create')}

    return (
        <Layout>
            <Navbar title={"Created Tasks"} />
            <List strongIos outlineIos>
                {CrList}
            </List>
            <Fab className={"fixed bottom-28 right-12 z-10"} icon={Plus()} onClick={create}></Fab>
        </Layout>
    )
}
