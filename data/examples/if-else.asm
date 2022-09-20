;  int a = 1
;  int b = 5;
;  if(a < b){
;    c = 1;
;  } else {
;    c = -1;
;  }
MOV #1, R2 ; int a = 1
MOV #5, R3 ; int b = 5

CMP R3, R2
JN 6
MOV #-1, R6
JMP 7
MOV #1, R6
INT 10h
