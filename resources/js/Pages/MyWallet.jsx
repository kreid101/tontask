import {Block, Navbar, Page} from "konsta/react";
import {TonConnectButton} from "@tonconnect/ui-react";
import Layout from "@/Layouts/Layout.jsx";
import {useContext, useEffect} from "react";

export default function MyWallet()
{
    useEffect(()=>{
        console.log(window.Telegram.WebApp.initData)
    })
    return (
        <Layout>
        <Page>
            <Navbar title={"Wallet"}/>
            <Block>
                <TonConnectButton></TonConnectButton>
                MyAddress:

            </Block>
        </Page>
        </Layout>
    )
}
