;  int a = 10
;  int b = 20;
;  int c = 0;
;  if(a < b){
;    c = 1;
;  } else {
;    c = -1;
;  }
MOV #10, R0 ; int a = 10
MOV #20, R1 ; int b = 20
MOV #0, R2  ; int c = 0

CMP R1, R0
JN 7
MOV #-1, R2
JMP 8
MOV #1, R2
MOV R2, [0x0]
