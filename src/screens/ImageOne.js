import React, {  } from 'react'
import {  ImageBackground } from 'react-native'
import Gallery from "./Gallery";
import {} from 'react-navigation'
export class ImageOne extends Gallery {

    render() {

        return (
            <ImageBackground source = {{uri:"https://images.unsplash.com/photo-1582750923676-0a9e2f39498f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0NDUzfQ"}}
                             style={{width: '100%', height: '100%'}}>
            </ImageBackground>
        );
    }
}
export default ImageOne;
