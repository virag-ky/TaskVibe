import Greeting from '../components/Greeting'
import CalendarComponent from '../components/CalendarComponent'
import DailyMotivation from '../components/DailyMotivaton'
import TaskList from '../components/TaskList'

function Home() {
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

export default Home
