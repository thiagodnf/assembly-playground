;  int inc = 0
;  int i = 0;
;  for(i = 0; i < 10; i++){
;     inc = inc + 2;
;  }
MOV #0, R0 ; int inc;
MOV #0, R1 ; int i;
CMP #10, R1
JZ 7
ADD #2, R0
ADD #1, R1
JMP 2
MOV R0, [0x0]
