import React from 'react';
import { autorun } from 'mobx';

export class View extends React.Component {
  disposeAutorun = () => {};

  componentDidMount() {
    this.disposeAutorun = autorun(() => {});
  }

  componentWillMount() {
    this.disposeAutorun();
  }
}
