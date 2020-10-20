import Document, {Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <link rel="stylesheet" href="/plugins/fontawesome-free/css/all.min.css"/>
                    <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"/>
                    <link rel="stylesheet" href="/dist/css/adminlte.min.css"/>
                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet"/>
                    <script src="/plugins/jquery/jquery.min.js"></script>
                    <script src="/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
                    <script src="/dist/js/adminlte.js"></script>
                </Head>
                <body className="hold-transition sidebar-mini">
                    <div className="wrapper">
                        <Main/>
                        <NextScript/>
                    </div>
                </body>
            </html> 
        )
    }
}