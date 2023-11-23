import * as styles from './TuCard.css'

const TuCard = ({ title, authform, children }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.leadCard} ${authform ? styles.authForm : styles.generalForm}`}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div>{children}</div>
      </div>        
    </div>
  )
}

export default TuCard