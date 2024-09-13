import { TOKEN, DATABASE_ID } from "@/config"
import Layout from "@/components/layout";
import Head from "next/head";
import ProjectItem from "@/components/projects/project-item";
import Grid from "@mui/material/Grid2";

export default function Project({Projects}){
    return(
        <>
            <Layout>    
                <Head>
                    <title>혜성의 포트폴리오</title>
                    <meta name="description" content="나의 포트폴리오" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1>프로젝트</h1>
                <h3>총 프로젝트 : {Projects.results.length}</h3>
                <Grid container justifyContent="center" spacing={10}>
                    {Projects.results.map((aProject) => (
                        <ProjectItem key={aProject.id} data={aProject}/>
                    ))};
                </Grid>
            </Layout>
        </>
    )
}
export async function getStaticProps(){
    const option = {
        method : 'POST',
        headers : {
            Accept : 'application/json',
            'Notion-Version' : '2022-06-28',
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${TOKEN}`
        },body : JSON.stringify({page_size : 100})
    };
    const res = await fetch (`https://api.notion.com/v1/databases/${DATABASE_ID}/query`,option)
    const Projects = await res.json()

    // const ProjectNames = Projects.result.map((aProject) => {
    //     aProject.Properties.Name.title[0].plain_text
    // })
    // console.log(`projectName : ${ProjectNames}`)

    return{
        props : {Projects}
    }
}