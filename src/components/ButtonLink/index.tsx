import type { ReactElement } from "react"
import style from "./style.module.css"
import type React from "react"

type PropButtonLink ={
    value: string | ReactElement
    size: string
}
export function ButtonLink(props:PropButtonLink){
    return(
        <>
            <a href="" className={style.buttonlink} style={{'--buttonlinksize':props.size} as React.CSSProperties}>{props.value}</a>
        </>
    )
}