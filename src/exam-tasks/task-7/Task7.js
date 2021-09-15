import React from 'react';

const Task7 = () => {
  return (
    <div>
      <h3>Task 7</h3>
      <p>
        <b>JOKE:</b>{' '}
        <i>
          Why couldn’t the React component understand the joke? Because it
          didn’t get the context.
        </i>
      </p>
      <p>
        <b>EXPLANATION:</b>
        <i>
          React komponentas nesuprato pokšto kurį jam bande perduoti kitas
          komponentas. Nes norint perduoti kokią nors informaciją iš vieno
          komponento į naudojami props arba useContext. Kitu atvėju ką
          bebandytum perudoti (kaip pvz. pokštą) komponentas to "negaus".
        </i>
      </p>
    </div>
  );
};

export default Task7;

/* Task 7
Įsivaizduokite, kad papasakojate žemiau pateiktą JOKE kolegai, kuris nėra dirbęs
su React.js ir jis nesijuokia, nes nesuprata jo. Paaiškinkite žemiau jį jam

JOKE:
Why couldn’t the React component understand the joke? 
Because it didn’t get the context.

Jūsų paaiškinimas:

*/
