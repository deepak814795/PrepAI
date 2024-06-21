import React from 'react'
import Header from './_components/Header'
import Headernew from './_components/Headernew'

function DashboardLayout({children}) {
  return (
    <div>
        <Headernew/>
        <div className='mx-5 md:mx-20 lg:mx-36 mt-8'>
        {children}
        </div>
       
    </div>
  )
}

export default DashboardLayout