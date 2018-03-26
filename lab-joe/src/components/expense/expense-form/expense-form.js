import React from 'react';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.expense
            ? this.props.expense
            : {
                name: '',
                cost: '',
                categoryId: this.props.categoryId,
            };
        // Handler - binding here:
        Object.getOwnPropertyNames(ExpenseForm.prototype)
            .filter(prop => prop.startsWith('handle'))
            .map(prop => this[prop] = this[prop].bind(this));
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onComplete(this.state);
        // clear boxes and set state to empty!!
        this.setState({ name: '', cost: '' });
    }
    render() {
        return (
            <form className="expense-form" onSubmit={this.handleSubmit}>
                <input
                    className='expense-name-input'
                    type='text'
                    name='name'
                    placeholder='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                />

                <input
                    className='expense-cost-input'
                    type='number'
                    name='cost'
                    placeholder='cost'
                    value={this.state.cost}
                    onChange={this.handleChange}
                />

                <button type='submit'>{this.props.buttonText}</button>
            </form>
        );
    }
}

export default ExpenseForm;