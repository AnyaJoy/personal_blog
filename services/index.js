import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async() => {
    const query = gql`
        query Authors {
            postsConnection {
            edges {
                node {
                author {
                    name
                    id
                    photo {
                        url
                    }
                }
                createdAt
                slug
                title
                excert
                featuredImage {
                    url
                }
                tags {
                    name
                    slug
                }
                }
              }
            }
      }
    `

    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges
};

export const getRecentPosts = async () => {
    const query = gql`
        query GetPostDetails() {
            posts(
                orderBy: createdAt_ASC
            ) {
                title
                featuredImage {
                    url
                }
                createdAt
                slug
            }
        }
    `

    const result = await request(graphqlAPI, query);
    return result.posts;
};

export const getSimilarPosts = async (tags, slug) => {
    const query = gql`
      query GetPostDetails($slug: String!, $tags: [String!]) {
        posts(
          where: {
            slug_not: $slug
            AND: { tags_some: { slug_in: $tags } }
          }
        ) {
          title
          excert
          featuredImage {
            url
          }
          createdAt
          slug
        }
      }
    `;

    const result = await request(graphqlAPI, query, { tags, slug });
    return result.posts;
};

//todo get most viewed posts

export const getTags = async () => {
    const query = gql`
        query GetTags {
            tags {
                name,
                slug
            }
        }
    `

    const result = await request(graphqlAPI, query);
    return result.tags;
};

export const getPostDetails = async(slug) => {
    const query = gql`
      query GetPostDetails($slug: String!) {
        post(where: { slug: $slug }) {
          author {
            bio
            name
            id
            photo {
              url
            }
          }
          createdAt
          slug
          title
          excert
          featuredImage {
            url
          }
          tags {
            name
            slug
          }
          content {
            raw
          }
        }
      }
    `;

    const result = await request(graphqlAPI, query, { slug });
    return result.post;
};

export const submitComment = async(obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj),
  })

  return result.json()
}

export const getComments = async(slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug });
  return result.comments;
}