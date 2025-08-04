import { CardProps } from "@/types/Card";
import styles from "./Card.module.scss";

const Card = ({
  title,
  description,
  children,
  footer,
  afterCard,
}: CardProps) => {
  return (
    <div >
      <div className={styles.card}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className={styles.body}>{children}</div>
        <div className={styles.footer}>{footer}</div>
      </div>
      <div className={styles.afterCard}>{afterCard}</div>
    </div>
  );
};

export default Card;
