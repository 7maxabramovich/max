//*************   responsive topnav  *********//
function myFunction1() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}






/*---------   document ready   -----------*/

$(document).ready(function() {

//*************   Sticky menu on scroll     *********//

var stickyClass = document.querySelector('.menu').offsetTop;

$(window).scroll(function() {
  if (window.pageYOffset >= stickyClass) {
    navbar.classList.add("sticky");
	$('.tab-container').addClass("sticky_next");
  } else {
    navbar.classList.remove("sticky");
	$('.tab-container').removeClass("sticky_next");
  }
});

//***********  form  ***********//


// let form = document.getElementById('submitForm');
// let users = [];
//
//
// let deleteElement = e => {
// 		if($(e.target).hasClass('remove-btn')) {
// 				////Удаление нужного элемента из users
// 		}
// };
//
//
// let renderUsers = users => {
// 		let htmlStr = ``;
// 		for(let index in users) {
// 				htmlStr += `<tr>
// 						<td>${+index+1}</td>
// 						<td>${users[index].firstName}</td>
// 						<td>${users[index].email}</td>
// 						<td>${users[index].age}</td>
// 						<td><img src="${users[index].picture}"></td>
// 						<td><button class="remove-btn">Remove</button></td>
// 				</tr>`;
// 		}
// 		$('#firstName, #email, #age, #picture').val('');
// 		$('tbody').html(htmlStr);
// };
//
// let addUser = e => {
// 		e.preventDefault();
// 		console.log('We are starting...');
// 		let userObject = {
// 				firstName: $('#firstName').val(),
// 				email: $('#email').val(),
// 				age: +$('#age').val(),
// 				picture: $('#picture').val()
// 		};
// 		if(!userObject.firstName || !userObject.email || !userObject.age || !userObject.picture) {
// 				//// alert('Заполните все поля');
// 				return;
// 		}
// 		users.push(userObject);
// 		renderUsers(users);
// };
//
//
// $('table tbody').on('click', deleteElement);
//
// $('#submitBtn').on('click', addUser);

function Add() {

var name = document.getElementById('firstName').value;
var age_1 = document.getElementById('age').value;

if(name && age_1) {

var tr = document.createElement('tr');

var td1 = document.createElement('td');
var td2 = document.createElement('td');
var td3 = document.createElement('td');

var text1 = document.createTextNode(name);
var text2 = document.createTextNode(age_1);
var text3 = document.createElement('button');
var buttext = document.createTextNode('delete');
var atr = document.createAttribute('onclick');
atr.value = 'deleteRow(this);';
text3.appendChild(buttext);
text3.setAttributeNode(atr);

td1.appendChild(text1);
td2.appendChild(text2);
td3.appendChild(text3);

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);

var table = document.getElementById('table');
table.appendChild(tr);
console.log('added');
	}
}

function delAll() {
	var table = document.getElementById('table');

	for(var i = table.rows.length - 1; i > 0; i--) {
		table.deleteRow(i);
	}
}

function deleteRow(r) {
	var i = r.parentNode.parentNode.rowIndex;
	document.getElementById('table').deleteRow(i);
}

//**********  spoiler  ************//

$(function () {
	$('.spoiler-body').hide(300);
	$(document).on('click','.spoiler-head',function (e) {
		e.preventDefault()
		$(this).parents('.spoiler-wrap').toggleClass("active").find('.spoiler-body').slideToggle();
	})
})

//*************   tabs   *********//


$("#cont > div").hide(); // Initially hide all content
$("#tabs li:first").attr("id","current"); // Activate first tab
$("#cont div:first").fadeIn(); // Show first tab content

$('#tabs a').click(function(e) {
	e.preventDefault();
	$("#cont > div").hide(); //Hide all content
	$("#tabs li").attr("id",""); //Reset id's
	$(this).parent().attr("id","current"); // Activate this
	$('#' + $(this).attr('title')).fadeIn(); // Show content for current tab
});



//*************   slick-slider   *********//


  $('.slick-slider').slick({
	autoplay: false,
	speed: 800,
	autoplaySpeed: 2000,
	arrows: false,
	dots: true,
	adaptiveHeight: true,
	infinite: true,
	slidesToShow: 4, 
	slidesToScroll: 4,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToScroll: 3,
			slidesToShow: 3
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToScroll: 2,
			slidesToShow: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToScroll: 1,
			slidesToShow: 1
		  }
		}
	]
  });


//*************   fancybox   *********//


$(".gallery a").fancybox(); 


//*************   accordion   *********//

$( function() {
	$( "#accordion" ).accordion({
		active: false,
		collapsible: true
	});
});

//*************   accordion2   *********//

$(function($) {   
	$('.spoiler-header1').click(function() {
		$(this).next('.spoiler-body1').slideToggle();
	});
});

//*************        *********//




//*************    end document ready    *********//
});