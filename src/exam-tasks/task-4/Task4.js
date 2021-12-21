import React from 'react';
import TableComponent from './components/TableComponent';
function Task4() {
  return (
    <div className='task4-div'>
      <h3>Task 4</h3>
      <TableComponent />
    </div>
  );
}

export default Task4;

/* Task 4
Atkurkite lentelę, kurioje bus randama ši informacija apie vartotoją:
- name;
- email;
- address (street + city pvz.: "Kulas Light, Gwenborough");
- phone;
- company (name).

Informaciją imkite iš čia: https://jsonplaceholder.typicode.com/users

Pastaba: naudokite useState, useEffect.
*/
