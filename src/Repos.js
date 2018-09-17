import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const SEARCH_REPOS_GQL = gql`
  query SearchMostTop10Star($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            description
            descriptionHTML
            owner {
              login
            }
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
            updatedAt
          }
        }
      }
    }
  }
`;

const Repos = ({ queryString }) => {
  if (!queryString || !queryString.trim().length) return null;
  return (
    <Query query={SEARCH_REPOS_GQL} variables={{ queryString }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) {
          console.log(error);
          return <p>Error :(</p>;
        }

        return data.search.edges.map(({ node: { name } }) => (
          <div key={name}>
            <p>{`${name}`}</p>
          </div>
        ));
      }}
    </Query>
  );
};

export default Repos;
