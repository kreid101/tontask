import TaskCreator from "@/components/TaskCreator.jsx";
import {useEffect} from "react";

export default function ({task})
{

    useEffect(()=>{
        console.log(task.user.tid)
        console.log(window.Telegram.WebApp.initDataUnsafe.id)
        if(window.Telegram.WebApp.initDataUnsafe.id === task.user.tid)
        {
            console.log('owner')
        }
    },[])


    return (
        <TaskCreator task={task}/>
    )
}
