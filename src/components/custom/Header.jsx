import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center w-full fixed top-0 left-0 right-0 bg-white px-5">
      <img src="/logo.svg" className="h-10 w-auto" alt="Logo" />
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  )
}

export default Header
