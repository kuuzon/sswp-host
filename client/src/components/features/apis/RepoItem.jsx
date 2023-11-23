import { Fragment } from "react"
import { Col, Card } from 'react-bootstrap';

function RepoItem({ repoName, description, htmlUrl }) {
  return (
    <Fragment>
      <Col>
        <Card bg="light" text="dark" border="info" style={{ minHeight: "180px"}}>
          <Card.Header style={{ fontWeight: "bolder"}}>{repoName}</Card.Header>
          <Card.Body>
            <p>{description}</p>
            <div>
              <a className="btn btn-info" href={htmlUrl} target="_blank" rel="noreferrer">{repoName}</a>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  )
}

export default RepoItem