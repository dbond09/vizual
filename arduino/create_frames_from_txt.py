import json

with open('frames.txt') as fin:
   frames = json.load(fin)

frames_out = "#define FRAMES {"

for k, frame in enumerate(frames):
    frames_out += '{'
    for i, row in enumerate(frame):
        frames_out += '0b' + ''.join(list(map(str, row)))
        if(len(frame) - i > 1):
          frames_out += ','
    if(len(frames) - k > 1):
      frames_out += '},'

frames_out += '}}\n'
frames_out += "#define FRAMES_N " + str(len(frames))

open('frames.h', 'w').write(frames_out)
