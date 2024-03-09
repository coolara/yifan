<template>
    <view class="login">
        <view class="login__bg">
            <image :src="`${assetPath}login_bg.png`" />
        </view>
        <view class="login__logo">
            <image :src="`${assetPath}login_logo.webp`" />
            <view></view>
            <text class="f30 fw5 mt16">欢迎登录</text>
        </view>
        <view class="login__wrap">
            <view class="login__wrap__input">
                <tn-input :placeholderStyle="inputPlaceHolder" :customStyle="customInput"
                    placeholder="请输入手机号/邮箱号"></tn-input>
            </view>
            <view class="login__wrap__input tn-flex">
                <tn-input class="tn-flex-1" :placeholderStyle="inputPlaceHolder" :customStyle="customInput"
                    placeholder="请输入密码"></tn-input>
                <view class="login__wrap__input__forgetpw" @click="$goPage({ name: 'binduser', params: { flag: 1 } })">
                    忘记密码
                </view>
            </view>
            <view class="login__agree">
                <image @click="agree = agree == 1 ? 2 : 1" :src="`${assetPath}ic_xuanze${agree}.png`" />
                <text class="login__agree__desc">
                    <text @click="agree = agree == 1 ? 2 : 1">请阅读并勾选同意</text>
                    <text class="login__agree__doc">《用户服务协议》</text>
                    和<text class="login__agree__doc">《隐私政策》</text>
                </text>
            </view>
            <view class="login__btn tn-text-center">
                <MButton width="100%" margin="105rpx 0 36rpx" @click="showToast">登录</MButton>
                <text @click="$goPage('register')">还没有账号，<text class="main-color">去注册</text></text>
                <image :src="`${assetPath}ic_next_purple.png`"></image>
            </view>
            <view class="login__third tn-text-center">
                <view>
                    <text class="text-divider">其他登录方式</text>
                </view>
                <image :src="`${assetPath}ic_wechat.png`">
                </image>
                <button open-type="getUserInfo"></button>
            </view>
        </view>
    </view>
</template>

<script>
import MButton from "@/components/m-button/m-button"
export default {
    components: {
        MButton,
    },
    data() {
        return {
            agree: 2
        }
    },
    methods: {
        showToast() {
            this.$refs.toast.show({
                content: '账号或密码有误，请检查后重新提交',
                type: 'error',
                duration: 1500
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.login {
    padding: 0 40rpx;

    &__bg {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: -1;

        image {
            width: 100%;
            height: 880rpx;
        }
    }

    &__logo {
        margin-top: 124rpx;
        text-align: center;

        image {
            width: 334rpx;
            height: 100rpx;
        }

    }

    &__wrap {
        margin-top: 80rpx;

        &__input {
            background: #F8F8F8;
            border-radius: 16rpx;
            border: 1rpx solid #EBEBEB;
            margin-bottom: 40rpx;

            &__forgetpw {
                font-weight: 400;
                font-size: 26rpx;
                color: #68A0FF;
                line-height: 37rpx;
                align-self: center;
                margin-right: 32rpx;
            }
        }


    }

    &__agree {
        display: flex;
        align-items: center;

        image {
            margin-right: 12rpx;
            width: 32rpx;
            height: 32rpx;
        }

        font-weight: 400;
        font-size: 26rpx;

        &__desc {
            color: #9B9A9A;
        }

        &__doc {
            color: #222
        }
    }

    &__btn {
        font-size: 26rpx;

        image {
            width: 20rpx;
            height: 20rpx;
        }
    }

    &__third {
        margin-top: 61rpx;
        color: #dedede;



        image {
            margin-top: 30rpx;
            width: 104rpx;
            height: 104rpx;
        }
    }
}
</style>