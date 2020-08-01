import React, { ErrorInfo } from "react";

interface ErrorBoundaryProps {
  fallback?: JSX.Element;
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state = { errorMessage: "" };

  static getDerivedStateFromError(error: any) {
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error: any, info: ErrorInfo) {
    console.error(error);
    console.info(info);
  }

  render() {
    if (this.state.errorMessage) {
      return this.props.fallback ?? <p>{this.state.errorMessage}</p>;
    }

    return this.props.children;
  }
}
