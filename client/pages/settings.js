import AdminHOC from '../components/layouts/admin.hoc';
import Head from 'next/head';

const Settings = () => (
    <div>
        <Head>
        </Head>
        <AdminHOC contentTitle="Settings">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">

                    <div className="card card-default">
                        <div className="card-header">
                        <h3 className="card-title">Settings</h3>
                        </div>
                        <div className="card-body">
                            
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </AdminHOC>
    </div>
)

export default Settings