import React, { Component } from 'react';
import { Route, Redirect } from 'react-router'
import axios from 'axios';
import { Form, Message, Button, Icon, Grid } from 'semantic-ui-react'
import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
 
  constructor(props) {
      super(props);
	   this.state = {
			errors: [],
			message: '',
			
			name: '',
			title: '',
			highlight: '',
			food: '',
			address1: '',
			address2: '',
			city: '',
			state: '',
			zip: '',
			country: '',
			openathour: '',
			openatminute: '',
			closeathour: '',
			closeatminute: '',
			star: '',
			
			nameError: false,
			titleError: false,
			highlightError: false,
			foodError: false,
			address1Error: false,
			address2Error: false,
			cityError: false,
			stateError: false,
			zipError: false,
			countryError: false,
			openathourError: false,
			openatminuteError: false,
			closeathourError: false,
			closeatminuteError: false,
			starError: false,

			hasErrors: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCancelButton = this.handleCancelButton.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);		
    }
	
	// We are not initializing anything, so leaving this Life Cycle method empty.
    componentWillMount(){

    }
	
	// We are not initializing anything, so leaving this Life Cycle method empty.
	componentDidMount(){
			
	}	
	
    handleInputChange(e) {
		var newState = {};
		newState =this.state;
		newState[e.target.name] = e.target.value;
		this.setState(newState);
	}
	
	// Currently we are not doing anything in this method, but this method may be used
	// to go back to main page, or previous page.
    handleCancelButton(event) {
		event.preventDefault();
	}
	
	// We will use this method to validate the form.
	 validate(event) {
		// we will store errors for all fields in an array
		const errors = [];
		
		if (this.state.name.length === 0) {
			errors.push("Name can't be empty");
			this.setState({nameError: true});
		} else {
			this.setState({nameError: false});
		}
		if (this.state.title.length === 0) {
			errors.push("Title can't be empty");
			this.setState({titleError: true});
		} else {
			this.setState({titleError: false});
		}
		if (this.state.highlight.length === 0) {
			errors.push("Highlight can't be empty");
			this.setState({highlightError: true});
		} else {
			this.setState({highlightError: false});
		}
		if (this.state.food.length === 0) {
			errors.push("Food can't be empty");
			this.setState({foodError: true});
		} else {
			this.setState({foodError: false});
		}
		if (this.state.address1.length === 0) {
			errors.push("Address1 can't be empty");
			this.setState({address1Error: true});
		} else {
			this.setState({address1Error: false});
		}
		if (this.state.address2.length === 0) {
			errors.push("Address2 can't be empty");
			this.setState({address2Error: true});
		} else {
			this.setState({address2Error: false});
		}
		if (this.state.city.length === 0) {
			errors.push("City can't be empty");
			this.setState({cityError: true});
		} else {
			this.setState({cityError: false});
		}
		if (this.state.state.length === 0) {
			errors.push("State can't be empty");
			this.setState({stateError: true});
		} else {
			this.setState({stateError: false});
		}
		if (this.state.zip.length === 0) {
			errors.push("Zip can't be empty");
			this.setState({zipError: true});
		} else {
			this.setState({zipError: false});
		}
		if (this.state.country.length === 0) {
			errors.push("Country can't be empty");
			this.setState({countryError: true});
		} else {
			this.setState({countryError: false});
		}
		if (this.state.openathour.length === 0) {
			errors.push("Open At Hour can't be empty");
			this.setState({openathourError: true});
		} else {
			this.setState({openathourError: false});
		}
		if (this.state.openatminute.length === 0) {
			errors.push("Open At Minute can't be empty");
			this.setState({openatminuteError: true});
		} else {
			this.setState({openatminuteError: false});
		}
		if (this.state.closeathour.length === 0) {
			errors.push("Close At Hour can't be empty");
			this.setState({closeathourError: true});
		} else {
			this.setState({closeathourError: false});
		}
		if (this.state.closeatminute.length === 0) {
			errors.push("Close At Minute can't be empty");
			this.setState({closeatminuteError: true});
		} else {
			this.setState({closeatminuteError: false});
		}
		if (this.state.star.length === 0) {
			errors.push("Star can't be empty");
			this.setState({starError: true});
		} else {
			this.setState({starError: false});
		}
		
	return errors;
}


	handleSubmit(event) {
		
	   const errors = this.validate();

		if (errors.length > 0) {
		  this.setState({ errors : errors});
		  return;
		}

			
		var restaurant={};
		
		restaurant.name				=  this.state.name;
		restaurant.title 			=  this.state.title;
		restaurant.highlight 		=  this.state.highlight;
		restaurant.food 			=  this.state.food;
		restaurant.address1 		=  this.state.address1;
		restaurant.address2 		=  this.state.address2;
		restaurant.city 			=  this.state.city;
		restaurant.state 			=  this.state.state;
		restaurant.zip 				=  this.state.zip;
		restaurant.country 			=  this.state.country;
		restaurant.openathour 		=  this.state.openathour;
		restaurant.openatminute 	=  this.state.openatminute;
		restaurant.closeathour 		=  this.state.closeathour;
		restaurant.closeatminute 	=  this.state.closeatminute;
		restaurant.star 			=  this.state.star;
		
		console.log(restaurant);
		
		// prepare json to post to the REST API
		const json = {
		 "name":this.state.name, "title":this.state.title,"highlight":this.state.highlight,
		 "food":this.state.food,"address.address1":this.state.address1,"address.address2":this.state.address2
		 ,"address.city":this.state.city,"address.state":this.state.state
		 ,"address.zip":this.state.zip,"address.country":this.state.country,
		 "openathour":this.state.openathour,"openatminute":this.state.openatminute,
		 "closeathour":this.state.closeathour,"closeatminute":this.state.closeatminute,
		 "star":this.state.star
		};
		
		axios.post('http://localhost:4200/restaurants/add', json)
		.then(res => { 			
			this.setState({message: 'Restaurant created successfully.'});
		}
		)
		.catch(err => alert('error:'+err))		
		
		event.preventDefault();
		
	}
  
  
	createSelectHours() {
     let items = [];         
     for (let i = 1; i <= 12; i++) {             
          items.push(<option key={i} value={i}>{i}</option>);   

     }
     return items;
	}  
	
	createSelectMinutes() {
     let items = [];         
     for (let i = 0; i <= 59; i++) {             
          items.push(<option key={i} value={i}>{i}</option>);   

     }
     return items;
	}  
 
render() {

return (

	<div className="container">
					
		<div className="headerDiv">
			<div className="jumbotron">Add Restaurant</div>
		</div>

	 
		<div className="row alert alert-danger">
			{this.state.errors.length > 0 &&
			<Message
				error
				header='There was some errors with your submission'
				list={this.state.errors}
			/>
			}
		</div>

		<div className="row alert alert-success">
			{this.state.message!='' &&
			<Message
				success
				header={this.state.message}				
			/>
			}
		</div>
	
		<div className="CreateProfileContainer">

	
		<Form widths='equal' size='mini'>
   
			<Grid columns={2} stackable>

			<Grid.Column key={1}>
				<Form.Field label='Name' control='input' id="name" name="name"  value={this.state.name} onChange={this.handleInputChange} error={this.state.nameError}>
				</Form.Field>
			</Grid.Column>

			<Grid.Column key={1}>
				<Form.Field label='Title' control='input' id="title" name="title"  value={this.state.title} onChange={this.handleInputChange} error={this.state.titleError}>
				</Form.Field>
			</Grid.Column>
			
			<Grid.Column key={1}>
				<Form.Field label='Speciality' control='input' id="highlight" name="highlight"  value={this.state.highlight} onChange={this.handleInputChange} error={this.state.highlightError}>
				</Form.Field>
			</Grid.Column>
		   
			<Grid.Column key={1}>
				<Form.Field label='Food' control='input' id="food" name="food"  value={this.state.food} onChange={this.handleInputChange} error={this.state.foodError}>
				</Form.Field>
			</Grid.Column>	   
		   
			<Grid.Column key={1}>
				<Form.Field label='Address' control='input' id="address1" name="address1"  value={this.state.address1} onChange={this.handleInputChange} error={this.state.address1Error}>
				</Form.Field>
			</Grid.Column>	   
		   
			<Grid.Column key={1}>
				<Form.Field label='Address2' control='input' id="address2" name="address2"  value={this.state.address2} onChange={this.handleInputChange} error={this.state.address2Error}>
				</Form.Field>
			</Grid.Column>		   
		   
			<Grid.Column key={1}>
				<Form.Field label='City' control='input' id="city" name="city"  value={this.state.city} onChange={this.handleInputChange} error={this.state.cityError}>
				</Form.Field>
			</Grid.Column>	   
		   
			<Grid.Column key={1}>
				<Form.Field label='State' control='input' id="state" name="state"  value={this.state.state} onChange={this.handleInputChange} error={this.state.stateError}>
				</Form.Field>
			</Grid.Column>	

			<Grid.Column key={1}>
				<Form.Field label='Zip' control='input' id="zip" name="zip"  value={this.state.zip} onChange={this.handleInputChange} error={this.state.zipError}>
				</Form.Field>
			</Grid.Column>	   
		   
			<Grid.Column key={1}>
				<Form.Field label='Country' control='input' id="country" name="country"  value={this.state.country} onChange={this.handleInputChange} error={this.state.countryError}>
				</Form.Field>
			</Grid.Column>			

	
			<Grid.Column key={1}>
				<Form.Field label='Opens At (Hour AM)' control='select' id="openathour" name="openathour"  value={this.state.openathour} onChange={this.handleInputChange} error={this.state.openathourError}>
				{this.createSelectHours()}
				</Form.Field>
			</Grid.Column>

			<Grid.Column key={1}>
				<Form.Field label='Opens At (Minute AM)' control='select' id="openatminute" name="openatminute"  value={this.state.openatminute} onChange={this.handleInputChange} error={this.state.openatminuteError}>
				{this.createSelectMinutes()}
				</Form.Field>
			</Grid.Column>			

			<Grid.Column key={1}>
				<Form.Field label='Closes At (Hour PM)' control='select' id="closeathour" name="closeathour"  value={this.state.closeathour} onChange={this.handleInputChange} error={this.state.closeathourError}>
				{this.createSelectHours()}
				</Form.Field>
			</Grid.Column>
			
			<Grid.Column key={1}>
				<Form.Field label='Closes At (Minute PM)' control='select' id="closeatminute" name="closeatminute"  value={this.state.closeatminute} onChange={this.handleInputChange} error={this.state.closeatminuteError}>
				{this.createSelectMinutes()}
				</Form.Field>
			</Grid.Column>			
	
			<Grid.Column key={1}>
				<Form.Field label='Star' control='select'  id="star" name="star" value={this.state.star} onChange={this.handleInputChange} error={this.state.starError}>
				<option value="">Select</option>
				<option value='0'>0</option>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
				<option value='5'>5</option>
				</Form.Field>
			</Grid.Column>		

			<div className="row">
			<Grid.Column key={1}>
			<Form.Field>
			<Button icon labelPosition='right' color='red' onClick={this.handleCancelButton}>
			  Cancel
			  <Icon name='right arrow' color='white'/>
			</Button>
			 <Button icon labelPosition='right' color='blue' onClick={this.handleSubmit}>
			  Submit
			  <Icon name='right arrow' color='white'/>
			</Button>
		
			</Form.Field>

			</Grid.Column>
			</div>
			
			</Grid>
		
		</Form>	
	
		</div>
	
	</div>
    );
    }
}

export default App;