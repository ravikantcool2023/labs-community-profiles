/* eslint-env node */
'use strict';


module.exports = function(environment) {
  const ENV = {
    fontawesome: {
      icons: {
        'free-regular-svg-icons': 'all',
        'free-solid-svg-icons': 'all',
        'free-brands-svg-icons': ['github'],
      },
    },

    metricsAdapters: [
      {
        name: 'GoogleAnalytics',
        environments: ['development', 'production'],
        config: {
          id: 'UA-84250233-7',
          // Use `analytics_debug.js` in development
          // debug: environment === 'development',
          // Use verbose tracing of GA events
          // trace: environment === 'development',
          // Ensure development env hits aren't sent to GA
          sendHitTask: environment !== 'development',
        },
      },
      {
        name: 'GoogleAnalyticsFour',
        environments: ['development', 'production'],
        config: {
          id: 'G-69C5MVX6WW',
          options: {
            debug_mode: environment === 'development',
          },
        },
      },
    ],
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' www.google-analytics.com",
    },
    modulePrefix: 'labs-community-portal',
    environment,
    rootURL: '/',
    locationType: 'auto',
    'ember-cli-string-helpers': {
      only: ['dasherize'],
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },
    'mapbox-gl': {
      accessToken: '',
      map: {
        style: 'https://layers-api.planninglabs.nyc/v1/base/style.json',
      },
    },
    ZAP_API: process.env.ZAP_API_URL,
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  return ENV;
};
