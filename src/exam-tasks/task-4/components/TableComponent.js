import axios from 'axios';
import React, { useState, useEffect } from 'react';

const TableComponent = () => {
  const [loaded, setloaded] = useState(false);
  const [allUsers, setallUsers] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      console.log(res.data);
      setallUsers(res.data);
      setloaded(true);
    });
  }, []);
  const userAdress = allUsers.map((user) => user.address);
  if (userAdress) {
    console.log('userAdress: ', userAdress);
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Adress</th>
          <th>Phone</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {loaded &&
          allUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.address.street}, {user.address.city}
              </td>
              <td>{user.phone}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
