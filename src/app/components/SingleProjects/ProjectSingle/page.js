import React, {Fragment} from 'react';
import {Dialog, Grid,} from '@mui/material';
import Contact from '../Contact/Page';
import RelatedProject from './Related/page';
import Image from 'next/image';


const ProjectSingle = ({maxWidth, open, onClose, title, pImg, psub1img1, psub1img2,}) => {
    return (
        <>
            <Dialog
                open={open}
                onClose={onClose}
                className='modalWrapper quickview-dialog'
                maxWidth={maxWidth}
            >
                <Grid className='modalBody modal-body project-modal'>
                    <button className='modal-close' onClick={onClose}>
                        <i className='fa fa-close'></i>
                    </button>
                    <div className='tp-project-single-area'>
                        <div className='container'>
                            <div className='flex flex-wrap justify-center'>
                                <div className='w-full'>
                                    <div className='tp-project-single-wrap'>
                                        <div className='tp-project-single-item'>
                                            <div className='flex flex-wrap items-center mb-5'>
                                                <div className='w-full lg:w-7/12'>
                                                    <div className='tp-project-single-title'>
                                                        <h3>{title} Project</h3>

                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere
                                                        amet
                                                        tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum
                                                        cursus
                                                        velit dui. Massa volutpat odio facilisis purus sit elementum. Non.</p>
                                                    <p>Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat
                                                        odio
                                                        facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra
                                                        est, at
                                                        rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam</p>


                                                </div>
                                                <div className="w-full lg:w-5/12">
                                                    <div className='tp-project-single-content-des-right'>
                                                        <ul>
                                                                <li>Location :<span>7 Lake Street,London</span></li>
                                                                <li>Client :<span>wpOceans</span></li>
                                                                <li>Consult :<span>Harry Johnson</span></li>
                                                                <li>Project Type :<span>Tonu React</span></li>
                                                                <li>Duration :<span>6 Month</span></li>
                                                                <li>Completion :<span>15 Apr 2023</span></li>
                                                                <li>Share :<span>Creative, Portfolio</span></li>
                                                            </ul>

                                                    </div>

                                                </div>

                                            </div>
                                            <div className='tp-project-single-main-img'>
                                                <Image src={pImg} alt=""/>

                                            </div>

                                        </div>
                                        <div className='tp-project-single-item list-widget'>
                                            <div className='flex flex-wrap'>
                                                <div className='w-full lg:w-6/12'>
                                                    <div className='tp-project-single-title'>
                                                        <h3>Our Strategies</h3>

                                                    </div>
                                                    <p>
                                                        Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum
                                                        quam. Id
                                                        risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis
                                                        sollicitudin diam.

                                                    </p>

                                                    <ul>
                                                        <li>Non saed velit dictum quam risus pharetra esta.</li>
                                                        <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                                        <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                                        <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                                        <li>Elit curabitur amet risus bibendum.</li>
                                                    </ul>

                                                </div>

                                                <div className='w-full lg:w-6/12'>
                                                    <div className='tp-project-single-item-quote'>
                                                    <p>"Amazing looking theme and instantly turns your application into a great
                                                            looking one. Really shows that pro_ fessionals built this theme up. Very
                                                            happy with the way the theme looks ."</p>
                                                        <span>Robert - <span>Yellow Theme</span></span>

                                                    </div>

                                                </div>

                                            </div>



                                        </div>
                                        <div className='tp-project-single-item'>
                                            <div className='tp-project-single-title'>
                                                <h3>Our Approach</h3>

                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean
                                                tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi
                                                eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit
                                                elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae
                                                id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem
                                                adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce
                                                vulputate diam interdum morbi ac a.</p>


                                        </div>
                                        <div className='tp-project-single-gallery'>
                                            <div className='flex flex-wrap mt-4'>
                                                <div className="w-full sm:w-1/2 md:w-1/2">
                                                    <div className='tp-p-details-img'>
                                                        <Image src={psub1img1} alt=""/>

                                                    </div>

                                                </div>
                                                <div className=''>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </Grid>

            </Dialog>
        </>
    )
}