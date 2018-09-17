import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import RepoCard from "./RepoCard";

const SEARCH_REPOS_GQL = gql`
  query SearchMostTop10Star($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 20) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            description
            descriptionHTML
            url
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

const RepoList = ({ queryString }) => {
  if (!queryString || !queryString.trim().length) return null;
  return (
    <Query query={SEARCH_REPOS_GQL} variables={{ queryString }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) {
          console.log(error);
          return <p>Error :(</p>;
        }

        return data.search.edges.map(({ node: repo }) => (
          <RepoCard key={repo.id} repo={repo} />
        ));
      }}
    </Query>
  );
};

export default RepoList;
