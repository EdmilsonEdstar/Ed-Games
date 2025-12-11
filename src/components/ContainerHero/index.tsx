import style from "./style.module.css"

 type PropContainerHero = {
    children: React.ReactNode;
 }

export function ContainerHero(props:PropContainerHero){
    return(
        <>
        <div className={style.containerhero}>
              {props.children}
        </div>

        </>
    )
}