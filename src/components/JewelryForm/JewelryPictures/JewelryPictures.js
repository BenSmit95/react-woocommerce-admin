import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import classes from './JewelryPictures.css';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import Button from '../../UI/Button/Button';
import Dropzone from 'react-dropzone';
import Spinner from '../../UI/Spinner/Spinner';

class JewelryPictures extends Component {
  state = {
    files: [],
    loading: false
  }

  handleRemoveImage = (e, key) => {
    e.stopPropagation();
    this.setState({ files: this.state.files.filter((file, index) => index !== key) });
  };

  handleRemoveImportImage = (e, id) => {
    e.stopPropagation();
    this.props.onRemoveImportImage(id);
  };

  onDrop = (acceptedFiles) => this.setState({ files: this.state.files.concat(acceptedFiles) });

  onImagesConfirmed = () => this.props.onImagesConfirmed(this.state.files);

  render() {
    const preview = (this.state.files.length > 0 || this.props.importImages.length) ? (
      <div className={classes.preview}>
        {this.props.importImages.map((image, key) => (
          <div
            key={`importJewelry${key}`}
            className={classes.image}
          >
            <img
              alt="preview"
              className={'formImage'}
              src={image.url}
            />
            <button
              onClick={(e) => this.handleRemoveImportImage(e, image.id)}
              type="button"
              className={classes.removeButton}
            >
              X
            </button>
          </div>
        ))}
        {this.state.files.map((file, key) => (
          <div
            key={`jimg${key}`}
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
      <section className={classes.JewelryPictures}>
        <SectionHeader>Offer Pictures</SectionHeader>
        <Button
          onClick={this.onImagesConfirmed}
          type="button"
          disabled={((this.state.files.length <= 0) && (this.props.importImages.length <= 0)) || this.props.loading}
        >
          Confirm Images
        </Button>
        <Dropzone
          accept="image/*"
          onDrop={this.onDrop}
          disablePreview={false}
          className={classes.dropzone}
        >
          {this.props.loading ? <Spinner /> : preview }
        </Dropzone>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.jewelryForm.imageLoading,
  importImages: state.jewelryForm.jewelryImportImages
});

const mapDispatchToProps = (dispatch) => ({
  onImagesConfirmed: (files) => dispatch(actions.confirmJewelryImages(files)),
  onRemoveImportImage: (id) => dispatch(actions.startRemoveImportImage(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(JewelryPictures);