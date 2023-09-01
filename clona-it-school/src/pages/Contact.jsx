import React, { useEffect, useRef, useState } from 'react'
import "../Styles/Contact.css"

// Bootstrap component
import { Container, Row, Col } from "react-bootstrap"
import { Button } from 'react-bootstrap'

// Icons for contact details on the left
import { FaMobileAlt } from "react-icons/fa"
import { AiTwotoneMail } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { TbClockHour4 } from "react-icons/tb"
import { ImLocation } from "react-icons/im"

// The icons for the contact methods in the Footer section
import { BsWhatsapp } from "react-icons/bs"
import { ImLinkedin2 } from "react-icons/im"
import { AiOutlineMail } from "react-icons/ai"
import { FaFacebookMessenger } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import { PiPhoneDisconnect } from "react-icons/pi"



export default function Contact() {
  let inputName = useRef(null)
  let inputEmail = useRef(null)
  let inputNumber = useRef(null)
  useEffect(() => {
    inputName.current.focus();
  }, [])
  const [values, setValue] = useState({
    user_name: "",
    email: "",
    number: ""
  });
  const [submit, setSubmit] = useState(false);
  const handleNameChange = (e) => {
    setValue({ ...values, user_name: e.target.value })
  }
  const handleEmailChange = (e) => {
    setValue({ ...values, email: e.target.value });
  }
  const handleNumberChange = (e) => {
    setValue({ ...values, number: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.user_name) {
      inputName.current.focus();
    } else if (!values.email) {
      inputEmail.current.focus();
    } else if (!values.number) {
      inputNumber.current.focus();
    }
    setSubmit(true);
  };
  return (
    <>
      {/* //   Header section */}
      <header className='headerCursesSection'>
        <h1 className='titleHeader '>Contact IT School</h1>
      </header>


      {/* Information about contact details */}
      <main>
        <h2 className='titleTraining'>Informații generale</h2>
        <p className='paragraphContact'>
          <b> Nu ai găsit ce căutai sau te putem ajuta și cu alte informații referitoare la
          programele de pregătire IT School? Suntem aici să te ajutăm. Îți reamintim că pe
          pagina FAQ regăsești o listă cu cele mai frecvente întrebări. </b>
        </p>
        <p className='paragraphcontact'>
          <b> Ne poți găsi la: </b> 
        </p>
        <Container>
          <Row className='rowContact'>
            <Col className='leftSection'>
              <FaMobileAlt />
              <span className='deviceContact'> <b> Mobil: </b> </span> <span className='contactInfo contactInfoNumber'> <a href='+40 737 880 420'> <b> +40 737 880 420 </b> </a> </span>
              <hr />
              <AiTwotoneMail />
              <span className='deviceContact'> <b> E-mail: </b> </span> <span className='contactInfo contactInfoEmail'> <b> office@itschool.ro </b> </span>
              <hr />
              <BsFacebook />
              <span className='deviceContact'> <b> Facebook: </b> </span> <span className='contactInfo contactInfoFacebook'><a href='https://www.facebook.com/itschool.ro/'> <b> /ITSchool </b> </a> </span>
              <hr />
              <TbClockHour4 />
              <span className='deviceContact'> <b> Program: </b> </span> <span className='programInfo programInfoTimetable'> <b> Luni - Vineri, de la 10:00 - 18:00 </b> </span>
              <hr />
              <ImLocation />
              <span className='deviceContact'> <b> Sediu central: </b> </span> <span className='contactInfo contactInfoCenter'> <b> Timișoara </b> </span>
              <hr />
            </Col>
            <Col>
              <form onSubmit={handleSubmit} className='col-md-5'>
                {/* Name Form */}
                <div>
                <label className='personalData dddddd' htmlFor='name'  > <b> Full Name </b> </label> <br />
                <input type='text' name='name' placeholder='Enter your full name' ref={inputName} value={values.user_name} onChange={handleNameChange} /> <br />
                {submit && !values.user_name ? (
                  <label className='text-danger fs-sm'>Please enter your full name</label>
                ) : null} <br />
                </div>
                {/* Email Form */}
                <label className=' personalData' htmlFor='email'> <b> Email: </b> </label><br />
                <input type='text' name='email' placeholder='Enter your email..' ref={inputEmail} value={values.email} onChange={handleEmailChange} /><br />
                {submit && !values.email ? (
                  <label className='text-danger fs-sm'>Please enter your email</label>
                ) : null} <br />
                {/* Phone Form */}
                <label className='personalData' htmlFor='phone'> <b> Phone: </b> </label><br />
                <input type='number' name='phone' placeholder='Enter your number...' ref={inputNumber} value={values.number} onChange={handleNumberChange} /><br />
                {submit && !values.number ? (
                  <label className='text-danger fs-sm'>Please enter your number</label>
                ) : null} <br />
                <Button className='headerButton contactButton' > <b> Trimite Mesajul </b> </Button>
              </form>
            </Col>
          </Row>
        </Container>
        <p className='mainSecond'></p>

      </main>
      {/* The Footer part */}
      <footer className='footerSection'>
        <p className='footertext'>IT School România © 2021. Toate drepturile rezervate.</p>
        <div className='ContactUs'>
          <a href="https://wa.me/+40753397908" > <BsWhatsapp className='WhatApp' /> </a>
          <a href="https://www.linkedin.com/in/DanutTrifan/" > <ImLinkedin2 className='Linkedin' /> </a>
          <a href='email:trifandanutiacob@gmail.com'> <AiOutlineMail className='Mail' /> </a>
          <a href='https://l.facebook.com/l.php?u=https%3A%2F%2Fm.me%2Fdani.trifan.5%3Ffbclid%3DIwAR04bQAX8Is2x4oK_sxdYq3_Lb5qi1pDlfpJ8HREZbGpLfXTltOPTsHmFXk&h=AT0JR2YlVwWOHjoeUkFnSFD85riq1SJCAj1rHz6MEErQc6Kg8_6FVdmTs5FF_82HVQZIQxObSrehKyZU4m4d2Kznti9ty-AFgUmIS8xDtaqo_kUOFvY7pfw56P8kvJATgVn711lSiZ6LwclKrHMczQ' > <FaFacebookMessenger className='Messanger' /> </a>
        </div>
        <div className='CallUs'>
          <FaPhoneAlt className='Mobile' /> <span className='MobileN'> <b> +40 737 880 420 </b> </span>
          <PiPhoneDisconnect className='MobileFix' /> <span className='MobileFixN'> <b>	0258739127 </b> </span>
        </div>
      </footer>
    </>
  )
}