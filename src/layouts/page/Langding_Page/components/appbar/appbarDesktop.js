import { ListItemButton, ListItemText } from "@mui/material";
import { AppbarActionIcons, AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";

import Actions from "./actions";
import { useUIContext } from "../../context/ui";

export default function AppbarDesktop({ matches }) {
  const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <AppbarHeader variant="h3">Hệ thống bình chọn </AppbarHeader>
      <MyList type="row"></MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
