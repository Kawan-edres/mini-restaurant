import {useContext} from 'react';
import ModeSwicher from './ModeSwicher';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Mode() {

    const context = useContext(ModeSwicher);

    return (
        <div>
        <button className='darkMode' onClick={context.swich}>
            <DarkModeIcon  />
        </button> 
        </div>
    )
}

export default Mode;