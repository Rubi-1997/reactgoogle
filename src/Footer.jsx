import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin, faMedium, faTwitter } from "@fortawesome/free-brands-svg-icons"
import {faCopyright} from "@fortawesome/free-regular-svg-icons"
const Footer = () => {
      return (
            <section className='footersection'>
                  <div className='container-fluid text-center content'>
                        <div className='row'>
                              <div className='col-lg-4 col-md-4 col-12'>
                                    <div className='social-media '>
                                          <label>
                                                Follow Us
                                          </label>
                                          <a>
                                                <FontAwesomeIcon icon={faFacebook} />
                                                Facebook
                                          </a>
                                          <a>
                                                <FontAwesomeIcon icon={faTwitter} className='mr-2'/>
                                                Twitter
                                          </a>
                                          <a>
                                                <FontAwesomeIcon icon={faMedium} />
                                                Medium
                                          </a>
                                          <a>
                                                <FontAwesomeIcon icon={faLinkedin} />
                                                Linkedin
                                          </a>
                                    </div>


                              </div>

                              <div className='col-lg-4 col-md-4 col-12'>
                                    <div className='social-media mt-2'>
                                          
                                          <a>
                                                
                                                Facebook
                                          </a>
                                          <a>
                                               
                                                Twitter
                                          </a>
                                          <a>
                                              
                                                Medium
                                          </a>
                                          <a>
                                                Linkedin
                                          </a>
                                    </div>


                              </div>
                              <div className='col-lg-4 col-md-4 col-12'>
                                    <div className='social-media mt-2'>
                                   <a><img src="http://ekak.in/assets/images/Ekak-12.png"  className="ekak" alt="image"></img></a>
                               
                                   <span className='text-center'><FontAwesomeIcon icon={faCopyright} /> Copyright Ekak Innovations Private Limited 2021</span>
                                   </div>
                              </div>


                        </div>
                  </div>
            </section>
      )
}

export default Footer
