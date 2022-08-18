type Props={
    name:string,
}

export function OnSelect({name}:Props) {
    //@ts-ignore
    let allCheckboxes =[...document.querySelectorAll(`input[name=${name}]:checked`)].map(input => input.value)
   return allCheckboxes 
}

