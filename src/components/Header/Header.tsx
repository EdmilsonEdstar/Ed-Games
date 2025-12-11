import {HeaderLogo} from "./HeaderLogo"
import {HeaderMenu} from "./HeaderMenu"
import {HeaderCart} from "./HeaderCart"

import style from "./style.module.css"

export function Header(){
    return(
        <nav className={style.position}>
            <HeaderLogo />
            <HeaderMenu />
            <HeaderCart />
        </nav>
    )
}