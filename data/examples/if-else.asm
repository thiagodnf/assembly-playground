;  int a = 10
;  int b = 20;
;  int c = 0;
;  if(a < b){
;    c = 1;
;  } else {
;    c = -1;
;  }
MOV #10, R2 ; int a = 10
MOV #20, R3 ; int b = 20
MOV #0, R2  ; int c = 0

CMP R3, R2
JN 7
MOV #-1, R2
JMP 8
MOV #1, R2
MOV R2, R4
INT 10h
