import './css/principal.css'

function Principal () {
    return (
        <>
            <div className="pnl-principal">
                <h4>DAME TRES</h4>
                <div className='btn-play'></div>
                <input type="number" name="txtnumber" id="txtnumber" />
                <label htmlFor="txtnumber">Segundos</label>
                <input type="button" value="INICIAR" />
                <div className='menu'></div>
            </div>
        </>
    )
}

export default Principal