import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateContactForm } from "../../utils/validateContactForm";

import Reddit from "../Logos/Reddit";
import Facebook from "../Logos/Facebook";
import Github from "../Logos/Github";
import Linkedin from "../Logos/Linkedin";

const Contact = () => {
    const form = useRef();
    const [isMessageSent, setIsMessageSent] = useState(false);

    const sendEmail = async (values) => {
        try {
            await emailjs.send('service_b4yo1cd', 'template_uch9agt', values, {
                publicKey: 'CMlkIznQap6_nJACf',
            });
            setIsMessageSent(true);
            console.log('SUCCESS!');
        } catch (error) {
            setIsMessageSent(false);
            console.log('FAILED...', error.text);
        }
    };

    const handleSubmit = async (values, { resetForm }) => {
        // Call sendEmail to send the email
        await sendEmail(values);

        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));

        // Reset the form
        resetForm();
    };

    return (
        <div className="contact-content" id="contact">
            <div className="contact-description">
                <h5>I WOULD LOVE TO HEAR FROM YOU</h5>
                <h1 className="contact-title">LET'S CONNECT</h1>
            </div>
            <div className="contact-info-form-container">
                <div className="contact-info">
                    <div className="contact-details">
                        <p className="hotline">Hotline 24/7</p>
                        <h6 className="phone-number">(+639) 759483289</h6>
                        <p className="address"><span className="info-label">Address:</span> Zone 1, Purok Sudlonon, Iligan City </p>
                        <p className="email"><span className="info-label">Email:</span> daligdig.jephmari@gmail.com</p>
                        <p className="fax"><span className="info-label">Fax:</span> (702) 555-0122</p>
                        <p className="work-hour"><span className="info-label">Work Hour:</span> Mon - Sat: 9:00 - 18:00</p>
                    </div>
                    <div className="social">
                        <p className="follow-me">Follow Me:</p>
                        <div className="social-icons">
                            <Reddit />
                            <Facebook />
                            <Github />
                            <Linkedin />
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    {isMessageSent ? (
                        <div className="success-message">
                            <h2>Thank you!</h2>
                            <p>Your message has been sent successfully.</p>
                            <p>I will be in touch with you shortly.</p>
                        </div>
                    ) : (
                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                phoneNum: '',
                                email: '',
                                feedback: ''
                            }}
                            validate={validateContactForm}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form ref={form} className="contact-form-container">
                                    <FormGroup row>
                                        <Col md='6'>
                                            <Field
                                                name='firstName'
                                                placeholder='First Name*'
                                                className='form-control firstName-input'
                                            />
                                            <ErrorMessage name='firstName'>
                                                {(msg) => <p className='text-danger error-message'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                        <Col md='6'>
                                            <Field
                                                name='lastName'
                                                placeholder='Last Name*'
                                                className='form-control lastName-input'
                                            />
                                            <ErrorMessage name='lastName'>
                                                {(msg) => <p className='text-danger error-message'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md='12'>
                                            <Field
                                                name='phoneNum'
                                                placeholder='Phone*'
                                                className='form-control phoneNum-input'
                                            />
                                            <ErrorMessage name='phoneNum'>
                                                {(msg) => <p className='text-danger error-message'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md='12'>
                                            <Field
                                                name='email'
                                                placeholder='Email*'
                                                type='email'
                                                className='form-control email-input'
                                            />
                                            <ErrorMessage name='email'>
                                                {(msg) => <p className='text-danger error-message'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md='12'>
                                            <Field
                                                name='feedback'
                                                as='textarea'
                                                rows='12'
                                                placeholder='How can I help you?'
                                                className='form-control message-input'
                                            />
                                            <ErrorMessage name='feedback'>
                                                {(msg) => <p className='text-danger error-message'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md='4'>
                                            <Button className="sendMessage-button" type='submit' color='primary' disabled={isSubmitting}>
                                                Request Now
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            )}
                        </Formik>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contact;
