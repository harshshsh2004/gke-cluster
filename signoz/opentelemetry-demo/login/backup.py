from flask import Flask, jsonify

# OTEL auto instrumentation
from opentelemetry.instrumentation.flask import FlaskInstrumentor
from opentelemetry.instrumentation.requests import RequestsInstrumentor

import logging

app = Flask(__name__)

# Enable auto-instrumentation
FlaskInstrumentor().instrument_app(app)
RequestsInstrumentor().instrument()

# Enable Python logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("login-service")

@app.route('/login')
def login():
    logger.info("Login endpoint called!")   # This log will appear in SigNoz
    return jsonify({"message": "Login service working!", "status": "ok"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
