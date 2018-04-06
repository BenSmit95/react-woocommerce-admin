import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import classes from './EditJewelry.css';

import JewelryForm from '../../../components/JewelryForm/JewelryForm';
import Spinner from '../../../components/UI/Spinner/Spinner';
import PageHeader from '../../../components/UI/PageHeader/PageHeader';
import Button from '../../../components/UI/Button/Button';

class EditJewelry extends Component {

	componentDidMount() {
		const id = this.props.location.pathname.split('/').pop();
		this.props.onFetchJewelry(id);
	}

	onSubmit = () => {
		this.props.onSubmit(Number(this.props.location.pathname.split('/').pop()));
	};

	onDelete = () => {
		this.props.onDelete(Number(this.props.location.pathname.split('/').pop()));
	};

	render() {
		let content;
		if (this.props.loading) {
			content = (
				<div className={classes.spinner}>
					<Spinner/>
				</div>
			)
		} else {
			content = (
				<React.Fragment>
					<JewelryForm onSubmit={this.onSubmit}/>
					<Button
						onClick={() => this.onDelete()}
					>
						Delete offer
					</Button>
				</React.Fragment>
			)
		}
		return (
			<div className={classes.EditJewelry}>
				<PageHeader>Edit jewelry</PageHeader>

				<div className={classes.content}>
					{content}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	loading: !state.jewelryForm.editJewelryLoaded
});

const mapDispatchToProps = (dispatch) => ({
	onDelete: (id) => dispatch(actions.deleteJewelry(id)),
	onFetchJewelry: (id) => dispatch(actions.fetchJewel(id)),
	onSubmit: (id) => dispatch(actions.updateJewelryFormOffer(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditJewelry);