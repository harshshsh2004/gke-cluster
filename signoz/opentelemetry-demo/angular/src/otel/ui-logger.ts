import { trace } from '@opentelemetry/api';

const tracer = trace.getTracer('angular-ui');

export function logEvent(level: 'INFO' | 'WARN' | 'ERROR', message: string, meta: any = {}) {
  const span = tracer.startSpan('ui.event', {
    attributes: {
      'log.level': level,
      'log.message': message,
      ...Object.fromEntries(
        Object.entries(meta).map(([k, v]) => [`log.${k}`, String(v)])
      )
    }
  });
  span.end();
}
