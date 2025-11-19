import { Box, Typography } from "@mui/material";
import InsightsIcon from "@mui/icons-material/Insights";
import PublicIcon from "@mui/icons-material/Public";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import HubIcon from "@mui/icons-material/Hub";
import VerifiedIcon from "@mui/icons-material/Verified";

const Points = [
    {
        icon: <InsightsIcon sx={{ fontSize: 36, color: "#3B0A6A" }} />,
        title: "Strategic North East Edge",
        desc: "First rake loaded from Upper Assam after a decade, enabling supply from Lakwa and Bhojo sidings to industries across India.",
    },
    {
        icon: <PublicIcon sx={{ fontSize: 36, color: "#3B0A6A" }} />,
        title: "Expanding Fuel Ecosystem",
        desc: "Developing supply chains for tea gardens and brickfields across the North East.",
    },
    {
        icon: <AllInclusiveIcon sx={{ fontSize: 36, color: "#3B0A6A" }} />,
        title: "End-to-End Ownership",
        desc: "From sourcing to dispatch, backed by deep integration with Indian Railways and regulatory bodies.",
    },
    {
        icon: <HubIcon sx={{ fontSize: 36, color: "#3B0A6A" }} />,
        title: "Operational Hubs",
        desc: "Dankuni, Haldia, Jogighopa, and Visakhapatnam for nationwide responsiveness.",
    },
    {
        icon: <VerifiedIcon sx={{ fontSize: 36, color: "#3B0A6A" }} />,
        title: "Assured Quality & Compliance",
        desc: "Built-in systems for quantity checks, documentation, and on-time coordination tailored for each industry segment.",
    },
];

export default function WhatMakesUsDifferent() {
    return (
        <Box
            sx={{
                backgroundColor: "#fff",
                width: "100%",
                maxWidth: "1400px",
                mx: "auto",
                px: { xs: 2, md: 6 },
                py: { xs: 2, md: 4 },
            }}
        >
            {/* Section Heading */}
            <Typography
                sx={{
                    fontSize: { xs: "28px", md: "32px", lg: "32px" },
                    fontWeight: 700,
                    mb: 4,
                    color: "#0A0F1C",
                    fontFamily: "Manrope, sans-serif",
                    textAlign: "left",
                }}
            >
                What Makes Us Different
            </Typography>

            {/* Responsive Cards Container */}
            {/* <Box
                sx={{
                    display: "grid",
                    justifyItems: "center",
                    gap: 3,
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "1fr 1fr",
                        md: "1fr 1fr 1fr",
                    },
                }}
            >
                {Points.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            p: 3,
                            borderRadius: "12px",
                            border: "1px solid #E6E8EC",
                            backgroundColor: "#FFFFFF",
                            display: "flex",
                            flexDirection: "column",
                            gap: 1.5,
                        }}
                    >
                        {item.icon}

                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: 700,
                                color: "#0A0F1C",
                                fontFamily: "Manrope !important",
                            }}
                        >
                            {item.title}
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: "Manrope !important",
                                fontSize: "14px",
                                color: "#677189",
                                lineHeight: 1.5,
                            }}
                        >
                            {item.desc}
                        </Typography>
                    </Box>
                ))}
            </Box> */}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 4,
                }}
            >
                {Points.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: { xs: "100%", sm: "45%", md: "30%" },
                            maxWidth: "420px",
                            p: 3,
                            borderRadius: "12px",
                            border: "1px solid #E6E8EC",
                            backgroundColor: "#FFFFFF",
                            display: "flex",
                            flexDirection: "column",
                            gap: 1.5,
                        }}
                    >
                        {item.icon}

                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: 700,
                                color: "#0A0F1C",
                                fontFamily: "Manrope !important",
                            }}
                        >
                            {item.title}
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: "Manrope !important",
                                fontSize: "14px",
                                color: "#677189",
                                lineHeight: 1.5,
                            }}
                        >
                            {item.desc}
                        </Typography>
                    </Box>
                ))}
            </Box>




        </Box>
    );
}
