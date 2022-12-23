export const Button = ({ imagesQtt, page, perPage, loadMore }) => {
    // console.log(imagesQtt);
    const imgLeft = imagesQtt > page * perPage;
    console.log(imgLeft);
    if (imgLeft)
        return (
            <button type="button" className="Button" onClick={loadMore}>Load more</button>
        );
}