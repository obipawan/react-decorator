import React, { Component } from 'react'

export default ({
	task,
	LoadingComponent,
	ErrorComponent
} = {}) => TargetComponent =>
	class Request extends Component {
		constructor () {
			super()
			this.state = { loading: !!task }
		}
		componentDidMount () {
			task && task
				.then(i => this.setState({ loading: false, value: i }))
				.catch(error => this.setState({ error }))
		}

		render () {
			if (this.state.error)
				return <ErrorComponent error={ this.state.error } { ...this.props } />
			if (this.state.loading)
				return <LoadingComponent { ...this.props } />
			return <TargetComponent { ...this.props } value={ this.state.value } />
		}
	}
