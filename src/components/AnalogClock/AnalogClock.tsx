import { memo } from 'react'
import style from './AnalogClock.module.css'

type AnalogClockProps = {
    date: Date
}

export const AnalogClock: React.FC<AnalogClockProps> = memo(({ date }) => {

    const digitToDegreeConvertor = (val: number) => {
        return val * 6
    }

    const hoursStyle = { transform: `rotate(${date.getHours() * 30 + digitToDegreeConvertor(date.getMinutes()) / 30}deg)` }
    const minutesStyle = { transform: `rotate(${digitToDegreeConvertor(date.getMinutes())}deg)` }
    const secondsStyle = { transform: `rotate(${digitToDegreeConvertor(date.getSeconds())}deg)` }

    return (
        <div className={style.analogClock}>
            <div className={style.analogClockRow}>
                <div className={style.analogClockCell + ' ' + style.verticalDecorateDots}>9</div>
                <div className={style.analogClockCell}>&nbsp;</div>
                <div className={style.analogClockCell + ' ' + style.horizontalDecorateDots}>12</div>
            </div>
            <div className={style.analogClockRow}>
                <div className={style.analogClockCell}>&nbsp;</div>
                <div className={style.analogClockCell}>
                    <div
                        className={style.analogClockCell + ' ' + style.hourHand}
                        style={hoursStyle}
                    ></div>
                    <div
                        className={style.analogClockCell + ' ' + style.minHand}
                        style={minutesStyle}
                    ></div>
                    <div
                        className={style.analogClockCell + ' ' + style.secHand}
                        style={secondsStyle}
                    ></div>
                </div>
                <div className={style.analogClockCell}>&nbsp;</div>
            </div>
            <div className={style.analogClockRow}>
                <div className={style.analogClockCell + ' ' + style.horizontalDecorateDots}>6</div>
                <div className={style.analogClockCell}>&nbsp;</div>
                <div className={style.analogClockCell + ' ' + style.verticalDecorateDots}>3</div>
            </div>
        </div>
    )
})