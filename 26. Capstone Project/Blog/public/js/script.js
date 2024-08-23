$(document).on("click", ".edit", function() {

    var id = $(this).attr("id");

    var editableTitle = document.getElementById("title-" + id);
    editableTitle.setAttribute("contenteditable", "true");

    var editableParagraph = document.getElementById("paragraph-" + id);
    editableParagraph.setAttribute("contenteditable", "true");
    editableParagraph.focus();
    
    });
    

$(document).on("click", ".delete", function() {
    var id = $(this).attr("id");

    document.getElementById("title-" + id).remove();
    document.getElementById("paragraph-" + id).remove();
    document.getElementById("edit-" + id).remove();
    document.getElementById(id).remove();
    
    
})