import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import digitalClockImg from './../assets/images/clock-digital.svg'
import analogClockImg from './../assets/images/clock-analog.svg'

export const ClocksSwitcher = styled(Switch)(() => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('${analogClockImg}')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#939ba5',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: '#555a5f',
        width: 32,
        height: 32,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('${digitalClockImg}')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#939ba5',
        borderRadius: 20 / 2,
    },
}))