import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';

const MainNavigation = () => {
  const token = useRouteLoaderData('root');

  return (
    <nav className='navbar navbar-expand navbar-dark bg-dark '>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/'>
          Mantis Eye
        </NavLink>

        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link' aria-current='page'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/users' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Users
              </NavLink>
            </li>{' '}
            {!token && (
              <li className='nav-item'>
                <NavLink
                  to='/auth?mode=login'
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  Auth
                </NavLink>
              </li>
            )}
            {token && (
              <li className='nav-item mt-1'>
                <Form method='POST' action='/logout'>
                  <button className='btn btn-sm btn-danger'>Logout</button>
                </Form>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default MainNavigation;
