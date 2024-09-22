import React from 'react'

const Layout = ({children,className=""}) => {
    return (
        <div className={'w-full h-full inline-block z-0 bg-light pt-0 p-40 pl-20 pr-20 dark:bg-dark xl:p=24 lg:16 md:p-12 sm:p-8 ${className}'}>
            {children}
        </div>

    )
}

export default Layout;