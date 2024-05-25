import {useEffect, useState} from "react";
import {router, usePage} from "@inertiajs/react";
import {Address, toNano} from "@ton/core";
import {useTaskParentContract} from "@/hooks/useTaskParentContract.ts";
import {Block, BlockTitle, Icon, Navbar, Page, BlockHeader, BlockFooter, Button} from "konsta/react";
import {arrowLeft} from "@/components/Icons.jsx";
import {useTonAddress} from "@tonconnect/ui-react";
import { useImageViewer } from 'react-image-viewer-hook'
import {useTonConnect} from "@/hooks/useTonConnect.ts";



export default function ({task})
{
    const senderAddress= useTonConnect()
    const { getOnClick, ImageViewer } = useImageViewer()
    const { url, component } = usePage()
    const images=task.images.map((img)=> <img key={img.id} className={"max-w-24"} onClick={getOnClick('/'+img.link)} src={'/'+img.link} />);
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
    const markAsDone= () =>{
        router.post('/markasdone',{'id':task.id})
    }

    function takeTask()
    {
        let work={
            id:task.id,
            initdata:window.Telegram.WebApp.initData,
            wallet:tonAddress.toString()
        }
        router.post('/taketask',work)
    }
    async function checking()
    {
       let address= await contract.getChild(task.id);
       if(address !== null)
       {
           let info = await contract.getChildInfo(address)

           if(Number(info.status) === 1 && task.status === 1 || Number(info.status) === 4 && task.status !== 4 )
           {
               router.post('/updtask',{id:Number(task.id),status:Number(info.status),exec:info.executor.toString()})
           }
       }
    }
    const call=()=>{setInterval(checking ,5000)}
    useEffect(call,[])
    const share=()=>{
        window.Telegram.WebApp.openTelegramLink(url)
    }
    const responses= task.responses.map(res=> <Block key={res.id} className={"flex justify-between items-center overflow-scroll"} strong inset outline>
        <div onClick={()=>console.log('user profile')}>
            <div>{res.user.fname} {res.user.lname}</div>
            <div>{res.user.wallet}</div>
        </div>
        <div>
            <button onClick={()=>chooseFunc(res)}>choose</button>
        </div>
    </Block>)


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
            <div>
                status: {task.status}
            </div>

            {images}
            <ImageViewer/>
            {task.status === 0 ? <Button onClick={takeTask}>Take task</Button> : ''}
            {task.status ===0 ? responses : ""}
            <div>
                {task.status === 1 ? <Button onClick={markAsDone}>mark as done</Button> : ''}
                {task.status === 2 ? <Button onClick={done}>Realese money</Button> : ''}
            </div>
        </Page>

    )
}
