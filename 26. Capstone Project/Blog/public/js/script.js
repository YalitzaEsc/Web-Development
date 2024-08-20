function makeEditable(index){
    var paragraph = document.getElementById("paragraph" + index);
    var title = document.getElementById("title" + index);
    paragraph.contentEditable = true;
    title.contentEditable = true;
    paragraph.focus();
}