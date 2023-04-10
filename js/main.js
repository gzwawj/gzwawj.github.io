/**
 * some JavaScript code for this blog theme
 */
/* jshint asi:true */
/**
 * 公共方法
 */
function $(dom) {
  return document.querySelector(dom)
}
/**
 * 设置目录最大高度
 */
function setContentMaxHeightInPC() {
  var contentMaxHeight = window.innerHeight - 77 - 60
  $('.content-ul').style.maxHeight = contentMaxHeight + 'px'
}
/**
 * 设置目录最大高度
 */
function setContentMaxHeight() {
  var contentMaxHeight = window.innerHeight - 180
  $('.content-ul').style.maxHeight = contentMaxHeight + 'px'
}
/**
 * 达到最大高度
 */
function isMaxHeight() {
  var contentMaxHeight = window.innerHeight - 77 - 60
  var contentHeight = $('.content-ul').offsetHeight
  return contentMaxHeight === contentHeight
}
/**
 * 目录锚的位置固定
 */
function ancherPostion(anchorBtn, rightDiv) {
  window.addEventListener('scroll', function () {
    var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)
    if (scrollTop > 50) {
      anchorBtn.style.top = '20px'
      rightDiv.style.top = '20px'
    } else {
      anchorBtn.style.top = '76px'
      rightDiv.style.top = '76px'
    }
  })
}
/**
 * 将Content内容转移
 */
function moveTOC() {
  if (document.querySelector('#markdown-toc') !== null) {
    $('#content-side').insertAdjacentHTML('afterbegin', $('#markdown-toc').innerHTML)
    var aTags = document.querySelectorAll('#content-side a')
    for (var i = 0; i < aTags.length; i++) {
      if (!aTags[i].hasAttribute('data-scroll')) {
        aTags[i].setAttribute('data-scroll', '');
      }
    }
  }
}
/**
 * 滚轮滚到一定位置时，将 sidebar-wrap 添加 fixed 样式，反之，取消样式
 */
function setFixedCls() {
  if (window.innerWidth > 770) {
    var sidebarWrap = document.querySelector('.right>.wrap')
    //fix 之后百分比宽度会失效，这里用js赋予宽度
    sidebarWrap.style.width = sidebarWrap.offsetWidth + "px"
    window.onscroll = function () {
      // 页面顶部滚进去的距离
      var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)
      // 页面底部滚进去的距离
      var htmlHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
      var scrollBottom = htmlHeight - window.innerHeight - scrollTop
      if (scrollTop < 53) {
        sidebarWrap.classList.remove('fixed')
        sidebarWrap.classList.remove('scroll-bottom')
      } else if (scrollBottom >= (190 - 38)) {
        sidebarWrap.classList.remove('scroll-bottom')
        sidebarWrap.classList.add('fixed')
      } else if (isMaxHeight()) {
        sidebarWrap.classList.remove('fixed')
        sidebarWrap.classList.add('scroll-bottom')
      }
    }
    setContentMaxHeightInPC() //设置目录最大高度(PC端)
  }
  moveTOC()
}
/**
 * 屏幕宽度小于770px时，点击锚点按钮，弹出目录框
 */
function setContentClick() {
  if (window.innerWidth <= 770) {
    var anchorBtn = $('.anchor')
    var rightDiv = $('.right')
    /**
     * 监听锚点按钮
     */
    anchorBtn.onclick = function (e) {
      e.stopPropagation()
      rightDiv.classList.add('right-show')
      anchorBtn.classList.add('anchor-hide')
    }
    //监听body，点击body，隐藏Content
    $('body').addEventListener('click', function () {
      rightDiv.classList.remove('right-show')
      anchorBtn.classList.remove('anchor-hide')
    })
    ancherPostion(anchorBtn, rightDiv)
    setContentMaxHeight()
  }
}
/////////////////////////header////////////////////////////
/**
 * clickMenu
 */
(function () {
  if (window.innerWidth <= 770) {
    var menuBtn = $('#headerMenu')
    var nav = $('#headerNav')
    var removeBtnCls = function () {
      nav.classList.remove('nav-show')
      menuBtn.classList.remove('active')
    }
    menuBtn.onclick = function (e) {
      e.stopPropagation()
      if (menuBtn.classList.contains('active')) {
        removeBtnCls()
      } else {
        nav.classList.add('nav-show')
        menuBtn.classList.add('active')
      }
    }
    $('body').addEventListener('click', removeBtnCls)
  }
}());

//////////////////////////back to top////////////////////////////
(function () {
  var backToTop = $('.back-to-top')
  window.addEventListener('scroll', function () {
    // 页面顶部滚进去的距离
    var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)
    if (scrollTop > 200) {
      backToTop.classList.add('back-to-top-show')
    } else {
      backToTop.classList.remove('back-to-top-show')
    }
  })
}());

smoothScroll.init({
  speed: 500, // Integer. How fast to complete the scroll in milliseconds
  easing: 'easeInOutCubic', // Easing pattern to use
  offset: 20, // Integer. How far to offset the scrolling anchor location in pixels
});