;  int a = 1
;  int b = 5;
;  if(a < b){
;    c = 1;
;  } else {
;    c = -1;
;  }
;  print("%d", c);
main:
        MOV #1, R2 ; int a = 1
        MOV #5, R3 ; int b = 5
        CMP R3, R2 ; a - b
        JN label2
        JMP label1

label1: MOV #-1, R6
        JMP print

label2:  MOV #1, R6
        JMP print

print:  INT 10h
        INT 10h
        INT 20h
        JMP main
