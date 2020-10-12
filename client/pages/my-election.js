import AdminHOC from '../components/layouts/admin.hoc';

const MyElection = () => (
  <AdminHOC contentTitle="My Device">
   <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">

          <div className="card card-default">
            <div className="card-head er">
              <h3 className="card-title">My Device</h3>
            </div>
            <div className="card-body">
              <div className="row">
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </AdminHOC>
)

export default MyElection