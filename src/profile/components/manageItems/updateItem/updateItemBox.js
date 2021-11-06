import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './updateItemBox.css';
import { Redirect } from 'react-router-dom';
function UpdateItemBox(props) {
    let [name, setName] = useState('');
    let [price, setPrice] = useState('');
    let [quantity, setQuantity] = useState('');
    let [quantityBy, setQuantityBy] = useState('e');
    let [type, setType] = useState('fruits');
    let [url, setUrl] = useState('');

    useEffect(()=>{
        fetch('http://localhost:5000/profile/manageItems', {credentials: 'include', withCredentials: true})
        .then(res=> res.json())
        .then(res=> {
            if(!res.approved){
                setUrl(res.url);
            }
        })
    }, [url]);

    function handleSubmit(e){
        e.preventDefault();
        fetch('http://localhost:5000/profile/manageItems', {
            headers : {'Content-Type': 'application/json'},
            method : 'POST',
            body : JSON.stringify({name, price, quantity, type, quantityBy})
        })
    }

    return (
        <div>{url ? <Redirect to={url} /> : 
            <div className='container container-fluid itemUpdaterBox'>
                <div className="child">
                    <div>
                        <img className="card-img-top img img-fluid" src="https://picsum.photos/200" alt="Card image cap" />
                    </div>
                    <div className="card-body">
                    
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlFile1">Veuillez insérer une image de votre produit:</label>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Nom</label>
                                <input type="text" value={name} className="form-control" id="exampleFormControlInput1" onChange={(e)=> setName(e.target.value)}  placeholder='veuillez insérer le nom' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Type de Produit</label>
                                <select value={type} onChange={(e)=> setType(e.target.value)} className="form-control"  id="exampleFormControlSelect1">
                                    <option>fruits</option>
                                    <option>légumes</option>
                                    <option>herbes</option>
                                    <option>divers</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput2">Prix</label>
                                <input type="number" value={price} className="form-control" id="exampleFormControlInput2"  onChange={(e)=> setPrice(e.target.value)}  placeholder='veuillez insérer le prix' />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" onChange={(e)=> setQuantityBy(e.target.value)} type="radio" name="quantityBy" value={quantityBy} checked />
                                <label className="form-check-label" htmlFor="quantity">
                                    par e
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" onChange={(e)=> setQuantityBy(e.target.value)} type="radio" name="quantityBy" value={quantityBy} />
                                <label className="form-check-label" htmlFor="quantity">
                                    par Kg
                                </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput3">Quantité par Kg</label>
                                <input type="number" value={quantity} className="form-control" id="exampleFormControlInput3"  onChange={(e)=> setQuantity(e.target.value)}  placeholder='veuillez insérer le quantité en KG' />
                            </div>
                            <div className="submit">
                                <button className="btn btn-success" onClick={handleSubmit} type="submit">Ajouter</button>
                                <Link to='/Profile'><button className="btn btn-secondary" >Annuler</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default UpdateItemBox;