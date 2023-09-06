with open('./test1Page.htm', 'rb+') as fh:
    fh.seek(-15, 2)
    fh.truncate()
with open('./test1Page.htm', 'a') as fh:
    fh.write('''<script>
    var answerT = document.querySelectorAll("div.main-content-answer-input > label.content-answer-input > i")

    answerT.forEach(elmnt =>{
    if(elmnt.classList.contains('color-success')){
        elmnt.style.width = "10px"
        elmnt.style.height = "10px"
        elmnt.style.backgroundColor = "#77c13a"
        elmnt.style.borderRadius = "100%"
    }else if(elmnt.classList.contains('color-danger')){
        elmnt.style.width = "10px"
        elmnt.style.height = "10px"
        elmnt.style.backgroundColor = "#d23430"
        elmnt.style.borderRadius = "100%"
    }
    })
    var headerEdits = document.querySelector("div.page-section.top-header")
    headerEdits.style.position = "sticky"
    headerEdits.style.top = false
    // document.querySelector('#header').removeChild()
    document.querySelector('#header').remove()
</script>
</body>
</html>
''')