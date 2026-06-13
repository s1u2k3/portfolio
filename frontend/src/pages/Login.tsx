import { useState } from "react";

import {

FaUserShield,

FaEye,

FaEyeSlash

}

from "react-icons/fa";

import api from "../services/api";

import "../styles/Login.css";

function Login(){

const [username,setUsername]

=useState("");

const [password,setPassword]

=useState("");

const [msg,setMsg]

=useState("");

const [showPassword,

setShowPassword]

=useState(false);

const [loading,

setLoading]

=useState(false);



const login=async(

e:any

)=>{

e.preventDefault();

setLoading(true);

setMsg("");


try{

const response=

await api.post(

"/auth/login",

{

username,

password

}

);


if(

response.data.message

===

"Login Successful"

){

localStorage.setItem(

"isAdmin",

"true"

);

window.location.href=

"/admin";

}

else{

setMsg(

"Invalid Credentials"

);

}

}

catch(error){

setMsg(

"Login Failed"

);

}


setLoading(false);

};



return(

<div className="login-page">


<div className="login-card">


<div className="icon-box">

<FaUserShield/>

</div>



<h1>

Welcome Back

</h1>


<p>

Login to your

Admin Dashboard

</p>



<form

onSubmit={login}

>


<input

type="text"

placeholder="Username"

value={username}

onChange={(e)=>

setUsername(

e.target.value

)

}

required

/>


<div

className="password-box"

>

<input

type={

showPassword

?

"text"

:

"password"

}

placeholder=

"Password"

value={password}

onChange={(e)=>

setPassword(

e.target.value

)

}

required

/>


<span

onClick={()=>

setShowPassword(

!showPassword

)

}

>

{

showPassword

?

<FaEyeSlash/>

:

<FaEye/>

}

</span>

</div>



<button

className="login-btn"

disabled={loading}

>

{

loading

?

"Logging In..."

:

"Login"

}

</button>



{

msg

&&

<p

className="error"

>

{msg}

</p>

}


</form>

</div>

</div>

)

}

export default Login;