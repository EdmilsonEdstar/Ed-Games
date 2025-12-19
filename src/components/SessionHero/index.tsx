import { ButtonLink } from "../ButtonLink"

import style from "./style.module.css"

import {motion} from "framer-motion"

export function SessionHero(){
    return(
        <motion.div animate={{rotate:360, scale:[1,2,1], x:[0,100,-100,0]}} transition={{duration:1.7}} className={style.sessionhero}>
            <h1 className={style.title}>Encontre os melhores jogos a preço acessível</h1>
            <p className={style.subtitle}>Compre hoje e recebe 50% de desconto!</p> <br />
            <ButtonLink size="1rem 2.5rem" value="Ver jogos" />
        </motion.div>
    )
}