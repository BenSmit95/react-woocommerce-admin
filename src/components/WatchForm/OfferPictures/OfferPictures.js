import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWatchImage } from '../../../store/actions/index';
import { postImages } from '../../../_secret/auth';
import classes from './OfferPictures.css';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import Dropzone from 'react-dropzone';
import Button from '../../UI/Button/Button';

class OfferPictures extends Component {

  state = {
    files: [],
    loading: false
  }

  onDrop = (acceptedFiles) => {
    this.setState({ files: acceptedFiles });
  }

  onImagesConfirmed = () => {
    this.setState({ loading: true })
    postImages(this.state.files).then((urls) => {
      console.log(urls);
      this.props.onImagesConfirmed(urls);
      this.setState({ loading: false });
    });
  }

  render() {
    const preview = this.state.files.length > 0 ? (
      <div>
        {this.state.files.map((file, key) => (
          <div 
            key={`img${key}`}
            className={classes.image}
          >
            <img className={'formImage'} src={file.preview} />
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
        >
          {preview}
        </Dropzone>
        <Button
          type="button"
          disabled={!(this.state.files.length > 0)} 
          onClick={this.onImagesConfirmed}
        >
          Confirm Images
        </Button>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  onImagesConfirmed: (files) => dispatch(setWatchImage(files))
});

export default connect(null, mapDispatchToProps)(OfferPictures);