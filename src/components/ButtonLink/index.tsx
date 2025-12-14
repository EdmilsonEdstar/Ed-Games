import style from "./style.module.css"

type PropButtonLink ={
    value: string
}
export function ButtonLink(props:PropButtonLink){
    return(
        <>
            <a href="" className={style.buttonlink}>{props.value}</a>
        </>
    )
}