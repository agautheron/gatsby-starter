import * as React from "react";
import { Header, Segment, Icon } from "semantic-ui-react";

export default (prop) => {
  return (
    <Segment as="h1" vertical inverted textAlign='center' size="big">
        <Icon name={prop.icon} />{prop.title}{prop.header}
    </Segment>
  );
};
