import {ContainerHero} from "./components/ContainerHero"
import {ContainerCards} from "./components/ContainerCards"
import {Header} from "./components/Header/Header"
import {SessionHero } from "./components/SessionHero"
import {SessionCard} from "./components/SessionCard"
import {ContainerTitle} from "./components/ContainerTitle"
import {ContainerFooter} from "./components/ContainerFooter"

import "./style/global.css"
import "./style/theme.css"


export function App() {

  return (
    <>
         <ContainerHero>
              <Header/>
              <SessionHero/>
         </ContainerHero>

         <ContainerTitle title="Jogos mais populares" />

         <ContainerCards>
              <SessionCard image="https://cdn.europosters.eu/image/1300/169845.jpg" name="Super Mário" price="30 €" />
              <SessionCard image="https://cdn.europosters.eu/image/1300/169845.jpg" name="Super Mário" price="30 €" />
              <SessionCard image="https://cdn.europosters.eu/image/1300/169845.jpg" name="Super Mário" price="30 €" />
              <SessionCard image="https://cdn.europosters.eu/image/1300/169845.jpg" name="Super Mário" price="30 €" />
              <SessionCard image="https://cdn.europosters.eu/image/1300/169845.jpg" name="Super Mário" price="30 €" />
         </ContainerCards>

         <ContainerFooter/>
    </>
  )
}

