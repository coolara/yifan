


const toast =  (obj) => {
    const {icon,  title, image} = obj
    uni.showToast({
        icon,
        title,
        image,
        duration: 2000
    });
}

export default toast