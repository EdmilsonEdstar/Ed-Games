import { MoonIcon, ShoppingCartIcon } from "lucide-react";
import style from "./style.module.css"

export function HeaderCart(){
    return(
        <>
        <div className={style.element}>
            <a href="#" className={style.icon}><MoonIcon /></a>
            <a href="#" className={style.icon}><ShoppingCartIcon /><sup>0</sup></a>
        </div>
        </>    
    )
}