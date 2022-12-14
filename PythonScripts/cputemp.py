import os
import string
f = os.popen('vcgencmd measure_temp').readline()
print(f[f.index("=")+1:len(f)-3])
