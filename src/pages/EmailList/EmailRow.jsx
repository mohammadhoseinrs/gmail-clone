import { Checkbox, IconButton } from '@mui/material'
import React from 'react'
import './EmailRow.css'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { Link } from 'react-router-dom';

export default function EmailRow({id ,title , subject , description , time}) {
  return (
    <Link to={'/mail'} className='emailrow'>
        <div className="emailrow__options">
            <Checkbox />
            <IconButton >
                <StarBorderOutlinedIcon />
            </IconButton>
            <IconButton >
                <LabelImportantOutlinedIcon />
            </IconButton>
        </div>
        <h3 className="emailrow__title">
            {title}
        </h3>
        <div className="emailrow__message">
            <h4>{subject} {' '}
            <span className="email_rowdescription">
                -{description}
            </span>
            </h4>
        </div>
        <p className="emailrow__time">
            {time}
        </p>
    </Link>
  )
}
