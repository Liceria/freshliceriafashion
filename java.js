const header = document.QuerySelector("header");

windows.addEventlisterner ("Scroll", function(){
	header.classlist.toggle ("sticky", this.window.scrolly > 0 );
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onlick = () =>{
	menu.classlist.toggle('bx-x');
	navmenu.classlist.toggle('open');
}