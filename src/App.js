/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Button,
	Platform,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ImageBackground
} from 'react-native';
import FancyTextField from 'react-native-floating-label-text-image-input';

export default class App extends Component<{}> {
	static navigationOptions = { header: null };

	constructor(props) {
		super(props);

		this.state = {
			answer: ''
		};
	}
	componentDidMount() {
		this.setState({ answer: 'no answer submited' });
	}

	render() {
		return (
			<ImageBackground
				source={require('./images/background.png')}
				style={[styles.container]}
			>
				<View style={styles.container}>
					<Text style={styles.signIn}>
						{'Sign In'}
						{'\n'}
						{'\n'}
					</Text>
					<FancyTextField
						placeholderIcon={require('./images/icon_email.png')}
						placeholder={'Email'}
						value={''}
						onChangeTextValue={text => {
							console.log(text);
						}}
					/>
					<FancyTextField
						placeholderIcon={require('./images/icon_password.png')}
						placeholder={'Password'}
						secureTextEntry={true}
						value={''}
						onChangeTextValue={text => {
							console.log(text);
						}}
					/>
					<View style={styles.buttonContainer}>
						<Button
							onPress={() => {
								console.log('Sign In clicked');
							}}
							title="Punch In"
							color="white"
						/>
					</View>
				</View>
			</ImageBackground>
		);
	}
	_onQuestionClick = _data => {
		this.props.navigation.navigate('SecondScreen', {
			type: _data.data.question.type,
			body: _data.data.question.body,
			options: _data.data.question.options,
			onSubmitQuestion: this._onSubmitQuestion()
		});
	};
	_onSubmitQuestion = answers => {
		this.setState({ answer: answers });
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
		backgroundColor: 'transparent'
	},
	signIn: {
		fontSize: 40,
		color: 'white',
		textAlign: 'center'
	},
	buttonContainer: {
		backgroundColor: '#dd4aa1',
		borderRadius: 10,
		margin: 5,
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowRadius: 10,
		shadowOpacity: 0.25
	}
});
