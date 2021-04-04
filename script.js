var r = parseInt(document.getElementById("ratio").value)/100;
var maxi = parseInt(document.getElementById("i").value);
var t = 1;var n = 200;var hp = 0;var vp = 0;var poschange = 0.1;var sa = 100;var b = 80;

function reset(){
	document.getElementById("ratio").value = 50;
	document.getElementById('titlet').innerHTML="Pithagoras Tree Type 1";
	document.getElementById("i").value = 8;
	document.getElementById("sat").value = 100;
	document.getElementById("bright").value = 80;
	r= 0.5;maxi = 8;t = 1;n = 200;hp = 0;vp = 0;sa = 100;b = 80;
}


function setup() {
	createCanvas(window.innerWidth*0.999, window.innerHeight*0.996);
	noStroke();
}


function draw() {
	window.addEventListener("wheel", event => n -= event.deltaY/2000);
	window.addEventListener('keydown', event => checkkeys(event.key));
	document.getElementById("rval").innerHTML = parseInt(r*100)+"%";
	document.getElementById("ival").innerHTML = maxi;
	background(220);
	noStroke();
	draw_square((width-n)/2+hp,height-vp,n,0,'l',1);
}



function checkkeys(key){
	switch (key){
		case "ArrowRight":
			hp += poschange;
			break;
		case "ArrowLeft":
			hp -= poschange;
			break;
		case "ArrowUp":
			vp += poschange;
			break;
		case "ArrowDown":
			vp -= poschange;
			break;
		case "a":
			t=2;
			document.getElementById('titlet').innerHTML="Pithagoras Tree Type 2";
			break;
		case "z":
			t=1;
			document.getElementById('titlet').innerHTML="Pithagoras Tree Type 1";
			break;
	}
}


function update_ratio(newratio){
	r = parseInt(newratio)/100;
}


function update_max_iterations(newi){
	maxi = parseInt(newi);
}


function update_max_iterations(newi){
	maxi = parseInt(newi);
}


function update_sat(news){
	sa = parseInt(news);
}


function update_bright(newb){
	b = parseInt(newb);
}


function draw_square(x,y,w,o,s,ci){
	if (ci <= maxi){
		var points = [[x,y]];
		points.push([x-sin(radians(o))*w,y-cos(radians(o))*w]);
		points.push([points[1][0]+cos(radians(o))*w,points[1][1]-sin(radians(o))*w]);
		points.push([x+sin(radians(90-o))*w,y-cos(radians(90-o))*w]);
		fill(color('hsb('+parseInt(360-(ci/maxi)*360)+', '+sa+'%, '+b+'%)'));
		// fill(color('hsl('+parseInt(359-(ci/maxi)*359)+', 100%, 50%)'));
		beginShape()
		for(var c = 0;c <= 3;c++){
			vertex(points[c][0],points[c][1])
		}
		endShape();
		if(s == 'l'){
			if(t==1){
				draw_square(points[2][0],points[2][1],w*sqrt(r),o+degrees(asin(sqrt(r))),'r',ci+1);
				draw_square(points[1][0],points[1][1],w*sqrt(1-r),o+(90-degrees(asin(sqrt(1-r)))),'l',ci+1);
			}if(t==2){
				draw_square(points[2][0],points[2][1],w*sqrt(r),o+degrees(asin(sqrt(r))),'r',ci+1);
				draw_square(points[1][0],points[1][1],w*sqrt(1-r),o+(90-degrees(asin(sqrt(1-r)))),'l',ci+1);
			}
		}else{
			if(t==1){
				draw_square(points[3][0],points[3][1],w*sqrt(r),o-degrees(asin(sqrt(1-r))),'r',ci+1);
				draw_square(points[2][0],points[2][1],w*sqrt(1-r),o-(90-degrees(asin(sqrt(r)))),'l',ci+1);
			}if(t==2){
				draw_square(points[3][0],points[3][1],w*sqrt(1-r),o-degrees(asin(sqrt(r))),'r',ci+1);
				draw_square(points[2][0],points[2][1],w*sqrt(r),o-(90-degrees(asin(sqrt(1-r)))),'l',ci+1);
			}
		}
	}
}

