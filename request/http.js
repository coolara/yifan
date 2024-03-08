import Request from './index.js'
let request = new Request().http

/*
 * 请求样式：
    自定义名字: function(data) {
        return request({
            url: "/banner", //请求头
            method: "GET", //请求方式 
            data: data,    //请求数据
			hideLoading: false, //加载样式
			isToken: true	// 是否需要token（默认是true, 仅限部分页面不需要token）
			isPublicAPI: false,	// 是否为公共接口（比如：发送短信验证码）
        })
    }, 
 */
export function get(url, data, hideLoading, isToken, isPublicAPI) {
	return request({
		url: url,
		method: 'GET',
		data: data,
		hideLoading: hideLoading,
		isToken: isToken,
		isPublicAPI: isPublicAPI
	})
}

export function post(url, data, hideLoading, isToken, isPublicAPI) {
	return request({
		url: url,
		method: 'POST',
		data: data,
		hideLoading: hideLoading,
		isToken: isToken,
		isPublicAPI: isPublicAPI
	})
}

export function put(url, data, hideLoading, isToken, isPublicAPI) {
	return request({
		url: url,
		method: 'PUT',
		data: data,
		hideLoading: hideLoading,
		isToken: isToken,
		isPublicAPI: isPublicAPI
	})
}