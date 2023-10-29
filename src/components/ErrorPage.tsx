import { ErrorBoundary } from 'react-error-boundary';
import React, { Component } from 'react';

interface Props {
  isErrorChange: (arg: boolean) => void;
}

interface State {
  hasError: boolean;
}

export default class ErrorPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  change = () => {
    this.props.isErrorChange(this.state.hasError);
  };

  render() {
    return (
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <div>OOPS, something went wrong (((</div>
        <button onClick={this.change}>Reset</button>
      </ErrorBoundary>
    );
  }
}
