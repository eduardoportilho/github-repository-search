import React from "react";

const RepoCard = ({ repo }) => (
  <div>
    <h2>{repo.name}</h2>
    <p>{repo.description}</p>
    <ul>
      <li>Owner: {repo.owner.login}</li>
      <li>URL: {repo.url}</li>
      <li>Stars: {repo.stargazers.totalCount}</li>
    </ul>
  </div>
);

export default RepoCard;
