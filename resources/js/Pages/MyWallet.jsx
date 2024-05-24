import {Block, Navbar, Page} from "konsta/react";
import {TonConnectButton} from "@tonconnect/ui-react";
import Layout from "@/Layouts/Layout.jsx";
import {useInitData} from "@tma.js/sdk-react";

export default function MyWallet()
{
    const initdata=useInitData()
    return (
        <Layout>
        <Page>
            <Navbar title={"Wallet"}/>
            <Block>
                <TonConnectButton></TonConnectButton>
                MyAddress:
                {initdata}
            </Block>
        </Page>
        </Layout>
    )
}
