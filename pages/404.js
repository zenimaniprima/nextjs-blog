import Head from "next/head"
import Layout from "../components/layout"
import utilStyles from "../styles/utils.module.css";

export default function custom404() {
    return (
        <Layout>
            <Head>
                <title>404 - Page not found</title>
            </Head>
            <div className={'font-bold justify-center flex mt-4'}>
                <p>
                    Page not found, sorry
                </p>
            </div>
        </Layout>
    )
}