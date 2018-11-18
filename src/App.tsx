import * as React from "react";
import "./App.css";
import User from "./components/User";

type State = {
	count: number;
	onClickButtonHandler: () => void;
};

class App extends React.Component<State> {
	render() {
		return (
			<div className="App">
				<User families={{ brother: 2, sister: 1 }} name="takeru" age={25} />
			</div>
		);
	}
}

export default App;
