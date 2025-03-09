import { View, Text, StyleSheet } from 'react-native'

function List({ data }) {
    return (
            data.map((dataPoint) => (
                <View style={styles.listItem}>
                    <Text style={styles.listItemText} key={dataPoint}>{dataPoint}</Text>
                </View>
            ))
    )
}

export default List

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginHorizontal: 12,
        marginVertical: 4,
        backgroundColor: '#e2b497'
    },
    listItemText: {
        fontSize: 16,
        color: '#351401'
    }
});