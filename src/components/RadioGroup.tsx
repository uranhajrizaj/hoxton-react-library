type Props={
    type?:string,
    size?:'small'|'medium'|'large',
    name:string,
    question:string,
    options:string[],
  [x:string]:any;
  }
  
  export function CheckboxGroup({ type="radio",size="medium",question,name,options,...props }:Props) {
    let style={
      width:size==='small'? '0.5rem':size==='medium'? '0.6rem':'0.8rem',
    }
  
    return (
      <>
      <h4>{question}</h4>
      {options?.map((option)=>(
        <label >
          {option}
          <input type={type} style={style} name={name} value={option} {...props}/>
        </label>
      ))}
      </>
    )
  }
  