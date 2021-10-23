import BareInput from "../../../utilComponents/BareInput";
import ClassAndLevelContainer from "./ClassAndLevelContainer";

const CharacterInfo = () => {
  return (
    <>
      <BareInput placeholder="Character Name" />
      {/* <ClassAndLevelContainer /> */}
      <BareInput placeholder="Background" />
      <BareInput placeholder="Race" />
      <BareInput placeholder="Alignment" />
      <BareInput placeholder="Age" />
      <BareInput placeholder="Eyes" />
      <BareInput placeholder="Height" />
      <BareInput placeholder="Skin" />
      <BareInput placeholder="Weight" />
      <BareInput placeholder="Hair" />
    </>
  );
};

export default CharacterInfo;
