import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const BackToTop = () => {
    return (
        <div className='fixed bottom-6 right-6 z-50' >
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