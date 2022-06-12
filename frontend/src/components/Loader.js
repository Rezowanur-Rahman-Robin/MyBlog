import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader( {w,h}) {
    return (
        <div>
            <Spinner 
         animation='border'
         role='status' 
         style={{
             width:w? w: '100px',
             height:h? h:'100px',
             margin:'auto',
             display:'block',
         }}>
            <span className ='sr-only'>Loading...</span>
        </Spinner>
        </div>
    )
}

export default Loader
