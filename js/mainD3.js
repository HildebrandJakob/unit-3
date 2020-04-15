//begin script when window loads
window.onload = setMap();

//set up choropleth map
function setMap(){
    //use Promise.all to parallelize asynchronous data loading
    var promises = [d3.csv("data/Neighborhood.csv"),
                    d3.json("data/hood.topojson"),
                   ];
    Promise.all(promises).then(callback);
};

		function callback(data){
		csvData = data[0];
		hood = data[1];

			console.log(csvData);
			console.log(hood);

};
