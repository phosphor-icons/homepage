import { Component, ErrorInfo, ReactNode } from "react";
import ReactGA from "react-ga4";

interface ErrorBoundaryProps {
  fallback?: JSX.Element | ReactNode;
  children?: JSX.Element | ReactNode;
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
    console.error(error);
    ReactGA.event("exception", {
      description: JSON.stringify({
        error:
          error instanceof Error
            ? error.message
            : error.toString?.() ?? "UNSERIALIZEABLE",
        info,
      }),
    });
  }

  render(): JSX.Element | ReactNode {
    if (this.state.errorMessage) {
      return this.props.fallback ?? <p>{this.state.errorMessage}</p>;
    }

    return this.props.children;
  }
}
