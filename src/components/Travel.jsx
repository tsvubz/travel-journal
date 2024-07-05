
import Navbar from './Navbar'
import Card from './Card'

function Travel() {
  return (
    <div>
        <Navbar />
        <Card 
          img='mount-fuji.png'
          country='JAPAN'
          link='https://goo.gl/maps/1DGM5WrWnATgkSNB8'
          title='Mount Fuji'
          startDate='12 Jan, 2021'
          endDate='24 Jan, 2021'
          text='Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
           (12,380 feet). Mount Fuji is the single most popular tourist site in Japan,
            for both Japanese and foreign tourists.'
          />
          <Card 
            img='sydney-opera-house.png'
            country='AUSTRALIA'
            link='https://maps.app.goo.gl/rmfKXSUjNYgDPEXH9'
            title='Sydney Opera House'
            startDate='27 May, 2021'
            endDate='8 Jun, 2021'
            text="The Sydney Opera House is a multi-venue performing arts centre in Sydney.
             Located on the banks of the Sydney Harbour, it is often regarded as one of the
              20th century's most famous and distinctive buildings"
          />
          <Card 
            img='geirangerfjord.png'
            country='NORWAY'
            link='https://maps.app.goo.gl/2WaSDXaMvZy99Nbt7'
            title='Geirangerfjord'
            startDate='01 Oct, 2021'
            endDate='18 Nov, 2021'
            text="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal
             county, Norway. It is located entirely in the Stranda Municipality."
          />
    </div>
  )
}

export default Travel