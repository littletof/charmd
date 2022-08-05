// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

function l(r, t) {
    var { includeImageAlt: i = !0  } = t || {};
    return a(r, i);
}
function a(r, t) {
    return r && typeof r == "object" && (r.value || (t ? r.alt : "") || "children" in r && u(r.children, t) || Array.isArray(r) && u(r, t)) || "";
}
function u(r, t) {
    for(var i = [], n = -1; ++n < r.length;)i[n] = a(r[n], t);
    return i.join("");
}
function u1(p, n, l, h) {
    let c = p.length, f = 0, e;
    if (n < 0 ? n = -n > c ? 0 : c + n : n = n > c ? c : n, l = l > 0 ? l : 0, h.length < 1e4) e = Array.from(h), e.unshift(n, l), [].splice.apply(p, e);
    else for(l && [].splice.apply(p, [
        n,
        l
    ]); f < h.length;)e = h.slice(f, f + 1e4), e.unshift(n, 0), [].splice.apply(p, e), f += 1e4, n += 1e4;
}
function g(p, n) {
    return p.length > 0 ? (u1(p, p.length, 0, n), p) : n;
}
var l1 = {}.hasOwnProperty;
function y(t) {
    let e = {}, n = -1;
    for(; ++n < t.length;)h(e, t[n]);
    return e;
}
function h(t, e) {
    let n;
    for(n in e){
        let c = (l1.call(t, n) ? t[n] : void 0) || (t[n] = {}), r = e[n], o;
        for(o in r){
            l1.call(c, o) || (c[o] = []);
            let f = r[o];
            a1(c[o], Array.isArray(f) ? f : f ? [
                f
            ] : []);
        }
    }
}
function a1(t, e) {
    let n = -1, i = [];
    for(; ++n < e.length;)(e[n].add === "after" ? t : i).push(e[n]);
    u1(t, 0, 0, i);
}
var n = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
var o = F(/[A-Za-z]/), r = F(/\d/), D = F(/[\dA-Fa-f]/), C = F(/[\dA-Za-z]/), e = F(/[!-/:-@[-`{-~]/), c = F(/[#-'*+\--9=?A-Z^-~]/);
function B(u) {
    return u !== null && (u < 32 || u === 127);
}
function a2(u) {
    return u !== null && (u < 0 || u === 32);
}
function p(u) {
    return u !== null && u < -2;
}
function s(u) {
    return u === -2 || u === -1 || u === 32;
}
var x = F(/\s/), l2 = F(n);
function F(u) {
    return t;
    function t(A) {
        return A !== null && u.test(String.fromCharCode(A));
    }
}
function p1(n, t, i, u) {
    let o = u ? u - 1 : Number.POSITIVE_INFINITY, I = 0;
    return a;
    function a(r) {
        return s(r) ? (n.enter(i), e(r)) : t(r);
    }
    function e(r) {
        return s(r) && (I++) < o ? (n.consume(r), e) : (n.exit(i), t(r));
    }
}
function a3(n) {
    if (n === null || a2(n) || x(n)) return 1;
    if (l2(n)) return 2;
}
function c1(o, e, r) {
    let i = [], n = -1;
    for(; ++n < o.length;){
        let l = o[n].resolveAll;
        l && !i.includes(l) && (e = l(e, r), i.push(l));
    }
    return e;
}
var r1 = {
    AElig: "\xC6",
    AMP: "&",
    Aacute: "\xC1",
    Abreve: "\u0102",
    Acirc: "\xC2",
    Acy: "\u0410",
    Afr: "\u{1D504}",
    Agrave: "\xC0",
    Alpha: "\u0391",
    Amacr: "\u0100",
    And: "\u2A53",
    Aogon: "\u0104",
    Aopf: "\u{1D538}",
    ApplyFunction: "\u2061",
    Aring: "\xC5",
    Ascr: "\u{1D49C}",
    Assign: "\u2254",
    Atilde: "\xC3",
    Auml: "\xC4",
    Backslash: "\u2216",
    Barv: "\u2AE7",
    Barwed: "\u2306",
    Bcy: "\u0411",
    Because: "\u2235",
    Bernoullis: "\u212C",
    Beta: "\u0392",
    Bfr: "\u{1D505}",
    Bopf: "\u{1D539}",
    Breve: "\u02D8",
    Bscr: "\u212C",
    Bumpeq: "\u224E",
    CHcy: "\u0427",
    COPY: "\xA9",
    Cacute: "\u0106",
    Cap: "\u22D2",
    CapitalDifferentialD: "\u2145",
    Cayleys: "\u212D",
    Ccaron: "\u010C",
    Ccedil: "\xC7",
    Ccirc: "\u0108",
    Cconint: "\u2230",
    Cdot: "\u010A",
    Cedilla: "\xB8",
    CenterDot: "\xB7",
    Cfr: "\u212D",
    Chi: "\u03A7",
    CircleDot: "\u2299",
    CircleMinus: "\u2296",
    CirclePlus: "\u2295",
    CircleTimes: "\u2297",
    ClockwiseContourIntegral: "\u2232",
    CloseCurlyDoubleQuote: "\u201D",
    CloseCurlyQuote: "\u2019",
    Colon: "\u2237",
    Colone: "\u2A74",
    Congruent: "\u2261",
    Conint: "\u222F",
    ContourIntegral: "\u222E",
    Copf: "\u2102",
    Coproduct: "\u2210",
    CounterClockwiseContourIntegral: "\u2233",
    Cross: "\u2A2F",
    Cscr: "\u{1D49E}",
    Cup: "\u22D3",
    CupCap: "\u224D",
    DD: "\u2145",
    DDotrahd: "\u2911",
    DJcy: "\u0402",
    DScy: "\u0405",
    DZcy: "\u040F",
    Dagger: "\u2021",
    Darr: "\u21A1",
    Dashv: "\u2AE4",
    Dcaron: "\u010E",
    Dcy: "\u0414",
    Del: "\u2207",
    Delta: "\u0394",
    Dfr: "\u{1D507}",
    DiacriticalAcute: "\xB4",
    DiacriticalDot: "\u02D9",
    DiacriticalDoubleAcute: "\u02DD",
    DiacriticalGrave: "`",
    DiacriticalTilde: "\u02DC",
    Diamond: "\u22C4",
    DifferentialD: "\u2146",
    Dopf: "\u{1D53B}",
    Dot: "\xA8",
    DotDot: "\u20DC",
    DotEqual: "\u2250",
    DoubleContourIntegral: "\u222F",
    DoubleDot: "\xA8",
    DoubleDownArrow: "\u21D3",
    DoubleLeftArrow: "\u21D0",
    DoubleLeftRightArrow: "\u21D4",
    DoubleLeftTee: "\u2AE4",
    DoubleLongLeftArrow: "\u27F8",
    DoubleLongLeftRightArrow: "\u27FA",
    DoubleLongRightArrow: "\u27F9",
    DoubleRightArrow: "\u21D2",
    DoubleRightTee: "\u22A8",
    DoubleUpArrow: "\u21D1",
    DoubleUpDownArrow: "\u21D5",
    DoubleVerticalBar: "\u2225",
    DownArrow: "\u2193",
    DownArrowBar: "\u2913",
    DownArrowUpArrow: "\u21F5",
    DownBreve: "\u0311",
    DownLeftRightVector: "\u2950",
    DownLeftTeeVector: "\u295E",
    DownLeftVector: "\u21BD",
    DownLeftVectorBar: "\u2956",
    DownRightTeeVector: "\u295F",
    DownRightVector: "\u21C1",
    DownRightVectorBar: "\u2957",
    DownTee: "\u22A4",
    DownTeeArrow: "\u21A7",
    Downarrow: "\u21D3",
    Dscr: "\u{1D49F}",
    Dstrok: "\u0110",
    ENG: "\u014A",
    ETH: "\xD0",
    Eacute: "\xC9",
    Ecaron: "\u011A",
    Ecirc: "\xCA",
    Ecy: "\u042D",
    Edot: "\u0116",
    Efr: "\u{1D508}",
    Egrave: "\xC8",
    Element: "\u2208",
    Emacr: "\u0112",
    EmptySmallSquare: "\u25FB",
    EmptyVerySmallSquare: "\u25AB",
    Eogon: "\u0118",
    Eopf: "\u{1D53C}",
    Epsilon: "\u0395",
    Equal: "\u2A75",
    EqualTilde: "\u2242",
    Equilibrium: "\u21CC",
    Escr: "\u2130",
    Esim: "\u2A73",
    Eta: "\u0397",
    Euml: "\xCB",
    Exists: "\u2203",
    ExponentialE: "\u2147",
    Fcy: "\u0424",
    Ffr: "\u{1D509}",
    FilledSmallSquare: "\u25FC",
    FilledVerySmallSquare: "\u25AA",
    Fopf: "\u{1D53D}",
    ForAll: "\u2200",
    Fouriertrf: "\u2131",
    Fscr: "\u2131",
    GJcy: "\u0403",
    GT: ">",
    Gamma: "\u0393",
    Gammad: "\u03DC",
    Gbreve: "\u011E",
    Gcedil: "\u0122",
    Gcirc: "\u011C",
    Gcy: "\u0413",
    Gdot: "\u0120",
    Gfr: "\u{1D50A}",
    Gg: "\u22D9",
    Gopf: "\u{1D53E}",
    GreaterEqual: "\u2265",
    GreaterEqualLess: "\u22DB",
    GreaterFullEqual: "\u2267",
    GreaterGreater: "\u2AA2",
    GreaterLess: "\u2277",
    GreaterSlantEqual: "\u2A7E",
    GreaterTilde: "\u2273",
    Gscr: "\u{1D4A2}",
    Gt: "\u226B",
    HARDcy: "\u042A",
    Hacek: "\u02C7",
    Hat: "^",
    Hcirc: "\u0124",
    Hfr: "\u210C",
    HilbertSpace: "\u210B",
    Hopf: "\u210D",
    HorizontalLine: "\u2500",
    Hscr: "\u210B",
    Hstrok: "\u0126",
    HumpDownHump: "\u224E",
    HumpEqual: "\u224F",
    IEcy: "\u0415",
    IJlig: "\u0132",
    IOcy: "\u0401",
    Iacute: "\xCD",
    Icirc: "\xCE",
    Icy: "\u0418",
    Idot: "\u0130",
    Ifr: "\u2111",
    Igrave: "\xCC",
    Im: "\u2111",
    Imacr: "\u012A",
    ImaginaryI: "\u2148",
    Implies: "\u21D2",
    Int: "\u222C",
    Integral: "\u222B",
    Intersection: "\u22C2",
    InvisibleComma: "\u2063",
    InvisibleTimes: "\u2062",
    Iogon: "\u012E",
    Iopf: "\u{1D540}",
    Iota: "\u0399",
    Iscr: "\u2110",
    Itilde: "\u0128",
    Iukcy: "\u0406",
    Iuml: "\xCF",
    Jcirc: "\u0134",
    Jcy: "\u0419",
    Jfr: "\u{1D50D}",
    Jopf: "\u{1D541}",
    Jscr: "\u{1D4A5}",
    Jsercy: "\u0408",
    Jukcy: "\u0404",
    KHcy: "\u0425",
    KJcy: "\u040C",
    Kappa: "\u039A",
    Kcedil: "\u0136",
    Kcy: "\u041A",
    Kfr: "\u{1D50E}",
    Kopf: "\u{1D542}",
    Kscr: "\u{1D4A6}",
    LJcy: "\u0409",
    LT: "<",
    Lacute: "\u0139",
    Lambda: "\u039B",
    Lang: "\u27EA",
    Laplacetrf: "\u2112",
    Larr: "\u219E",
    Lcaron: "\u013D",
    Lcedil: "\u013B",
    Lcy: "\u041B",
    LeftAngleBracket: "\u27E8",
    LeftArrow: "\u2190",
    LeftArrowBar: "\u21E4",
    LeftArrowRightArrow: "\u21C6",
    LeftCeiling: "\u2308",
    LeftDoubleBracket: "\u27E6",
    LeftDownTeeVector: "\u2961",
    LeftDownVector: "\u21C3",
    LeftDownVectorBar: "\u2959",
    LeftFloor: "\u230A",
    LeftRightArrow: "\u2194",
    LeftRightVector: "\u294E",
    LeftTee: "\u22A3",
    LeftTeeArrow: "\u21A4",
    LeftTeeVector: "\u295A",
    LeftTriangle: "\u22B2",
    LeftTriangleBar: "\u29CF",
    LeftTriangleEqual: "\u22B4",
    LeftUpDownVector: "\u2951",
    LeftUpTeeVector: "\u2960",
    LeftUpVector: "\u21BF",
    LeftUpVectorBar: "\u2958",
    LeftVector: "\u21BC",
    LeftVectorBar: "\u2952",
    Leftarrow: "\u21D0",
    Leftrightarrow: "\u21D4",
    LessEqualGreater: "\u22DA",
    LessFullEqual: "\u2266",
    LessGreater: "\u2276",
    LessLess: "\u2AA1",
    LessSlantEqual: "\u2A7D",
    LessTilde: "\u2272",
    Lfr: "\u{1D50F}",
    Ll: "\u22D8",
    Lleftarrow: "\u21DA",
    Lmidot: "\u013F",
    LongLeftArrow: "\u27F5",
    LongLeftRightArrow: "\u27F7",
    LongRightArrow: "\u27F6",
    Longleftarrow: "\u27F8",
    Longleftrightarrow: "\u27FA",
    Longrightarrow: "\u27F9",
    Lopf: "\u{1D543}",
    LowerLeftArrow: "\u2199",
    LowerRightArrow: "\u2198",
    Lscr: "\u2112",
    Lsh: "\u21B0",
    Lstrok: "\u0141",
    Lt: "\u226A",
    Map: "\u2905",
    Mcy: "\u041C",
    MediumSpace: "\u205F",
    Mellintrf: "\u2133",
    Mfr: "\u{1D510}",
    MinusPlus: "\u2213",
    Mopf: "\u{1D544}",
    Mscr: "\u2133",
    Mu: "\u039C",
    NJcy: "\u040A",
    Nacute: "\u0143",
    Ncaron: "\u0147",
    Ncedil: "\u0145",
    Ncy: "\u041D",
    NegativeMediumSpace: "\u200B",
    NegativeThickSpace: "\u200B",
    NegativeThinSpace: "\u200B",
    NegativeVeryThinSpace: "\u200B",
    NestedGreaterGreater: "\u226B",
    NestedLessLess: "\u226A",
    NewLine: `
`,
    Nfr: "\u{1D511}",
    NoBreak: "\u2060",
    NonBreakingSpace: "\xA0",
    Nopf: "\u2115",
    Not: "\u2AEC",
    NotCongruent: "\u2262",
    NotCupCap: "\u226D",
    NotDoubleVerticalBar: "\u2226",
    NotElement: "\u2209",
    NotEqual: "\u2260",
    NotEqualTilde: "\u2242\u0338",
    NotExists: "\u2204",
    NotGreater: "\u226F",
    NotGreaterEqual: "\u2271",
    NotGreaterFullEqual: "\u2267\u0338",
    NotGreaterGreater: "\u226B\u0338",
    NotGreaterLess: "\u2279",
    NotGreaterSlantEqual: "\u2A7E\u0338",
    NotGreaterTilde: "\u2275",
    NotHumpDownHump: "\u224E\u0338",
    NotHumpEqual: "\u224F\u0338",
    NotLeftTriangle: "\u22EA",
    NotLeftTriangleBar: "\u29CF\u0338",
    NotLeftTriangleEqual: "\u22EC",
    NotLess: "\u226E",
    NotLessEqual: "\u2270",
    NotLessGreater: "\u2278",
    NotLessLess: "\u226A\u0338",
    NotLessSlantEqual: "\u2A7D\u0338",
    NotLessTilde: "\u2274",
    NotNestedGreaterGreater: "\u2AA2\u0338",
    NotNestedLessLess: "\u2AA1\u0338",
    NotPrecedes: "\u2280",
    NotPrecedesEqual: "\u2AAF\u0338",
    NotPrecedesSlantEqual: "\u22E0",
    NotReverseElement: "\u220C",
    NotRightTriangle: "\u22EB",
    NotRightTriangleBar: "\u29D0\u0338",
    NotRightTriangleEqual: "\u22ED",
    NotSquareSubset: "\u228F\u0338",
    NotSquareSubsetEqual: "\u22E2",
    NotSquareSuperset: "\u2290\u0338",
    NotSquareSupersetEqual: "\u22E3",
    NotSubset: "\u2282\u20D2",
    NotSubsetEqual: "\u2288",
    NotSucceeds: "\u2281",
    NotSucceedsEqual: "\u2AB0\u0338",
    NotSucceedsSlantEqual: "\u22E1",
    NotSucceedsTilde: "\u227F\u0338",
    NotSuperset: "\u2283\u20D2",
    NotSupersetEqual: "\u2289",
    NotTilde: "\u2241",
    NotTildeEqual: "\u2244",
    NotTildeFullEqual: "\u2247",
    NotTildeTilde: "\u2249",
    NotVerticalBar: "\u2224",
    Nscr: "\u{1D4A9}",
    Ntilde: "\xD1",
    Nu: "\u039D",
    OElig: "\u0152",
    Oacute: "\xD3",
    Ocirc: "\xD4",
    Ocy: "\u041E",
    Odblac: "\u0150",
    Ofr: "\u{1D512}",
    Ograve: "\xD2",
    Omacr: "\u014C",
    Omega: "\u03A9",
    Omicron: "\u039F",
    Oopf: "\u{1D546}",
    OpenCurlyDoubleQuote: "\u201C",
    OpenCurlyQuote: "\u2018",
    Or: "\u2A54",
    Oscr: "\u{1D4AA}",
    Oslash: "\xD8",
    Otilde: "\xD5",
    Otimes: "\u2A37",
    Ouml: "\xD6",
    OverBar: "\u203E",
    OverBrace: "\u23DE",
    OverBracket: "\u23B4",
    OverParenthesis: "\u23DC",
    PartialD: "\u2202",
    Pcy: "\u041F",
    Pfr: "\u{1D513}",
    Phi: "\u03A6",
    Pi: "\u03A0",
    PlusMinus: "\xB1",
    Poincareplane: "\u210C",
    Popf: "\u2119",
    Pr: "\u2ABB",
    Precedes: "\u227A",
    PrecedesEqual: "\u2AAF",
    PrecedesSlantEqual: "\u227C",
    PrecedesTilde: "\u227E",
    Prime: "\u2033",
    Product: "\u220F",
    Proportion: "\u2237",
    Proportional: "\u221D",
    Pscr: "\u{1D4AB}",
    Psi: "\u03A8",
    QUOT: '"',
    Qfr: "\u{1D514}",
    Qopf: "\u211A",
    Qscr: "\u{1D4AC}",
    RBarr: "\u2910",
    REG: "\xAE",
    Racute: "\u0154",
    Rang: "\u27EB",
    Rarr: "\u21A0",
    Rarrtl: "\u2916",
    Rcaron: "\u0158",
    Rcedil: "\u0156",
    Rcy: "\u0420",
    Re: "\u211C",
    ReverseElement: "\u220B",
    ReverseEquilibrium: "\u21CB",
    ReverseUpEquilibrium: "\u296F",
    Rfr: "\u211C",
    Rho: "\u03A1",
    RightAngleBracket: "\u27E9",
    RightArrow: "\u2192",
    RightArrowBar: "\u21E5",
    RightArrowLeftArrow: "\u21C4",
    RightCeiling: "\u2309",
    RightDoubleBracket: "\u27E7",
    RightDownTeeVector: "\u295D",
    RightDownVector: "\u21C2",
    RightDownVectorBar: "\u2955",
    RightFloor: "\u230B",
    RightTee: "\u22A2",
    RightTeeArrow: "\u21A6",
    RightTeeVector: "\u295B",
    RightTriangle: "\u22B3",
    RightTriangleBar: "\u29D0",
    RightTriangleEqual: "\u22B5",
    RightUpDownVector: "\u294F",
    RightUpTeeVector: "\u295C",
    RightUpVector: "\u21BE",
    RightUpVectorBar: "\u2954",
    RightVector: "\u21C0",
    RightVectorBar: "\u2953",
    Rightarrow: "\u21D2",
    Ropf: "\u211D",
    RoundImplies: "\u2970",
    Rrightarrow: "\u21DB",
    Rscr: "\u211B",
    Rsh: "\u21B1",
    RuleDelayed: "\u29F4",
    SHCHcy: "\u0429",
    SHcy: "\u0428",
    SOFTcy: "\u042C",
    Sacute: "\u015A",
    Sc: "\u2ABC",
    Scaron: "\u0160",
    Scedil: "\u015E",
    Scirc: "\u015C",
    Scy: "\u0421",
    Sfr: "\u{1D516}",
    ShortDownArrow: "\u2193",
    ShortLeftArrow: "\u2190",
    ShortRightArrow: "\u2192",
    ShortUpArrow: "\u2191",
    Sigma: "\u03A3",
    SmallCircle: "\u2218",
    Sopf: "\u{1D54A}",
    Sqrt: "\u221A",
    Square: "\u25A1",
    SquareIntersection: "\u2293",
    SquareSubset: "\u228F",
    SquareSubsetEqual: "\u2291",
    SquareSuperset: "\u2290",
    SquareSupersetEqual: "\u2292",
    SquareUnion: "\u2294",
    Sscr: "\u{1D4AE}",
    Star: "\u22C6",
    Sub: "\u22D0",
    Subset: "\u22D0",
    SubsetEqual: "\u2286",
    Succeeds: "\u227B",
    SucceedsEqual: "\u2AB0",
    SucceedsSlantEqual: "\u227D",
    SucceedsTilde: "\u227F",
    SuchThat: "\u220B",
    Sum: "\u2211",
    Sup: "\u22D1",
    Superset: "\u2283",
    SupersetEqual: "\u2287",
    Supset: "\u22D1",
    THORN: "\xDE",
    TRADE: "\u2122",
    TSHcy: "\u040B",
    TScy: "\u0426",
    Tab: "	",
    Tau: "\u03A4",
    Tcaron: "\u0164",
    Tcedil: "\u0162",
    Tcy: "\u0422",
    Tfr: "\u{1D517}",
    Therefore: "\u2234",
    Theta: "\u0398",
    ThickSpace: "\u205F\u200A",
    ThinSpace: "\u2009",
    Tilde: "\u223C",
    TildeEqual: "\u2243",
    TildeFullEqual: "\u2245",
    TildeTilde: "\u2248",
    Topf: "\u{1D54B}",
    TripleDot: "\u20DB",
    Tscr: "\u{1D4AF}",
    Tstrok: "\u0166",
    Uacute: "\xDA",
    Uarr: "\u219F",
    Uarrocir: "\u2949",
    Ubrcy: "\u040E",
    Ubreve: "\u016C",
    Ucirc: "\xDB",
    Ucy: "\u0423",
    Udblac: "\u0170",
    Ufr: "\u{1D518}",
    Ugrave: "\xD9",
    Umacr: "\u016A",
    UnderBar: "_",
    UnderBrace: "\u23DF",
    UnderBracket: "\u23B5",
    UnderParenthesis: "\u23DD",
    Union: "\u22C3",
    UnionPlus: "\u228E",
    Uogon: "\u0172",
    Uopf: "\u{1D54C}",
    UpArrow: "\u2191",
    UpArrowBar: "\u2912",
    UpArrowDownArrow: "\u21C5",
    UpDownArrow: "\u2195",
    UpEquilibrium: "\u296E",
    UpTee: "\u22A5",
    UpTeeArrow: "\u21A5",
    Uparrow: "\u21D1",
    Updownarrow: "\u21D5",
    UpperLeftArrow: "\u2196",
    UpperRightArrow: "\u2197",
    Upsi: "\u03D2",
    Upsilon: "\u03A5",
    Uring: "\u016E",
    Uscr: "\u{1D4B0}",
    Utilde: "\u0168",
    Uuml: "\xDC",
    VDash: "\u22AB",
    Vbar: "\u2AEB",
    Vcy: "\u0412",
    Vdash: "\u22A9",
    Vdashl: "\u2AE6",
    Vee: "\u22C1",
    Verbar: "\u2016",
    Vert: "\u2016",
    VerticalBar: "\u2223",
    VerticalLine: "|",
    VerticalSeparator: "\u2758",
    VerticalTilde: "\u2240",
    VeryThinSpace: "\u200A",
    Vfr: "\u{1D519}",
    Vopf: "\u{1D54D}",
    Vscr: "\u{1D4B1}",
    Vvdash: "\u22AA",
    Wcirc: "\u0174",
    Wedge: "\u22C0",
    Wfr: "\u{1D51A}",
    Wopf: "\u{1D54E}",
    Wscr: "\u{1D4B2}",
    Xfr: "\u{1D51B}",
    Xi: "\u039E",
    Xopf: "\u{1D54F}",
    Xscr: "\u{1D4B3}",
    YAcy: "\u042F",
    YIcy: "\u0407",
    YUcy: "\u042E",
    Yacute: "\xDD",
    Ycirc: "\u0176",
    Ycy: "\u042B",
    Yfr: "\u{1D51C}",
    Yopf: "\u{1D550}",
    Yscr: "\u{1D4B4}",
    Yuml: "\u0178",
    ZHcy: "\u0416",
    Zacute: "\u0179",
    Zcaron: "\u017D",
    Zcy: "\u0417",
    Zdot: "\u017B",
    ZeroWidthSpace: "\u200B",
    Zeta: "\u0396",
    Zfr: "\u2128",
    Zopf: "\u2124",
    Zscr: "\u{1D4B5}",
    aacute: "\xE1",
    abreve: "\u0103",
    ac: "\u223E",
    acE: "\u223E\u0333",
    acd: "\u223F",
    acirc: "\xE2",
    acute: "\xB4",
    acy: "\u0430",
    aelig: "\xE6",
    af: "\u2061",
    afr: "\u{1D51E}",
    agrave: "\xE0",
    alefsym: "\u2135",
    aleph: "\u2135",
    alpha: "\u03B1",
    amacr: "\u0101",
    amalg: "\u2A3F",
    amp: "&",
    and: "\u2227",
    andand: "\u2A55",
    andd: "\u2A5C",
    andslope: "\u2A58",
    andv: "\u2A5A",
    ang: "\u2220",
    ange: "\u29A4",
    angle: "\u2220",
    angmsd: "\u2221",
    angmsdaa: "\u29A8",
    angmsdab: "\u29A9",
    angmsdac: "\u29AA",
    angmsdad: "\u29AB",
    angmsdae: "\u29AC",
    angmsdaf: "\u29AD",
    angmsdag: "\u29AE",
    angmsdah: "\u29AF",
    angrt: "\u221F",
    angrtvb: "\u22BE",
    angrtvbd: "\u299D",
    angsph: "\u2222",
    angst: "\xC5",
    angzarr: "\u237C",
    aogon: "\u0105",
    aopf: "\u{1D552}",
    ap: "\u2248",
    apE: "\u2A70",
    apacir: "\u2A6F",
    ape: "\u224A",
    apid: "\u224B",
    apos: "'",
    approx: "\u2248",
    approxeq: "\u224A",
    aring: "\xE5",
    ascr: "\u{1D4B6}",
    ast: "*",
    asymp: "\u2248",
    asympeq: "\u224D",
    atilde: "\xE3",
    auml: "\xE4",
    awconint: "\u2233",
    awint: "\u2A11",
    bNot: "\u2AED",
    backcong: "\u224C",
    backepsilon: "\u03F6",
    backprime: "\u2035",
    backsim: "\u223D",
    backsimeq: "\u22CD",
    barvee: "\u22BD",
    barwed: "\u2305",
    barwedge: "\u2305",
    bbrk: "\u23B5",
    bbrktbrk: "\u23B6",
    bcong: "\u224C",
    bcy: "\u0431",
    bdquo: "\u201E",
    becaus: "\u2235",
    because: "\u2235",
    bemptyv: "\u29B0",
    bepsi: "\u03F6",
    bernou: "\u212C",
    beta: "\u03B2",
    beth: "\u2136",
    between: "\u226C",
    bfr: "\u{1D51F}",
    bigcap: "\u22C2",
    bigcirc: "\u25EF",
    bigcup: "\u22C3",
    bigodot: "\u2A00",
    bigoplus: "\u2A01",
    bigotimes: "\u2A02",
    bigsqcup: "\u2A06",
    bigstar: "\u2605",
    bigtriangledown: "\u25BD",
    bigtriangleup: "\u25B3",
    biguplus: "\u2A04",
    bigvee: "\u22C1",
    bigwedge: "\u22C0",
    bkarow: "\u290D",
    blacklozenge: "\u29EB",
    blacksquare: "\u25AA",
    blacktriangle: "\u25B4",
    blacktriangledown: "\u25BE",
    blacktriangleleft: "\u25C2",
    blacktriangleright: "\u25B8",
    blank: "\u2423",
    blk12: "\u2592",
    blk14: "\u2591",
    blk34: "\u2593",
    block: "\u2588",
    bne: "=\u20E5",
    bnequiv: "\u2261\u20E5",
    bnot: "\u2310",
    bopf: "\u{1D553}",
    bot: "\u22A5",
    bottom: "\u22A5",
    bowtie: "\u22C8",
    boxDL: "\u2557",
    boxDR: "\u2554",
    boxDl: "\u2556",
    boxDr: "\u2553",
    boxH: "\u2550",
    boxHD: "\u2566",
    boxHU: "\u2569",
    boxHd: "\u2564",
    boxHu: "\u2567",
    boxUL: "\u255D",
    boxUR: "\u255A",
    boxUl: "\u255C",
    boxUr: "\u2559",
    boxV: "\u2551",
    boxVH: "\u256C",
    boxVL: "\u2563",
    boxVR: "\u2560",
    boxVh: "\u256B",
    boxVl: "\u2562",
    boxVr: "\u255F",
    boxbox: "\u29C9",
    boxdL: "\u2555",
    boxdR: "\u2552",
    boxdl: "\u2510",
    boxdr: "\u250C",
    boxh: "\u2500",
    boxhD: "\u2565",
    boxhU: "\u2568",
    boxhd: "\u252C",
    boxhu: "\u2534",
    boxminus: "\u229F",
    boxplus: "\u229E",
    boxtimes: "\u22A0",
    boxuL: "\u255B",
    boxuR: "\u2558",
    boxul: "\u2518",
    boxur: "\u2514",
    boxv: "\u2502",
    boxvH: "\u256A",
    boxvL: "\u2561",
    boxvR: "\u255E",
    boxvh: "\u253C",
    boxvl: "\u2524",
    boxvr: "\u251C",
    bprime: "\u2035",
    breve: "\u02D8",
    brvbar: "\xA6",
    bscr: "\u{1D4B7}",
    bsemi: "\u204F",
    bsim: "\u223D",
    bsime: "\u22CD",
    bsol: "\\",
    bsolb: "\u29C5",
    bsolhsub: "\u27C8",
    bull: "\u2022",
    bullet: "\u2022",
    bump: "\u224E",
    bumpE: "\u2AAE",
    bumpe: "\u224F",
    bumpeq: "\u224F",
    cacute: "\u0107",
    cap: "\u2229",
    capand: "\u2A44",
    capbrcup: "\u2A49",
    capcap: "\u2A4B",
    capcup: "\u2A47",
    capdot: "\u2A40",
    caps: "\u2229\uFE00",
    caret: "\u2041",
    caron: "\u02C7",
    ccaps: "\u2A4D",
    ccaron: "\u010D",
    ccedil: "\xE7",
    ccirc: "\u0109",
    ccups: "\u2A4C",
    ccupssm: "\u2A50",
    cdot: "\u010B",
    cedil: "\xB8",
    cemptyv: "\u29B2",
    cent: "\xA2",
    centerdot: "\xB7",
    cfr: "\u{1D520}",
    chcy: "\u0447",
    check: "\u2713",
    checkmark: "\u2713",
    chi: "\u03C7",
    cir: "\u25CB",
    cirE: "\u29C3",
    circ: "\u02C6",
    circeq: "\u2257",
    circlearrowleft: "\u21BA",
    circlearrowright: "\u21BB",
    circledR: "\xAE",
    circledS: "\u24C8",
    circledast: "\u229B",
    circledcirc: "\u229A",
    circleddash: "\u229D",
    cire: "\u2257",
    cirfnint: "\u2A10",
    cirmid: "\u2AEF",
    cirscir: "\u29C2",
    clubs: "\u2663",
    clubsuit: "\u2663",
    colon: ":",
    colone: "\u2254",
    coloneq: "\u2254",
    comma: ",",
    commat: "@",
    comp: "\u2201",
    compfn: "\u2218",
    complement: "\u2201",
    complexes: "\u2102",
    cong: "\u2245",
    congdot: "\u2A6D",
    conint: "\u222E",
    copf: "\u{1D554}",
    coprod: "\u2210",
    copy: "\xA9",
    copysr: "\u2117",
    crarr: "\u21B5",
    cross: "\u2717",
    cscr: "\u{1D4B8}",
    csub: "\u2ACF",
    csube: "\u2AD1",
    csup: "\u2AD0",
    csupe: "\u2AD2",
    ctdot: "\u22EF",
    cudarrl: "\u2938",
    cudarrr: "\u2935",
    cuepr: "\u22DE",
    cuesc: "\u22DF",
    cularr: "\u21B6",
    cularrp: "\u293D",
    cup: "\u222A",
    cupbrcap: "\u2A48",
    cupcap: "\u2A46",
    cupcup: "\u2A4A",
    cupdot: "\u228D",
    cupor: "\u2A45",
    cups: "\u222A\uFE00",
    curarr: "\u21B7",
    curarrm: "\u293C",
    curlyeqprec: "\u22DE",
    curlyeqsucc: "\u22DF",
    curlyvee: "\u22CE",
    curlywedge: "\u22CF",
    curren: "\xA4",
    curvearrowleft: "\u21B6",
    curvearrowright: "\u21B7",
    cuvee: "\u22CE",
    cuwed: "\u22CF",
    cwconint: "\u2232",
    cwint: "\u2231",
    cylcty: "\u232D",
    dArr: "\u21D3",
    dHar: "\u2965",
    dagger: "\u2020",
    daleth: "\u2138",
    darr: "\u2193",
    dash: "\u2010",
    dashv: "\u22A3",
    dbkarow: "\u290F",
    dblac: "\u02DD",
    dcaron: "\u010F",
    dcy: "\u0434",
    dd: "\u2146",
    ddagger: "\u2021",
    ddarr: "\u21CA",
    ddotseq: "\u2A77",
    deg: "\xB0",
    delta: "\u03B4",
    demptyv: "\u29B1",
    dfisht: "\u297F",
    dfr: "\u{1D521}",
    dharl: "\u21C3",
    dharr: "\u21C2",
    diam: "\u22C4",
    diamond: "\u22C4",
    diamondsuit: "\u2666",
    diams: "\u2666",
    die: "\xA8",
    digamma: "\u03DD",
    disin: "\u22F2",
    div: "\xF7",
    divide: "\xF7",
    divideontimes: "\u22C7",
    divonx: "\u22C7",
    djcy: "\u0452",
    dlcorn: "\u231E",
    dlcrop: "\u230D",
    dollar: "$",
    dopf: "\u{1D555}",
    dot: "\u02D9",
    doteq: "\u2250",
    doteqdot: "\u2251",
    dotminus: "\u2238",
    dotplus: "\u2214",
    dotsquare: "\u22A1",
    doublebarwedge: "\u2306",
    downarrow: "\u2193",
    downdownarrows: "\u21CA",
    downharpoonleft: "\u21C3",
    downharpoonright: "\u21C2",
    drbkarow: "\u2910",
    drcorn: "\u231F",
    drcrop: "\u230C",
    dscr: "\u{1D4B9}",
    dscy: "\u0455",
    dsol: "\u29F6",
    dstrok: "\u0111",
    dtdot: "\u22F1",
    dtri: "\u25BF",
    dtrif: "\u25BE",
    duarr: "\u21F5",
    duhar: "\u296F",
    dwangle: "\u29A6",
    dzcy: "\u045F",
    dzigrarr: "\u27FF",
    eDDot: "\u2A77",
    eDot: "\u2251",
    eacute: "\xE9",
    easter: "\u2A6E",
    ecaron: "\u011B",
    ecir: "\u2256",
    ecirc: "\xEA",
    ecolon: "\u2255",
    ecy: "\u044D",
    edot: "\u0117",
    ee: "\u2147",
    efDot: "\u2252",
    efr: "\u{1D522}",
    eg: "\u2A9A",
    egrave: "\xE8",
    egs: "\u2A96",
    egsdot: "\u2A98",
    el: "\u2A99",
    elinters: "\u23E7",
    ell: "\u2113",
    els: "\u2A95",
    elsdot: "\u2A97",
    emacr: "\u0113",
    empty: "\u2205",
    emptyset: "\u2205",
    emptyv: "\u2205",
    emsp13: "\u2004",
    emsp14: "\u2005",
    emsp: "\u2003",
    eng: "\u014B",
    ensp: "\u2002",
    eogon: "\u0119",
    eopf: "\u{1D556}",
    epar: "\u22D5",
    eparsl: "\u29E3",
    eplus: "\u2A71",
    epsi: "\u03B5",
    epsilon: "\u03B5",
    epsiv: "\u03F5",
    eqcirc: "\u2256",
    eqcolon: "\u2255",
    eqsim: "\u2242",
    eqslantgtr: "\u2A96",
    eqslantless: "\u2A95",
    equals: "=",
    equest: "\u225F",
    equiv: "\u2261",
    equivDD: "\u2A78",
    eqvparsl: "\u29E5",
    erDot: "\u2253",
    erarr: "\u2971",
    escr: "\u212F",
    esdot: "\u2250",
    esim: "\u2242",
    eta: "\u03B7",
    eth: "\xF0",
    euml: "\xEB",
    euro: "\u20AC",
    excl: "!",
    exist: "\u2203",
    expectation: "\u2130",
    exponentiale: "\u2147",
    fallingdotseq: "\u2252",
    fcy: "\u0444",
    female: "\u2640",
    ffilig: "\uFB03",
    fflig: "\uFB00",
    ffllig: "\uFB04",
    ffr: "\u{1D523}",
    filig: "\uFB01",
    fjlig: "fj",
    flat: "\u266D",
    fllig: "\uFB02",
    fltns: "\u25B1",
    fnof: "\u0192",
    fopf: "\u{1D557}",
    forall: "\u2200",
    fork: "\u22D4",
    forkv: "\u2AD9",
    fpartint: "\u2A0D",
    frac12: "\xBD",
    frac13: "\u2153",
    frac14: "\xBC",
    frac15: "\u2155",
    frac16: "\u2159",
    frac18: "\u215B",
    frac23: "\u2154",
    frac25: "\u2156",
    frac34: "\xBE",
    frac35: "\u2157",
    frac38: "\u215C",
    frac45: "\u2158",
    frac56: "\u215A",
    frac58: "\u215D",
    frac78: "\u215E",
    frasl: "\u2044",
    frown: "\u2322",
    fscr: "\u{1D4BB}",
    gE: "\u2267",
    gEl: "\u2A8C",
    gacute: "\u01F5",
    gamma: "\u03B3",
    gammad: "\u03DD",
    gap: "\u2A86",
    gbreve: "\u011F",
    gcirc: "\u011D",
    gcy: "\u0433",
    gdot: "\u0121",
    ge: "\u2265",
    gel: "\u22DB",
    geq: "\u2265",
    geqq: "\u2267",
    geqslant: "\u2A7E",
    ges: "\u2A7E",
    gescc: "\u2AA9",
    gesdot: "\u2A80",
    gesdoto: "\u2A82",
    gesdotol: "\u2A84",
    gesl: "\u22DB\uFE00",
    gesles: "\u2A94",
    gfr: "\u{1D524}",
    gg: "\u226B",
    ggg: "\u22D9",
    gimel: "\u2137",
    gjcy: "\u0453",
    gl: "\u2277",
    glE: "\u2A92",
    gla: "\u2AA5",
    glj: "\u2AA4",
    gnE: "\u2269",
    gnap: "\u2A8A",
    gnapprox: "\u2A8A",
    gne: "\u2A88",
    gneq: "\u2A88",
    gneqq: "\u2269",
    gnsim: "\u22E7",
    gopf: "\u{1D558}",
    grave: "`",
    gscr: "\u210A",
    gsim: "\u2273",
    gsime: "\u2A8E",
    gsiml: "\u2A90",
    gt: ">",
    gtcc: "\u2AA7",
    gtcir: "\u2A7A",
    gtdot: "\u22D7",
    gtlPar: "\u2995",
    gtquest: "\u2A7C",
    gtrapprox: "\u2A86",
    gtrarr: "\u2978",
    gtrdot: "\u22D7",
    gtreqless: "\u22DB",
    gtreqqless: "\u2A8C",
    gtrless: "\u2277",
    gtrsim: "\u2273",
    gvertneqq: "\u2269\uFE00",
    gvnE: "\u2269\uFE00",
    hArr: "\u21D4",
    hairsp: "\u200A",
    half: "\xBD",
    hamilt: "\u210B",
    hardcy: "\u044A",
    harr: "\u2194",
    harrcir: "\u2948",
    harrw: "\u21AD",
    hbar: "\u210F",
    hcirc: "\u0125",
    hearts: "\u2665",
    heartsuit: "\u2665",
    hellip: "\u2026",
    hercon: "\u22B9",
    hfr: "\u{1D525}",
    hksearow: "\u2925",
    hkswarow: "\u2926",
    hoarr: "\u21FF",
    homtht: "\u223B",
    hookleftarrow: "\u21A9",
    hookrightarrow: "\u21AA",
    hopf: "\u{1D559}",
    horbar: "\u2015",
    hscr: "\u{1D4BD}",
    hslash: "\u210F",
    hstrok: "\u0127",
    hybull: "\u2043",
    hyphen: "\u2010",
    iacute: "\xED",
    ic: "\u2063",
    icirc: "\xEE",
    icy: "\u0438",
    iecy: "\u0435",
    iexcl: "\xA1",
    iff: "\u21D4",
    ifr: "\u{1D526}",
    igrave: "\xEC",
    ii: "\u2148",
    iiiint: "\u2A0C",
    iiint: "\u222D",
    iinfin: "\u29DC",
    iiota: "\u2129",
    ijlig: "\u0133",
    imacr: "\u012B",
    image: "\u2111",
    imagline: "\u2110",
    imagpart: "\u2111",
    imath: "\u0131",
    imof: "\u22B7",
    imped: "\u01B5",
    in: "\u2208",
    incare: "\u2105",
    infin: "\u221E",
    infintie: "\u29DD",
    inodot: "\u0131",
    int: "\u222B",
    intcal: "\u22BA",
    integers: "\u2124",
    intercal: "\u22BA",
    intlarhk: "\u2A17",
    intprod: "\u2A3C",
    iocy: "\u0451",
    iogon: "\u012F",
    iopf: "\u{1D55A}",
    iota: "\u03B9",
    iprod: "\u2A3C",
    iquest: "\xBF",
    iscr: "\u{1D4BE}",
    isin: "\u2208",
    isinE: "\u22F9",
    isindot: "\u22F5",
    isins: "\u22F4",
    isinsv: "\u22F3",
    isinv: "\u2208",
    it: "\u2062",
    itilde: "\u0129",
    iukcy: "\u0456",
    iuml: "\xEF",
    jcirc: "\u0135",
    jcy: "\u0439",
    jfr: "\u{1D527}",
    jmath: "\u0237",
    jopf: "\u{1D55B}",
    jscr: "\u{1D4BF}",
    jsercy: "\u0458",
    jukcy: "\u0454",
    kappa: "\u03BA",
    kappav: "\u03F0",
    kcedil: "\u0137",
    kcy: "\u043A",
    kfr: "\u{1D528}",
    kgreen: "\u0138",
    khcy: "\u0445",
    kjcy: "\u045C",
    kopf: "\u{1D55C}",
    kscr: "\u{1D4C0}",
    lAarr: "\u21DA",
    lArr: "\u21D0",
    lAtail: "\u291B",
    lBarr: "\u290E",
    lE: "\u2266",
    lEg: "\u2A8B",
    lHar: "\u2962",
    lacute: "\u013A",
    laemptyv: "\u29B4",
    lagran: "\u2112",
    lambda: "\u03BB",
    lang: "\u27E8",
    langd: "\u2991",
    langle: "\u27E8",
    lap: "\u2A85",
    laquo: "\xAB",
    larr: "\u2190",
    larrb: "\u21E4",
    larrbfs: "\u291F",
    larrfs: "\u291D",
    larrhk: "\u21A9",
    larrlp: "\u21AB",
    larrpl: "\u2939",
    larrsim: "\u2973",
    larrtl: "\u21A2",
    lat: "\u2AAB",
    latail: "\u2919",
    late: "\u2AAD",
    lates: "\u2AAD\uFE00",
    lbarr: "\u290C",
    lbbrk: "\u2772",
    lbrace: "{",
    lbrack: "[",
    lbrke: "\u298B",
    lbrksld: "\u298F",
    lbrkslu: "\u298D",
    lcaron: "\u013E",
    lcedil: "\u013C",
    lceil: "\u2308",
    lcub: "{",
    lcy: "\u043B",
    ldca: "\u2936",
    ldquo: "\u201C",
    ldquor: "\u201E",
    ldrdhar: "\u2967",
    ldrushar: "\u294B",
    ldsh: "\u21B2",
    le: "\u2264",
    leftarrow: "\u2190",
    leftarrowtail: "\u21A2",
    leftharpoondown: "\u21BD",
    leftharpoonup: "\u21BC",
    leftleftarrows: "\u21C7",
    leftrightarrow: "\u2194",
    leftrightarrows: "\u21C6",
    leftrightharpoons: "\u21CB",
    leftrightsquigarrow: "\u21AD",
    leftthreetimes: "\u22CB",
    leg: "\u22DA",
    leq: "\u2264",
    leqq: "\u2266",
    leqslant: "\u2A7D",
    les: "\u2A7D",
    lescc: "\u2AA8",
    lesdot: "\u2A7F",
    lesdoto: "\u2A81",
    lesdotor: "\u2A83",
    lesg: "\u22DA\uFE00",
    lesges: "\u2A93",
    lessapprox: "\u2A85",
    lessdot: "\u22D6",
    lesseqgtr: "\u22DA",
    lesseqqgtr: "\u2A8B",
    lessgtr: "\u2276",
    lesssim: "\u2272",
    lfisht: "\u297C",
    lfloor: "\u230A",
    lfr: "\u{1D529}",
    lg: "\u2276",
    lgE: "\u2A91",
    lhard: "\u21BD",
    lharu: "\u21BC",
    lharul: "\u296A",
    lhblk: "\u2584",
    ljcy: "\u0459",
    ll: "\u226A",
    llarr: "\u21C7",
    llcorner: "\u231E",
    llhard: "\u296B",
    lltri: "\u25FA",
    lmidot: "\u0140",
    lmoust: "\u23B0",
    lmoustache: "\u23B0",
    lnE: "\u2268",
    lnap: "\u2A89",
    lnapprox: "\u2A89",
    lne: "\u2A87",
    lneq: "\u2A87",
    lneqq: "\u2268",
    lnsim: "\u22E6",
    loang: "\u27EC",
    loarr: "\u21FD",
    lobrk: "\u27E6",
    longleftarrow: "\u27F5",
    longleftrightarrow: "\u27F7",
    longmapsto: "\u27FC",
    longrightarrow: "\u27F6",
    looparrowleft: "\u21AB",
    looparrowright: "\u21AC",
    lopar: "\u2985",
    lopf: "\u{1D55D}",
    loplus: "\u2A2D",
    lotimes: "\u2A34",
    lowast: "\u2217",
    lowbar: "_",
    loz: "\u25CA",
    lozenge: "\u25CA",
    lozf: "\u29EB",
    lpar: "(",
    lparlt: "\u2993",
    lrarr: "\u21C6",
    lrcorner: "\u231F",
    lrhar: "\u21CB",
    lrhard: "\u296D",
    lrm: "\u200E",
    lrtri: "\u22BF",
    lsaquo: "\u2039",
    lscr: "\u{1D4C1}",
    lsh: "\u21B0",
    lsim: "\u2272",
    lsime: "\u2A8D",
    lsimg: "\u2A8F",
    lsqb: "[",
    lsquo: "\u2018",
    lsquor: "\u201A",
    lstrok: "\u0142",
    lt: "<",
    ltcc: "\u2AA6",
    ltcir: "\u2A79",
    ltdot: "\u22D6",
    lthree: "\u22CB",
    ltimes: "\u22C9",
    ltlarr: "\u2976",
    ltquest: "\u2A7B",
    ltrPar: "\u2996",
    ltri: "\u25C3",
    ltrie: "\u22B4",
    ltrif: "\u25C2",
    lurdshar: "\u294A",
    luruhar: "\u2966",
    lvertneqq: "\u2268\uFE00",
    lvnE: "\u2268\uFE00",
    mDDot: "\u223A",
    macr: "\xAF",
    male: "\u2642",
    malt: "\u2720",
    maltese: "\u2720",
    map: "\u21A6",
    mapsto: "\u21A6",
    mapstodown: "\u21A7",
    mapstoleft: "\u21A4",
    mapstoup: "\u21A5",
    marker: "\u25AE",
    mcomma: "\u2A29",
    mcy: "\u043C",
    mdash: "\u2014",
    measuredangle: "\u2221",
    mfr: "\u{1D52A}",
    mho: "\u2127",
    micro: "\xB5",
    mid: "\u2223",
    midast: "*",
    midcir: "\u2AF0",
    middot: "\xB7",
    minus: "\u2212",
    minusb: "\u229F",
    minusd: "\u2238",
    minusdu: "\u2A2A",
    mlcp: "\u2ADB",
    mldr: "\u2026",
    mnplus: "\u2213",
    models: "\u22A7",
    mopf: "\u{1D55E}",
    mp: "\u2213",
    mscr: "\u{1D4C2}",
    mstpos: "\u223E",
    mu: "\u03BC",
    multimap: "\u22B8",
    mumap: "\u22B8",
    nGg: "\u22D9\u0338",
    nGt: "\u226B\u20D2",
    nGtv: "\u226B\u0338",
    nLeftarrow: "\u21CD",
    nLeftrightarrow: "\u21CE",
    nLl: "\u22D8\u0338",
    nLt: "\u226A\u20D2",
    nLtv: "\u226A\u0338",
    nRightarrow: "\u21CF",
    nVDash: "\u22AF",
    nVdash: "\u22AE",
    nabla: "\u2207",
    nacute: "\u0144",
    nang: "\u2220\u20D2",
    nap: "\u2249",
    napE: "\u2A70\u0338",
    napid: "\u224B\u0338",
    napos: "\u0149",
    napprox: "\u2249",
    natur: "\u266E",
    natural: "\u266E",
    naturals: "\u2115",
    nbsp: "\xA0",
    nbump: "\u224E\u0338",
    nbumpe: "\u224F\u0338",
    ncap: "\u2A43",
    ncaron: "\u0148",
    ncedil: "\u0146",
    ncong: "\u2247",
    ncongdot: "\u2A6D\u0338",
    ncup: "\u2A42",
    ncy: "\u043D",
    ndash: "\u2013",
    ne: "\u2260",
    neArr: "\u21D7",
    nearhk: "\u2924",
    nearr: "\u2197",
    nearrow: "\u2197",
    nedot: "\u2250\u0338",
    nequiv: "\u2262",
    nesear: "\u2928",
    nesim: "\u2242\u0338",
    nexist: "\u2204",
    nexists: "\u2204",
    nfr: "\u{1D52B}",
    ngE: "\u2267\u0338",
    nge: "\u2271",
    ngeq: "\u2271",
    ngeqq: "\u2267\u0338",
    ngeqslant: "\u2A7E\u0338",
    nges: "\u2A7E\u0338",
    ngsim: "\u2275",
    ngt: "\u226F",
    ngtr: "\u226F",
    nhArr: "\u21CE",
    nharr: "\u21AE",
    nhpar: "\u2AF2",
    ni: "\u220B",
    nis: "\u22FC",
    nisd: "\u22FA",
    niv: "\u220B",
    njcy: "\u045A",
    nlArr: "\u21CD",
    nlE: "\u2266\u0338",
    nlarr: "\u219A",
    nldr: "\u2025",
    nle: "\u2270",
    nleftarrow: "\u219A",
    nleftrightarrow: "\u21AE",
    nleq: "\u2270",
    nleqq: "\u2266\u0338",
    nleqslant: "\u2A7D\u0338",
    nles: "\u2A7D\u0338",
    nless: "\u226E",
    nlsim: "\u2274",
    nlt: "\u226E",
    nltri: "\u22EA",
    nltrie: "\u22EC",
    nmid: "\u2224",
    nopf: "\u{1D55F}",
    not: "\xAC",
    notin: "\u2209",
    notinE: "\u22F9\u0338",
    notindot: "\u22F5\u0338",
    notinva: "\u2209",
    notinvb: "\u22F7",
    notinvc: "\u22F6",
    notni: "\u220C",
    notniva: "\u220C",
    notnivb: "\u22FE",
    notnivc: "\u22FD",
    npar: "\u2226",
    nparallel: "\u2226",
    nparsl: "\u2AFD\u20E5",
    npart: "\u2202\u0338",
    npolint: "\u2A14",
    npr: "\u2280",
    nprcue: "\u22E0",
    npre: "\u2AAF\u0338",
    nprec: "\u2280",
    npreceq: "\u2AAF\u0338",
    nrArr: "\u21CF",
    nrarr: "\u219B",
    nrarrc: "\u2933\u0338",
    nrarrw: "\u219D\u0338",
    nrightarrow: "\u219B",
    nrtri: "\u22EB",
    nrtrie: "\u22ED",
    nsc: "\u2281",
    nsccue: "\u22E1",
    nsce: "\u2AB0\u0338",
    nscr: "\u{1D4C3}",
    nshortmid: "\u2224",
    nshortparallel: "\u2226",
    nsim: "\u2241",
    nsime: "\u2244",
    nsimeq: "\u2244",
    nsmid: "\u2224",
    nspar: "\u2226",
    nsqsube: "\u22E2",
    nsqsupe: "\u22E3",
    nsub: "\u2284",
    nsubE: "\u2AC5\u0338",
    nsube: "\u2288",
    nsubset: "\u2282\u20D2",
    nsubseteq: "\u2288",
    nsubseteqq: "\u2AC5\u0338",
    nsucc: "\u2281",
    nsucceq: "\u2AB0\u0338",
    nsup: "\u2285",
    nsupE: "\u2AC6\u0338",
    nsupe: "\u2289",
    nsupset: "\u2283\u20D2",
    nsupseteq: "\u2289",
    nsupseteqq: "\u2AC6\u0338",
    ntgl: "\u2279",
    ntilde: "\xF1",
    ntlg: "\u2278",
    ntriangleleft: "\u22EA",
    ntrianglelefteq: "\u22EC",
    ntriangleright: "\u22EB",
    ntrianglerighteq: "\u22ED",
    nu: "\u03BD",
    num: "#",
    numero: "\u2116",
    numsp: "\u2007",
    nvDash: "\u22AD",
    nvHarr: "\u2904",
    nvap: "\u224D\u20D2",
    nvdash: "\u22AC",
    nvge: "\u2265\u20D2",
    nvgt: ">\u20D2",
    nvinfin: "\u29DE",
    nvlArr: "\u2902",
    nvle: "\u2264\u20D2",
    nvlt: "<\u20D2",
    nvltrie: "\u22B4\u20D2",
    nvrArr: "\u2903",
    nvrtrie: "\u22B5\u20D2",
    nvsim: "\u223C\u20D2",
    nwArr: "\u21D6",
    nwarhk: "\u2923",
    nwarr: "\u2196",
    nwarrow: "\u2196",
    nwnear: "\u2927",
    oS: "\u24C8",
    oacute: "\xF3",
    oast: "\u229B",
    ocir: "\u229A",
    ocirc: "\xF4",
    ocy: "\u043E",
    odash: "\u229D",
    odblac: "\u0151",
    odiv: "\u2A38",
    odot: "\u2299",
    odsold: "\u29BC",
    oelig: "\u0153",
    ofcir: "\u29BF",
    ofr: "\u{1D52C}",
    ogon: "\u02DB",
    ograve: "\xF2",
    ogt: "\u29C1",
    ohbar: "\u29B5",
    ohm: "\u03A9",
    oint: "\u222E",
    olarr: "\u21BA",
    olcir: "\u29BE",
    olcross: "\u29BB",
    oline: "\u203E",
    olt: "\u29C0",
    omacr: "\u014D",
    omega: "\u03C9",
    omicron: "\u03BF",
    omid: "\u29B6",
    ominus: "\u2296",
    oopf: "\u{1D560}",
    opar: "\u29B7",
    operp: "\u29B9",
    oplus: "\u2295",
    or: "\u2228",
    orarr: "\u21BB",
    ord: "\u2A5D",
    order: "\u2134",
    orderof: "\u2134",
    ordf: "\xAA",
    ordm: "\xBA",
    origof: "\u22B6",
    oror: "\u2A56",
    orslope: "\u2A57",
    orv: "\u2A5B",
    oscr: "\u2134",
    oslash: "\xF8",
    osol: "\u2298",
    otilde: "\xF5",
    otimes: "\u2297",
    otimesas: "\u2A36",
    ouml: "\xF6",
    ovbar: "\u233D",
    par: "\u2225",
    para: "\xB6",
    parallel: "\u2225",
    parsim: "\u2AF3",
    parsl: "\u2AFD",
    part: "\u2202",
    pcy: "\u043F",
    percnt: "%",
    period: ".",
    permil: "\u2030",
    perp: "\u22A5",
    pertenk: "\u2031",
    pfr: "\u{1D52D}",
    phi: "\u03C6",
    phiv: "\u03D5",
    phmmat: "\u2133",
    phone: "\u260E",
    pi: "\u03C0",
    pitchfork: "\u22D4",
    piv: "\u03D6",
    planck: "\u210F",
    planckh: "\u210E",
    plankv: "\u210F",
    plus: "+",
    plusacir: "\u2A23",
    plusb: "\u229E",
    pluscir: "\u2A22",
    plusdo: "\u2214",
    plusdu: "\u2A25",
    pluse: "\u2A72",
    plusmn: "\xB1",
    plussim: "\u2A26",
    plustwo: "\u2A27",
    pm: "\xB1",
    pointint: "\u2A15",
    popf: "\u{1D561}",
    pound: "\xA3",
    pr: "\u227A",
    prE: "\u2AB3",
    prap: "\u2AB7",
    prcue: "\u227C",
    pre: "\u2AAF",
    prec: "\u227A",
    precapprox: "\u2AB7",
    preccurlyeq: "\u227C",
    preceq: "\u2AAF",
    precnapprox: "\u2AB9",
    precneqq: "\u2AB5",
    precnsim: "\u22E8",
    precsim: "\u227E",
    prime: "\u2032",
    primes: "\u2119",
    prnE: "\u2AB5",
    prnap: "\u2AB9",
    prnsim: "\u22E8",
    prod: "\u220F",
    profalar: "\u232E",
    profline: "\u2312",
    profsurf: "\u2313",
    prop: "\u221D",
    propto: "\u221D",
    prsim: "\u227E",
    prurel: "\u22B0",
    pscr: "\u{1D4C5}",
    psi: "\u03C8",
    puncsp: "\u2008",
    qfr: "\u{1D52E}",
    qint: "\u2A0C",
    qopf: "\u{1D562}",
    qprime: "\u2057",
    qscr: "\u{1D4C6}",
    quaternions: "\u210D",
    quatint: "\u2A16",
    quest: "?",
    questeq: "\u225F",
    quot: '"',
    rAarr: "\u21DB",
    rArr: "\u21D2",
    rAtail: "\u291C",
    rBarr: "\u290F",
    rHar: "\u2964",
    race: "\u223D\u0331",
    racute: "\u0155",
    radic: "\u221A",
    raemptyv: "\u29B3",
    rang: "\u27E9",
    rangd: "\u2992",
    range: "\u29A5",
    rangle: "\u27E9",
    raquo: "\xBB",
    rarr: "\u2192",
    rarrap: "\u2975",
    rarrb: "\u21E5",
    rarrbfs: "\u2920",
    rarrc: "\u2933",
    rarrfs: "\u291E",
    rarrhk: "\u21AA",
    rarrlp: "\u21AC",
    rarrpl: "\u2945",
    rarrsim: "\u2974",
    rarrtl: "\u21A3",
    rarrw: "\u219D",
    ratail: "\u291A",
    ratio: "\u2236",
    rationals: "\u211A",
    rbarr: "\u290D",
    rbbrk: "\u2773",
    rbrace: "}",
    rbrack: "]",
    rbrke: "\u298C",
    rbrksld: "\u298E",
    rbrkslu: "\u2990",
    rcaron: "\u0159",
    rcedil: "\u0157",
    rceil: "\u2309",
    rcub: "}",
    rcy: "\u0440",
    rdca: "\u2937",
    rdldhar: "\u2969",
    rdquo: "\u201D",
    rdquor: "\u201D",
    rdsh: "\u21B3",
    real: "\u211C",
    realine: "\u211B",
    realpart: "\u211C",
    reals: "\u211D",
    rect: "\u25AD",
    reg: "\xAE",
    rfisht: "\u297D",
    rfloor: "\u230B",
    rfr: "\u{1D52F}",
    rhard: "\u21C1",
    rharu: "\u21C0",
    rharul: "\u296C",
    rho: "\u03C1",
    rhov: "\u03F1",
    rightarrow: "\u2192",
    rightarrowtail: "\u21A3",
    rightharpoondown: "\u21C1",
    rightharpoonup: "\u21C0",
    rightleftarrows: "\u21C4",
    rightleftharpoons: "\u21CC",
    rightrightarrows: "\u21C9",
    rightsquigarrow: "\u219D",
    rightthreetimes: "\u22CC",
    ring: "\u02DA",
    risingdotseq: "\u2253",
    rlarr: "\u21C4",
    rlhar: "\u21CC",
    rlm: "\u200F",
    rmoust: "\u23B1",
    rmoustache: "\u23B1",
    rnmid: "\u2AEE",
    roang: "\u27ED",
    roarr: "\u21FE",
    robrk: "\u27E7",
    ropar: "\u2986",
    ropf: "\u{1D563}",
    roplus: "\u2A2E",
    rotimes: "\u2A35",
    rpar: ")",
    rpargt: "\u2994",
    rppolint: "\u2A12",
    rrarr: "\u21C9",
    rsaquo: "\u203A",
    rscr: "\u{1D4C7}",
    rsh: "\u21B1",
    rsqb: "]",
    rsquo: "\u2019",
    rsquor: "\u2019",
    rthree: "\u22CC",
    rtimes: "\u22CA",
    rtri: "\u25B9",
    rtrie: "\u22B5",
    rtrif: "\u25B8",
    rtriltri: "\u29CE",
    ruluhar: "\u2968",
    rx: "\u211E",
    sacute: "\u015B",
    sbquo: "\u201A",
    sc: "\u227B",
    scE: "\u2AB4",
    scap: "\u2AB8",
    scaron: "\u0161",
    sccue: "\u227D",
    sce: "\u2AB0",
    scedil: "\u015F",
    scirc: "\u015D",
    scnE: "\u2AB6",
    scnap: "\u2ABA",
    scnsim: "\u22E9",
    scpolint: "\u2A13",
    scsim: "\u227F",
    scy: "\u0441",
    sdot: "\u22C5",
    sdotb: "\u22A1",
    sdote: "\u2A66",
    seArr: "\u21D8",
    searhk: "\u2925",
    searr: "\u2198",
    searrow: "\u2198",
    sect: "\xA7",
    semi: ";",
    seswar: "\u2929",
    setminus: "\u2216",
    setmn: "\u2216",
    sext: "\u2736",
    sfr: "\u{1D530}",
    sfrown: "\u2322",
    sharp: "\u266F",
    shchcy: "\u0449",
    shcy: "\u0448",
    shortmid: "\u2223",
    shortparallel: "\u2225",
    shy: "\xAD",
    sigma: "\u03C3",
    sigmaf: "\u03C2",
    sigmav: "\u03C2",
    sim: "\u223C",
    simdot: "\u2A6A",
    sime: "\u2243",
    simeq: "\u2243",
    simg: "\u2A9E",
    simgE: "\u2AA0",
    siml: "\u2A9D",
    simlE: "\u2A9F",
    simne: "\u2246",
    simplus: "\u2A24",
    simrarr: "\u2972",
    slarr: "\u2190",
    smallsetminus: "\u2216",
    smashp: "\u2A33",
    smeparsl: "\u29E4",
    smid: "\u2223",
    smile: "\u2323",
    smt: "\u2AAA",
    smte: "\u2AAC",
    smtes: "\u2AAC\uFE00",
    softcy: "\u044C",
    sol: "/",
    solb: "\u29C4",
    solbar: "\u233F",
    sopf: "\u{1D564}",
    spades: "\u2660",
    spadesuit: "\u2660",
    spar: "\u2225",
    sqcap: "\u2293",
    sqcaps: "\u2293\uFE00",
    sqcup: "\u2294",
    sqcups: "\u2294\uFE00",
    sqsub: "\u228F",
    sqsube: "\u2291",
    sqsubset: "\u228F",
    sqsubseteq: "\u2291",
    sqsup: "\u2290",
    sqsupe: "\u2292",
    sqsupset: "\u2290",
    sqsupseteq: "\u2292",
    squ: "\u25A1",
    square: "\u25A1",
    squarf: "\u25AA",
    squf: "\u25AA",
    srarr: "\u2192",
    sscr: "\u{1D4C8}",
    ssetmn: "\u2216",
    ssmile: "\u2323",
    sstarf: "\u22C6",
    star: "\u2606",
    starf: "\u2605",
    straightepsilon: "\u03F5",
    straightphi: "\u03D5",
    strns: "\xAF",
    sub: "\u2282",
    subE: "\u2AC5",
    subdot: "\u2ABD",
    sube: "\u2286",
    subedot: "\u2AC3",
    submult: "\u2AC1",
    subnE: "\u2ACB",
    subne: "\u228A",
    subplus: "\u2ABF",
    subrarr: "\u2979",
    subset: "\u2282",
    subseteq: "\u2286",
    subseteqq: "\u2AC5",
    subsetneq: "\u228A",
    subsetneqq: "\u2ACB",
    subsim: "\u2AC7",
    subsub: "\u2AD5",
    subsup: "\u2AD3",
    succ: "\u227B",
    succapprox: "\u2AB8",
    succcurlyeq: "\u227D",
    succeq: "\u2AB0",
    succnapprox: "\u2ABA",
    succneqq: "\u2AB6",
    succnsim: "\u22E9",
    succsim: "\u227F",
    sum: "\u2211",
    sung: "\u266A",
    sup1: "\xB9",
    sup2: "\xB2",
    sup3: "\xB3",
    sup: "\u2283",
    supE: "\u2AC6",
    supdot: "\u2ABE",
    supdsub: "\u2AD8",
    supe: "\u2287",
    supedot: "\u2AC4",
    suphsol: "\u27C9",
    suphsub: "\u2AD7",
    suplarr: "\u297B",
    supmult: "\u2AC2",
    supnE: "\u2ACC",
    supne: "\u228B",
    supplus: "\u2AC0",
    supset: "\u2283",
    supseteq: "\u2287",
    supseteqq: "\u2AC6",
    supsetneq: "\u228B",
    supsetneqq: "\u2ACC",
    supsim: "\u2AC8",
    supsub: "\u2AD4",
    supsup: "\u2AD6",
    swArr: "\u21D9",
    swarhk: "\u2926",
    swarr: "\u2199",
    swarrow: "\u2199",
    swnwar: "\u292A",
    szlig: "\xDF",
    target: "\u2316",
    tau: "\u03C4",
    tbrk: "\u23B4",
    tcaron: "\u0165",
    tcedil: "\u0163",
    tcy: "\u0442",
    tdot: "\u20DB",
    telrec: "\u2315",
    tfr: "\u{1D531}",
    there4: "\u2234",
    therefore: "\u2234",
    theta: "\u03B8",
    thetasym: "\u03D1",
    thetav: "\u03D1",
    thickapprox: "\u2248",
    thicksim: "\u223C",
    thinsp: "\u2009",
    thkap: "\u2248",
    thksim: "\u223C",
    thorn: "\xFE",
    tilde: "\u02DC",
    times: "\xD7",
    timesb: "\u22A0",
    timesbar: "\u2A31",
    timesd: "\u2A30",
    tint: "\u222D",
    toea: "\u2928",
    top: "\u22A4",
    topbot: "\u2336",
    topcir: "\u2AF1",
    topf: "\u{1D565}",
    topfork: "\u2ADA",
    tosa: "\u2929",
    tprime: "\u2034",
    trade: "\u2122",
    triangle: "\u25B5",
    triangledown: "\u25BF",
    triangleleft: "\u25C3",
    trianglelefteq: "\u22B4",
    triangleq: "\u225C",
    triangleright: "\u25B9",
    trianglerighteq: "\u22B5",
    tridot: "\u25EC",
    trie: "\u225C",
    triminus: "\u2A3A",
    triplus: "\u2A39",
    trisb: "\u29CD",
    tritime: "\u2A3B",
    trpezium: "\u23E2",
    tscr: "\u{1D4C9}",
    tscy: "\u0446",
    tshcy: "\u045B",
    tstrok: "\u0167",
    twixt: "\u226C",
    twoheadleftarrow: "\u219E",
    twoheadrightarrow: "\u21A0",
    uArr: "\u21D1",
    uHar: "\u2963",
    uacute: "\xFA",
    uarr: "\u2191",
    ubrcy: "\u045E",
    ubreve: "\u016D",
    ucirc: "\xFB",
    ucy: "\u0443",
    udarr: "\u21C5",
    udblac: "\u0171",
    udhar: "\u296E",
    ufisht: "\u297E",
    ufr: "\u{1D532}",
    ugrave: "\xF9",
    uharl: "\u21BF",
    uharr: "\u21BE",
    uhblk: "\u2580",
    ulcorn: "\u231C",
    ulcorner: "\u231C",
    ulcrop: "\u230F",
    ultri: "\u25F8",
    umacr: "\u016B",
    uml: "\xA8",
    uogon: "\u0173",
    uopf: "\u{1D566}",
    uparrow: "\u2191",
    updownarrow: "\u2195",
    upharpoonleft: "\u21BF",
    upharpoonright: "\u21BE",
    uplus: "\u228E",
    upsi: "\u03C5",
    upsih: "\u03D2",
    upsilon: "\u03C5",
    upuparrows: "\u21C8",
    urcorn: "\u231D",
    urcorner: "\u231D",
    urcrop: "\u230E",
    uring: "\u016F",
    urtri: "\u25F9",
    uscr: "\u{1D4CA}",
    utdot: "\u22F0",
    utilde: "\u0169",
    utri: "\u25B5",
    utrif: "\u25B4",
    uuarr: "\u21C8",
    uuml: "\xFC",
    uwangle: "\u29A7",
    vArr: "\u21D5",
    vBar: "\u2AE8",
    vBarv: "\u2AE9",
    vDash: "\u22A8",
    vangrt: "\u299C",
    varepsilon: "\u03F5",
    varkappa: "\u03F0",
    varnothing: "\u2205",
    varphi: "\u03D5",
    varpi: "\u03D6",
    varpropto: "\u221D",
    varr: "\u2195",
    varrho: "\u03F1",
    varsigma: "\u03C2",
    varsubsetneq: "\u228A\uFE00",
    varsubsetneqq: "\u2ACB\uFE00",
    varsupsetneq: "\u228B\uFE00",
    varsupsetneqq: "\u2ACC\uFE00",
    vartheta: "\u03D1",
    vartriangleleft: "\u22B2",
    vartriangleright: "\u22B3",
    vcy: "\u0432",
    vdash: "\u22A2",
    vee: "\u2228",
    veebar: "\u22BB",
    veeeq: "\u225A",
    vellip: "\u22EE",
    verbar: "|",
    vert: "|",
    vfr: "\u{1D533}",
    vltri: "\u22B2",
    vnsub: "\u2282\u20D2",
    vnsup: "\u2283\u20D2",
    vopf: "\u{1D567}",
    vprop: "\u221D",
    vrtri: "\u22B3",
    vscr: "\u{1D4CB}",
    vsubnE: "\u2ACB\uFE00",
    vsubne: "\u228A\uFE00",
    vsupnE: "\u2ACC\uFE00",
    vsupne: "\u228B\uFE00",
    vzigzag: "\u299A",
    wcirc: "\u0175",
    wedbar: "\u2A5F",
    wedge: "\u2227",
    wedgeq: "\u2259",
    weierp: "\u2118",
    wfr: "\u{1D534}",
    wopf: "\u{1D568}",
    wp: "\u2118",
    wr: "\u2240",
    wreath: "\u2240",
    wscr: "\u{1D4CC}",
    xcap: "\u22C2",
    xcirc: "\u25EF",
    xcup: "\u22C3",
    xdtri: "\u25BD",
    xfr: "\u{1D535}",
    xhArr: "\u27FA",
    xharr: "\u27F7",
    xi: "\u03BE",
    xlArr: "\u27F8",
    xlarr: "\u27F5",
    xmap: "\u27FC",
    xnis: "\u22FB",
    xodot: "\u2A00",
    xopf: "\u{1D569}",
    xoplus: "\u2A01",
    xotime: "\u2A02",
    xrArr: "\u27F9",
    xrarr: "\u27F6",
    xscr: "\u{1D4CD}",
    xsqcup: "\u2A06",
    xuplus: "\u2A04",
    xutri: "\u25B3",
    xvee: "\u22C1",
    xwedge: "\u22C0",
    yacute: "\xFD",
    yacy: "\u044F",
    ycirc: "\u0177",
    ycy: "\u044B",
    yen: "\xA5",
    yfr: "\u{1D536}",
    yicy: "\u0457",
    yopf: "\u{1D56A}",
    yscr: "\u{1D4CE}",
    yucy: "\u044E",
    yuml: "\xFF",
    zacute: "\u017A",
    zcaron: "\u017E",
    zcy: "\u0437",
    zdot: "\u017C",
    zeetrf: "\u2128",
    zeta: "\u03B6",
    zfr: "\u{1D537}",
    zhcy: "\u0436",
    zigrarr: "\u21DD",
    zopf: "\u{1D56B}",
    zscr: "\u{1D4CF}",
    zwj: "\u200D",
    zwnj: "\u200C"
};
var t = {}.hasOwnProperty;
function n1(e) {
    return t.call(r1, e) ? r1[e] : !1;
}
function I(l) {
    let c = {}, e = -1, p, r, n, o, f, s, u;
    for(; ++e < l.length;){
        for(; (e in c);)e = c[e];
        if (p = l[e], e && p[1].type === "chunkFlow" && l[e - 1][1].type === "listItemPrefix" && (s = p[1]._tokenizer.events, n = 0, n < s.length && s[n][1].type === "lineEndingBlank" && (n += 2), n < s.length && s[n][1].type === "content")) for(; ++n < s.length && s[n][1].type !== "content";)s[n][1].type === "chunkText" && (s[n][1]._isInFirstContentOfListItem = !0, n++);
        if (p[0] === "enter") p[1].contentType && (Object.assign(c, _(l, e)), e = c[e], u = !0);
        else if (p[1]._container) {
            for(n = e, r = void 0; (n--) && (o = l[n], o[1].type === "lineEnding" || o[1].type === "lineEndingBlank");)o[0] === "enter" && (r && (l[r][1].type = "lineEndingBlank"), o[1].type = "lineEnding", r = n);
            r && (p[1].end = Object.assign({}, l[r][1].start), f = l.slice(r, e), f.unshift(p), u1(l, r, e - r + 1, f));
        }
    }
    return !u;
}
function _(l, c) {
    let e = l[c][1], p = l[c][2], r = c - 1, n = [], o = e._tokenizer || p.parser[e.contentType](e.start), f = o.events, s = [], u = {}, a, m, i = -1, t = e, d = 0, k = 0, h = [
        k
    ];
    for(; t;){
        for(; l[++r][1] !== t;);
        n.push(r), t._tokenizer || (a = p.sliceStream(t), t.next || a.push(null), m && o.defineSkip(t.start), t._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(a), t._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), m = t, t = t.next;
    }
    for(t = e; ++i < f.length;)f[i][0] === "exit" && f[i - 1][0] === "enter" && f[i][1].type === f[i - 1][1].type && f[i][1].start.line !== f[i][1].end.line && (k = i + 1, h.push(k), t._tokenizer = void 0, t.previous = void 0, t = t.next);
    for(o.events = [], t ? (t._tokenizer = void 0, t.previous = void 0) : h.pop(), i = h.length; i--;){
        let y = f.slice(h[i], h[i + 1]), g = n.pop();
        s.unshift([
            g,
            g + y.length - 1
        ]), u1(l, g, 2, y);
    }
    for(i = -1; ++i < s.length;)u[d + s[i][0]] = d + s[i][1], d += s[i][1] - s[i][0] - 1;
    return u;
}
function D1(i, E, u, t, h, m, S, x, N) {
    let b = N || Number.POSITIVE_INFINITY, g = 0;
    return w;
    function w(n) {
        return n === 60 ? (i.enter(t), i.enter(h), i.enter(m), i.consume(n), i.exit(m), l) : n === null || n === 41 || B(n) ? u(n) : (i.enter(t), i.enter(S), i.enter(x), i.enter("chunkString", {
            contentType: "string"
        }), r(n));
    }
    function l(n) {
        return n === 62 ? (i.enter(m), i.consume(n), i.exit(m), i.exit(h), i.exit(t), E) : (i.enter(x), i.enter("chunkString", {
            contentType: "string"
        }), a(n));
    }
    function a(n) {
        return n === 62 ? (i.exit("chunkString"), i.exit(x), l(n)) : n === null || n === 60 || p(n) ? u(n) : (i.consume(n), n === 92 ? L : a);
    }
    function L(n) {
        return n === 60 || n === 62 || n === 92 ? (i.consume(n), a) : a(n);
    }
    function r(n) {
        return n === 40 ? ++g > b ? u(n) : (i.consume(n), r) : n === 41 ? g-- ? (i.consume(n), r) : (i.exit("chunkString"), i.exit(x), i.exit(S), i.exit(t), E(n)) : n === null || a2(n) ? g ? u(n) : (i.exit("chunkString"), i.exit(x), i.exit(S), i.exit(t), E(n)) : B(n) ? u(n) : (i.consume(n), n === 92 ? O : r);
    }
    function O(n) {
        return n === 40 || n === 41 || n === 92 ? (i.consume(n), r) : r(n);
    }
}
function w(r, h, E, x, t, m) {
    let S = this, i = 0, l;
    return b;
    function b(n) {
        return r.enter(x), r.enter(t), r.consume(n), r.exit(t), r.enter(m), a;
    }
    function a(n) {
        return n === null || n === 91 || n === 93 && !l || n === 94 && !i && "_hiddenFootnoteSupport" in S.parser.constructs || i > 999 ? E(n) : n === 93 ? (r.exit(m), r.enter(t), r.consume(n), r.exit(t), r.exit(x), h) : p(n) ? (r.enter("lineEnding"), r.consume(n), r.exit("lineEnding"), a) : (r.enter("chunkString", {
            contentType: "string"
        }), u(n));
    }
    function u(n) {
        return n === null || n === 91 || n === 93 || p(n) || i++ > 999 ? (r.exit("chunkString"), a(n)) : (r.consume(n), l = l || !s(n), n === 92 ? o : u);
    }
    function o(n) {
        return n === 91 || n === 92 || n === 93 ? (r.consume(n), i++, u) : u(n);
    }
}
function w1(r, E, k, a, t, m) {
    let i;
    return o;
    function o(n) {
        return r.enter(a), r.enter(t), r.consume(n), r.exit(t), i = n === 40 ? 41 : n, x;
    }
    function x(n) {
        return n === i ? (r.enter(t), r.consume(n), r.exit(t), r.exit(a), E) : (r.enter(m), l(n));
    }
    function l(n) {
        return n === i ? (r.exit(m), x(i)) : n === null ? k(n) : p(n) ? (r.enter("lineEnding"), r.consume(n), r.exit("lineEnding"), p1(r, l, "linePrefix")) : (r.enter("chunkString", {
            contentType: "string"
        }), u(n));
    }
    function u(n) {
        return n === i || n === null || p(n) ? (r.exit("chunkString"), l(n)) : (r.consume(n), n === 92 ? S : u);
    }
    function S(n) {
        return n === i || n === 92 ? (r.consume(n), u) : u(n);
    }
}
function f(r, e) {
    let t;
    return i;
    function i(n) {
        return p(n) ? (r.enter("lineEnding"), r.consume(n), r.exit("lineEnding"), t = !0, i) : s(n) ? p1(r, i, t ? "linePrefix" : "lineSuffix")(n) : e(n);
    }
}
function r2(e) {
    return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
var e1 = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
], t1 = [
    "pre",
    "script",
    "style",
    "textarea"
];
var On = {
    name: "attention",
    tokenize: Bn,
    resolveAll: Pn
};
function Pn(n, u) {
    let r = -1, t, l, o, a, m, p, x, s;
    for(; ++r < n.length;)if (n[r][0] === "enter" && n[r][1].type === "attentionSequence" && n[r][1]._close) {
        for(t = r; t--;)if (n[t][0] === "exit" && n[t][1].type === "attentionSequence" && n[t][1]._open && u.sliceSerialize(n[t][1]).charCodeAt(0) === u.sliceSerialize(n[r][1]).charCodeAt(0)) {
            if ((n[t][1]._close || n[r][1]._open) && (n[r][1].end.offset - n[r][1].start.offset) % 3 && !((n[t][1].end.offset - n[t][1].start.offset + n[r][1].end.offset - n[r][1].start.offset) % 3)) continue;
            p = n[t][1].end.offset - n[t][1].start.offset > 1 && n[r][1].end.offset - n[r][1].start.offset > 1 ? 2 : 1;
            let S = Object.assign({}, n[t][1].end), g1 = Object.assign({}, n[r][1].start);
            mn(S, -p), mn(g1, p), a = {
                type: p > 1 ? "strongSequence" : "emphasisSequence",
                start: S,
                end: Object.assign({}, n[t][1].end)
            }, m = {
                type: p > 1 ? "strongSequence" : "emphasisSequence",
                start: Object.assign({}, n[r][1].start),
                end: g1
            }, o = {
                type: p > 1 ? "strongText" : "emphasisText",
                start: Object.assign({}, n[t][1].end),
                end: Object.assign({}, n[r][1].start)
            }, l = {
                type: p > 1 ? "strong" : "emphasis",
                start: Object.assign({}, a.start),
                end: Object.assign({}, m.end)
            }, n[t][1].end = Object.assign({}, a.start), n[r][1].start = Object.assign({}, m.end), x = [], n[t][1].end.offset - n[t][1].start.offset && (x = g(x, [
                [
                    "enter",
                    n[t][1],
                    u
                ],
                [
                    "exit",
                    n[t][1],
                    u
                ]
            ])), x = g(x, [
                [
                    "enter",
                    l,
                    u
                ],
                [
                    "enter",
                    a,
                    u
                ],
                [
                    "exit",
                    a,
                    u
                ],
                [
                    "enter",
                    o,
                    u
                ]
            ]), x = g(x, c1(u.parser.constructs.insideSpan.null, n.slice(t + 1, r), u)), x = g(x, [
                [
                    "exit",
                    o,
                    u
                ],
                [
                    "enter",
                    m,
                    u
                ],
                [
                    "exit",
                    m,
                    u
                ],
                [
                    "exit",
                    l,
                    u
                ]
            ]), n[r][1].end.offset - n[r][1].start.offset ? (s = 2, x = g(x, [
                [
                    "enter",
                    n[r][1],
                    u
                ],
                [
                    "exit",
                    n[r][1],
                    u
                ]
            ])) : s = 0, u1(n, t - 1, r - t + 3, x), r = t + x.length - s - 2;
            break;
        }
    }
    for(r = -1; ++r < n.length;)n[r][1].type === "attentionSequence" && (n[r][1].type = "data");
    return n;
}
function Bn(n, u) {
    let r = this.parser.constructs.attentionMarkers.null, t = this.previous, l = a3(t), o;
    return a;
    function a(p) {
        return n.enter("attentionSequence"), o = p, m(p);
    }
    function m(p) {
        if (p === o) return n.consume(p), m;
        let x = n.exit("attentionSequence"), s = a3(p), S = !s || s === 2 && l || r.includes(p), g = !l || l === 2 && s || r.includes(t);
        return x._open = Boolean(o === 42 ? S : S && (l || !g)), x._close = Boolean(o === 42 ? g : g && (s || !S)), u(p);
    }
}
function mn(n, u) {
    n.column += u, n.offset += u, n._bufferIndex += u;
}
var Rn = {
    name: "autolink",
    tokenize: Hn
};
function Hn(n, u, r) {
    let t = 1;
    return l;
    function l(h) {
        return n.enter("autolink"), n.enter("autolinkMarker"), n.consume(h), n.exit("autolinkMarker"), n.enter("autolinkProtocol"), o1;
    }
    function o1(h) {
        return o(h) ? (n.consume(h), a) : c(h) ? x(h) : r(h);
    }
    function a(h) {
        return h === 43 || h === 45 || h === 46 || C(h) ? m(h) : x(h);
    }
    function m(h) {
        return h === 58 ? (n.consume(h), p) : (h === 43 || h === 45 || h === 46 || C(h)) && t++ < 32 ? (n.consume(h), m) : x(h);
    }
    function p(h) {
        return h === 62 ? (n.exit("autolinkProtocol"), c1(h)) : h === null || h === 32 || h === 60 || B(h) ? r(h) : (n.consume(h), p);
    }
    function x(h) {
        return h === 64 ? (n.consume(h), t = 0, s) : c(h) ? (n.consume(h), x) : r(h);
    }
    function s(h) {
        return C(h) ? S(h) : r(h);
    }
    function S(h) {
        return h === 46 ? (n.consume(h), t = 0, s) : h === 62 ? (n.exit("autolinkProtocol").type = "autolinkEmail", c1(h)) : g(h);
    }
    function g(h) {
        return (h === 45 || C(h)) && t++ < 63 ? (n.consume(h), h === 45 ? g : S) : r(h);
    }
    function c1(h) {
        return n.enter("autolinkMarker"), n.consume(h), n.exit("autolinkMarker"), n.exit("autolink"), u;
    }
}
var R = {
    tokenize: _n,
    partial: !0
};
function _n(n, u, r) {
    return p1(n, t, "linePrefix");
    function t(l) {
        return l === null || p(l) ? u(l) : r(l);
    }
}
var sn = {
    name: "blockQuote",
    tokenize: Wn,
    continuation: {
        tokenize: Un
    },
    exit: Gn
};
function Wn(n, u, r) {
    let t = this;
    return l;
    function l(a) {
        if (a === 62) {
            let m = t.containerState;
            return m.open || (n.enter("blockQuote", {
                _container: !0
            }), m.open = !0), n.enter("blockQuotePrefix"), n.enter("blockQuoteMarker"), n.consume(a), n.exit("blockQuoteMarker"), o;
        }
        return r(a);
    }
    function o(a) {
        return s(a) ? (n.enter("blockQuotePrefixWhitespace"), n.consume(a), n.exit("blockQuotePrefixWhitespace"), n.exit("blockQuotePrefix"), u) : (n.exit("blockQuotePrefix"), u(a));
    }
}
function Un(n, u, r) {
    return p1(n, n.attempt(sn, u, r), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Gn(n) {
    n.exit("blockQuote");
}
var Kn = {
    name: "characterEscape",
    tokenize: Xn
};
function Xn(n, u, r) {
    return t;
    function t(o) {
        return n.enter("characterEscape"), n.enter("escapeMarker"), n.consume(o), n.exit("escapeMarker"), l;
    }
    function l(o) {
        return e(o) ? (n.enter("characterEscapeValue"), n.consume(o), n.exit("characterEscapeValue"), n.exit("characterEscape"), u) : r(o);
    }
}
var vn = {
    name: "characterReference",
    tokenize: dn
};
function dn(n, u, r1) {
    let t = this, l = 0, o, a;
    return m;
    function m(S) {
        return n.enter("characterReference"), n.enter("characterReferenceMarker"), n.consume(S), n.exit("characterReferenceMarker"), p;
    }
    function p(S) {
        return S === 35 ? (n.enter("characterReferenceMarkerNumeric"), n.consume(S), n.exit("characterReferenceMarkerNumeric"), x) : (n.enter("characterReferenceValue"), o = 31, a = C, s(S));
    }
    function x(S) {
        return S === 88 || S === 120 ? (n.enter("characterReferenceMarkerHexadecimal"), n.consume(S), n.exit("characterReferenceMarkerHexadecimal"), n.enter("characterReferenceValue"), o = 6, a = D, s) : (n.enter("characterReferenceValue"), o = 7, a = r, s(S));
    }
    function s(S) {
        let g;
        return S === 59 && l ? (g = n.exit("characterReferenceValue"), a === C && !n1(t.sliceSerialize(g)) ? r1(S) : (n.enter("characterReferenceMarker"), n.consume(S), n.exit("characterReferenceMarker"), n.exit("characterReference"), u)) : a(S) && (l++) < o ? (n.consume(S), s) : r1(S);
    }
}
var tt = {
    name: "codeFenced",
    tokenize: rt,
    concrete: !0
};
function rt(n, u, r) {
    let t = this, l = {
        tokenize: I,
        partial: !0
    }, o = {
        tokenize: A,
        partial: !0
    }, a = this.events[this.events.length - 1], m = a && a[1].type === "linePrefix" ? a[2].sliceSerialize(a[1], !0).length : 0, p2 = 0, x;
    return s;
    function s(k) {
        return n.enter("codeFenced"), n.enter("codeFencedFence"), n.enter("codeFencedFenceSequence"), x = k, S(k);
    }
    function S(k) {
        return k === x ? (n.consume(k), p2++, S) : (n.exit("codeFencedFenceSequence"), p2 < 3 ? r(k) : p1(n, g, "whitespace")(k));
    }
    function g(k) {
        return k === null || p(k) ? q(k) : (n.enter("codeFencedFenceInfo"), n.enter("chunkString", {
            contentType: "string"
        }), c(k));
    }
    function c(k) {
        return k === null || a2(k) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), p1(n, h, "whitespace")(k)) : k === 96 && k === x ? r(k) : (n.consume(k), c);
    }
    function h(k) {
        return k === null || p(k) ? q(k) : (n.enter("codeFencedFenceMeta"), n.enter("chunkString", {
            contentType: "string"
        }), B(k));
    }
    function B(k) {
        return k === null || p(k) ? (n.exit("chunkString"), n.exit("codeFencedFenceMeta"), q(k)) : k === 96 && k === x ? r(k) : (n.consume(k), B);
    }
    function q(k) {
        return n.exit("codeFencedFence"), t.interrupt ? u(k) : z(k);
    }
    function z(k) {
        return k === null ? T(k) : p(k) ? n.attempt(o, n.attempt(l, T, m ? p1(n, z, "linePrefix", m + 1) : z), T)(k) : (n.enter("codeFlowValue"), C(k));
    }
    function C(k) {
        return k === null || p(k) ? (n.exit("codeFlowValue"), z(k)) : (n.consume(k), C);
    }
    function T(k) {
        return n.exit("codeFenced"), u(k);
    }
    function A(k, D, F) {
        let y = this;
        return M;
        function M(w) {
            return k.enter("lineEnding"), k.consume(w), k.exit("lineEnding"), b;
        }
        function b(w) {
            return y.parser.lazy[y.now().line] ? F(w) : D(w);
        }
    }
    function I(k, D, F) {
        let y = 0;
        return p1(k, M, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
        function M(f) {
            return k.enter("codeFencedFence"), k.enter("codeFencedFenceSequence"), b(f);
        }
        function b(f) {
            return f === x ? (k.consume(f), y++, b) : y < p2 ? F(f) : (k.exit("codeFencedFenceSequence"), p1(k, w, "whitespace")(f));
        }
        function w(f) {
            return f === null || p(f) ? (k.exit("codeFencedFence"), D(f)) : F(f);
        }
    }
}
var et = {
    name: "codeIndented",
    tokenize: ut
}, it = {
    tokenize: at,
    partial: !0
};
function ut(n, u, r) {
    let t = this;
    return l;
    function l(x) {
        return n.enter("codeIndented"), p1(n, o, "linePrefix", 4 + 1)(x);
    }
    function o(x) {
        let s = t.events[t.events.length - 1];
        return s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? a(x) : r(x);
    }
    function a(x) {
        return x === null ? p2(x) : p(x) ? n.attempt(it, a, p2)(x) : (n.enter("codeFlowValue"), m(x));
    }
    function m(x) {
        return x === null || p(x) ? (n.exit("codeFlowValue"), a(x)) : (n.consume(x), m);
    }
    function p2(x) {
        return n.exit("codeIndented"), u(x);
    }
}
function at(n, u, r) {
    let t = this;
    return l;
    function l(a) {
        return t.parser.lazy[t.now().line] ? r(a) : p(a) ? (n.enter("lineEnding"), n.consume(a), n.exit("lineEnding"), l) : p1(n, o, "linePrefix", 4 + 1)(a);
    }
    function o(a) {
        let m = t.events[t.events.length - 1];
        return m && m[1].type === "linePrefix" && m[2].sliceSerialize(m[1], !0).length >= 4 ? u(a) : p(a) ? l(a) : r(a);
    }
}
var lt = {
    name: "codeText",
    tokenize: pt,
    resolve: ot,
    previous: mt
};
function ot(n) {
    let u = n.length - 4, r = 3, t, l;
    if ((n[r][1].type === "lineEnding" || n[r][1].type === "space") && (n[u][1].type === "lineEnding" || n[u][1].type === "space")) {
        for(t = r; ++t < u;)if (n[t][1].type === "codeTextData") {
            n[r][1].type = "codeTextPadding", n[u][1].type = "codeTextPadding", r += 2, u -= 2;
            break;
        }
    }
    for(t = r - 1, u++; ++t <= u;)l === void 0 ? t !== u && n[t][1].type !== "lineEnding" && (l = t) : (t === u || n[t][1].type === "lineEnding") && (n[l][1].type = "codeTextData", t !== l + 2 && (n[l][1].end = n[t - 1][1].end, n.splice(l + 2, t - l - 2), u -= t - l - 2, t = l + 2), l = void 0);
    return n;
}
function mt(n) {
    return n !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function pt(n, u, r) {
    let l = 0, o, a;
    return m;
    function m(g) {
        return n.enter("codeText"), n.enter("codeTextSequence"), p1(g);
    }
    function p1(g) {
        return g === 96 ? (n.consume(g), l++, p1) : (n.exit("codeTextSequence"), x(g));
    }
    function x(g) {
        return g === null ? r(g) : g === 96 ? (a = n.enter("codeTextSequence"), o = 0, S(g)) : g === 32 ? (n.enter("space"), n.consume(g), n.exit("space"), x) : p(g) ? (n.enter("lineEnding"), n.consume(g), n.exit("lineEnding"), x) : (n.enter("codeTextData"), s(g));
    }
    function s(g) {
        return g === null || g === 32 || g === 96 || p(g) ? (n.exit("codeTextData"), x(g)) : (n.consume(g), s);
    }
    function S(g) {
        return g === 96 ? (n.consume(g), o++, S) : o === l ? (n.exit("codeTextSequence"), n.exit("codeText"), u(g)) : (a.type = "codeTextData", s(g));
    }
}
var ht = {
    tokenize: ct,
    resolve: gt
}, kt = {
    tokenize: St,
    partial: !0
};
function gt(n) {
    return I(n), n;
}
function ct(n, u) {
    let r;
    return t;
    function t(m) {
        return n.enter("content"), r = n.enter("chunkContent", {
            contentType: "content"
        }), l(m);
    }
    function l(m) {
        return m === null ? o(m) : p(m) ? n.check(kt, a, o)(m) : (n.consume(m), l);
    }
    function o(m) {
        return n.exit("chunkContent"), n.exit("content"), u(m);
    }
    function a(m) {
        return n.consume(m), n.exit("chunkContent"), r.next = n.enter("chunkContent", {
            contentType: "content",
            previous: r
        }), r = r.next, l;
    }
}
function St(n, u, r) {
    let t = this;
    return l;
    function l(a) {
        return n.exit("chunkContent"), n.enter("lineEnding"), n.consume(a), n.exit("lineEnding"), p1(n, o, "linePrefix");
    }
    function o(a) {
        if (a === null || p(a)) return r(a);
        let m = t.events[t.events.length - 1];
        return !t.parser.constructs.disable.null.includes("codeIndented") && m && m[1].type === "linePrefix" && m[2].sliceSerialize(m[1], !0).length >= 4 ? u(a) : n.interrupt(t.parser.constructs.flow, r, u)(a);
    }
}
var wt = {
    name: "definition",
    tokenize: Ct
}, Lt = {
    tokenize: Tt,
    partial: !0
};
function Ct(n, u, r) {
    let t = this, l;
    return o;
    function o(p) {
        return n.enter("definition"), w.call(t, n, a, r, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(p);
    }
    function a(p) {
        return l = r2(t.sliceSerialize(t.events[t.events.length - 1][1]).slice(1, -1)), p === 58 ? (n.enter("definitionMarker"), n.consume(p), n.exit("definitionMarker"), f(n, D1(n, n.attempt(Lt, p1(n, m, "whitespace"), p1(n, m, "whitespace")), r, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : r(p);
    }
    function m(p1) {
        return p1 === null || p(p1) ? (n.exit("definition"), t.parser.defined.includes(l) || t.parser.defined.push(l), u(p1)) : r(p1);
    }
}
function Tt(n, u, r) {
    return t;
    function t(a) {
        return a2(a) ? f(n, l)(a) : r(a);
    }
    function l(a) {
        return a === 34 || a === 39 || a === 40 ? w1(n, p1(n, o, "whitespace"), r, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a) : r(a);
    }
    function o(a) {
        return a === null || p(a) ? u(a) : r(a);
    }
}
var It = {
    name: "hardBreakEscape",
    tokenize: Ft
};
function Ft(n, u, r) {
    return t;
    function t(o) {
        return n.enter("hardBreakEscape"), n.enter("escapeMarker"), n.consume(o), l;
    }
    function l(o) {
        return p(o) ? (n.exit("escapeMarker"), n.exit("hardBreakEscape"), u(o)) : r(o);
    }
}
var qt = {
    name: "headingAtx",
    tokenize: Rt,
    resolve: Dt
};
function Dt(n, u) {
    let r = n.length - 2, t = 3, l, o;
    return n[t][1].type === "whitespace" && (t += 2), r - 2 > t && n[r][1].type === "whitespace" && (r -= 2), n[r][1].type === "atxHeadingSequence" && (t === r - 1 || r - 4 > t && n[r - 2][1].type === "whitespace") && (r -= t + 1 === r ? 2 : 4), r > t && (l = {
        type: "atxHeadingText",
        start: n[t][1].start,
        end: n[r][1].end
    }, o = {
        type: "chunkText",
        start: n[t][1].start,
        end: n[r][1].end,
        contentType: "text"
    }, u1(n, t, r - t + 1, [
        [
            "enter",
            l,
            u
        ],
        [
            "enter",
            o,
            u
        ],
        [
            "exit",
            o,
            u
        ],
        [
            "exit",
            l,
            u
        ]
    ])), n;
}
function Rt(n, u, r) {
    let t = this, l = 0;
    return o;
    function o(s) {
        return n.enter("atxHeading"), n.enter("atxHeadingSequence"), a(s);
    }
    function a(s) {
        return s === 35 && l++ < 6 ? (n.consume(s), a) : s === null || a2(s) ? (n.exit("atxHeadingSequence"), t.interrupt ? u(s) : m(s)) : r(s);
    }
    function m(s1) {
        return s1 === 35 ? (n.enter("atxHeadingSequence"), p2(s1)) : s1 === null || p(s1) ? (n.exit("atxHeading"), u(s1)) : s(s1) ? p1(n, m, "whitespace")(s1) : (n.enter("atxHeadingText"), x(s1));
    }
    function p2(s) {
        return s === 35 ? (n.consume(s), p2) : (n.exit("atxHeadingSequence"), m(s));
    }
    function x(s) {
        return s === null || s === 35 || a2(s) ? (n.exit("atxHeadingText"), m(s)) : (n.consume(s), x);
    }
}
var Vt = {
    name: "htmlFlow",
    tokenize: Qt,
    resolveTo: _t,
    concrete: !0
}, jt = {
    tokenize: Nt,
    partial: !0
};
function _t(n) {
    let u = n.length;
    for(; (u--) && !(n[u][0] === "enter" && n[u][1].type === "htmlFlow"););
    return u > 1 && n[u - 2][1].type === "linePrefix" && (n[u][1].start = n[u - 2][1].start, n[u + 1][1].start = n[u - 2][1].start, n.splice(u - 2, 2)), n;
}
function Qt(n, u, r) {
    let t = this, l, o1, a, m, p1;
    return x;
    function x(e) {
        return n.enter("htmlFlow"), n.enter("htmlFlowData"), n.consume(e), s1;
    }
    function s1(e) {
        return e === 33 ? (n.consume(e), S) : e === 47 ? (n.consume(e), h) : e === 63 ? (n.consume(e), l = 3, t.interrupt ? u : O) : o(e) ? (n.consume(e), a = String.fromCharCode(e), o1 = !0, B) : r(e);
    }
    function S(e) {
        return e === 45 ? (n.consume(e), l = 2, g) : e === 91 ? (n.consume(e), l = 5, a = "CDATA[", m = 0, c) : o(e) ? (n.consume(e), l = 4, t.interrupt ? u : O) : r(e);
    }
    function g(e) {
        return e === 45 ? (n.consume(e), t.interrupt ? u : O) : r(e);
    }
    function c(e) {
        return e === a.charCodeAt(m++) ? (n.consume(e), m === a.length ? t.interrupt ? u : b : c) : r(e);
    }
    function h(e) {
        return o(e) ? (n.consume(e), a = String.fromCharCode(e), B) : r(e);
    }
    function B(e) {
        return e === null || e === 47 || e === 62 || a2(e) ? e !== 47 && o1 && t1.includes(a.toLowerCase()) ? (l = 1, t.interrupt ? u(e) : b(e)) : e1.includes(a.toLowerCase()) ? (l = 6, e === 47 ? (n.consume(e), q) : t.interrupt ? u(e) : b(e)) : (l = 7, t.interrupt && !t.parser.lazy[t.now().line] ? r(e) : o1 ? C1(e) : z(e)) : e === 45 || C(e) ? (n.consume(e), a += String.fromCharCode(e), B) : r(e);
    }
    function q(e) {
        return e === 62 ? (n.consume(e), t.interrupt ? u : b) : r(e);
    }
    function z(e) {
        return s(e) ? (n.consume(e), z) : y(e);
    }
    function C1(e) {
        return e === 47 ? (n.consume(e), y) : e === 58 || e === 95 || o(e) ? (n.consume(e), T) : s(e) ? (n.consume(e), C1) : y(e);
    }
    function T(e) {
        return e === 45 || e === 46 || e === 58 || e === 95 || C(e) ? (n.consume(e), T) : A(e);
    }
    function A(e) {
        return e === 61 ? (n.consume(e), I) : s(e) ? (n.consume(e), A) : C1(e);
    }
    function I(e) {
        return e === null || e === 60 || e === 61 || e === 62 || e === 96 ? r(e) : e === 34 || e === 39 ? (n.consume(e), p1 = e, k) : s(e) ? (n.consume(e), I) : (p1 = null, D(e));
    }
    function k(e) {
        return e === null || p(e) ? r(e) : e === p1 ? (n.consume(e), F) : (n.consume(e), k);
    }
    function D(e) {
        return e === null || e === 34 || e === 39 || e === 60 || e === 61 || e === 62 || e === 96 || a2(e) ? A(e) : (n.consume(e), D);
    }
    function F(e) {
        return e === 47 || e === 62 || s(e) ? C1(e) : r(e);
    }
    function y(e) {
        return e === 62 ? (n.consume(e), M) : r(e);
    }
    function M(e) {
        return s(e) ? (n.consume(e), M) : e === null || p(e) ? b(e) : r(e);
    }
    function b(e) {
        return e === 45 && l === 2 ? (n.consume(e), N) : e === 60 && l === 1 ? (n.consume(e), nn) : e === 62 && l === 4 ? (n.consume(e), E) : e === 63 && l === 3 ? (n.consume(e), O) : e === 93 && l === 5 ? (n.consume(e), L) : p(e) && (l === 6 || l === 7) ? n.check(jt, E, w)(e) : e === null || p(e) ? w(e) : (n.consume(e), b);
    }
    function w(e) {
        return n.exit("htmlFlowData"), f(e);
    }
    function f(e) {
        return e === null ? i(e) : p(e) ? n.attempt({
            tokenize: Q,
            partial: !0
        }, f, i)(e) : (n.enter("htmlFlowData"), b(e));
    }
    function Q(e, Cn, Tn) {
        return An;
        function An(X) {
            return e.enter("lineEnding"), e.consume(X), e.exit("lineEnding"), In;
        }
        function In(X) {
            return t.parser.lazy[t.now().line] ? Tn(X) : Cn(X);
        }
    }
    function N(e) {
        return e === 45 ? (n.consume(e), O) : b(e);
    }
    function nn(e) {
        return e === 47 ? (n.consume(e), a = "", W) : b(e);
    }
    function W(e) {
        return e === 62 && t1.includes(a.toLowerCase()) ? (n.consume(e), E) : o(e) && a.length < 8 ? (n.consume(e), a += String.fromCharCode(e), W) : b(e);
    }
    function L(e) {
        return e === 93 ? (n.consume(e), O) : b(e);
    }
    function O(e) {
        return e === 62 ? (n.consume(e), E) : e === 45 && l === 2 ? (n.consume(e), O) : b(e);
    }
    function E(e) {
        return e === null || p(e) ? (n.exit("htmlFlowData"), i(e)) : (n.consume(e), E);
    }
    function i(e) {
        return n.exit("htmlFlow"), u(e);
    }
}
function Nt(n, u, r) {
    return t;
    function t(l) {
        return n.exit("htmlFlowData"), n.enter("lineEndingBlank"), n.consume(l), n.exit("lineEndingBlank"), n.attempt(R, u, r);
    }
}
var Ut = {
    name: "htmlText",
    tokenize: Gt
};
function Gt(n, u, r) {
    let t = this, l, o1, a, m;
    return p2;
    function p2(i) {
        return n.enter("htmlText"), n.enter("htmlTextData"), n.consume(i), x;
    }
    function x(i) {
        return i === 33 ? (n.consume(i), s1) : i === 47 ? (n.consume(i), D) : i === 63 ? (n.consume(i), I) : o(i) ? (n.consume(i), M) : r(i);
    }
    function s1(i) {
        return i === 45 ? (n.consume(i), S) : i === 91 ? (n.consume(i), o1 = "CDATA[", a = 0, q) : o(i) ? (n.consume(i), A) : r(i);
    }
    function S(i) {
        return i === 45 ? (n.consume(i), g) : r(i);
    }
    function g(i) {
        return i === null || i === 62 ? r(i) : i === 45 ? (n.consume(i), c) : h(i);
    }
    function c(i) {
        return i === null || i === 62 ? r(i) : h(i);
    }
    function h(i) {
        return i === null ? r(i) : i === 45 ? (n.consume(i), B) : p(i) ? (m = h, L(i)) : (n.consume(i), h);
    }
    function B(i) {
        return i === 45 ? (n.consume(i), E) : h(i);
    }
    function q(i) {
        return i === o1.charCodeAt(a++) ? (n.consume(i), a === o1.length ? z : q) : r(i);
    }
    function z(i) {
        return i === null ? r(i) : i === 93 ? (n.consume(i), C1) : p(i) ? (m = z, L(i)) : (n.consume(i), z);
    }
    function C1(i) {
        return i === 93 ? (n.consume(i), T) : z(i);
    }
    function T(i) {
        return i === 62 ? E(i) : i === 93 ? (n.consume(i), T) : z(i);
    }
    function A(i) {
        return i === null || i === 62 ? E(i) : p(i) ? (m = A, L(i)) : (n.consume(i), A);
    }
    function I(i) {
        return i === null ? r(i) : i === 63 ? (n.consume(i), k) : p(i) ? (m = I, L(i)) : (n.consume(i), I);
    }
    function k(i) {
        return i === 62 ? E(i) : I(i);
    }
    function D(i) {
        return o(i) ? (n.consume(i), F) : r(i);
    }
    function F(i) {
        return i === 45 || C(i) ? (n.consume(i), F) : y(i);
    }
    function y(i) {
        return p(i) ? (m = y, L(i)) : s(i) ? (n.consume(i), y) : E(i);
    }
    function M(i) {
        return i === 45 || C(i) ? (n.consume(i), M) : i === 47 || i === 62 || a2(i) ? b(i) : r(i);
    }
    function b(i) {
        return i === 47 ? (n.consume(i), E) : i === 58 || i === 95 || o(i) ? (n.consume(i), w) : p(i) ? (m = b, L(i)) : s(i) ? (n.consume(i), b) : E(i);
    }
    function w(i) {
        return i === 45 || i === 46 || i === 58 || i === 95 || C(i) ? (n.consume(i), w) : f(i);
    }
    function f(i) {
        return i === 61 ? (n.consume(i), Q) : p(i) ? (m = f, L(i)) : s(i) ? (n.consume(i), f) : b(i);
    }
    function Q(i) {
        return i === null || i === 60 || i === 61 || i === 62 || i === 96 ? r(i) : i === 34 || i === 39 ? (n.consume(i), l = i, N) : p(i) ? (m = Q, L(i)) : s(i) ? (n.consume(i), Q) : (n.consume(i), l = void 0, W);
    }
    function N(i) {
        return i === l ? (n.consume(i), nn) : i === null ? r(i) : p(i) ? (m = N, L(i)) : (n.consume(i), N);
    }
    function nn(i) {
        return i === 62 || i === 47 || a2(i) ? b(i) : r(i);
    }
    function W(i) {
        return i === null || i === 34 || i === 39 || i === 60 || i === 61 || i === 96 ? r(i) : i === 62 || a2(i) ? b(i) : (n.consume(i), W);
    }
    function L(i) {
        return n.exit("htmlTextData"), n.enter("lineEnding"), n.consume(i), n.exit("lineEnding"), p1(n, O, "linePrefix", t.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
    }
    function O(i) {
        return n.enter("htmlTextData"), m(i);
    }
    function E(i) {
        return i === 62 ? (n.consume(i), n.exit("htmlTextData"), n.exit("htmlText"), u) : r(i);
    }
}
var K = {
    name: "labelEnd",
    tokenize: er,
    resolveTo: rr,
    resolveAll: tr
}, vt = {
    tokenize: ir
}, dt = {
    tokenize: ur
}, nr = {
    tokenize: ar
};
function tr(n) {
    let u = -1, r;
    for(; ++u < n.length;)r = n[u][1], (r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") && (n.splice(u + 1, r.type === "labelImage" ? 4 : 2), r.type = "data", u++);
    return n;
}
function rr(n, u) {
    let r = n.length, t = 0, l, o, a, m;
    for(; r--;)if (l = n[r][1], o) {
        if (l.type === "link" || l.type === "labelLink" && l._inactive) break;
        n[r][0] === "enter" && l.type === "labelLink" && (l._inactive = !0);
    } else if (a) {
        if (n[r][0] === "enter" && (l.type === "labelImage" || l.type === "labelLink") && !l._balanced && (o = r, l.type !== "labelLink")) {
            t = 2;
            break;
        }
    } else l.type === "labelEnd" && (a = r);
    let p = {
        type: n[o][1].type === "labelLink" ? "link" : "image",
        start: Object.assign({}, n[o][1].start),
        end: Object.assign({}, n[n.length - 1][1].end)
    }, x = {
        type: "label",
        start: Object.assign({}, n[o][1].start),
        end: Object.assign({}, n[a][1].end)
    }, s = {
        type: "labelText",
        start: Object.assign({}, n[o + t + 2][1].end),
        end: Object.assign({}, n[a - 2][1].start)
    };
    return m = [
        [
            "enter",
            p,
            u
        ],
        [
            "enter",
            x,
            u
        ]
    ], m = g(m, n.slice(o + 1, o + t + 3)), m = g(m, [
        [
            "enter",
            s,
            u
        ]
    ]), m = g(m, c1(u.parser.constructs.insideSpan.null, n.slice(o + t + 4, a - 3), u)), m = g(m, [
        [
            "exit",
            s,
            u
        ],
        n[a - 2],
        n[a - 1],
        [
            "exit",
            x,
            u
        ]
    ]), m = g(m, n.slice(a + 1)), m = g(m, [
        [
            "exit",
            p,
            u
        ]
    ]), u1(n, o, n.length, m), n;
}
function er(n, u, r) {
    let t = this, l = t.events.length, o, a;
    for(; l--;)if ((t.events[l][1].type === "labelImage" || t.events[l][1].type === "labelLink") && !t.events[l][1]._balanced) {
        o = t.events[l][1];
        break;
    }
    return m;
    function m(s) {
        return o ? o._inactive ? x(s) : (a = t.parser.defined.includes(r2(t.sliceSerialize({
            start: o.end,
            end: t.now()
        }))), n.enter("labelEnd"), n.enter("labelMarker"), n.consume(s), n.exit("labelMarker"), n.exit("labelEnd"), p) : r(s);
    }
    function p(s) {
        return s === 40 ? n.attempt(vt, u, a ? u : x)(s) : s === 91 ? n.attempt(dt, u, a ? n.attempt(nr, u, x) : x)(s) : a ? u(s) : x(s);
    }
    function x(s) {
        return o._balanced = !0, r(s);
    }
}
function ir(n, u, r) {
    return t;
    function t(p) {
        return n.enter("resource"), n.enter("resourceMarker"), n.consume(p), n.exit("resourceMarker"), f(n, l);
    }
    function l(p) {
        return p === 41 ? m(p) : D1(n, o, r, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(p);
    }
    function o(p) {
        return a2(p) ? f(n, a)(p) : m(p);
    }
    function a(p) {
        return p === 34 || p === 39 || p === 40 ? w1(n, f(n, m), r, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(p) : m(p);
    }
    function m(p) {
        return p === 41 ? (n.enter("resourceMarker"), n.consume(p), n.exit("resourceMarker"), n.exit("resource"), u) : r(p);
    }
}
function ur(n, u, r) {
    let t = this;
    return l;
    function l(a) {
        return w.call(t, n, o, r, "reference", "referenceMarker", "referenceString")(a);
    }
    function o(a) {
        return t.parser.defined.includes(r2(t.sliceSerialize(t.events[t.events.length - 1][1]).slice(1, -1))) ? u(a) : r(a);
    }
}
function ar(n, u, r) {
    return t;
    function t(o) {
        return n.enter("reference"), n.enter("referenceMarker"), n.consume(o), n.exit("referenceMarker"), l;
    }
    function l(o) {
        return o === 93 ? (n.enter("referenceMarker"), n.consume(o), n.exit("referenceMarker"), n.exit("reference"), u) : r(o);
    }
}
var lr = {
    name: "labelStartImage",
    tokenize: or,
    resolveAll: K.resolveAll
};
function or(n, u, r) {
    let t = this;
    return l;
    function l(m) {
        return n.enter("labelImage"), n.enter("labelImageMarker"), n.consume(m), n.exit("labelImageMarker"), o;
    }
    function o(m) {
        return m === 91 ? (n.enter("labelMarker"), n.consume(m), n.exit("labelMarker"), n.exit("labelImage"), a) : r(m);
    }
    function a(m) {
        return m === 94 && "_hiddenFootnoteSupport" in t.parser.constructs ? r(m) : u(m);
    }
}
var mr = {
    name: "labelStartLink",
    tokenize: pr,
    resolveAll: K.resolveAll
};
function pr(n, u, r) {
    let t = this;
    return l;
    function l(a) {
        return n.enter("labelLink"), n.enter("labelMarker"), n.consume(a), n.exit("labelMarker"), n.exit("labelLink"), o;
    }
    function o(a) {
        return a === 94 && "_hiddenFootnoteSupport" in t.parser.constructs ? r(a) : u(a);
    }
}
var xr = {
    name: "lineEnding",
    tokenize: hr
};
function hr(n, u) {
    return r;
    function r(t) {
        return n.enter("lineEnding"), n.consume(t), n.exit("lineEnding"), p1(n, u, "linePrefix");
    }
}
var an = {
    name: "thematicBreak",
    tokenize: Sr
};
function Sr(n, u, r) {
    let t = 0, l;
    return o;
    function o(p) {
        return n.enter("thematicBreak"), l = p, a(p);
    }
    function a(p2) {
        return p2 === l ? (n.enter("thematicBreakSequence"), m(p2)) : s(p2) ? p1(n, a, "whitespace")(p2) : t < 3 || p2 !== null && !p(p2) ? r(p2) : (n.exit("thematicBreak"), u(p2));
    }
    function m(p) {
        return p === l ? (n.consume(p), t++, m) : (n.exit("thematicBreakSequence"), a(p));
    }
}
var Ln = {
    name: "list",
    tokenize: zr,
    continuation: {
        tokenize: yr
    },
    exit: wr
}, br = {
    tokenize: Lr,
    partial: !0
}, fr = {
    tokenize: Er,
    partial: !0
};
function zr(n, u, r1) {
    let t = this, l = t.events[t.events.length - 1], o = l && l[1].type === "linePrefix" ? l[2].sliceSerialize(l[1], !0).length : 0, a = 0;
    return m;
    function m(c) {
        let h = t.containerState.type || (c === 42 || c === 43 || c === 45 ? "listUnordered" : "listOrdered");
        if (h === "listUnordered" ? !t.containerState.marker || c === t.containerState.marker : r(c)) {
            if (t.containerState.type || (t.containerState.type = h, n.enter(h, {
                _container: !0
            })), h === "listUnordered") return n.enter("listItemPrefix"), c === 42 || c === 45 ? n.check(an, r1, x)(c) : x(c);
            if (!t.interrupt || c === 49) return n.enter("listItemPrefix"), n.enter("listItemValue"), p(c);
        }
        return r1(c);
    }
    function p(c) {
        return r(c) && ++a < 10 ? (n.consume(c), p) : (!t.interrupt || a < 2) && (t.containerState.marker ? c === t.containerState.marker : c === 41 || c === 46) ? (n.exit("listItemValue"), x(c)) : r1(c);
    }
    function x(c) {
        return n.enter("listItemMarker"), n.consume(c), n.exit("listItemMarker"), t.containerState.marker = t.containerState.marker || c, n.check(R, t.interrupt ? r1 : s1, n.attempt(br, g, S));
    }
    function s1(c) {
        return t.containerState.initialBlankLine = !0, o++, g(c);
    }
    function S(c) {
        return s(c) ? (n.enter("listItemPrefixWhitespace"), n.consume(c), n.exit("listItemPrefixWhitespace"), g) : r1(c);
    }
    function g(c) {
        return t.containerState.size = o + t.sliceSerialize(n.exit("listItemPrefix"), !0).length, u(c);
    }
}
function yr(n, u, r) {
    let t = this;
    return t.containerState._closeFlow = void 0, n.check(R, l, o);
    function l(m) {
        return t.containerState.furtherBlankLines = t.containerState.furtherBlankLines || t.containerState.initialBlankLine, p1(n, u, "listItemIndent", t.containerState.size + 1)(m);
    }
    function o(m) {
        return t.containerState.furtherBlankLines || !s(m) ? (t.containerState.furtherBlankLines = void 0, t.containerState.initialBlankLine = void 0, a(m)) : (t.containerState.furtherBlankLines = void 0, t.containerState.initialBlankLine = void 0, n.attempt(fr, u, a)(m));
    }
    function a(m) {
        return t.containerState._closeFlow = !0, t.interrupt = void 0, p1(n, n.attempt(Ln, u, r), "linePrefix", t.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(m);
    }
}
function Er(n, u, r) {
    let t = this;
    return p1(n, l, "listItemIndent", t.containerState.size + 1);
    function l(o) {
        let a = t.events[t.events.length - 1];
        return a && a[1].type === "listItemIndent" && a[2].sliceSerialize(a[1], !0).length === t.containerState.size ? u(o) : r(o);
    }
}
function wr(n) {
    n.exit(this.containerState.type);
}
function Lr(n, u, r) {
    let t = this;
    return p1(n, l, "listItemPrefixWhitespace", t.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);
    function l(o) {
        let a = t.events[t.events.length - 1];
        return !s(o) && a && a[1].type === "listItemPrefixWhitespace" ? u(o) : r(o);
    }
}
var Ar = {
    name: "setextUnderline",
    tokenize: Fr,
    resolveTo: Ir
};
function Ir(n, u) {
    let r = n.length, t, l, o;
    for(; r--;)if (n[r][0] === "enter") {
        if (n[r][1].type === "content") {
            t = r;
            break;
        }
        n[r][1].type === "paragraph" && (l = r);
    } else n[r][1].type === "content" && n.splice(r, 1), !o && n[r][1].type === "definition" && (o = r);
    let a = {
        type: "setextHeading",
        start: Object.assign({}, n[l][1].start),
        end: Object.assign({}, n[n.length - 1][1].end)
    };
    return n[l][1].type = "setextHeadingText", o ? (n.splice(l, 0, [
        "enter",
        a,
        u
    ]), n.splice(o + 1, 0, [
        "exit",
        n[t][1],
        u
    ]), n[t][1].end = Object.assign({}, n[o][1].end)) : n[t][1] = a, n.push([
        "exit",
        a,
        u
    ]), n;
}
function Fr(n, u, r) {
    let t = this, l = t.events.length, o, a;
    for(; l--;)if (t.events[l][1].type !== "lineEnding" && t.events[l][1].type !== "linePrefix" && t.events[l][1].type !== "content") {
        a = t.events[l][1].type === "paragraph";
        break;
    }
    return m;
    function m(s) {
        return !t.parser.lazy[t.now().line] && (t.interrupt || a) ? (n.enter("setextHeadingLine"), n.enter("setextHeadingLineSequence"), o = s, p2(s)) : r(s);
    }
    function p2(s) {
        return s === o ? (n.consume(s), p2) : (n.exit("setextHeadingLineSequence"), p1(n, x, "lineSuffix")(s));
    }
    function x(s) {
        return s === null || p(s) ? (n.exit("setextHeadingLine"), u(s)) : r(s);
    }
}
var kn = Object.defineProperty;
var wn = (t, e)=>{
    for(var r in e)kn(t, r, {
        get: e[r],
        enumerable: !0
    });
};
var Z = {
    tokenize: Cn
};
function Cn(t) {
    let e = t.attempt(this.parser.constructs.contentInitial, n, i), r;
    return e;
    function n(a) {
        if (a === null) {
            t.consume(a);
            return;
        }
        return t.enter("lineEnding"), t.consume(a), t.exit("lineEnding"), p1(t, e, "linePrefix");
    }
    function i(a) {
        return t.enter("paragraph"), o(a);
    }
    function o(a) {
        let p = t.enter("chunkText", {
            contentType: "text",
            previous: r
        });
        return r && (r.next = p), r = p, l(a);
    }
    function l(a) {
        if (a === null) {
            t.exit("chunkText"), t.exit("paragraph"), t.consume(a);
            return;
        }
        return p(a) ? (t.consume(a), t.exit("chunkText"), o) : (t.consume(a), l);
    }
}
var tn = {
    tokenize: Sn
}, nn = {
    tokenize: _n1
};
function Sn(t) {
    let e = this, r = [], n = 0, i, o, l;
    return a;
    function a(s) {
        if (n < r.length) {
            let h = r[n];
            return e.containerState = h[1], t.attempt(h[0].continuation, p1, d)(s);
        }
        return d(s);
    }
    function p1(s) {
        if (n++, e.containerState._closeFlow) {
            e.containerState._closeFlow = void 0, i && B();
            let h = e.events.length, g = h, m;
            for(; g--;)if (e.events[g][0] === "exit" && e.events[g][1].type === "chunkFlow") {
                m = e.events[g][1].end;
                break;
            }
            _(n);
            let w = h;
            for(; w < e.events.length;)e.events[w][1].end = Object.assign({}, m), w++;
            return u1(e.events, g + 1, 0, e.events.slice(h)), e.events.length = w, d(s);
        }
        return a(s);
    }
    function d(s) {
        if (n === r.length) {
            if (!i) return C(s);
            if (i.currentConstruct && i.currentConstruct.concrete) return T(s);
            e.interrupt = Boolean(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
        }
        return e.containerState = {}, t.check(nn, u, b)(s);
    }
    function u(s) {
        return i && B(), _(n), C(s);
    }
    function b(s) {
        return e.parser.lazy[e.now().line] = n !== r.length, l = e.now().offset, T(s);
    }
    function C(s) {
        return e.containerState = {}, t.attempt(nn, z, T)(s);
    }
    function z(s) {
        return n++, r.push([
            e.currentConstruct,
            e.containerState
        ]), C(s);
    }
    function T(s) {
        if (s === null) {
            i && B(), _(0), t.consume(s);
            return;
        }
        return i = i || e.parser.flow(e.now()), t.enter("chunkFlow", {
            contentType: "flow",
            previous: o,
            _tokenizer: i
        }), F(s);
    }
    function F(s) {
        if (s === null) {
            S(t.exit("chunkFlow"), !0), _(0), t.consume(s);
            return;
        }
        return p(s) ? (t.consume(s), S(t.exit("chunkFlow")), n = 0, e.interrupt = void 0, a) : (t.consume(s), F);
    }
    function S(s, h) {
        let g = e.sliceStream(s);
        if (h && g.push(null), s.previous = o, o && (o.next = s), o = s, i.defineSkip(s.start), i.write(g), e.parser.lazy[s.start.line]) {
            let m = i.events.length;
            for(; m--;)if (i.events[m][1].start.offset < l && (!i.events[m][1].end || i.events[m][1].end.offset > l)) return;
            let w = e.events.length, I = w, A, O;
            for(; I--;)if (e.events[I][0] === "exit" && e.events[I][1].type === "chunkFlow") {
                if (A) {
                    O = e.events[I][1].end;
                    break;
                }
                A = !0;
            }
            for(_(n), m = w; m < e.events.length;)e.events[m][1].end = Object.assign({}, O), m++;
            u1(e.events, I + 1, 0, e.events.slice(w)), e.events.length = m;
        }
    }
    function _(s) {
        let h = r.length;
        for(; (h--) > s;){
            let g = r[h];
            e.containerState = g[1], g[0].exit.call(e, t);
        }
        r.length = s;
    }
    function B() {
        i.write([
            null
        ]), o = void 0, i = void 0, e.containerState._closeFlow = void 0;
    }
}
function _n1(t, e, r) {
    return p1(t, t.attempt(this.parser.constructs.document, e, r), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
var en = {
    tokenize: Tn
};
function Tn(t) {
    let e = this, r = t.attempt(R, n, t.attempt(this.parser.constructs.flowInitial, i, p1(t, t.attempt(this.parser.constructs.flow, i, t.attempt(ht, i)), "linePrefix")));
    return r;
    function n(o) {
        if (o === null) {
            t.consume(o);
            return;
        }
        return t.enter("lineEndingBlank"), t.consume(o), t.exit("lineEndingBlank"), e.currentConstruct = void 0, r;
    }
    function i(o) {
        if (o === null) {
            t.consume(o);
            return;
        }
        return t.enter("lineEnding"), t.consume(o), t.exit("lineEnding"), e.currentConstruct = void 0, r;
    }
}
var rn = {
    resolveAll: sn1()
}, on = ln("string"), un = ln("text");
function ln(t) {
    return {
        tokenize: e,
        resolveAll: sn1(t === "text" ? Fn : void 0)
    };
    function e(r) {
        let n = this, i = this.parser.constructs[t], o = r.attempt(i, l, a);
        return l;
        function l(u) {
            return d(u) ? o(u) : a(u);
        }
        function a(u) {
            if (u === null) {
                r.consume(u);
                return;
            }
            return r.enter("data"), r.consume(u), p;
        }
        function p(u) {
            return d(u) ? (r.exit("data"), o(u)) : (r.consume(u), p);
        }
        function d(u) {
            if (u === null) return !0;
            let b = i[u], C = -1;
            if (b) for(; ++C < b.length;){
                let z = b[C];
                if (!z.previous || z.previous.call(n, n.previous)) return !0;
            }
            return !1;
        }
    }
}
function sn1(t) {
    return e;
    function e(r, n) {
        let i = -1, o;
        for(; ++i <= r.length;)o === void 0 ? r[i] && r[i][1].type === "data" && (o = i, i++) : (!r[i] || r[i][1].type !== "data") && (i !== o + 2 && (r[o][1].end = r[i - 1][1].end, r.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
        return t ? t(r, n) : r;
    }
}
function Fn(t, e) {
    let r = 0;
    for(; ++r <= t.length;)if ((r === t.length || t[r][1].type === "lineEnding") && t[r - 1][1].type === "data") {
        let n = t[r - 1][1], i = e.sliceStream(n), o = i.length, l = -1, a = 0, p;
        for(; o--;){
            let d = i[o];
            if (typeof d == "string") {
                for(l = d.length; d.charCodeAt(l - 1) === 32;)a++, l--;
                if (l) break;
                l = -1;
            } else if (d === -2) p = !0, a++;
            else if (d !== -1) {
                o++;
                break;
            }
        }
        if (a) {
            let d1 = {
                type: r === t.length || p || a < 2 ? "lineSuffix" : "hardBreakTrailing",
                start: {
                    line: n.end.line,
                    column: n.end.column - a,
                    offset: n.end.offset - a,
                    _index: n.start._index + o,
                    _bufferIndex: o ? l : n.start._bufferIndex + l
                },
                end: Object.assign({}, n.end)
            };
            n.end = Object.assign({}, d1.start), n.start.offset === n.end.offset ? Object.assign(n, d1) : (t.splice(r, 0, [
                "enter",
                d1,
                e
            ], [
                "exit",
                d1,
                e
            ]), r += 2);
        }
        r++;
    }
    return t;
}
function cn(t, e, r) {
    let n = Object.assign(r ? Object.assign({}, r) : {
        line: 1,
        column: 1,
        offset: 0
    }, {
        _index: 0,
        _bufferIndex: -1
    }), i = {}, o = [], l = [], a = [], d = {
        consume: h,
        enter: g1,
        exit: m,
        attempt: A(w),
        check: A(I),
        interrupt: A(I, {
            interrupt: !0
        })
    }, u = {
        previous: null,
        code: null,
        containerState: {},
        events: [],
        parser: t,
        sliceStream: F,
        sliceSerialize: T,
        now: S,
        defineSkip: _,
        write: z
    }, b = e.tokenize.call(u, d);
    return e.resolveAll && o.push(e), u;
    function z(c) {
        return l = g(l, c), B(), l[l.length - 1] !== null ? [] : (O(e, 0), u.events = c1(o, u.events, u), u.events);
    }
    function T(c, f) {
        return Nn(F(c), f);
    }
    function F(c) {
        return Pn1(l, c);
    }
    function S() {
        return Object.assign({}, n);
    }
    function _(c) {
        i[c.line] = c.column, D();
    }
    function B() {
        let c;
        for(; n._index < l.length;){
            let f = l[n._index];
            if (typeof f == "string") for(c = n._index, n._bufferIndex < 0 && (n._bufferIndex = 0); n._index === c && n._bufferIndex < f.length;)s(f.charCodeAt(n._bufferIndex));
            else s(f);
        }
    }
    function s(c) {
        c, b = b(c);
    }
    function h(c) {
        p(c) ? (n.line++, n.column = 1, n.offset += c === -3 ? 2 : 1, D()) : c !== -1 && (n.column++, n.offset++), n._bufferIndex < 0 ? n._index++ : (n._bufferIndex++, n._bufferIndex === l[n._index].length && (n._bufferIndex = -1, n._index++)), u.previous = c, !0;
    }
    function g1(c, f) {
        let v = f || {};
        return v.type = c, v.start = S(), u.events.push([
            "enter",
            v,
            u
        ]), a.push(v), v;
    }
    function m(c) {
        let f = a.pop();
        return f.end = S(), u.events.push([
            "exit",
            f,
            u
        ]), f;
    }
    function w(c, f) {
        O(c, f.from);
    }
    function I(c, f) {
        f.restore();
    }
    function A(c, f) {
        return v;
        function v(y, M, j) {
            let R, L, W, H;
            return Array.isArray(y) ? Q(y) : "tokenize" in y ? Q([
                y
            ]) : mn(y);
            function mn(x) {
                return U;
                function U(E) {
                    let P = E !== null && x[E], N = E !== null && x.null, gn = [
                        ...Array.isArray(P) ? P : P ? [
                            P
                        ] : [],
                        ...Array.isArray(N) ? N : N ? [
                            N
                        ] : []
                    ];
                    return Q(gn)(E);
                }
            }
            function Q(x) {
                return R = x, L = 0, x.length === 0 ? j : X(x[L]);
            }
            function X(x) {
                return U;
                function U(E) {
                    return H = xn(), W = x, x.partial || (u.currentConstruct = x), x.name && u.parser.constructs.disable.null.includes(x.name) ? Y(E) : x.tokenize.call(f ? Object.assign(Object.create(u), f) : u, d, hn, Y)(E);
                }
            }
            function hn(x) {
                return !0, c(W, H), M;
            }
            function Y(x) {
                return !0, H.restore(), ++L < R.length ? X(R[L]) : j;
            }
        }
    }
    function O(c, f) {
        c.resolveAll && !o.includes(c) && o.push(c), c.resolve && u1(u.events, f, u.events.length - f, c.resolve(u.events.slice(f), u)), c.resolveTo && (u.events = c.resolveTo(u.events, u));
    }
    function xn() {
        let c = S(), f = u.previous, v = u.currentConstruct, y = u.events.length, M = Array.from(a);
        return {
            restore: j,
            from: y
        };
        function j() {
            n = c, u.previous = f, u.currentConstruct = v, u.events.length = y, a = M, D();
        }
    }
    function D() {
        n.line in i && n.column < 2 && (n.column = i[n.line], n.offset += i[n.line] - 1);
    }
}
function Pn1(t, e) {
    let r = e.start._index, n = e.start._bufferIndex, i = e.end._index, o = e.end._bufferIndex, l;
    return r === i ? l = [
        t[r].slice(n, o)
    ] : (l = t.slice(r, i), n > -1 && (l[0] = l[0].slice(n)), o > 0 && l.push(t[i].slice(0, o))), l;
}
function Nn(t, e) {
    let r = -1, n = [], i;
    for(; ++r < t.length;){
        let o = t[r], l;
        if (typeof o == "string") l = o;
        else switch(o){
            case -5:
                {
                    l = "\r";
                    break;
                }
            case -4:
                {
                    l = `
`;
                    break;
                }
            case -3:
                {
                    l = `\r
`;
                    break;
                }
            case -2:
                {
                    l = e ? " " : "	";
                    break;
                }
            case -1:
                {
                    if (!e && i) continue;
                    l = " ";
                    break;
                }
            default:
                l = String.fromCharCode(o);
        }
        i = o === -2, n.push(l);
    }
    return n.join("");
}
var V = {};
wn(V, {
    attentionMarkers: ()=>et1,
    contentInitial: ()=>Xn1,
    disable: ()=>rt1,
    document: ()=>Wn1,
    flow: ()=>Zn,
    flowInitial: ()=>Yn,
    insideSpan: ()=>tt1,
    string: ()=>$n,
    text: ()=>nt
});
var Wn1 = {
    [42]: Ln,
    [43]: Ln,
    [45]: Ln,
    [48]: Ln,
    [49]: Ln,
    [50]: Ln,
    [51]: Ln,
    [52]: Ln,
    [53]: Ln,
    [54]: Ln,
    [55]: Ln,
    [56]: Ln,
    [57]: Ln,
    [62]: sn
}, Xn1 = {
    [91]: wt
}, Yn = {
    [-2]: et,
    [-1]: et,
    [32]: et
}, Zn = {
    [35]: qt,
    [42]: an,
    [45]: [
        Ar,
        an
    ],
    [60]: Vt,
    [61]: Ar,
    [95]: an,
    [96]: tt,
    [126]: tt
}, $n = {
    [38]: vn,
    [92]: Kn
}, nt = {
    [-5]: xr,
    [-4]: xr,
    [-3]: xr,
    [33]: lr,
    [38]: vn,
    [42]: On,
    [60]: [
        Rn,
        Ut
    ],
    [91]: mr,
    [92]: [
        It,
        Kn
    ],
    [93]: K,
    [95]: On,
    [96]: lt
}, tt1 = {
    null: [
        On,
        rn
    ]
}, et1 = {
    null: [
        42,
        95
    ]
}, rt1 = {
    null: []
};
function Ft1(t = {}) {
    let e = y([
        V
    ].concat(t.extensions || [])), r = {
        defined: [],
        lazy: {},
        constructs: e,
        content: n(Z),
        document: n(tn),
        flow: n(en),
        string: n(on),
        text: n(un)
    };
    return r;
    function n(i) {
        return o;
        function o(l) {
            return cn(r, i, l);
        }
    }
}
var d = /[\0\t\n\r]/g;
function x1() {
    let i = 1, c = "", u = !0, r;
    return p;
    function p(n, l, a) {
        let e = [], h, o, t, s, f;
        for(n = c + n.toString(l), t = 0, c = "", u && (n.charCodeAt(0) === 65279 && t++, u = void 0); t < n.length;){
            if (d.lastIndex = t, h = d.exec(n), s = h && h.index !== void 0 ? h.index : n.length, f = n.charCodeAt(s), !h) {
                c = n.slice(t);
                break;
            }
            if (f === 10 && t === s && r) e.push(-3), r = void 0;
            else switch(r && (e.push(-5), r = void 0), t < s && (e.push(n.slice(t, s)), i += s - t), f){
                case 0:
                    {
                        e.push(65533), i++;
                        break;
                    }
                case 9:
                    {
                        for(o = Math.ceil(i / 4) * 4, e.push(-2); (i++) < o;)e.push(-1);
                        break;
                    }
                case 10:
                    {
                        e.push(-4), i = 1;
                        break;
                    }
                default:
                    r = !0, i = 1;
            }
            t = s + 1;
        }
        return a && (r && e.push(-5), c && e.push(c), e.push(null)), e;
    }
}
function e2(o) {
    for(; !I(o););
    return o;
}
function t2(r, n) {
    let e = Number.parseInt(r, n);
    return e < 9 || e === 11 || e > 13 && e < 32 || e > 126 && e < 160 || e > 55295 && e < 57344 || e > 64975 && e < 65008 || (e & 65535) === 65535 || (e & 65535) === 65534 || e > 1114111 ? "\uFFFD" : String.fromCharCode(e);
}
var n2 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function m(r) {
    return r.replace(n2, f1);
}
function f1(r, c, e) {
    if (c) return c;
    if (e.charCodeAt(0) === 35) {
        let t = e.charCodeAt(1), d = t === 120 || t === 88;
        return t2(e.slice(d ? 2 : 1), d ? 16 : 10);
    }
    return n1(e) || r;
}
function o1(n) {
    return !n || typeof n != "object" ? "" : "position" in n || "type" in n ? t3(n.position) : "start" in n || "end" in n ? t3(n) : "line" in n || "column" in n ? i(n) : "";
}
function i(n) {
    return r3(n && n.line) + ":" + r3(n && n.column);
}
function t3(n) {
    return i(n && n.start) + "-" + i(n && n.end);
}
function r3(n) {
    return n && typeof n == "number" ? n : 1;
}
var B1 = {}.hasOwnProperty, Pe = function(h, s, d) {
    return typeof s != "string" && (d = s, s = void 0), Me(d)(e2(Ft1(d).document().write(x1()(h, s, !0))));
};
function Me(h = {}) {
    let s = N({
        transforms: [],
        canContainEols: [
            "emphasis",
            "fragment",
            "heading",
            "paragraph",
            "strong"
        ],
        enter: {
            autolink: a(V),
            autolinkProtocol: m1,
            autolinkEmail: m1,
            atxHeading: a(O),
            blockQuote: a(xe),
            characterEscape: m1,
            characterReference: m1,
            codeFenced: a(D),
            codeFencedFenceInfo: p,
            codeFencedFenceMeta: p,
            codeIndented: a(D, p),
            codeText: a(ye, p),
            codeTextData: m1,
            data: m1,
            codeFlowValue: m1,
            definition: a(Se),
            definitionDestinationString: p,
            definitionLabelString: p,
            definitionTitleString: p,
            emphasis: a(be),
            hardBreakEscape: a(P),
            hardBreakTrailing: a(P),
            htmlFlow: a(M, p),
            htmlFlowData: m1,
            htmlText: a(M, p),
            htmlTextData: m1,
            image: a(we),
            label: p,
            link: a(V),
            listItem: a(Ie),
            listItemValue: j,
            listOrdered: a(Q, _),
            listUnordered: a(Q),
            paragraph: a(Te),
            reference: fe,
            referenceString: p,
            resourceDestinationString: p,
            resourceTitleString: p,
            setextHeading: a(O),
            strong: a(Ee),
            thematicBreak: a(Be)
        },
        exit: {
            atxHeading: c(),
            atxHeadingSequence: Z,
            autolink: c(),
            autolinkEmail: ke,
            autolinkProtocol: me,
            blockQuote: c(),
            characterEscapeValue: k,
            characterReferenceMarkerHexadecimal: z,
            characterReferenceMarkerNumeric: z,
            characterReferenceValue: ge,
            codeFenced: c(G),
            codeFencedFence: $,
            codeFencedFenceInfo: A,
            codeFencedFenceMeta: W,
            codeFlowValue: k,
            codeIndented: c(J),
            codeText: c(se),
            codeTextData: k,
            data: k,
            definition: c(),
            definitionDestinationString: Y,
            definitionLabelString: K,
            definitionTitleString: X,
            emphasis: c(),
            hardBreakEscape: c(L),
            hardBreakTrailing: c(L),
            htmlFlow: c(ie),
            htmlFlowData: k,
            htmlText: c(re),
            htmlTextData: k,
            image: c(ce),
            label: oe,
            labelText: le,
            lineEnding: ne,
            link: c(ae),
            listItem: c(),
            listOrdered: c(),
            listUnordered: c(),
            paragraph: c(),
            referenceString: pe,
            resourceDestinationString: de,
            resourceTitleString: he,
            resource: ue,
            setextHeading: c(te),
            setextHeadingLineSequence: ee,
            setextHeadingText: v,
            strong: c(),
            thematicBreak: c()
        }
    }, h.mdastExtensions || []), d = {};
    return y;
    function y(e) {
        let t = {
            type: "root",
            children: []
        }, n = [
            t
        ], i = [], g = [], w = {
            stack: n,
            tokenStack: i,
            config: s,
            enter: R,
            exit: H,
            buffer: p,
            resume: U,
            setData: o,
            getData: f
        }, r = -1;
        for(; ++r < e.length;)if (e[r][1].type === "listOrdered" || e[r][1].type === "listUnordered") if (e[r][0] === "enter") g.push(r);
        else {
            let u = g.pop();
            r = C(e, u, r);
        }
        for(r = -1; ++r < e.length;){
            let u1 = s[e[r][0]];
            B1.call(u1, e[r][1].type) && u1[e[r][1].type].call(Object.assign({
                sliceSerialize: e[r][2].sliceSerialize
            }, w), e[r][1]);
        }
        if (i.length > 0) {
            let u2 = i[i.length - 1];
            (u2[1] || q).call(w, void 0, u2[0]);
        }
        for(t.position = {
            start: S(e.length > 0 ? e[0][1].start : {
                line: 1,
                column: 1,
                offset: 0
            }),
            end: S(e.length > 0 ? e[e.length - 2][1].end : {
                line: 1,
                column: 1,
                offset: 0
            })
        }, r = -1; ++r < s.transforms.length;)t = s.transforms[r](t) || t;
        return t;
    }
    function C(e, t, n) {
        let i = t - 1, g = -1, w = !1, r, u, b, I;
        for(; ++i <= n;){
            let l = e[i];
            if (l[1].type === "listUnordered" || l[1].type === "listOrdered" || l[1].type === "blockQuote" ? (l[0] === "enter" ? g++ : g--, I = void 0) : l[1].type === "lineEndingBlank" ? l[0] === "enter" && (r && !I && !g && !b && (b = i), I = void 0) : l[1].type === "linePrefix" || l[1].type === "listItemValue" || l[1].type === "listItemMarker" || l[1].type === "listItemPrefix" || l[1].type === "listItemPrefixWhitespace" || (I = void 0), !g && l[0] === "enter" && l[1].type === "listItemPrefix" || g === -1 && l[0] === "exit" && (l[1].type === "listUnordered" || l[1].type === "listOrdered")) {
                if (r) {
                    let E = i;
                    for(u = void 0; E--;){
                        let x = e[E];
                        if (x[1].type === "lineEnding" || x[1].type === "lineEndingBlank") {
                            if (x[0] === "exit") continue;
                            u && (e[u][1].type = "lineEndingBlank", w = !0), x[1].type = "lineEnding", u = E;
                        } else if (!(x[1].type === "linePrefix" || x[1].type === "blockQuotePrefix" || x[1].type === "blockQuotePrefixWhitespace" || x[1].type === "blockQuoteMarker" || x[1].type === "listItemIndent")) break;
                    }
                    b && (!u || b < u) && (r._spread = !0), r.end = Object.assign({}, u ? e[u][1].start : l[1].end), e.splice(u || i, 0, [
                        "exit",
                        r,
                        l[2]
                    ]), i++, n++;
                }
                l[1].type === "listItemPrefix" && (r = {
                    type: "listItem",
                    _spread: !1,
                    start: Object.assign({}, l[1].start)
                }, e.splice(i, 0, [
                    "enter",
                    r,
                    l[2]
                ]), i++, n++, b = void 0, I = !0);
            }
        }
        return e[t][1]._spread = w, n;
    }
    function o(e, t) {
        d[e] = t;
    }
    function f(e) {
        return d[e];
    }
    function S(e) {
        return {
            line: e.line,
            column: e.column,
            offset: e.offset
        };
    }
    function a(e, t) {
        return n;
        function n(i) {
            R.call(this, e(i), i), t && t.call(this, i);
        }
    }
    function p() {
        this.stack.push({
            type: "fragment",
            children: []
        });
    }
    function R(e, t, n) {
        return this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([
            t,
            n
        ]), e.position = {
            start: S(t.start)
        }, e;
    }
    function c(e) {
        return t;
        function t(n) {
            e && e.call(this, n), H.call(this, n);
        }
    }
    function H(e, t) {
        let n = this.stack.pop(), i = this.tokenStack.pop();
        if (i) i[0].type !== e.type && (t ? t.call(this, e, i[0]) : (i[1] || q).call(this, e, i[0]));
        else throw new Error("Cannot close `" + e.type + "` (" + o1({
            start: e.start,
            end: e.end
        }) + "): it\u2019s not open");
        return n.position.end = S(e.end), n;
    }
    function U() {
        return l(this.stack.pop());
    }
    function _() {
        o("expectingFirstListItemValue", !0);
    }
    function j(e) {
        if (f("expectingFirstListItemValue")) {
            let t = this.stack[this.stack.length - 2];
            t.start = Number.parseInt(this.sliceSerialize(e), 10), o("expectingFirstListItemValue");
        }
    }
    function A() {
        let e = this.resume(), t = this.stack[this.stack.length - 1];
        t.lang = e;
    }
    function W() {
        let e = this.resume(), t = this.stack[this.stack.length - 1];
        t.meta = e;
    }
    function $() {
        f("flowCodeInside") || (this.buffer(), o("flowCodeInside", !0));
    }
    function G() {
        let e = this.resume(), t = this.stack[this.stack.length - 1];
        t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), o("flowCodeInside");
    }
    function J() {
        let e = this.resume(), t = this.stack[this.stack.length - 1];
        t.value = e.replace(/(\r?\n|\r)$/g, "");
    }
    function K(e) {
        let t = this.resume(), n = this.stack[this.stack.length - 1];
        n.label = t, n.identifier = r2(this.sliceSerialize(e)).toLowerCase();
    }
    function X() {
        let e = this.resume(), t = this.stack[this.stack.length - 1];
        t.title = e;
    }
    function Y() {
        let e = this.resume(), t = this.stack[this.stack.length - 1];
        t.url = e;
    }
    function Z(e) {
        let t = this.stack[this.stack.length - 1];
        if (!t.depth) {
            let n = this.sliceSerialize(e).length;
            t.depth = n;
        }
    }
    function v() {
        o("setextHeadingSlurpLineEnding", !0);
    }
    function ee(e) {
        let t = this.stack[this.stack.length - 1];
        t.depth = this.sliceSerialize(e).charCodeAt(0) === 61 ? 1 : 2;
    }
    function te() {
        o("setextHeadingSlurpLineEnding");
    }
    function m1(e) {
        let t = this.stack[this.stack.length - 1], n = t.children[t.children.length - 1];
        (!n || n.type !== "text") && (n = Fe(), n.position = {
            start: S(e.start)
        }, t.children.push(n)), this.stack.push(n);
    }
    function k(e) {
        let t = this.stack.pop();
        t.value += this.sliceSerialize(e), t.position.end = S(e.end);
    }
    function ne(e) {
        let t = this.stack[this.stack.length - 1];
        if (f("atHardBreak")) {
            let n = t.children[t.children.length - 1];
            n.position.end = S(e.end), o("atHardBreak");
            return;
        }
        !f("setextHeadingSlurpLineEnding") && s.canContainEols.includes(t.type) && (m1.call(this, e), k.call(this, e));
    }
    function L() {
        o("atHardBreak", !0);
    }
    function ie() {
        let e = this.resume(), t = this.stack[this.stack.length - 1];
        t.value = e;
    }
    function re() {
        let e = this.resume(), t = this.stack[this.stack.length - 1];
        t.value = e;
    }
    function se() {
        let e = this.resume(), t = this.stack[this.stack.length - 1];
        t.value = e;
    }
    function ae() {
        let e = this.stack[this.stack.length - 1];
        f("inReference") ? (e.type += "Reference", e.referenceType = f("referenceType") || "shortcut", delete e.url, delete e.title) : (delete e.identifier, delete e.label), o("referenceType");
    }
    function ce() {
        let e = this.stack[this.stack.length - 1];
        f("inReference") ? (e.type += "Reference", e.referenceType = f("referenceType") || "shortcut", delete e.url, delete e.title) : (delete e.identifier, delete e.label), o("referenceType");
    }
    function le(e) {
        let t = this.stack[this.stack.length - 2], n = this.sliceSerialize(e);
        t.label = m(n), t.identifier = r2(n).toLowerCase();
    }
    function oe() {
        let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
        o("inReference", !0), n.type === "link" ? n.children = e.children : n.alt = t;
    }
    function de() {
        let e = this.resume(), t = this.stack[this.stack.length - 1];
        t.url = e;
    }
    function he() {
        let e = this.resume(), t = this.stack[this.stack.length - 1];
        t.title = e;
    }
    function ue() {
        o("inReference");
    }
    function fe() {
        o("referenceType", "collapsed");
    }
    function pe(e) {
        let t = this.resume(), n = this.stack[this.stack.length - 1];
        n.label = t, n.identifier = r2(this.sliceSerialize(e)).toLowerCase(), o("referenceType", "full");
    }
    function z(e) {
        o("characterReferenceType", e.type);
    }
    function ge(e) {
        let t = this.sliceSerialize(e), n = f("characterReferenceType"), i;
        n ? (i = t2(t, n === "characterReferenceMarkerNumeric" ? 10 : 16), o("characterReferenceType")) : i = n1(t);
        let g = this.stack.pop();
        g.value += i, g.position.end = S(e.end);
    }
    function me(e) {
        k.call(this, e);
        let t = this.stack[this.stack.length - 1];
        t.url = this.sliceSerialize(e);
    }
    function ke(e) {
        k.call(this, e);
        let t = this.stack[this.stack.length - 1];
        t.url = "mailto:" + this.sliceSerialize(e);
    }
    function xe() {
        return {
            type: "blockquote",
            children: []
        };
    }
    function D() {
        return {
            type: "code",
            lang: null,
            meta: null,
            value: ""
        };
    }
    function ye() {
        return {
            type: "inlineCode",
            value: ""
        };
    }
    function Se() {
        return {
            type: "definition",
            identifier: "",
            label: null,
            title: null,
            url: ""
        };
    }
    function be() {
        return {
            type: "emphasis",
            children: []
        };
    }
    function O() {
        return {
            type: "heading",
            depth: void 0,
            children: []
        };
    }
    function P() {
        return {
            type: "break"
        };
    }
    function M() {
        return {
            type: "html",
            value: ""
        };
    }
    function we() {
        return {
            type: "image",
            title: null,
            url: "",
            alt: null
        };
    }
    function V() {
        return {
            type: "link",
            title: null,
            url: "",
            children: []
        };
    }
    function Q(e) {
        return {
            type: "list",
            ordered: e.type === "listOrdered",
            start: null,
            spread: e._spread,
            children: []
        };
    }
    function Ie(e) {
        return {
            type: "listItem",
            spread: e._spread,
            checked: null,
            children: []
        };
    }
    function Te() {
        return {
            type: "paragraph",
            children: []
        };
    }
    function Ee() {
        return {
            type: "strong",
            children: []
        };
    }
    function Fe() {
        return {
            type: "text",
            value: ""
        };
    }
    function Be() {
        return {
            type: "thematicBreak"
        };
    }
}
function N(h, s) {
    let d = -1;
    for(; ++d < s.length;){
        let y = s[d];
        Array.isArray(y) ? N(h, y) : Ve(h, y);
    }
    return h;
}
function Ve(h, s) {
    let d;
    for(d in s)if (B1.call(s, d)) {
        let y = d === "canContainEols" || d === "transforms", o = (B1.call(h, d) ? h[d] : void 0) || (h[d] = y ? [] : {}), f = s[d];
        f && (y ? h[d] = [
            ...o,
            ...f
        ] : Object.assign(o, f));
    }
}
function q(h, s) {
    throw h ? new Error("Cannot close `" + h.type + "` (" + o1({
        start: h.start,
        end: h.end
    }) + "): a different token (`" + s.type + "`, " + o1({
        start: s.start,
        end: s.end
    }) + ") is open") : new Error("Cannot close document, a token (`" + s.type + "`, " + o1({
        start: s.start,
        end: s.end
    }) + ") is still open");
}
function g1(u) {
    let l = u || {}, i = l.now || {}, e = l.lineShift || 0, c = i.line || 1, o = i.column || 1;
    return {
        move: f,
        current: h,
        shift: s
    };
    function h() {
        return {
            now: {
                line: c,
                column: o
            },
            lineShift: e
        };
    }
    function s(n) {
        e += n;
    }
    function f(n = "") {
        let t = n.split(/\r?\n|\r/g), r = t[t.length - 1];
        return c += t.length - 1, o = t.length === 1 ? o + r.length : 1 + r.length + e, n;
    }
}
function k(d, n, i) {
    let a = n.indexStack, t = d.children || [], e = [], r = -1, h = i.before;
    a.push(-1);
    let c = g1(i);
    for(; ++r < t.length;){
        let f = t[r], o;
        if (a[a.length - 1] = r, r + 1 < t.length) {
            let l = n.handle.handlers[t[r + 1].type];
            l && l.peek && (l = l.peek), o = l ? l(t[r + 1], d, n, {
                before: "",
                after: "",
                ...c.current()
            }).charAt(0) : "";
        } else o = i.after;
        e.length > 0 && (h === "\r" || h === `
`) && f.type === "html" && (e[e.length - 1] = e[e.length - 1].replace(/(\r?\n|\r)$/, " "), h = " ", c = g1(i), c.move(e.join(""))), e.push(c.move(n.handle(f, d, n, {
            ...c.current(),
            before: h,
            after: o
        }))), h = e[e.length - 1].slice(-1);
    }
    return a.pop(), e.join("");
}
var m1 = {
    canContainEols: [
        "delete"
    ],
    enter: {
        strikethrough: s1
    },
    exit: {
        strikethrough: u2
    }
}, p2 = {
    unsafe: [
        {
            character: "~",
            inConstruct: "phrasing"
        }
    ],
    handlers: {
        delete: o2
    }
};
o2.peek = k1;
function s1(e) {
    this.enter({
        type: "delete",
        children: []
    }, e);
}
function u2(e) {
    this.exit(e);
}
function o2(e, f, n, i) {
    let r = g1(i), h = n.enter("emphasis"), t = r.move("~~");
    return t += k(e, n, {
        ...r.current(),
        before: t,
        after: "~"
    }), t += r.move("~~"), h(), t;
}
function k1() {
    return "~";
}
export { m1 as gfmStrikethroughFromMarkdown, p2 as gfmStrikethroughToMarkdown };
({
    enter: {
        strikethrough () {
            this.tag("<del>");
        }
    },
    exit: {
        strikethrough () {
            this.tag("</del>");
        }
    }
});
function x2(m = {}) {
    let l = m.singleTilde, p = {
        tokenize: S,
        resolveAll: y
    };
    return l == null && (l = !0), {
        text: {
            [126]: p
        },
        insideSpan: {
            null: [
                p
            ]
        },
        attentionMarkers: {
            null: [
                126
            ]
        }
    };
    function y(r, i) {
        let t = -1;
        for(; ++t < r.length;)if (r[t][0] === "enter" && r[t][1].type === "strikethroughSequenceTemporary" && r[t][1]._close) {
            let e = t;
            for(; e--;)if (r[e][0] === "exit" && r[e][1].type === "strikethroughSequenceTemporary" && r[e][1]._open && r[t][1].end.offset - r[t][1].start.offset === r[e][1].end.offset - r[e][1].start.offset) {
                r[t][1].type = "strikethroughSequence", r[e][1].type = "strikethroughSequence";
                let u = {
                    type: "strikethrough",
                    start: Object.assign({}, r[e][1].start),
                    end: Object.assign({}, r[t][1].end)
                }, h = {
                    type: "strikethroughText",
                    start: Object.assign({}, r[e][1].end),
                    end: Object.assign({}, r[t][1].start)
                }, n = [
                    [
                        "enter",
                        u,
                        i
                    ],
                    [
                        "enter",
                        r[e][1],
                        i
                    ],
                    [
                        "exit",
                        r[e][1],
                        i
                    ],
                    [
                        "enter",
                        h,
                        i
                    ]
                ];
                u1(n, n.length, 0, c1(i.parser.constructs.insideSpan.null, r.slice(e + 1, t), i)), u1(n, n.length, 0, [
                    [
                        "exit",
                        h,
                        i
                    ],
                    [
                        "enter",
                        r[t][1],
                        i
                    ],
                    [
                        "exit",
                        r[t][1],
                        i
                    ],
                    [
                        "exit",
                        u,
                        i
                    ]
                ]), u1(r, e - 1, t - e + 3, n), t = e + n.length - 2;
                break;
            }
        }
        for(t = -1; ++t < r.length;)r[t][1].type === "strikethroughSequenceTemporary" && (r[t][1].type = "data");
        return r;
    }
    function S(r, i, t) {
        let e = this.previous, u = this.events, h = 0;
        return n;
        function n(o) {
            return e === 126 && u[u.length - 1][1].type !== "characterEscape" ? t(o) : (r.enter("strikethroughSequenceTemporary"), f(o));
        }
        function f(o) {
            let s = a3(e);
            if (o === 126) return h > 1 ? t(o) : (r.consume(o), h++, f);
            if (h < 2 && !l) return t(o);
            let k = r.exit("strikethroughSequenceTemporary"), g = a3(o);
            return k._open = !g || g === 2 && Boolean(s), k._close = !s || s === 2 && Boolean(g), i(o);
        }
    }
}
globalThis.document = {
    createElement: (...data)=>{
        return new class {
            set innerHTML(data) {
                this.textContent = data;
            }
            textContent = '';
        }();
    }
};
document.createElement();
export { x2 as gfmStrikethrough };
export { Pe as mdast };
