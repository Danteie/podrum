import './About.css'
import image1 from '../../Assets/3.png'

export default function About() {
  return (
    <div className="about-c">
      <div className='test'>
          <img src={image1} alt='vino' className='vino'/>
      </div>
      <div>
          <h1>Naslov</h1>
          <p>"Ja sam iz hobija kupio parcelu, odnosno vinograd u Petrovom polju, 
            kod manastira Petropavlovskog, gdje je bila idealna antička lokacija. 
            Vinograd se prostire na prostoru od hektara, sa 5.500 čokota vinove loze. 
            Njegujemo 6, 7 velikih sorti - od autohtonih sorti - vranca i žilavke, preko francuskih internacionalnih sorti 
            Cabernet, Sauvignon, Merlot, Chardonnay, a posljednjih godina imamo i bijelo, tamjaniku"</p>
      </div>
      
    </div>
  );
}
