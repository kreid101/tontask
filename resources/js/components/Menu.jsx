import {Tabbar,TabbarLink} from "konsta/react";
import {Edit, List, TaskStack, WalletIcon} from "@/components/Icons.jsx";
import {router, usePage} from "@inertiajs/react";
import {useEffect} from "react";
import {useTonAddress} from "@tonconnect/ui-react";
import {useTonConnect} from "@/hooks/useTonConnect.ts";
export default function Menu()
{
    const { url, component } = usePage()
    const wallet=useTonAddress()
    const wad=useTonConnect()
    const visitMain=()=>{
        router.get('/tasks/'+ wallet)
    }
    const visitExec=()=>{
        router.get("/exec/" + wallet)
    }
    const visitWallet=()=>{
        router.get("/mywallet")
    }
    const visitTaken=()=>{
        router.get("/taken/"+wad.sender.address)
    }

    return(
       <Tabbar className={'left-0 bottom-0 fixed'}>
           <TabbarLink onClick={visitMain} icon={Edit()} active={url.startsWith('/tasks')}></TabbarLink>
           <TabbarLink onClick={visitExec} icon={List()} active={url.startsWith('/exec')}></TabbarLink>
           <TabbarLink onClick={visitTaken} icon={TaskStack()} active={url.startsWith('/taken')}></TabbarLink>
           <TabbarLink onClick={visitWallet} icon={WalletIcon()} active={url.startsWith('/mywallet')}></TabbarLink>
       </Tabbar>
    )

}
