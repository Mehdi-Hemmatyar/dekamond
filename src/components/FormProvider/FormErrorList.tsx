import type { FormErrorList } from "@/types/FormTypes"
import styles from './FormGroup.module.scss'



const FormErrorList = ({errors} : FormErrorList) => {
  if (!errors) return null;

  return (
    <ul className={styles.errorList} dir="rtl">
      {errors.map((error, idx) => (
        <li key={idx} className={styles.errorItem}>
          {error}
        </li>
      ))}
    </ul>
  );
}

export default FormErrorList