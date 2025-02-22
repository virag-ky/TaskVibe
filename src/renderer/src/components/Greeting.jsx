function Greeting() {
  return (
    <section className="greeting">
      <h1>Hello Virag!</h1>
      <form>
        <label htmlFor="energy-level">What is your energy level?</label>
        <input type="number" name="energy-level" id="energy-level" min={1} max={10} />
      </form>
    </section>
  )
}

export default Greeting
