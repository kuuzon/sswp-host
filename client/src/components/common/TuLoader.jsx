import * as styles from './TuLoader.css'
import Spinner from 'react-bootstrap/Spinner'

function TuLoader() {
  return (
    <div className={styles.loadingBox}>
      <Spinner 
        className={styles.loadingSpinner} 
        animation="border" 
      />
    </div>
  )
}

export default TuLoader