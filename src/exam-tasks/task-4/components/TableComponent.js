import React, { useState, useEffect, useRef } from 'react';

let loading = useRef(true)
const TableComponent = () => {
  return <table>
      <thead></thead>
      <tbody>
        {loading&&(<tr><td></td><td></td><td></td></tr>)}
      </tbody>
  </table>;
};

export default TableComponent;
