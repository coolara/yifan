<template>
    <view class="bind">
        <tn-input :customStyle="{ ...customInput, marginBottom: '40rpx' }" :clearable="false"
            :placeholderStyle="inputPlaceHolder" v-model="form.name" placeholder="请输入手机号" />
        <view class="tn-flex">
            <tn-input class="tn-flex-1" :customStyle="{ ...customInput, marginBottom: '40rpx' }" :clearable="false"
                :placeholderStyle="inputPlaceHolder" v-model="form.name" placeholder="请输入验证码" />
            <tn-button width="196rpx" height="92rpx" backgroundColor="#EFF5FF" fontColor="#68A0FF" :fontSize="26"
                margin="0 0 0 20rpx">获取验证码</tn-button>
        </view>
        <tn-input :customStyle="{ ...customInput, marginBottom: '40rpx' }" :clearable="false"
            :placeholderStyle="inputPlaceHolder" v-model="form.name" :placeholder="config[flag].placeholder" />
        <MButton width="100%" margin="271rpx 0" @click="config[flag].method">{{ config[flag].btnText }}</MButton>
    </view>
</template>

<script>
import MButton from '@/components/m-button/m-button'
export default {
    components: {
        MButton,
    },
    onLoad(options) {
        const { flag = 0 } = options
        this.flag = flag;
        uni.setNavigationBarTitle({ title: this.config[this.flag].title })
    },
    computed: {
        config() {
            return [
                { title: '绑定账号', btnText: '确定', placeholder: '请设置登录密码', method: this.bindUser },
                { title: '忘记密码', btnText: '确认修改', placeholder: '请输入新密码', method: this.modifyPw }
            ]
        }
    },
    data() {
        return {
            flag: 0
        }
    },
    methods: {
        bindUser() {

        },
        modifyPw() { console.log('modifyPw') }
    },
}
</script>

<style lang="scss" scoped>
.bind {
    padding: 36rpx 30rpx;
}
</style>