import { gql } from "graphql-request";

export const GET_ALL_DATA = gql`
query {
  skills(stage: PUBLISHED) {
    image{
      url
    }
    title
    link
  }
  projects(stage: PUBLISHED) {
    id
    title
    description
    demo
    technologies{
     url
    }
    image {
      url
    }
  }
  smallProjects(stage: PUBLISHED) {
    id
    title
    description
    link
    icon {
      url
    }
  }
}

`;
