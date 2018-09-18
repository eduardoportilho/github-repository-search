import React from "react";

const RepoCard = ({ repo, selected, toggleSelection }) => (
  <div
    className={`repo-card ${selected ? "selected" : ""}`}
    onClick={() => toggleSelection(repo.id, selected)}
  >
    <h2>{repo.name}</h2>
    <p>{repo.description}</p>
    <ul>
      <li>Owner: {repo.owner.login}</li>
      <li>
        <a href={repo.url}>Project page</a>
      </li>
      <li>Stars: {repo.stargazers.totalCount}</li>
    </ul>
  </div>
);

export default RepoCard;
