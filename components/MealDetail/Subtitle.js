import { View, Text, StyleSheet } from 'react-native'
function Subtitle({ children }) {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitles}>{children}</Text>
        </View>
    )
}

export default Subtitle

const styles = StyleSheet.create({
    subTitleContainer: {
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    },
    subTitles: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e2b497',
        textAlign: 'center',
    },
});