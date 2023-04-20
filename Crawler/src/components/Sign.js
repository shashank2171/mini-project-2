import React,{useState} from 'react';
import SignInForm from "./SignInForm.js";
import SignUpForm from "./SignUpForm.js";

export default function Sign() {
    const [isShown, setIsShown] = useState(false);
    const [isShownSignUp, setIsShownSignUp] = useState(true);
  
    const handleClick = event => {
      // 👇️ toggle shown state
      setIsShown(current => !current);
      setIsShownSignUp(current => !current);
  
      // 👇️ or simply set it to true
      // setIsShown(true);
    };
  
    return (
      <div>
      <div className="confirmBox">
        <div className="confirm">already registered?</div>
        <button onClick={handleClick} className="click">Log In</button>
        </div>
        {/* 👇️ show elements on click */}
        {isShown}
  
        {/* 👇️ show component on click */}
        {isShown && <SignInForm />}
        {isShownSignUp}
  
        {/* 👇️ show component on click */}
        {isShownSignUp && <SignUpForm />}
      </div>
    );
  }
  