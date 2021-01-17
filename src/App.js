import './App.css';


/* ==================== MOSAIC LIST ==================== */
function ShipCard(props){
    const card =
        <div>
            <div className="shipPlaceHolder">
            </div>
            <p>{props.ship}</p>
        </div>

    return card;
}

function MosaicList(props){
    const cards = props.ships.map(
        (ship, i) => <ShipCard ship={ship} idx={i}/>
    );
    return <div className="mosaicListWrapper">{cards}</div>
};


/* ==================== APP ==================== */

function App() {
  const ships = ['nave1','nave2', 'nave3', 'nave4'];
  return (
    <div className="App">
        <MosaicList ships={ships}/>
        <footer>fin de app</footer>
    </div>
  );
}

export default App;
