import Grid from '@mui/material/Grid2';
import Layout from "@/components/layout";
import Head from "next/head";
import {TOKEN, DATABASE_ID} from "../config";
import ProjectItem from "@/components/projects/project-item";

export default function Projects({projects}) {
    console.log(projects)
    return (
        <>
        <Layout>
            <Head>
                <title>혜성의 포트폴리오</title>
                <meta name="description" content="나의 포트폴리오" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>프로젝트</h1>
            <span>총 프로젝트 : {projects.results.length}</span>
            <Grid container spacing={3}>
                {projects.results.map((aProject) => (
                    <ProjectItem key={aProject.id} data={aProject}/>
                ))}
            </Grid>
        </Layout>
        </>
    )
}
export async function getStaticProps() {
    const options = {
        method : 'POST',
        headers : {
            Accept : 'application/json',
            'Notion-Version' : '2022-06-28',
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${TOKEN}`
        },
        body : JSON.stringify({page_size : 100})
    };
    const res = await fetch (`https://api.notion.com/v1/databases/${DATABASE_ID}/query`,options)
    const projects = await res.json()

    // const projectNames = projects.result.map((aProject) =>(
    //     aProject.properties.Name.title[0].plain_text
    // ))
    // console.log(`projectNames : ${projectNames}`);
    
    return {
        props : {projects},
    }

}