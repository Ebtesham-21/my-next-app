import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const BackToTop = () => {
    return (
        <div className='lg:w-12'>
            <div className='header-menu'>
                <ul className='smoothscroll'>
                    <li>
                        <AnchorLink href="#top">
                            <i className='ti-arrow-up'></i>
                        </AnchorLink>
                    </li>

                </ul>

            </div>

        </div>
    )
}

export default BackToTop;