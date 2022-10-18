import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  fallback?: JSX.Element | ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  errorMessage?: string;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: any) {
    super(props);
    this.state = { errorMessage: "" };
  }

  static getDerivedStateFromError(error: any) {
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error: any, info: ErrorInfo) {
    void error;
    console.info(info);
  }

  render(): JSX.Element | ReactNode {
    if (this.state.errorMessage) {
      return this.props.fallback ?? <p>{this.state.errorMessage}</p>;
    }

    return this.props.children;
  }
}
