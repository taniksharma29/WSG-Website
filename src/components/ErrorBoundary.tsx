import React from 'react';
import { ShieldAlert, RefreshCw, Home } from 'lucide-react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error | null;
  errorInfo?: React.ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  override state: ErrorBoundaryState = { hasError: false, error: null, errorInfo: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, errorInfo: null };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error in WSG Application:', error, errorInfo);
    this.setState({ error, errorInfo });
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
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0B0B0D] text-white flex items-start justify-center p-6 text-left font-sans">
          <div className="max-w-4xl w-full bg-[#141414] border border-[#D89B18]/40 rounded-3xl p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.8)] space-y-6">
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
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                An exception occurred while rendering this view. The full error is shown below for debugging.
              </p>
            </div>

            <div className="bg-[#0F0F14] border border-[#2F2F3A] rounded-3xl p-6 text-left text-sm text-[#E2E2E8] overflow-auto max-h-[60vh]">
              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-[#F2B632]">Error:</span>
                  <div className="mt-2 text-[#F8F8F8] break-words">{this.state.error?.message || 'Unknown error'}</div>
                </div>
                <div>
                  <span className="font-semibold text-[#F2B632]">Component Stack:</span>
                  <div className="mt-2 text-[#F8F8F8] whitespace-pre-wrap break-words">{this.state.errorInfo?.componentStack || 'No component stack available.'}</div>
                </div>
                <div>
                  <span className="font-semibold text-[#F2B632]">Stack Trace:</span>
                  <div className="mt-2 text-[#F8F8F8] whitespace-pre-wrap break-words">{this.state.error?.stack || 'No stack trace available.'}</div>
                </div>
              </div>
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
