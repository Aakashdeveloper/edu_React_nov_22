import React,{Component} from 'react';

const url = "";

class Register extends Component{
    constructor(props){
        super(props)

        this.state={
            name:'',
            email:'vishali@gmail.com',
            password:'',
            phone:''

        }
    }

    render(){
        return(
           <div className="container">
               <div className="panel panel-primary">
                   <div className="panel-heading">
                       <h3>Register</h3>
                   </div>
                   <div className="panel-body">
                       <div className='row'>
                           <div className="form-group col-md-6">
                               <label>Name</label>
                               <input className="form-control" name="name"
                               value={this.state.name}/>
                           </div>
                           <div className="form-group col-md-6">
                               <label>Email</label>
                               <input className="form-control" name="email"
                               value={this.state.email}/>
                           </div>
                           <div className="form-group col-md-6">
                               <label>Password</label>
                               <input className="form-control" name="password"
                               value={this.state.password}/>
                           </div>
                           <div className="form-group col-md-6">
                               <label>Phone</label>
                               <input className="form-control" name="phone"
                                value={this.state.phone}/>
                           </div>
                       </div>
                       <button className="btn btn-success">Register</button>
                   </div>

               </div>
            </div>
        )
    }
}

export default Register 