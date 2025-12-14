import {ContainerHero} from "./components/ContainerHero"
import {ContainerCards} from "./components/ContainerCards"
import {Header} from "./components/Header/Header"
import {SessionHero } from "./components/SessionHero"
import {SessionCard} from "./components/SessionCard"
import {ContainerTitle} from "./components/ContainerTitle"
import {ContainerFooter} from "./components/ContainerFooter"
import {ButtonLink} from "./components/ButtonLink"

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
              <SessionCard image="https://m.media-amazon.com/images/M/MV5BNjI1OWZhYTktMjRiMi00OTdjLThjODItMjNkMWZmNGUwMTRkXkEyXkFqcGc@._V1_.jpg" name="Spider Man" price="32€" />
              <SessionCard image="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Fortnite_Save_The_World.jpg/250px-Fortnite_Save_The_World.jpg" name="FortNite" price="40€" />
              <SessionCard image="https://ga.de/imgs/93/6/1/8/2/4/5/1/5/tok_6b37489241494476c2becac7094827a7/w803_h1000_x401_y500_82f9da4972b6049b.jpg" name="Fifa 18" price="25€" />
              <SessionCard image="https://cdn.cdkeys.com/media/catalog/product/e/l/elden_ring_nightreign_deluxe_edition.png" name="Elden Ring" price="39€" />
              <SessionCard image="https://assets.nintendo.eu/image/upload/f_auto,c_limit,w_992,q_auto:low/MNS/NOE/70010000000963/SQ_NSwitch_Minecraft" name="MineCraft" price="43€" />
              <SessionCard image="https://www.keycense.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fkeycense.appspot.com%2Fo%2Fproducts%252FEWBcIw4NKAcf19n6AOnU.jpg%3Falt%3Dmedia%26token%3D590bc2ce-0dcf-4c4f-b6db-431780a96c16&w=3840&q=60" name="Cyber Punk" price="29€" />
              <SessionCard image="https://image.api.playstation.com/vulcan/ap/rnd/202210/3121/9y8pTbxVRpmB9qqFOiKsaJgA.png" name="NFS Heat" price="30€" />
              <SessionCard image="https://www.cityofgames.com.au/cdn/shop/files/00000nba26XB_Custom.jpg?v=1752288947" name="NBA 2k26" price="50€" />
              <SessionCard image="https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Jurassic_World_Evolution_3_cover_art.jpg/250px-Jurassic_World_Evolution_3_cover_art.jpg" name="JurassicWorld 3" price="33€" />
              <SessionCard image="https://cdn.cdkeys.com/496x700/media/catalog/product/n/e/new_project_-_2024-11-05t140426.918.jpg" name="Human:FallFlat" price="17€" />
              <SessionCard image="https://m.media-amazon.com/images/I/61cOvRBSHNL._UF1000,1000_QL80_.jpg" name="Master Chief" price="59€" />
         </ContainerCards>

         <ContainerCards>
              <ButtonLink value="Ver mais" />
         </ContainerCards>

         <ContainerFooter/>
    </>
  )
}

