import { Link,usePage } from '@inertiajs/react'
import {TonConnectButton, useTonAddress} from "@tonconnect/ui-react";

export default function Layout({children})
{
    const { url, component } = usePage()
    const wallet=useTonAddress()

    return (
        <main>
            <header className={"w-full justify-center flex gap-2 p-4 text-2xl "}>
                <TonConnectButton></TonConnectButton>
                <Link className={url.startsWith('/tasks') ? 'bg-gray-400 rounded p-2 border-gray-800 border-2' : 'rounded p-2 border-2 border-gray-800'} href="/">Заказчик</Link>
                <Link className={url.startsWith('/exec') ? 'bg-gray-400 rounded p-2 border-gray-800 border-2' : 'rounded p-2 border-2 border-gray-800 '} href={"/exec/"+wallet}>Исполнитель</Link>
            </header>
            <article >{children}</article>
        </main>
    )
}
