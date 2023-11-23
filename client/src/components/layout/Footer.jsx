import * as styles from "./Footer.css";

const Footer = () => {
  // Dynamic Date Function
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={styles.footer}>
      &copy; {getCurrentYear()} Timbertop United
    </div>
  )
}

export default Footer