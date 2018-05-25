import React, {Component} from 'react';
import SingleInput from '../components/SingleInput';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.obj.name,
            date: props.obj.date
        };

        this.handleFullNameChange = this.handleFullNameChange.bind(this);
        this.handleFullDateChange = this.handleFullDateChange.bind(this);
    }

    handleFullNameChange(e) {
        this.setState({ name: e.target.value });
        this.props.obj.name = e.target.value;
    }

    handleFullDateChange(e) {
        this.setState({ date: e.target.value });
        this.props.obj.date = e.target.value;
    }

    render() {
        return (
           <div>
               {this.props.hideBtnDelete ? null : <button
               className="btn float-right"
               onClick={this.props.delete.bind(null, this)}>Remover</button>}
                <h5>{this.props.index + 1}º Documento</h5>
                <SingleInput
                    inputType={'text'}
                    title={'Nome do Documento'}
                    name={'name'}
                    controlFunc={this.handleFullNameChange}
                    content={this.props.obj.name}
                    placeholder={'Escreva o nome do documento'}/>
                <SingleInput
                    inputType={'date'}
                    title={'Data de validade'}
                    name={'date'}
                    controlFunc={this.handleFullDateChange}
                    content={this.props.obj.date}
                    placeholder={'Type first and last name here'} />
               <br />

               <hr />
           </div>
        );
    }
}
export default Form;
