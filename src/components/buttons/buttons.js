import react from 'react'
import '../../style/buttons.css';

const Buttons = () => {

  const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];

  return(
    <div id="buttons-container">
    {
      list.map((i) => {
        return(
          <div className="buttons-boxes">
            <div className="buttons-box-preview"></div>
            <div className="buttons-box-text">
              <div className="buttons-box-text-title">Simple Button</div>
              {/* <div className="buttons-box-text-subtitle">For: Normal Clicks, Navigations, Logins etc</div> */}
            </div>
          </div>
        )
      })
    }
    </div>
  )
}

export default Buttons;