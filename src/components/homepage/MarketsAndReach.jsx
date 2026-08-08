import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import indiaMap from "../../assets/images/india_map.webp";

import Rolling from "../../assets/images/market/Rolling.webp";
import Sponge from "../../assets/images/market/Sponge.webp";
import Fertilizers from "../../assets/images/market/Fertilizers.webp";
import Chemicals from "../../assets/images/market/Chemicals.webp";
import Paper from "../../assets/images/market/Paper.webp";
import Tea from "../../assets/images/market/Tea.webp";
import Brickfields from "../../assets/images/market/Brickfields.webp";
import Other from "../../assets/images/market/Other.webp";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 100,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.9,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const cardsContainerAnimation = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const cardAnimation = {
    hidden: {
        opacity: 0,
        y: 100,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const mapAnimation = {
    hidden: {
        opacity: 0,
        y: 100,
        scale: 0.96,
    },

    visible: {
        opacity: 1,
        y: 0,
        scale: 1,

        transition: {
            duration: 0.9,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

/* =========================================================
   DATA
========================================================= */

const industries = [
    {
        id: 1,
        title: "Rolling Mills",
        Icon: Rolling,
    },
    {
        id: 2,
        title: "Sponge Iron",
        Icon: Sponge,
    },
    {
        id: 3,
        title: "Fertilizers",
        Icon: Fertilizers,
    },
    {
        id: 4,
        title: "Chemicals",
        Icon: Chemicals,
    },
    {
        id: 5,
        title: "Paper",
        Icon: Paper,
    },
    {
        id: 6,
        title: "Tea Gardens",
        Icon: Tea,
    },
    {
        id: 7,
        title: "Brickfields",
        Icon: Brickfields,
    },
    {
        id: 8,
        title: "Other Industrial Customers",
        Icon: Other,
    },
];

/* =========================================================
   INDUSTRY CARD
========================================================= */

const IndustryCard = ({ item }) => {
    return (
        <MotionBox
            variants={cardAnimation}
            sx={{
                minHeight: {
                    xs: 52,
                    sm: 62,
                    md: 76,
                },

                display: "flex",
                alignItems: "center",

                gap: {
                    xs: 1.25,
                    sm: 1.75,
                    md: 2,
                },

                px: {
                    xs: 1.25,
                    sm: 1.75,
                    md: 2,
                },

                py: {
                    xs: 0.8,
                    md: 1.1,
                },

                bgcolor: "#FFFFFF",

                border: "1px solid #E5E1E6",

                borderRadius: {
                    xs: "7px",
                    md: "11px",
                },

                cursor: "pointer",

                transition:
                    "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",

                "&:hover": {
                    transform: {
                        xs: "none",
                        md: "translateY(-3px)",
                    },

                    borderColor: "#CDBDD1",

                    boxShadow: {
                        md: "0 10px 24px rgba(74, 16, 88, 0.08)",
                    },
                },

                "&:hover .industry-icon": {
                    transform: {
                        md: "scale(1.08)",
                    },
                },
            }}
        >
            {/* ICON CIRCLE */}

            <Box
                sx={{
                    width: {
                        xs: 34,
                        sm: 42,
                        md: 52,
                    },

                    height: {
                        xs: 34,
                        sm: 42,
                        md: 52,
                    },

                    flexShrink: 0,

                    display: "grid",
                    placeItems: "center",

                    borderRadius: "50%",

                    bgcolor: "#FCFAFD",

                    boxShadow:
                        "0 5px 16px rgba(34, 22, 38, 0.05)",
                }}
            >
                <Box
                    className="industry-icon"
                    component="img"
                    src={item.Icon}
                    alt={`${item.title} icon`}
                    sx={{
                        width: {
                            xs: 17,
                            sm: 19,
                            md: 23,
                        },

                        height: {
                            xs: 17,
                            sm: 19,
                            md: 23,
                        },

                        objectFit: "contain",
                        display: "block",

                        transition:
                            "transform 0.25s ease",
                    }}
                />
            </Box>

            {/* TITLE */}

            <Typography
                sx={{
                    color: "#242124",

                    fontSize: {
                        xs: 9,
                        sm: 11,
                        md: 14,
                    },

                    lineHeight: 1.2,

                    fontWeight: 700,

                    textTransform: "uppercase",

                    letterSpacing: "0.01em",
                }}
            >
                {item.title}
            </Typography>
        </MotionBox>
    );
};

/* =========================================================
   MAIN SECTION
========================================================= */

const MarketsAndReach = () => {
    return (
        <Box
            component="section"
            sx={{
                bgcolor: "#FFFFFF",
                overflow: "hidden",
            }}
        >
            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <Container
                maxWidth={false}
                sx={{
                    maxWidth: "1340px",

                    px: {
                        xs: 2.5,
                        sm: 4,
                        md: 7,
                    },

                    py: {
                        xs: 3.5,
                        sm: 5,
                        md: 7,
                    },
                }}
            >
                <MotionTypography
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}
                    variants={fadeUp}
                    component="h2"
                    sx={{
                        color: "#242124",

                        textAlign: {
                            xs: "left",
                            md: "center",
                        },

                        fontFamily:
                            '"IBM Plex Sans", sans-serif',

                        fontSize: {
                            xs: 21,
                            sm: 28,
                            md: 34,
                        },

                        lineHeight: 1.15,

                        fontWeight: 600,

                        textTransform: "uppercase",

                        letterSpacing: "-0.02em",
                    }}
                >
                    Markets &amp; Reach
                </MotionTypography>
            </Container>

            {/* =================================================
                CONTENT BACKGROUND
            ================================================= */}

            <Box
                sx={{
                    bgcolor: "#FFF6FF",
                }}
            >
                <Container
                    maxWidth={false}
                    sx={{
                        maxWidth: "1240px",

                        px: {
                            xs: 2.5,
                            sm: 4,
                            md: 6,
                        },

                        py: {
                            xs: 3.5,
                            sm: 5,
                            md: 5,
                        },
                    }}
                >
                    {/* ==========================================
                        MAIN GRID
                    ========================================== */}

                    <Box
                        sx={{
                            display: "grid",

                            gridTemplateColumns: {
                                xs: "1fr",
                                md: "minmax(0, 1fr) 1px minmax(0, 1fr)",
                            },

                            columnGap: {
                                md: 5,
                                lg: 7,
                            },

                            alignItems: "stretch",
                        }}
                    >
                        {/* ======================================
                            LEFT - CORE INDUSTRIES
                        ====================================== */}

                        <Box
                            sx={{
                                pb: {
                                    xs: 4,
                                    md: 0,
                                },
                            }}
                        >
                            <MotionTypography
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.25,
                                }}
                                variants={fadeUp}
                                component="h3"
                                sx={{
                                    mb: {
                                        xs: 2.4,
                                        md: 4,
                                    },

                                    color: "#242124",

                                    textAlign: "center",

                                    fontFamily:
                                        '"IBM Plex Sans", sans-serif',

                                    fontSize: {
                                        xs: 12,
                                        sm: 15,
                                        md: 20,
                                    },

                                    fontWeight: 700,

                                    textTransform:
                                        "uppercase",

                                    letterSpacing:
                                        "0.015em",
                                }}
                            >
                                Core Industries
                            </MotionTypography>

                            {/* INDUSTRY CARDS */}

                            <MotionBox
                                variants={
                                    cardsContainerAnimation
                                }
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.1,
                                }}
                                sx={{
                                    display: "grid",

                                    gridTemplateColumns:
                                        "repeat(2, minmax(0, 1fr))",

                                    gap: {
                                        xs: 1.1,
                                        sm: 1.6,
                                        md: 2,
                                    },
                                }}
                            >
                                {industries.map(
                                    (item) => (
                                        <IndustryCard
                                            key={
                                                item.id
                                            }
                                            item={
                                                item
                                            }
                                        />
                                    )
                                )}
                            </MotionBox>
                        </Box>

                        {/* ======================================
                            DESKTOP DIVIDER
                        ====================================== */}

                        <Box
                            sx={{
                                display: {
                                    xs: "none",
                                    md: "block",
                                },

                                width: "1px",

                                bgcolor: "#E8DFE9",
                            }}
                        />

                        {/* ======================================
                            RIGHT - GEOGRAPHIES
                        ====================================== */}

                        <Box
                            sx={{
                                position: "relative",
                            }}
                        >
                            {/* MOBILE DIVIDER */}

                            <Box
                                sx={{
                                    display: {
                                        xs: "block",
                                        md: "none",
                                    },

                                    height: "1px",

                                    bgcolor: "#E4DBE5",

                                    mb: 3.5,
                                }}
                            />

                            {/* GEOGRAPHY HEADING */}

                            <MotionTypography
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.25,
                                }}
                                variants={fadeUp}
                                component="h3"
                                sx={{
                                    mb: {
                                        xs: 2,
                                        md: 2.5,
                                    },

                                    color: "#242124",

                                    textAlign: "center",

                                    fontFamily:
                                        '"IBM Plex Sans", sans-serif',

                                    fontSize: {
                                        xs: 12,
                                        sm: 15,
                                        md: 20,
                                    },

                                    fontWeight: 700,

                                    textTransform:
                                        "uppercase",

                                    letterSpacing:
                                        "0.015em",
                                }}
                            >
                                Geographies Served
                            </MotionTypography>

                            {/* ==================================
                                MAP ANIMATION
                            ================================== */}

                            <MotionBox
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.15,
                                }}
                                variants={mapAnimation}
                                sx={{
                                    position: "relative",

                                    width: "100%",

                                    maxWidth: {
                                        xs: 330,
                                        sm: 460,
                                        md: 520,
                                    },

                                    minHeight: {
                                        xs: 245,
                                        sm: 350,
                                        md: 370,
                                    },

                                    mx: "auto",
                                }}
                            >
                                <Box
                                    component="img"
                                    src={indiaMap}
                                    alt="Geographical markets served across India and Nepal"
                                    sx={{
                                        position:
                                            "absolute",

                                        top: "3%",

                                        left: "50%",

                                        width: {
                                            xs: "70%",
                                            sm: "72%",
                                            md: "78%",
                                        },

                                        height: "auto",

                                        maxHeight:
                                            "92%",

                                        objectFit:
                                            "contain",

                                        transform:
                                            "translateX(-50%)",
                                    }}
                                />
                            </MotionBox>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default MarketsAndReach;