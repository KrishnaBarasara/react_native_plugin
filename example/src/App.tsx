import { Text, View, StyleSheet } from 'react-native';
import { PrimaryButton, useTheme, toggleDarkMode } from 'react-native-utils';

export default function App() {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === 'dark' ? '#000' : '#fff' },
      ]}
    >
      <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>
        Current Theme: {theme}
      </Text>

      <PrimaryButton title="Toggle Dark Mode" onPress={toggleDarkMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
