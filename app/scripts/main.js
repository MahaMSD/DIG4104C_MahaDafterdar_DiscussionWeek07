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

// var width = 440
// var height = 360
// var padding = {
// 	'top': 30,
//   	'left': 30,
//   	'bottom': 30,
//   	'right': 30
// }

// var svg_node = d3.select('#svg_container').append('svg')
//   				 .attr('width', width + padding.left + padding.right)
//   				 .attr('height', height + padding.top + padding.bottom)
//    				 .attr('calss', 'dbg-vis-border')

// var vis = svg_node.append('g')
//   				  .attr('transform', 'translate(' + padding.left + ',' + padding.right + ')')

// var demo_data = [
//   {'language': 'HTML', 'Average': '4'}, 
//   {'language': 'CSS', 'Average': '4'}, 
//   {'language': 'JavaScript','Average': '3.6'}, 
//   {'language': 'jQuery','Average': '2.8'}, 
//   {'language': 'D3.js','Average': '0.5'}, 
//   {'language': 'PHP','Average': '1.5'}, 
//   {'language': 'MySQL','Average': '1.3'}
// ]

// var x_scale = d3.scale.ordinal()
//   					  .domain(demo_data.map(function(d) { return d['language'] }))
//   					  .rangeRoundBands([0, width])

// var x_axis = d3.svg.axis().orient('bottom').scale(x_scale)
//   				   .tickSize(3, 2, 0)
// 			    vis.append('g').attr('class', 'x-axis').call(x_axis)
//   				   .attr('transform', 'translate(0,' + height + ')')

// var y_scale = d3.scale.linear()
//   					  .domain([0, 4])
//   				   	  .range([height, 0])

// var y_axis = d3.svg.axis().orient('left').scale(y_scale)
// 				vis.append('g').attr('class', 'y-axis').call(y_axis)

// var color_scale = d3.scale.category10().domain(x_scale.domain())

// var circle_container = vis.append('g').attr('id', 'vis_content')

// var groups = circle_container.selectAll('g')
//   			                 .data(demo_data.filter(function(d) {
// 	// Try to convert string to int, parseFloat() also works
// 	var gpa = +d['Average']
//     // Write filter conditions so that the gpa is a number and in [0, 4]
//     return !isNaN(gpa) && 0 <= gpa && gpa <= 4
// })).enter()
//    .append('g')
//    .attr('transform', function(d) {
//     return 'translate(' + (x_scale(d['language']) + x_scale.rangeBand() / 2 ) + ',0)' 
// })
// groups.append('line')
//   	  .style('stroke-width', 1)
//       .style('stroke', function(d) { return color_scale(d['language']) })
//       .attr('x1', 0).attr('y1', function(d) { return y_scale(d['Average']) })
//       .attr('x2', 0).attr('y2', height)

// groups.append('circle')
//       .attr('cx', 0)
//       .attr('cy', function(d) { return y_scale(d['Average']) })
//       .attr('r', 10)
//       .style('fill', function(d) { return color_scale(d['language']) })

// groups.append('text')
//       .attr('class', 'value')
//       .attr('x', 0)
//       .attr('y', function(d) { return y_scale(d['Average']) - 15 })
//       .text(function(d) { return (+d['Average']).toFixed(2) })

// function filter_selection() {
// 	// Getting the value from the <input> with id "cut_off"
//   	// Refer to HTML to find it:)
//   	var lower_limit = d3.select('#cut_off').node().value
//   	// languages to show: increase r for them
//   	var selected = vis.selectAll('circle').filter(function(d) {
//     	return d['Average'] >= lower_limit
//   	})
//   	var notNeeded = vis.selectAll('circle').filter(function(d) {
//         // Reversed condition
//         return d['Average'] < lower_limit
//     })
//   	selected.transition().duration(300)
//     		.delay(function(d, i) { return i * 100 })
//    			.attr('r', 30)
//     		.transition()
//     		.delay(function(d, i) { return i * 100 + 300 })
//     		.attr('cy', function(d) { return y_scale(d['Average']) })
//   	// Animate radius to 0 for those languages
//   	notNeeded.transition()
//     		 .duration(300)
//      		 .attr('cy', height)
//     		 .transition()
//     		 .delay(300)
//     		 .attr('r',0)

//   	// Animate lines to grow up from the x-axis
//   	circle_container.selectAll('line').filter(function(d) {
//     	return d['Average'] >= lower_limit
//   	}).transition().duration(300)
//       .delay(function(d, i) { return i * 100 + 300 })
//       .attr('y1', function(d) { return y_scale(d['Average']) })
//   	// Animate lines to shrink down to the x-axis
//   	circle_container.selectAll('line').filter(function(d) {
//     	return d['Average'] < lower_limit
//  	}).transition().duration(300)
//       .attr('y1', height)
  
//   	// Animate opacity to 1 for the GPA text needed
//   	circle_container.selectAll('text').filter(function(d) {
//     	return d['Average'] >= lower_limit
//   	}).transition().duration(300)
//       .delay(function(d, i) { return i * 100 + 400 })
//       .attr('y', function(d) { return y_scale(d['Average']) + 5 })
//      .style('opacity', 1)
//   	// Animate on opacity to 0 for the GPA text not needed
//   	circle_container.selectAll('text').filter(function(d) {
//     	return d['Average'] < lower_limit
//   	}).transition().duration(300)
//       .style('opacity', 0)
// }

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

// option 03
/*!
 * @license Open source under BSD 2-clause (http://choosealicense.com/licenses/bsd-2-clause/)
 * Copyright (c) 2015, Curtis Bratton
 * All rights reserved.
 *
 * Liquid Fill Gauge v1.1
 */
function liquidFillGaugeDefaultSettings(){
    return {
        minValue: 0, // The gauge minimum value.
        maxValue: 100, // The gauge maximum value.
        circleThickness: 0.05, // The outer circle thickness as a percentage of it's radius.
        circleFillGap: 0.05, // The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius.
        circleColor: '#178BCA', // The color of the outer circle.
        waveHeight: 0.05, // The wave height as a percentage of the radius of the wave circle.
        waveCount: 1, // The number of full waves per width of the wave circle.
        waveRiseTime: 1000, // The amount of time in milliseconds for the wave to rise from 0 to it's final height.
        waveAnimateTime: 18000, // The amount of time in milliseconds for a full wave to enter the wave circle.
        waveRise: true, // Control if the wave should rise from 0 to it's full height, or start at it's full height.
        waveHeightScaling: true, // Controls wave size scaling at low and high fill percentages. When true, wave height reaches it's maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appear totally full or empty when near it's minimum or maximum fill.
        waveAnimate: true, // Controls if the wave scrolls or is static.
        waveColor: '#178BCA', // The color of the fill wave.
        waveOffset: 0, // The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave.
        textVertPosition: .5, // The height at which to display the percentage text withing the wave circle. 0 = bottom, 1 = top.
        textSize: 1, // The relative height of the text to display in the wave circle. 1 = 50%
        valueCountUp: true, // If true, the displayed value counts up from 0 to it's final value upon loading. If false, the final value is displayed.
        displayPercent: true, // If true, a % symbol is displayed after the value.
        textColor: '#045681', // The color of the value text when the wave does not overlap it.
        waveTextColor: '#A4DBf8' // The color of the value text when the wave overlaps it.
    };
}

function loadLiquidFillGauge(elementId, value, config) {
    if(config == null) config = liquidFillGaugeDefaultSettings();

    var gauge = d3.select('#' + elementId);
    var radius = Math.min(parseInt(gauge.style('width')), parseInt(gauge.style('height')))/2;
    var locationX = parseInt(gauge.style('width'))/2 - radius;
    var locationY = parseInt(gauge.style('height'))/2 - radius;
    var fillPercent = Math.max(config.minValue, Math.min(config.maxValue, value))/config.maxValue;

    var waveHeightScale;
    if(config.waveHeightScaling){
        waveHeightScale = d3.scale.linear()
            .range([0,config.waveHeight,0])
            .domain([0,50,100]);
    } else {
        waveHeightScale = d3.scale.linear()
            .range([config.waveHeight,config.waveHeight])
            .domain([0,100]);
    }

    var textPixels = (config.textSize*radius/2);
    var textFinalValue = parseFloat(value).toFixed(2);
    var textStartValue = config.valueCountUp?config.minValue:textFinalValue;
    var percentText = config.displayPercent?'%':'';
    var circleThickness = config.circleThickness * radius;
    var circleFillGap = config.circleFillGap * radius;
    var fillCircleMargin = circleThickness + circleFillGap;
    var fillCircleRadius = radius - fillCircleMargin;
    var waveHeight = fillCircleRadius*waveHeightScale(fillPercent*100);

    var waveLength = fillCircleRadius*2/config.waveCount;
    var waveClipCount = 1+config.waveCount;
    var waveClipWidth = waveLength*waveClipCount;

    // Rounding functions so that the correct number of decimal places is always displayed as the value counts up.
    var textRounder = function(value){ return Math.round(value); };
    if(parseFloat(textFinalValue) != parseFloat(textRounder(textFinalValue))){
        textRounder = function(value){ return parseFloat(value).toFixed(1); };
    }
    if(parseFloat(textFinalValue) != parseFloat(textRounder(textFinalValue))){
        textRounder = function(value){ return parseFloat(value).toFixed(2); };
    }

    // Data for building the clip wave area.
    var data = [];
    for(var i = 0; i <= 40*waveClipCount; i++){
        data.push({x: i/(40*waveClipCount), y: (i/(40))});
    }

    // Scales for drawing the outer circle.
    var gaugeCircleX = d3.scale.linear().range([0,2*Math.PI]).domain([0,1]);
    var gaugeCircleY = d3.scale.linear().range([0,radius]).domain([0,radius]);

    // Scales for controlling the size of the clipping path.
    var waveScaleX = d3.scale.linear().range([0,waveClipWidth]).domain([0,1]);
    var waveScaleY = d3.scale.linear().range([0,waveHeight]).domain([0,1]);

    // Scales for controlling the position of the clipping path.
    var waveRiseScale = d3.scale.linear()
        // The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
        // such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
        // circle at 100%.
        .range([(fillCircleMargin+fillCircleRadius*2+waveHeight),(fillCircleMargin-waveHeight)])
        .domain([0,1]);
    var waveAnimateScale = d3.scale.linear()
        .range([0, waveClipWidth-fillCircleRadius*2]) // Push the clip area one full wave then snap back.
        .domain([0,1]);

    // Scale for controlling the position of the text within the gauge.
    var textRiseScaleY = d3.scale.linear()
        .range([fillCircleMargin+fillCircleRadius*2,(fillCircleMargin+textPixels*0.7)])
        .domain([0,1]);

    // Center the gauge within the parent SVG.
    var gaugeGroup = gauge.append('g')
        .attr('transform','translate('+locationX+','+locationY+')');

    // Draw the outer circle.
    var gaugeCircleArc = d3.svg.arc()
        .startAngle(gaugeCircleX(0))
        .endAngle(gaugeCircleX(1))
        .outerRadius(gaugeCircleY(radius))
        .innerRadius(gaugeCircleY(radius-circleThickness));
    gaugeGroup.append('path')
        .attr('d', gaugeCircleArc)
        .style('fill', config.circleColor)
        .attr('transform','translate('+radius+','+radius+')');

    // Text where the wave does not overlap.
    var text1 = gaugeGroup.append('text')
        .text(textRounder(textStartValue) + percentText)
        .attr('class', 'liquidFillGaugeText')
        .attr('text-anchor', 'middle')
        .attr('font-size', textPixels + 'px')
        .style('fill', config.textColor)
        .attr('transform','translate('+radius+','+textRiseScaleY(config.textVertPosition)+')');

    // The clipping wave area.
    var clipArea = d3.svg.area()
        .x(function(d) { return waveScaleX(d.x); } )
        .y0(function(d) { return waveScaleY(Math.sin(Math.PI*2*config.waveOffset*-1 + Math.PI*2*(1-config.waveCount) + d.y*2*Math.PI));} )
        .y1(function(d) { return (fillCircleRadius*2 + waveHeight); } );
    var waveGroup = gaugeGroup.append('defs')
        .append('clipPath')
        .attr('id', 'clipWave' + elementId);
    var wave = waveGroup.append('path')
        .datum(data)
        .attr('d', clipArea)
        .attr('T', 0);

    // The inner circle with the clipping wave attached.
    var fillCircleGroup = gaugeGroup.append('g')
        .attr('clip-path', 'url(#clipWave' + elementId + ')');
    fillCircleGroup.append('circle')
        .attr('cx', radius)
        .attr('cy', radius)
        .attr('r', fillCircleRadius)
        .style('fill', config.waveColor);

    // Text where the wave does overlap.
    var text2 = fillCircleGroup.append('text')
        .text(textRounder(textStartValue) + percentText)
        .attr('class', 'liquidFillGaugeText')
        .attr('text-anchor', 'middle')
        .attr('font-size', textPixels + 'px')
        .style('fill', config.waveTextColor)
        .attr('transform','translate('+radius+','+textRiseScaleY(config.textVertPosition)+')');

    // Make the value count up.
    if(config.valueCountUp){
        var textTween = function(){
            var i = d3.interpolate(this.textContent, textFinalValue);
            return function(t) { this.textContent = textRounder(i(t)) + percentText; }
        };
        text1.transition()
            .duration(config.waveRiseTime)
            .tween('text', textTween);
        text2.transition()
            .duration(config.waveRiseTime)
            .tween('text', textTween);
    }

    // Make the wave rise. wave and waveGroup are separate so that horizontal and vertical movement can be controlled independently.
    var waveGroupXPosition = fillCircleMargin+fillCircleRadius*2-waveClipWidth;
    if(config.waveRise){
        waveGroup.attr('transform','translate('+waveGroupXPosition+','+waveRiseScale(0)+')')
            .transition()
            .duration(config.waveRiseTime)
            .attr('transform','translate('+waveGroupXPosition+','+waveRiseScale(fillPercent)+')')
            .each('start', function(){ wave.attr('transform','translate(1,0)'); }); // This transform is necessary to get the clip wave positioned correctly when waveRise=true and waveAnimate=false. The wave will not position correctly without this, but it's not clear why this is actually necessary.
    } else {
        waveGroup.attr('transform','translate('+waveGroupXPosition+','+waveRiseScale(fillPercent)+')');
    }

    if(config.waveAnimate) animateWave();

    function animateWave() {
        wave.attr('transform','translate('+waveAnimateScale(wave.attr('T'))+',0)');
        wave.transition()
            .duration(config.waveAnimateTime * (1-wave.attr('T')))
            .ease('linear')
            .attr('transform','translate('+waveAnimateScale(1)+',0)')
            .attr('T', 1)
            .each('end', function(){
                wave.attr('T', 0);
                animateWave(config.waveAnimateTime);
            });
    }

    function GaugeUpdater(){
        this.update = function(value){
            var newFinalValue = parseFloat(value).toFixed(2);
            var textRounderUpdater = function(value){ return Math.round(value); };
            if(parseFloat(newFinalValue) != parseFloat(textRounderUpdater(newFinalValue))){
                textRounderUpdater = function(value){ return parseFloat(value).toFixed(1); };
            }
            if(parseFloat(newFinalValue) != parseFloat(textRounderUpdater(newFinalValue))){
                textRounderUpdater = function(value){ return parseFloat(value).toFixed(2); };
            }

            var textTween = function(){
                var i = d3.interpolate(this.textContent, parseFloat(value).toFixed(2));
                return function(t) { this.textContent = textRounderUpdater(i(t)) + percentText; }
            };

            text1.transition()
                .duration(config.waveRiseTime)
                .tween('text', textTween);
            text2.transition()
                .duration(config.waveRiseTime)
                .tween('text', textTween);

            var fillPercent = Math.max(config.minValue, Math.min(config.maxValue, value))/config.maxValue;
            var waveHeight = fillCircleRadius*waveHeightScale(fillPercent*100);
            var waveRiseScale = d3.scale.linear()
                // The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
                // such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
                // circle at 100%.
                .range([(fillCircleMargin+fillCircleRadius*2+waveHeight),(fillCircleMargin-waveHeight)])
                .domain([0,1]);
            var newHeight = waveRiseScale(fillPercent);
            var waveScaleX = d3.scale.linear().range([0,waveClipWidth]).domain([0,1]);
            var waveScaleY = d3.scale.linear().range([0,waveHeight]).domain([0,1]);
            var newClipArea;
            if(config.waveHeightScaling){
                newClipArea = d3.svg.area()
                    .x(function(d) { return waveScaleX(d.x); } )
                    .y0(function(d) { return waveScaleY(Math.sin(Math.PI*2*config.waveOffset*-1 + Math.PI*2*(1-config.waveCount) + d.y*2*Math.PI));} )
                    .y1(function(d) { return (fillCircleRadius*2 + waveHeight); } );
            } else {
                newClipArea = clipArea;
            }

            var newWavePosition = config.waveAnimate?waveAnimateScale(1):0;
            wave.transition()
                .duration(0)
                .transition()
                .duration(config.waveAnimate?(config.waveAnimateTime * (1-wave.attr('T'))):(config.waveRiseTime))
                .ease('linear')
                .attr('d', newClipArea)
                .attr('transform','translate('+newWavePosition+',0)')
                .attr('T','1')
                .each('end', function(){
                    if(config.waveAnimate){
                        wave.attr('transform','translate('+waveAnimateScale(0)+',0)');
                        animateWave(config.waveAnimateTime);
                    }
                });
            waveGroup.transition()
                .duration(config.waveRiseTime)
                .attr('transform','translate('+waveGroupXPosition+','+newHeight+')')
        }
    }

    return new GaugeUpdater();
}





 /* ------------------ end of javascript for the animated d3 chart ------------- */
/* ------------------ start of expand image effect ---------------------------- */
/**
 * jQuery Expanding Grid plugin.
 *
 * By Dan Boulet - https://danboulet.com
 */
(function ($, window, document) {

// Enable strict mode
'use strict';

/**
 * Return the last element in the current row of a grid layout.
 */
var getLastSiblingInRow = function (element) {
	var candidate = element,
			elementTop = element.offsetTop;

	// Loop through the element’s next siblings and look for the first one which
	// is positioned further down the page.
	while (candidate.nextElementSibling !== null) {
		if (candidate.nextElementSibling.offsetTop > elementTop) {
			return candidate;
		}
		candidate = candidate.nextElementSibling;
	}
	return candidate;
};

/**
 * Calculate the distance that we need to scroll the page to bring a
 * section, defined as the area between the top and bottom, into view.
 */
var calculatePageScrollDistance = function (top, bottom) {
	var windowScrollDistance = $(window).scrollTop(),
			windowHeight = $(window).height(),
			scrollDistanceToTop,
			scrollDistanceToBottom;

	// Scroll to the top of the section if the we are already scrolled past it.
	if (windowScrollDistance >= top) {
		return top - windowScrollDistance;
	}
	// Do nothing if there is enough space to show the section without having to scroll.
	else if ((windowScrollDistance + windowHeight) >= bottom) {
		return 0;
	}
	else {
		// Find the maximum distance we can scroll without passing the top of the section.
		scrollDistanceToTop = top - windowScrollDistance;
		// Find the distance we need to scroll to reveal the entire section.
		scrollDistanceToBottom = bottom - (windowScrollDistance + windowHeight);

		return Math.min(scrollDistanceToTop, scrollDistanceToBottom);
	}
};

/**
 * Create the expanding preview grid.
 */
var expandingGrid = function (context, options) {
	var defaults = {
		animationDuration: 250,
		linksSelector: '.links a',
		expandingAreaSelector: '.expanding-container',
		closeButtonMarkup: '<a href="#" class="close-button">Close</a>',
		spacerMarkup: '<span class="spacer" aria-hidden="true"/>',
		elementActiveClass: 'active',
		elementExpandedClass: 'expanded',
		onExpandBefore: false,
		onExpandAfter: false
	};

	var settings = $.extend({}, defaults, options);

	var isExpanded = false;
	var activeLink = false;
	var activeExpandedArea = false;
	var activeExpandedAreaTop = false;
	var activeExpandedAreaHeight = false;
	var lastItemInActiveRow = false;
	var activeRowChanged = false;
	var checkExpandedAreaResize = false;
	var $links = $(settings.linksSelector, context);
	var $expandingAreas = $(settings.expandingAreaSelector, context);
	var $closeButton = $(settings.closeButtonMarkup);
	var $spacer = $(settings.spacerMarkup);
	var $secondarySpacer = $spacer.clone();

	/**
	 * Scroll a section of the page into view, using animation.
	 */
	var scrollSectionIntoView = function (top, bottom, duration, callback) {
		var animate;
		var scroll = 0;
		var distance = calculatePageScrollDistance(top, bottom);
		var windowScrollDistance = $(window).scrollTop();
		var timeLeft;

		// Set default duration.
		duration = (typeof duration === 'undefined') ? settings.animationDuration : duration;
		timeLeft = duration;

		var start = new Date().getTime();
		var last = start;
		var tick = function() {
			timeLeft = Math.max(duration - (new Date() - start), 0);

			var x = (timeLeft === 0 || distance === 0) ? 0 : ((new Date() - last) / timeLeft * distance);
			var diff = (distance > 0 ? Math.min(x, distance) : Math.max(x, distance));
			distance = distance - diff;
			scroll += diff;
			window.scrollTo(0, windowScrollDistance + scroll);

			last = new Date().getTime();

			if (last - start <= duration) {
				animate = (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
			}
			else {
				if (typeof callback === 'function') {
					callback();
				}
			}
		};

		tick();
	};

	// Process the links.
	$links.each(function () {
		var $this = $(this);
		var targetId = $this.attr('href').match(/#([^\?]+)/)[1];
		var target = document.getElementById(targetId);

		if (target) {
			$this.click(function (event) {
				var clickedLink = this;
				var scrollTargetOffset;
				var closeButtonAnimationDelay;

				event.preventDefault();

				// Is this link already expanded?
				if (isExpanded && activeLink === clickedLink) {
					// Close it.
					$closeButton.click();
				}
				// Otherwise, expand it.
				else {
					$links.removeClass(settings.elementActiveClass).filter($this).addClass(settings.elementActiveClass).parent('li').each(function () {
						var lastSibling = getLastSiblingInRow(this);
						activeRowChanged = lastSibling !== lastItemInActiveRow;
						if (activeRowChanged) {
							lastItemInActiveRow = lastSibling;
						}
						// If we are changing rows, replace spacer with secondary spacer.
						if (isExpanded && activeRowChanged) {
							$secondarySpacer.height($spacer.height());
							$spacer.height(0).replaceWith($secondarySpacer);
						}
						$(lastItemInActiveRow).after($spacer);
					});
					if (isExpanded && activeRowChanged) {
						$secondarySpacer.animate({height: 0}, settings.animationDuration, function () {
							$(this).detach();
						});
						$closeButton.removeClass(settings.elementActiveClass).hide();
					}
					scrollTargetOffset = ($secondarySpacer.position().top < $spacer.position().top ? $secondarySpacer.height() : 0);
					activeExpandedAreaTop = ($spacer.position().top - scrollTargetOffset);
					$expandingAreas.removeClass(settings.elementExpandedClass).hide().filter(target).each(function () {
							var $this = $(this);
							var autoHeight = $this.height();
							var autoOuterHeight = $this.outerHeight();
							var initialHeight = (isExpanded && activeExpandedAreaHeight && (activeRowChanged === false)) ? activeExpandedAreaHeight : 0;

							stopExpandedAreaMonitor();

							$spacer.animate({height: autoHeight + 'px'}, settings.animationDuration);

							$this.css({
								height: initialHeight + 'px',
								position: 'absolute',
								left: 0,
								top: $spacer.position().top + 'px'
							}).show(0, function () {
								// Callback.
								if (typeof settings.onExpandBefore === 'function') {
									settings.onExpandBefore.call(this);
								}
							}).animate({
								height: autoHeight + 'px',
								top: activeExpandedAreaTop + 'px'
							}, settings.animationDuration, function () {
								$this.css({height: 'auto'}).addClass(settings.elementExpandedClass);

								// Set a timer to monitor changes to expanded area’s height.
								activeExpandedAreaHeight = $this.height();
								checkExpandedAreaResize = setInterval(function () {
									var activeExpandedAreaNewHeight = $this.height();
									if (activeExpandedAreaNewHeight !== activeExpandedAreaHeight) {
										activeExpandedAreaHeight = activeExpandedAreaNewHeight;
										syncExpandedAreaWithSpacer();
									}
								}, 1000);

								// Callback.
								if (typeof settings.onExpandAfter === 'function') {
									settings.onExpandAfter.call(this);
								}
							});

							// Scroll the page to bring the active link and preview into view.
							var scrollTargetTop = $(clickedLink).offset().top - scrollTargetOffset;
							var scrollTargetBottom = $this.offset().top + autoOuterHeight + 20 - scrollTargetOffset;
							scrollSectionIntoView(scrollTargetTop, scrollTargetBottom);
						});

					// Activate close button.
					closeButtonAnimationDelay = (isExpanded && activeRowChanged && ($this.parent().index() > $(activeLink).parent().index())) ? settings.animationDuration : (settings.animationDuration / 4);
					$closeButton.css({
							position: 'absolute',
							right: 0,
							top: activeExpandedAreaTop + 'px'
						}).delay(closeButtonAnimationDelay).fadeIn(settings.animationDuration, function () {
							$(this).addClass(settings.elementActiveClass);
						});

					// Set global variables.
					activeLink = this;
					activeExpandedArea = target;
					isExpanded = true;
				}
			});
		}
	});

	// Process the close button.
	$closeButton.appendTo(context).hide().click(function (event) {
		var $activeLink = $(activeLink);
		var activeLinkTopOffset = $activeLink.offset().top;
		var activeLinkBottomOffset = activeLinkTopOffset + $activeLink.outerHeight();

		event.preventDefault();

		// DOM manipulation and animations.
		$links.removeClass(settings.elementActiveClass);
		$expandingAreas.slideUp(settings.animationDuration).removeClass(settings.elementExpandedClass);
		$closeButton.removeClass('active').hide();
		$spacer.animate({height: 0}, settings.animationDuration, function () {
			$spacer.detach();
		});

		// Scroll the page to bring the active link into view.
		scrollSectionIntoView(activeLinkTopOffset, activeLinkBottomOffset);

		stopExpandedAreaMonitor();

		// Reset global variables.
		isExpanded = false;
		activeLink = false;
		activeExpandedArea = false;
	});

	/**
	 * Stop monitoring size of expanded area.
	 */
	var stopExpandedAreaMonitor = function () {
		if (checkExpandedAreaResize) {
			clearInterval(checkExpandedAreaResize);
		}
	};

	/**
	 * Match preview and spacer in height and position.
	 */
	var syncExpandedAreaWithSpacer = function () {
		if (activeExpandedArea && isExpanded) {
			$spacer.height($(activeExpandedArea).height());
			activeExpandedAreaTop = $spacer.position().top;
			$closeButton.add(activeExpandedArea).css({top: activeExpandedAreaTop + 'px'});
		}
	};

	/**
	 * Place spacer in proper position within grid.
	 */
	var positionSpacer = function () {
		var lastSibling;
		if (activeLink && lastItemInActiveRow && isExpanded) {
			// Remove spacer.
			$spacer.detach();
			lastSibling = getLastSiblingInRow($(activeLink).parent()[0]);
			// Reposition spacer, if necessary.
			if (lastItemInActiveRow !== lastSibling) {
				console.log(lastSibling);
				lastItemInActiveRow = lastSibling;
			}
			// Restore spacer.
			$(lastItemInActiveRow).after($spacer);
		}
	};

	// React to window resize.
	$(window).resize(function () {
		if (isExpanded) {
			positionSpacer();
			syncExpandedAreaWithSpacer();
		}
	});
};

// Create the jQuery plugin.
$.fn.expandingGrid = function (options) {
	return this.each(function () {
		expandingGrid(this, options);
	});
};

})(jQuery, window, document);

$(document).ready(function () {
	$('.expanding-grid').expandingGrid();
});




 /* ------------------ end of expand effect ------------------------------------ */
