import { Link } from "react-router-dom";

function Item(props) {
    let {price, name, stock, type, id} = props.item;
    return (
        <tr>
            <td>{name}</td>
            <td>{type}</td>
            <td>{price}</td>
            <td>{stock}</td>
            <td>{id}</td>
            <td><Link to="/UpdateItemBox"><button className='btn btn-info' onClick={props.update}>Update</button></Link></td>
            <td><button className='btn btn-danger' onClick={()=> props.handleDelete(name)}>delete</button></td>
        </tr>
    );
}

export default Item;