type Props={
    type?:string,
    size?:'small'|'medium'|'large',
    name:string,
    question:string,


}

export function Input({question,type,name}:Props) {
    return (
        <>
        <label htmlFor="inputid">{question} </label>
        <input id="inputid" type={type} name={name}/>
        </>
    )
}