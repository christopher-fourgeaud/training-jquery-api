/* $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/api/test/4",
    headers: { "Content-Type": "application/json"}
}).done(function (data) {
    console.log(data);
}); */

$.get({
    url: "http://127.0.0.1:8000/api/test/4",
    headers: { "Content-Type": "application/json" }
}).done(function (data) {
    console.log(data);
});

$("#form_auteur").on('submit',function (e) {
    var form = $(this);
    console.log(form.serialize());
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:8000/api/test",
        data: form.serialize(), // serializes the form's elements.
        dataType : 'json',
        success: function (data) {
            alert(data); // show response from the php script.
        }
    });
    e.preventDefault(); // avoid to execute the actual submit of the form.
});
