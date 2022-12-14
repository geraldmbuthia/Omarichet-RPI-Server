import Adafruit_DHT
import json

sensor = Adafruit_DHT.DHT11
pin = 4

humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
dhtData = {}
dhtData["humidity"] = humidity
dhtData["temperature"] = temperature
obj = json.dumps(dhtData)
print(obj)
