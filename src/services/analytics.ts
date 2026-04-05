export const Analytics = {
  logEvent: (eventName: string, params?: Record<string, any>) => {
    try {
      const records = JSON.parse(localStorage.getItem('navegante_metrics') || '[]');
      records.push({
        id: Date.now(),
        timestamp: new Date().toISOString(),
        event: eventName,
        metadata: params || {}
      });
      localStorage.setItem('navegante_metrics', JSON.stringify(records));
      console.log(`[Analytics Tracked]: ${eventName}`, params);
    } catch (e) {
      console.error('Local Storage error', e);
    }
  },

  getMetrics: () => {
    try {
      return JSON.parse(localStorage.getItem('navegante_metrics') || '[]');
    } catch {
      return [];
    }
  },

  clearMetrics: () => {
    localStorage.removeItem('navegante_metrics');
  }
};
