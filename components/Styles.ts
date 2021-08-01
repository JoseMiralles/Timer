import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const foreGround = "white";
const backGround = "black";

interface IStyles {
    mainView: ViewStyle;
    menuItem: ViewStyle;
    clockRow: ViewStyle;
    text: TextStyle;
}

export const mainStyleSheet = StyleSheet.create<IStyles>({
    mainView: {
        backgroundColor: backGround,
        flex: 1
    },
    menuItem: {
        marginBottom: 10,
        flexDirection: "column",
    },
    clockRow: {
        flexDirection: "row"
    },
    text: {
        color: foreGround
    }
});