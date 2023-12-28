import React from 'react'

const StartingPlayer = ( {onClick, array} ) => {
    
    return(
        <>
          <div className="modal-overlay">
            <div className="modal-content">
                    Welcome! Please choose starting player:
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
export default StartingPlayer