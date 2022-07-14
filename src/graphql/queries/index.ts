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
      raw
    }
    image {
      url(
        transformation: {
          image: { resize: { width: 700 } }
          validateOptions: true
        }
      )
    }
  }
  smallProjects(stage: PUBLISHED) {
    id
    title
    description
    link
    icon {
      url(
        transformation: {
          image: { resize: { height: 40 } }
          validateOptions: true
        }
      )
    }
  }
}

`;
