import os
import string
f = os.popen('vcgencmd measure_clock arm').readline()
freq = "%.2f" % (int(f[f.index("=")+1:len(f)])/1000000000)
print(freq)
