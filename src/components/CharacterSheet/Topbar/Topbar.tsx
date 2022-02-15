import { styled } from "@mui/system";
import CharacterName from "./CharacterName";
import TopRightBar from "./TopRightBar";

const Container = styled("div")({
  display: "flex",
});

const Topbar = () => (
  <Container>
    <CharacterName />
    <TopRightBar />
  </Container>
);

export default Topbar;
