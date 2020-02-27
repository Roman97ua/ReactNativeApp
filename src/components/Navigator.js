import React, {  } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Gallery from '../screens/Gallery.js'
import {ImageOne} from "../screens/ImageOne";

export default function Navigator() {
    const Tab = createBottomTabNavigator()
    return (
        <NavigationContainer >
            <Tab.Navigator>
                <Tab.Screen name="Gallery" component={Gallery} />
                <Tab.Screen name="ImageOne" component={ImageOne}>
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>

    );
}
