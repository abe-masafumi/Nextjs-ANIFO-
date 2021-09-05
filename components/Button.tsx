import styles from './Button.module.css'

// propsの型指定
type TodoType = {
  title: string
  message: string
  color: string
  backColor: string
  width?: number
}

export const Button = (props: TodoType) => {
  const { title, message, color, backColor, width } = props

  const onclickLink = () => alert(message)

  return (
    <div>
      <button
        onClick={onclickLink}
        className={styles.button}
        style={{ background: backColor, color, width }}
      >
        {title}
      </button>
    </div>
  )
}
