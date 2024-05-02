import { Link } from 'react-router-dom'
import './Button.css'

const PrimaryButton = (props) => {
    return (
        <div className='button primary-btn'>
            <Link to='./CYBORG'>{props.children}</Link>
        </div>
    )
}

const SecondaryButton = (props) => {
    return (
        <div className='button secondary-btn'>
            <Link to='./CYBORG'>{props.children}</Link>
        </div>
    )
}

export default PrimaryButton
export { SecondaryButton }
