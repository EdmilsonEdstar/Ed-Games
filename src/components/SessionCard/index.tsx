import { BadgeInfo, DotIcon, EyeIcon, HomeIcon, InfinityIcon, InfoIcon, PlusIcon, PlusSquareIcon } from "lucide-react"
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
                <img className={style.imagesize} src={props.image} alt="" />
            </div>
            <h2 className={style.name}>{props.name}</h2>
            <p className={style.price}>{props.price}</p>
            <button className={style.addcart}> <PlusSquareIcon/></button> 
            <button className={style.addcart}> <EyeIcon/></button>
        </div>
    )
}