import {useTonConnect} from "@/hooks/useTonConnect.ts";
import {useEffect, useState} from "react";
import {router} from "@inertiajs/react";
import Layout from "@/Layouts/Layout.jsx";
import {useTonAddress} from "@tonconnect/ui-react";
import {useStore} from "@/store.ts";
import ChooseModal from "@/components/ChooseModal.jsx"
import {data} from "autoprefixer";

export default function Tasks({CreatedTasks,TakenTasks})
{
    const OpenChooseModal= (task)=>{
        setChTask(task);
        chmodal();
    }
    const chooseModalOpen=useStore((state)=>state.chooseModal);
    const chmodal=useStore((state)=>state.OpenChooseModal)
    const tonConnect=useTonConnect();
    const CrList=CreatedTasks.map(task=><div className={"border-2 border-blue-400"} onClick={()=>{ router.get('/task/'+task.id) }} key={task.id}><div className={"text-lg"}>{task.headline}</div> <div>responses - {task.responses.length}</div> <div> status - {task.status == 0 ? 'created' : task.status == 1 ? 'in work' : task.status == 2 ? 'checking' : 'done' } </div> </div>)
    const TkList=TakenTasks.map(res => {
       return <li  key={res.id}>{res.task.headline}</li>
    })
    useEffect(() => {
        if (tonConnect.connected === false)
            router.get('/')
    },[tonConnect.connected])
    const create=()=>{router.get('/create')}
    const [chTask,setChTask]=useState()


    return (
        <Layout>
            <div>
                <h1 className={"text-2xl"}>My created tasks:</h1>
                <div>
                    <ul>
                        {CrList}
                    </ul>
                </div>
            </div>
            {chooseModalOpen == true ?  <ChooseModal task={chTask}/> : '' }

            <div>
                <h1 className={"text-2xl"}>My taken tasks:</h1>
                <div>
                    <ul>
                        {TkList}
                    </ul>
                </div>
            </div>
            <div className={"w-full flex justify-center"}>
                <button className={"bg-blue-400 p-2 text-2xl absolute bottom-8 rounded"} onClick={create}>add new task
                </button>
            </div>
        </Layout>
    )
}
