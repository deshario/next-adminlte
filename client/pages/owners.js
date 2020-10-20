import AdminHOC from '../components/layouts/admin.hoc';
import { deviceState } from '../recoils/atoms'

import { useRecoilValue } from 'recoil'

const Owners = () => {
  const deviceName = useRecoilValue(deviceState)
  return (
    <AdminHOC contentTitle="Owners">
     <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card card-default">
              <div className="card-header">
                <h3 className="card-title">Owners</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <h1>{deviceName}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminHOC>
  )
}

export default Owners