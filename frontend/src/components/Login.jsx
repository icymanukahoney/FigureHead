import React from 'react'
import { useState } from "react";

const Login = () => {
  
  // I think this is right, I'm unsure check this over using two methods
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  // handleSubmit function
  const handleSubmit = async (e) => {

    e.preventDefault();

    await login(email, password);
  };

  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
      {/* paste the code that is broken in once merge is over */}
      </form>
      
    </div>
  )
}

export default Login
