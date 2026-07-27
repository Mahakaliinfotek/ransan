import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import ColorizeOutlinedIcon from "@mui/icons-material/ColorizeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import ViewModuleOutlinedIcon from "@mui/icons-material/ViewModuleOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";

import indiaMap from "../../assets/images/india_map.webp";


import Rolling from "../../assets/images/market/Rolling.webp";
import Sponge from "../../assets/images/market/Sponge.webp";
import Fertilizers from "../../assets/images/market/Fertilizers.webp";
import Chemicals from "../../assets/images/market/Chemicals.webp";
import Paper from "../../assets/images/market/Paper.webp";
import Tea from "../../assets/images/market/Tea.webp";
import Brickfields from "../../assets/images/market/Brickfields.webp";
import Other from "../../assets/images/market/Other.webp";

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

const mapLocations = [
    {
        id: 1,
        name: "Nepal",
        top: "26%",
        left: "54%",
    },
    {
        id: 2,
        name: "Assam",
        top: "25%",
        left: "82%",
    },
    {
        id: 3,
        name: "Meghalaya",
        top: "39%",
        left: "79%",
    },
    {
        id: 4,
        name: "Nagaland",
        top: "58%",
        left: "76%",
    },
    {
        id: 5,
        name: "Bihar",
        top: "35%",
        left: "38%",
    },
    {
        id: 6,
        name: "West Bengal",
        top: "62%",
        left: "40%",
    },
    {
        id: 7,
        name: "Chhattisgarh",
        top: "76%",
        left: "35%",
    },
];

const IndustryCard = ({ item }) => {
    const { title, icon } = item;

    return (
        <Box
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
                transition:
                    "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",

                "&:hover": {
                    transform: "translateY(-3px)",
                    borderColor: "#CDBDD1",
                    boxShadow: "0 10px 24px rgba(74, 16, 88, 0.08)",
                },
            }}
        >
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
                    boxShadow: "0 5px 16px rgba(34, 22, 38, 0.05)",
                }}
            >

                <Box
                    component="img"
                    src={item.Icon}
                    alt=""
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
                    }}
                />



            </Box>

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
                {title}
            </Typography>
        </Box>
    );
};

const LocationLabel = ({ location }) => {
    return (
        <Box
            sx={{
                position: "absolute",
                top: location.top,
                left: location.left,
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                gap: {
                    xs: 0.4,
                    md: 0.65,
                },
                px: {
                    xs: 0.65,
                    md: 1,
                },
                py: {
                    xs: 0.3,
                    md: 0.6,
                },
                bgcolor: "#FFFFFF",
                border: "1px solid #E6E1E7",
                borderRadius: "999px",
                boxShadow: "0 3px 10px rgba(33, 23, 36, 0.1)",
                whiteSpace: "nowrap",
                transform: "translate(-50%, -50%)",
            }}
        >
            <Box
                sx={{
                    width: {
                        xs: 4,
                        md: 7,
                    },
                    height: {
                        xs: 4,
                        md: 7,
                    },
                    borderRadius: "50%",
                    bgcolor: "#334B60",
                    flexShrink: 0,
                }}
            />

            <Typography
                sx={{
                    color: "#262126",
                    fontSize: {
                        xs: 6,
                        sm: 7,
                        md: 11,
                    },
                    lineHeight: 1,
                    fontWeight: 500,
                }}
            >
                {location.name}
            </Typography>
        </Box>
    );
};

const MarketsAndReach = () => {
    return (
        <Box
            component="section"
            sx={{
                bgcolor: "#FFFFFF",
                overflow: "hidden",
            }}
        >
            {/* Heading section */}
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
                <Typography
                    component="h2"
                    sx={{
                        color: "#242124",
                        textAlign: {
                            xs: "left",
                            md: "center",
                        },
                        fontSize: {
                            xs: 16,
                            sm: 25,
                            md: 38,
                        },
                        lineHeight: 1.15,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "-0.02em",
                    }}
                >
                    Markets &amp; Reach
                </Typography>
            </Container>

            {/* Content section */}
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
                            md: 4,
                        },
                    }}
                >
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
                        {/* Core industries */}
                        <Box
                            sx={{
                                pb: {
                                    xs: 4,
                                    md: 0,
                                },
                            }}
                        >
                            <Typography
                                component="h3"
                                sx={{
                                    mb: {
                                        xs: 2.4,
                                        md: 4,
                                    },
                                    color: "#242124",
                                    textAlign: "center",
                                    fontSize: {
                                        xs: 12,
                                        sm: 15,
                                        md: 20,
                                    },
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.015em",
                                }}
                            >
                                Core Industries
                            </Typography>

                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                                    gap: {
                                        xs: 1.1,
                                        sm: 1.6,
                                        md: 2,
                                    },
                                }}
                            >
                                {industries.map((item) => (
                                    <IndustryCard key={item.id} item={item} />
                                ))}
                            </Box>
                        </Box>

                        {/* Desktop divider */}
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

                        {/* Mobile divider */}
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

                        {/* Geography */}
                        <Box>
                            <Typography
                                component="h3"
                                sx={{
                                    mb: {
                                        xs: 2,
                                        md: 2.5,
                                    },
                                    color: "#242124",
                                    textAlign: "center",
                                    fontSize: {
                                        xs: 12,
                                        sm: 15,
                                        md: 20,
                                    },
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.015em",
                                }}
                            >
                                Geographies Served
                            </Typography>

                            <Box
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
                                        position: "absolute",
                                        top: "3%",
                                        left: "50%",
                                        width: {
                                            xs: "70%",
                                            sm: "72%",
                                            md: "78%",
                                        },
                                        height: "auto",
                                        maxHeight: "92%",
                                        objectFit: "contain",
                                        transform: "translateX(-50%)",
                                        // filter: "brightness(0) saturate(100%) invert(12%) sepia(52%) saturate(2678%) hue-rotate(274deg) brightness(84%) contrast(99%)",
                                    }}
                                />

                                {/* {mapLocations.map((location) => (
                                    <LocationLabel
                                        key={location.id}
                                        location={location}
                                    />
                                ))} */}

                                {/* <Box
                                    sx={{
                                        position: "absolute",
                                        left: {
                                            xs: "2%",
                                            md: "1%",
                                        },
                                        bottom: {
                                            xs: "5%",
                                            md: "8%",
                                        },
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 0.8,
                                        px: {
                                            xs: 0.9,
                                            md: 1.4,
                                        },
                                        py: {
                                            xs: 0.65,
                                            md: 1,
                                        },
                                        bgcolor: "#FFFFFF",
                                        border: "1px solid #E6E1E7",
                                        borderRadius: {
                                            xs: "5px",
                                            md: "8px",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: {
                                                xs: 5,
                                                md: 8,
                                            },
                                            height: {
                                                xs: 5,
                                                md: 8,
                                            },
                                            bgcolor: "#334B60",
                                            borderRadius: "50%",
                                        }}
                                    />

                                    <Typography
                                        sx={{
                                            color: "#777277",
                                            fontSize: {
                                                xs: 7,
                                                md: 11,
                                            },
                                        }}
                                    >
                                        Location marker
                                    </Typography>
                                </Box> */}
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default MarketsAndReach;