import CTALayoutsTypeFifth from "./layouts/CTALayouts/CTALayoutsTypeFifth/CTALayoutsTypeFifth"
import CTALayoutsTypeTwelve from "./layouts/CTALayouts/CTALayoutsTypeTwelve/CTALayoutsTypeTwelve"
import FeaturesLayoutsTypeFourth from "./layouts/FeatureLayouts/FeaturesLayoutsTypeFourth/FeaturesLayoutsTypeFourth"
import FeaturesLayoutsTypeNinth from "./layouts/FeatureLayouts/FeaturesLayoutsTypeNinth/FeaturesLayoutsTypeNinth"
import FeaturesLayoutsTypeTenth from "./layouts/FeatureLayouts/FeaturesLayoutsTypeTenth/FeaturesLayoutsTypeTenth"
import FootersLayoutsTypeNinth from "./layouts/FooterLayouts/FootersLayoutsTypeNinth/FootersLayoutsTypeNinth"
import FormsLayoutsTypeSeventh from "./layouts/FormsLayouts/FormsLayoutsTypeSeventh/FormsLayoutsTypeSeventh"
import HeroLayoutsTypeSixth from "./layouts/HeroLayouts/HeroLayoutsTypeSixth/HeroLayoutsTypeSixth"

function App() {
  const buyer = {
    title: "Why Farmers Choose GoPasar?",
    description: "You just focus on farming, let us handle the rest for you.",
    features: [
      {
        id: 1,
        subTitle: "Market Ready",
        subDescription:
          "We have the existing buyers who are ready to buy your productions and we manage the sales and supplies for you.",
      },
      {
        id: 2,
        subTitle: "Fast, Easy and Reliable",
        subDescription:
          "We have a platform that trades your daily produce at the seamless process experiece.",
      },
      {
        id: 3,
        subTitle: "Systematic Management",
        subDescription:
          "We offer a solution to manage your customers, trend analysis, trade history, auto invoicing and more.",
      },
    ],
  }

  const seller = {
    title: "Why Buyers Choose GoPasar?",
    description:
      "We assure you best the most competitive agriproducts in the market",
    features: [
      {
        id: 1,
        subTitle: "Lowest Pricing",
        subDescription:
          "We offer pre-booking where you can 100% lowest price guarantee items. ",
      },
      {
        id: 2,
        subTitle: "Freshness Guarantee",
        subDescription:
          "We serve direct from farm to you, no more additional handling.",
      },
      {
        id: 3,
        subTitle: "Consistence Supply",
        subDescription:
          "We apply our farm management with our contract farms to ensure consistent supply for your  business.",
      },
    ],
  }

  return (
    <div className="App">
      <HeroLayoutsTypeSixth />
      <CTALayoutsTypeFifth id={"why"} dark={true} />
      <FeaturesLayoutsTypeNinth
        id={"farmer"}
        title={buyer.title}
        description={buyer.description}
        features={buyer.features}
        dark={false}
      />
      <FeaturesLayoutsTypeNinth
        id={"business"}
        title={seller.title}
        description={seller.description}
        features={seller.features}
        dark={true}
      />
      <FeaturesLayoutsTypeFourth dark={false} />
      <FeaturesLayoutsTypeTenth dark={true} />
      <FormsLayoutsTypeSeventh id={"contact"} dark={false} />
      <CTALayoutsTypeTwelve dark={true} />
      <FootersLayoutsTypeNinth />
    </div>
  )
}

export default App
