import React from 'react';
import CodePush from 'react-native-code-push';
import { Image } from 'react-native';
import { Container, View, Content, Button, Text } from 'native-base';

import { laptop_phone } from '../../assets/images';

import styles from './styles';

@CodePush({
  installMode: CodePush.InstallMode.IMMEDIATE,
  checkFrequency: CodePush.CheckFrequency.MANUAL
})
export default class Setting extends React.Component {

  constructor() {
    super();
    this.state = { restartAllowed: true };
  }

  codePushStatusDidChange(syncStatus) {
    switch (syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        this.setState({ syncMessage: 'Checking for update.' });
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        this.setState({ syncMessage: 'Downloading package.' });
        break;
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        this.setState({ syncMessage: 'Awaiting user action.' });
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        this.setState({ syncMessage: 'Installing update.' });
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        this.setState({ syncMessage: 'App up to date.', progress: false });
        break;
      case CodePush.SyncStatus.UPDATE_IGNORED:
        this.setState({
          syncMessage: 'Update cancelled by user.',
          progress: false
        });
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        this.setState({
          syncMessage: 'Update installed and will be applied on restart.',
          progress: false
        });
        break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        this.setState({
          syncMessage: 'An unknown error occurred.',
          progress: false
        });
        break;
    }
  }

  codePushDownloadDidProgress(progress) {
    this.setState({ progress });
  }

  toggleAllowRestart() {
    this.state.restartAllowed
      ? CodePush.disallowRestart()
      : CodePush.allowRestart();

    this.setState({ restartAllowed: !this.state.restartAllowed });
  }

  getUpdateMetadata() {
    CodePush.getUpdateMetadata(CodePush.UpdateState.RUNNING).then(
      (metadata: LocalPackage) => {
        this.setState({
          syncMessage: metadata
            ? JSON.stringify(metadata)
            : 'Running binary version',
          progress: false
        });
      },
      (error: any) => {
        this.setState({ syncMessage: `Error: ${  error}`, progress: false });
      }
    );
  }

  /** Update is downloaded silently, and applied on restart (recommended) */
  sync() {
    CodePush.sync(
      {},
      this.codePushStatusDidChange.bind(this),
      this.codePushDownloadDidProgress.bind(this)
    );
  }

  /** Update pops a confirmation dialog, and then immediately reboots the app */
  syncImmediate() {
    CodePush.sync(
      { installMode: CodePush.InstallMode.IMMEDIATE, updateDialog: true },
      this.codePushStatusDidChange.bind(this),
      this.codePushDownloadDidProgress.bind(this)
    );


    // CodePush.notifyAppReady()
  }

  render() {
    let progressView;

    if (this.state.progress) {
      progressView = (
        <Text style={styles.messages}>
          {this.state.progress.receivedBytes} of{' '}
          {this.state.progress.totalBytes} bytes received
        </Text>
      );
    }

    return (
      <Container style={styles.container}>
        <Text style={styles.welcome}>Welcome to CodePush!</Text>
        <Button onPress={this.sync.bind(this)}>
          <Text style={styles.syncButton}>Press for background sync</Text>
        </Button>
        <Button onPress={this.syncImmediate.bind(this)}>
          <Text style={styles.syncButton}>Press for dialog-driven sync</Text>
        </Button>
        {progressView}
        <Image
          style={styles.image}
          resizeMode={Image.resizeMode.contain}
          source={laptop_phone}
        />
        <Button onPress={this.toggleAllowRestart.bind(this)}>
          <Text style={styles.restartToggleButton}>
            Restart {this.state.restartAllowed ? 'allowed' : 'forbidden'}
          </Text>
        </Button>
        <Button onPress={this.getUpdateMetadata.bind(this)}>
          <Text style={styles.syncButton}>Press for Update Metadata</Text>
        </Button>

        <Button onPress={() => CodePush.notifyAppReady()}>
          <Text>Notify ready</Text>
        </Button>

        <Text style={styles.messages}>{this.state.syncMessage || ''}</Text>
      </Container>
    );
  }
}
