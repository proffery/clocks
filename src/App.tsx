import { useEffect, useState } from 'react'
import { AnalogClock } from './components/AnalogClock/AnalogClock'
import style from './App.module.css'
import { DigitalClock } from './components/DigitalClock/DigitalClock'
import { ClocksSwitcher } from './components/ClocksSwitcher'
import { ScreenLocker } from './components/ScreenLocker/ScreenLocker'

function App() {
  const [date, setDate] = useState(new Date())
  const [isAnalog, setIsAnalog] = useState(false)
  const [isLocked, setIsLocked] = useState(false)
  let wakeLock: WakeLockSentinel | null

  async function requestWakeLock() {
    try {
      wakeLock = await navigator.wakeLock.request('screen')
      wakeLock.addEventListener('release', releaseWakeLock)
      console.log('Wake Lock is active')
      setIsLocked(true)
    } catch (err: any) {
      console.error(`${err.name}, ${err.message}`)
    }
  }

  async function releaseWakeLock() {
    if (!wakeLock) return
    try {
      await wakeLock.release()
      setIsLocked(false)
      console.log('Wake Lock was released')
    } catch (err: any) {
      console.error(`${err.name}, ${err.message}`)
    }
  }

  useEffect(()=>{
    requestWakeLock()
  },[])
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const handleChange = () => {
    setIsAnalog(!isAnalog)
  }

  return (
    <div className={style.clockContainer}>
      <div className={style.switcherContainer}>
        <ScreenLocker
          isLocked={isLocked}
          lockScreen={requestWakeLock}
        />
        <ClocksSwitcher
          checked={isAnalog}
          onChange={handleChange}
        />
      </div>
      {isAnalog ? <AnalogClock date={date} /> : <DigitalClock date={date} />}
    </div>
  )
}
export default App
