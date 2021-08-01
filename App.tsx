import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, ViewStyle } from "react-native";
import TimerMenuItem from "./components/TimerMenuItem";
import { ITimer } from "./models/TimerModel";
import { loadTimers } from "./util/TimerUtil";
import { mainStyleSheet } from "./components/Styles";

const App = () => {

  const [timers, setTimers] = useState<ITimer[]>();

  useEffect(() => {
    (async() => {
      setTimers(await loadTimers());
    })();
  }, []);

  return(
    <View style={mainStyleSheet.mainView}>
      <ScrollView style={styles.scrollView}>
        { timers ? timers.map((t, i) => (
          <TimerMenuItem initialSeconds={t.seconds} name={t.name} key={i} />
        ))
      : <Text>Loading...</Text> }
      </ScrollView>
    </View>
  );
}

export default App;

interface IStyles {
  scrollView: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  scrollView: {
    flex: 1,
    margin: 10,
  }
});
