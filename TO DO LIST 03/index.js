      //'گرفتن المنت ها'
      const getvalue=document.getElementById("add-work")
      const btn=document.getElementById("btn")
     const listcont=document.getElementById("listcont")
     //چون اول باید المنت ساخته بشه و بعد ما بتونیم بگیریمش  این یعنی ویژگی تک رشته ای 
     // جاوااسکریپت که به
     //Asynchronous Javascript
     //معروفه و برای حل این مشکل می تونیم از 
     //callback
     //promise
     //async await
     //استفاده کنیم
      function first( callback){
// ساختن المنت ها در جاوااسکریپت و اضافه کردن آن به دام
       btn.addEventListener("click",e=>{
     const deletel=document.createElement("a")
     deletel.textContent='x'
     const elementp=document.createElement("p")
   const inpu=document.createElement("input")
   const tags=document.createElement("span")
  inpu.setAttribute("type","checkbox")
  
  elementp.append(inpu)
  elementp.append(tags)
    tags.innerHTML+=getvalue.value
    elementp.append( deletel)
   listcont.append(elementp) 
     getvalue.value=""

     callback()

  })



      }
//تابع دوم که باید بعد تابع اول اجرا بشه و بتونه المنت های رو که میخواهیم رو بگیره
   function two(){
    
  const taker=document.querySelectorAll('input[type=checkbox]')
  const span=document.querySelectorAll("span")
  const alla=document.querySelectorAll("a")

//  چون آرایه ای از المنت ها رامی گیریم به همین خاطر از فور ایچ
//استفاده می کنیم
taker.forEach(e=>{
 e.addEventListener("change",e=>{
   //دسترسی به والد وبرادر و خواهر المنت ها
   const feed=e.target.nextSibling
   const parentelem=e.target.parentElement
   const aelem=e.target.nextSibling.nextSibling
   if(e.target.checked){
     aelem.style.background="#FF0000"
     aelem.style.borderColor="black"
     parentelem.style.background="#33333"
     feed.style.textDecoration="line-through"
   }else{
     parentelem.style.background=""
     feed.style.color=""
     feed.style.textDecoration=""
     aelem.style.background=""
     console.log(e.target.checked);
   }

 })
})


alla.forEach(e=>{
e.addEventListener("click",e=>{
const checkfordelet=e.target.previousSibling.previousSibling     
if (checkfordelet.checked) {
  const e_target=e.target.parentElement
  e_target.remove()
}else if(!checkfordelet.checked){
return false
}
 

})


})
   }
//در نهایت فراخوانی تابع اول با کال بک تابع دوم
first(two)