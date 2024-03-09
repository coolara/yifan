const pageJson = require('@/pages.json')
const {
	pages,
	subPackages
} = pageJson.default
function getRouters() {
	const _routes = {}
	pages.forEach(item => {
		_routes[item.routeName] = `/${item.path}`
	})
	subPackages.forEach(subPackage=>{
		subPackage.pages.forEach(item=>{
			_routes[item.routeName] = `/${subPackage.root}/${item.path}`
		})
	})
	
	return _routes
}

function queryParams(data = {}, isPrefix = true, arrayFormat = 'brackets') {
	const prefix = isPrefix ? '?' : ''
	const _result = []
	if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets'
	for (const key in data) {
		const value = data[key]
		// 去掉为空的参数
		if (['', undefined, null].indexOf(value) >= 0) {
			continue
		}
		// 如果值为数组，另行处理
		if (value.constructor === Array) {
			// e.g. {ids: [1, 2, 3]}
			switch (arrayFormat) {
				case 'indices':
					// 结果: ids[0]=1&ids[1]=2&ids[2]=3
					for (let i = 0; i < value.length; i++) {
						_result.push(`${key}[${i}]=${value[i]}`)
					}
					break
				case 'brackets':
					// 结果: ids[]=1&ids[]=2&ids[]=3
					value.forEach((_value) => {
						_result.push(`${key}[]=${_value}`)
					})
					break
				case 'repeat':
					// 结果: ids=1&ids=2&ids=3
					value.forEach((_value) => {
						_result.push(`${key}=${_value}`)
					})
					break
				case 'comma':
					// 结果: ids=1,2,3
					let commaStr = ''
					value.forEach((_value) => {
						commaStr += (commaStr ? ',' : '') + _value
					})
					_result.push(`${key}=${commaStr}`)
					break
				default:
					value.forEach((_value) => {
						_result.push(`${key}[]=${_value}`)
					})
			}
		} else {
			_result.push(`${key}=${value}`)
		}
	}
	return _result.length ? prefix + _result.join('&') : ''
}
function mixinParam(url, params) {
	let query = ''
	if (/.*\/.*\?.*=.*/.test(url)) {
		query = queryParams(params)
		return url += `&${query}`
	}
	query = queryParams(params)
	return url += query
}

const routers = getRouters()

function customRoute(config) {
	let _routeName = typeof config === 'string' ? config : config.name
	let _params = typeof config === 'string' ? {} : config.params || {}
	let _type = typeof config === 'string' ? 'navigateTo' : config.type || 'navigateTo'
	let _url = mixinParam(routers[_routeName], _params)
	console.log(routers)

	if (_type === 'navigateTo' || _type === 'to') {
		uni.navigateTo({ url: _url })
	}
	if (_type === 'redirectTo' || _type === 'redirect') {
		uni.redirectTo({ url: _url })
	}
	if (_type === 'switchTab' || _type === 'tab') {
		uni.switchTab({ url: _url })
	}
	if (_type === 'reLaunch' || _type === 'launch') {
		uni.reLaunch({ url: _url })
	}
	if (_type === 'navigateBack' || _type === 'back') {
		uni.navigateBack({ delta: _params.delta || 1 })
	}
}

export default customRoute;

/**
 * 
 方式一：
 this.$routeTo({
	name: 'user_index',   // 须在pages.json配置routeName
	type: 'navigateTo',  // 非必填跳转类型
	params: {            // 非必填携带参数
		id: 12,
		name: 'jack'
	}
})

// 跳转
this.$routeTo('user_data')
// 返回上一级页面
this.$routeTo({type: 'back'})
 */