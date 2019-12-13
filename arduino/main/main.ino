#include <avr/pgmspace.h>
#include "frames.h"

int cols[] = {11, 10, 9, 8, 7, 6};
int dec[] = {4, 3, 2};

int rows[] = {0b000, 0b001, 0b011, 0b010, 0b110, 0b111, 0b101, 0b100};
//              0      1      3      2      6      7      5       4

const uint8_t frames[][6] PROGMEM = FRAMES;
int current_frame = 0;
uint8_t buffer;

void setup() {
  for (int i = 0; i < 6; i++) {
    pinMode(cols[i], OUTPUT);
    if(i < 3) pinMode(dec[i], OUTPUT);
  }
}

void loop() {
  for (int y = 0; y < 8; y++) {
    digitalWrite(dec[0], rows[y] & 1);
    digitalWrite(dec[1], rows[y] >> 1 & 1);
    digitalWrite(dec[2], rows[y] >> 2 & 1);
    if (rows[y] > 5) {
      continue;
    }
    for (int x = 0; x < 6; x++) {
      buffer = pgm_read_byte(&(frames[current_frame][rows[y]]));
      digitalWrite(cols[x], buffer >> x & 1);
    }
  }
  current_frame = (current_frame + 1) % FRAMES_N;
  delay(200);
}
