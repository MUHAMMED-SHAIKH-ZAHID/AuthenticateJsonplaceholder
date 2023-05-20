import React from 'react'
import Loginicon from '../components/Loginicon';
import Loginform from '../components/Loginform';


const Login = () => {
 
    return (
      <div className='' >
          <div className="flex md:flex-row  h-screen md:p-10 p-2  ">
              <div className=" md:w-3/5 lg:w-3/5 xl:w-2/5  w-screen m-auto md:m-10 shadow-2xl bg-white">
               <Loginform />
              </div>
              <div  className=" md:w-2/5 hidden md:block xl:w-3/5 lg:w-2/5 md:mt-10 bg-white"><Loginicon /></div>
          </div>
      </div>
    )
  }
  
  export default Login  