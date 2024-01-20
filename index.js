function changeimg(filename){
    let img=document.getElementById('Idmainimg');
    img.setAttribute("src",filename);
     
   $(document).on('click','ol li',function(){
    $(this).addClass('active').siblings().removeClass('active')
   })
   }
    