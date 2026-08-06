import { useReducedMotion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const companies = [
  { id: "abhijeet-ferrotech", name: "Abhijeet Ferrotech", logo: "/home-page/trusted-by/abhijeet-ferrotech.webp" },
  { id: "br-steel-and-alloys", name: "BR Steel and Alloys", logo: "/home-page/trusted-by/br-steel-and-alloys.webp" },
  { id: "evonith-metallics", name: "Evonith Metallics", logo: "/home-page/trusted-by/evonith-metallics.webp" },
  { id: "grasim-chemicals", name: "Grasim Chemicals", logo: "/home-page/trusted-by/grasim-chemicals.webp" },
  { id: "jai-raj-ispat", name: "Jai Raj Ispat", logo: "/home-page/trusted-by/jai-raj-ispat.webp" },
  { id: "mahindra", name: "Mahindra", logo: "/home-page/trusted-by/mahindra.webp" },
  { id: "maithan-alloys", name: "Maithan Alloys", logo: "/home-page/trusted-by/maithain-alloys.webp" },
  { id: "of-business", name: "OfBusiness", logo: "/home-page/trusted-by/of-business.webp" },
  { id: "omet", name: "Omet", logo: "/home-page/trusted-by/omet.webp" },
  { id: "reactive-metals", name: "Reactive Metals", logo: "/home-page/trusted-by/reactive_metals.webp" },
  { id: "real-ispat", name: "Real Ispat", logo: "/home-page/trusted-by/real_ispat.webp" },
  { id: "shilpa-steel-and-power", name: "Shilpa Steel and Power", logo: "/home-page/trusted-by/shilpa-steel-and-power-limited.webp" },
  { id: "sks-ispat", name: "SKS Ispat", logo: "/home-page/trusted-by/sks-ispat.webp" },
  { id: "smw", name: "SMW", logo: "/home-page/trusted-by/smw.webp" },
];

function CompanyLogo({ company }) {
  return (
    <Box
      component="img"
      src={company.logo}
      alt={`${company.name} logo`}
      loading="lazy"
      sx={{
        display: "block",
        width: "100%",
        height: "100%",

        objectFit: "contain",
      }}
    />
  );
}

function MarqueeRow({ companies: rowCompanies, reverse = false, reducedMotion }) {
  return (
    <Box sx={{ overflow: "hidden", "&:hover .trusted-by-track": { animationPlayState: "paused" } }}>
      <Box
        className="trusted-by-track"
        sx={{
          display: "flex",
          width: "max-content",
          animation: reducedMotion
            ? "none"
            : `${reverse ? "trustedByMarqueeReverse" : "trustedByMarquee"} 28s linear infinite`,
          "@keyframes trustedByMarquee": {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(-50%)" },
          },
          "@keyframes trustedByMarqueeReverse": {
            from: { transform: "translateX(-50%)" },
            to: { transform: "translateX(0)" },
          },
        }}
      >
        {[0, 1].map((copy) => (
          <Box
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
            sx={{ display: "flex", flexShrink: 0 }}
          >
            {rowCompanies.map((company) => (
              <Box
                key={`${copy}-${company.id}`}
                sx={{
                  width: { xs: 223, md: 250 },
                  height: { xs: 100.8, md: 140 },
                  mx: { xs: 1, md: 1.6 },
                  p: { xs: 1, md: 1.5 },
                  display: "flex",
                  flexShrink: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#fff",
                  border: "2px solid #e3e3e3",
                  // borderRadius: { xs: 1.5, md: 2 },
                  // "&:hover": { borderColor: "#c9c9c9", transform: "translateY(-3px)" },
                }}
              >
                <CompanyLogo company={company} />
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default function TrustedBySection() {
  const reducedMotion = useReducedMotion();

  return (
    <Box component="section" id="trusted-by" sx={{ width: "100%", px: { xs: 2.75, sm: 4, md: 8 }, pt: { xs: 1.5, md: 2 }, pb: { xs: 7, md: 10 } }}>
      <Box sx={{  mx: "auto" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.4 }}>
          <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#0638B8" }} />
          <Typography sx={{ color: "#4a4a4f", fontFamily: '"Roboto Mono", monospace', fontSize: { xs: 14, md: 22 }, fontWeight: 500 }}>TRUSTED BY</Typography>
        </Box>

        <Box sx={{ mt: { xs: 2.5, md: 3.5 }, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 2 }}>
          <Typography component="h2" sx={{ m: 0, color: "#202024", fontFamily: '"Instrument Sans", Arial, sans-serif', fontSize: { xs: 27, sm: 36, md: 48 }, fontWeight: 500, lineHeight: { xs: 1.35, md: 1.32 }, letterSpacing: "-.04em", textTransform: "uppercase" }}>
            Trusted by companies that<br />demand reliability
          </Typography>
          <Box
            sx={{
              mt: {
                xs: 0,
                md: 0.8,

              },
              width: { xs: 90, md: 150 },
              flexShrink: 0,
            }}
          >
            {/* <DecorativeWave /> */}
            <Box
              component="img"
              src="/home-page/lg4.webp"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>

        <Box sx={{ mt: { xs: 7.5, md: 12.5 }, display: "grid", gap: { xs: 1.6, md: 5 } }}>
          <MarqueeRow companies={companies.slice(0, 7)} reducedMotion={reducedMotion} />
          <MarqueeRow companies={companies.slice(7)} reverse reducedMotion={reducedMotion} />
        </Box>
      </Box>
    </Box>
  );
}
