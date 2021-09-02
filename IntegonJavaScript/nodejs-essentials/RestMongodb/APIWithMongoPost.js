let btnAddNote  = document.getElementById("btnAddNote");
let txtTitleInsert = document.getElementById("txtTitleInsert");
let txtContentInsert = document.getElementById("txtContentInsert");
let txtName = document.getElementById("txtName");
let txtEmail = document.getElementById("txtEmail");

btnAddNote.addEventListener('click', function () {
    SearchingAjax();
})

function SearchingAjax(){
    $(document).ready(function () {

        $.ajax({
            method: "POST",
            url: `http://localhost:3000/notes`,
            //contentType: "application/json",
            //dataType: 'json',
            //type: 'post',
            data: {

                title: txtTitleInsert.value,
                content: txtContentInsert.value


            },
            error: function(result){
                console.log("La llamada no se pudo completar")

            }
            
        });
    
    });
    txtTitleInsert.value = "";
    txtContentInsert.value = "";
}