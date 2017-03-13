var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState:function(){
		return{
			isLoading:false
		}
	},
	handleSearch:function(location){
		var that = this;

		debugger;
		this.setState({isLoading:true});

		openWeatherMap.getTemp(location).then(function(temp){
			that.setState({
				location:location,
				temp:temp,
				isLoading:false,
				errorState:false
			});
		},function(errorMessage){
			that.setState({isLoading:false, errorState:true});
					
		});

	},
	render:function(){
		var {isLoading,temp,location,errorState} = this.state;

		function renderMessage(){
			if(isLoading){
				return <h3>Fetching weather...</h3>
			}else if(errorState){
				return <h3>Could not find your city!</h3>;
			}else if(temp && location){
				return <WeatherMessage temp={temp} location={location}/>
			}
		}

		return(
			<div>
			
			<h3>Weather Component</h3>
			<WeatherForm onSearch={this.handleSearch} />
			{renderMessage()}
			</div>
			);
	}
});

module.exports = Weather;