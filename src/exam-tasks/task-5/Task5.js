import React, { useRef } from 'react';

function Task5() {
  // refs
  let divRef = useRef(null);
  // custom function

  const lightTheme = () => {
    divRef.current.style.background = '#f1f1f1';
    divRef.current.style.color = '#000000';
  };
  const darkthemeTheme = () => {
    divRef.current.style.background = '#000000';
    divRef.current.style.color = '#f1f1f1';
  };
  return (
    <div className='task5-div' ref={divRef}>
      <h3>Task 5</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officia
        commodi, hic praesentium non a facere! Blanditiis cum obcaecati est.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nisi
        velit labore ab repellendus magni!
      </p>
      <button onClick={lightTheme}>Light theme</button>
      <button onClick={darkthemeTheme}>Dark theme</button>
    </div>
  );
}

export default Task5;

/* Task 5
Task 5 komponento viduje sukurkite h1 ir p žymas su tekstu ir du mygtukus.

Vienas mygtukas vadinsis "Light theme", kurį paspaudus Task5 komponento fonas
taps šios spalvos #f1f1f1, o tekstas #0000.
Kitas mygtukas vadinsis "Dark theme", kurį paspaudus Task5 komponento fonas
taps šios spalvos #000000, o tekstas #f1f1f1.

Pastabos:
- mygtukai turi būti atvaizduojami komponento viduje, jiems atskirų komponentų
kurti nereikia;
- panaudokite useRef.
*/
