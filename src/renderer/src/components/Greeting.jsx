import { useState } from 'react'
import { NumberInput } from '@mantine/core'

function Greeting() {
  const [energyLevel, setEnergyLevel] = useState(10)

  return (
    <section className="greeting">
      <h1>Hello Virag!</h1>
      <form>
        <NumberInput
          label="What is your energy level?"
          min={1}
          max={10}
          clampBehavior="strict"
          defaultValue={energyLevel}
          value={energyLevel}
          onChange={setEnergyLevel}
        />
      </form>
    </section>
  )
}

export default Greeting
