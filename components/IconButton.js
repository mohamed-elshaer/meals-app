import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({ icon, color, onPress }) {
    return (
        <Pressable onPress={onPress}  style={({pressed}) => pressed ? styles.buttonPressed : null  } android_ripple={{ color: '#ccc' }}>
            <Ionicons name={icon} size={24} color={color} />
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    buttonPressed: {
        opacity: 0.5
    }
});