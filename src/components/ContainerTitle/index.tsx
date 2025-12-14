import style from "./style.module.css"

type PropContainerTitle = {
    title: string;
}

export function ContainerTitle(props: PropContainerTitle){
      return(
         <div className={style.title}>
            {props.title}
         </div>
      )
}