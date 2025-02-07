import React from 'react'

const Footer = () => {
  return (
    <div className='flex bg-slate-800 text-white flex-col items-center justify-center w-full'>
      <div className="logo font-bold text-white text-2xl">
          <span className="text-green-500">&lt;</span>
          Pass<span className="text-green-500">Op/&gt;</span>
        </div>
      <div className='flex justify-center items-center'>
      Created with <img src="/heart.png" alt="heart" className='w-5 mx-2' /> by PallaviShelavale
      </div>
      
    </div>
  )
}

export default Footer
