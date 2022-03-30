// TIME
setInterval(function(){
  const now = new Date();
  const clock = document.getElementById("clock");
  clock.innerHTML = now.toLocaleTimeString();
},1000);

// WEEK
window.setInterval(function(){
  const days =['ВОСКРЕСЕНЬЕ',"ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДА", "ЧЕТВЕРГ", "ПЯТНИЦА", "СУББОТА"];
  const now = new Date();
  const week = document.getElementById("week");
  week.innerHTML = days[now.getDay()]
},1000);

// PRELOAD
document.body.onload = function(){
  setTimeout(function(){
      var preloader = document.getElementById('page-preloader')
      if(!preloader.classList.contains('done')){
          preloader.classList.add('done')
      }
  }, 1000);
}
