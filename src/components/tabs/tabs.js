import './tabs.css'

function Tabs () {
    return(
        <div className="tabs">
            <div class="tab">BUY</div>
            <div class="tab tab_active">INV</div>
            <div class="tab">SELL</div>
            <div class="tab">FRAC</div>
            <div class="tab">CAR</div>
            <div class="tab">HOUSE</div>
        </div>
    )
}

export default Tabs;