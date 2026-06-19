import { useState } from "react";
import api from "../services/api";
import "../styles/Contact.css";

function Contact() {

  const [form,setForm]=useState({
    name:"",
    email:"",
    message:"",
  });

  const [status,setStatus]=useState("");

  const handleChange=(e:any)=>{

    setForm({
      ...form,
      [e.target.name]:e.target.value
    });

  };

  const handleSubmit=async(e:any)=>{

    e.preventDefault();

    try{

      const response = await api.post("/contact", form);

console.log(response.data);

setStatus("✅ Message Sent Successfully");

      setForm({
        name:"",
        email:"",
        message:""
      });

    }

    catch(error){

  console.log(error);

  setStatus("❌ Failed to send message");

}
  };

  return(

<div className="contact-page">

<h1>Get In Touch</h1>

<p className="contact-subtitle">

Feel free to contact me for opportunities,
projects or collaborations.

</p>

<div className="contact-container">


<div className="contact-info">

<div className="info-card">

<h3>📧 Email</h3>

<p>

<a href="mailto:bsukhendu48@gmail.com">

bsukhendu48@gmail.com

</a>

</p>

</div>


<div className="info-card">

<h3>📍 Location</h3>

<p>

Kolkata, West Bengal, India

</p>

</div>


<div className="info-card">

<h3>💼 LinkedIn</h3>

<a

href="https://linkedin.com/in/sukhendu-bera-4b6563289"

target="_blank"

rel="noreferrer"

>

View Profile

</a>

</div>


<div className="info-card">

<h3>💻 GitHub</h3>

<a

href="https://github.com/Github-s1u2k3"

target="_blank"

rel="noreferrer"

>

View Profile

</a>

</div>

</div>



<form

className="contact-form"

onSubmit={handleSubmit}

>

<input

type="text"

name="name"

placeholder="Your Name"

value={form.name}

onChange={handleChange}

required

/>


<input

type="email"

name="email"

placeholder="Your Email"

value={form.email}

onChange={handleChange}

required

/>


<textarea

rows={7}

name="message"

placeholder="Write your message..."

value={form.message}

onChange={handleChange}

required

/>


<button type="submit">

Send Message 🚀

</button>


{status &&

<p className="status">

{status}

</p>

}

</form>

</div>

</div>

  )

}

export default Contact;