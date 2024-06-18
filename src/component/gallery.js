
import GalleryItem from './galleryItem'

const Gallery = (props) => {
    // const data = useContext(DataContext)

    const display = props.data.map((item, index) => {
        return (
            <GalleryItem key={index} item={item} />
        )
    })

    return (
        <div >
            {display}
        </div>
    )
}

export default Gallery