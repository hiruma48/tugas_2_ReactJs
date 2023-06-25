import React, { Component } from "react";

class ListMakanan extends Component{
    constructor(props){
        super(props);
        this.state={
            datalist:this.props.LinkImage
        };
    }
    render(){
        return(
            <div>
                <img src={this.state.datalist} alt="Product Makanan" width={this.props.lebar}/>
            </div>
        );
    }
}
export default ListMakanan;