import React, { useState } from "react";
import {Text, View} from "react-native";
import { mainStyleSheet } from "./Styles";

interface IProps {
    initialSeconds: number;
    name: string;
}

const TimerMenuItem = ({initialSeconds, name}: IProps) => {

    const [seconds, setSeconds] = useState(initialSeconds);

    const date = new Date(1970, 0, 1);
    date.setSeconds(seconds);

    return(
        <View style={mainStyleSheet.menuItem}>
            <View>
                <Text style={mainStyleSheet.text}>{name}</Text>
            </View>
            <View style={mainStyleSheet.clockRow}>
                <Text style={mainStyleSheet.text}>{date.getHours()}:</Text>
                <Text style={mainStyleSheet.text}>{date.getMinutes()}:</Text>
                <Text style={mainStyleSheet.text}>{date.getSeconds()}</Text>
            </View>
        </View>
    );
};

export default TimerMenuItem;
