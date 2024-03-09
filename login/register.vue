<template>
    <view class="register">
        <tn-input :customStyle="{ ...customInput, marginBottom: '40rpx' }" :clearable="false"
            :placeholderStyle="inputPlaceHolder" v-model="form.name" placeholder="请输入手机号" />
        <view class="tn-flex">
            <tn-input class="tn-flex-1" :customStyle="{ ...customInput, marginBottom: '40rpx' }" :clearable="false"
                :placeholderStyle="inputPlaceHolder" v-model="form.name" placeholder="请输入验证码" />
            <tn-button width="196rpx" height="92rpx" backgroundColor="#EFF5FF" fontColor="#68A0FF" :fontSize="26"
                margin="0 0 0 20rpx">获取验证码</tn-button>
        </view>
        <tn-input :customStyle="{ ...customInput, marginBottom: '40rpx' }" :clearable="false"
            :placeholderStyle="inputPlaceHolder" v-model="form.name" placeholder="请输入新密码" />
        <tn-input :customStyle="{ ...customInput, marginBottom: '40rpx' }" :clearable="false"
            :placeholderStyle="inputPlaceHolder" v-model="form.name" placeholder="请输入邮箱号（非必填）" />
        <MButton width="100%" margin="139rpx 0" @click="showToast">注册</MButton>
    </view>
</template>

<script>
import MButton from "@/components/m-button/m-button"
export default {
    components: {
        MButton,
    },
    methods: {
        showToast() {
            this.$refs.toast.show({
                content: '手机号码格式不正确',
                type: 'error',
                duration: 1500
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.register {
    padding: 36rpx 30rpx;

}
</style>