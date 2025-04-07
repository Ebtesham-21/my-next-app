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