import './GamingLibrary.css';
import { GamingLibraryData } from '../../Data/GamingLibraryData';
import { SectionHeader, SectionWrapper, GamingLibraryItem } from '../../components/index';

const GamingLibrary = () => {

    const cards = GamingLibraryData.map((e) => {
        return <GamingLibraryItem
            key={e.id}
            img={e.img}
            title={e.title}
            category={e.category}
            data_added={e.data_added}
            houres_palyed={e.houres_palyed}
            downloaded={e.downloaded}
        />
    });


    return (
        <>
            <SectionWrapper>
                <SectionHeader>Most Poular</SectionHeader>
                <div className='gaming-library-item'>
                    {cards}
                </div>
            </SectionWrapper>
        </>
    )
}

export default GamingLibrary
