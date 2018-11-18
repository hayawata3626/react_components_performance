import * as React from "react";
// import { pure } from "recompose";

type Props = {
	name: string;
	age: number;
	onClickDecreaseButton: () => void;
	onClickIncreaseButton: () => void;
};

// React.Componentの例
// class User extends React.Component<Props> {
// 	// shouldComponentUpdate(nextProps: Props, nextState: any) {
// 	// 	debugger;
// 	// 	if (this.props.name === nextProps.name) {
// 	// 		console.log("再描画されません");
// 	// 		return false;
// 	// 	} else {
// 	// 		console.log("再描画されます");
// 	// 		return true;
// 	// 	}
// 	// }
// 	render() {
// 		console.log("virtual dom calculated");
// 		return (
// 			<div className="user">
// 				<div className="user_name">{this.props.name}</div>
// 				<button onClick={this.props.onClickDecreaseButton}>マイナス</button>
// 				<button onClick={this.props.onClickIncreaseButton}>プラス</button>
// 				<div className="user_age">{this.props.age}</div>
// 				<button onClick={() => console.log("ラムダ関数を記述")} />
// 			</div>
// 		);
// 	}
// }

// React.PureComponentの例
// class User extends React.PureComponent<Props> {
// 	// shouldComponentUpdate(nextProps: Props, nextState: any) {
// 	// 	debugger;
// 	// 	if (this.props.name === nextProps.name) {
// 	// 		console.log("再描画されません");
// 	// 		return false;
// 	// 	} else {
// 	// 		console.log("再描画されます");
// 	// 		return true;
// 	// 	}
// 	// }
// 	// componentDidUpdate() {
// 	// 	// debugger;
// 	// }

// 	render() {
// 		console.log("virtual dom calculated");
// 		return (
// 			<div className="user">
// 				<div className="user_name">{this.props.name}</div>
// 				<button onClick={this.props.onClickDecreaseButton}>マイナス</button>
// 				<button onClick={this.props.onClickIncreaseButton}>プラス</button>
// 				<div className="user_age">{this.props.age}</div>
// 				<button onClick={() => console.log("ラムダ関数を記述")} />
// 			</div>
// 		);
// 	}
// }

// recomposeのpure
// const User = pure((props: Props) => (
// 	<div className="user">
// 		<div className="user_name">{props.name}</div>
// 		<button onClick={props.onClickDecreaseButton}>マイナス</button>
// 		<button onClick={props.onClickIncreaseButton}>プラス</button>
// 		<div className="user_age">{props.age}</div>
// 		<button onClick={() => console.log("ラムダ関数を記述")} />
// 	</div>
// ));

// React.memoの例
const User = React.memo<Props>(function(props: Props) {
	return (
		<div className="user">
			<div className="user_name">{props.name}</div>
			<button onClick={props.onClickDecreaseButton}>マイナス</button>
			<button onClick={props.onClickIncreaseButton}>プラス</button>
			<div className="user_age">{props.age}</div>
			<button onClick={() => console.log("ラムダ関数を記述")} />
		</div>
	);
});

export default User;
