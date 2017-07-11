/**
 * Created by 周广龙 on 2017/6/25 0025.
 */
 $(function(){

     //屏幕变化时,触发的事件
     function resize(){
         var windowWidth = $(window).width();
         // alert(windowWidth);
         var isSmallScreen = windowWidth < 768;

         $("#main_id > .carousel-inner > .item ").each(function(i,item){

             var $item = $(item);

             var imgSrc = isSmallScreen ? $item.data('image-xs'): $item.data('image-lg');

             $item.css('backgroundImage','url("'+imgSrc+'")');
            //我们需要小图时,尺寸等比例变化,所以小图时候,我们用img
             if(isSmallScreen){
                 $item.html('<img src="'+imgSrc+'" alt="" />');
             }

         });

     };
 $(window).on('resize',resize).trigger('resize');


 /**
  * 控制标签页的容器宽度
 */
 var $ulContainer = $('.nav-tabs');
     // 获取所有子元素的宽度和
     var width = 30; // 因为原本ul上有padding-left
     // 遍历子元素
     $ulContainer.children().each(function(index, element) {
         // console.log(element.clientWidth);
         // console.log($(element).width());
         width += element.clientWidth;
     });
     // 此时width等于所有LI的宽度总和
     // 判断当前UL的宽度是否超出屏幕，如果超出就显示横向滚动条
     if (width > $(window).width()) {

         $ulContainer
             .css('width', width)
             .parent().css('overflow-x', 'scroll');
     }

/**
 *  a点击注册事件
  */
    var $newsTitle = $('.news-title');
$("#news .nav-pills a").on('click',function(){
    //获取当前点击元素
    var $this = $(this);
    //获取对应的title值
    var title = $this.data('title');
    //将title值设置到相应的位置
    $newsTitle.text(title);
});

 });
