import { ListItem, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { ReactNode } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useIsDesktop } from "../../hooks/Device";

export interface NavbarLinkProps {
  item: { link: string; title: string; icon: ReactNode };
}

const StyledLink = styled(Link)({
  textDecoration: "none",
});

interface StyledTypographyProps {
  link: string;
  pathname: string;
}

const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "link" && prop !== "pathname",
})<StyledTypographyProps>(({ link, pathname, theme }: any) => ({
  fontSize: 20,
  transition: "color 0.3s",
  color: pathname.includes(link)
    ? theme.palette.text.primary
    : theme.custom.text,
  borderBottom: pathname.includes(link)
    ? `1px solid ${theme.custom.text}`
    : "none",
  "&:hover": {
    color: theme.palette.text.primary,
    borderBottom: `1px solid ${theme.custom.text}`,
  },
}));

const StyledListItem = styled(ListItem)({
  whiteSpace: "nowrap",
});

const NavbarLink: React.FC<NavbarLinkProps> = ({ item }) => {
  const { pathname } = useLocation();
  const isDesktop = useIsDesktop();

  if (!isDesktop) {
    return (
      <StyledListItem key={item.link}>
        <StyledLink to={item.link}>
          <StyledTypography link={item.link} pathname={pathname}>
            {item.icon}
          </StyledTypography>
        </StyledLink>
      </StyledListItem>
    );
  }
  return (
    <StyledListItem key={item.link}>
      <StyledLink to={item.link}>
        <StyledTypography link={item.link} pathname={pathname}>
          {item.icon} {item.title}
        </StyledTypography>
      </StyledLink>
    </StyledListItem>
  );
};

export default NavbarLink;
