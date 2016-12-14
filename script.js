var w = 600,
	h = 600;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Bringing People Together (%)', 'Coherent Policy and Legal Framework (%)', 'Aligning Programs around a Common Results Framework (%)', 'Financial Tracking and Resource Mobilization (%)']; 

//Data
var d = [
		  [
			{axis:"	Bangladesh	",value:	0.54	},
			{axis:"	Benin	",value:	0.58	},
			{axis:"	Botswana	",value:	0.32	},
			{axis:"	Burkina Faso	",value:	0.69	},
			{axis:"	Burundi	",value:	0.65	},
			{axis:"	Cambodia	",value:	0.59	},
			{axis:"	Cameroon	",value:	0.4	},
			{axis:"	Chad	",value:	0.74	},
			{axis:"	Congo	",value:	0.81	},
			{axis:"	Costa Rica	",value:	0.39	},
			{axis:"	Côte d'ivoire	",value:	0.9	},
			{axis:"	Democratic Republic of Congo	",value:	0.41	},
			{axis:"	El Salvador	",value:	0.6	},
			{axis:"	Gambia	",value:	0.79	},
			{axis:"	Guatemala	",value:	0.33	},
			{axis:"	Guinea	",value:	0.69	},
			{axis:"	Guinea-Bissau	",value:	0.22	},
			{axis:"	Indonesia	",value:	0.73	},
			{axis:"	Kenya	",value:	0.75	},
			{axis:"	Kyrgyzstan	",value:	0.46	},
			{axis:"	Lao PDR	",value:	0.79	},
			{axis:"	Madagascar	",value:	0.76	},
			{axis:"	Malawi	",value:	0.81	},
			{axis:"	Mali	",value:	0.54	},
			{axis:"	Mauritania	",value:	0.63	},
			{axis:"	Myanmar	",value:	0.38	},
			{axis:"	Mozambique	",value:	0.78	},
			{axis:"	Namibia	",value:	0.67	},
			{axis:"	Nepal	",value:	0.81	},
			{axis:"	Nigeria	",value:	0.54	},
			{axis:"	Pakistan	",value:	0.69	},
			{axis:"	Philippines	",value:	0.27	},
			{axis:"	Senegal	",value:	0.7	},
			{axis:"	Sierra Leone	",value:	0.83	},
			{axis:"	Somalia	",value:	0.41	},
			{axis:"	South Sudan	",value:	0.11	},
			{axis:"	Sri Lanka	",value:	0.8	},
			{axis:"	Sudan	",value:	0.58	},
			{axis:"	Tajikistan	",value:	0.58	},
			{axis:"	Tanzania	",value:	0.78	},
			{axis:"	Togo	",value:	0.2	},
			{axis:"	Uganda	",value:	0.81	},
			{axis:"	Vietnam	",value:	0.34	},
			{axis:"	Yemen	",value:	0.44	},
			{axis:"	Zambia	",value:	0.69	},
			{axis:"	Zimbabwe	",value:	0.7	},
		  ],
		  [
		  	{axis:"	Bangladesh	",value:	0.58	},
			{axis:"	Benin	",value:	0.58	},
			{axis:"	Botswana	",value:	0.55	},
			{axis:"	Burkina Faso	",value:	0.61	},
			{axis:"	Burundi	",value:	0.61	},
			{axis:"	Cambodia	",value:	0.58	},
			{axis:"	Cameroon	",value:	0.27	},
			{axis:"	Chad	",value:	0.53	},
			{axis:"	Congo	",value:	0.69	},
			{axis:"	Costa Rica	",value:	0.4	},
			{axis:"	Côte d'ivoire	",value:	0.71	},
			{axis:"	Democratic Republic of Congo	",value:	0.41	},
			{axis:"	El Salvador	",value:	0.78	},
			{axis:"	Gambia	",value:	0.96	},
			{axis:"	Guatemala	",value:	0.46	},
			{axis:"	Guinea	",value:	0.75	},
			{axis:"	Guinea-Bissau	",value:	0.32	},
			{axis:"	Indonesia	",value:	0.79	},
			{axis:"	Kenya	",value:	0.76	},
			{axis:"	Kyrgyzstan	",value:	0.58	},
			{axis:"	Lao PDR	",value:	0.46	},
			{axis:"	Madagascar	",value:	0.73	},
			{axis:"	Malawi	",value:	0.87	},
			{axis:"	Mali	",value:	0.48	},
			{axis:"	Mauritania	",value:	0.6	},
			{axis:"	Myanmar	",value:	0.46	},
			{axis:"	Mozambique	",value:	0.63	},
			{axis:"	Namibia	",value:	0.71	},
			{axis:"	Nepal	",value:	0.7	},
			{axis:"	Nigeria	",value:	0.59	},
			{axis:"	Pakistan	",value:	0.52	},
			{axis:"	Philippines	",value:	0.62	},
			{axis:"	Senegal	",value:	0.61	},
			{axis:"	Sierra Leone	",value:	0.75	},
			{axis:"	Somalia	",value:	0.34	},
			{axis:"	South Sudan	",value:	0	},
			{axis:"	Sri Lanka	",value:	0.88	},
			{axis:"	Sudan	",value:	0.58	},
			{axis:"	Tajikistan	",value:	0.58	},
			{axis:"	Tanzania	",value:	0.84	},
			{axis:"	Togo	",value:	0.45	},
			{axis:"	Uganda	",value:	0.82	},
			{axis:"	Vietnam	",value:	0.57	},
			{axis:"	Yemen	",value:	0.3	},
			{axis:"	Zambia	",value:	0.58	},
			{axis:"	Zimbabwe	",value:	0.79	},
		  ],
		  [
		  	{axis:"	Bangladesh	",value:	0.35	},
			{axis:"	Benin	",value:	0.63	},
			{axis:"	Botswana	",value:	0.52	},
			{axis:"	Burkina Faso	",value:	0.43	},
			{axis:"	Burundi	",value:	0.45	},
			{axis:"	Cambodia	",value:	0.48	},
			{axis:"	Cameroon	",value:	0.23	},
			{axis:"	Chad	",value:	0.16	},
			{axis:"	Congo	",value:	0.57	},
			{axis:"	Costa Rica	",value:	0.36	},
			{axis:"	Côte d'ivoire	",value:	0.69	},
			{axis:"	Democratic Republic of Congo	",value:	0.34	},
			{axis:"	El Salvador	",value:	0.66	},
			{axis:"	Gambia	",value:	0.4	},
			{axis:"	Guatemala	",value:	0.35	},
			{axis:"	Guinea	",value:	0.74	},
			{axis:"	Guinea-Bissau	",value:	0.2	},
			{axis:"	Indonesia	",value:	0.75	},
			{axis:"	Kenya	",value:	0.66	},
			{axis:"	Kyrgyzstan	",value:	0.38	},
			{axis:"	Lao PDR	",value:	0.64	},
			{axis:"	Madagascar	",value:	0.75	},
			{axis:"	Malawi	",value:	0.75	},
			{axis:"	Mali	",value:	0.6	},
			{axis:"	Mauritania	",value:	0.5	},
			{axis:"	Myanmar	",value:	0.35	},
			{axis:"	Mozambique	",value:	0.57	},
			{axis:"	Namibia	",value:	0.76	},
			{axis:"	Nepal	",value:	0.71	},
			{axis:"	Nigeria	",value:	0.51	},
			{axis:"	Pakistan	",value:	0.6	},
			{axis:"	Philippines	",value:	0.41	},
			{axis:"	Senegal	",value:	0.4	},
			{axis:"	Sierra Leone	",value:	0.75	},
			{axis:"	Somalia	",value:	0.16	},
			{axis:"	South Sudan	",value:	0	},
			{axis:"	Sri Lanka	",value:	0.91	},
			{axis:"	Sudan	",value:	0.63	},
			{axis:"	Tajikistan	",value:	0.28	},
			{axis:"	Tanzania	",value:	0.75	},
			{axis:"	Togo	",value:	0.12	},
			{axis:"	Uganda	",value:	0.75	},
			{axis:"	Vietnam	",value:	0.7	},
			{axis:"	Yemen	",value:	0.33	},
			{axis:"	Zambia	",value:	0.63	},
			{axis:"	Zimbabwe	",value:	0.65	},
		  ],
		  [
			{axis:"	Bangladesh	",value:	0.5	},
			{axis:"	Benin	",value:	0.41	},
			{axis:"	Botswana	",value:	0.71	},
			{axis:"	Burkina Faso	",value:	0.35	},
			{axis:"	Burundi	",value:	0.34	},
			{axis:"	Cambodia	",value:	0.33	},
			{axis:"	Cameroon	",value:	0.08	},
			{axis:"	Chad	",value:	0.04	},
			{axis:"	Congo	",value:	0.67	},
			{axis:"	Costa Rica	",value:	0.43	},
			{axis:"	Côte d'ivoire	",value:	0.67	},
			{axis:"	Democratic Republic of Congo	",value:	0.42	},
			{axis:"	El Salvador	",value:	0.66	},
			{axis:"	Gambia	",value:	0.54	},
			{axis:"	Guatemala	",value:	0.23	},
			{axis:"	Guinea	",value:	0.56	},
			{axis:"	Guinea-Bissau	",value:	0.04	},
			{axis:"	Indonesia	",value:	0.65	},
			{axis:"	Kenya	",value:	0.58	},
			{axis:"	Kyrgyzstan	",value:	0.25	},
			{axis:"	Lao PDR	",value:	0.58	},
			{axis:"	Madagascar	",value:	0.73	},
			{axis:"	Malawi	",value:	0.59	},
			{axis:"	Mali	",value:	0.44	},
			{axis:"	Mauritania	",value:	0.28	},
			{axis:"	Myanmar	",value:	0.13	},
			{axis:"	Mozambique	",value:	0.39	},
			{axis:"	Namibia	",value:	0.76	},
			{axis:"	Nepal	",value:	0.54	},
			{axis:"	Nigeria	",value:	0.44	},
			{axis:"	Pakistan	",value:	0.58	},
			{axis:"	Philippines	",value:	0.46	},
			{axis:"	Senegal	",value:	0.56	},
			{axis:"	Sierra Leone	",value:	0.33	},
			{axis:"	Somalia	",value:	0.08	},
			{axis:"	South Sudan	",value:	0	},
			{axis:"	Sri Lanka	",value:	1	},
			{axis:"	Sudan	",value:	0.41	},
			{axis:"	Tajikistan	",value:	0.12	},
			{axis:"	Tanzania	",value:	0.66	},
			{axis:"	Togo	",value:	0.12	},
			{axis:"	Uganda	",value:	0.57	},
			{axis:"	Vietnam	",value:	0.32	},
			{axis:"	Yemen	",value:	0.19	},
			{axis:"	Zambia	",value:	0.54	},
			{axis:"	Zimbabwe	",value:	0.45	},
		  ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("SUN Countries Progress 2015-2016");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	