import TaskCreator from "@/components/TaskCreator.jsx";
import {useEffect,useState} from "react";
import TaskWorker from "./TaskWorker";

export default function ({task})
{
    let [temp,settemp]=useState('');
    useEffect(()=>{
        const utid=task.user.tid;
        const urlParams = new URLSearchParams(window.Telegram.WebApp.initData);
        const startParam =JSON.parse(urlParams.get('user')).id;
        if(utid == startParam)
        {
            settemp('creator')
            console.log('true')
        }
    },[])


    return (

    temp === 'creator' ? <TaskCreator task={task}/> : <TaskWorker/>

    )
}
