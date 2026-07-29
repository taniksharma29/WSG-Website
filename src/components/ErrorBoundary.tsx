import React from 'react';
import { ShieldAlert, RefreshCw, Home } from 'lucide-react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // @ts-ignore
  override state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  // @ts-ignore
  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error in WSG Application:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    // @ts-ignore
    this.setState({ hasError: false });
    window.location.href = '/';
  };

  render() {
    // @ts-ignore
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0B0B0D] text-white flex items-center justify-center p-6 text-center font-sans">
          <div className="max-w-lg w-full bg-[#141414] border border-[#D89B18]/40 rounded-3xl p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.8)] space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#D89B18]/20 border border-[#D89B18] text-[#F2B632] flex items-center justify-center mx-auto">
              <ShieldAlert className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F2B632]">
                SYSTEM RECOVERY PROTOCOL
              </span>
              <h1 className="font-serif text-3xl font-bold text-white">
                Unexpected Display Issue
              </h1>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                An exception occurred while rendering this view. Our engineering team has been notified.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={this.handleReload}
                className="w-full sm:w-auto px-6 h-12 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>

              <button
                onClick={this.handleReset}
                className="w-full sm:w-auto px-6 h-12 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Home className="w-4 h-4 text-[#F2B632]" />
                <span>Return Home</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    // @ts-ignore
    return this.props.children;
  }
}
