JMP sum
JMP 2{}
JMP 0x123FAB;
main:
main12:
main_123:

ADD R1, R2
ADD #1, R2
ADD #0b10101, R2
ADD #0b10101,       R2
ADD #0b10101     ,     R2
ADD #0x123F, R2

 ;   MOV #0, R2
  ;  MOV #6, R3
   ; JMP sum

;sum:
 ;   CMP R3, R2
  ;  JZ print
   ; ADD #1, R2
    ;JMP sum

;print:
 ;   MOV R3, R6
  ;  INT 10h
