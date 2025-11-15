import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box sx={{ bgcolor: "#0f172a", color: "white", mt: 10, py: 6, textAlign: "center" }}>
            <Typography fontWeight={700}>RANSAN Enterprises</Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 2 }}>
                {["Services", "Reach", "About", "Contact"].map((item) => (
                    <Typography key={item} sx={{ cursor: "pointer" }}>
                        {item}
                    </Typography>
                ))}
            </Box>

            <Typography mt={2} fontSize="12px" color="gray">
                © 2024 RANSAN Enterprises. All Rights Reserved.
            </Typography>
        </Box>
    );
}
