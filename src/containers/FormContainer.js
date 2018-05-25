import React, {Component} from 'react';
import Form from './Form'

class FormContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arrayObj: [
				{name: '' , date: new Date().toISOString().slice(0,10), index: 0}
			]
		};

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

    addDocument = () => {
        this.setState({
        	arrayObj: [...this.state.arrayObj, {name: '' , date: new Date().toISOString().slice(0,10), index: this.state.arrayObj.length}],
        });
    };

    clearForm = () => {
        this.setState({
            arrayObj: [{name: '' , date: new Date().toISOString().slice(0,10), index: 0}]
        });
    }

	handleFormSubmit(e) {
		e.preventDefault();
		console.log('Dados para envio do e-mail:', this.state);
	};

    deleteIndex = (params) => {
        var count = 0;
		this.setState({arrayObj: this.state.arrayObj.filter(function(p) {
			var ret = false;
				if(p.index !== params.props.obj.index){
					ret = true;
					p.index = count;
					count++;
				}
				return ret
                })}
			);
	};

	render() {
		return (
			<form className="container" onSubmit={this.handleFormSubmit}>
                <div>
                {this.state.arrayObj.map((object, i) =>
					<Form
					hideBtnDelete={this.state.arrayObj.length === 1 ? true : false}
					key={i}
					obj={object}
					delete={this.deleteIndex}
					index={i}/>
				)}
                </div>
                <br />
                <button
                    className="btn float-right"
                    onClick={this.addDocument}>Adicionar documento</button>
                <br />
				<br />
				<input
					type="submit"
					className="btn btn-primary float-right"
					value="Enviar"/>
				<button
					className="btn btn-link float-left"
					onClick={this.clearForm}>Remover todas</button>
			</form>
		);
	}
}

export default FormContainer;
