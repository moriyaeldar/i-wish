import React from 'react';
import { useState } from 'react';
import Logo from "../imgs/logo.jpeg";
import { wishService } from '../services/wish.service';
import { Step1 } from './wizard/step1';
import { Step2 } from './wizard/step2';
export const WishAdd = ({closeModal}) => {
  const [data,setData] = useState(undefined)
  const [company,setCompany] = useState(undefined)
  const [count, setCount] = useState(0);
    const decrement = () => setCount(count - 1);
    const increment = () => setCount(count + 1);
  const sendWishData=()=>{
wishService.add({data,company})
  }

  const addWishData=(data)=>{
  setData(data)
  }
  const addWishCompany=(company)=>{
  setCompany(company)
  }
  return(
  <div className="wish-add">
  {count===0&&<Step1 addWishCompany={addWishCompany} increment={increment}></Step1>}
  {count===1&&<Step2 addWishData={addWishData} decrement={decrement} increment={increment}></Step2>}
  {count===2&&
 sendWishData()}
   {count===2&&<div className="tnx"><p>תודה לך</p><img src={Logo} alt="" /></div>}
  </div> 
  );
};


 