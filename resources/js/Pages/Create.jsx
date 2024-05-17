import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import {useTonConnect} from "@/hooks/useTonConnect.ts";
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import {useState,useEffect} from "react";
import * as filepond from "filepond";
import {router} from "@inertiajs/react";
import {Address} from "@ton/core";
import {useTonAddress, useTonWallet} from "@tonconnect/ui-react";


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
    useEffect( () => {
       if(tonConnect.connected === false)
       {
           router.get('/')
       }
       else
       {
          values.wallet= tonAddress
       }
    }, [tonConnect.connected]);

    const [values,setValues] = useState({
        wallet:"",
        headline:"",
        desc:"",
        images:[],
        price:0

    })
    function handleSubmit(e) {
        e.preventDefault()
        router.post('/newtask',values)
    }

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }
    function addImage(e)
    {
       values.images.push(e.serverId)
    }

    return(
        <div>
            <button className={"m-8"} onClick={() => {
                router.get('/')
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
                </svg>
            </button>
            <div className={"flex justify-center"}>

                <form className={"flex flex-col"} onSubmit={handleSubmit}>
                    <label htmlFor="">Headline</label>
                    <input id="headline" value={values.headline} onChange={handleChange} type="text"/>
                    <label htmlFor="">description</label>
                    <textarea id="desc" value={values.desc} onChange={handleChange} cols="30" rows="10"></textarea>
                    <label htmlFor="">images</label>
                    <FilePond
                        onprocessfile={(error, file) => {
                            addImage(file)
                        }}
                        allowMultiple={true}
                        maxFiles={3}
                        name="files"
                        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                    />
                    <label htmlFor="price"></label>
                    <input id="price" value={values.price} onChange={handleChange} type="text"/>
                    <button>submit</button>
                </form>

            </div>
        </div>
    )
}
