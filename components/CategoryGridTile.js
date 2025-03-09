import { View, Text, StyleSheet, Pressable, Platform } from 'react-native'

function CategoryGridTile({ title, color, onPress }) {
    return (
        <View style={styles.GridItem}>
            <Pressable onPress={onPress} style={({pressed}) => [styles.buttonStyle, pressed ? styles.buttonPressed : null ] } android_ripple={{ color: '#ccc' }}>
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    GridItem: {
        flex: 1,
        margin: 16,
        height: 150, 
        borderRadius: 8,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    buttonStyle: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 8,
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },
});