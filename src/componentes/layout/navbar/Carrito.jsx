import { Badge, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CartWidget() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
