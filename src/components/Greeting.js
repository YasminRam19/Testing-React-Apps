//We have some state, which should change when a button is clicked.
//If that button is clicked some text on the screen changes.
//We want to test if that works correctly.

import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText && <Output>It's good to see you</Output>}
      {changeText && <p>Changed! </p>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
