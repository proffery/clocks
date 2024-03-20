import s from './ScreenLocker.module.css'
import lockedImage from './../../assets/images/locked.svg'
import unlockedImage from './../../assets/images/unlocked.svg'
import { memo } from 'react'

type ScreenLockerPropsType = {
    isLocked: boolean
    lockScreen: () => void
    unlockScreen: () => void
}
export const ScreenLocker: React.FC<ScreenLockerPropsType> = memo(({
    isLocked,
    lockScreen,
    unlockScreen
}) => {
    return <div
        className={s.imageContainer}
        onClick={!isLocked ? lockScreen : unlockScreen}>
        <img
            src={!isLocked ? unlockedImage : lockedImage}
            alt={'Screen ' + !isLocked ? 'unlocked' : 'locked'}
        />
    </div>
})