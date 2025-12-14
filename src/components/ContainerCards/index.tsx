import style from "./style.module.css"



type PropContainerCards = {
    children: React.ReactNode;
 }

export function ContainerCards(props:PropContainerCards){
    return(
        <div className={style.containercards}>
            {props.children}
        </div>
    )
}