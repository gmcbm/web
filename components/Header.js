import Head from "next/head";

export default function Header() {
    return (
        <Head>
            <title>GMCBM</title>
            <meta property="og:title" content="GMCBM" key="title"/>
            <link rel="alternate" hrefLang="en" href="https://gmcbm.net/en"/>
            <link rel="alternate" hrefLang="de" href="https://gmcbm.net/de"/>
            <link rel="alternate" hrefLang="x-default" href="https://gmcbm.net/"/>
        </Head>
    )
}