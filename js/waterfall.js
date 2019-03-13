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
      demo_link: '',
      img_link: '',
      github_link: 'https://github.com/gzwawj/node-demo',
      codepen_link: '',
      jsfiddle_link: '',
      title: 'node搭建的小网站demo',
      core_tech: 'nodejs',
      description: '使用node开发一个增删改的用户管理系统'
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
