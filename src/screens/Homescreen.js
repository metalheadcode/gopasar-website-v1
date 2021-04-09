import React from "react"
import CTALayoutsTypeFifth from "../layouts/CTALayouts/CTALayoutsTypeFifth/CTALayoutsTypeFifth"
import CTALayoutsTypeTwelve from "../layouts/CTALayouts/CTALayoutsTypeTwelve/CTALayoutsTypeTwelve"
import FeaturesLayoutsTypeFourth from "../layouts/FeatureLayouts/FeaturesLayoutsTypeFourth/FeaturesLayoutsTypeFourth"
import FeaturesLayoutsTypeTenth from "../layouts/FeatureLayouts/FeaturesLayoutsTypeTenth/FeaturesLayoutsTypeTenth"
import FeaturesLayoutsTypeTwelve from "../layouts/FeatureLayouts/FeaturesLayoutsTypeTwelve/FeaturesLayoutsTypeTwelve"
import FormsLayoutsTypeSeventh from "../layouts/FormsLayouts/FormsLayoutsTypeSeventh/FormsLayoutsTypeSeventh"
import HeroLayoutsTypeSixth from "../layouts/HeroLayouts/HeroLayoutsTypeSixth/HeroLayoutsTypeSixth"

import BigImage from "../../src/img/asian-young-farmer-using-tablet-green-rice-field-using-technology-smart-farmer-concept.png"
import BgVideo from "../../src/img/business-flip-small.mp4"

import {
  FarmerMarketReady,
  FarmerFast,
  FarmerSystematic,
  BusinessLowestPrice,
  BusinessFreshness,
  BusinessCosistence,
} from "../components/Icons/Icons.js"

const Homescreen = (props) => {
  const buyer = {
    title: "Why Farmers Choose GoPasar?",
    description: "You just focus on farming, let us handle the rest for you.",
    features: [
      {
        id: 1,
        icon: <FarmerMarketReady />,
        subTitle: "Market Ready",
        subDescription:
          "We have the existing buyers who are ready to buy your productions and we manage the sales and supplies for you.",
      },
      {
        id: 2,
        icon: <FarmerFast />,
        subTitle: "Fast, Easy and Reliable",
        subDescription:
          "We have a platform that trades your daily produce at the seamless process experiece.",
      },
      {
        id: 3,
        icon: <FarmerSystematic />,
        subTitle: "Systematic Management",
        subDescription:
          "We offer a solution to manage your customers, trend analysis, trade history, auto invoicing and more.",
      },
    ],
  }

  const business = {
    title: "Why Buyers Choose GoPasar?",
    description:
      "We assure you best the most competitive agriproducts in the market",
    features: [
      {
        id: 1,
        icon: <BusinessLowestPrice />,
        subTitle: "Lowest Pricing",
        subDescription:
          "We offer pre-booking where you can 100% lowest price guarantee items. ",
      },
      {
        id: 2,
        icon: <BusinessFreshness />,
        subTitle: "Freshness Guarantee",
        subDescription:
          "We serve direct from farm to you, no more additional handling.",
      },
      {
        id: 3,
        icon: <BusinessCosistence />,
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
      <FeaturesLayoutsTypeTwelve
        id={"farmer"}
        title={buyer.title}
        description={buyer.description}
        features={buyer.features}
        bgVideo={false}
        bgImage={BigImage}
        cardSide="left"
      />
      <FeaturesLayoutsTypeFourth dark={true} />
      <FeaturesLayoutsTypeTwelve
        id={"business"}
        title={business.title}
        description={business.description}
        features={business.features}
        bgVideo={true}
        bgImage={BgVideo}
        cardSide="right"
      />
      <FeaturesLayoutsTypeTenth dark={true} />
      <FormsLayoutsTypeSeventh id={"contact"} dark={false} />
      <CTALayoutsTypeTwelve dark={true} />
    </div>
  )
}

export default Homescreen
