var body = document.getElementsByTagName('body')[0];
var a = document.getElementsByTagName('a');
var dark = document.getElementById('dark');
dark.addEventListener('click', function(){
    dark.classList.toggle('active');
    body.classList.toggle('dark')
});