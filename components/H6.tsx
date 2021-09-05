import 'bootstrap/dist/css/bootstrap.min.css'

type TodoType = {
  title: string
}

export const H6 = (props: TodoType) => {
  const { title } = props
  return (
    <>
      <h6 className="text-white-50">{title}</h6>
    </>
  )
}
