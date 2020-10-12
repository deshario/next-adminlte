import Link from 'next/link'
import { withRouter } from 'next/router'

const AdminSideBar = ({ router }) => {
  const { pathname } = router
  return (
    <aside className='main-sidebar sidebar-dark-primary elevation-4'>
      <a href='index3.html' className='brand-link'>
        <img src='dist/img/AdminLTELogo.png' className='brand-image img-circle elevation-3' style={{ opacity: '.8' }} />
        <span className='brand-text font-weight-light'>
          Device Manager
        </span>
      </a>
      <div className='sidebar'>
        <div className='user-panel mt-3 pb-3 mb-3 d-flex'>
          <div className='image'>
            <img src='dist/img/user2-160x160.jpg' className='img-circle elevation-2' alt='User Image'/>
          </div>
          <div className='info'>
            <a href='#' className='d-block'>Deshario Sunil</a>
          </div>
        </div>
        <nav className='mt-2'>
          <ul
            className='nav nav-pills nav-sidebar flex-column'
            data-widget='treeview'
            role='menu'
            data-accordion='false'>
            <li className='nav-header'>
              Actions
            </li>
            <li className='nav-item'>
              <Link href='/'>
                <a className={['nav-link',pathname === '/' ? 'active' : ''].join(' ')}>
                <i className='fa fa-home nav-icon' />
                  <p>&nbsp;Home</p>
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/my-election'>
                <a className={['nav-link',pathname === '/my-election' ? 'active' : ''].join(' ')}>
                <i className='fa fa-laptop nav-icon' />
                  <p>&nbsp;My Device</p>
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/voters'>
                <a className={['nav-link', pathname === '/voters' ? 'active' : ''].join(' ')}>
                  <i className='fa fa-users nav-icon' />
                  <p>&nbsp;Users</p>
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/design'>
                <a className={['nav-link', pathname === '/design' ? 'active' : ''].join(' ')}>
                  <i className='fa fa-cog nav-icon' />
                  <p>&nbsp;Textpad</p>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default withRouter(AdminSideBar)
