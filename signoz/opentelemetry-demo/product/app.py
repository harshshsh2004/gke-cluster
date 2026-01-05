from flask import Flask, jsonify

# OTEL auto instrumentation
from opentelemetry.instrumentation.flask import FlaskInstrumentor
from opentelemetry.instrumentation.requests import RequestsInstrumentor
from opentelemetry.instrumentation.system_metrics import SystemMetricsInstrumentor

import logging

app = Flask(__name__)

# Enable OTEL instrumentation
#FlaskInstrumentor().instrument_app(app)
#RequestsInstrumentor().instrument()
#SystemMetricsInstrumentor().instrument()   # FOR PROCESS METRICS

# Normal python logging (OTEL automatically captures it)
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("product-service")

@app.route('/product')
def product():
    logger.info("Product endpoint called!")   # This will appear in SigNoz Logs
    return jsonify({"message": "Product service working!", "products": ["laptop", "phone", "tablet"]})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002)
