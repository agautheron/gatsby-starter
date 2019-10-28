import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { GatsbyLinkProps } from "gatsby-link";
import { StoreState } from "../../store";
import { MenuProps, MenuItem } from "../Menu";
import { Menu, Icon, Sidebar,Dropdown } from "semantic-ui-react";
import { SemanticICONS } from "semantic-ui-react";

interface SidebarMenuProps extends MenuProps {
  visible?: boolean;
  dispatch?: Dispatch<any>;
  Link: React.ComponentClass<GatsbyLinkProps<any>>;
}

export const SidebarMenu = ({ items, pathname, Link, visible }: SidebarMenuProps) => {
  const isActive = (item: MenuItem) => (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
  const activeItem = items.find((item: MenuItem) => isActive(item)) || {} as MenuItem;
  return (
    <Sidebar as={Menu} animation="slide along" width="thin"
      visible={visible} icon="labeled" vertical inverted={activeItem.inverted}>
      {items.map((item) => {
        const active = isActive(item);
        const hasChildren = (item.children) ? true : false;
		if (hasChildren) {
          const children = item.children.slice();
          return <Menu.Item>
          <Menu.Header>
		  	<Icon name={item.icon as SemanticICONS}/>
			{item.name}
			</Menu.Header>

       <Menu.Menu> 
       {/*   <Sidebar as={Menu} animation="slide bottom" width="thin"
      visible={visible} icon="labeled" vertical inverted={activeItem.inverted}>*/}
            {children.map((child) => {
                return <Menu.Item
                as={Link}
                to={child.path}
                key={child.path}
                active={active}>
				<Icon name={child.icon as SemanticICONS}/>
				{child.name}
				</Menu.Item>;
            })}
            {/*  </Sidebar>*/}
      </Menu.Menu>
        </Menu.Item>;
        }
        return (
          <Menu.Item as={Link} to={item.path} active={active} key={item.path}>
            <Icon name={item.icon as SemanticICONS} />
            {item.name}
          </Menu.Item>);
		  
      })}
      
    </Sidebar>

  );
};

const mapStateToProps = (state: StoreState) => ({
  visible: state.isSidebarVisible,
});

export default connect<any, void, SidebarMenuProps>(mapStateToProps)(SidebarMenu);
