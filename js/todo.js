$(document).ready(function() {
  $('#addItem').on('click',addItem);
  $('#todos').on('change','.completeItem',completeItem);
  $('#todos').on('click','.deleteItem',deleteItem);
  $('#todos').on('click','.todoText',startEditing);
  $('#todos').on('click','.saveItem',stopEditing);
  $('#newToDo').on('keypress',function(event){
    if(event.which===13){
      addItem();
      event.preventDefault();
    }
  });

  function startEditing(event) {
    var taskLi= $(this).parent();
    var currentText= taskLi.find('.todoText').text();
    taskLi.find('.editText').val(currentText);
    taskLi.find('.editText').show();
    taskLi.find('.saveItem').show();
    taskLi.find('.todoText').hide();
  }

  function stopEditing(event) {
    $(this).hide();
    var taskLi=$(this).parent();
    var newValue=taskLi.find('.editText').val();
    taskLi.find('.editText').hide();
    taskLi.find('.todoText').text(newValue);
    taskLi.find('.todoText').show();
  }

  function addItem(){
    var newTodoText= $('#newToDo').val();
    $('#todos').append('<li><input class="completeItem" type="checkbox"><span class="todoText">'+newTodoText+
    '</span><input type="text" class="editText"><button class="btn btn-success saveItem">save</button><span class="deleteItem glyphicon glyphicon-trash"></span></li>');
    $('#newToDo').val("");
  }

  function deleteItem() {
    $(this).parent().remove();
  }

  function completeItem() {
    $(this).parent().toggleClass('done');
  }
  var textToSave='';
  function saveItem(){
    textToSave+=document.getElementById('todos').innerHTML;
    alert("textToSave");
  }
});
