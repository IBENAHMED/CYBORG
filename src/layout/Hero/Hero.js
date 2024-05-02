import './Hero.css';
import { PrimaryButton } from '../../components/index'

const Hero = () => {
    return (
        <div className='hero-name'>
            <div className='hero-text'>
                <h6 className='hero-subtitle'>Welcome To Cyborg</h6>
                <h4 className='hero-title'><em> Browse </em> Our Popular Game Here</h4>

                <PrimaryButton>Browse</PrimaryButton>
            </div>
        </div>
    )
}

export default Hero
