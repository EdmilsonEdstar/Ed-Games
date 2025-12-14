import { ButtonLink } from "../ButtonLink"

import style from "./style.module.css"

export function SessionHero(){
    return(
        <div className={style.sessionhero}>
            <h1 className={style.title}>Encontre os melhores jogos a preço acessível</h1>
            <p className={style.subtitle}>Compre hoje e recebe 50% de desconto!</p> <br />
            <ButtonLink value="Ver jogos" />
        </div>
    )
}