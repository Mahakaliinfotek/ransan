
import { Box, Typography, Paper } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import FactoryIcon from "@mui/icons-material/Factory";
import ForestIcon from "@mui/icons-material/Forest";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

export default function MarketReachCards() {
    return (
        <Box
            sx={{
                backgroundColor: "#fff",
                width: "100%",
              //  maxWidth: "1400px",
                mx: "auto",
                px: { xs: 2, md: 4 },
                py: { xs: 6, md: 4 },
            }}
        >
            {/* Heading */}
            <Typography
                sx={{
                    fontSize: { xs: "28px", md: "40px" },
                    fontWeight: 700,
                    color: "#0A0F1C",
                    fontFamily: "Manrope !important",
                    mb: 4,
                    textAlign: "left",
                }}
            >
                Markets & Reach
            </Typography>

            {/* Cards */}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 3,
                    justifyContent: "space-between",
                }}
            >

                {/* 1️⃣ CORE INDUSTRIES */}
                <Paper
                    elevation={0}
                    sx={{
                        width: { xs: "100%", sm: "48%", md: "23%" },
                        p: 3,
                        borderRadius: "14px",
                        border: "1px solid #E6E8EC",
                    }}
                >
                    <FactoryIcon sx={{ fontSize: 36, color: "#3B0A6A", mb: 1 }} />
                    <Typography
                        sx={{ fontSize: "18px", fontWeight: 700, color: "#0A0F1C", mb: 1, fontFamily: "Manrope !important", }}
                    >
                        Core Industries
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "#677189", lineHeight: 1.6, fontFamily: "Manrope !important", }}>
                        Rolling mills, sponge iron, cement, fertilizers, chemicals, and paper.
                    </Typography>
                </Paper>

                {/* 2️⃣ OTHER SEGMENTS */}
                <Paper
                    elevation={0}
                    sx={{
                        width: { xs: "100%", sm: "48%", md: "23%" },
                        p: 3,
                        borderRadius: "14px",
                        border: "1px solid #E6E8EC",
                    }}
                >
                    <ForestIcon sx={{ fontSize: 36, color: "#3B0A6A", mb: 1 }} />
                    <Typography
                        sx={{ fontSize: "18px", fontWeight: 700, color: "#0A0F1C", mb: 1, fontFamily: "Manrope !important", }}
                    >
                        Other Segments
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "#677189", lineHeight: 1.6, fontFamily: "Manrope !important", }}>
                        Tea gardens, brickfields, and other industrial consumers.
                    </Typography>
                </Paper>

                {/* 3️⃣ SERVICE GEOGRAPHY */}
                <Paper
                    elevation={0}
                    sx={{
                        width: { xs: "100%", sm: "48%", md: "23%" },
                        p: 3,
                        borderRadius: "14px",
                        border: "1px solid #E6E8EC",
                    }}
                >
                    <PublicIcon sx={{ fontSize: 36, color: "#3B0A6A", mb: 1 }} />
                    <Typography
                        sx={{ fontSize: "18px", fontWeight: 700, color: "#0A0F1C", mb: 1, fontFamily: "Manrope !important", }}
                    >
                        Service Geography
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "#677189", lineHeight: 1.6, fontFamily: "Manrope !important", }}>
                        Chhattisgarh, Bihar, Jharkhand, West Bengal, Assam, Meghalaya, Nagaland.
                    </Typography>
                </Paper>

                {/* 4️⃣ CROSS-BORDER REACH */}
                <Paper
                    elevation={0}
                    sx={{
                        width: { xs: "100%", sm: "48%", md: "23%" },
                        p: 3,
                        borderRadius: "14px",
                        border: "1px solid #E6E8EC",
                    }}
                >
                    <TravelExploreIcon sx={{ fontSize: 36, color: "#3B0A6A", mb: 1 }} />
                    <Typography
                        sx={{ fontSize: "18px", fontWeight: 700, color: "#0A0F1C", mb: 1, fontFamily: "Manrope !important", }}
                    >
                        Cross-border Reach
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "#677189", lineHeight: 1.6, fontFamily: "Manrope !important", }}>
                        Extending supply and logistics capabilities to Nepal.
                    </Typography>
                </Paper>

            </Box>
        </Box>
    );
}
