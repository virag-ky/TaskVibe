import { MdEdit } from 'react-icons/md'
import { ImBin } from 'react-icons/im'

function Task() {
  return (
    <li>
      Study
      <div className="action-buttons">
        <MdEdit />
        <ImBin />
      </div>
    </li>
  )
}

export default Task
