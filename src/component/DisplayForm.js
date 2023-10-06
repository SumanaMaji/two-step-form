import React, {useState} from 'react'
import Popup from 'reactjs-popup';

const DisplayForm = (formData) => {
  console.log(formData);
  const handleSbumit = ()=> {
    console.log('done');
}
  
  return (
    <>
      <div className="mb-3 pesonName"><h2>Person Name</h2> <div style={{ color: "green" }}>The name is: {formData.formData.fName +' '+ formData.formData.lName} </div></div>
      <div className="mb-3 pesonName"><h2>Part Number</h2> <div style={{ color: "green" }}>The name is: {formData.formData.partNum} </div></div>
      <div className="mb-3 pesonName"><h2>Model Number</h2> <div style={{ color: "green" }}>The name is: {formData.formData.modelNum} </div></div>

      <div className="mb-3 testingSection">
       
        <div className='row mouseTestButtonBlock'>
          <div className='col-md-6' style={{ color: "green" }}>   
              <p>  Mouse Right Click: {formData.formData.mouseRight === true ? 'Pass': 'Failure'} </p>
          </div>
          <div className='col-md-6' style={{ color: "green" }}>
                <p> Mouse Left Click: {formData.formData.mouseLeft=== true ? 'Pass': 'Failure'} </p>
          </div>
        </div>
        <div className='row mouseTestButtonBlock'>
          <div className='col-md-6' style={{ color: "green" }}>   
              <p>  Mouse Middle Click: {formData.formData.mouseMiddle === true ? 'Pass': 'Failure'} </p>
          </div>
          <div className='col-md-6' style={{ color: "green" }}>
              <p> Mouse Scroll : {formData.formData.mouseScroll=== true ? 'Pass': 'Failure'} </p>        
          </div>
        </div>
      </div>
    </>
  )
}

export default DisplayForm;
