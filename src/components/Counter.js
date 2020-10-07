import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.counter}</h1>
			</div>
		);
	}
}

//state bilgisi reduxda ki reducerda counterReducerdan geliyor
//bu noktada uygulamayı reduxa bağlamamız lazım {connect} ile
//state bilgisini counterReducerdan çek dedik

function mapStateToProps(state) {
	return { counter: state.counterReducer };
}

export default connect(mapStateToProps)(Counter);
