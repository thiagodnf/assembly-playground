// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import msp430Listener from './msp430Listener.js';
import msp430Visitor from './msp430Visitor.js';

const serializedATN = [4,1,76,99,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
13,7,13,1,0,5,0,30,8,0,10,0,12,0,33,9,0,1,0,1,0,1,1,1,1,1,1,3,1,40,8,1,1,
1,1,1,1,2,3,2,45,8,2,1,2,1,2,3,2,49,8,2,1,3,3,3,52,8,3,1,3,1,3,3,3,56,8,
3,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,3,6,66,8,6,1,7,1,7,1,8,3,8,71,8,8,1,8,
1,8,1,8,1,8,3,8,77,8,8,1,8,1,8,3,8,81,8,8,1,8,1,8,1,8,1,8,3,8,87,8,8,1,9,
1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,13,0,0,14,0,2,4,6,8,10,12,
14,16,18,20,22,24,26,0,2,1,0,4,5,1,0,10,70,99,0,31,1,0,0,0,2,39,1,0,0,0,
4,44,1,0,0,0,6,51,1,0,0,0,8,57,1,0,0,0,10,59,1,0,0,0,12,62,1,0,0,0,14,67,
1,0,0,0,16,86,1,0,0,0,18,88,1,0,0,0,20,90,1,0,0,0,22,92,1,0,0,0,24,94,1,
0,0,0,26,96,1,0,0,0,28,30,3,2,1,0,29,28,1,0,0,0,30,33,1,0,0,0,31,29,1,0,
0,0,31,32,1,0,0,0,32,34,1,0,0,0,33,31,1,0,0,0,34,35,5,0,0,1,35,1,1,0,0,0,
36,40,3,4,2,0,37,40,3,6,3,0,38,40,3,10,5,0,39,36,1,0,0,0,39,37,1,0,0,0,39,
38,1,0,0,0,39,40,1,0,0,0,40,41,1,0,0,0,41,42,5,75,0,0,42,3,1,0,0,0,43,45,
3,14,7,0,44,43,1,0,0,0,44,45,1,0,0,0,45,46,1,0,0,0,46,48,3,26,13,0,47,49,
3,12,6,0,48,47,1,0,0,0,48,49,1,0,0,0,49,5,1,0,0,0,50,52,3,16,8,0,51,50,1,
0,0,0,51,52,1,0,0,0,52,53,1,0,0,0,53,55,3,8,4,0,54,56,3,12,6,0,55,54,1,0,
0,0,55,56,1,0,0,0,56,7,1,0,0,0,57,58,5,9,0,0,58,9,1,0,0,0,59,60,3,14,7,0,
60,61,5,1,0,0,61,11,1,0,0,0,62,65,3,16,8,0,63,64,5,2,0,0,64,66,3,12,6,0,
65,63,1,0,0,0,65,66,1,0,0,0,66,13,1,0,0,0,67,68,3,22,11,0,68,15,1,0,0,0,
69,71,3,18,9,0,70,69,1,0,0,0,70,71,1,0,0,0,71,76,1,0,0,0,72,77,3,24,12,0,
73,77,3,22,11,0,74,77,3,20,10,0,75,77,5,3,0,0,76,72,1,0,0,0,76,73,1,0,0,
0,76,74,1,0,0,0,76,75,1,0,0,0,77,80,1,0,0,0,78,79,7,0,0,0,79,81,3,24,12,
0,80,78,1,0,0,0,80,81,1,0,0,0,81,87,1,0,0,0,82,83,5,6,0,0,83,84,3,16,8,0,
84,85,5,7,0,0,85,87,1,0,0,0,86,70,1,0,0,0,86,82,1,0,0,0,87,17,1,0,0,0,88,
89,5,8,0,0,89,19,1,0,0,0,90,91,5,74,0,0,91,21,1,0,0,0,92,93,5,71,0,0,93,
23,1,0,0,0,94,95,5,72,0,0,95,25,1,0,0,0,96,97,7,1,0,0,97,27,1,0,0,0,11,31,
39,44,48,51,55,65,70,76,80,86];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class msp430Parser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "':'", "','", "'*'", "'+'", "'-'", "'('", 
                            "')'", "'#'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "ASSEMBLER_INSTRUCTION", "ADC", "AND", 
                             "ASL", "BCC", "BCS", "BEQ", "BIT", "BMI", "BNE", 
                             "BPL", "BRA", "BRK", "BVC", "BVS", "CLC", "CLD", 
                             "CLI", "CLV", "CMP", "CPX", "CPY", "DEC", "DEX", 
                             "DEY", "EOR", "INC", "INX", "INY", "JMP", "JSR", 
                             "LDA", "LDY", "LDX", "LSR", "NOP", "ORA", "PHA", 
                             "PHX", "PHY", "PHP", "PLA", "PLP", "PLY", "ROL", 
                             "ROR", "RTI", "RTS", "SBC", "SEC", "SED", "SEI", 
                             "STA", "STX", "STY", "STZ", "TAX", "TAY", "TSX", 
                             "TXA", "TXS", "TYA", "NAME", "NUMBER", "COMMENT", 
                             "STRING", "EOL", "WS" ];
    static ruleNames = [ "prog", "line", "instruction", "assemblerinstruction", 
                         "assembleropcode", "lbl", "argumentlist", "label", 
                         "argument", "prefix_", "string_", "name", "number", 
                         "opcode" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = msp430Parser.ruleNames;
        this.literalNames = msp430Parser.literalNames;
        this.symbolicNames = msp430Parser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, msp430Parser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 4294967112) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 3583) !== 0)) {
	            this.state = 28;
	            this.line();
	            this.state = 33;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 34;
	        this.match(msp430Parser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, msp430Parser.RULE_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 36;
	            this.instruction();

	        } else if(la_===2) {
	            this.state = 37;
	            this.assemblerinstruction();

	        } else if(la_===3) {
	            this.state = 38;
	            this.lbl();

	        }
	        this.state = 41;
	        this.match(msp430Parser.EOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, msp430Parser.RULE_instruction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===71) {
	            this.state = 43;
	            this.label();
	        }

	        this.state = 46;
	        this.opcode();
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 328) !== 0) || ((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & 11) !== 0)) {
	            this.state = 47;
	            this.argumentlist();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assemblerinstruction() {
	    let localctx = new AssemblerinstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, msp430Parser.RULE_assemblerinstruction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 328) !== 0) || ((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & 11) !== 0)) {
	            this.state = 50;
	            this.argument();
	        }

	        this.state = 53;
	        this.assembleropcode();
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 328) !== 0) || ((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & 11) !== 0)) {
	            this.state = 54;
	            this.argumentlist();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assembleropcode() {
	    let localctx = new AssembleropcodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, msp430Parser.RULE_assembleropcode);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(msp430Parser.ASSEMBLER_INSTRUCTION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lbl() {
	    let localctx = new LblContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, msp430Parser.RULE_lbl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.label();
	        this.state = 60;
	        this.match(msp430Parser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentlist() {
	    let localctx = new ArgumentlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, msp430Parser.RULE_argumentlist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.argument();
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 63;
	            this.match(msp430Parser.T__1);
	            this.state = 64;
	            this.argumentlist();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	label() {
	    let localctx = new LabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, msp430Parser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argument() {
	    let localctx = new ArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, msp430Parser.RULE_argument);
	    var _la = 0; // Token type
	    try {
	        this.state = 86;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 8:
	        case 71:
	        case 72:
	        case 74:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8) {
	                this.state = 69;
	                this.prefix_();
	            }

	            this.state = 76;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 72:
	                this.state = 72;
	                this.number();
	                break;
	            case 71:
	                this.state = 73;
	                this.name();
	                break;
	            case 74:
	                this.state = 74;
	                this.string_();
	                break;
	            case 3:
	                this.state = 75;
	                this.match(msp430Parser.T__2);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4 || _la===5) {
	                this.state = 78;
	                _la = this._input.LA(1);
	                if(!(_la===4 || _la===5)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 79;
	                this.number();
	            }

	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 82;
	            this.match(msp430Parser.T__5);
	            this.state = 83;
	            this.argument();
	            this.state = 84;
	            this.match(msp430Parser.T__6);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prefix_() {
	    let localctx = new Prefix_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, msp430Parser.RULE_prefix_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(msp430Parser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	string_() {
	    let localctx = new String_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, msp430Parser.RULE_string_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(msp430Parser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, msp430Parser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(msp430Parser.NAME);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, msp430Parser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(msp430Parser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	opcode() {
	    let localctx = new OpcodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, msp430Parser.RULE_opcode);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        _la = this._input.LA(1);
	        if(!(((((_la - 10)) & ~0x1f) == 0 && ((1 << (_la - 10)) & 4294967295) !== 0) || ((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & 536870911) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

msp430Parser.EOF = antlr4.Token.EOF;
msp430Parser.T__0 = 1;
msp430Parser.T__1 = 2;
msp430Parser.T__2 = 3;
msp430Parser.T__3 = 4;
msp430Parser.T__4 = 5;
msp430Parser.T__5 = 6;
msp430Parser.T__6 = 7;
msp430Parser.T__7 = 8;
msp430Parser.ASSEMBLER_INSTRUCTION = 9;
msp430Parser.ADC = 10;
msp430Parser.AND = 11;
msp430Parser.ASL = 12;
msp430Parser.BCC = 13;
msp430Parser.BCS = 14;
msp430Parser.BEQ = 15;
msp430Parser.BIT = 16;
msp430Parser.BMI = 17;
msp430Parser.BNE = 18;
msp430Parser.BPL = 19;
msp430Parser.BRA = 20;
msp430Parser.BRK = 21;
msp430Parser.BVC = 22;
msp430Parser.BVS = 23;
msp430Parser.CLC = 24;
msp430Parser.CLD = 25;
msp430Parser.CLI = 26;
msp430Parser.CLV = 27;
msp430Parser.CMP = 28;
msp430Parser.CPX = 29;
msp430Parser.CPY = 30;
msp430Parser.DEC = 31;
msp430Parser.DEX = 32;
msp430Parser.DEY = 33;
msp430Parser.EOR = 34;
msp430Parser.INC = 35;
msp430Parser.INX = 36;
msp430Parser.INY = 37;
msp430Parser.JMP = 38;
msp430Parser.JSR = 39;
msp430Parser.LDA = 40;
msp430Parser.LDY = 41;
msp430Parser.LDX = 42;
msp430Parser.LSR = 43;
msp430Parser.NOP = 44;
msp430Parser.ORA = 45;
msp430Parser.PHA = 46;
msp430Parser.PHX = 47;
msp430Parser.PHY = 48;
msp430Parser.PHP = 49;
msp430Parser.PLA = 50;
msp430Parser.PLP = 51;
msp430Parser.PLY = 52;
msp430Parser.ROL = 53;
msp430Parser.ROR = 54;
msp430Parser.RTI = 55;
msp430Parser.RTS = 56;
msp430Parser.SBC = 57;
msp430Parser.SEC = 58;
msp430Parser.SED = 59;
msp430Parser.SEI = 60;
msp430Parser.STA = 61;
msp430Parser.STX = 62;
msp430Parser.STY = 63;
msp430Parser.STZ = 64;
msp430Parser.TAX = 65;
msp430Parser.TAY = 66;
msp430Parser.TSX = 67;
msp430Parser.TXA = 68;
msp430Parser.TXS = 69;
msp430Parser.TYA = 70;
msp430Parser.NAME = 71;
msp430Parser.NUMBER = 72;
msp430Parser.COMMENT = 73;
msp430Parser.STRING = 74;
msp430Parser.EOL = 75;
msp430Parser.WS = 76;

msp430Parser.RULE_prog = 0;
msp430Parser.RULE_line = 1;
msp430Parser.RULE_instruction = 2;
msp430Parser.RULE_assemblerinstruction = 3;
msp430Parser.RULE_assembleropcode = 4;
msp430Parser.RULE_lbl = 5;
msp430Parser.RULE_argumentlist = 6;
msp430Parser.RULE_label = 7;
msp430Parser.RULE_argument = 8;
msp430Parser.RULE_prefix_ = 9;
msp430Parser.RULE_string_ = 10;
msp430Parser.RULE_name = 11;
msp430Parser.RULE_number = 12;
msp430Parser.RULE_opcode = 13;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = msp430Parser.RULE_prog;
    }

	EOF() {
	    return this.getToken(msp430Parser.EOF, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof msp430Visitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = msp430Parser.RULE_line;
    }

	EOL() {
	    return this.getToken(msp430Parser.EOL, 0);
	};

	instruction() {
	    return this.getTypedRuleContext(InstructionContext,0);
	};

	assemblerinstruction() {
	    return this.getTypedRuleContext(AssemblerinstructionContext,0);
	};

	lbl() {
	    return this.getTypedRuleContext(LblContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.exitLine(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof msp430Visitor ) {
	        return visitor.visitLine(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = msp430Parser.RULE_instruction;
    }

	opcode() {
	    return this.getTypedRuleContext(OpcodeContext,0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	argumentlist() {
	    return this.getTypedRuleContext(ArgumentlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.enterInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.exitInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof msp430Visitor ) {
	        return visitor.visitInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssemblerinstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = msp430Parser.RULE_assemblerinstruction;
    }

	assembleropcode() {
	    return this.getTypedRuleContext(AssembleropcodeContext,0);
	};

	argument() {
	    return this.getTypedRuleContext(ArgumentContext,0);
	};

	argumentlist() {
	    return this.getTypedRuleContext(ArgumentlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.enterAssemblerinstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.exitAssemblerinstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof msp430Visitor ) {
	        return visitor.visitAssemblerinstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssembleropcodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = msp430Parser.RULE_assembleropcode;
    }

	ASSEMBLER_INSTRUCTION() {
	    return this.getToken(msp430Parser.ASSEMBLER_INSTRUCTION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.enterAssembleropcode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.exitAssembleropcode(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof msp430Visitor ) {
	        return visitor.visitAssembleropcode(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LblContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = msp430Parser.RULE_lbl;
    }

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.enterLbl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.exitLbl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof msp430Visitor ) {
	        return visitor.visitLbl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = msp430Parser.RULE_argumentlist;
    }

	argument() {
	    return this.getTypedRuleContext(ArgumentContext,0);
	};

	argumentlist() {
	    return this.getTypedRuleContext(ArgumentlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.enterArgumentlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.exitArgumentlist(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof msp430Visitor ) {
	        return visitor.visitArgumentlist(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = msp430Parser.RULE_label;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.exitLabel(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof msp430Visitor ) {
	        return visitor.visitLabel(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = msp430Parser.RULE_argument;
    }

	number = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberContext);
	    } else {
	        return this.getTypedRuleContext(NumberContext,i);
	    }
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	string_() {
	    return this.getTypedRuleContext(String_Context,0);
	};

	prefix_() {
	    return this.getTypedRuleContext(Prefix_Context,0);
	};

	argument() {
	    return this.getTypedRuleContext(ArgumentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.enterArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.exitArgument(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof msp430Visitor ) {
	        return visitor.visitArgument(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Prefix_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = msp430Parser.RULE_prefix_;
    }


	enterRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.enterPrefix_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.exitPrefix_(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof msp430Visitor ) {
	        return visitor.visitPrefix_(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class String_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = msp430Parser.RULE_string_;
    }

	STRING() {
	    return this.getToken(msp430Parser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.enterString_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.exitString_(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof msp430Visitor ) {
	        return visitor.visitString_(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = msp430Parser.RULE_name;
    }

	NAME() {
	    return this.getToken(msp430Parser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.exitName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof msp430Visitor ) {
	        return visitor.visitName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = msp430Parser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(msp430Parser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof msp430Visitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OpcodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = msp430Parser.RULE_opcode;
    }

	ADC() {
	    return this.getToken(msp430Parser.ADC, 0);
	};

	AND() {
	    return this.getToken(msp430Parser.AND, 0);
	};

	ASL() {
	    return this.getToken(msp430Parser.ASL, 0);
	};

	BCC() {
	    return this.getToken(msp430Parser.BCC, 0);
	};

	BCS() {
	    return this.getToken(msp430Parser.BCS, 0);
	};

	BEQ() {
	    return this.getToken(msp430Parser.BEQ, 0);
	};

	BIT() {
	    return this.getToken(msp430Parser.BIT, 0);
	};

	BMI() {
	    return this.getToken(msp430Parser.BMI, 0);
	};

	BNE() {
	    return this.getToken(msp430Parser.BNE, 0);
	};

	BPL() {
	    return this.getToken(msp430Parser.BPL, 0);
	};

	BRA() {
	    return this.getToken(msp430Parser.BRA, 0);
	};

	BRK() {
	    return this.getToken(msp430Parser.BRK, 0);
	};

	BVC() {
	    return this.getToken(msp430Parser.BVC, 0);
	};

	BVS() {
	    return this.getToken(msp430Parser.BVS, 0);
	};

	CLC() {
	    return this.getToken(msp430Parser.CLC, 0);
	};

	CLD() {
	    return this.getToken(msp430Parser.CLD, 0);
	};

	CLI() {
	    return this.getToken(msp430Parser.CLI, 0);
	};

	CLV() {
	    return this.getToken(msp430Parser.CLV, 0);
	};

	CMP() {
	    return this.getToken(msp430Parser.CMP, 0);
	};

	CPX() {
	    return this.getToken(msp430Parser.CPX, 0);
	};

	CPY() {
	    return this.getToken(msp430Parser.CPY, 0);
	};

	DEC() {
	    return this.getToken(msp430Parser.DEC, 0);
	};

	DEX() {
	    return this.getToken(msp430Parser.DEX, 0);
	};

	DEY() {
	    return this.getToken(msp430Parser.DEY, 0);
	};

	EOR() {
	    return this.getToken(msp430Parser.EOR, 0);
	};

	INC() {
	    return this.getToken(msp430Parser.INC, 0);
	};

	INX() {
	    return this.getToken(msp430Parser.INX, 0);
	};

	INY() {
	    return this.getToken(msp430Parser.INY, 0);
	};

	JMP() {
	    return this.getToken(msp430Parser.JMP, 0);
	};

	JSR() {
	    return this.getToken(msp430Parser.JSR, 0);
	};

	LDA() {
	    return this.getToken(msp430Parser.LDA, 0);
	};

	LDY() {
	    return this.getToken(msp430Parser.LDY, 0);
	};

	LDX() {
	    return this.getToken(msp430Parser.LDX, 0);
	};

	LSR() {
	    return this.getToken(msp430Parser.LSR, 0);
	};

	NOP() {
	    return this.getToken(msp430Parser.NOP, 0);
	};

	ORA() {
	    return this.getToken(msp430Parser.ORA, 0);
	};

	PHA() {
	    return this.getToken(msp430Parser.PHA, 0);
	};

	PHX() {
	    return this.getToken(msp430Parser.PHX, 0);
	};

	PHY() {
	    return this.getToken(msp430Parser.PHY, 0);
	};

	PHP() {
	    return this.getToken(msp430Parser.PHP, 0);
	};

	PLA() {
	    return this.getToken(msp430Parser.PLA, 0);
	};

	PLP() {
	    return this.getToken(msp430Parser.PLP, 0);
	};

	PLY() {
	    return this.getToken(msp430Parser.PLY, 0);
	};

	ROL() {
	    return this.getToken(msp430Parser.ROL, 0);
	};

	ROR() {
	    return this.getToken(msp430Parser.ROR, 0);
	};

	RTI() {
	    return this.getToken(msp430Parser.RTI, 0);
	};

	RTS() {
	    return this.getToken(msp430Parser.RTS, 0);
	};

	SBC() {
	    return this.getToken(msp430Parser.SBC, 0);
	};

	SEC() {
	    return this.getToken(msp430Parser.SEC, 0);
	};

	SED() {
	    return this.getToken(msp430Parser.SED, 0);
	};

	SEI() {
	    return this.getToken(msp430Parser.SEI, 0);
	};

	STA() {
	    return this.getToken(msp430Parser.STA, 0);
	};

	STX() {
	    return this.getToken(msp430Parser.STX, 0);
	};

	STY() {
	    return this.getToken(msp430Parser.STY, 0);
	};

	STZ() {
	    return this.getToken(msp430Parser.STZ, 0);
	};

	TAX() {
	    return this.getToken(msp430Parser.TAX, 0);
	};

	TAY() {
	    return this.getToken(msp430Parser.TAY, 0);
	};

	TSX() {
	    return this.getToken(msp430Parser.TSX, 0);
	};

	TXA() {
	    return this.getToken(msp430Parser.TXA, 0);
	};

	TXS() {
	    return this.getToken(msp430Parser.TXS, 0);
	};

	TYA() {
	    return this.getToken(msp430Parser.TYA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.enterOpcode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof msp430Listener ) {
	        listener.exitOpcode(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof msp430Visitor ) {
	        return visitor.visitOpcode(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




msp430Parser.ProgContext = ProgContext; 
msp430Parser.LineContext = LineContext; 
msp430Parser.InstructionContext = InstructionContext; 
msp430Parser.AssemblerinstructionContext = AssemblerinstructionContext; 
msp430Parser.AssembleropcodeContext = AssembleropcodeContext; 
msp430Parser.LblContext = LblContext; 
msp430Parser.ArgumentlistContext = ArgumentlistContext; 
msp430Parser.LabelContext = LabelContext; 
msp430Parser.ArgumentContext = ArgumentContext; 
msp430Parser.Prefix_Context = Prefix_Context; 
msp430Parser.String_Context = String_Context; 
msp430Parser.NameContext = NameContext; 
msp430Parser.NumberContext = NumberContext; 
msp430Parser.OpcodeContext = OpcodeContext; 
