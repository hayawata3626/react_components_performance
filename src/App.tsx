import * as React from "react";
import User from "./components/User";

type State = {
	count: number;
};

class App extends React.PureComponent<{}, State> {
	state: State = {
		count: 0
	};
	private handleDecreaseButton() {
		this.setState({ count: this.state.count - 1 });
	}
	private handleIncreaseButton() {
		this.setState({ count: this.state.count + 1 });
	}
	render(): React.ReactNode {
		return (
			<>
				<div>{this.state.count}</div>
				<User
					name="takeru"
					age={25}
					onClickDecreaseButton={this.handleDecreaseButton.bind(this)}
					onClickIncreaseButton={this.handleIncreaseButton.bind(this)}
				/>
			</>
		);
	}
}

export default App;
