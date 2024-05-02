import './MostPoular.css';
import { MostPoularData } from '../../Data/MostPoularData';
import { PopularItem, SectionHeader, SectionWrapper } from '../../components/index';


const MostPoular = () => {

    const cards = MostPoularData.map((e) => {
        return <PopularItem
            key={e.id}
            img={e.img}
            download={e.download}
            rate={e.rate}
            category={e.category}
            title={e.title}
        />
    });

    return (
        <>
            <SectionWrapper>
                <SectionHeader>Most Poular</SectionHeader>
                <div className='most-popular-items'>
                    {cards}
                </div>
            </SectionWrapper>
        </>
    )
}

export default MostPoular
