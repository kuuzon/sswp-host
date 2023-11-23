import RepoItem from "./RepoItem"
import { Row } from 'react-bootstrap';

function ReposList({ repos }) {
  return (
    <div className="text-center pb-5">
      <Row xs={1} md={3} lg={3} className="mt-2 mb-4 g-4">
        {repos.map(repo => (
          <RepoItem 
            key={repo.id}
            repoName={repo.name}
            description={repo.description}
            htmlUrl={repo.html_url}
          />
        ))}
      </Row>
    </div>
  )
}

export default ReposList