import React, { ReactNode } from 'react'
import { NavBar } from './_components/navbar'

export default function BrosweLayout({children}: {children: React.ReactNode}) {
  return (
    <>
        <NavBar />
        <div className='flex h-full pt-20'>
            {children}
        </div>
    </>
  )
}
