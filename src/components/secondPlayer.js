import React from 'react'

const SecondPlayer = ( {onClick, array} ) => {
    
    return(
        <>
          <div className="modal-overlay">
            <div className="modal-content">
                    Welcome! Please choose second player:
                    <br/>
                    <br/>
                    <div>
                        {array.map((value, index) => {
                          return (
                              <button className="mini-container" onClick={() => onClick(value)}>{value}</button>
                          )
                        })}
                    </div>
            </div>
          </div>
        </>

    )
}
export default SecondPlayer