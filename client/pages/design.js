import AdminHOC from '../components/layouts/admin.hoc';
import Head from 'next/head';

const Design = () => (
    <div>
        <Head>
            <link rel="stylesheet" href="/plugins/summernote/summernote-bs4.css"></link>
            <script src="/plugins/summernote/summernote-bs4.min.js"></script>
            <script src="/plugins/custom/init-summer-note.js"></script>
        </Head>
        <AdminHOC contentTitle="Design">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">

                    <div className="card card-default">
                        <div className="card-header">
                        <h3 className="card-title">Design</h3>
                        </div>
                        <div className="card-body">
                        {/* <div className="row"></div> */}
                        <textarea
                            className="textarea"
                            placeholder="Place some text here"
                            style={{width:'100%', height:'500px', fontSize:'14px', lineHeight:'18px', border:'1px solid #dddddd', padding:'10px'}}>
                        </textarea>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </AdminHOC>
    </div>
)

export default Design