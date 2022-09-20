;  int inc = 0
;  int i = 0;
;  for(i = 0; i < 10; i++){
;     inc = inc + 2;
;  }
MOV #0, R2 ; int inc;
MOV #0, R3 ; int i;
CMP #10, R3
JZ 7
ADD #2, R2
ADD #1, R3
JMP 2
MOV R2, R4
INT 10h
