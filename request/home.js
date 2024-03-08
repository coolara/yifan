// 这是首页相关接口
// 为了防止名称冲突，一切名称前缀以 home 开头（例如：homeList）
import {get, post} from './http.js'
let homeApi = {
	// 接口写法如 api.js 中的api对象类似
	// wechatLogin: data => post('WechatLogin', data)
	// 确保每个接口都有注释
	/**
	 * return request({
            url: "/banner", //请求头
            method: "GET", //请求方式 
            data: data,    //请求数据
			header: {},	// 自定义header
			hideLoading: false, //加载样式
			isToken: true	// 是否需要token（默认是true, 仅限部分页面不需要token）
			isPublicAPI: false,	// 是否为公共接口（比如：发送短信验证码）
        })
	 */
	
	// 首页接口
	homeIndex: data => get('Index', data, true, true, false),
	// 首页资讯分类
	homeInfoTab: data => get('IndexInformationCategory', data, true, true, false),
	// 首页资讯列表
	homeInfoList: data => get('IndexInformation', data, true, true, false),
	// 公告详情
	homeNoticeDetail: data => get('Notice/' + data, {}, true, true, false),
	// 活动分类列表
	homeActivityTab: data => get('ActivityCategory', data, true, true, false),
	// 活动列表
	homeActivityList: data => get('Activity', data, true, true, false),
	// 活动详情
	homeActivityDetail: data => get('Activity' + data, {}, true, true, false),
	// 活动报名
	homeActivityEnroll: data => post('ActivityApply', data, true, true, false),
	// 活动搜索历史记录
	homeActivityHistory: data => get('ActivityHistory', data, true, true, false),
}

export default homeApi;