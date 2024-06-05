import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import {useTonConnect} from "@/hooks/useTonConnect.ts";
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import {useState,useEffect} from "react";
import * as filepond from "filepond";
import {TonConnectButton, useTonAddress, useTonWallet} from "@tonconnect/ui-react";
import {Icon, List, ListInput, Navbar, Page, Notification, Button, Popup, BlockTitle, Block} from "konsta/react";

import {arrowLeft, close} from "@/components/Icons.jsx";
import {usePage,router} from "@inertiajs/react";
import { Input, Section, Textarea,Text} from "@telegram-apps/telegram-ui";



filepond.setOptions({
    server:{
        url:"save_img",
        headers:{'X-CSRF-Token': document.getElementsByName('_token')[0].getAttribute('content')}
    }
})
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function Create()
{
    const tonConnect=useTonConnect();
    const wallet=useTonWallet();
    const tonAddress=useTonAddress()
    const {flash}=usePage().props
    const [popupwin,setpopupwin]=useState(false)
    const [values,setValues] = useState({
        wallet:tonAddress.toString(),
        initdata:window.Telegram.WebApp.initData,
        headline:"",
        tags:"",
        desc:"",
        images:[],
        price:0

    })
     function handleSubmit() {
        if(tonConnect.connected)
        {
            router.post('/newtask',values)
        }
       else
        {
            setpopupwin(true)
        }
    }
    useEffect(()=>{
        if(flash.message === 'success')
        {
            setTimeout(()=>{router.get('/')},2000)
        }
        if(tonConnect.connected !== true)
        {
            setpopupwin(true)
        }
        if(tonConnect.connected === true)
        {
            setpopupwin(false)
        }
    },[flash,tonConnect.connected])
    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        if (values.wallet === '')
        {
            values.wallet=tonAddress.toString()
        }
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }
    function addImage(e)
    {
       values.images.push(e.serverId)
    }
    const visitMain=()=>{
        router.get('/tasks/'+ tonAddress)
    }

    return(
            <Page>
                <Navbar
                    centerTitle
                    title="Create Task"
                    left={<Icon onClick={visitMain} className={"cursor-pointer"} material={close()}></Icon> }
                    colors={{bgMaterial:'bg-t-black',textMaterial:'text-white'}}
                />
                <BlockTitle colors={{textMaterial:"text-t-blue"}}>
                    Task information
                </BlockTitle>
                <Block colors={{textMaterial:"text-t-hint"}}>
                    Make a detailed description that will explain the task to worker. Information below will be available to all participants to take to execution.
                </Block>


                <Notification
                    opened={flash.message === 'success'}
                    title="Your task is created"
                    text="You will be redirected to main page"
                />
                <List strong outline>
                    <Input required header="Title"  onChange={handleChange} id={'headline'} />
                    <Textarea  header="Description"  onChange={handleChange} id={'desc'} />
                    <Input  header="Tags"  onChange={handleChange} id={'tags'} />
                    <Input  header="Price"  onChange={handleChange} id={'price'} />

                        <FilePond
                            onprocessfile={(error, file) => {
                                addImage(file)
                            }}
                            allowMultiple={true}
                            maxFiles={3}
                            name="files"
                            labelIdle='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
</svg>
Attach file'
                        />

                </List>
                <Button className={"w-10/12 mx-auto"} colors={{activeBgMaterial:'bg-t-blue', fillBgMaterial:"bg-t-blue"}} onClick={handleSubmit}>Submit</Button>

                <Popup opened={popupwin} onBackdropClick={() => setpopupwin(false)}>
                    <TonConnectButton/>
                </Popup>
            </Page>
    )
}
