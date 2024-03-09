<template>
    <tn-button :disabled="disabled" @click="$emit('click')" :backgroundColor="disabled ? disableColor : backgroundColor"
        :width="width" :height="height" :fontColor="fontColor" :fontSize="fontSize" :margin="margin">
        <slot></slot>
    </tn-button>
</template>

<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        width: {
            type: String,
            default: "auto"
        },
        height: {
            type: String,
            default: "80rpx"
        },
        backgroundColor: {
            type: String,
            default: "#40185A"
        },
        fontColor: {
            type: String,
            default: "#fff"
        },
        fontSize: {
            type: Number,
            default: 30
        },
        margin: String
    },
    data() {
        return {
            disableColor: "#DEDEDE"
        }
    },
}
</script>

<style lang="scss" scoped></style>