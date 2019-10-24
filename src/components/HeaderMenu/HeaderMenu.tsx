import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleSidebar } from "../../store";
import { Container, Label, Menu, Icon, Item, Dropdown, Button} from "semantic-ui-react";
import { MenuProps } from "../Menu";

interface HeaderMenuProps extends MenuProps {
  dispatch?: Dispatch<any>;
  inverted?: boolean;
}

export const HeaderMenu = ({ items, pathname, Link, inverted, dispatch}: HeaderMenuProps) =>
  <Container>
    <Menu size="large" pointing secondary inverted={inverted}>
      <Menu.Item as="a" className="mobile only" icon="sidebar" onClick={() => dispatch && dispatch(toggleSidebar())} />
      <Menu.Item className="mobile hidden"><Icon name="heart" size="big" /></Menu.Item>
      {items.map((item) => {
        const active = (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
        const hasChildren = (item.children) ? true : false;
        if (hasChildren) {
          const children = item.children.slice();
          return <big><Dropdown item text={item.name} className="mobile hidden">
          <Dropdown.Menu>
            {children.map((child) => {
                return <Dropdown.Item
                as={Link}
                className="mobile hidden"
                to={child.path}
                key={child.path}
                active={active}
                ><Icon name={child.icon}/>{child.name}</Dropdown.Item>;
            })}
        </Dropdown.Menu>
        </Dropdown></big>;
        }
        return <Menu.Item
          as={Link}
          className="mobile hidden"
          name={item.name}
          to={item.path}
          key={item.path}
          active={active}
          icon={item.icon + " big"}
          size="big"/>;
          })}
    </Menu>
  </Container>;

export default connect()(HeaderMenu);
