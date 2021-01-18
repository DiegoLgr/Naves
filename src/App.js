import './App.css';


/* ==================== MOSAIC LIST ==================== */

function Button1(props){
    const button = 
        <button className="button1">
            {props.text}
        </button>
    return button;
}



/* ==================== MOSAIC LIST ==================== */
function ShipCard(props){
    const card =
        <div>
            <div className="shipPlaceHolder">
            </div>
            <h1>{props.ship}</h1>
            <div className="propsListing">
                <p>Speed: 200</p>
                <p>wight: 200</p>
                <p>range: 200</p>
                <p>power: 200</p>
            </div>
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
        <Button1 text="Hola" ></Button1>
        <MosaicList ships={ships}/>
        <footer>fin de app</footer>
    </div>
  );
}

export default App;
