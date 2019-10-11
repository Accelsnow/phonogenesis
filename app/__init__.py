from flask import Flask
from flask_bootstrap import Bootstrap

from config import Config
from script import get_default_data
import logging
from logging.handlers import RotatingFileHandler
from flask.logging import default_handler
import sys

# DATA initialization
DEFAULT_DATA = get_default_data()
TOTAL_RULE_COUNT = len(DEFAULT_DATA['rules'])

# flask initialization
app = Flask(__name__)
Bootstrap(app)
app.config.from_object(Config)

app.logger.setLevel(logging.DEBUG)
app.logger.removeHandler(default_handler)

formatter = logging.Formatter(fmt='%(asctime)s - %(levelname)s - %(message)s - %(module)s %(lineno)d@%(funcName)s',
                              datefmt="[%Y-%m-%d %H:%M:%S]")
file_handler = RotatingFileHandler('app/log/debug.log', maxBytes=20971520, backupCount=10, encoding='utf8')
file_handler.setLevel(logging.DEBUG)
file_handler.setFormatter(formatter)
app.logger.addHandler(file_handler)

console_handler = logging.StreamHandler(stream=sys.stderr)
console_handler.setLevel(logging.WARNING)
console_handler.setFormatter(formatter)
app.logger.addHandler(console_handler)

from app import routes
