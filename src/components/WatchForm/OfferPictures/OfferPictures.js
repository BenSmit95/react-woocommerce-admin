import React, { Component } from 'react';
import { connect } from 'react-redux';
import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import { setWatchImage } from '../../../store/actions/index';


class OfferPictures extends Component {

  onFileSelected = (e) => {
    const eventData = e.target.files;
    const files = [];
    for (let i = 0; i < eventData.length; i++) {
      files.push({ key: i, url: URL.createObjectURL(eventData[i])});
    }
    console.log(files);
    this.props.onFileSelected(files);
  }
  render() {
    return (
      <section>
        <SectionHeader>Pictures of your watch</SectionHeader>
        <input type="file" onChange={this.onFileSelected} multiple />
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  onFileSelected: (files) => dispatch(setWatchImage(files))
})

export default connect(null, mapDispatchToProps)(OfferPictures);