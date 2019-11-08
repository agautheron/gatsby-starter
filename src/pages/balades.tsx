import * as React from "react";
import { Link, withPrefix } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { Header, Grid, Card, List, Container, Feed, Segment, Comment, Icon } from "semantic-ui-react";
import { MarkdownRemarkConnection, ImageSharp } from "../graphql-types";
import BlogTitle from "../components/BlogTitle";
import TagsCard from "../components/TagsCard/TagsCard";
import BlogPagination from "../components/BlogPagination/BlogPagination";
import { get } from "lodash";
import {withLayout, LayoutProps, menuItems, subMenuItems} from "../components/Layout";
import { MarkdownRemark } from "../graphql-types";
import { isNull } from "util";

interface BlogProps extends LayoutProps {
  data: {
    tags: MarkdownRemarkConnection;
    posts: MarkdownRemarkConnection;
  };
  pageContext: {
    tag?: string; // only set into `templates/tags-pages.tsx`
  };
}

const BlogPage = (props: BlogProps) => {
  const tags = props.data.tags.group;
  const posts = props.data.posts.edges;
  const { pathname } = props.location;
  const pageCount = Math.ceil(props.data.posts.totalCount / 10);
  const root = menuItems.find(e=>withPrefix(e.path) == pathname) ;
 /* if(isNull({root})){
    const root = subMenuItems.find(function(element) {
      return pathname.includes(element.path)});
  }
  if(isNull({root})){
    const root = {icon:"",title:""};
  }*/
  console.log(root)
  const Posts = (
    /* <Container>*/
      posts.map(({ node }: {node: MarkdownRemark}) => {
        const { frontmatter, timeToRead, fields: { slug }, excerpt } = node;
        const avatar = frontmatter.author.avatar.children[0] as ImageSharp;
        const cover = get(frontmatter, "image.children.0.fixed", {});

        const extra = (
          <Comment.Group>
            <Comment>
              <Comment.Avatar
                src={avatar.fixed.src}
                srcSet={avatar.fixed.srcSet}
              />
              <Comment.Content>
                <Comment.Author style={{ fontWeight: 400 }}>
                  {frontmatter.author.id}
                </Comment.Author>
                <Comment.Metadata style={{ margin: 0 }}>
                  {frontmatter.updatedDate} - {timeToRead} min read
              </Comment.Metadata>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        );

        const description = (
          <Card.Description>
            {excerpt}
            <br />
            <Link to={slug}>Read more…</Link>
          </Card.Description>
        );
          return (
            <div key={slug} style={{ paddingBottom: "1em" }}>
                      <Card as={Link}
                      to={slug}
                      image={cover}
                      header={frontmatter.title} /></div>
            
                               /*}   <Card key={slug}
                        fluid
                        image={cover}
                        header={frontmatter.title}
                      
                        description={description}
                      />
                    */
        );
      })
   /* </Container>*/
  );

  return (
    <Container>
      {/* Title */}
      <BlogTitle icon={root.icon} title={root.name} header=""/>
      {/* Content */}
      <Segment vertical>
       {/*} <Grid padded style={{ justifyContent: "space-around" }}> 
          <div style={{ maxWidth: 600 }}> */}
          
        <Grid padded centered>
          {/*<div style={{ maxWidth: 600 }}> */}
            {Posts}
        {/*     <Segment vertical textAlign="center">
              <BlogPagination Link={Link} pathname={pathname} pageCount={pageCount} />
            </Segment>
         </div>
        }  <div>
            <TagsCard Link={Link} tags={tags} tag={props.pathContext.tag} />
  </div> */}
        </Grid>
      </Segment>
    </Container>
  );
};

export default withLayout(BlogPage);

export const pageQuery = graphql`
query PageBalades {
  # Get tags
  tags: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }

  # Get posts
  posts: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___updatedDate] },
    filter: {
      frontmatter: { draft: { ne: true } },
      fileAbsolutePath: { regex: "/gatsby-starter/balades/" }
    },
    limit: 10
  ) {
    totalCount
    edges {
      node {
        excerpt
        timeToRead
        fields {
          slug
        }
        frontmatter {
          category
          title
          header
          updatedDate(formatString: "DD MMMM, YYYY")
          image {
          	children {
              ... on ImageSharp {
                fixed(width: 300, height: 300) {
                  src
                  srcSet
                }
              }
            }
          }
          author {
            id
            avatar {
              children {
                ... on ImageSharp {
                  fixed(width: 35, height: 35) {
                    src
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
