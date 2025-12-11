import style from "./style.module.css"

export function SessionHero(){
    return(
        <div className={style.sessionhero}>
            <h1>Encontre os melhoores jogos</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facere!</p> <br />
            <button>Ver jogos</button>
        </div>
    )
}