import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';

//Traffic Signal Project in React
function App() {
  const [flag1,setFlag1]=useState(true);//Flag for Red Signal
  const [flag2,setFlag2]=useState(false);//Flag for Yellow Signal
  const [flag3,setFlag3]=useState(false);//Flag for Green Signal
  const [red,setRed]=useState(30);//Time to be counted for Red Signal
  const [yellow,setYellow]=useState(10);//Time to be counted for Yellow Signal
  const[green,setGreen]=useState(30);//Time to be counted for Green Signal

  useEffect(()=>{
    let mytimer,mytimer1,mytimer2;//variables containing setInterval Values

    //For Red Signal
    if(flag1===true)
    {
      //setInterval for seconds count for Red Signal
   mytimer=setInterval(()=>{
        if(red>1)
        {
          setRed(red-1);
        }
        else{
          setFlag1(false);
          setFlag3(true);
          setGreen(30);
        }

        

      },1000)
    }

    //For Green Signal
    if(flag3===true)
    {
      //setInterval for seconds count for Green Signal
      mytimer1=setInterval(()=>{
        if(green>1)
        {
          setGreen(green-1);
        }
        else{
          setFlag3(false);
          setFlag2(true);
          setYellow(10);
        }

      },1000)
    }

    //For Yellow Signal
    if(flag2===true)
    {
      //setInterval for seconds count for Yellow Signal
      mytimer2=setInterval(()=>{
        if(yellow>1)
        {
          setYellow(yellow-1);
        }
        else{
          setFlag1(true);
          setFlag2(false);
          setRed(30);
        }

      },1000)
    }

  

    //Effect CleanUp
    return ()=>{
      clearInterval(mytimer);
      clearInterval(mytimer1);
      clearInterval(mytimer2);
    }

  });
  return (
    <div className="App">
      <div className='mydivdata'>
      <div className={flag1?`circle1`:`circle2`}></div>
      <div className={flag2?`circleyellow1`:`circleyellow2`}></div>
      <div className={flag3?`circlegreen1`:`circlegreen2`}></div>
      </div>

      <div className='mytimebox'>
      {flag1===true?<h1 style={{color:'red'}}>{red<10?`0${red}`:red}</h1>:null}
      {flag3===true?<h1 style={{color:'green'}}>{green<10?`0${green}`:green}</h1>:null}
      {flag2===true?<h1 style={{color:'#F2CD13'}}>{yellow<10?`0${yellow}`:yellow}</h1>:null}
      </div>
    </div>
  );
}

export default App;
