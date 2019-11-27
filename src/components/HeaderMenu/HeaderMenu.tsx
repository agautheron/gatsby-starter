import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleSidebar } from "../../store";
import { Container,  Menu, Icon, DropdownCustom, Segment} from "semantic-ui-react";
import { MenuProps } from "../Menu";
import StickyHeader from 'react-sticky-header';

interface HeaderMenuProps extends MenuProps {
  ref?: any;
  dispatch?: Dispatch<any>;
  inverted?: boolean;
}

export const HeaderMenu = ({ items, pathname, Link, inverted, dispatch}: HeaderMenuProps) => 

<Segment className="headerContainer">
    <Menu size="large" pointing secondary inverted={inverted} className="mobile hidden" fixed='top'>
  <Container >
        <Menu.Item as={Link} to="/" key="/" className="mobile hidden"><Icon name="fas fa-heart" size="big" /></Menu.Item>
        {items.map((item) => {
          const active = (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
          const hasChildren = (item.children) ? true : false;
          if (hasChildren) {
            const children = item.children.slice();
            return <DropdownCustom 
            as={Menu.Item} 
            text={item.name} 
            className="mobile hidden" 
            item 
            leftIcon={item.icon + " big"} 
            simple size="large" >
            <DropdownCustom.Menu>
              {children.map((child) => {
                  const childActive = (child.exact) ? pathname === child.path : pathname.startsWith(child.path);
                  if (child.name=="Liste de Mariage"){
                    return  <DropdownCustom.Item
                    as={"a"}
                    className="mobile hidden"
                    href={child.path}
                    active={childActive}
                    target="_blank"
                    ><Icon name={child.icon + " big"} size="big"/>{child.name}</DropdownCustom.Item>;
                  }
                  return <DropdownCustom.Item
                  as={Link}
                  className="mobile hidden"
                  to={child.path}
                  key={child.path}
                  active={childActive}
                  ><Icon name={child.icon + " big"} size="big"/>{child.name}</DropdownCustom.Item>;
              })}
          </DropdownCustom.Menu></DropdownCustom>;
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
    </Container>
    </Menu>
    <Menu size="large" pointing secondary inverted={inverted} fluid className="mobile only" fixed='top'>
    <Menu.Item as="a" className="mobile only" icon="fas fa-bars" onClick={() => dispatch && dispatch(toggleSidebar())} size="big"/>
      <Menu.Item as="a" className="mobile only" size="big">Marie &#38; Arthur</Menu.Item>
    </Menu>
    </Segment>
    ;
  
export default connect()(HeaderMenu);
