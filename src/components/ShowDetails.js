import { Form, Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

const ShowDetails = ({ user }) => {
  const submit = useSubmit();
  const token = useRouteLoaderData('root');

  const deleteHandler = (event) => {
    event.preventDefault();
    const canDelete = window.confirm('Do you want to delete?');

    if (canDelete) {
      // proceed for delete action
      submit(null, { method: 'POST' });
    }
  };
  return (
    <div className='card flex-row mx-auto' style={{ width: '35rem' }}>
      <img style={{ width: '50%' }} src={user.avatar} alt='User avatar' />
      <div className='card-body'>
        <div className='d-flex justify-content-between'>
          <h5 className='card-title p-2'>
            {user.name}{' '}
          </h5>
        </div>

        <div className='card-text'>
          <ul className='list-group' style={{ textAlign: 'left' }}>
            <li className='list-group-item'>
              Email: {user.email}{' '}
            </li>
            <li className='list-group-item'>
              Phone: {user.phone}{' '}
            </li>
            <li className='list-group-item'>
              Address: {user.address.street}, {user.address.city}, {user.address.state} {user.address.zip}{' '}
            </li>
          </ul>
        </div>
        {token && (
          <div className='user-actions mt-2'>
            <Link to='edit' className='btn btn-sm  btn-primary m-1'>
              Edit
            </Link>

            <button className='btn btn-sm btn-danger m-1' onClick={deleteHandler}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ShowDetails;
