import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
	const [ enteredGoal, setEnteredGoal ] = useState('');
	const [ isGoalEmpty, setIsGoalEmpty ] = useState(false);

	handleIpGoal = (enteredGoal) => {
		setEnteredGoal(enteredGoal);
		setIsGoalEmpty(false);
	};

	handleAdd = () => {
		if (enteredGoal.length === 0) {
			setIsGoalEmpty(true);
		} else {
			props.onGoalAddition(enteredGoal);
			setEnteredGoal('');
			setIsGoalEmpty(false);
		}
	};

	handleCancel = () => {
		props.onGoalCancel();
		setIsGoalEmpty(false);
	};

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Create Your Goals..."
					value={enteredGoal}
					onChangeText={handleIpGoal}
					style={styles.input}
				/>
				{isGoalEmpty ? <Text style={styles.errorMsg}>Task is empty!</Text> : null}
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="ADD" onPress={this.handleAdd} />
					</View>
					<View style={styles.button}>
						<Button title="CANCEL" color="red" onPress={this.handleCancel} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		width: '80%',
		borderBottomColor: '#166166',
		borderBottomWidth: 2,
		padding: 10,
		marginBottom: 10
	},
	errorMsg: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '80%',
		color: 'red'
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '80%'
	},
	button: {
		width: '40%'
	}
});

export default GoalInput;
