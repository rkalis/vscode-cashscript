// Generated from grammar/CashScript.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class CashScriptLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly VersionLiteral = 44;
	public static readonly BooleanLiteral = 45;
	public static readonly NumberUnit = 46;
	public static readonly NumberLiteral = 47;
	public static readonly Bytes = 48;
	public static readonly Bound = 49;
	public static readonly StringLiteral = 50;
	public static readonly DateLiteral = 51;
	public static readonly HexLiteral = 52;
	public static readonly TxVar = 53;
	public static readonly PreimageField = 54;
	public static readonly Identifier = 55;
	public static readonly WHITESPACE = 56;
	public static readonly COMMENT = 57;
	public static readonly LINE_COMMENT = 58;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", 
		"T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "T__39", "T__40", 
		"T__41", "T__42", "VersionLiteral", "BooleanLiteral", "NumberUnit", "NumberLiteral", 
		"Bytes", "Bound", "StringLiteral", "DateLiteral", "HexLiteral", "TxVar", 
		"PreimageField", "Identifier", "WHITESPACE", "COMMENT", "LINE_COMMENT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'pragma'", "';'", "'cashscript'", "'^'", "'~'", "'>='", "'>'", 
		"'<'", "'<='", "'='", "'contract'", "'{'", "'}'", "'function'", "'('", 
		"','", "')'", "'require'", "'if'", "'else'", "'new'", "'['", "']'", "'.reverse()'", 
		"'.length'", "'!'", "'-'", "'.split'", "'/'", "'%'", "'+'", "'=='", "'!='", 
		"'&'", "'|'", "'&&'", "'||'", "'int'", "'bool'", "'string'", "'pubkey'", 
		"'sig'", "'datasig'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "VersionLiteral", "BooleanLiteral", "NumberUnit", 
		"NumberLiteral", "Bytes", "Bound", "StringLiteral", "DateLiteral", "HexLiteral", 
		"TxVar", "PreimageField", "Identifier", "WHITESPACE", "COMMENT", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CashScriptLexer._LITERAL_NAMES, CashScriptLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CashScriptLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(CashScriptLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "CashScript.g4"; }

	// @Override
	public get ruleNames(): string[] { return CashScriptLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return CashScriptLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return CashScriptLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return CashScriptLexer.modeNames; }

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02<\u027C\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 " +
		"\x03 \x03!\x03!\x03!\x03\"\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03" +
		"%\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03" +
		")\x03)\x03)\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03" +
		"+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03-\x06-\u0128" +
		"\n-\r-\x0E-\u0129\x03-\x03-\x06-\u012E\n-\r-\x0E-\u012F\x03-\x03-\x06" +
		"-\u0134\n-\r-\x0E-\u0135\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03." +
		"\x05.\u0141\n.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/" +
		"\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x05/\u017C\n/\x030\x050\u017F\n0\x030\x060\u0182" +
		"\n0\r0\x0E0\u0183\x030\x030\x060\u0188\n0\r0\x0E0\u0189\x050\u018C\n0" +
		"\x031\x031\x031\x031\x031\x031\x031\x051\u0195\n1\x032\x032\x072\u0199" +
		"\n2\f2\x0E2\u019C\v2\x033\x033\x033\x033\x073\u01A2\n3\f3\x0E3\u01A5\v" +
		"3\x033\x033\x033\x033\x033\x073\u01AC\n3\f3\x0E3\u01AF\v3\x033\x053\u01B2" +
		"\n3\x034\x034\x034\x034\x034\x034\x034\x034\x034\x035\x035\x035\x075\u01C0" +
		"\n5\f5\x0E5\u01C3\v5\x036\x036\x036\x036\x036\x036\x036\x036\x036\x03" +
		"6\x036\x036\x036\x056\u01D2\n6\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x037\x057\u0254\n7\x038\x038\x07" +
		"8\u0258\n8\f8\x0E8\u025B\v8\x039\x069\u025E\n9\r9\x0E9\u025F\x039\x03" +
		"9\x03:\x03:\x03:\x03:\x07:\u0268\n:\f:\x0E:\u026B\v:\x03:\x03:\x03:\x03" +
		":\x03:\x03;\x03;\x03;\x03;\x07;\u0276\n;\f;\x0E;\u0279\v;\x03;\x03;\x05" +
		"\u01A3\u01AD\u0269\x02\x02<\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02" +
		"\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02" +
		"\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%" +
		"\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B" +
		"5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02" +
		"%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_" +
		"\x021a\x022c\x023e\x024g\x025i\x026k\x027m\x028o\x029q\x02:s\x02;u\x02" +
		"<\x03\x02\x0E\x03\x022;\x03\x02//\x04\x02GGgg\x03\x023;\x05\x02\f\f\x0F" +
		"\x0F$$\x05\x02\f\f\x0F\x0F))\x04\x02ZZzz\x05\x022;CHch\x04\x02C\\c|\x06" +
		"\x022;C\\aac|\x05\x02\v\f\x0E\x0F\"\"\x04\x02\f\f\x0F\x0F\x02\u02A3\x02" +
		"\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
		"\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F" +
		"\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15" +
		"\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B" +
		"\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!" +
		"\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02" +
		"\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02" +
		"\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03" +
		"\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02" +
		"\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02" +
		"C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02" +
		"\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02" +
		"\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03" +
		"\x02\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02" +
		"\x02\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02" +
		"e\x03\x02\x02\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02" +
		"\x02\x02\x02m\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02" +
		"\x02s\x03\x02\x02\x02\x02u\x03\x02\x02\x02\x03w\x03\x02\x02\x02\x05~\x03" +
		"\x02\x02\x02\x07\x80\x03\x02\x02\x02\t\x8B\x03\x02\x02\x02\v\x8D\x03\x02" +
		"\x02\x02\r\x8F\x03\x02\x02\x02\x0F\x92\x03\x02\x02\x02\x11\x94\x03\x02" +
		"\x02\x02\x13\x96\x03\x02\x02\x02\x15\x99\x03\x02\x02\x02\x17\x9B\x03\x02" +
		"\x02\x02\x19\xA4\x03\x02\x02\x02\x1B\xA6\x03\x02\x02\x02\x1D\xA8\x03\x02" +
		"\x02\x02\x1F\xB1\x03\x02\x02\x02!\xB3\x03\x02\x02\x02#\xB5\x03\x02\x02" +
		"\x02%\xB7\x03\x02\x02\x02\'\xBF\x03\x02\x02\x02)\xC2\x03\x02\x02\x02+" +
		"\xC7\x03\x02\x02\x02-\xCB\x03\x02\x02\x02/\xCD\x03\x02\x02\x021\xCF\x03" +
		"\x02\x02\x023\xDA\x03\x02\x02\x025\xE2\x03\x02\x02\x027\xE4\x03\x02\x02" +
		"\x029\xE6\x03\x02\x02\x02;\xED\x03\x02\x02\x02=\xEF\x03\x02\x02\x02?\xF1" +
		"\x03\x02\x02\x02A\xF3\x03\x02\x02\x02C\xF6\x03\x02\x02\x02E\xF9\x03\x02" +
		"\x02\x02G\xFB\x03\x02\x02\x02I\xFD\x03\x02\x02\x02K\u0100\x03\x02\x02" +
		"\x02M\u0103\x03\x02\x02\x02O\u0107\x03\x02\x02\x02Q\u010C\x03\x02\x02" +
		"\x02S\u0113\x03\x02\x02\x02U\u011A\x03\x02\x02\x02W\u011E\x03\x02\x02" +
		"\x02Y\u0127\x03\x02\x02\x02[\u0140\x03\x02\x02\x02]\u017B\x03\x02\x02" +
		"\x02_\u017E\x03\x02\x02\x02a\u018D\x03\x02\x02\x02c\u0196\x03\x02\x02" +
		"\x02e\u01B1\x03\x02\x02\x02g\u01B3\x03\x02\x02\x02i\u01BC\x03\x02\x02" +
		"\x02k\u01D1\x03\x02\x02\x02m\u0253\x03\x02\x02\x02o\u0255\x03\x02\x02" +
		"\x02q\u025D\x03\x02\x02\x02s\u0263\x03\x02\x02\x02u\u0271\x03\x02\x02" +
		"\x02wx\x07r\x02\x02xy\x07t\x02\x02yz\x07c\x02\x02z{\x07i\x02\x02{|\x07" +
		"o\x02\x02|}\x07c\x02\x02}\x04\x03\x02\x02\x02~\x7F\x07=\x02\x02\x7F\x06" +
		"\x03\x02\x02\x02\x80\x81\x07e\x02\x02\x81\x82\x07c\x02\x02\x82\x83\x07" +
		"u\x02\x02\x83\x84\x07j\x02\x02\x84\x85\x07u\x02\x02\x85\x86\x07e\x02\x02" +
		"\x86\x87\x07t\x02\x02\x87\x88\x07k\x02\x02\x88\x89\x07r\x02\x02\x89\x8A" +
		"\x07v\x02\x02\x8A\b\x03\x02\x02\x02\x8B\x8C\x07`\x02\x02\x8C\n\x03\x02" +
		"\x02\x02\x8D\x8E\x07\x80\x02\x02\x8E\f\x03\x02\x02\x02\x8F\x90\x07@\x02" +
		"\x02\x90\x91\x07?\x02\x02\x91\x0E\x03\x02\x02\x02\x92\x93\x07@\x02\x02" +
		"\x93\x10\x03\x02\x02\x02\x94\x95\x07>\x02\x02\x95\x12\x03\x02\x02\x02" +
		"\x96\x97\x07>\x02\x02\x97\x98\x07?\x02\x02\x98\x14\x03\x02\x02\x02\x99" +
		"\x9A\x07?\x02\x02\x9A\x16\x03\x02\x02\x02\x9B\x9C\x07e\x02\x02\x9C\x9D" +
		"\x07q\x02\x02\x9D\x9E\x07p\x02\x02\x9E\x9F\x07v\x02\x02\x9F\xA0\x07t\x02" +
		"\x02\xA0\xA1\x07c\x02\x02\xA1\xA2\x07e\x02\x02\xA2\xA3\x07v\x02\x02\xA3" +
		"\x18\x03\x02\x02\x02\xA4\xA5\x07}\x02\x02\xA5\x1A\x03\x02\x02\x02\xA6" +
		"\xA7\x07\x7F\x02\x02\xA7\x1C\x03\x02\x02\x02\xA8\xA9\x07h\x02\x02\xA9" +
		"\xAA\x07w\x02\x02\xAA\xAB\x07p\x02\x02\xAB\xAC\x07e\x02\x02\xAC\xAD\x07" +
		"v\x02\x02\xAD\xAE\x07k\x02\x02\xAE\xAF\x07q\x02\x02\xAF\xB0\x07p\x02\x02" +
		"\xB0\x1E\x03\x02\x02\x02\xB1\xB2\x07*\x02\x02\xB2 \x03\x02\x02\x02\xB3" +
		"\xB4\x07.\x02\x02\xB4\"\x03\x02\x02\x02\xB5\xB6\x07+\x02\x02\xB6$\x03" +
		"\x02\x02\x02\xB7\xB8\x07t\x02\x02\xB8\xB9\x07g\x02\x02\xB9\xBA\x07s\x02" +
		"\x02\xBA\xBB\x07w\x02\x02\xBB\xBC\x07k\x02\x02\xBC\xBD\x07t\x02\x02\xBD" +
		"\xBE\x07g\x02\x02\xBE&\x03\x02\x02\x02\xBF\xC0\x07k\x02\x02\xC0\xC1\x07" +
		"h\x02\x02\xC1(\x03\x02\x02\x02\xC2\xC3\x07g\x02\x02\xC3\xC4\x07n\x02\x02" +
		"\xC4\xC5\x07u\x02\x02\xC5\xC6\x07g\x02\x02\xC6*\x03\x02\x02\x02\xC7\xC8" +
		"\x07p\x02\x02\xC8\xC9\x07g\x02\x02\xC9\xCA\x07y\x02\x02\xCA,\x03\x02\x02" +
		"\x02\xCB\xCC\x07]\x02\x02\xCC.\x03\x02\x02\x02\xCD\xCE\x07_\x02\x02\xCE" +
		"0\x03\x02\x02\x02\xCF\xD0\x070\x02\x02\xD0\xD1\x07t\x02\x02\xD1\xD2\x07" +
		"g\x02\x02\xD2\xD3\x07x\x02\x02\xD3\xD4\x07g\x02\x02\xD4\xD5\x07t\x02\x02" +
		"\xD5\xD6\x07u\x02\x02\xD6\xD7\x07g\x02\x02\xD7\xD8\x07*\x02\x02\xD8\xD9" +
		"\x07+\x02\x02\xD92\x03\x02\x02\x02\xDA\xDB\x070\x02\x02\xDB\xDC\x07n\x02" +
		"\x02\xDC\xDD\x07g\x02\x02\xDD\xDE\x07p\x02\x02\xDE\xDF\x07i\x02\x02\xDF" +
		"\xE0\x07v\x02\x02\xE0\xE1\x07j\x02\x02\xE14\x03\x02\x02\x02\xE2\xE3\x07" +
		"#\x02\x02\xE36\x03\x02\x02\x02\xE4\xE5\x07/\x02\x02\xE58\x03\x02\x02\x02" +
		"\xE6\xE7\x070\x02\x02\xE7\xE8\x07u\x02\x02\xE8\xE9\x07r\x02\x02\xE9\xEA" +
		"\x07n\x02\x02\xEA\xEB\x07k\x02\x02\xEB\xEC\x07v\x02\x02\xEC:\x03\x02\x02" +
		"\x02\xED\xEE\x071\x02\x02\xEE<\x03\x02\x02\x02\xEF\xF0\x07\'\x02\x02\xF0" +
		">\x03\x02\x02\x02\xF1\xF2\x07-\x02\x02\xF2@\x03\x02\x02\x02\xF3\xF4\x07" +
		"?\x02\x02\xF4\xF5\x07?\x02\x02\xF5B\x03\x02\x02\x02\xF6\xF7\x07#\x02\x02" +
		"\xF7\xF8\x07?\x02\x02\xF8D\x03\x02\x02\x02\xF9\xFA\x07(\x02\x02\xFAF\x03" +
		"\x02\x02\x02\xFB\xFC\x07~\x02\x02\xFCH\x03\x02\x02\x02\xFD\xFE\x07(\x02" +
		"\x02\xFE\xFF\x07(\x02\x02\xFFJ\x03\x02\x02\x02\u0100\u0101\x07~\x02\x02" +
		"\u0101\u0102\x07~\x02\x02\u0102L\x03\x02\x02\x02\u0103\u0104\x07k\x02" +
		"\x02\u0104\u0105\x07p\x02\x02\u0105\u0106\x07v\x02\x02\u0106N\x03\x02" +
		"\x02\x02\u0107\u0108\x07d\x02\x02\u0108\u0109\x07q\x02\x02\u0109\u010A" +
		"\x07q\x02\x02\u010A\u010B\x07n\x02\x02\u010BP\x03\x02\x02\x02\u010C\u010D" +
		"\x07u\x02\x02\u010D\u010E\x07v\x02\x02\u010E\u010F\x07t\x02\x02\u010F" +
		"\u0110\x07k\x02\x02\u0110\u0111\x07p\x02\x02\u0111\u0112\x07i\x02\x02" +
		"\u0112R\x03\x02\x02\x02\u0113\u0114\x07r\x02\x02\u0114\u0115\x07w\x02" +
		"\x02\u0115\u0116\x07d\x02\x02\u0116\u0117\x07m\x02\x02\u0117\u0118\x07" +
		"g\x02\x02\u0118\u0119\x07{\x02\x02\u0119T\x03\x02\x02\x02\u011A\u011B" +
		"\x07u\x02\x02\u011B\u011C\x07k\x02\x02\u011C\u011D\x07i\x02\x02\u011D" +
		"V\x03\x02\x02\x02\u011E\u011F\x07f\x02\x02\u011F\u0120\x07c\x02\x02\u0120" +
		"\u0121\x07v\x02\x02\u0121\u0122\x07c\x02\x02\u0122\u0123\x07u\x02\x02" +
		"\u0123\u0124\x07k\x02\x02\u0124\u0125\x07i\x02\x02\u0125X\x03\x02\x02" +
		"\x02\u0126\u0128\t\x02\x02\x02\u0127\u0126\x03\x02\x02\x02\u0128\u0129" +
		"\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02" +
		"\u012A\u012B\x03\x02\x02\x02\u012B\u012D\x070\x02\x02\u012C\u012E\t\x02" +
		"\x02\x02\u012D\u012C\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F" +
		"\u012D\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0131\x03\x02" +
		"\x02\x02\u0131\u0133\x070\x02\x02\u0132\u0134\t\x02\x02\x02\u0133\u0132" +
		"\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02" +
		"\u0135\u0136\x03\x02\x02\x02\u0136Z\x03\x02\x02\x02\u0137\u0138\x07v\x02" +
		"\x02\u0138\u0139\x07t\x02\x02\u0139\u013A\x07w\x02\x02\u013A\u0141\x07" +
		"g\x02\x02\u013B\u013C\x07h\x02\x02\u013C\u013D\x07c\x02\x02\u013D\u013E" +
		"\x07n\x02\x02\u013E\u013F\x07u\x02\x02\u013F\u0141\x07g\x02\x02\u0140" +
		"\u0137\x03\x02\x02\x02\u0140\u013B\x03\x02\x02\x02\u0141\\\x03\x02\x02" +
		"\x02\u0142\u0143\x07u\x02\x02\u0143\u0144\x07c\x02\x02\u0144\u0145\x07" +
		"v\x02\x02\u0145\u0146\x07q\x02\x02\u0146\u0147\x07u\x02\x02\u0147\u0148" +
		"\x07j\x02\x02\u0148\u0149\x07k\x02\x02\u0149\u017C\x07u\x02\x02\u014A" +
		"\u014B\x07u\x02\x02\u014B\u014C\x07c\x02\x02\u014C\u014D\x07v\x02\x02" +
		"\u014D\u017C\x07u\x02\x02\u014E\u014F\x07h\x02\x02\u014F\u0150\x07k\x02" +
		"\x02\u0150\u0151\x07p\x02\x02\u0151\u0152\x07p\x02\x02\u0152\u0153\x07" +
		"g\x02\x02\u0153\u017C\x07{\x02\x02\u0154\u0155\x07d\x02\x02\u0155\u0156" +
		"\x07k\x02\x02\u0156\u0157\x07v\x02\x02\u0157\u017C\x07u\x02\x02\u0158" +
		"\u0159\x07d\x02\x02\u0159\u015A\x07k\x02\x02\u015A\u015B\x07v\x02\x02" +
		"\u015B\u015C\x07e\x02\x02\u015C\u015D\x07q\x02\x02\u015D\u015E\x07k\x02" +
		"\x02\u015E\u017C\x07p\x02\x02\u015F\u0160\x07u\x02\x02\u0160\u0161\x07" +
		"g\x02\x02\u0161\u0162\x07e\x02\x02\u0162\u0163\x07q\x02\x02\u0163\u0164" +
		"\x07p\x02\x02\u0164\u0165\x07f\x02\x02\u0165\u017C\x07u\x02\x02\u0166" +
		"\u0167\x07o\x02\x02\u0167\u0168\x07k\x02\x02\u0168\u0169\x07p\x02\x02" +
		"\u0169\u016A\x07w\x02\x02\u016A\u016B\x07v\x02\x02\u016B\u016C\x07g\x02" +
		"\x02\u016C\u017C\x07u\x02\x02\u016D\u016E\x07j\x02\x02\u016E\u016F\x07" +
		"q\x02\x02\u016F\u0170\x07w\x02\x02\u0170\u0171\x07t\x02\x02\u0171\u017C" +
		"\x07u\x02\x02\u0172\u0173\x07f\x02\x02\u0173\u0174\x07c\x02\x02\u0174" +
		"\u0175\x07{\x02\x02\u0175\u017C\x07u\x02\x02\u0176\u0177\x07y\x02\x02" +
		"\u0177\u0178\x07g\x02\x02\u0178\u0179\x07g\x02\x02\u0179\u017A\x07m\x02" +
		"\x02\u017A\u017C\x07u\x02\x02\u017B\u0142\x03\x02\x02\x02\u017B\u014A" +
		"\x03\x02\x02\x02\u017B\u014E\x03\x02\x02\x02\u017B\u0154\x03\x02\x02\x02" +
		"\u017B\u0158\x03\x02\x02\x02\u017B\u015F\x03\x02\x02\x02\u017B\u0166\x03" +
		"\x02\x02\x02\u017B\u016D\x03\x02\x02\x02\u017B\u0172\x03\x02\x02\x02\u017B" +
		"\u0176\x03\x02\x02\x02\u017C^\x03\x02\x02\x02\u017D\u017F\t\x03\x02\x02" +
		"\u017E\u017D\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0181\x03" +
		"\x02\x02\x02\u0180\u0182\t\x02\x02\x02\u0181\u0180\x03\x02\x02\x02\u0182" +
		"\u0183\x03\x02\x02\x02\u0183\u0181\x03\x02\x02\x02\u0183\u0184\x03\x02" +
		"\x02\x02\u0184\u018B\x03\x02\x02\x02\u0185\u0187\t\x04\x02\x02\u0186\u0188" +
		"\t\x02\x02\x02\u0187\u0186\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02" +
		"\u0189\u0187\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018C\x03" +
		"\x02\x02\x02\u018B\u0185\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C" +
		"`\x03\x02\x02\x02\u018D\u018E\x07d\x02\x02\u018E\u018F\x07{\x02\x02\u018F" +
		"\u0190\x07v\x02\x02\u0190\u0191\x07g\x02\x02\u0191\u0192\x07u\x02\x02" +
		"\u0192\u0194\x03\x02\x02\x02\u0193\u0195\x05c2\x02\u0194\u0193\x03\x02" +
		"\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195b\x03\x02\x02\x02\u0196\u019A" +
		"\t\x05\x02\x02\u0197\u0199\t\x02\x02\x02\u0198\u0197\x03\x02\x02\x02\u0199" +
		"\u019C\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019A\u019B\x03\x02" +
		"\x02\x02\u019Bd\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019D\u01A3" +
		"\x07$\x02\x02\u019E\u019F\x07^\x02\x02\u019F\u01A2\x07$\x02\x02\u01A0" +
		"\u01A2\n\x06\x02\x02\u01A1\u019E\x03\x02\x02\x02\u01A1\u01A0\x03\x02\x02" +
		"\x02\u01A2\u01A5\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A3\u01A1" +
		"\x03\x02\x02\x02\u01A4\u01A6\x03\x02\x02\x02\u01A5\u01A3\x03\x02\x02\x02" +
		"\u01A6\u01B2\x07$\x02\x02\u01A7\u01AD\x07)\x02\x02\u01A8\u01A9\x07^\x02" +
		"\x02\u01A9\u01AC\x07)\x02\x02\u01AA\u01AC\n\x07\x02\x02\u01AB\u01A8\x03" +
		"\x02\x02\x02\u01AB\u01AA\x03\x02\x02\x02\u01AC\u01AF\x03\x02\x02\x02\u01AD" +
		"\u01AE\x03\x02\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AE\u01B0\x03\x02" +
		"\x02\x02\u01AF\u01AD\x03\x02\x02\x02\u01B0\u01B2\x07)\x02\x02\u01B1\u019D" +
		"\x03\x02\x02\x02\u01B1\u01A7\x03\x02\x02\x02\u01B2f\x03\x02\x02\x02\u01B3" +
		"\u01B4\x07f\x02\x02\u01B4\u01B5\x07c\x02\x02\u01B5\u01B6\x07v\x02\x02" +
		"\u01B6\u01B7\x07g\x02\x02\u01B7\u01B8\x07*\x02\x02\u01B8\u01B9\x03\x02" +
		"\x02\x02\u01B9\u01BA\x05e3\x02\u01BA\u01BB\x07+\x02\x02\u01BBh\x03\x02" +
		"\x02\x02\u01BC\u01BD\x072\x02\x02\u01BD\u01C1\t\b\x02\x02\u01BE\u01C0" +
		"\t\t\x02\x02\u01BF\u01BE\x03\x02\x02\x02\u01C0\u01C3\x03\x02\x02\x02\u01C1" +
		"\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2j\x03\x02\x02" +
		"\x02\u01C3\u01C1\x03\x02\x02\x02\u01C4\u01C5\x07v\x02\x02\u01C5\u01C6" +
		"\x07z\x02\x02\u01C6\u01C7\x070\x02\x02\u01C7\u01C8\x07c\x02\x02\u01C8" +
		"\u01C9\x07i\x02\x02\u01C9\u01D2\x07g\x02\x02\u01CA\u01CB\x07v\x02\x02" +
		"\u01CB\u01CC\x07z\x02\x02\u01CC\u01CD\x070\x02\x02\u01CD\u01CE\x07v\x02" +
		"\x02\u01CE\u01CF\x07k\x02\x02\u01CF\u01D0\x07o\x02\x02\u01D0\u01D2\x07" +
		"g\x02\x02\u01D1\u01C4\x03\x02\x02\x02\u01D1\u01CA\x03\x02\x02\x02\u01D2" +
		"l\x03\x02\x02\x02\u01D3\u01D4\x07v\x02\x02\u01D4\u01D5\x07z\x02\x02\u01D5" +
		"\u01D6\x070\x02\x02\u01D6\u01D7\x07x\x02\x02\u01D7\u01D8\x07g\x02\x02" +
		"\u01D8\u01D9\x07t\x02\x02\u01D9\u01DA\x07u\x02\x02\u01DA\u01DB\x07k\x02" +
		"\x02\u01DB\u01DC\x07q\x02\x02\u01DC\u0254\x07p\x02\x02\u01DD\u01DE\x07" +
		"v\x02\x02\u01DE\u01DF\x07z\x02\x02\u01DF\u01E0\x070\x02\x02\u01E0\u01E1" +
		"\x07j\x02\x02\u01E1\u01E2\x07c\x02\x02\u01E2\u01E3\x07u\x02\x02\u01E3" +
		"\u01E4\x07j\x02\x02\u01E4\u01E5\x07R\x02\x02\u01E5\u01E6\x07t\x02\x02" +
		"\u01E6\u01E7\x07g\x02\x02\u01E7\u01E8\x07x\x02\x02\u01E8\u01E9\x07q\x02" +
		"\x02\u01E9\u01EA\x07w\x02\x02\u01EA\u01EB\x07v\x02\x02\u01EB\u0254\x07" +
		"u\x02\x02\u01EC\u01ED\x07v\x02\x02\u01ED\u01EE\x07z\x02\x02\u01EE\u01EF" +
		"\x070\x02\x02\u01EF\u01F0\x07j\x02\x02\u01F0\u01F1\x07c\x02\x02\u01F1" +
		"\u01F2\x07u\x02\x02\u01F2\u01F3\x07j\x02\x02\u01F3\u01F4\x07U\x02\x02" +
		"\u01F4\u01F5\x07g\x02\x02\u01F5\u01F6\x07s\x02\x02\u01F6\u01F7\x07w\x02" +
		"\x02\u01F7\u01F8\x07g\x02\x02\u01F8\u01F9\x07p\x02\x02\u01F9\u01FA\x07" +
		"e\x02\x02\u01FA\u0254\x07g\x02\x02\u01FB\u01FC\x07v\x02\x02\u01FC\u01FD" +
		"\x07z\x02\x02\u01FD\u01FE\x070\x02\x02\u01FE\u01FF\x07q\x02\x02\u01FF" +
		"\u0200\x07w\x02\x02\u0200\u0201\x07v\x02\x02\u0201\u0202\x07r\x02\x02" +
		"\u0202\u0203\x07q\x02\x02\u0203\u0204\x07k\x02\x02\u0204\u0205\x07p\x02" +
		"\x02\u0205\u0254\x07v\x02\x02\u0206\u0207\x07v\x02\x02\u0207\u0208\x07" +
		"z\x02\x02\u0208\u0209\x070\x02\x02\u0209\u020A\x07d\x02\x02\u020A\u020B" +
		"\x07{\x02\x02\u020B\u020C\x07v\x02\x02\u020C\u020D\x07g\x02\x02\u020D" +
		"\u020E\x07e\x02\x02\u020E\u020F\x07q\x02\x02\u020F\u0210\x07f\x02\x02" +
		"\u0210\u0254\x07g\x02\x02\u0211\u0212\x07v\x02\x02\u0212\u0213\x07z\x02" +
		"\x02\u0213\u0214\x070\x02\x02\u0214\u0215\x07x\x02\x02\u0215\u0216\x07" +
		"c\x02\x02\u0216\u0217\x07n\x02\x02\u0217\u0218\x07w\x02\x02\u0218\u0254" +
		"\x07g\x02\x02\u0219\u021A\x07v\x02\x02\u021A\u021B\x07z\x02\x02\u021B" +
		"\u021C\x070\x02\x02\u021C\u021D\x07u\x02\x02\u021D\u021E\x07g\x02\x02" +
		"\u021E\u021F\x07s\x02\x02\u021F\u0220\x07w\x02\x02\u0220\u0221\x07g\x02" +
		"\x02\u0221\u0222\x07p\x02\x02\u0222\u0223\x07e\x02\x02\u0223\u0254";
	private static readonly _serializedATNSegment1: string =
		"\x07g\x02\x02\u0224\u0225\x07v\x02\x02\u0225\u0226\x07z\x02\x02\u0226" +
		"\u0227\x070\x02\x02\u0227\u0228\x07j\x02\x02\u0228\u0229\x07c\x02\x02" +
		"\u0229\u022A\x07u\x02\x02\u022A\u022B\x07j\x02\x02\u022B\u022C\x07Q\x02" +
		"\x02\u022C\u022D\x07w\x02\x02\u022D\u022E\x07v\x02\x02\u022E\u022F\x07" +
		"r\x02\x02\u022F\u0230\x07w\x02\x02\u0230\u0231\x07v\x02\x02\u0231\u0254" +
		"\x07u\x02\x02\u0232\u0233\x07v\x02\x02\u0233\u0234\x07z\x02\x02\u0234" +
		"\u0235\x070\x02\x02\u0235\u0236\x07n\x02\x02\u0236\u0237\x07q\x02\x02" +
		"\u0237\u0238\x07e\x02\x02\u0238\u0239\x07m\x02\x02\u0239\u023A\x07v\x02" +
		"\x02\u023A\u023B\x07k\x02\x02\u023B\u023C\x07o\x02\x02\u023C\u0254\x07" +
		"g\x02\x02\u023D\u023E\x07v\x02\x02\u023E\u023F\x07z\x02\x02\u023F\u0240" +
		"\x070\x02\x02\u0240\u0241\x07j\x02\x02\u0241\u0242\x07c\x02\x02\u0242" +
		"\u0243\x07u\x02\x02\u0243\u0244\x07j\x02\x02\u0244\u0245\x07v\x02\x02" +
		"\u0245\u0246\x07{\x02\x02\u0246\u0247\x07r\x02\x02\u0247\u0254\x07g\x02" +
		"\x02\u0248\u0249\x07v\x02\x02\u0249\u024A\x07z\x02\x02\u024A\u024B\x07" +
		"0\x02\x02\u024B\u024C\x07r\x02\x02\u024C\u024D\x07t\x02\x02\u024D\u024E" +
		"\x07g\x02\x02\u024E\u024F\x07k\x02\x02\u024F\u0250\x07o\x02\x02\u0250" +
		"\u0251\x07c\x02\x02\u0251\u0252\x07i\x02\x02\u0252\u0254\x07g\x02\x02" +
		"\u0253\u01D3\x03\x02\x02\x02\u0253\u01DD\x03\x02\x02\x02\u0253\u01EC\x03" +
		"\x02\x02\x02\u0253\u01FB\x03\x02\x02\x02\u0253\u0206\x03\x02\x02\x02\u0253" +
		"\u0211\x03\x02\x02\x02\u0253\u0219\x03\x02\x02\x02\u0253\u0224\x03\x02" +
		"\x02\x02\u0253\u0232\x03\x02\x02\x02\u0253\u023D\x03\x02\x02\x02\u0253" +
		"\u0248\x03\x02\x02\x02\u0254n\x03\x02\x02\x02\u0255\u0259\t\n\x02\x02" +
		"\u0256\u0258\t\v\x02\x02\u0257\u0256\x03\x02\x02\x02\u0258\u025B\x03\x02" +
		"\x02\x02\u0259\u0257\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A" +
		"p\x03\x02\x02\x02\u025B\u0259\x03\x02\x02\x02\u025C\u025E\t\f\x02\x02" +
		"\u025D\u025C\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F\u025D\x03" +
		"\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261" +
		"\u0262\b9\x02\x02\u0262r\x03\x02\x02\x02\u0263\u0264\x071\x02\x02\u0264" +
		"\u0265\x07,\x02\x02\u0265\u0269\x03\x02\x02\x02\u0266\u0268\v\x02\x02" +
		"\x02\u0267\u0266\x03\x02\x02\x02\u0268\u026B\x03\x02\x02\x02\u0269\u026A" +
		"\x03\x02\x02\x02\u0269\u0267\x03\x02\x02\x02\u026A\u026C\x03\x02\x02\x02" +
		"\u026B\u0269\x03\x02\x02\x02\u026C\u026D\x07,\x02\x02\u026D\u026E\x07" +
		"1\x02\x02\u026E\u026F\x03\x02\x02\x02\u026F\u0270\b:\x03\x02\u0270t\x03" +
		"\x02\x02\x02\u0271\u0272\x071\x02\x02\u0272\u0273\x071\x02\x02\u0273\u0277" +
		"\x03\x02\x02\x02\u0274\u0276\n\r\x02\x02\u0275\u0274\x03\x02\x02\x02\u0276" +
		"\u0279\x03\x02\x02\x02\u0277\u0275\x03\x02\x02\x02\u0277\u0278\x03\x02" +
		"\x02\x02\u0278\u027A\x03\x02\x02\x02\u0279\u0277\x03\x02\x02\x02\u027A" +
		"\u027B\b;\x03\x02\u027Bv\x03\x02\x02\x02\x1A\x02\u0129\u012F\u0135\u0140" +
		"\u017B\u017E\u0183\u0189\u018B\u0194\u019A\u01A1\u01A3\u01AB\u01AD\u01B1" +
		"\u01C1\u01D1\u0253\u0259\u025F\u0269\u0277\x04\b\x02\x02\x02\x03\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			CashScriptLexer._serializedATNSegment0,
			CashScriptLexer._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CashScriptLexer.__ATN) {
			CashScriptLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CashScriptLexer._serializedATN));
		}

		return CashScriptLexer.__ATN;
	}

}

