import * as React from "react";

interface Props {
	name: string;
	age: number;
	families: {
		brother: number;
		sister: number;
	};
}

class User extends React.Component<Props> {
	shouldComponentUpdate(nextProps: Props) {
		if (this.props.families === nextProps.families) {
			return true;
		} else {
			return false;
		}
	}
	render() {
		console.log("ほげほげ");
		return (
			<div className="user">
				<div className="user_name">{this.props.name}</div>
				<div className="user_age">{this.props.age}</div>
			</div>
		);
	}
}

export default User;
