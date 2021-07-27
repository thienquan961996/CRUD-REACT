import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeAdress = this.onChangeAdress.bind(this);
        this.onChangeSex = this.onChangeSex.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            age: '',
            adress: '',
            sex: '',
            date: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onChangeAdress(e) {
        this.setState({
            adress: e.target.value
        });
    }

    onChangeSex(e) {
        this.setState({
            sex: e.target.value
        });
    }

    onChangeDate(e) {
        this.setState({
            date: e.target.value
        });
    }

    onSubmit(e) {
        e.prevenDefault();

        const obj = {
            name: this.state.name,
            age: this.state.age,
            adress: this.state.adress,
            sex: this.state.sex,
            date: this.state.date
        };
        axios.post('http://localhost:4000/persons/add', obj).then(res => console.log(res.data));
        
        this.setState({
            name: '',
            age: '',
            adress: '',
            sex: '',
            date: ''
        })
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Person</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Name:  </label>
                        <input type="text" className="form-control"
                                value={this.state.name}
                                onChangeName={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Age: </label>
                        <input type="Number" className="form-control"
                                value={this.state.age}
                                onChangeAge={this.onChangeAge}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Adress : </label>
                        <input type="text" className="form-control"
                                value={this.state.adress}
                                onChangeAdress={this.onChangeAdress}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Sex: </label>
                        <input type="text" className="form-control"
                                value={this.state.sex}
                                onChangeSex={this.onChangeSex}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Date of birth : </label>
                        <input type="Number" className="form-control"
                                value={this.state.date}
                                onChangeDate={this.onChangeDate}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Person" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}