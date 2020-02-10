import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
	return (
		<TouchableOpacity activeOpacity={0.6} onPress={() => props.onDelete(props.id)}>
			<View style={styles.listItem}>
				<Text>{props.title}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#eee'
	}
});

export default GoalItem;
