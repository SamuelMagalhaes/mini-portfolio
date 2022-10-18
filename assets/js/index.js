const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  tab.addEventListener("click", function(){

    if(tab.classList.contains("selected")){
      return;
    }

   selectTab(tab);
   showInfo(tab);

  })
})

function selectTab(tab){
  const tabSelected = document.querySelector(".tab.selected")
  tabSelected.classList.remove("selected")
  tab.classList.add("selected")

  const selectedInfo = document.querySelector(".info.selected")
  selectedInfo.classList.remove("selected")
}

function showInfo(tab){
  const elementId = `info-${tab.id}`
  const showInfo = document.getElementById(elementId)
  
  showInfo.classList.add("selected")
}