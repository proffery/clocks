import style from './App.module.css'
import Switch from '@mui/material/Switch'
import { useEffect, useState } from 'react'
import { AnalogClock } from './AnalogClock/AnalogClock'
import { DigitalClock } from './DigitalClock/DigitalClock'
import FormControlLabel from '@mui/material/FormControlLabel'

function App() {
  const [date, setDate] = useState(new Date())
  const [isAnalog, setIsAnalog] = useState(false)

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
export default App
