from flask import Flask
from config import Config
from script import get_default_data

DEFAULT_DATA = get_default_data()
TOTAL_RULE_COUNT = len(DEFAULT_DATA['rules'])

# flask initialization
app = Flask(__name__)
app.config.from_object(Config)

from app import routes
