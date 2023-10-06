import React, { useState } from 'react';
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import DisplayForm from './DisplayForm';
import Popup from 'reactjs-popup';

const BodyFrame = () => {
  const [page, setPage] = useState(0);
  const pageTitle = ['First Step', 'Second Step', 'Final Step'];

  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    partNum: '',
    modelNum: '',
    mouseLeft: '',
    mouseRight: '',
    mouseScroll: '',
    mouseMiddle: '',
  })
const checkFirstForm = () => {
  if(formData.fName=='')
  {
    alert("please enter first name");
    setPage(0);
    return false;
  }if(formData.lName=='')
  {
    alert("please enter last name");
    setPage(0);
    return false;
  }
}
const checkSecondForm = () => {
  
  if(formData.partNum=='')
  {
    alert("please enter part number");
    setPage(1);
    return false;
  }
  if(formData.modelNum=='')
  {
    alert("please enter model number");
    setPage(1);
    return false;
  }
}
  const FormDisplay = () => {
    if(page === 0){
        return <FirstForm formData={formData} setFormData={setFormData}/>
    }
    else if(page === 1)
    {
        return(
            <SecondForm formData={formData} setFormData={setFormData}/>
        );
    }
    else
    {
        return(
        <DisplayForm formData={formData} setFormData={setFormData}/>
        );
    }
  }
 console.log("api"+formData.fName);
  async function handleSubmit(){
    console.log("inside handleGetJson");
    let dataToSend = {
      fName: formData.fName,
      lName: formData.lName,
      partNum: formData.partNum,
      modelNum: formData.modelNum,
      mouseLeft: formData.mouseLeft == true ? 1 : 0,
      mouseRight: formData.mouseRight == true ? 1 : 0,
      mouseScroll: formData.mouseScroll == true ? 1 : 0,
      mouseMiddle: formData.mouseMiddle == true ? 1 : 0,
    };
    var messages = 'success';
    const response = fetch("https://kusdemos.com/rawnews/insert.php", {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
    .then(async response => {
      const data =  await response.json();
      console.log(JSON.stringify(data));
      //console.log('Success:', response);
      if (data.error == 0) {
        //let data = response.data;
        console.log(data);
       alert('Your data has been submitted successfully. You will be shortly in contact.');
      } else {
        alert('Something went wrong. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
   
  }
  return (
    <>
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div className='width50Per'>
            <div className='topFormBlock text-center'>
                <h1>{pageTitle[page]}</h1>
            </div>
            <div className={"formNavigrator " + (page === 0 ? 'pcDisable' : '') }>
                <p className='paginationCustom'>
                    <span>1</span>
                </p>
                <p className='paginationCustom'>
                    <span>2</span>
                </p>
                <p className='paginationCustom'>
                    <span>3</span>
                </p>
            </div>
            <div className='innerFormSection'>
                {/* <form> */}
                    {FormDisplay()}
                {/* </form> */}
            </div>

            <div className="row buttonRow">
                <div className='col-md-6 d-grid'>
                    <button type="button" className="btn btn-primary" 
                    disabled = {page === 0 || page === pageTitle.length - 1}
                    onClick={() => {
                        setPage((currPage) => 
                            currPage - 1
                        )
                    }}
                    >Previous</button>
                </div>
                <div className='col-md-6 d-grid'>
                    <button type="button" className="btn btn-primary" 
                    onClick={()=> {
                        if(page === 0){
                          setPage((currPage) => currPage + 1);checkFirstForm();
                        }else if(page ===1){                         
                            console.log('next');
                            setPage((currPage) => currPage + 1);
                            checkSecondForm();
                        }
                        else{
                            handleSubmit();
                            console.log(page);
                        }
                    }} 
                    >{page === pageTitle.length - 1 ? 'Submit':'Next'}</button>
                </div>    
            </div>        
        </div>
    </div>
    </>
  )
}

export default BodyFrame;
