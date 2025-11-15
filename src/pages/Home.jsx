import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";


import { Box } from "@mui/material";
import Footer from "../components/Footer";
import BusinessFocus from "../components/BusinessFocus";
import CoreOfferings from "../components/CoreOfferings";
import MarketsReach from "../components/MarketsReach";
import MapSection from "../components/MapSection";
import ContactSection from "../components/ContactSection ";
import WhatMakesUsDifferent from "../components/WhatMakesUsDifferent";
import MarketReachCards from "../components/MarketReachCards";
import ClientsComponent from "../components/ClientsComponent";
import Header from "../layouts/Header";
import HeroSlider from "../components/common/HeroSlider";
import CompanyStrip from "../components/common/CompanyStrip";
import PeopleCultureSlider from "../components/homepage/PeopleCultureSlider";
import VisionSection from "../components/homepage/VisionSection";
import BusinessesSection from "../components/homepage/BusinessesSection";
import HistorySection from "../components/homepage/HistorySection";
import SustainabilitySection from "../components/homepage/SustainabilitySection";
import MediaCSRSection from "../components/homepage/MediaCSRSection";

export default function HomePage() {
    return (
        <>


            <Header />
            <HeroSlider />

            < BusinessFocus />
            <CoreOfferings />
            <MarketReachCards />
            <ClientsComponent />
            <WhatMakesUsDifferent />
            {/* <ContactSection /> */}
            {/* <Footer /> */}


            <CompanyStrip />
            <PeopleCultureSlider />
            <VisionSection />
            <BusinessesSection />
            <HistorySection />
            <SustainabilitySection />
            <MediaCSRSection />
            <CompanyStrip />


        </>
    );
}
