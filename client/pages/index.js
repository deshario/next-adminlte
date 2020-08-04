import AdminHOC from '../components/layouts/admin.hoc';

const Home = () => (
  <AdminHOC contentTitle="Home">
   <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
   
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's
                content.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </AdminHOC>
)

export default Home