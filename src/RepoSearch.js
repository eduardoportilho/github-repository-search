import React, { Component } from "react";
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

class RepoSearch extends Component {
  state = {
    selectedRepos: []
  };

  toggleSelection = (id, isSelected) => {
    const { selectedRepos } = this.state;
    const updatedSelectedRepos = isSelected
      ? selectedRepos.filter(repoId => repoId !== id)
      : [...selectedRepos, id];
    this.setState({
      selectedRepos: updatedSelectedRepos
    });
  };

  render() {
    const { queryString } = this.props;
    const { selectedRepos } = this.state;
    if (!queryString || !queryString.trim().length) return null;

    return (
      <Query query={SEARCH_REPOS_GQL} variables={{ queryString }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) {
            console.log(error);
            return <p>Error :(</p>;
          }
          return (
            <div className="repo-container">
              {data.search.edges.map(({ node: repo }) => (
                <RepoCard
                  key={repo.id}
                  repo={repo}
                  selected={selectedRepos.includes(repo.id)}
                  toggleSelection={this.toggleSelection}
                />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default RepoSearch;
