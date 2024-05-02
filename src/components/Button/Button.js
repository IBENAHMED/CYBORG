import './Button.css'

const PrimaryButton = (props) => {
    return (
        <div className='button primary-btn'>
            <link to='./CYBORG'>{props.children}</link>
        </div>
    )
}

const SecondaryButton = (props) => {
    return (
        <div className='button secondary-btn'>
            <link to='./CYBORG'>{props.children}</link>
        </div>
    )
}

export default PrimaryButton
export { SecondaryButton }
