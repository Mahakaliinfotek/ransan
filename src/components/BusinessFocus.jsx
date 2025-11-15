import { Box, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PublicIcon from "@mui/icons-material/Public";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";

export default function BusinessFocus() {
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "1400px",
                mx: "auto",
                px: { xs: 2, md: 6 },
                py: { xs: 4, md: 4 },
            }}
        >
            {/* Heading */}
            <Typography
                sx={{
                    fontSize: { xs: "28px", md: "40px" },
                    fontWeight: 700,
                    mb: 2,
                    color: "#0A0F1C",
                    fontFamily: "Manrope, sans-serif",
                }}
            >
                Business Focus

            </Typography>

            {/* Description */}
            <Typography
                sx={{
                    fontSize: { xs: "14px", md: "18px" },
                    color: "#5A6273",
                    maxWidth: "1200px",
                    lineHeight: 1.6,
                    mb: 5,
                    fontFamily: "Manrope, sans-serif",
                }}
            >
                RANSAN is a coal and coke solutions company with core strengths in fuel supply management, trading, and railway liaisoning, serving India’s energy and industrial ecosystem since 2003. We specialize in moving North East–mined coal from Lakwa and Bhojo sidings to power industries across India, ensuring quality fuel supply and full materialization of freight movement for Indian Railways..
            </Typography>

            {/* Cards Wrapper */}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 3,
                    justifyContent: { xs: "center", md: "flex-start" },
                }}
            >

                {/* 1️⃣ Experience */}
                <Box
                    sx={{
                        flex: "1 1 300px",
                        maxWidth: { xs: "100%", sm: "48%", md: "32%" },
                        p: 3,
                        borderRadius: "12px",
                        border: "1px solid #E6E8EC",
                    }}
                >
                    <CalendarMonthIcon sx={{ fontSize: 32, color: "#3B0A6A", mb: 1 }} />
                    <Typography
                        sx={{
                            fontSize: "18px",
                            fontWeight: 700,
                            mb: 1,
                            color: "#0A0F1C",
                            fontFamily: "Manrope",
                        }}
                    >
                        20+ Years of Experience
                    </Typography>
                    <Typography sx={{ color: "#677189", fontSize: "14px" }}>
                        Decades of proven expertise in managing complex logistics and trading
                        operations.
                    </Typography>
                </Box>

                {/* 2️⃣ Nationwide Network */}
                <Box
                    sx={{
                        flex: "1 1 300px",
                        maxWidth: { xs: "100%", sm: "48%", md: "32%" },
                        p: 3,
                        borderRadius: "12px",
                        border: "1px solid #E6E8EC",
                    }}
                >
                    <PublicIcon sx={{ fontSize: 32, color: "#3B0A6A", mb: 1 }} />
                    <Typography
                        sx={{
                            fontSize: "18px",
                            fontWeight: 700,
                            mb: 1,
                            color: "#0A0F1C",
                            fontFamily: "Manrope",
                        }}
                    >
                        Nationwide Network
                    </Typography>
                    <Typography sx={{ color: "#677189", fontSize: "14px" }}>
                        A robust and strategic presence across key industrial and transport
                        hubs in India.
                    </Typography>
                </Box>

                {/* 3️⃣ Reliability */}
                <Box
                    sx={{
                        flex: "1 1 300px",
                        maxWidth: { xs: "100%", sm: "48%", md: "32%" },
                        p: 3,
                        borderRadius: "12px",
                        border: "1px solid #E6E8EC",
                    }}
                >
                    <ShieldOutlinedIcon sx={{ fontSize: 32, color: "#3B0A6A", mb: 1 }} />
                    <Typography
                        sx={{
                            fontSize: "18px",
                            fontWeight: 700,
                            mb: 1,
                            color: "#0A0F1C",
                            fontFamily: "Manrope",
                        }}
                    >
                        Unmatched Reliability
                    </Typography>
                    <Typography sx={{ color: "#677189", fontSize: "14px" }}>
                        Commitment to on-time delivery and operational excellence you can
                        depend on.
                    </Typography>
                </Box>

            </Box>
        </Box>
    );
}
