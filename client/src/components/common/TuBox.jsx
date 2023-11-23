import * as styles from './TuBox.css'
import TuLink from './TuLink';

const TuBox = ({ title, content, link, linkTo }) => {
  return (
    <div className={styles.boxSetting}>
      <h1 className={styles.boxTitle}>{title}</h1>
      <p className={styles.boxPara}>{content}</p>
      {link && (<div className={styles.boxButton}>
        <TuLink to={linkTo}>{link}</TuLink>
      </div>
      )}
    </div>
  )
}

export default TuBox