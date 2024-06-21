import GalleryItem from './galleryItem';

const Gallery = (props) => {
    try {
        const data = props.data.result.read();
        
        const display = data.map((item, index) => {
            return (
                <GalleryItem item={item} key={index} />
            );
        });

        return (
            <div>
                {display}
            </div>
        );
    } catch (error) {
        console.error("Error while reading data:", error);
        return <div>Error loading gallery data.</div>;
    }
};

export default Gallery;