import React from 'react'

const Box = ( {onClick, value} ) => {
    
    const handleClick = () => {
        onClick()
    }

    if (value !== null) {
        return (
          <div className="box" onClick={handleClick}>
            {value} 
          </div>
        )
    }
        else {
            return (
                <div className="box" onClick={handleClick}>
                    {/* Render nothing for null */}
                </div>
        );
      }
    };


export default Box