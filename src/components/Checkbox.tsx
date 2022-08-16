type Props={
  type:string,
[x:string]:any;
}

export function Checkbox({ type, ...props }:Props) {
  return (
    <input type={type} {...props} />
  )
}