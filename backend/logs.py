import logging

log = logging.getLogger(__name__)
log.setLevel(logging.DEBUG)
handler = logging.FileHandler(filename="logs.log")
formatter = logging.Formatter(
    "%(asctime)s : %(levelname)s : %(message)s ", datefmt="%Y/%m/%d %H:%M:%S"
)
handler.setLevel(logging.DEBUG)
handler.setFormatter(formatter)
log.addHandler(handler)
