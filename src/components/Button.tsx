import { useState } from "react";

type Props={
    children: React.ReactNode ;
    size?: 'small' | 'medium' | 'large' ;
    variant?: 'primary' | 'secondary' | 'tertiary' ;
    color?:string;
    backgroundColor?:string;
    border?:string;
    [x:string]:any;
}


export function Button({ children,size="medium",variant="secondary",color="white",backgroundColor="#277BC0",border='none',...props}:Props) {
  
 const [isHovered, setIsHovered] = useState(false);   
 const [isPressed, setIsPressed] = useState(false);
 
 function filter(){
    if(isPressed) return 'brightness(20%)'  ;
    if(isHovered)return 'brightness(180%)'  ;
    else return 'brightness(100%)'  ;
    
 }
  
   let style:any={
        fontSize: size==='small'?'0.4rem' :size==='medium'?'0.6rem' :'0.8rem',
        color: variant==='primary'?`${color}`:variant==='secondary'?`${color}`:`${color}`,
        backgroundColor: variant==='primary'? `${backgroundColor}`:variant==='secondary'?`${backgroundColor}`:`${backgroundColor}`,
        border: variant==='primary'?`${border}`:variant==='secondary'?`${border}`:`${border}`,
        borderRadius: '5px',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        filter: filter(),
        transition: 'all 0.2s ease-in-out',

  }

    return (
        <button style={style} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} onMouseDown={()=>setIsPressed(true)} onMouseUp={()=>setIsPressed(false)} {...props}>
            {children}

        </button>
    )
}

    