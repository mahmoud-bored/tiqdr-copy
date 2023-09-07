var allCardsTitles = document.querySelectorAll('div.d-flex.align-items-center.page-num-container.hide-on-mobile > h4.font-1rem')
var cardsTitlesArr = []
allCardsTitles.forEach(elmnt =>{
  cardsTitlesArr.push(elmnt.textContent.replace(/  /g,'').replace('\n', "").replace('\n', ""))
})


var allVideoLinkCards = document.querySelectorAll("li.accordion__menu-link > button")
var allVideoTitlesArr = []

allVideoLinkCards.forEach(elmnt=>{
  allVideoTitlesArr.push(elmnt.attributes["data-title"].value)
})



var vidBtn = document.querySelectorAll("button.btn.show-youtube-modal.full-width.justify-content-start")
vidBtn.forEach(elmnt=>{
  elmnt.onclick = getLink
})
var allVidLinks = []
	var allStr = ""
function getLink(){
  console.log(document.querySelector("div > iframe#vid1_youtube_api").src)
	allVidLinks.push(document.querySelector("div > iframe#vid1_youtube_api").src.replace('controls=0', '').replace("fs=0", ""))
	for(let i = 0; i < allVideoTitlesArr.length; i++){
    allStr += `"${allVideoTitlesArr[i]}": "${allVidLinks[i]}",
            `
  }
  console.log(allStr)
}

document.onkeydown = function(e) {
    var keyCode = e.keyCode;
  console.log(keyCode)
    if(keyCode == 27){
			document.elementFromPoint(20, 25).click();
    };
}














