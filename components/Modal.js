import React from 'react'


const modal = ({ isVisible, onClose, children }) => {
  if ( !isVisible) return null;
  const handleClose = (e) => {
if ( e.target.id === 'wrapper') onClose();
  }
  return (
    // if you want the background to also be clickable or close, add the function onClick={() => onClose() on the div with the backblur} 
    <div className='fixed inset-0 bg-black bg-opacity-25 
    backdrop-blur-md flex justify-center items-center' id='wrapper' onClick={(handleClose) => onClose}>
     
      <div className='w-[600px] flex flex-col '>
        <button className='text-white text-xl place-self-end'
        onClick={() => onClose()}
        >X</button>
          <div className='bg-white p-2 rounded'>
          {children}
          </div>
      </div>
    
    </div>
  )
}

export default modal