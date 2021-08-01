import React from "react";
import {Text, View} from "react-native";
import { mainStyleSheet } from "./Styles";

interface IProps {
    seconds: number;
    name: string;
}

const TimerMenuItem = (p: IProps) => {

    return(
        <View style={mainStyleSheet.menuItem}>
            <View>
                <Text style={mainStyleSheet.text}>{p.name}</Text>
            </View>
            <View style={mainStyleSheet.clockRow}>
                <Text style={mainStyleSheet.text}>00:</Text>
                <Text style={mainStyleSheet.text}>02:</Text>
                <Text style={mainStyleSheet.text}>58</Text>
            </View>
        </View>
    );
};

export default TimerMenuItem;
