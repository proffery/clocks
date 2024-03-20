import { memo } from 'react'
import style from './DigitalClock.module.css'

type DigitalClockProps = {
    date: Date
}

export const DigitalClock: React.FC<DigitalClockProps> = memo(({ date }) => {

    const twoDigitString = (num: number) => num < 10 ? '0' + num : num

    return (
        <div className={style.digitalClock}>
            <div className={style.digitalClockCell}>
                <h2 className={style.digitalClockCellHeader}>Hour:</h2>
                <span className={style.digitalClockDigit}>{twoDigitString(date.getHours())}</span>
            </div>
            <div className={style.digitalClockCell}>
                <h2 className={style.digitalClockCellHeader}>Min:</h2>
                <span className={style.digitalClockDigit}>{twoDigitString(date.getMinutes())}</span>
            </div>
            <div className={style.digitalClockCell}>
                <h2 className={style.digitalClockCellHeader}>Sec:</h2>
                <span className={style.digitalClockDigit}>{twoDigitString(date.getSeconds())}</span>
            </div>
        </div>
    )
})