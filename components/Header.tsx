import React from 'react'
import { Button } from "@/components/ui/button";


function Header() {
  return (
    <div className='bg-lime-900 text-lime-300 px-10'>
    <div className='flex justify-between container mx-auto items-center '>
      <div>
        <h1 className="text-3xl font-bold text-center my-4">Feedback App</h1>
      </div>
      <div>
        <Button> Login</Button>
      </div>
    </div>
    </div>
  )
}

export default Header
