import React, { Component, ReactNode } from 'react';
import ErrorPage from './ErrorPage';

export interface IErrorBoundaryProps {
  children: React.ReactNode;
}

export interface IErrorBoundaryState {
  hasError: boolean;
  errorString: string;
}

export default class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  public state: IErrorBoundaryState = {
    hasError: false,
    errorString: '',
  };

  componentDidCatch(error: Error) {
    this.setState({ hasError: true, errorString: error.message });
  }

  public render(): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <ErrorPage
          isErrorChange={(hasError: boolean) => this.setState({ hasError })}
        />
      );
    }

    return children;
  }
}
