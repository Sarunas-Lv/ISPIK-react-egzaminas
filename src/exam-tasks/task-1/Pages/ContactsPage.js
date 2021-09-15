import React from 'react';
import { Link } from 'react-router-dom';

const ContactsPage = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <div className='task1-button'>
        <ul>
          <li>
            <Link to='/'>Go back</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactsPage;
