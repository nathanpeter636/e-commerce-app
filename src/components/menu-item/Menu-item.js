import React from 'react'

import {withRouter} from 'react-router-dom'

import './menuitem.styles.scss'

function MenuItem({title, imageUrl, size, history, linkUrl, match}) {
    return (

    <div style={{ backgroundImage: `url(${imageUrl })`  }} 
    className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>

        <div className="background-image" style={{ backgroundImage: `url(${imageUrl })`  }}/>
            <div className='content'>
              <div className='title'>{title.toUpperCase()}</div>
              <span className='subtitle'>SHOP NOW</span>
            </div>
          </div>

    )

}

export default withRouter(MenuItem);