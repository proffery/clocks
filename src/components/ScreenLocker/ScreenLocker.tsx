import lockedImage from './../../assets/images/locked.svg'
import unlockedImage from './../../assets/images/unlocked.svg'
import s from './ScreenLocker.module.css'

type ScreenLockerPropsType = {
    isLocked: boolean
    lockScreen: () => void
}
export const ScreenLocker: React.FC<ScreenLockerPropsType> = ({
    isLocked,
    lockScreen,
}) => {
    return <div
        className={s.imageContainer}
        onClick={() => !isLocked && lockScreen()}>
        <img
            src={!isLocked ? unlockedImage : lockedImage}
            alt={'Screen ' + !isLocked ? 'unlocked' : 'locked'}
        />
    </div>
}