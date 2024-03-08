import React from 'react'
import PropTypes from 'prop-types'
const AnalyzeText = ({text,onChangeo,row,col}) => {
  return (
   
          <div >
      <div >
            <h1 className="font-bold text-3xl text-gray-300">
              Analyze the text here
            </h1>
          </div>
          <div>
            <textarea
              cols={col}
              rows={row}
              placeholder="Enter text here....."
              value={text}
              className="border-black mt-10 mb-5 p-5 outline-none "
              onChange={onChangeo}
            ></textarea>
          </div>
    </div>
  )
}

AnalyzeText.defaultProps = {
  row:10,
  col:80

}

export default AnalyzeText
