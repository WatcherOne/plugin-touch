export default {
    install: (app) => {
        const typeList = ['tap', 'longTap', 'swipe', 'swiping', 'swipeup', 'swipedown', 'swipeleft', 'swiperight']

        typeList.forEach(key => {
            app.directive(key, {
                /*
                * el：指令绑定的元素,除el外其它参数应只读,切勿修改
                * binding: 一个对象,包含指令绑定相关的
                */
                mounted: (el, binding) => {
                    new vueTouch(el, binding, key)
                }
            })
        })
    }
}

function vueTouch (el, binding, type) {
    this.obj = el
    this.binding = binding
    this.touchType = type
    this.vueTouches = { x: 0, y: 0 }
    this.vueMoves = true
    this.vueLeave = true
    this.longTouch = true
    this.callBack = typeof(binding.value) == 'object' ? binding.value.fn : binding.value
    this.obj.addEventListener('touchstart', (e) => {
        this.start(e)
    }, false)
    this.obj.addEventListener('touchend', (e) => {
        this.end(e)
    }, false)
    this.obj.addEventListener('touchmove', (e) => {
        this.move(e)
    }, false)
}

vueTouch.prototype = {
    start: function (e) {
        this.vueMoves = true
        this.vueLeave = true
        this.longTouch = true
        const { pageX, pageY } = e.changedTouches[0]
        this.vueTouches = { x: pageX, y: pageY }
        this.time = setTimeout(() => {
            if (this.vueLeave && this.vueMoves) {
                this.touchType === 'longtap' && this.callBack(e)
                this.longTouch = false
            }
        }, 1000)
    },

    end: function (e) {
        const { pageX, pageY } = e.changedTouches[0]
        const moveX = pageX - this.vueTouches.x
        const moveY = pageY - this.vueTouches.y
        clearTimeout(this.time)
        const disX = Math.abs(moveX)
        const disY = Math.abs(moveY)
        // 若水平移动小于10属于点动 或 垂直移动大于100属于滚动
        if (disX > 10 || disY > 100) {
            this.touchType === 'swipe' && this.callBack(e, disX)
            // 移动相对水平方向角度 < 45° 属于水平移动
            if (disX > disY) {
                // 右移动
                if (moveX > 10) this.touchType === 'swiperight' && this.callBack(e, disX)
                // 左移动
                if (moveX < -10) this.touchType === 'swipeleft' && this.callBack(e, disX)
            } else { // 属于垂直移动
                // 下移动
                if (moveY > 10) this.touchType === 'swipedown' && this.callBack(e, disY)
                // 上移动
                if (moveY < -10) this.touchType === 'swipeup' && this.callBack(e, disY)
            }
        } else {
            if (this.longTouch && this.vueMoves) {
                this.touchType === 'tap' && this.callBack(e)
                this.vueLeave = false
            }
        }
    },

    move: function (e) {
        this.vueMoves = false
        // 滑动就回调 (只针对左右滑动)
        if (this.touchType === 'swiping') {
            const { pageX } = e.changedTouches[0]
            const moveX = pageX - this.vueTouches.x
            this.callBack(e, moveX)
        }
    }
}
