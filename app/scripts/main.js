/*------------ javascript for the scrolling page ---------- */

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

 /* -------------------- end of javascript for the scrolling page ------------- */
 /* -------------------- Typing effect and text ------------------------------- */
var sections = [
		{	sentence: ' She is probably writing code right now'
		},
		{	sentence: ' She loves front-end development'
		},
		{	sentence: ' She is learning Node.js'
		},
		{	sentence: ' She is probably drinking coffee at this moment ;)'
		},
		{	sentence: ' Want some coffee too?'
		},
		{	sentence: ' She will learn Angular soon'
		},
		{	sentence: ' Scroll down to know more about her!'
		},
		{	sentence: ' Hire her and you will not regret!'
		},
		{	sentence: ' She loves being in a group'
		},
		{	sentence: ' She loves to travel too'
		},
		{	sentence: ' Photography is her hobby'
		},
		{	sentence: ' What are you waiting for?'
		},
		{	sentence: ' HIRE HER!'
		}
		// {	sentence: " "
		// },
	];
var i = 0;
var j = 0;
var k = 0;
var lengthSentence = 0;
var lengthArray = sections.length;
var forward = true;
// var beginning = "Web <br>Designer & Developer";
var beginning = '';
var currentPart = '';
var interval = 50; // interval letter
var opening = false;
var pauseEnd = 2500; // pause end sentence

/* ----------------------- 
    TYPING 
-------------------------*/
function writing(text){
	lengthSentence = sections[i].sentence.length;
	var body = $('body');
	if(!opening){ // first part
		setTimeout(function(){	
			if(k < beginning.length){
				if(beginning[k] === '<'){
					currentPart += ' <br id="brName">';
					k=k+4;
				}
				currentPart += beginning[k];
				text.html(currentPart);
				k++;
				writing(text);			
			}else if(k === (beginning.length)){
				currentPart += '<br>';
				text.html(currentPart);
				opening = true;
				writing(text);
			}
		},interval);
	}else if(opening){ // sentences
		setTimeout(function(){
			interval = 50;
			if(j === lengthSentence){
				forward = false;
			}
			if(j === lengthSentence-2){
				$('.original').one().addClass('onScreen');
			}
			if( j === lengthSentence-1 && forward){
				interval = pauseEnd;
			}
			if(j < lengthSentence && forward ){
				if(sections[i].sentence[j] === '&'){
					currentPart += '<strong>';
				}else if(sections[i].sentence[j] === '%'){
					currentPart += '</strong>';
				}
				else{
					currentPart += sections[i].sentence[j];
				}
				text.html(currentPart);
				j++;
			}else if(j > 0 && !forward){
				if(sections[i].sentence[j] === '&'){
					currentPart = currentPart.slice(0, - 8);
				}else if(sections[i].sentence[j] === '%'){
					currentPart = currentPart.slice(0, - 9);
				}
				else{
					currentPart = currentPart.slice(0, - 1); 
				}
				text.html(currentPart);
				j--;
			}else if(j === 0){
				forward = true;
				i++; 
			}
			if(i === lengthArray){
				i = 0;
			}
			writing(text);
		}, interval);
	}
}

// $(document).ready(function(){
// 	/*--------------------
// 		TYPING 
// 	----------------------*/
// 	var firstTimer = 8000;
// 	var text = $(".jstext");
// 	setTimeout(function(){
// 		writing(text);
// 	}, firstTimer);

// });

 /* -------------------- End of typing effects -------------------------------- */
/* -------------------- javascript for the d3 animated chart ----------------- */

var width = 440
var height = 360
var padding = {
	'top': 30,
  	'left': 30,
  	'bottom': 30,
  	'right': 30
}

var svg_node = d3.select('#svg_container').append('svg')
  				 .attr('width', width + padding.left + padding.right)
  				 .attr('height', height + padding.top + padding.bottom)
   				 .attr('calss', 'dbg-vis-border')

var vis = svg_node.append('g')
  				  .attr('transform', 'translate(' + padding.left + ',' + padding.right + ')')

var demo_data = [
  {'language': 'HTML', 'Average': '4'}, 
  {'language': 'CSS', 'Average': '4'}, 
  {'language': 'JavaScript','Average': '3.6'}, 
  {'language': 'jQuery','Average': '2.8'}, 
  {'language': 'D3.js','Average': '0.5'}, 
  {'language': 'PHP','Average': '1.5'}, 
  {'language': 'MySQL','Average': '1.3'}
]

var x_scale = d3.scale.ordinal()
  					  .domain(demo_data.map(function(d) { return d['language'] }))
  					  .rangeRoundBands([0, width])

var x_axis = d3.svg.axis().orient('bottom').scale(x_scale)
  				   .tickSize(3, 2, 0)
			    vis.append('g').attr('class', 'x-axis').call(x_axis)
  				   .attr('transform', 'translate(0,' + height + ')')

var y_scale = d3.scale.linear()
  					  .domain([0, 4])
  				   	  .range([height, 0])

var y_axis = d3.svg.axis().orient('left').scale(y_scale)
				vis.append('g').attr('class', 'y-axis').call(y_axis)

var color_scale = d3.scale.category10().domain(x_scale.domain())

var circle_container = vis.append('g').attr('id', 'vis_content')

var groups = circle_container.selectAll('g')
  			                 .data(demo_data.filter(function(d) {
	// Try to convert string to int, parseFloat() also works
	var gpa = +d['Average']
    // Write filter conditions so that the gpa is a number and in [0, 4]
    return !isNaN(gpa) && 0 <= gpa && gpa <= 4
})).enter()
   .append('g')
   .attr('transform', function(d) {
    return 'translate(' + (x_scale(d['language']) + x_scale.rangeBand() / 2 ) + ',0)' 
})
groups.append('line')
  	  .style('stroke-width', 1)
      .style('stroke', function(d) { return color_scale(d['language']) })
      .attr('x1', 0).attr('y1', function(d) { return y_scale(d['Average']) })
      .attr('x2', 0).attr('y2', height)

groups.append('circle')
      .attr('cx', 0)
      .attr('cy', function(d) { return y_scale(d['Average']) })
      .attr('r', 10)
      .style('fill', function(d) { return color_scale(d['language']) })

groups.append('text')
      .attr('class', 'value')
      .attr('x', 0)
      .attr('y', function(d) { return y_scale(d['Average']) - 15 })
      .text(function(d) { return (+d['Average']).toFixed(2) })

function filter_selection() {
	// Getting the value from the <input> with id "cut_off"
  	// Refer to HTML to find it:)
  	var lower_limit = d3.select('#cut_off').node().value
  	// languages to show: increase r for them
  	var selected = vis.selectAll('circle').filter(function(d) {
    	return d['Average'] >= lower_limit
  	})
  	var notNeeded = vis.selectAll('circle').filter(function(d) {
        // Reversed condition
        return d['Average'] < lower_limit
    })
  	selected.transition().duration(300)
    		.delay(function(d, i) { return i * 100 })
   			.attr('r', 30)
    		.transition()
    		.delay(function(d, i) { return i * 100 + 300 })
    		.attr('cy', function(d) { return y_scale(d['Average']) })
  	// Animate radius to 0 for those languages
  	notNeeded.transition()
    		 .duration(300)
     		 .attr('cy', height)
    		 .transition()
    		 .delay(300)
    		 .attr('r',0)

  	// Animate lines to grow up from the x-axis
  	circle_container.selectAll('line').filter(function(d) {
    	return d['Average'] >= lower_limit
  	}).transition().duration(300)
      .delay(function(d, i) { return i * 100 + 300 })
      .attr('y1', function(d) { return y_scale(d['Average']) })
  	// Animate lines to shrink down to the x-axis
  	circle_container.selectAll('line').filter(function(d) {
    	return d['Average'] < lower_limit
 	}).transition().duration(300)
      .attr('y1', height)
  
  	// Animate opacity to 1 for the GPA text needed
  	circle_container.selectAll('text').filter(function(d) {
    	return d['Average'] >= lower_limit
  	}).transition().duration(300)
      .delay(function(d, i) { return i * 100 + 400 })
      .attr('y', function(d) { return y_scale(d['Average']) + 5 })
     .style('opacity', 1)
  	// Animate on opacity to 0 for the GPA text not needed
  	circle_container.selectAll('text').filter(function(d) {
    	return d['Average'] < lower_limit
  	}).transition().duration(300)
      .style('opacity', 0)
}

/* option 02*/
// var drawn = false; 
// function makeBars() {

// var data = [
//       { name: 'HTML', value: 10000 },
//       { name: 'CSS', value: 9995 },
//       { name: 'JavaScript', value: 8900 },
//       { name: 'jQuery', value: 8500 },
//       { name: 'D3.js', value: 1000 },
//       { name: 'Node.js', value: 950 },
//       { name: 'PHP', value: 7500 },
//       { name: 'MySQL', value: 6500}
//     ];
// var maxValue = 10000; 

// var chartHeight = data.length * 50;
// var chartWidth = 600;
// var barWidth = 250;
// var nameWidth = 125;

// var chart = d3.select('#chart-container')
//               .attr('class', 'horizontal-bar')
//               .append('svg')
//               .attr('width', chartWidth)
//               .attr('height', chartHeight)


// chart.selectAll('rect')
//      .data(data)
//      .enter()
//      .append('rect')
//         .attr('x', nameWidth)
//         .attr('y', function(d, i) { return i * 50 + 10; })
//         .attr('width', 0)
//         .attr('height', 10)     
//         .attr('rx', 5)
//         .attr('ry', 5)
//      .transition()
//         .duration(600)
//         .attr('width', function(d) { return (d.value / maxValue) * barWidth; })

// chart.selectAll('text.labels')
//      .data(data)
//      .enter()
//      .append('text')
//        .attr('x', 0)
//        .attr('y', function(d, i) { return i * 50 + 20; })
//        .attr('width', nameWidth)
//        .attr('height', 15)
//        .text(function(d) { return d.name });

// chart.selectAll('text.values')
//      .data(data)
//      .enter()
//      .append('text')
//        .attr('x', nameWidth)
//        .attr('y', function(d, i) { return (i * 50) + 20; })
//        .attr('width', 100)
//        .attr('height', 15)
//        .text(function(d) { return d3.format(',f')(d.value) })
//      .transition()
//        .duration(600)
//        .attr('x', function(d) { return ((d.value / maxValue) * barWidth ) + nameWidth + 10; })

// }



// var $animation_elements = $('.animation-element');
// var $window = $(window);

// function check_if_in_view() {
//   var window_height = $window.height();
//   var window_top_position = $window.scrollTop();
//   var window_bottom_position = (window_top_position + window_height);
 
//   $.each($animation_elements, function() {
//     var $element = $(this);
//     var element_height = $element.outerHeight();
//     var element_top_position = $element.offset().top;
//     var element_bottom_position = (element_top_position + element_height);
 
//     //check to see if this current container is within viewport
//     if ((element_bottom_position >= window_top_position) &&
//         (element_top_position <= window_bottom_position)) {
//       if (drawn == false) {
//         $element.addClass('in-view');
//         makeBars();
//         drawn = true;
//       }
//     } else {
//       //$element.removeClass('in-view');
//     }
//   });
// }

// $window.on('scroll resize', check_if_in_view);
// $window.trigger('scroll');
 /* ------------------ end of javascript for the animated d3 chart ------------- */
