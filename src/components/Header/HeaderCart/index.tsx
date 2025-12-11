import { ShoppingCartIcon, User2Icon } from "lucide-react";
import style from "./style.module.css"

export function HeaderCart(){
    return(
        <>
        <div className={style.element}>
            <a href="#" className={style.icon}><User2Icon /></a>
            <a href="#" className={style.icon}><ShoppingCartIcon /><sup>0</sup></a>
        </div>
        </>    
    )
}