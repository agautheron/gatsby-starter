import { Link ,  withPrefix } from "gatsby";
import * as React from "react";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import { Segment, Icon, Container, Sidebar } from "semantic-ui-react";
import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "../css/background.css";
import "../css/all.min.css";
import "prismjs/themes/prism-okaidia.css";
import { Provider } from "react-redux";
import { store } from "../store";
export const subMenuItems = [
  {name: "Cérémonie", path: "/messe/", exact: true, icon: "fas fa-church", inverted: true},
  {name: "Cocktail", path:  "/cocktail/", exact: true, icon: "fas fa-glass-cheers", inverted: true},
];
export const menuItems = [
  {name: "Le Mariage", path:  "/", exact: true, icon: "fas fa-home", inverted: true, children: subMenuItems},
  { name: "Où loger ?", path:  "/logement/", exact: true, icon: "fas fa-home", inverted: true},
  { name: "Que visiter ?", path:  "/interests/", exact: true, icon: "fas fa-university" , inverted: true},
  {name : "Où se balader ?", path:  "/balades/", exact : true, icon: "far fa-image", inverted: true},
];

export interface LayoutProps {
  location: {
    pathname: string;
  };
  children: any;
}

const Layout = (props: LayoutProps) => {
const  {pathname}  = props.location;
const isHome = (pathname === "/") ; {/* || (pathname === "/messe/") || (pathname="/cocktail/"); */}

return (
    <Provider store={store}>
      <Sidebar.Pushable as={Segment}>

        <SidebarMenu Link={Link} pathname={pathname} items={menuItems} visible={false} />

        <Sidebar.Pusher style={{ minHeight: "100vh" }}>
          {/* Header */}
          {isHome ? null : <HeaderMenu
            Link={Link}
            pathname={pathname}
            items={menuItems}
          />}

          {/* Render children pages */}
          <div style={{ paddingBottom: 60 }}>
            {props.children}
          </div>

          {/* Footer */}
          <Segment inverted vertical style={{ position: "absolute", bottom: 0, width: "100%" }}>
            <Container textAlign="center">
              {/*<p> Powered with <Icon name="heart" /> by Gatsby 2.0</p> */}
            </Container>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Provider>
  );
};

export default Layout;

export const withLayout = <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  class WithLayout extends React.Component<P & LayoutProps> {
    render() {
      return (
        <Layout location={this.props.location}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  };

export function Background(props) {
  return (
    <div
      className="background img header ui inverted vertical center aligned segment masthead responsive "
      style={{ backgroundImage: `url(${props.image})` }}>
      { props.children }
    </div>
  );
}
