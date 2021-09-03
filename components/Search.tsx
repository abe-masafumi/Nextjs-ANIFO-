import styles from './Search.module.css'

export const Search = () => {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.input} />
    </div>
  )
}
