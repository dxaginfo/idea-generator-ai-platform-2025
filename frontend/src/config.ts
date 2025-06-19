// API configuration
export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Feature flags
export const FEATURES = {
  TREND_ANALYSIS: true,
  CONTENT_CALENDAR: true,
  KEYWORD_SUGGESTIONS: true,
};

// UI configuration
export const UI_CONFIG = {
  ITEMS_PER_PAGE: 10,
  MAX_IDEAS_PER_REQUEST: 20,
};
