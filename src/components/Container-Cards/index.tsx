import style from "./style.module.css"

 type PropHeader = {
    children: React.ReactNode;
 }

export function Header(props:PropHeader){
    return(
        <>
        <div className={style.header}>
              {props.children}
        </div>

        </>
    )
}