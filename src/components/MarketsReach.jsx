import { Box, Typography } from "@mui/material";

export default function MarketsReach() {
    return (
        <Box
            sx={{
                
                width: "100%",
                maxWidth: "1400px",
                mx: "auto",
                px: { xs: 2, md: 6 },
                py: { xs: 6, md: 5 },
                textAlign: "center",
            }}
        >
            {/* Heading */}
            <Typography
                sx={{
                    fontSize: { xs: "26px", md: "36px" },
                    fontWeight: 700,
                    color: "#0A0F1C",
                    fontFamily: "Manrope, sans-serif",
                    mb: 2,
                }}
            >
                Markets & Reach
            </Typography>

            {/* Description */}
            <Typography
                sx={{
                    fontSize: { xs: "14px", md: "18px" },
                    color: "#5A6273",
                    maxWidth: "900px",
                    mx: "auto",
                    lineHeight: 1.7,
                    fontFamily: "Manrope, sans-serif",
                }}
            >
                Our strategic presence spans the entire nation, with operational hubs in
                key industrial zones ensuring we are exactly where you need us to be.
                Hover over the map to see our key service areas.
            </Typography>
        </Box>
    );
}
