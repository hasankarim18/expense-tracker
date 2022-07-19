import React from 'react'
import './ChartBar.css'

const ChartBar = (props) => {

    let barfill = '0%'

    if (props.maxValue > 0) {
        barfill = Math.round((props.value / props.maxValue) * 100) + '%'
    }


    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div style={{ height: barfill }} className="chart-bar__fill"> </div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}

export default ChartBar