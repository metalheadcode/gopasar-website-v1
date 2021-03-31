import CTALayoutsTypeTwelve from "./layouts/CTALayouts/CTALayoutsTypeTwelve/CTALayoutsTypeTwelve"
import FeaturesLayoutsTypeFourth from "./layouts/FeatureLayouts/FeaturesLayoutsTypeFourth/FeaturesLayoutsTypeFourth"
import FeaturesLayoutsTypeNinth from "./layouts/FeatureLayouts/FeaturesLayoutsTypeNinth/FeaturesLayoutsTypeNinth"
import FeaturesLayoutsTypeTenth from "./layouts/FeatureLayouts/FeaturesLayoutsTypeTenth/FeaturesLayoutsTypeTenth"
import FootersLayoutsTypeNinth from "./layouts/FooterLayouts/FootersLayoutsTypeNinth/FootersLayoutsTypeNinth"
import FormsLayoutsTypeSeventh from "./layouts/FormsLayouts/FormsLayoutsTypeSeventh/FormsLayoutsTypeSeventh"
import HeroLayoutsTypeSixth from "./layouts/HeroLayouts/HeroLayoutsTypeSixth/HeroLayoutsTypeSixth"

function App() {
  return (
    <div className="App">
      <HeroLayoutsTypeSixth />
      <FeaturesLayoutsTypeNinth dark={true} />
      <FeaturesLayoutsTypeFourth />
      <FeaturesLayoutsTypeTenth dark={true} />
      <FormsLayoutsTypeSeventh />
      <CTALayoutsTypeTwelve dark={true} />
      <FootersLayoutsTypeNinth />
    </div>
  )
}

export default App
