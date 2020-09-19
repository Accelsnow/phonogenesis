from flask import Flask
from flask_bootstrap import Bootstrap
from flask.json import JSONEncoder
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_socketio import SocketIO, emit
from config import Config
from script import get_default_data
import logging
from logging.handlers import RotatingFileHandler
from flask.logging import default_handler
import sys

# DATA initialization
DEFAULT_DATA = get_default_data()
TOTAL_RULE_COUNT = len(DEFAULT_DATA['rules'])


class PhonogenesisJSONEncoder(JSONEncoder):
    def default(self, o):
        if callable(getattr(o, 'serialize', None)):
            return o.serialize()

        return super(PhonogenesisJSONEncoder, self).default(o)


# flask initialization
app = Flask(__name__)
CORS(app=app, supports_credentials=True)
Bootstrap(app)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
socketio = SocketIO(app)
# login = LoginManager()
# login.init_app(app)

app.json_encoder = PhonogenesisJSONEncoder
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

from app import routes, models
