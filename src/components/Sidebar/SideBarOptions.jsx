import React from 'react'
import './SideBarOptions.css'

export default function SideBarOptions({Icon , title , number ,selected}) {
  return (
    <div className={`sidebaroption ${selected && 'sidebaroption__active'}`}>
        <Icon />
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
  )
}
