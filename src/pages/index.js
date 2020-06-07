import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import HeroSlider from "../components/Index/HeroSlider"
import CTAImages from "../components/Index/CTAImages"
import LatestTrend from "../components/Index/LatestTrend"
import Citat from "../components/index/Citation"
import About from "../components/Index/About"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={["tango", "brand", "alliance"]} />
    <HeroSlider />
    <CTAImages />
    <LatestTrend />
    <Citat />
    <About />
  </Layout>
)

export default IndexPage
