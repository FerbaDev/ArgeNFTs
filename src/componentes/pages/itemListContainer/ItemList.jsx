import { Box } from "@mui/material";
import { Item } from "./Item";

export const ItemList = ({ items }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </Box>
  );
};
