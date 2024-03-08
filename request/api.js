import {get, post} from './http.js'
import homeApi from "./home.js"


// 模拟请求列表数据
function _queryList(data, listCount) {
	if (!data.pageNo || !data.pageSize) {
		return _callQueryResult([]);
	}
	let pageNo = parseInt(data.pageNo);
	let pageSize = parseInt(data.pageSize);
	let type = data.type || 0;
	if (pageNo < 0 || pageSize <= 0) {
		return _callQueryResult([]);
	}
	uni.showLoading({
		title: '加载中...'
	})
	if (pageNo == 0) {
		pageNo = 1;
	}
	var totalPagingList = [];
	for (let i = 0; i < listCount; i++) {
		const item = {
			image: 'https://gymoo-project-cdn.oss-cn-shenzhen.aliyuncs.com/boya/static/none.png',
			title: '博雅第1届黑金会员健康管理私享会',
			status: 'home_tag_baomingzhong',
			address: '深圳市龙华区',
			views: 1322,
			date: '16分钟前'
		}
		totalPagingList.push(item);
	}
	let pageNoIndex = (pageNo - 1) * pageSize;
	if (pageNoIndex + pageSize <= totalPagingList.length) {
		return _callQueryResult(totalPagingList.splice(pageNoIndex, pageSize));
	} else if (pageNoIndex < totalPagingList.length) {
		return _callQueryResult(totalPagingList.splice(pageNoIndex, totalPagingList.length - pageNoIndex));
	} else {
		return _callQueryResult([]);
	}
}

function _callQueryResult(arg) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			uni.hideLoading();
			resolve({
				data: {
					list: arg
				}
			});
		}, 500)
	})
}

let api = {
	// 微信登录
	wechatLogin: data => post('WechatLogin', data, true, false, false),
	// 手机号登录注册
	phoneLogin: data => post('WechatLoginMobile', data, true, false, false),
	// 通用协议 协议类型：1关于我们2用户隐私协议3提现规则4积分规则5成长值规则6代币规则7分销规则8邀请好友规则9推广服务协议
	// 协议参数在path上的，所以将原有传参data置空，把data放入路由
	publicAgreement: data => get('Agreement/' + data, {}, true, false, false),
	// 通用banner接口
	// 传入参数：position
	// 参数说明：1首页顶部轮播2首页热门项目3首页活动推荐4项目商城轮播5积分商城轮播6新人卡券banner
	// 7广告弹窗8商城资源位9商城弹窗10支付成功资源位11每日签到资源位12推广员介绍页13服务流程介绍资源位
	// 14任务中心资源位15邀请好友资源1630秒了解资产配置17了解细胞配置18免疫细胞优惠19大家都在看
	publicBanner: data => get('Banner', data, true, true, false),
	// tabbar
	tabbarMenu: data => get('Menu', data, true, false, false),
	// 发送验证码
	sendMsgCode: data => post('Captcha', data, true, false, true),
	
	// 测试接口
	listTest: data => _queryList(data, 24)
}

// 将多个api文件合并
api = Object.assign(api, homeApi)

export default api;