## updates frames.h with the contents of a json file

import json
import sys

frames = json.loads(open(sys.argv[1]).read())

frames_out = '#define FRAMES {'

for frame in frames:
    frames_out += '{'
    for row in frame:
        frames_out += '0b' + ''.join(list(map(str, row))) + ','
    frames_out += '},'

frames_out += '}\n'
frames_out += "#define FRAMES_N " + str(len(frames))

open('main/frames.h', 'w').write(frames_out)
