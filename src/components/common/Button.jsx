import React from 'react';

const Button = (
  {className ="h-[50px] w-[20%] mt-[50px]" ,
     title = "Show Now" ,
     ...restProps
    }) => {
    return ( <button 
      {...restProps}
    className={`${className} font-medium text-white bg-black cursor-pointer`}>
        {title}
      </button> );
}

export default Button;