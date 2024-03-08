export default class Request {
	http(param) {
		// 请求参数
		let url = param.url;
		let method = param.method;
		let header = {
			'content-type': "application/json"
		};
		let data = Object.assign(param.data || {});
		let hideLoading = param.hideLoading || false;
		let isToken = param.isToken;
		let isPublicAPI = param.isPublicAPI || false;
		// 公共接口地址
		let publicUrl = 'https://boya-service-api.gymooit.cn/v1/app/' + url;
		// 拼接完整请求地址
		let requestUrl = 'https://boya-service-api.gymooit.cn/v1/mini/' + url;

		if (method) {
			method = method.toUpperCase(); //小写改为大写
			if(isToken){	// 是否需要传入token
				let lifeData = uni.getStorageSync("lifeData")
				let token = lifeData.vuex_user.token.token
				header = Object.assign(header, {
					'X-Access-Token': token
				})
			}
		}
		//加载圈
		if (!hideLoading) {
			uni.showLoading({})
		}
		// 返回promise
		return new Promise((resolve, reject) => {
			// 请求
			uni.request({
				url: isPublicAPI ? publicUrl : requestUrl,
				data: data,
				method: method,
				header: header,
				success: (res) => {
					// console.log('拦截器',res);
					//隐藏加载
					if (!hideLoading) {
						uni.hideLoading();
					}
					// 判断 请求是否成功 
					if (res.statusCode == 200) {
						// code判断:1成功,不等于1错误
						// if (res.data.code == 1) {
						//成功            
						resolve(res.data)
						return true;
						// } else {
						// 	// 这里可以判断一下token过期，过期了就跳转到login页面
						// 	// ......

						// 	uni.showToast({
						// 		title: res.data.msg,
						// 		icon: 'none'
						// 	})
						// 	return false;
						// }

					} else {
						reject()
						return false;
					}
				},
				//请求失败
				fail: (err) => {
					console.log('请求失败', err);
					//隐藏加载
					if (!hideLoading) {
						uni.hideLoading();
					}
					return false;
				},
				//请求完成
				complete() {
					return;
				}
			})
		})
	}
}