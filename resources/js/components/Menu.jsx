import {Tabbar,TabbarLink} from "konsta/react";
import {Edit, List, TaskStack, WalletIcon} from "@/components/Icons.jsx";
import {router, usePage} from "@inertiajs/react";
import {useEffect} from "react";
import {useTonAddress} from "@tonconnect/ui-react";
export default function Menu()
{
    const { url, component } = usePage()
    const wallet=useTonAddress()
    const visitMain=()=>{
        router.get('/tasks/'+ wallet)
    }
    const visitExec=()=>{
        router.get("/exec/" + wallet)
    }
    return(
       <Tabbar className={'left-0 bottom-0 fixed'}>
           <TabbarLink onClick={visitMain} icon={Edit()} active={url.startsWith('/tasks')}></TabbarLink>
           <TabbarLink onClick={visitExec} icon={List()} active={url.startsWith('/exec')}></TabbarLink>
           <TabbarLink icon={TaskStack()}></TabbarLink>
           <TabbarLink icon={WalletIcon()}></TabbarLink>
       </Tabbar>
    )

}
