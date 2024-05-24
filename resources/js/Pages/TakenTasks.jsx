import {List, ListItem, Navbar, Page} from "konsta/react";
import Layout from "@/Layouts/Layout.jsx";
import {router} from "@inertiajs/react";

export default function TakenTasks({taken})
{
    const CrList=taken.map(task=><ListItem link subtitle={"status:"} title={task.headline} text={task.description} after={task.created_at} onClick={()=>{ router.get('/task/'+task.id) }} key={task.id}> </ListItem>)
    return(
        <Layout>
            <Page>
                <Navbar title={'Taken tasks'} />
                <List strongIos outlineIos>
                    {CrList}
                </List>
            </Page>
        </Layout>
    )
}
