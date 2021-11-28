import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { GiCampfire, GiCampingTent } from "react-icons/gi";

const Rests: React.FC = () => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
    <Button size="large" startIcon={<GiCampingTent />}>
      Long rest
    </Button>
    <Button size="large" startIcon={<GiCampfire />}>
      Short rest
    </Button>
  </Box>
);

export default Rests;
