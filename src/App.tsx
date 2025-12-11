import {ContainerHero} from "./components/ContainerHero"
import {Header} from "./components/Header/Header"
import { SessionHero } from "./components/SessionHero"

import "./style/global.css"
import "./style/theme.css"

export function App() {

  return (
    <>
         <ContainerHero>
              <Header />
              <SessionHero/>
         </ContainerHero>
    </>
  )
}

