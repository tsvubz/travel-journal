import data from "./data"
import Navbar from './Navbar'
import Card from './Card'

function Travel() {

  const items = data.map(item => {
    return(
      <Card 
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div>
        <Navbar />
        <section className="cards-list">
          {items}
        </section>
    </div>
  )
}

export default Travel