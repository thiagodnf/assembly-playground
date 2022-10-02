main:   MOV #0, R6
        INT 10h
        INT 10h
        INT 10h
        INT 10h
        INT 30h
        JMP label
label:
        MOV #0, R6
        INT 10h
        INT 20h
        INT 20h
        INT 10h
        INT 30h
        JMP label
