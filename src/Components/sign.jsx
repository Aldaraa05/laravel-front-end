import { SignIn } from "./signIn";
import { SignUp } from "./signUp";
import { createContext } from "react";
import { useState } from "react";
export const SignContext = createContext();
export const Sign = () => {
  const [sign, setSign] = useState(true);
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
      <SignContext.Provider value={[sign, setSign]}>
        {sign ? <SignIn /> : <SignUp />}
      </SignContext.Provider>
    </div>
  );
};
