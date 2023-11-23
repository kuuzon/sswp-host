import { Link } from 'react-router-dom';
import * as styles from './TuLink.css'

const TuLink = ({ to, children }) => {
  return (
    <Link 
      className={styles.navlink}
      to={to}
    >
      {children}
    </Link>
  )
}

export default TuLink