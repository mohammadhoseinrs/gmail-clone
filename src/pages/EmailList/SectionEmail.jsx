import React from 'react'
import './Section.css'

export default function SectionEmail({Icon, title , color ,selected}) {
  return (
    <div className={`sectionemail ${selected && 'section--selected'}`}
      style={{
        borderBottom:`3px solid ${color}`,
        color:`${selected && color}`
      }}
    >
       <Icon />
        <h4>{title}</h4>
    </div>
  )
}
