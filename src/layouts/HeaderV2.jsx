import { useState } from "react";
import { Box, Button, Drawer, IconButton } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "../assets/mg-logo.png"

const mobileMenuItems =
    [
        { label: "HOME", sectionId: "home" },
        { label: "BUSINESSES", sectionId: "businesses" },
        { label: "ABOUT", path: "/about-us" },
        { label: "PEOPLE", path: "https://themahakaligroup.com/legacy-leadership" },
    ];

export default function HeaderV2() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const goToSection = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const navigateToSection = (sectionId) => {
        if (location.pathname === "/") {
            goToSection(sectionId);
            return;
        }

        navigate("/", { state: { scrollTo: sectionId } });
    };

    const handleMobileNavigation = ({ sectionId, path }) => {
        setIsMenuOpen(false);

        if (path) {
            navigate(path);
            return;
        }

        // Wait for the drawer close animation to begin before scrolling.
        window.requestAnimationFrame(() => navigateToSection(sectionId));
    };

    return (
        <Box
            component="header"
            sx={{
                position: "absolute",
                zIndex: 20,

                // Mobile
                top: { xs: 0, md: 0 },
                left: { xs: "28px", md: "13.2%" },
                right: { xs: "28px", md: "13.2%" },
                height: { xs: 62, md: 92 },
                px: { xs: 2, md: 5 },
                bgcolor: "#FFFFFF",
                borderRadius: {
                    xs: "0 0 22px 22px",
                    md: "0 0 28px 28px",
                },

                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            {/* Desktop left navigation */}
            <Box
                sx={{
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    gap: { md: 3.2, lg: 3.8 },
                    flex: 1,
                }}
            >
                <HeaderNavItem label="HOME" onClick={() => navigateToSection("home")} />

                <HeaderNavItem
                    label="BUSINESSES"
                    onClick={() => navigateToSection("businesses")}
                />

                <HeaderNavItem
                    label="PEOPLE"
                    onClick={() => navigate("https://themahakaligroup.com/legacy-leadership")}
                />
            </Box>

            {/* Logo */}
            <Box
                component="a"
                href="/"
                aria-label="Mahakali Group home"
                sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    position: { md: "absolute" },
                    left: { md: "50%" },
                    transform: { md: "translateX(-50%)" },
                }}
            >
                <Box
                    component="img"
                    src={logo}
                    alt="Mahakali Group"
                    sx={{
                        display: "block",
                        width: { xs: 78, md: 112 },
                        height: "auto",
                        objectFit: "contain",
                    }}
                />
            </Box>

            {/* Desktop right navigation */}
            <Box
                sx={{
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: 2.4,
                    flex: 1,
                }}
            >
                <HeaderNavItem
                    label="ABOUT"
                    onClick={() => navigate("/about-us")}
                />

                <Button
                    onClick={() => navigate("/contact")}
                    disableElevation
                    endIcon={
                        <AddRoundedIcon
                            sx={{
                                fontSize: "17px !important",
                            }}
                        />
                    }
                    sx={{
                        minHeight: 44,
                        px: 3,
                        borderRadius: "999px",
                        bgcolor: "#42104F",
                        color: "#FFFFFF",
                        fontFamily: '"Roboto Condensed", "Arial Narrow", sans-serif',
                        fontSize: "14px",
                        fontWeight: 400,
                        "&:hover": {
                            bgcolor: "#42104F",
                        },
                    }}
                >
                    CONTACT US
                </Button>
            </Box>

            {/* Mobile menu button */}
            <IconButton
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open navigation menu"
                sx={{
                    display: { xs: "inline-flex", md: "none" },
                    width: 38,
                    height: 38,
                    color: "#42104F",
                    p: 0,
                }}
            >
                <MenuRoundedIcon
                    sx={{
                        fontSize: 26,
                    }}
                />
            </IconButton>

            <Drawer
                anchor="right"
                open={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                ModalProps={{ keepMounted: true }}
                PaperProps={{
                    sx: {
                        width: "calc(100% - 3px)",
                        maxWidth: 520,
                        height: "auto",
                        minHeight: 357,
                        px: 2.75,
                        pt: 1.75,
                        pb: 2.25,
                        bgcolor: "#FFFFFF",
                        color: "#1D1B20",
                        borderRadius: "0 0 24px 24px",
                        boxShadow: "none",
                        overflow: "hidden",
                    },
                }}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiBackdrop-root": {
                        bgcolor: "rgba(29, 27, 32, 0.14)",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                    }}
                >
                    <Box
                        component="img"
                        src={logo}
                        alt="Mahakali Group"
                        sx={{ width: 91, height: "auto", objectFit: "contain" }}
                    />

                    <IconButton
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close navigation menu"
                        sx={{ color: "#42104F", p: 0.25, mt: 0.15, mr: -0.25 }}
                    >
                        <CloseRoundedIcon sx={{ fontSize: 29 }} />
                    </IconButton>
                </Box>

                <Box
                    component="nav"
                    aria-label="Mobile navigation"
                    sx={{ mt: 2.25, pl: 1.4, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2.1 }}
                >
                    {mobileMenuItems.map((item) => (
                        <Button
                            key={item.label}
                            onClick={() => handleMobileNavigation(item)}
                            endIcon={<AddRoundedIcon sx={{ fontSize: "16px !important", color: "#42104F" }} />}
                            sx={{
                                minWidth: 0,
                                p: 0,
                                color: "#1D1B20",
                                fontFamily: '"Roboto Condensed", "Arial Narrow", sans-serif',
                                fontSize: 21,
                                fontWeight: 400,
                                lineHeight: 1.5,
                                justifyContent: "flex-start",
                                "& .MuiButton-endIcon": { ml: 0.75 },
                                "&:hover": { bgcolor: "transparent", color: "#42104F" },
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Box>

                <Button
                    onClick={() => handleMobileNavigation({ sectionId: "contact-us" })}
                    endIcon={<AddRoundedIcon sx={{ fontSize: "18px !important" }} />}
                    sx={{
                        mt: 3.25,
                        ml: 0,
                        minHeight: 46,
                        px: 2.8,
                        borderRadius: "999px",
                        bgcolor: "#42104F",
                        color: "#FFFFFF",
                        fontFamily: '"Roboto Condensed", "Arial Narrow", sans-serif',
                        fontSize: 20,
                        fontWeight: 400,
                        lineHeight: 1,
                        "& .MuiButton-endIcon": { ml: 0.7 },
                        "&:hover": { bgcolor: "#42104F" },
                    }}
                >
                    CONTACT&nbsp; US
                </Button>
            </Drawer>
        </Box>
    );
}

function HeaderNavItem({ label, onClick }) {
    return (
        <Button
            onClick={onClick}
            disableRipple
            endIcon={
                <AddRoundedIcon
                    sx={{
                        fontSize: "17px !important",
                        color: "#42104F",
                    }}
                />
            }
            sx={{
                minWidth: "auto",
                p: 0,
                color: "#1B1B1B",
                fontFamily: '"Roboto Condensed", "Arial Narrow", sans-serif',
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: 1,
                borderRadius: 0,
                "&:hover": {
                    backgroundColor: "transparent",
                    color: "#42104F",
                },
            }}
        >
            {label}
        </Button>
    );
}
