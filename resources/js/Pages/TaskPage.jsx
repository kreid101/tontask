import {useEffect, useState} from "react";
import {router} from "@inertiajs/react";
import {Address, toNano} from "@ton/core";
import {useTaskParentContract} from "@/hooks/useTaskParentContract.ts";
import {Block, BlockTitle, Icon, Navbar, Page, BlockHeader, BlockFooter} from "konsta/react";
import {arrowLeft} from "@/components/Icons.jsx";
import {useTonAddress} from "@tonconnect/ui-react";
import { useImageViewer } from 'react-image-viewer-hook'



export default function ({task})
{
    const { getOnClick, ImageViewer } = useImageViewer()
    const images=task.images.map((img)=> <img className={"max-w-24"} onClick={getOnClick('/'+img.link)} src={'/'+img.link} />);
    const [message,setMsg]=useState({
        id:BigInt(task.id),
        sender:Address.parse(task.user_id),
        executor:null,
        coin_amount:toNano(task.price)
    });
    const visitMain=()=>{
        router.get('/tasks/'+ tonAddress)
    }
    const chooseFunc=async (item)=>{
        await setMsg(prevState => {return {...prevState,executor: Address.parse(item.user_id)}})
        contract.newTask(message)
    }
    const tonAddress=useTonAddress();
    const contract = useTaskParentContract()
    const done = async ()=>{
        let address= await contract.getChild(task.id);
        contract.markAsDone(address)
    }
    async function checking()
    {
       let address= await contract.getChild(task.id);
       if(address !== null)
       {
           let info = await contract.getChildInfo(address)

           if(Number(info.status) !== task.status)
           {
               router.post('/updtask',{id:Number(task.id),status:Number(info.status),exec:info.executor.toString()})
           }
       }
    }
    const call=()=>{setInterval(checking ,5000)}
    useEffect(call,[])
    return (
        <Page>
        <Navbar
            centerTitle
            title="Task"
            left={<Icon onClick={visitMain} className={"cursor-pointer"} material={arrowLeft()}></Icon>}
        />
        <BlockTitle colors={{textMaterial:"text-black"}} large>{task.headline}</BlockTitle>
        <BlockHeader>{task.created_at}</BlockHeader>
         <Block strong inset outline>
             {task.description}
         </Block>
         <BlockFooter>
             price:{ task.price}
         </BlockFooter>
            {images}
            <ImageViewer/>
        </Page>

    )
}
