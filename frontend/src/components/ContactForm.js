import React from 'react'

function ContactForm() {
    return (
        <>
        <div class="container">
                <div class="contact">
                    <div class="col-lg-8 wow fadeInUp" data-wow-delay="0.3s"
                        styles={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInDown'}}>

                        <div class="contact-us-section">
                            <form class="contact-us-form form-validation">
                              <input
                                class="hover-tooltip"
                                name="email"
                                type="email"
                                placeholder="Email Address*"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="*Enter Your Email"
                                required="true"
                                id="email"
                              />
                              <input
                                type="text"
                                placeholder="Subject*"
                                id="subject"
                                name="sub"
                                required="true"
                              />
                              <textarea
                                placeholder="Your Message*"
                                id="message"
                                name="message"
                                required="true"
                              ></textarea>
                              <div class="theme-button">
                                <span></span>
                                <input id="submit" type="submit" value="Submit" />
                              </div>
                            </form>
                          </div>

                    </div>
                </div>
            </div>
            
        </>
    )
}

export default ContactForm
