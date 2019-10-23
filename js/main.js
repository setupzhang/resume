var specialTags = document.querySelectorAll('[data-x]')
yyy()
findClosest()

//删除下沉类（让元素上浮）
function yyy() {
    for (let i = 0; i < specialTags.length; i++) {
        let dis = distanceFromTop(specialTags[i])
        if (dis < window.scrollY + window.innerHeight) {
            specialTags[i].classList.remove('sink')

        }
    }
}

//求元素到page顶部的距离px
function distanceFromTop(el) {
    var elDistanceToTop = window.pageYOffset + el.getBoundingClientRect().top
    return elDistanceToTop
}

window.onscroll = function (x) {

    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky')
    } else {
        topNavBar.classList.remove('sticky')
    }
    findClosest()
    yyy()
}

function findClosest() {
    let minIndex = 0 //minIndex就是离窗口顶部最近的元素
    for (let i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i
        }
    }
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let brothersAndMe = li.parentNode.children
    for (let i = 0; i < brothersAndMe.length; i++) {
        brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
}



let liTags = document.querySelectorAll('nav.menu > ul > li')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active')
    }
}

let aTags = document.querySelectorAll('nav.menu > ul > li > a')
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault()
        let a = x.currentTarget
        let href = a.getAttribute('href') //'#siteAbout'
        let element = document.querySelector(href)
        let top = element.offsetTop

        let currentTop = window.scrollY
        let targetTop = top - 100
        let s = targetTop - currentTop // 路程
        var coords = { y: currentTop }; // 起始位置
        var t = Math.abs((s / 100) * 300) // 时间
        if (t > 500) { t = 500 }
        var tween = new TWEEN.Tween(coords) // 起始位置
            .to({ y: targetTop }, t) // 结束位置 和 时间
            .easing(TWEEN.Easing.Cubic.InOut) // 缓动类型
            .onUpdate(function () {
                // coords.y 已经变了
                window.scrollTo(0, coords.y) // 如何更新界面
            })
            .start(); // 开始缓动
    }
}
