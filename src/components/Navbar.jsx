import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

export default function Navbar() {
    return (
        <AppBar
            position="sticky"
            sx={{
                bgcolor: "rgba(247,245,248,0.8)",
                backdropFilter: "blur(10px)",
                borderBottom: "1px solid rgba(0,0,0,0.1)",
                color: "primary.main",
            }}
            elevation={0}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box display="flex" alignItems="center" gap={1}>
                    <Box sx={{ width: 28, height: 28, color: "primary.main" }}>
                        <img
                            src="/logo.png"
                            width="28"
                            height="28"
                            alt=""
                            style={{ filter: "invert(12%) sepia(90%) saturate(4000%) hue-rotate(260deg)" }}
                        />
                    </Box>

                    <Typography variant="h6" fontWeight={700}>
                        RANSAN Enterprises
                    </Typography>
                </Box>

                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
                    {["Services", "Reach", "About", "Contact"].map((item) => (
                        <Typography
                            key={item}
                            sx={{ cursor: "pointer", "&:hover": { color: "primary.main" } }}
                        >
                            {item}
                        </Typography>
                    ))}

                    <Button variant="contained">Contact Us</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
