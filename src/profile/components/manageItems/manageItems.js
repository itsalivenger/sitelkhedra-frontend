import css from './manageItems.css';
import TableHead from './tableComponents/tableHead/tableHead.js';
import Item from './tableComponents/item/item.js';
import data from './tableComponents/item/data.js';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
let ManageItems = ()=>{
    let [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/profile/displayItems', {credentials: 'include', withCredentials: true})
        .then(result=> result.json())
        .then(data=> setItems(data))
        .catch(err => console.log(err));
    }, [])

    function handleUpdate(id){
        //redirect to l morba3 li kayupdatih diksa3t
    }

    function remove(name){
        let newItems = items.filter((e, i)=>{
            return name != e.name;
        })
        setItems(newItems);
        fetch(`http://localhost:5000/profile/:${name}`, {'Content-Type': 'application/json',method : 'DELETE', body: JSON.stringify(name)})
    }
        return (
            <div>
                <div className='addAndDeleteBtns'>
                    <Link to='/profile/manageItems'><button className='btn btn-success'>add</button></Link>
                </div>
                <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%">
                    <thead>
                        <TableHead />
                    </thead>
                    <tbody>
                        {items.length ? items.map((e, i)=>{
                            return <Item handleDelete={remove} handleUpdate={handleUpdate} item={e} key={i}/>
                        }): undefined}
                    </tbody>
                    <tfoot>
                        <TableHead />
                    </tfoot>
                </table>
            </div>
        );
}

export default ManageItems;