import Head from 'next/head'

export default function Layout({children}) {
    return (
      <div className="container" style={{minWidth: '100%', padding: "0", overflow: "hidden"}}>
        <Head>
          <title>General Knowledge</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="Description" content="Planet fact pages" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" /> 
        </Head>

          <main>
            {children}
          </main>
      </div>
    )
  }