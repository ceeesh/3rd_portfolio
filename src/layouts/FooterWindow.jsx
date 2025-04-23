import React from 'react'

const FooterWindow = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-gray-300 h-[50px] flex justify-between border-t-2 border-t-gray-100
     border-l-2 border-l-gray-100 border-r-2 border-r-gray-600 px-2 py-1">
      <div className="border-l-2 border-t-2 border-r-2 border-b-2 border-l-gray-100 border-t-gray-100 border-r-gray-600 border-b-gray-600 p-1 cursor-pointer">ICON Contact</div>
      <div className="border-l-2 border-t-2 border-r-2 border-b-2 border-l-gray-100 border-t-gray-100 border-r-gray-600 border-b-gray-600 p-1 cursor-pointer">Search</div>
    </div>
  )
}

export default FooterWindow