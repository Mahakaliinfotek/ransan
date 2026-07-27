import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";


import { Box } from "@mui/material";

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

import ContactUs from "../components/homepage/ContactUs";
import WhatMakesUsDifferents from "../components/homepage/WhatMakesUsDifferent";
import MarketsAndReach from "../components/homepage/MarketsAndReach";
import OurClients from "../components/homepage/OurClients";
import WhatAreWeBuiltOn from "../components/homepage/WhatAreWeBuiltOn";
import OurBusinessesSection from "../components/homepage/OurBusinessesSection";

export default function HomePageV1() {
    return (
        <Box sx={{
            bgcolor: "#FFFFFF",
            position: "relative",
            zIndex: 0,
            isolation: "isolate",
            width: "100%",
            overflowX: "clip",
            overflowY: "visible",

            "&::after": {
                content: '""',
                position: "absolute",
                zIndex: -1,
                inset: 0,
                pointerEvents: "none",
                backgroundImage:
                    "radial-gradient(circle at left center, rgba(145, 153, 173, 0.3) 0 1.25px, transparent 1.55px)",
                backgroundSize: {
                    xs: "calc((100% - 40px) / 4) 8px",
                    md: "calc((100% - 56px) / 4) 8px",
                },
                backgroundPosition: {
                    xs: "20px 0",
                    md: "28px 0",
                },
                backgroundRepeat: "repeat",
            },
        }}>

            <Box id="home">
                <HeroSlider />
            </Box>
            <WhatMakesUsDifferents />
            <MarketsAndReach />
            <OurClients />
            <WhatAreWeBuiltOn />
            <OurBusinessesSection />






        </Box>
    );
}
