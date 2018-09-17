import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Repos = () => (
  <Query
    query={gql`
      {
        viewer {
          name
          repositories(last: 3) {
            nodes {
              name
            }
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.viewer.repositories.nodes.map(({ name }) => (
        <div key={name}>
          <p>{`${name}`}</p>
        </div>
      ));
    }}
  </Query>
);

export default Repos;
