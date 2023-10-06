import React, {useState} from 'react'
import Popup from 'reactjs-popup';

const SecondForm = ({formData, setFormData}) => {
 // console.log(formData);

  const [scrollMessage, setscrollMessage] = useState('Need mouse Scroll on black box to pass the Security&nbsp; ');
  const [leftMessage, setLeftMessage] = useState('Create a mouse Left click to pass the Security&nbsp;');
  const [rightMessage, setRightMessage] = useState('Create a mouse Right click to pass the Security&nbsp; ');
  const [middleMessage, setMiddleMessage] = useState('Create a mouse Middle click to pass the Security&nbsp;');

  const handleClickLeft = (e) => {
    if (e.nativeEvent.which === 1) {
      setLeftMessage(<p style={{ color: "green" }}>Left Mouse Click successfully passed the Security </p>);
      setFormData({...formData, mouseLeft: true});
      console.log("Left click");
    } else if (e.nativeEvent.which === 3) {
     e.preventDefault();
    }
  };
  const handleClickRight = (e) => {
    console.log(e.nativeEvent.which);
    if (e.nativeEvent.which === 3) {
      setRightMessage(<p style={{ color: "green" }}>Right Mouse Click successfully passed the Security </p>);
      console.log("Right click");
      setFormData({...formData, mouseRight: true}); 
    } else if (e.nativeEvent.which === 1) {
      e.preventDefault();
    }
  };
  const mouseDownHandler = (e) => {  
      console.log("Middle click");
      if( e.button === 1 ) {
        setMiddleMessage(<p style={{ color: "green" }}>Middle Mouse Click successfully passed the Security </p>);
        setFormData({...formData, mouseMiddle: true});
      }
      else{
        e.preventDefault();
      }
    };
  
  const handleScroll = (e) => {
   console.log('hhhhhiiii');
   setFormData({...formData, mouseScroll: true});
   setscrollMessage(<p style={{ color: "green" }}>Mouse Scroll successfully passed the Security </p>);
  };
  
  return (
    <>
      <div className="mb-3 pesonName"><h2>Person Name</h2> <div style={{ color: "green" }}>The name is: {formData.fName +' '+ formData.lName} </div></div>
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Part Number</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={formData.partNum} onChange={(ev) => setFormData({...formData, partNum: ev.target.value})}/>
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
      </div>
      <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Model Number</label>
          <input type="text" className="form-control" id="exampleInputPassword1" value={formData.modelNum} onChange={(ev) => setFormData({...formData, modelNum: ev.target.value})}/>
      </div>
      <div className="mb-3 testingSection">
        <div className='testText'><h2>Mouse Test</h2></div>
       
        <div className='row mouseTestButtonBlock'>
          <div className='col-md-6'>
            
              <button type="button" onClick={handleClickLeft} onContextMenu={handleClickLeft} className="btn btn-primary">Mouse Left Click</button>
              <p> {leftMessage}
              <Popup trigger={open => (
                <span className='infoIcons'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg> 
              </span>
              )} position="right top">
                  <span> <img src='../assets/images/leftClick.jpg' alt='Left Click' /> </span>
              </Popup>
                
              </p>
          </div>
          <div className='col-md-6'>
              <button type="button" onClick={handleClickRight} onContextMenu={handleClickRight} className="btn btn-primary">Mouse Right Click</button>
              <p>{rightMessage}
              <Popup trigger={open => (
                <span className='infoIcons'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg> 
              </span>
              )} position="right top">
                  <span> <img src='../assets/images/rightClick.jpg' alt='Right Click' /> </span>
              </Popup>
              </p>
          </div>
        </div>
        <div className='row mouseTestButtonBlock'>
          <div className='col-md-12'>       
              <button type="button" onMouseDown={mouseDownHandler} className="btn btn-primary">Mouse Middle Click</button>
              <p>{middleMessage}
              <Popup trigger={open => (
                <span className='infoIcons'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg> 
              </span>
              )} position="right top">
                  <span> <img src='../assets/images/leftClick.jpg' alt='Left Click' /> </span>
              </Popup>            
              </p>
          </div>
        </div>
        <div className='mouseScrollEve'>
          <div className='mouseScrollSection' onWheel = {(e) => handleScroll(e)}></div>
              <p>{scrollMessage}
              <Popup trigger={open => (
                    <span className='infoIcons'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg> 
                  </span>
                  )} position="right top">
                      <span> <img src='../assets/images/scroll.jpg' alt='Mouse Scroll' /> </span>
              </Popup>
              </p>
        </div>
      </div>
    </>
  )
}

export default SecondForm;
