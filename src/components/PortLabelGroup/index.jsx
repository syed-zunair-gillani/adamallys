'use client'
import React, { useState } from 'react'

const PortLabelGroup = ({ labels }) => {
  const [selected, setSelected] = useState('');

  const handleSelection = (option) => {
    setSelected(selected === option ? '' : option)
  }

  return (
    <div className="flex items-center justify-center gap-[12px] flex-wrap">
      {labels?.map(label =>
        <div
          key={label}
          onClick={() => handleSelection(label)}
          className={`font_calibri uppercase cursor-pointer text-center text-[16px] leading-[24px] py-[5px] px-[17px] rounded-[20px]  ${selected === label ? "text-white bg-[#717DFF]" : "text-theme-main bg-[#E0E2FB]"}`}
        >
          {label}
        </div>
      )}
    </div>
  )
}

export default PortLabelGroup