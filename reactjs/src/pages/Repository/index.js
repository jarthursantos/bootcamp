import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';
import Container from '../../components/Container';

import { Loading, Owner, IssueList, Footer } from './styles';

export default function Repository({ match }) {
  const [issues, setIssues] = useState();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [repository, setRepository] = useState();
  const [selectedOption, setSelectedOption] = useState('all');

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const refresh = async () => {
    const repoName = decodeURIComponent(match.params.repository);

    setLoading(true);

    const [repositoryRaw, issuesRaw] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          per_page: 30,
          page: currentPage,
          state: selectedOption,
        },
      }),
    ]);

    setRepository(repositoryRaw.data);
    setIssues(issuesRaw.data);
    setLoading(false);
  };

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    refresh();
  }, [selectedOption, currentPage]);

  if (loading) {
    return <Loading>Carregando</Loading>;
  }

  return (
    <Container>
      <Owner>
        <Link to="/">Voltar aos repositórios</Link>
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        <h1>{repository.name}</h1>
        <p>{repository.description}</p>
      </Owner>

      <IssueList>
        <header>
          <strong>Issues</strong>
          <select
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}
          >
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </header>
        {issues.map(issue => (
          <li key={`${issue.id}`}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />
            <div>
              <strong>
                <a href={issue.html_url}>{issue.title}</a>
                {issue.labels.map(label => (
                  <span key={`${label.id}`}>{label.name}</span>
                ))}
              </strong>
              <p>{issue.user.login}</p>
            </div>
          </li>
        ))}
      </IssueList>

      <Footer>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          type="button"
        >
          Página Anterior
        </button>
        <button onClick={handleNextPage} type="button">
          Próxima Página
        </button>
      </Footer>
    </Container>
  );
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
