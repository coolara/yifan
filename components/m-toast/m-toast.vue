<template>
    <view v-if="visible">
        <view class="m-toast" :class="[toastClass]" :style="[toastStyle]">
            <view class="m-toast__content" v-if="content">
                <image style="width:48rpx; height: 48rpx;" :src="`/static/icon-${type}.png`">
                </image>
                <text style="margin-left: 16rpx;">{{ content }}</text>
            </view>
        </view>
        <view class="m-toast__mask" :class="[visible ? 'm-toast__mask--show' : '']" :style="[maskStyle]"></view>
    </view>
</template>

<script>
export default {
    props: {
        zIndex: {
            type: Number,
            default: 0
        },

    },
    computed: {
        maskStyle() {
            let style = {}
            const zIndex = this.zIndex ? this.zIndex : this.$tn.zIndex.toast
            style.zIndex = zIndex - 1
            return style
        },
        toastClass() {
            let clazz = ''
            if (this.visible) {
                clazz += ' m-toast--show'
            }

            return clazz
        },
        toastStyle() {
            let style = {}
            style.width = 'auto'

            style.zIndex = this.zIndex ? this.zIndex : this.$tn.zIndex.toast
            return style
        },
        haveContent() {
            return this.content
        }
    },
    data() {
        return {
            // 自动关闭定时器
            timer: null,
            // 是否显示
            visible: false,
            content: "",
            type: 'success'
        }
    },
    methods: {
        // 显示弹框
        show(options = {}) {
            const {
                type = 'success',
                duration = 2000,
                title = '',
                content = ''
            } = options
            if (this.timer !== null) {
                clearTimeout(this.timer)
            }
            // 如果没有设置任何内容就不弹出
            if (!title && !content) {
                this._clearOptions()
                this.$emit('closed')
                return
            }

            this.content = content
            this.type = type
            this.title = title
            this.visible = true

            this.timer = setTimeout(() => {
                this.visible = false
                this._clearOptions()
                clearTimeout(this.timer)
                this.timer = null
                this.$emit('closed')
            }, duration)
        },


        // 清除传递的参数
        _clearOptions() {
            this.title = ''
            this.content = ''
            this.type = 'success'
        }
    }
}
</script>

<style lang="scss" scoped>
.m-toast {
    height: auto;
    background-color: rgb(0, 0, 0);
    border-radius: 16rpx;
    opacity: 0;
    position: fixed;
    left: 50%;
    top: 48%;
    transform: translate(-50%, -50%);
    transition: 0.3 ease-in-out;
    transition-property: opacity, visibility;
    padding: 30rpx 44rpx;
    box-sizing: border-box;
    max-width: 90%;

    &--show {
        opacity: 1;
    }

    &__content {
        display: flex;
        align-items: center;
        white-space: nowrap;
        font-size: 28rpx;
        line-height: 44rpx;
        font-weight: 400;
        color: #ffffff;

        text {
            flex: 1
        }
    }

    &__mask {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        border: 0;
        background-color: rgba(0, 0, 0, 0);
        transition: 0.3s ease-in-out;
        transition-property: opacity;
        opacity: 0;

        &--show {
            height: 100%;
            opacity: 1;
        }
    }
}
</style>