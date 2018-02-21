import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import classes from './OfferPictures.css';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import Dropzone from 'react-dropzone';
import Button from '../../UI/Button/Button';
import Spinner from '../../UI/Spinner/Spinner';

class OfferPictures extends Component {

  state = {
    files: [],
    loading: false
  }

  handleRemoveImage = (e, key) => {
    e.stopPropagation();
    this.setState({ files: this.state.files.filter((file, index) => index !== key )});
  }

  onDrop = (acceptedFiles) => {
    this.setState({ files: this.state.files.concat(acceptedFiles) })
  }

  onImagesConfirmed = () => {
    this.props.onImagesConfirmed(this.state.files);
  }

  render() {
    const preview = this.state.files.length > 0 ? (
      <div className={classes.preview}>
        {this.state.files.map((file, key) => (
          <div
            key={`img${key}`}
            className={classes.image}
          >
            <img
              alt="preview"
              className={'formImage'}
              src={file.preview}
            />
            <button
              onClick={(e) => this.handleRemoveImage(e, key)}
              type="button"
              className={classes.removeButton}
            >
              X
            </button>
          </div>
        ))}
      </div>
    ) : (
        <div>Drag images here</div>
      )

    return (
      <section>
        <SectionHeader>Pictures of your watch</SectionHeader>
        <Dropzone
          accept="image/*"
          onDrop={this.onDrop}
          disablePreview={false}
          className={classes.dropzone}
        >
          {this.props.loading ? <Spinner /> : preview}
        </Dropzone>
        <Button
          type="button"
          disabled={!(this.state.files.length > 0) || this.props.loading}
          onClick={this.onImagesConfirmed}
        >
          Confirm Images
        </Button>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.watchForm.loading
});

const mapDispatchToProps = (dispatch) => ({
  onImagesConfirmed: (files) => dispatch(actions.confirmImages(files))
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferPictures);