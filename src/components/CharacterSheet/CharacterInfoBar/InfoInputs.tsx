import BareInput from "../../../utilComponents/BareInput";

const InfoInputs = () => {
  return (
    <>
      <BareInput
        sx={{ gridArea: "name" }}
        variant="standard"
        label="Character Name"
        inputProps={{
          style: {
            fontSize: 24,
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: 24,
          },
        }}
      />

      <BareInput
        sx={{ gridArea: "race" }}
        inputProps={{
          style: {
            fontSize: 16,
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: 16,
          },
        }}
        label="Race"
      />
      <BareInput
        sx={{ gridArea: "background" }}
        variant="standard"
        inputProps={{
          style: {
            fontSize: 14,
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: 14,
          },
        }}
        label="Background"
      />
      <BareInput
        sx={{ gridArea: "alignment" }}
        inputProps={{
          style: {
            fontSize: 12,
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: 12,
          },
        }}
        label="Alignment"
      />
      <BareInput
        sx={{ gridArea: "age" }}
        inputProps={{
          style: {
            fontSize: 12,
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: 12,
          },
        }}
        label="Age"
      />
      <BareInput
        sx={{ gridArea: "eyes" }}
        inputProps={{
          style: {
            fontSize: 12,
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: 12,
          },
        }}
        label="Eyes"
      />
      <BareInput
        sx={{ gridArea: "height" }}
        inputProps={{
          style: {
            fontSize: 12,
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: 12,
          },
        }}
        label="Height"
      />
      <BareInput
        sx={{ gridArea: "skin" }}
        inputProps={{
          style: {
            fontSize: 12,
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: 12,
          },
        }}
        label="Skin"
      />
      <BareInput
        sx={{ gridArea: "weight" }}
        inputProps={{
          style: {
            fontSize: 12,
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: 12,
          },
        }}
        label="Weight"
      />
      <BareInput
        sx={{ gridArea: "hair" }}
        inputProps={{
          style: {
            fontSize: 12,
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: 12,
          },
        }}
        label="Hair"
      />
    </>
  );
};
export default InfoInputs;
