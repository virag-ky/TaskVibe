import Greeting from './Greeting'
import CalendarComponent from './CalendarComponent'
import DailyMotivation from './DailyMotivaton'
import TaskList from './TaskList'

function Main() {
  return (
    <main>
      <section className="column-1">
        <Greeting />
        <CalendarComponent />
        <DailyMotivation />
      </section>
      <section className="column-2">
        <TaskList />
      </section>
    </main>
  )
}

export default Main
