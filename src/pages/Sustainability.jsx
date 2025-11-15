import { Box } from '@mui/material'
import React from 'react'

import SustainabilityHero from '../components/sustainability/SustainabilityHero'
import PrinciplesSection from '../components/sustainability/PrinciplesSection'
import WhatWeDo from '../components/sustainability/WhatWeDo'

import PartnerWithUs from '../components/sustainability/PartnerWithUs'
import Header from '../layouts/Header'

export const Sustainability = () => {
    return (
        <Box sx={{ width: "100%", bgcolor: "background.light" }}>
            <Header risDark={false} />
            <SustainabilityHero />
            <PrinciplesSection />
            <WhatWeDo />
            {/* <ImpactAtAGlance /> */}
            <PartnerWithUs />
        </Box>
    )
}
