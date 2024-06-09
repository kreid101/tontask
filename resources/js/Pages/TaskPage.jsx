import TaskCreator from "@/components/TaskCreator.jsx";
import {useEffect} from "react";

export default function ({task})
{
    const tid=task.user.tid
    const usertid=window.Telegram.WebApp.initDataUnsafe.id;
    const temp='';
    useEffect(()=>{
        console.log(task)
        console.log(usertid)
    },[])


    return (
        <div>

            <TaskCreator task={task}/>
        </div>

    )
}
