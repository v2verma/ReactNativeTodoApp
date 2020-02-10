import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [ goals, setGoals ] = useState([]);
	const [ isAddMode, setIsAddMode ] = useState(false);

	handleGoalAddition = (goalTitle) => {
		setGoals((goals) => [ ...goals, { id: Math.random().toString(), value: goalTitle } ]);
		setIsAddMode(false);
	};

	handleGoalDeletion = (goalId) => {
		setGoals((goals) => {
			return goals.filter((goal) => {
				return goal.id !== goalId;
			});
		});
	};

	handleIsAddMode = () => {
		setIsAddMode((isAddMode) => !isAddMode);
	};

	return (
		<View style={styles.root}>
			<Button title="Add Your Task" onPress={this.handleIsAddMode} />
			{/* <Icon reverse raised name="plus" type="font-awesome" color="#60709f" onPress={this.handleIsAddMode} /> */}
			<GoalInput
				visible={isAddMode}
				onGoalAddition={this.handleGoalAddition}
				onGoalCancel={this.handleIsAddMode}
			/>
			<FlatList
				data={goals}
				renderItem={(itemData) => (
					<GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={this.handleGoalDeletion} />
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		padding: 50
	}
});
