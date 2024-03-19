import { useEffect, useState } from 'react'
import style from './Clock.module.css'
import { DigitalClock } from './DigitalClock/DigitalClock'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch';
import { AnalogClock } from './AnalogClock/AnalogClock';


export const Clock: React.FC = () => {

    const [date, setDate] = useState(new Date())
    const [isAnalog, setIsAnalog] = useState(false)
    const DIGITAL_HEADER = 'Digital Clock'
    const ANALOG_HEADER = 'Analog Clock'

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])

    const handleChange = () => {
        setIsAnalog(!isAnalog)
    }

    return (
        <div className={style.clockContainer}>
            <h1 className={style.clockHeader}>{isAnalog ? ANALOG_HEADER : DIGITAL_HEADER}</h1>
            <FormControlLabel
                control={
                    <Switch checked={isAnalog} onChange={handleChange} name="theme" />
                }
                label="Analog"
                className={style.switcherContainer}
                style={isAnalog ? { opacity: 1 } : { opacity: .5 }}
            />
            {isAnalog ? <AnalogClock date={date} /> : <DigitalClock date={date} />}

        </div>
    )
}