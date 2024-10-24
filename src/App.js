import './App.css';
import Obraz from './Obraz';
import obrazek from "./obraz.png";

const obrazy = [
  { nr:"1", grafika:{obrazek}, nazwa:"choinka1", opis:"to jest choinka1" , cena:"5110zł" },
  { nr:"2", grafika:{obrazek}, nazwa:"choinka2", opis:"to jest choinka2" , cena:"12310zł" },
  { nr:"3", grafika:{obrazek}, nazwa:"choinka3", opis:"to jest choinka3" , cena:"6110zł" },
  { nr:"4", grafika:{obrazek}, nazwa:"choinka4", opis:"to jest choinka4" , cena:"41021zł" },
  { nr:"5", grafika:{obrazek}, nazwa:"choinka5", opis:"to jest choinka5" , cena:"52130zł" },
  { nr:"6", grafika:{obrazek}, nazwa:"choinka6", opis:"to jest choinka6" , cena:"5608zł" },
  { nr:"7", grafika:{obrazek}, nazwa:"choinka7", opis:"to jest choinka7" , cena:"8120zł" },
  { nr:"8", grafika:{obrazek}, nazwa:"choinka8", opis:"to jest choinka8" , cena:"53124zł" },

]

function App() {
  return (
    <div className="App">
      <div className='obrazy'>
        <Obraz zdjecie={obrazek} nr={obrazy[0].cena} nazwa={obrazy[0].nazwa} opis={obrazy[0].opis} cena={obrazy[0].cena}/>
        <Obraz zdjecie={obrazek} nr={obrazy[1].cena} nazwa={obrazy[1].nazwa} opis={obrazy[1].opis} cena={obrazy[1].cena}/>
        <Obraz zdjecie={obrazek} nr={obrazy[2].cena} nazwa={obrazy[2].nazwa} opis={obrazy[2].opis} cena={obrazy[2].cena}/>
        <Obraz zdjecie={obrazek} nr={obrazy[3].cena} nazwa={obrazy[3].nazwa} opis={obrazy[3].opis} cena={obrazy[3].cena}/>
        <Obraz zdjecie={obrazek} nr={obrazy[4].cena} nazwa={obrazy[4].nazwa} opis={obrazy[4].opis} cena={obrazy[4].cena}/>
        <Obraz zdjecie={obrazek} nr={obrazy[5].cena} nazwa={obrazy[5].nazwa} opis={obrazy[5].opis} cena={obrazy[5].cena}/>
        <Obraz zdjecie={obrazek} nr={obrazy[6].cena} nazwa={obrazy[6].nazwa} opis={obrazy[6].opis} cena={obrazy[6].cena}/>
        <Obraz zdjecie={obrazek} nr={obrazy[7].cena} nazwa={obrazy[7].nazwa} opis={obrazy[7].opis} cena={obrazy[7].cena}/>
        
      </div>
    </div>
  );
}

export default App;
