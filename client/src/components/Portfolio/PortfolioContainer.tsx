const PortfolioContainer = ({ count }) => {
    const galleryItems = [];

    for (let i = 0; i < count; i++) {
        galleryItems.push(
            <div className="gallery-item" key={i}>
                <img src={`https://via.placeholder.com/150?text=Item+${i + 1}`} alt={`Placeholder ${i + 1}`} />
            </div>
        );
    }

    return (
        <>
            {galleryItems}
        </>
    );
}

export default PortfolioContainer;