import React, { ReactNode } from 'react'
import { NavBar } from './_components/navbar'
import { Sidebar } from './_components/sidebar'
import { Container } from './_components/container'


export default function BrosweLayout({children}: {children: React.ReactNode}) {
  return (
    <>
        <NavBar />
        <div className='flex h-full pt-20'>
            <Sidebar />
            <Container>
            {children}
            </Container>
        </div>
    </>
  )
}
