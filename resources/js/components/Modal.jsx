import {useStore} from "@/store.ts";
import {useTonAddress} from "@tonconnect/ui-react";
import {useState} from "react";
import {router} from "@inertiajs/react";


export default function Modal({task})
{
    const closeModal=useStore((state)=>state.CloseChooseModal)
    const [work, setWork] = useState({
        id:task.id,
        wallet:useTonAddress()
    })
    function takeTask()
    {
        router.post('/taketask',work)
    }
    const images=task.images.map(img=><img key={img.id} src={"/"+img.link} />)

    return (

        <div className={"bg-gray-200 absolute w-full h-full top-0"}>
            <h1>Headline - {task.headline} </h1>
            <h1>description - {task.description} </h1>
            <h1>price - {task.price} $WORK</h1>
            {images}
            <div>
                <button onClick={takeTask}>take a task</button>
            </div>
            <button onClick={closeModal}>close</button>
            <button onClick={console.log(task)}>show</button>
        </div>

    )
}
