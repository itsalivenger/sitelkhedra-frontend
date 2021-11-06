import css from './cartel.css';
import Item from './components/item/item.js';
import React from 'react';
import Total from './components/total/total.js';
import { createContext } from 'react/cjs/react.development';
export let Conc = createContext();

var data = []
class Cartel extends React.Component{
    constructor(){
        super();
        this.state = {
            items : data,
            sum : data.reduce((a, e)=>{
                return a + (e.qty * e.price);
            }, 0)
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.sumAll = this.sumAll.bind(this);
        this.deleteAll = this.deleteAll.bind(this);
        this.confirmationOfCartel = this.confirmationOfCartel.bind(this);
    }
    
    deleteItem(itemId, price, qty){
        let newState = this.state.items.filter((e, i)=>{
            return itemId != e.id;
        })
        this.setState({items: newState});
        this.setState({sum : this.state.sum - (price * qty)})
    }

    sumAll(data){
        let sum = data.reduce((a, e)=>{
            return a + (e.qty * e.price);
        }, 0);
        this.setState({sum})
    }
    
    deleteAll(){
        this.setState({items : [],
                        sum : 0});
    }

    confirmationOfCartel(){
    alert('order Confirmed');
    let e = this.state.items;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Accept': 'application/json' },
        body: JSON.stringify({ data:  e})
    };
    fetch('http://localhost:5000/cartel', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    }
    
    componentDidMount(){
     fetch('http//:localhost:5000/cartel')
     .then((result)=> result.json())
     .then((data)=> console.log('e'));
     console.log('wslat')
    }

    render(){
        return (
            <div>
                <div className='container container-fluid cartel'>
                    
                    {this.state.items.length != 0 ? this.state.items.map((e, i)=>{
                        return (
                        <Conc.Provider key={e.id}  value={this.state.items}>
                            <Item 
                                id={e.id} 
                                handleSum={this.sumAll} 
                                item={e} 
                                handleDelete={this.deleteItem}
                                    />
                        </Conc.Provider>
                        )
                    }): <h2 style={{color:'bisque'}}>Your Cartel is empty</h2>}
                    <Total handleDeleteAll={this.deleteAll} confirmationOfCartel={this.confirmationOfCartel} sum={this.state.sum}/>
                </div>
            </div>
        );
    }
}
export default Cartel;