import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Link } from "react-router-dom";

import legacyIcon from "../../assets/images/legacy.webp";
import missionIcon from "../../assets/images/mission.webp";
import csrIcon from "../../assets/images/csr.webp";
import peopleIcon from "../../assets/images/users.webp";

const valuesData = [
    {
        id: "legacy",
        title: "Legacy",
        description:
            "From a single desk in Kolkata in 1984 to a trusted global resource network spanning four decades",
        icon: legacyIcon,
        path: "https://themahakaligroup.com/story",
    },
    {
        id: "mission-vision",
        title: "Mission & Vision",
        description:
            "To grow our multinational conglomerate into a global force in commodities and services, synonymous with trust & commitment worldwide.",
        icon: missionIcon,
        path: "https://themahakaligroup.com/our-vision",
    },
    {
        id: "csr",
        title: "CSR",
        description:
            "Improving air quality, safeguarding water, and restoring the landscapes that anchor our communities",
        icon: csrIcon,
        path: "https://themahakaligroup.com/csr",
    },
    {
        id: "people",
        title: "People",
        description:
            "Our greatest asset isn't in our facilities or technology. It's in our people who are our unwavering strength",
        icon: peopleIcon,
        path: "https://themahakaligroup.com/legacy-leadership",
    },
];

const ValueCard = ({ item }) => {
    return (
        <Box
            sx={{
                position: "relative",
                minHeight: {
                    xs: 154,
                    sm: 180,
                    md: 470,
                },
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#FCF1FF",
                borderRadius: {
                    xs: "14px",
                    md: 0,
                },
                px: {
                    xs: 2.7,
                    sm: 3,
                    md: 3.8,
                },
                pt: {
                    xs: 2.4,
                    sm: 3,
                    md: 4,
                },
                pb: {
                    xs: 2,
                    md: 4,
                },
            }}
        >
            <Box
                component="img"
                src={item.icon}
                alt={`${item.title} icon`}
                sx={{
                    width: {
                        xs: 42,
                        sm: 48,
                        md: 50,
                    },
                    height: {
                        xs: 42,
                        sm: 48,
                        md: 50,
                    },
                    objectFit: "contain",
                    mb: {
                        xs: 1.5,
                        md: 8,
                    },
                }}
            />

            <Typography
                component="h3"
                sx={{
                    m: 0,
                    mb: {
                        xs: 1,
                        md: 3,
                    },
                    color: "#202124",
                    fontSize: {
                        xs: 16,
                        sm: 18,
                        md: 24,
                    },
                    lineHeight: 1.2,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    fontFamily: "IBM Plex Sans"
                }}
            >
                {item.title}
            </Typography>

            <Typography
                sx={{
                    maxWidth: {
                        xs: "82%",
                        sm: "85%",
                        md: "100%",
                    },
                    color: "#1C1B1F",
                    fontSize: {
                        xs: 13,
                        sm: 14,
                        md: 19,
                    },
                    lineHeight: {
                        xs: 1.5,
                        md: 1.5,
                    },
                    fontWeight: 400,
                    fontFamily: "IBM Plex Sans"
                }}
            >
                {item.description}
            </Typography>

            <Box
                component="a"
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    position: {
                        xs: "absolute",
                        md: "static",
                    },
                    top: {
                        xs: 24,
                    },
                    right: {
                        xs: 24,
                    },
                    mt: {
                        md: "auto",
                    },
                    display: "inline-flex",
                    alignItems: "center",
                    gap: {
                        xs: 1,
                        md: 1.3,
                    },
                    width: "fit-content",
                    color: "#42104F",
                    textDecoration: "none",

                    "&:hover .read-more-text": {
                        textDecorationThickness: "2px",
                    },

                    "&:hover .arrow-icon": {
                        transform: "translate(3px, -3px)",
                    },
                }}
            >
                <Typography
                    className="read-more-text"
                    component="span"
                    sx={{
                        color: "inherit",
                        fontSize: {
                            xs: 11,
                            sm: 12,
                            md: 20,
                        },
                        lineHeight: 1,
                        fontWeight: 600,
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                        textTransform: "uppercase",
                    }}
                >
                    Read More
                </Typography>

                <ArrowOutwardRoundedIcon
                    className="arrow-icon"
                    sx={{
                        fontSize: {
                            xs: 18,
                            md: 25,
                        },
                        transition: "transform 0.25s ease",
                    }}
                />
            </Box>
        </Box>
    );
};

const WhatAreWeBuiltOn = () => {
    return (
        <Box
            component="section"
            sx={{
                // backgroundColor: "#FFFFFF",
                py: {
                    xs: 6,
                    sm: 8,
                    md: 9,
                },
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    maxWidth: "1320px",
                    px: {
                        xs: 3.2,
                        sm: 5,
                        md: 4,
                    },
                }}
            >
                <Box
                    sx={{
                        mb: {
                            xs: 4.5,
                            sm: 5,
                            md: 7,
                        },
                        textAlign: {
                            xs: "left",
                            md: "center",
                        },
                    }}
                >
                    <Typography
                        component="h2"
                        sx={{
                            m: 0,
                            mb: {
                                xs: 1.5,
                                md: 1.8,
                            },
                            color: "#202124",
                            fontFamily: 'IBM Plex Sans',
                            fontSize: {
                                xs: 21,
                                sm: 28,
                                md: 34,
                            },
                            lineHeight: 1.15,
                            fontWeight: 600,
                            letterSpacing: "-0.02em",
                            textTransform: "uppercase",
                        }}
                    >
                        What Are We Build On?
                    </Typography>

                    <Typography
                        sx={{
                            color: "#292929",
                            fontSize: {
                                xs: 14,
                                sm: 16,
                                md: 22,
                            },
                            lineHeight: 1.4,
                            fontWeight: 400,
                        }}
                    >
                        The values behind everything we do
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "repeat(4, minmax(0, 1fr))",
                        },
                        gap: {
                            xs: 1.7,
                            sm: 2,
                            md: 2.2,
                        },
                    }}
                >
                    {valuesData.map((item) => (
                        <ValueCard key={item.id} item={item} />
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default WhatAreWeBuiltOn;