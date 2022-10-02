;  int inc = 0
;  int i = 0;
;  for(i = 0; i < 5; i++){
;     inc = inc + 2;
;  }
;  print("%d\n", inc);

main:   MOV #0, R2      ; int inc;
        MOV #0, R3      ; int i;

for:    CMP #5, R3
        JZ print
        ADD #2, R2
        ADD #1, R3
        JMP for

print:  MOV R2, R6
        INT 10h
        INT 30h     ; Break line
        JMP main
