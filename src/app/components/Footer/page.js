import React from 'react'
import Link from 'next/link'
import Logo from '/public/images/logo.png'
import Image from 'next/image'

const Footer = (props) => {
    return(
        <div className='tp-site-footer text-center'>
            <div className='container'>
                <div className='flex flex-wrap'>
                    <div className='w-full'>
                        <div className='footer-image'>
                            <Link className='logo' href="/"><Image src={logo} alt=""/></Link>

                        </div>


                    </div>
                    <div className='flex flex-wrap'>
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
                            <p>© 2023. All rights reserved by themepresss.</p>

                        </div>

                    </div>



                </div>

            </div>

        </div>
    )
}

export default Footer;