import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import * as APIResponseMockData from './mockContact.json';
import './App.css';
import './Form.css';
import { Form } from './Form';

interface Props {}

interface Dimensions {
  width: number;
  height: number;
}

export type Contact = typeof APIResponseMockData['results'][0];
interface State {
  result?: string;
  scanning: boolean;
  contact?: any;
}

class App extends Component<Props, State> {
  API_URL = 'https://randomuser.me/api/';

  state: State = {
    result: undefined,
    scanning: false,
    contact: undefined,
  };

  handleScan = async (data: string | null) => {
    if (data) {
      this.setState({
        result: data,
        scanning: false,
      });

      try {
        await this.setContact(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  handleError = (err: ErrorEvent) => {
    alert(err);
  };

  getDimensions = (): Dimensions => ({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  sendContactID = async (contactID: string): Promise<typeof APIResponseMockData> => {
    console.info('Receiving contact from', `${this.API_URL}/${contactID}`);
    const response = await fetch(this.API_URL);
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  };

  setContact = async (contactID: string): Promise<void> => {
    const { results } = await this.sendContactID(contactID);
    this.setState({ contact: results[0] });
  };

  submit = async (data: Partial<Contact>) => {
    console.info('Contact posted', data);
    return new Promise(resolve => {
      alert('Posting to ' + this.API_URL + ', check the console');
      resolve();
    });
  };

  handleSubmit = async (data: Partial<Contact>) => {
    try {
      await this.submit(data);
      this.setState({ contact: undefined });
    } catch (error) {
      console.error(error);
    }
  };

  get isSafari() {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      return !(ua.indexOf('chrome') > -1);
    }
  }

  render() {
    //Todo: implement onDimensionsChange listener
    const dimensions = this.getDimensions();
    const { scanning, contact } = this.state;

    return (
      <>
        <QrReader
          delay={scanning && 100}
          style={{ ...dimensions, backgroundColor: 'black', position: 'absolute', zIndex: -1 }}
          onError={this.handleError}
          onScan={this.handleScan}
          legacyMode={this.isSafari}
        />
        <div className={scanning ? 'Overlay  Overlay-Active' : 'Overlay'}>
          {contact && <Form onSubmit={this.handleSubmit} contact={contact} />}
          {!contact && (
            <button onClick={() => this.setContact('SOME_ID')}>Read fake contact</button>
          )}
          <span
            onClick={() => {
              this.setState(prevState => ({
                scanning: !prevState.scanning,
              }));
            }}
          >
            {scanning ? 'ON' : 'OFF'}
          </span>
        </div>
      </>
    );
  }
}

export default App;
