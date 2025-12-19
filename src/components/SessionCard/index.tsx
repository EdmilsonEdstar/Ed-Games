import style from "./style.module.css"


type PropsSessionCard ={
    image: string
    name: React.ReactNode
    price: React.ReactNode
}

export function SessionCard(props: PropsSessionCard){
    return(
        <div className={style.card}>
            <div className={style.image}>
                <a href="#"><img className={style.imagesize} src={props.image} alt="" /></a>
            </div>
            <h2 className={style.name}>{props.name}</h2>
            <hr className={style.line} />
            <p className={style.price}>{props.price}</p>
        </div>
    )
}