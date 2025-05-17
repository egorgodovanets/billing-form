import React from 'react'
import styles from "./Button.module.css"

export default function Button({ disabled, children }) {
  return (
    <button className={styles.btn} disabled={disabled}> 
        {children} 
    </button>
  )
}
