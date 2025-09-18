// Centralized error handling utility
// In production, this would send errors to a service like Sentry, LogRocket, etc.

export const logError = (message, error = null, context = {}) => {
  // In development, still show errors in console for debugging
  if (import.meta.env.DEV) {
    console.error(message, error, context);
  }

  // In production, you would send to error tracking service
  // Example with Sentry (not implemented, just showing structure):
  /*
  if (import.meta.env.PROD && window.Sentry) {
    window.Sentry.captureException(error || new Error(message), {
      extra: context
    });
  }
  */

  // For now, we'll store errors in sessionStorage for debugging
  // This can be accessed by support team if needed
  if (typeof window !== 'undefined') {
    try {
      const errorLog = JSON.parse(sessionStorage.getItem('errorLog') || '[]');
      errorLog.push({
        message,
        error: error?.message || error?.toString() || null,
        context,
        timestamp: new Date().toISOString(),
        url: window.location.href
      });

      // Keep only last 50 errors to avoid storage issues
      if (errorLog.length > 50) {
        errorLog.shift();
      }

      sessionStorage.setItem('errorLog', JSON.stringify(errorLog));
    } catch (storageError) {
      // Silently fail if storage is full or unavailable
    }
  }
};

// Helper function to clear error log (can be called from console if needed)
export const clearErrorLog = () => {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('errorLog');
  }
};

// Helper function to get error log (can be called from console if needed)
export const getErrorLog = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(sessionStorage.getItem('errorLog') || '[]');
  }
  return [];
};