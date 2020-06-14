import React, { Component } from 'react'

 class AddItem extends Component{
     state={
         title:''
     }
     onChangeMethod=(e)=>{
        this.setState({[e.target.name]:e.target.value});
     }
     onSubmitForm=(e)=>{
        e.preventDefault();
        this.props.AddItem(this.state.title);
        this.setState({title:''});
     }
     render(){
        return (
            <div>
                <form onSubmit={this.onSubmitForm} className="myform">
                <input 
               
                type="text"
                name="title" 
                placeholder="add item..." 
                value={this.state.title}
                onChange={this.onChangeMethod}
                ></input>
                
                <input type="submit" value="Add Item" ></input>
                </form>
    
            </div>
        );
     }
    
}
export default AddItem;