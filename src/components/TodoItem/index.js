// Write your code here
import './index.css'

const TodoItem = props => {
  const {todosList, DeletingEle} = props

  const {id, title} = todosList

  const onclickDel = () => {
    DeletingEle(id)
  }
  return (
    <li className="list-container">
      <p className="para">{title}</p>
      <button type="button" className="button" onClick={onclickDel}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
