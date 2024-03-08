import React from 'react'

const Subtext = ({text,splitF}) => {
  return (
    <>
    <div className="text-white mt-3 text-xl">
            <p>
              <span className="text-rose-500 font-semibold">{text.length}</span> characters and <span className="text-rose-500 font-semibold">{splitF()}</span> words
            </p>
          </div>
    
    </>
  )
}

export default Subtext
