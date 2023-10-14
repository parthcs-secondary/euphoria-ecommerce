import React from 'react'
import './BigSavingZone.scss'

const BigSavingZone = () => {

    const small_cardstyle = {
        height: '95%',
        // minHeight: '320px',
        width: 'auto',
        aspectRatio: '3/2',
        
    }
    const big_cardstyle = {
        // minHeight: '320px',
        height: '95%',
        width: 'auto',
        aspectRatio: '1/1',
        
    }

  return (
    <div className='BigSavingZone'>
        <div className="BigSavingZone_wrapper">
            <div className="bigsavingzone_title">Big Saving Zone</div>
            <div className="bigsavingzone_cardholder">
                <div className="bigsavingzone_card1">
                    <div className="bigsavingzone_card bigsavingzone_card__bgimg1" style={small_cardstyle}></div>
                    <div className="bigsavingzone_card bigsavingzone_card__bgimg2" style={small_cardstyle}></div>
                    <div className="bigsavingzone_card bigsavingzone_card__bgimg3" style={small_cardstyle}></div>
                </div>
                <div className="bigsavingzone_card2">
                    <div className="bigsavingzone_card bigsavingzone_card__bgimg4" style={big_cardstyle}></div>
                    <div className="bigsavingzone_card bigsavingzone_card__bgimg5" style={big_cardstyle}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BigSavingZone