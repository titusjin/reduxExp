let d3Chart = {}

d3Chart.create = function(el){
    let fData=[
         { State:'Taiwan',freq:{low:4786, mid:1319, high:249} }
        ,{ State:'North America',freq:{low:1101, mid:412, high:674} }
        ,{ State:'Phlip',freq:{low:932, mid:2149, high:418} }
        ,{ State:'DE',freq:{low:832, mid:1152, high:1862} }
        ,{ State:'FL',freq:{low:4481, mid:3304, high:948} }
        ,{ State:'GA',freq:{low:1619, mid:167, high:1063} }
        ,{ State:'IA',freq:{low:1819, mid:247, high:1203} }
        ,{ State:'IL',freq:{low:4498, mid:3852, high:942} }
        ,{ State:'IN',freq:{low:797, mid:1849, high:1534} }
        ,{ State:'KS',freq:{low:162, mid:379, high:471} }
    ];
    fData.forEach(function(d){d.total=d.freq.low+d.freq.mid+d.freq.high;});
    var sF = fData.map(function(d){return [d.State,d.total];});

    let hG={},  hGDim = {t: 60, r: 0, b: 30, l: 0};
    hGDim.w = 700 - hGDim.l - hGDim.r;
    hGDim.h = 500 - hGDim.t - hGDim.b;

    let x = d3.scale.ordinal().rangeRoundBands([0, hGDim.w], 0.1)
                .domain(sF.map(function(d) { return d[0]; }));
    let y = d3.scale.linear().range([hGDim.h, 0])
            .domain([0, d3.max(sF, function(d) { return d[1]; })]);

    //create svg for histogram.
    var hGsvg = d3.select(el).append("svg")
        .attr("width", hGDim.w + hGDim.l + hGDim.r)
        .attr("height", hGDim.h + hGDim.t + hGDim.b).append("g")
        .attr("transform", "translate(" + hGDim.l + "," + hGDim.t + ")");

    // Add x-axis to the histogram svg.
    hGsvg.append("g").attr("class", "x axis")
        .attr("transform", "translate(0," + hGDim.h + ")")
        .call( d3.svg.axis().scale(x).orient("bottom") )
        .selectAll('text')
        .attr('transform', 'rotate(90)')
        .attr("y", 0)
        .attr("x", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "start");


    // Create bars for histogram to contain rectangles and freq labels.
    var bars = hGsvg.selectAll(".bar").data(sF).enter()
            .append("g").attr("class", "bar");

    //create the rectangles.
    bars.append("rect")
        .attr("x", function(d) { return x(d[0]); })
        .attr("y", function(d) { return y(d[1]); })
        .attr("width", x.rangeBand())
        .attr("height", function(d) { return hGDim.h - y(d[1]); });
        // .attr('fill',barColor)
        // .on("mouseover",mouseover)// mouseover is defined below.
        // .on("mouseout",mouseout);// mouseout is defined below.

    //Create the frequency labels above the rectangles.
    bars.append("text").text(function(d){ return d3.format(",")(d[1]);})
        .attr("x", function(d) { return x(d[0])+x.rangeBand()/2; })
        .attr("y", function(d) { return y(d[1])-5; })
        .attr("text-anchor", "middle");
};

export default d3Chart;
