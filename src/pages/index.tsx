import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";

const IndexPage = (props: LayoutProps) =>
<div>
    {/* Master head */}
  {/*}  <Segment vertical textAlign="center" className="masthead"> */}
    {/*  <HeaderMenu
        Link={Link} pathname={props.location.pathname} items={menuItems}
      /> */}
      <Segment className="firstSegment">
       {/* <Container text> */}
        <Header inverted as="h1">Marie<br/>&#38;<br/>Arthur
          <Header.Subheader inverted as="h2">13 juillet 2020</Header.Subheader>
          </Header>
        {/* </Container> */}
      </Segment>
    {/*</div></Segment> */}

    {/* About this starter */}
    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row centered>
          <h1> Nous nous marions ! </h1>
      <p><br/><br/>
      Afin de répondre à un maximum de vos questions, vous trouverez sur ce site une multitude d'informations pour notre mariage. <br/>
      Que vous veniez en Normandie pour la première fois ou que vous soyez des grands habitués, vous trouverez quelques propositions de balades, de visites ainsi que quelques logements que nous avons repéré pour vous.
      </p>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="8">
            <Header as="h4"><Link to="/messe/">La Cérémonie</Link></Header>
            <p>
              La cérémonie de mariage aura lieu à 15h00 à l'Abbaye aux Dames,<br/>
              <a href="https://goo.gl/maps/4iYhDanTvGfTPiPA8">Place de la Reine Mathilde, 14000 Caen</a>
            </p>
         {/*   <Header as="h4"><Link to="/cocktail/">Le Cocktail</Link></Header>
            <p>
              La cérémonie de mariage aura lieu à 15h00 à l'Abbaye aux Dames,<br/>
              <a href="https://goo.gl/maps/4iYhDanTvGfTPiPA8">Place de la Reine Mathilde, 14000 Caen</a>
            </p>*/}
          </Grid.Column>
          <Grid.Column width="6" floated="right">
            {/* TODO replace with a pretty GIF */}
            <Header as="h4"><Link to="/cocktail/">Le Cocktail</Link></Header>
            <p>
              La cérémonie de mariage aura lieu à 15h00 à l'Abbaye aux Dames,<br/>
              <a href="https://goo.gl/maps/4iYhDanTvGfTPiPA8">Place de la Reine Mathilde, 14000 Caen</a>
            </p>
         {/*   <Header>Dolor sit amet</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>*/}
          </Grid.Column> 
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid columns="3" textAlign="center" divided relaxed stackable className="container">
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>;

export default withLayout(IndexPage);
