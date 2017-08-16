var b0;
var b1;
var b2;
var b3;
var b4;
var b5;
var b6;
var b7;
var b8;
var b9;
var sing;

var ul;
var current_li;

var eq;
var multiply;
var del;
var plus;
var minus;
var res;
var butsin;
var butcos;

var dot;

var currentoperation;
var rez = 0;
var input;
var rs = 0;

var fl_num = false;
var fl_op = false;
var fl_eq = false;
var fl_b = false;

window.onload = function () {

	b0 = document.getElementById('b0');
	b1 = document.getElementById('b1');
	b2 = document.getElementById('b2');
	b3 = document.getElementById('b3');
	b4 = document.getElementById('b4');
	b5 = document.getElementById('b5');
	b6 = document.getElementById('b6');
	b7 = document.getElementById('b7');
	b8 = document.getElementById('b8');
	b9 = document.getElementById('b9');

	ul = document.querySelector('.list_of_operations');

	dot = document.getElementById("dot");
	sing = document.getElementById("sing");

 	eq = document.getElementById('equally');
 	multiply = document.getElementById('multiply');
 	plus = document.getElementById('plus');
 	minus = document.getElementById('minus');
 	del = document.getElementById('del');
 	res = document.getElementById("reset");
 	butcos = document.getElementById("cos");
 	butsin = document.getElementById("sin");
	
	input = document.getElementById("space");
	b0.addEventListener("click",addNumber);
	b1.addEventListener("click",addNumber);
	b2.addEventListener("click",addNumber);
	b3.addEventListener("click",addNumber);
	b4.addEventListener("click",addNumber);
	b5.addEventListener("click",addNumber);
	b6.addEventListener("click",addNumber);
	b7.addEventListener("click",addNumber);
	b8.addEventListener("click",addNumber);
	b9.addEventListener("click",addNumber);

	eq.addEventListener("click",equal);
	multiply.addEventListener("click",operation);
	del.addEventListener("click",operation);
	plus.addEventListener("click",operation);
	minus.addEventListener("click",operation);

	res.addEventListener("click",addNumber);
	dot.addEventListener("click",addNumber);
	sing.addEventListener("click",addNumber);
	butcos.addEventListener("click",addNumber);
	butsin.addEventListener("click",addNumber);

	current_li = document.createElement('li');
	ul.appendChild(current_li);

	input.value = '0';
	current_li.textContent = '0';
}

function addNumber() {
	var str;
	str = input.value;
	if((str == "0" || fl_op) && this != dot && this != sing)
	{
		str = "";
		input.value = str;
		if(fl_op){
			fl_op = false;
		} else {
			current_li.textContent = str;
		}
	}
	fl_b = false;
	switch(this)
	{
		case b0:
		input.value = input.value + 0;
		current_li.textContent += "0";
		break;

		case b1:
		input.value = input.value + 1;
		current_li.textContent += "1";
		break;

		case b2:
		input.value = input.value + 2;
		current_li.textContent += "2";
		break;

		case b3:
		input.value = input.value + 3;
		current_li.textContent += "3";
		break;

		case b4:
		input.value = input.value + 4;
		current_li.textContent += "4";
		break;

		case b5:
		input.value = input.value + 5;
		current_li.textContent += "5";
		break;

		case b6:
		input.value = input.value + 6;
		current_li.textContent += "6";
		break;

		case b7:
		input.value = input.value + 7;
		current_li.textContent += "7";
		break;

		case b8:
		input.value = input.value + 8;
		current_li.textContent += "8";
		break;

		case b9:
		input.value = input.value + 9;
		current_li.textContent += "9";
		break;

		case dot:
		if (input.value.indexOf(".") == -1 && input.value) {
			input.value = input.value + ".";
			if (input.value.charAt(0)=="0") {
				current_li.textContent += "0";
				current_li.textContent += ".";
			} else{
				current_li.textContent += ".";
			}
		}
		break;

		case sing: 
		if(input.value.charAt(0)=='-'){
			input.value = input.value.slice(1,input.value.length);
		} else {
			input.value = "-" + input.value;
		}
		break;

		case res:
			input.value = "0";
			currentoperation = null;
			current_li.textContent = '0';
			break;

		case butsin:
			input.value = Math.sin(Math.PI/180*input.value).toFixed(2);
			break;

		case butcos:
			input.value = Math.cos(Math.PI/180*input.value).toFixed(2);
			break;
	}
	fl_op = false;
	fl_num = true;
}

function operation() {
	fl_op = true;
	fl_num = false;
	fl_eq = false;
	if(!fl_b) {
 		current_li.textContent += this.textContent;
 		fl_b = true;
 	} else {
		current_li.textContent = current_li.textContent.slice(0,current_li.textContent.length - 1) + this.textContent;
	}

	if(currentoperation && input.value && fl_num) {
		equal();
		currentoperation = this;
	}
	if(currentoperation && input.value && fl_op) {
		currentoperation = this;
	}

	if(currentoperation && !input.value){
 				currentoperation = this;
 			}
 			if(!currentoperation && input.value){
 				rez = input.value;
 				input.value = "";
 				currentoperation = this;
 			}
 			if(!currentoperation && !input.value){
 				input.value = 0;
 				current_li.textContent = '0';
 				rez = 0;
 	 	 	}

 	
}

function equal() {
	if(fl_eq) {
		
		if(!currentoperation && input.value) {
 				rez = rs;
 		}

 		if(currentoperation == plus) {
 			rez = +rez + +rs;
 		}

 		if(currentoperation == minus) {
 			rez -= rs;
 		}

 		if(currentoperation == multiply) {
 			rez *= rs; 				
 		}

 		if(currentoperation == del) {
 			rez /= rs;
 		}

 		current_li.textContent += currentoperation.textContent + rs + "=" + rez;

	} else {
		rs = input.value;
		if(!currentoperation && input.value){
 				rez = input.value;
 		}

 		if(currentoperation == plus){
 			rez = +rez + +input.value;
 		}

 		if(currentoperation == minus){
 			rez -= input.value;
 		}

 		if(currentoperation == multiply){
 			rez *= input.value; 				
 		}

 		if(currentoperation == del){
 			rez /= input.value;
 		}

 		current_li.textContent += "=" + rez;
	}
	if(this == eq)
	{
		fl_eq = true;
	}
	
	current_li = document.createElement('li');
	current_li.textContent += rez;
	ul.appendChild(current_li);
	input.value = rez;

 }