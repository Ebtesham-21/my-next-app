import React from 'react'
import Link from 'next/link'
import Logo from '/public/images/logo.png'
import Image from 'next/image'

const Footer = (props) => {
    return(
    <section className='container mx-auto bg-black'>  
        <div className='tp-site-footer text-center  '>
            <div className='container '>
                <div className='flex flex-wrap'>
                    <div className='w-full'>
                        <div className='footer-image  flex justify-center'>
                            <Link className='logo' href="/"><Image src={Logo} alt=""/></Link>

                        </div>


                    </div>
                    <div className='w-full'>
                        <div className='link-widget'>
                            <ul>
                                <li><Link href="/"><i className="ti-facebook"></i></Link></li>
                                <li><Link href="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link href="/"><i className="ti-linkedin"></i></Link></li>
                                <li><Link href="/"><i className="ti-pinterest"></i></Link></li>
                                <li><Link href="/"><i className="ti-vimeo-alt"></i></Link></li>
                            </ul>

                        </div>

                    </div>
                    <div className='w-full'>
                        <div className='copyright'>
                            <p>© 2025. All rights reserved by 99explainers.</p>

                        </div>

                    </div>



                </div>

            </div>

        </div>
        </section>  
    )
}

export default Footer;