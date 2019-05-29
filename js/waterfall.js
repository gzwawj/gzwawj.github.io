/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

  /**
     * 内容JSON
     */
  var demoContent = [
    {
      demo_link: 'https://output.jsbin.com/kinijon/',
      img_link: 'https://raw.githubusercontent.com/gzwawj/html-css-js/master/calculate/img/demoimg.jpg',
      github_link: 'https://github.com/gzwawj/html-css-js/tree/master/calculate',
      codepen_link: 'https://codepen.io/gzwawj/pen/byKpWK',
      jsfiddle_link: '',
      title: 'calculate比例',
      core_tech: 'html,css,js',
      description: '给出宽度或者高度，快速计算比例结果'
    },
    {
      demo_link: 'https://output.jsbin.com/yuyufaz',
      img_link: 'https://raw.githubusercontent.com/gzwawj/html-css-js/master/9x9Table/img/demoimg.jpg',
      github_link: 'https://github.com/gzwawj/html-css-js/tree/master/9x9Table',
      codepen_link: 'https://codepen.io/gzwawj/pen/byKwYq',
      jsfiddle_link: '',
      title: '九九乘法表',
      core_tech: 'html,css,js',
      description: '九九乘法表'
    },
    {
      demo_link: 'https://output.jsbin.com/nojoquf',
      img_link: 'https://raw.githubusercontent.com/gzwawj/html-css-js/master/ascii/img/demoimg.jpg',
      github_link: 'https://github.com/gzwawj/html-css-js/tree/master/ascii',
      codepen_link: 'https://codepen.io/gzwawj/pen/RmJNgP',
      jsfiddle_link: '',
      title: 'ascii转换',
      core_tech: 'html,css,js',
      description: '输入字符转换为ascii，二进制，八进制，十进制，十六进制'
    },
    {
      demo_link: 'https://output.jsbin.com/giqodir/',
      img_link: 'https://raw.githubusercontent.com/gzwawj/html-css-js/master/canvasClock/img/demoimg.jpg',
      github_link: 'https://github.com/gzwawj/html-css-js/tree/master/canvasClock',
      codepen_link: 'https://codepen.io/gzwawj/pen/xNzOKq',
      jsfiddle_link: '',
      title: 'canvas时钟',
      core_tech: 'html,css,js',
      description: '使用canvas创建的心形动画时钟'
    },
    {
      demo_link: 'https://output.jsbin.com/huhusor/',
      img_link: 'https://raw.githubusercontent.com/gzwawj/html-css-js/master/canvasDisc/img/demoimg.jpg',
      github_link: 'https://github.com/gzwawj/html-css-js/tree/master/canvasDisc',
      codepen_link: 'https://codepen.io/gzwawj/pen/JqZXzE',
      jsfiddle_link: '',
      title: 'Canvas圆盘抽奖',
      core_tech: 'html,css,js',
      description: 'Canvas圆盘抽奖'
    },
    {
      demo_link: 'https://output.jsbin.com/sacunit',
      img_link: 'https://raw.githubusercontent.com/gzwawj/html-css-js/master/createQrcode/img/demoimg.jpg',
      github_link: 'https://github.com/gzwawj/html-css-js/tree/master/createQrcode',
      codepen_link: 'https://codepen.io/gzwawj/pen/JqZbBR',
      jsfiddle_link: '',
      title: 'js生成二维码',
      core_tech: 'html,css,js',
      description: 'js生成二维码,可以自定义输入内容'
    },
    {
      demo_link: 'https://output.jsbin.com/galusin/',
      img_link: 'https://raw.githubusercontent.com/gzwawj/html-css-js/master/css3-3D/img/demoimg.jpg',
      github_link: 'https://github.com/gzwawj/html-css-js/tree/master/css3-3D',
      codepen_link: 'https://codepen.io/gzwawj/pen/PvazZX',
      jsfiddle_link: '',
      title: 'css3原生3D',
      core_tech: 'html,css,js',
      description: '使用css3原生代码创建3D效果'
    },
    {
      demo_link: 'https://output.jsbin.com/nucupiw',
      img_link: 'https://raw.githubusercontent.com/gzwawj/html-css-js/master/fanMenu/img/demoimg.jpg',
      github_link: 'https://github.com/gzwawj/html-css-js/tree/master/fanMenu',
      codepen_link: 'https://codepen.io/gzwawj/pen/KLeNVx',
      jsfiddle_link: '',
      title: '纯css扇形菜单',
      core_tech: 'html,css,js',
      description: '纯css扇形菜单'
    },
    {
      demo_link: 'https://output.jsbin.com/vayenab',
      img_link: 'https://raw.githubusercontent.com/gzwawj/html-css-js/master/fileCreateAndDown/img/demoimg.jpg',
      github_link: 'https://github.com/gzwawj/html-css-js/tree/master/fileCreateAndDown',
      codepen_link: 'https://codepen.io/gzwawj/pen/pmKNoO',
      jsfiddle_link: '',
      title: '创建文件与下载',
      core_tech: 'html,css,js',
      description: '通过js创建文件与下载'
    },
    {
      demo_link: 'https://output.jsbin.com/muyotub',
      img_link: 'https://raw.githubusercontent.com/gzwawj/html-css-js/master/jsPage/img/demoimg.jpg',
      github_link: 'https://github.com/gzwawj/html-css-js/tree/master/jsPage',
      codepen_link: 'https://codepen.io/gzwawj/pen/qGKNgy',
      jsfiddle_link: '',
      title: 'js实现分页',
      core_tech: 'html,css,js',
      description: 'js实现分页'
    },
    {
      demo_link: 'https://codepen.io/gzwawj/pen/BeVpav',
      img_link: 'https://raw.githubusercontent.com/gzwawj/html-css-js/master/rightMenu/img/demoimg.jpg',
      github_link: 'https://github.com/gzwawj/html-css-js/tree/master/rightMenu',
      codepen_link: 'https://codepen.io/gzwawj/pen/BeVpav',
      jsfiddle_link: '',
      title: 'js右键菜单',
      core_tech: 'html,css,js',
      description: 'js右键菜单'
    },
    {
      demo_link: 'https://output.jsbin.com/jeyigen',
      img_link: 'https://raw.githubusercontent.com/gzwawj/html-css-js/master/roller/img/demoimg.jpg',
      github_link: 'https://github.com/gzwawj/html-css-js/tree/master/roller',
      codepen_link: 'https://codepen.io/gzwawj/pen/eaKBXN',
      jsfiddle_link: '',
      title: '鼠标滚轮控制图片大小',
      core_tech: 'html,css,js',
      description: '鼠标滚轮控制图片大小'
    },
    {
      demo_link: 'https://output.jsbin.com/vijumir',
      img_link: 'https://raw.githubusercontent.com/gzwawj/html-css-js/master/scroll/img/demoimg.jpg',
      github_link: 'https://github.com/gzwawj/html-css-js/tree/master/scroll',
      codepen_link: 'https://codepen.io/gzwawj/pen/BeVQwx',
      jsfiddle_link: '',
      title: '滚动条在底部',
      core_tech: 'html,css,js',
      description: '随着内容的增多，滚动条会一直在在底部'
    },
    {
      demo_link: 'https://output.jsbin.com/hujuciv',
      img_link: 'https://raw.githubusercontent.com/gzwawj/html-css-js/master/sinAnimation/img/demoimg.jpg',
      github_link: 'https://github.com/gzwawj/html-css-js/tree/master/sinAnimation',
      codepen_link: 'https://codepen.io/gzwawj/pen/KLegav',
      jsfiddle_link: '',
      title: 'sin绘制动画',
      core_tech: 'html,css,js',
      description: '通过sin函数绘制动画效果，实现变化快慢的不同'
    },
    {
      demo_link: 'https://output.jsbin.com/wivexom',
      img_link: 'https://raw.githubusercontent.com/gzwawj/html-css-js/master/snake/img/demoimg.jpg',
      github_link: 'https://github.com/gzwawj/html-css-js/tree/master/snake',
      codepen_link: 'https://codepen.io/gzwawj/pen/YbvpZN',
      jsfiddle_link: '',
      title: '游戏贪吃蛇',
      core_tech: 'html,css,js',
      description: 'js代码实现的游戏贪吃蛇'
    }
  ];

  contentInit(demoContent) //内容初始化
  waitImgsLoad() //等待图片加载，并执行布局初始化
}());

/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
  var htmlStr = ''
  for (var i = 0; i < content.length; i++) {
    htmlStr += '<div class="grid-item">';
    htmlStr += '   <a class="a-img" href="' + content[i].demo_link + '">'
    if(content[i].img_link){
      htmlStr += '       <img src="' + content[i].img_link + '">'
    }
    htmlStr += '   </a>'
    htmlStr += '   <h3 class="demo-title">'
    htmlStr += '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>'
    htmlStr += '   </h3>'
    htmlStr += '   <p>主要技术：' + content[i].core_tech + '</p>'
    htmlStr += '   <p>' + content[i].description + '</p>'
    htmlStr += '   <p>'
    if(content[i].github_link){
      htmlStr += '       <a href="' + content[i].github_link + '"><i class="fa fa-github" aria-hidden="true"></i></a>'
    }
    if(content[i].codepen_link){
      htmlStr += '       <a href="' + content[i].codepen_link + '"><i class="fa fa-codepen" aria-hidden="true"></i></a>'
    }
    if(content[i].jsfiddle_link){
      htmlStr += '       <a href="' + content[i].jsfiddle_link + '"><i class="fa fa-jsfiddle" aria-hidden="true"></i></a>'
    }
    htmlStr += '   </p>'
    htmlStr += '</div>'
  }
  var grid = document.querySelector('.grid')
  grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
  var imgs = document.querySelectorAll('.grid img')
  var totalImgs = imgs.length
  var count = 0
  //console.log(imgs)
  for (var i = 0; i < totalImgs; i++) {
    if (imgs[i].complete) {
      //console.log('complete');
      count++
    } else {
      imgs[i].onload = function() {
        // alert('onload')
        count++
        //console.log('onload' + count)
        if (count == totalImgs) {
          //console.log('onload---bbbbbbbb')
          initGrid()
        }
      }
    }
  }
  if (count == totalImgs) {
    //console.log('---bbbbbbbb')
    initGrid()
  }
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
  var msnry = new Masonry('.grid', {
    // options
    itemSelector: '.grid-item',
    columnWidth: 250,
    isFitWidth: true,
    gutter: 20
  })
}
