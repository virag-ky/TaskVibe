import { IoMdOptions } from 'react-icons/io'
import Task from './Task'

function TaskList() {
  return (
    <section>
      <div className="filter-section">
        <h2>Today&apos;s Tasks</h2>
        <button>
          <IoMdOptions />
        </button>
      </div>
      <ul>
        <Task />
        <Task />
        <Task />
      </ul>
      <div className="delete-buttons">
        <button>Delete Completed</button>
        <button>Delete All</button>
      </div>
    </section>
  )
}

export default TaskList
