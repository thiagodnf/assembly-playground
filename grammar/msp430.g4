grammar msp430;

prog
   : line* EOF
   ;

line
   : (instruction | assemblerinstruction | lbl)? EOL
   ;

instruction
   : label? opcode argumentlist?
   ;

assemblerinstruction
   : argument? assembleropcode argumentlist?
   ;

assembleropcode
   : ASSEMBLER_INSTRUCTION
   ;

lbl
   : label ':'
   ;

argumentlist
   : argument (',' argumentlist)?
   ;

label
   : name
   ;

argument
   : prefix_? (number | name | string_ | '*') (('+' | '-') number)?
   | '(' argument ')'
   ;

prefix_
   : '#'
   ;

string_
   : STRING
   ;

name
   : NAME
   ;

number
   : NUMBER
   ;

opcode
   : ADC
   | AND
   | ASL
   | BCC
   | BCS
   | BEQ
   | BIT
   | BMI
   | BNE
   | BPL
   | BRA
   | BRK
   | BVC
   | BVS
   | CLC
   | CLD
   | CLI
   | CLV
   | CMP
   | CPX
   | CPY
   | DEC
   | DEX
   | DEY
   | EOR
   | INC
   | INX
   | INY
   | JMP
   | JSR
   | LDA
   | LDY
   | LDX
   | LSR
   | NOP
   | ORA
   | PHA
   | PHX
   | PHY
   | PHP
   | PLA
   | PLP
   | PLY
   | ROL
   | ROR
   | RTI
   | RTS
   | SBC
   | SEC
   | SED
   | SEI
   | STA
   | STX
   | STY
   | STZ
   | TAX
   | TAY
   | TSX
   | TXA
   | TXS
   | TYA
   ;


ASSEMBLER_INSTRUCTION
   : 'ORG' | 'EQU' | 'ASC' | 'DS' | 'DFC' | '='
   ;


fragment A
   : ('a' | 'A')
   ;


fragment B
   : ('b' | 'B')
   ;


fragment C
   : ('c' | 'C')
   ;


fragment D
   : ('d' | 'D')
   ;


fragment E
   : ('e' | 'E')
   ;


fragment F
   : ('f' | 'F')
   ;


fragment G
   : ('g' | 'G')
   ;


fragment H
   : ('h' | 'H')
   ;


fragment I
   : ('i' | 'I')
   ;


fragment J
   : ('j' | 'J')
   ;


fragment K
   : ('k' | 'K')
   ;


fragment L
   : ('l' | 'L')
   ;


fragment M
   : ('m' | 'M')
   ;


fragment N
   : ('n' | 'N')
   ;


fragment O
   : ('o' | 'O')
   ;


fragment P
   : ('p' | 'P')
   ;


fragment Q
   : ('q' | 'Q')
   ;


fragment R
   : ('r' | 'R')
   ;


fragment S
   : ('s' | 'S')
   ;


fragment T
   : ('t' | 'T')
   ;


fragment U
   : ('u' | 'U')
   ;


fragment V
   : ('v' | 'V')
   ;


fragment W
   : ('w' | 'W')
   ;


fragment X
   : ('x' | 'X')
   ;


fragment Y
   : ('y' | 'Y')
   ;


fragment Z
   : ('z' | 'Z')
   ;

/*
* opcodes
*/

ADC
   : A D C
   ;


AND
   : A N D
   ;


ASL
   : A S L
   ;


BCC
   : B C C
   ;


BCS
   : B C S
   ;


BEQ
   : B E Q
   ;


BIT
   : B I T
   ;


BMI
   : B M I
   ;


BNE
   : B N E
   ;


BPL
   : B P L
   ;


BRA
   : B R A
   ;


BRK
   : B R K
   ;


BVC
   : B V C
   ;


BVS
   : B V S
   ;


CLC
   : C L C
   ;


CLD
   : C L D
   ;


CLI
   : C L I
   ;


CLV
   : C L V
   ;


CMP
   : C M P
   ;


CPX
   : C P X
   ;


CPY
   : C P Y
   ;


DEC
   : D E C
   ;


DEX
   : D E X
   ;


DEY
   : D E Y
   ;


EOR
   : E O R
   ;


INC
   : I N C
   ;


INX
   : I N X
   ;


INY
   : I N Y
   ;


JMP
   : J M P
   ;


JSR
   : J S R
   ;


LDA
   : L D A
   ;


LDY
   : L D Y
   ;


LDX
   : L D X
   ;


LSR
   : L S R
   ;


NOP
   : N O P
   ;


ORA
   : O R A
   ;


PHA
   : P H A
   ;


PHX
   : P H X
   ;


PHY
   : P H Y
   ;


PHP
   : P H P
   ;


PLA
   : P L A
   ;


PLP
   : P L P
   ;


PLY
   : P L Y
   ;


ROL
   : R O L
   ;


ROR
   : R O R
   ;


RTI
   : R T I
   ;


RTS
   : R T S
   ;


SBC
   : S B C
   ;


SEC
   : S E C
   ;


SED
   : S E D
   ;


SEI
   : S E I
   ;


STA
   : S T A
   ;


STX
   : S T X
   ;


STY
   : S T Y
   ;


STZ
   : S T Z
   ;


TAX
   : T A X
   ;


TAY
   : T A Y
   ;


TSX
   : T S X
   ;


TXA
   : T X A
   ;


TXS
   : T X S
   ;


TYA
   : T Y A
   ;


NAME
   : [a-zA-Z] [a-zA-Z0-9."]*
   ;


NUMBER
   : '$'? [0-9a-fA-F] +
   ;


COMMENT
   : ';' ~ [\r\n]* -> skip
   ;


STRING
   : '"' ~ ["]* '"'
   ;


EOL
   : [\r\n] +
   ;


WS
   : [ \t] -> skip
   ;
