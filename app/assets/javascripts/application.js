// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require bootstrap-sprockets
//= require jquery.inputmask
//= require jquery.inputmask.extensions
//= require jquery.inputmask.numeric.extensions
//= require jquery.inputmask.date.extensions
//= require_tree .


$(document).ready(function(){
    $('.js_cep_selector').inputmask("99999-999");

    $('.js_cep_form').submit(function() {
        /* Do Something */
        var cep = $('.js_cep_selector').inputmask('unmaskedvalue');;
        console.log("dasdasd");
        alert("abc");
        if(cep.lenght != 8){
            $('#messages').html('Preencha o CEP corretamente');
            return false
        } else{
            return true
        }

    });
});