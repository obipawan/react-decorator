import React, { Component } from 'react'
import debounce from 'lodash.debounce'

export default () => TargetComponent =>
	class Measure extends Component {
		constructor () {
			super()
			this.handleResize = debounce(this.handleResize.bind(this), 16)
			window.addEventListener('resize', this.handleResize, false)
			this.state = {
				width: 0,
				height: 0,
				initialMount: false,
			}
		}

		componentDidMount () {
			this.handleResize()
		}

		componentWillUnmount () {
			window.removeEventListener('resize', this.handleResize)
		}

		handleResize () {
			(
				this.target.clientWidth !== this.state.width
				|| this.target.clientHeight !== this.state.height
				|| !this.state.initialMount
			) && this.setState({
					width: this.target.clientWidth,
					height: this.target.clientHeight,
					initialMount: true,
				})
		}

		render () {
			return (
				<div ref={ target => this.target = target }>
					<TargetComponent
						width={ this.state.width }
						height={ this.state.height }
					/>
				</div>
			)
		}
	}
