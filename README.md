## React Decorators

An assortment of useful @decorators for react and react-native

**Warning!** - If you're using babel 6, you'll have to use [babel-plugin-transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy) plugin [[Follow thread](https://github.com/babel/babel/issues/2645)]. If you're using babel 5, you're good to go.


### installation
```bash
npm i -S react-decorator
```

### Usage
#### Request

```js
import React, { Component } from 'react'
import { request } from 'react-decorator'

@request({
	task: fetch(url),
	LoadingComponent: () => <div>loading....</div>,
	ErrorComponent: ({ error }) => <div>{ error }</div>,
})
class App extends Component {
	render() {
		return <div> content </div>
	}
}
```

#### Measure
```javascript
import React, { Component } from 'react'
import { measure } from 'react-decorator'

@measure
class App extends Component {
	render () {
		return (
			<div>
				This text fits inside a
				{ this.props.width }x{ this.props.height }
				box
			</div>
		)
	}
}
```

More coming soon...
