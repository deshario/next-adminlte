import AdminHOC from '../components/layouts/admin.hoc';
import { useRecoilState, useRecoilValue, useRecoilCallback, useRecoilValueLoadable } from 'recoil';
import { deviceState } from '../recoils/atoms'
import { countState, usersQuery, userByIdQuery } from '../recoils/selectors'

const Devices = () => {
  const [deviceName, setDeviceName] = useRecoilState(deviceState);
  const users = useRecoilValueLoadable(usersQuery);
  const singleUser = useRecoilValueLoadable(userByIdQuery(1));
  const deviceLength =  useRecoilValue(countState)

  if(singleUser.state == 'hasValue'){
    console.log(singleUser.contents)
  }

  const renderUsers = () => {
    switch(users.state){
      case 'hasValue':
        return users.contents.map((e,ind) => <p key={ind}>{e.name}</p>)
      case 'loading':
        return <h4 style={{marginTop:'10px'}}>Loading...</h4>
      case 'hasError':
        return <h4 style={{marginTop:'10px'}}>Error</h4>
    }
  }

  const logDeviceState = useRecoilCallback(({snapshot}) => async () => {
    const deviceName = await snapshot.getPromise(deviceState);
    console.log('useRecoilCallback DeviceName : ', deviceName);
  });

  return (
    <AdminHOC contentTitle="Devices">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
          <div className="card card-default">
              <div className="card-header">
                <h3 className="card-title">Devices</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <form role="form">
                    <div className="card-body">

                      <div className="form-group">
                        <label htmlFor="deviceName">Device Name</label>
                        <input type="text" className="form-control" value={deviceName}
                        onChange={
                          event => setDeviceName(event.target.value)
                        }
                        />
                      </div>

                      <div className="input-group mb-3">
                        <input type="text" className="form-control" />
                        <div className="input-group-append">
                          <span className="input-group-text">{deviceLength}</span>
                        </div>
                      </div>

                      <button onClick={logDeviceState} style={{marginBottom:'10px'}}>Log Device State</button>

                      { renderUsers() }

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminHOC>
  )
}

export default Devices