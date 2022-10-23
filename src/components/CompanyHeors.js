import React from "react";
import { useDispatch } from 'react-redux'
import {updateCompanyName} from '../store/features/CompanyNameSlice'



function CompanyHeors() {
  const dispatch = useDispatch()
  return (
    <div  className="relative w-screen h-screen flex justify-center items-center overflow-hidden ">
     <div className="w-1/2 flex justify-around">
     <div onClick={()=> dispatch(updateCompanyName('marvel'))} className="h-48 w-48 relative cursor-pointer mb-5">
        <div className="absolute inset-0 bg-white  opacity-25 rounded-lg shadow-2xl"></div>
        <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
          <div className="h-full w-full  bg-marvel bg-cover rounded-lg shadow-2xl">
          </div>
        </div>
      </div>
      <div onClick={()=> dispatch(updateCompanyName('dc'))} className="h-48 w-48 relative cursor-pointer mb-5">
        <div className="absolute inset-0 bg-white   opacity-25 rounded-lg shadow-2xl"></div>
        <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
          <div className="h-full w-full  bg-dc bg-cover rounded-lg shadow-2xl">
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default CompanyHeors;
