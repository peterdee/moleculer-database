'use strict';

module.exports = {
	namespace: 'database',
  nodeID: null,
  
	logger: {
		type: 'Console',
		options: {
			colors: true,
			moduleColors: true,
			formatter: 'full',
			objectPrinter: null,
			autoPadding: false,
		},
	},
  
  logLevel: 'info',
	transporter: {
    type: 'NATS',
    options: {
      url: process.env.NODE_ENV === 'development'
        ? 'nats://0.0.0.0:4222'
        : 'nats://nats:4222',
      maxReconnectAttempts: 10,
    },
  },
	cacher: null,
	serializer: 'JSON',
	requestTimeout: 30 * 1000,

	retryPolicy: {
		enabled: false,
		retries: 5,
		delay: 100,
		maxDelay: 1000,
		factor: 2,
		check: (error) => error && !!error.retryable,
	},

	maxCallLevel: 10,
	heartbeatInterval: 30,
	heartbeatTimeout: 90,
	contextParamsCloning: false,

	tracking: {
		enabled: false,
		shutdownTimeout: 5000,
	},

	disableBalancer: false,

	registry: {
		strategy: 'RoundRobin',
		preferLocal: true,
	},

	circuitBreaker: {
		enabled: false,
		threshold: 0.5,
		minRequestCount: 20,
		windowTime: 60,
		halfOpenTime: 10 * 1000,
		check: (error) => error && error.code >= 500,
	},

	bulkhead: {
		enabled: false,
		concurrency: 10,
		maxQueueSize: 100,
	},

	validator: true,
	errorHandler: null,

	metrics: {
		enabled: false,
		reporter: {
			type: 'Prometheus',
			options: {
				port: 3030,
				path: '/metrics',
				defaultLabels: (registry) => ({
					namespace: registry.broker.namespace,
					nodeID: registry.broker.nodeID,
				}),
			},
		},
	},

	tracing: {
		enabled: false,
		exporter: {
			type: 'Console',
			options: {
				logger: null,
				colors: true,
				width: 100,
				gaugeWidth: 40,
			},
		},
  },

	replCommands: null,
};
