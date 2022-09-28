MOV #0, R2
MOV #6, R3
JMP sum

sum:
    CMP R3, R2
    JZ print
    ADD #1, R2
    JMP sum

print:
    MOV R3, R6
    INT 10h
