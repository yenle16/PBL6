import React from 'react'
import Header from '../header-host/Header';
import Footer from '../footer-host/Footer';
import styles from './MainLayout.module.scss';
const MainLayout = ({ children }) => {
    return (
        <div className='flex flex-col'>
            <div className='w-full'>
                <Header />
            </div>

            <div className={`${styles['content']} w-full`}>
                {children}
            </div>
            <div className='w-full'>
                <Footer />
            </div>

        </div>
    )
}

export default MainLayout
