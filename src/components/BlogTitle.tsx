import * as React from "react";
import { Header, Segment, Icon } from "semantic-ui-react";

export default (prop) => {
  return (
    <Segment vertical>
      <Header as="h2">
        <Icon name={prop.icon} />
        <Header.Content>
          {prop.title}
            <Header.Subheader>
            {prop.header}
            </Header.Subheader>
        </Header.Content>
      </Header>
    </Segment>
  );
};
