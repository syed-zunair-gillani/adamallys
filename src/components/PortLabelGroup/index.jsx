'use client'
import React, { useState } from 'react'

const PortLabelGroup = ({ labels, activePort, setActivePort }) => {
  const [selected, setSelected] = useState('');

  const handleSelection = (option, type) => {
    setSelected(selected === option ? '' : option)
    type === "uae" ? 
    setActivePort({
      ...activePort, uae : option
    }) : setActivePort({
      ...activePort, oman : option
    })
  }

  return (
    <div className="flex items-center justify-center gap-[12px] flex-wrap">
      {labels?.map(label =>
        <div
          key={label?.name}
          onClick={() => handleSelection(label?.name, label.type)}
          className={`font_calibri uppercase cursor-pointer text-center text-[16px] leading-[24px] py-[5px] px-[17px] rounded-[20px]  ${selected === label?.name ? "text-white bg-[#717DFF]" : "text-theme-main bg-[#E0E2FB]"}`}
        >
          {label?.name}
        </div>
      )}
    </div>
  )
}

export default PortLabelGroup