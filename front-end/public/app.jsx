import React from 'react';
import ReactDOM from 'react-dom';
import Users from './Users.jsx';
import Oneuser from './Oneuser.jsx';
import $ from 'jquery';


class App extends React.Component{
	constructor(props){
		super(props)

		this.state={
		data:[]
		}

	}
	Data(){
		var that=this;
		$.ajax({
			type:'GET',
			url:'/api/users',
			success:function(data){
				that.setState({data:data})
			}
		})
	}
	render(){
		return(
		<div> 
			<Users users={this.state.data}/>
			<button onClick={this.Data.bind(this)}>Clickhere</button>
		 
		</div>

			)
	}
}

ReactDOM.render(<App />, document.getElementById('app1'));

