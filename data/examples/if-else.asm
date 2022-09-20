;  int a = 1
;  int b = 5;
;  int c = 0;
;  if(a < b){
;    c = 1;
;  } else {
;    c = -1;
;  }
MOV #1, R2 ; int a = 1
MOV #5, R3 ; int b = 5
MOV #0, R2  ; int c = 0

CMP R3, R2
JN 7
MOV #-1, R2
JMP 8
MOV #1, R2
MOV R2, R6
INT 10h
