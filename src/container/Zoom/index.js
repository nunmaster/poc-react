import React, { Component } from 'react';
import {
  View,
  Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');
import PhotoView from 'react-native-photo-view';

export default class Zoom extends Component {
  state = {}
  render() {
    return (
      <PhotoView
        source={{ uri: 'http://pbs.bento.storage.s3.amazonaws.com/hostedbento-prod/filer_public/Big%20Pacific/Photos/BigPacific_Promo_Thumb.jpg' }}
        minimumZoomScale={0.5}
        maximumZoomScale={3}
        androidScaleType="center"
        onLoad={() => console.log('Image loaded!')}
        style={{ width, height: height - 100 }}
      />
    );
  }
}
