import CategoryDiv from './components/categoryDiv/categoryDiv.js';
import ProductsList from './components/productsList/productsList.js';
import Carrousel from '../Home/components/carousel/ImagesCarrousel.js';
import css from './products.css';
import { useState } from 'react';
let k = css;
let Products = (props)=>{
    let [numberOfProducts, setnumberOfProducts] = useState(0);
    return (
            <div className='products'>
                <div>
                    <Carrousel />
                </div>
                <div className='pageContainer container container-fluid'>
                    <div className='category'>
                        il y'a {numberOfProducts} produits:
                        <CategoryDiv />
                    </div>
                    <ProductsList handleNumber={setnumberOfProducts}/>
                </div>
            </div>
    );
}

export default Products;