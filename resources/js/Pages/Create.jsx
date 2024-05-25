import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import {useTonConnect} from "@/hooks/useTonConnect.ts";
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import {useState,useEffect} from "react";
import * as filepond from "filepond";
import {TonConnectButton, useTonAddress, useTonWallet} from "@tonconnect/ui-react";
import {Icon, List, ListInput, Navbar, Page, Notification, Button,Popup} from "konsta/react";
import {arrowLeft} from "@/components/Icons.jsx";
import {usePage,router} from "@inertiajs/react";


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
                    left={<Icon onClick={visitMain} className={"cursor-pointer"} material={arrowLeft()}></Icon> }
                />
                {flash.message}
                <Notification
                    opened={flash.message === 'success'}
                    title="Your task is created"
                    text="You will be redirected to main page"
                />
                <List>
                    <ListInput onChange={handleChange} inputId={'headline'} outline  type="text"  placeholder="Your Title" label={"Title"}></ListInput>
                    <ListInput
                        outline
                        inputId={'desc'}
                        onChange={handleChange}
                        label="Description"
                        type="textarea"
                        placeholder="Task description"
                        inputClassName="!h-20 resize-none"
                    />
                    <ListInput
                        outline
                        label="Price"
                        type="text"
                        placeholder="1"
                        inputId={'price'}
                        onChange={handleChange}
                    />
                    <FilePond
                        onprocessfile={(error, file) => {
                            addImage(file)
                        }}
                        allowMultiple={true}
                        maxFiles={3}
                        name="files"
                        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                    />
                    <Button onClick={handleSubmit}>Send</Button>
                </List>

                <Popup opened={popupwin} onBackdropClick={() => setpopupwin(false)}>
                    <TonConnectButton/>
                </Popup>
            </Page>
    )
}
