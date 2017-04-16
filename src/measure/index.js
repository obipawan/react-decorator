let MeasurerHOC
MeasurerHOC = navigator.product !== 'Gecko'
	? require('./ForGecko').default
	: require('./ForReactNative').default

export default MeasurerHOC
