import { createContext, FC, useContext, useState } from "react";

const CharacterContext = createContext<any>(null);
const CharacterUpdateContext = createContext<any>(null);

export const useCharacter = () => useContext(CharacterContext);
export const useCharacterUpdate = () => useContext(CharacterUpdateContext);

const CharacterProvider: FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [character, setCharacter] = useState<any>({});
  return (
    <CharacterContext.Provider value={character}>
      <CharacterUpdateContext.Provider value={setCharacter}>
        {children}
      </CharacterUpdateContext.Provider>
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
