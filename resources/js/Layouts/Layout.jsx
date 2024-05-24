import {Link, router, usePage} from '@inertiajs/react'
import {TonConnectButton, useTonAddress} from "@tonconnect/ui-react";
import {Fab, Navbar, Page} from 'konsta/react';
import Menu from "@/components/Menu.jsx";
import {Plus} from "@/components/Icons.jsx";

export default function Layout({children})
{
    const { url, component } = usePage()
    const wallet=useTonAddress()


    return (
        <Page>
            <article>{children}</article>
            <Menu></Menu>
        </Page>
    )
}
