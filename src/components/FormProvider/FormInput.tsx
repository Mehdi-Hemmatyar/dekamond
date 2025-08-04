import type { FormInput } from "@/types/FormTypes"
import styles from './FormGroup.module.scss'




const FormInput = ({label , name , placeholder , required = false , type  } : FormInput) => {
  return (
    <div className={styles.formGroup} >
    <label htmlFor={name}>
        {label}
    </label>
    <input type={type} name={name} placeholder={placeholder} required={required}/>
    </div>
  )
}

export default FormInput