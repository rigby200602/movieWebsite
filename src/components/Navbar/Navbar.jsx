import React from 'react'

const Navbar = () => {
    return (
        <div className='text-white fixed top-0 left-0 flex justify-between mx-20 w-[90%]'>
                <div className='flex items-center h-full gap-[20px]'>
                    <a className='h-full text-lg font-medium text-center cursor-pointer hover:bg-white hover:text-black py-1.5 px-1.5'
                        href='https://www.facebook.com/fensub20'>
                        Home
                    </a>
                    <a className='h-full  text-lg font-medium text-center cursor-pointer hover:bg-white hover:text-black py-1.5 px-1.5'
                        href='#'>
                        Fensub
                    </a>
                </div>
                <div className='flex items-center h-full'>
                    <a className='h-full  text-lg font-medium text-center cursor-pointer hover:bg-white hover:text-black py-1.5 px-1.5'
                        href='#'>
                        Danny Phantom
                    </a>
                    <a className='h-full  text-lg font-medium text-center cursor-pointer hover:bg-white hover:text-black py-1.5 px-1.5'
                        href='#'>
                        Digata Defenders
                    </a>
                </div>
        </div>
    )
}

export default Navbar
