import css from './product.css';
function Product(props) {
    let {name, price} = props.productDetails;
    return (
        <div>
            <div className="card container container-fluid" id='cards'>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price} DH</p>
                    <a href="#" className="btn btn-success">Add to Cartel</a>
                </div>
            </div>
        </div>
    );
}

export default Product;