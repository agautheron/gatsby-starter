import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleSidebar } from "../../store";
import { Container, Label, Menu, Icon, Item, DropdownCustom, Header} from "semantic-ui-react";
import { MenuProps } from "../Menu";

interface HeaderMenuProps extends MenuProps {
  dispatch?: Dispatch<any>;
  inverted?: boolean;
}

export const HeaderMenu = ({ items, pathname, Link, inverted, dispatch}: HeaderMenuProps) =>
  <Container>
    <Menu size="large" pointing secondary inverted={inverted}>
      <Menu.Item as="a" className="mobile only" icon="fas fa-bars" onClick={() => dispatch && dispatch(toggleSidebar())} size="big"/>
      <Menu.Item as="a" className="mobile only" size="big">Marie &#38; Arthur</Menu.Item>
      <Menu.Item as={Link} to="/" key="/" className="mobile hidden"><Icon name="fas fa-heart" size="big" /></Menu.Item>
      {items.map((item) => {
        const active = (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
        const hasChildren = (item.children) ? true : false;
        if (hasChildren) {
          const children = item.children.slice();
          return <DropdownCustom 
          as={Link} to="/" key="/" 
          text={item.name} 
          className="mobile hidden" 
          item 
          leftIcon={item.icon + " big"} 
          simple 
          inverted={inverted} 
          active={active}>
          <DropdownCustom.Menu>
            {children.map((child) => {
                return <DropdownCustom.Item
                as={Link}
                className="mobile hidden"
                to={child.path}
                key={child.path}
                active={active}
                ><Icon name={child.icon + " big"} size="big"/>{child.name}</DropdownCustom.Item>;
            })}
        </DropdownCustom.Menu></DropdownCustom>;
        }
         /* return <Header as={Menu.Item} className="mobile hidden" active={active}>
    <Icon name={item.icon + " big"}/>
    <Header.Content>
      <Dropdown text={item.name} className="noMargins mobile hidden" simple inverted={inverted}>
          <Dropdown.Menu>
            {children.map((child) => {
                return <Dropdown.Item
                as={Link}
                className="mobile hidden"
                to={child.path}
                key={child.path}
                active={active}
                ><Icon name={child.icon + " big"} size="big"/>{child.name}</Dropdown.Item>;
            })}
        </Dropdown.Menu>
        </Dropdown>
        </Header.Content>
        </Header>;
        }*/
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
