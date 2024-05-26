import {Address, OpenedContract, toNano} from "@ton/core";
import {TonTaskMaster,InternalTask} from "../build/TonTaskMaster/tact_TonTaskMaster";
import {useTonClient} from "./useTonClient";
import {useTonConnect} from "./useTonConnect";
import {TonClient} from "@ton/ton";
import {router} from "@inertiajs/react";
import {TonTaskChild} from "../build/TonTaskChild/tact_TonTaskChild";

export function useTaskParentContract() {
    const sender=useTonConnect()
    const client = new TonClient({
        endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC',
        apiKey:'7f9775a808b429f000a1bd9a8ee2c23ae2bc5df3d2930d6991fe84c01acf8c5c'
    });
    const ParentContractAddress = TonTaskMaster.fromAddress(Address.parse("EQCkJJHLIt8xjhuwQOfKhUSUOoq1slbIDNZnTeL7z0viT8fx"))

    const opened=client.open(ParentContractAddress) as OpenedContract<TonTaskMaster>;
    return {
        newTask:async (msg)=>{

            if(sender.connected)
            {
                let mess:InternalTask= {
                    $$type:"InternalTask",
                    id:msg.id,
                    creator:msg.sender,
                    executor:msg.executor,
                    coin_amount:msg.coin_amount
                }
                opened?.send(sender.sender,{value:msg.coin_amount},mess).then(()=>console.log('123')).catch((e)=>console.log('bed ba'))
            }
        },
        getChild: async (id) =>
        {
            return await opened.getAddressOfChild(id)
        },
        getChildInfo: async (address) =>
        {
            let childContract = await TonTaskChild.fromAddress(address)
            let openChild = await client.open(childContract) as OpenedContract<TonTaskChild>
            return openChild.getShowData()
        },
        markAsDone: async (address) =>
        {
            let childContract = await TonTaskChild.fromAddress(address)
            let openChild = await client.open(childContract) as OpenedContract<TonTaskChild>
            openChild.send(sender.sender,{value:toNano('0.05')},'task is done')
        }
    }
}
