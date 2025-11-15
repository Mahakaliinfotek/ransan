import { Box, Typography, Button } from "@mui/material";
import Banner_dt from "../assets/images/banner_dt.png";   // Desktop
import Banner_mb from "../assets/images/banner_mb.png";

export default function HeroSection() {
    return (

        <Box sx={{
            px: 2
        }}>
            <Box
                sx={{
                    height: { xs: "70vh", md: "480px" },
                    borderRadius: 2,
                    p: { xs: 3, md: 8 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",

                    // FIXED BACKGROUND IMAGE + GRADIENT
                    backgroundImage: {
                        xs: `
            linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)),
            url(${Banner_mb})
        `, md: `
            linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)),
            url(${Banner_dt})
        `
                    },
                    backgroundSize: "cover",        // FIXED
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}

            >


                <Typography
                    variant="h3"
                    sx={{ color: "white", fontWeight: 900, maxWidth: "700px" }}
                >
                    Logistics, Mastered. Reliable Coal & Coke Solutions Since 2003.
                </Typography>

                <Typography sx={{ color: "rgba(255,255,255,0.9)", mt: 2 }}>
                    Your trusted partner in end-to-end coal and coke logistics, trading, and rail liaison across India.
                </Typography>

                <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
                    <Button variant="contained">Our Services</Button>
                    <Button variant="outlined" sx={{ bgcolor: "rgba(255,255,255,0.6)" }}>
                        Make an Enquiry
                    </Button>
                </Box>
            </Box>


        </Box >

    );
}
