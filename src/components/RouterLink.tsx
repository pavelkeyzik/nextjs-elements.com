import { NavLink, NavLinkProps } from "react-router-dom";

function RouterLink(props: NavLinkProps) {
  return (
    <NavLink
      style={{ display: "flex", color: "unset", textDecoration: "unset" }}
      {...props}
    />
  );
}

export { RouterLink };
