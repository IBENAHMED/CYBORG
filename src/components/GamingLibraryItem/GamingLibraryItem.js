import './GamingLibraryItem.css';
import { SecondaryButton } from '../index';

const GamingLibraryItem = (props) => {
    return (
        <div>
            <ul className='gaming-library-item'>
                <li><img src={props.img} alt='' /></li>
                <li><h4>{props.title}</h4><span>{props.category}</span></li>
                <li><h4>Data Added</h4><span>{props.data_added}</span></li>
                <li><h4>Houres Palyed</h4><span>{props.houres_palyed}</span></li>
                <li><h4>Currently</h4><span>{props.downloaded}</span></li>
                <SecondaryButton>OK</SecondaryButton>
            </ul>
        </div>
    )
}

export default GamingLibraryItem
