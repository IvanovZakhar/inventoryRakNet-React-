import './tabs.css'

function Tabs () {
    return(
        <div className="tabs">
            <div className="tab">BUY</div>
            <div className="tab tab_active">INV</div>
            <div className="tab">SELL</div>
            <div className="tab">FRAC</div>
            <div className="tab">CAR</div>
            <div className="tab">HOUSE</div>
        </div>
    )
}

export default Tabs;