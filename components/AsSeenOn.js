import Abduzeedo from '../elements/logos/Abduzeedo'
import BoredPanda from '../elements/logos/BoredPanda'
import Burst from '../elements/logos/Burst'
import CBC from '../elements/logos/CBC'
import ExploreCanada from '../elements/logos/ExploreCanada'
import Kedge from '../elements/logos/Kedge'
import LonelyPlanet from '../elements/logos/LonelyPlanet'
import PetaPixel from '../elements/logos/PetaPixel'
import Scribe from '../elements/logos/Scribe'
import Unsplash from '../elements/logos/Unsplash'
import VYSUAL from '../elements/logos/VYSUAL'

export default function AsSeenOn() {
  return (
    <div className="mx-auto w-full pb-12">
      <div>
        <h2 className="py-6 text-center text-xl font-bold uppercase">
          As Seen On
        </h2>
      </div>
      <div className="grid grid-cols-1 content-around items-center justify-center justify-items-center gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <CBC />
        <ExploreCanada />
        <LonelyPlanet />
        <BoredPanda />
        <PetaPixel />
        <Abduzeedo />
        <Unsplash />
        <Burst />
        <Scribe />
        <VYSUAL />
        <Kedge />
        <p className="text-xl font-bold text-accent">and more</p>
      </div>
    </div>
  )
}
