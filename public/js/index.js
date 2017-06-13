
function sendData(){
    var data = document.getElementById('mytext').value;
    console.log(data);
    $.ajax({
        url: '/test',
        success: function(res){
            console.log(res);
            $('#characterList').html(
                '<div>'+res.character.name+'</div><br>'+
                '<div>'+res.character.type+'</div><br>'+
                '<div>'+res.character.famousQuote+'</div><br>'+
                '<div>'+res.character.yearOfAppearance+'</div><br>'
            )
        },
        method: 'POST',
        data: {data: data}
    })
}

$('#btn').click(()=>sendData());
