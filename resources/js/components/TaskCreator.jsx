import {Block, Chip, Icon, Navbar, Page} from "konsta/react";
import {close} from "@/components/Icons.jsx";
import {router, usePage} from "@inertiajs/react";
import {useTonConnect} from "@/hooks/useTonConnect.ts";
import {useImageViewer} from "react-image-viewer-hook";
import {useEffect, useState} from "react";
import {Address, toNano} from "@ton/core";
import {useTonAddress} from "@tonconnect/ui-react";
import {useTaskParentContract} from "@/hooks/useTaskParentContract.ts";

export default function TaskCreator({task})
{
    const senderAddress= useTonConnect()
    const { getOnClick, ImageViewer } = useImageViewer()
    const { url, component } = usePage()
    // const images=task.images.map((img)=> <img key={img.id} className={"max-w-24"} onClick={getOnClick('/'+img.link)} src={'/'+img.link} />);
    const [message,setMsg]=useState({
        id:BigInt(task.id),
        //sender:Address.parse(task.user_id),
        executor:null,
        coin_amount:toNano(task.price)
    });

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

            if((Number(info.status) === 1 && task.status !== 1) || (Number(info.status) === 4 && task.status !== 4) )
            {
                router.post('/updtask',{id:Number(task.id),status:Number(info.status),exec:info.executor.toString()})
            }
        }
    }
    const call=()=>{setInterval(checking ,5000)}
    useEffect(call,[])
    const hash=(text) =>{
        // Regular expression to match hashtags
        const hashtagPattern = /#[a-zA-Z0-9_]+/g;
        // Extract hashtags using match method
        const hashtags = text.match(hashtagPattern);
        // If no hashtags are found, return an empty array
        console.log(hashtags)
        return hashtags ? hashtags : [];
    }
    const tags = hash(task.tags);
    const chips=tags.map(res=><Chip className={"p-4 bg-t-gr text-white"}>{res}</Chip>)
    const responses= task.responses.map(res=> <div key={res.id} className={"flex justify-between items-center overflow-scroll"} strong inset outline>
        <div onClick={()=>console.log('user profile')}>
            <div className={"text-md"}>{res.user.fname} {res.user.lname}</div>
            <div className={"text-t-hint"}>{shortenString(res.user.wallet)}</div>
        </div>
        <div>
            <button className={"bg-t-blue p-2 rounded-2xl"} onClick={()=>chooseFunc(res)}>choose</button>
        </div>
    </div>)
    function shortenString(str) {
        const start = str.slice(0, 4); // Get first 4 letters
        const end = str.slice(-4);     // Get last 4 letters
        return `${start}...${end}`;    // Concatenate with 3 dots in between
    }
    const visitMain=()=>{
        router.get('/tasks/'+ tonAddress)
    }
    return(
        <Page colors={{bgMaterial:"bg-black"}}>
            <Navbar
                colors={{bgMaterial:"bg-t-black"}}
                className={"gap-2 text-white border-b-2 border-t-hint"}
                title="Task"
                left={<Icon onClick={visitMain} className={"cursor-pointer m-4 "} material={close()}></Icon>}
            />
            <Block className={"bg-t-black my-0  py-4"}>
                <div className={"flex flex-col gap-2 mb-6"}>
                    <div className={"text-white text-2xl"}>{task.headline}</div>
                    <div className={"text-t-blue"}>{ task.price} TON</div>
                    <div className={"text-t-hint"}>Posted on: {new Date(task.created_at).toLocaleString('en-us',{month:'long', day:'numeric'})}</div>
                </div>
                <div className={"gap-2 flex mb-6"}>
                    {chips}
                </div>
                <div className={"text-t-hint mb-6"}>
                    {task.description}
                </div>
                <div className={"w-full flex justify-center"}>
                    <button className={"w-10/12 h-8 rounded text-white bg-t-blue"}>Share Task</button>
                </div>
            </Block>
            <Block className={"bg-t-black text-white py-4 my-2"}>
                <div className={"text-lg mb-2"}>Workers applied</div>
                {responses}
            </Block>
        </Page>
    )
}
