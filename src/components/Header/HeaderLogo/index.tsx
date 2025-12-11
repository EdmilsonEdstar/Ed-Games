import style from "./style.module.css"
export function HeaderLogo(){
    return(
        <>
            <img src="/logo.png" alt="Logotipo Ed-Games" className={style.logo}/>
        </>    
    )
}