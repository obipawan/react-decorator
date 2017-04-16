import React, { Component } from 'react'
import { View } from 'react-native'
import debounce from 'lodash.debounce'

export default () => TargetComponent =>
	class extends Component {
		constructor () {
			super()
			this.handleOnLayout = debounce(this.handleOnLayout.bind(this), 16)
			this.state = {
				width:0,
				height:0,
				initialMount:false,
			}
		}

		handleOnLayout({
			nativeEvent: {
				layout: {
					width = 0,
					height = 0
				} = {}
			} = {}
		}) {
			(
				width !== this.state.width
				|| height !== this.state.height
				|| !this.state.initialMount
			) && this.setState({
				width,
				height,
				initialRender:true
			})
		}

		render(){
			return (
				<View onLayout={ this.handleOnLayout }>
					<TargetComponent
						onLayout={ this.handleOnLayout }
						width={ this.state.width }
						height={ this.state.height }
					/>
				</View>
			)
		}
	}
