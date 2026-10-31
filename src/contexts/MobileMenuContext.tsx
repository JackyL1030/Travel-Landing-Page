import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface Props {
  children: ReactNode;
}

interface ContextValueShape {
  menuOpened: boolean;
  setMenuOpened: Dispatch<SetStateAction<boolean>>;
}

export const MenuContext = createContext<ContextValueShape>({
  menuOpened: false,
  setMenuOpened: () => {},
});

export default function MenuContextProvider({ children }: Props) {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ menuOpened, setMenuOpened }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuContext() {
  return useContext(MenuContext);
}
