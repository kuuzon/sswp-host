import * as styles from './ProductItem.css'
import { Link } from 'react-router-dom';

function ProductItem(props) {
  return (
    <Link className={styles.productLink} to={`/store/product/${props.id}`}>
      <div className={styles.productCard}>
        <img src={props.image} alt={props.productName} />
        <div className={styles.productCardContent}>
          <h2 className={styles.productCardTitle}>{props.productName}</h2>
          <p>{props.price}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem