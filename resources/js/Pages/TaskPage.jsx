import TaskCreator from "@/components/TaskCreator.jsx";
import {useEffect} from "react";

export default function ({task})
{

    useEffect(()=>{
        console.log(task)
    },[])


    return (
        <TaskCreator task={task}/>
    )
}
