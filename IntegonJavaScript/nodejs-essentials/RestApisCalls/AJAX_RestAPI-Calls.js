let txt1 = document.getElementById("txt1");
let btn1 = document.getElementById("btn1");
let txtName = document.getElementById("txtName");
let txtEmail = document.getElementById("txtEmail");


btn1.addEventListener('click', function () {
    SearchingAjax();
})

function SearchingAjax(){
    $(document).ready(function () {

        $.ajax({
            url: `https://jsonplaceholder.typicode.com/users/${txt1.value}`,
            contentType: "application/json",
            dataType: 'json',
            type: 'get',
            success: function (result) {
                console.log(txt1.textContent);
                txtName.value = result.name;
                txtEmail.value = result.email;

                //$("#txtNombre").val(result.name);
                ///$("#txtEmail").val(result.email);
            },
            error: function(result){
                console.log("La llamada no se pudo completar")
                txtName.value = "Not Found";
                txtEmail.value = "Not Found";
            }
            
        });
    
    });

}




