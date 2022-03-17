import './index.css'

const TaskList = props => {
  const {item} = props
  const {task, tag} = item

  return (
    <li className="task-container">
      <p className="para">{task}</p>
      <p className="button">{tag}</p>
    </li>
  )
}

export default TaskList
