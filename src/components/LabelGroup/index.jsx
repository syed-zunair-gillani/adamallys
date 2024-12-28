import React from 'react'

const LabelGroup = ({ labels }) => {
  return (
    <div className="flex items-center justify-center gap-[5px]">
      {labels?.map(label =>
        <div className='font_calibri text-theme-main text-[12px] leading-[18px] py-[4px] px-[12px] rounded-[20px] bg-white' key={label?.Name}>{label?.Name}</div>
      )}
    </div>
  )
}

export default LabelGroup