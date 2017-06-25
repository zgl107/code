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
 });
