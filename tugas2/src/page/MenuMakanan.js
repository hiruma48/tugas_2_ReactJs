import React, { Component } from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component{
    render(){
        return(
            <div>
                <h3>Daftar Makanan Yang Kami sediakan :</h3>
                <td>
                    <ListMakanan LinkImage="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" lebar="150" />
                </td>
                <td>
                    <ListMakanan LinkImage="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" lebar="150"/>
                </td>
                <td>
                    <ListMakanan LinkImage="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" lebar="150"/>
                </td>
                <td>
                    <ListMakanan LinkImage="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" lebar="150"/>
                </td>
                <td>
                    <ListMakanan LinkImage="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg"lebar="150"/>
                </td>
            </div>
        )
    }
}
export default MenuMakanan;