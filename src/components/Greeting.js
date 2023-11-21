//We have some state, which should change when a button is clicked.
//If that button is clicked some text on the screen changes.
//We want to test if that works correctly.

import { useState } from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText && <p>It's good to see you</p>}
      {changeText && <p>Changed! </p>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
