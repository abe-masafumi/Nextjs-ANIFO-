import styles from './MainButton.module.css'

// // propsの型指定
type TodoType = {
  width: number
  height: number
  title?: string
}

export const MainButton = (props: TodoType) => {
  const { width, height, title } = props

  return (
    <button
      className="border border-info m-2 rounded"
      style={{ height, width, color: '#eef0e6', boxShadow: '0px 0px 6px #ccc', background: "#0b1118" }}
    >
      <p>{title}</p>
    </button>
  )
}
