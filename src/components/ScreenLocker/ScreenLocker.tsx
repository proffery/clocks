import s from './ScreenLocker.module.css'
import lockedImage from './../../assets/images/locked.svg'
import unlockedImage from './../../assets/images/unlocked.svg'

type ScreenLockerPropsType = {
    isLocked: boolean
    lockCsreen: () => void
    unlockCsreen: () => void
}
export const ScreenLocker: React.FC<ScreenLockerPropsType> = ({ isLocked, lockCsreen, unlockCsreen }) => {
    return (
        isLocked ?
            <div className={s.imageContainer}>
                <img src={lockedImage} onClick={unlockCsreen} alt='Screen locked' />
            </div> :
            <div className={s.imageContainer}>
                <img src={unlockedImage} onClick={lockCsreen} alt='Screen unlocked' />
            </div>
    )
}