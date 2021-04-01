import React, {useState} from "react"
import emailjs from 'emailjs-com';

const Contact = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("submitted")
    if(!name || !email || !message){
      setError("Please provide all fields")
      return;
    }

    const contactInfo = {name, email, message}

    //Send email
    emailjs.sendForm('gmail', 'contact_form', e.target, 'user_qp3JSB4wVggxBynX4fuGR')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
        e.target.reset();
      });
    setError("")
    setName("")
    setEmail("")
    setMessage("")


    setSuccess("Message Sent Successfully :)")
    setTimeout(() => {
      setSuccess("redirecting...")
      setError("")
    }, 2000)

    setTimeout(()=> {
      props.history.push("/")
    }, 3000)

  }

  return (
    <>

      <div className="container mt-5 mg_top">

        <div className="row">
          <div className="col-sm-0 col-lg-2"></div>
          <div className="col-sm-12 col-lg-8">
            <h1 className="glass_1" style={{textAlign: "center", width: "100%", marginBottom: "15px", marginTop: "15px"}}>Contact us</h1>
            <form onSubmit={sendEmail}>
              <div className={error && "error"} style={{textAlign: "center"}}>{error}</div>
              <div className={success && "alert-success"} style={{textAlign: "center"}}>{success}</div>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input name="name" className="form-control" onChange={(e) => setName(e.target.value)} type="text" value={name} placeholder="Please provide your name"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input name="email" className="form-control" type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email please..."/>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea name="message" className="form-control" type="text"  rows="10" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Leave a message..."/>
              </div>
              <input className="btn btn-primary btn-block" type="submit" value="SEND"/>
            </form>
          </div>
          <div className="col-sm-0 col-lg-2"></div>
        </div>
      </div>
    </>
  )
}

export default Contact
