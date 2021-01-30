var exports = {
};
exports = toString;
function toString(node) {
    return node && (node.value || node.alt || node.title || "children" in node && all(node.children) || "length" in node && all(node)) || "";
}
function all(values) {
    var result = [];
    var index = -1;
    while((++index) < values.length){
        result[index] = toString(values[index]);
    }
    return result.join("");
}
var exports$1 = exports;
var exports1 = {
};
var assign = Object.assign;
exports1 = assign;
var _assign = exports1;
var exports2 = {
};
var own = {
}.hasOwnProperty;
exports2 = own;
var _hasOwnProperty = exports2;
var exports3 = {
};
function normalizeIdentifier(value) {
    return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
exports3 = normalizeIdentifier;
var _normalizeIdentifier = exports3;
var exports4 = {
};
var fromCharCode = String.fromCharCode;
exports4 = fromCharCode;
var _fromCharCode = exports4;
var exports5 = {
};
var fromCharCode1 = _fromCharCode;
function safeFromInt(value, base) {
    var code = parseInt(value, base);
    if (code < 9 || code === 11 || code > 13 && code < 32 || code > 126 && code < 160 || code > 55295 && code < 57344 || code > 64975 && code < 65008 || (code & 65535) === 65535 || (code & 65535) === 65534 || code > 1114111) {
        return "\uFFFD";
    }
    return fromCharCode1(code);
}
exports5 = safeFromInt;
var _safeFromInt = exports5;
var exports6 = {
};
function miniflat(value) {
    return value === null || value === undefined ? [] : "length" in value ? value : [
        value
    ];
}
exports6 = miniflat;
var _miniflat = exports6;
var exports$11 = {
};
var hasOwnProperty = _hasOwnProperty;
var exports7 = {
};
var splice = [].splice;
exports7 = splice;
var _splice = exports7;
var exports$12 = {
};
var splice$1 = _splice;
function chunkedSplice(list, start, remove, items) {
    var end = list.length;
    var chunkStart = 0;
    var parameters;
    if (start < 0) {
        start = -start > end ? 0 : end + start;
    } else {
        start = start > end ? end : start;
    }
    remove = remove > 0 ? remove : 0;
    if (items.length < 10000) {
        parameters = Array.from(items);
        parameters.unshift(start, remove);
        splice$1.apply(list, parameters);
    } else {
        if (remove) splice$1.apply(list, [
            start,
            remove
        ]);
        while(chunkStart < items.length){
            parameters = items.slice(chunkStart, chunkStart + 10000);
            parameters.unshift(start, 0);
            splice$1.apply(list, parameters);
            chunkStart += 10000;
            start += 10000;
        }
    }
}
exports$12 = chunkedSplice;
var _chunkedSplice = exports$12;
var chunkedSplice1 = _chunkedSplice;
var miniflat$1 = _miniflat;
function combineExtensions(extensions) {
    var all1 = {
    };
    var index = -1;
    while((++index) < extensions.length){
        extension1(all1, extensions[index]);
    }
    return all1;
}
function extension1(all1, extension1) {
    var hook;
    var left;
    var right;
    var code;
    for(hook in extension1){
        left = hasOwnProperty.call(all1, hook) ? all1[hook] : all1[hook] = {
        };
        right = extension1[hook];
        for(code in right){
            left[code] = constructs(miniflat$1(right[code]), hasOwnProperty.call(left, code) ? left[code] : []);
        }
    }
}
function constructs(list, existing) {
    var index = -1;
    var before = [];
    while((++index) < list.length){
        (list[index].add === "after" ? existing : before).push(list[index]);
    }
    chunkedSplice1(existing, 0, 0, before);
    return existing;
}
exports$11 = combineExtensions;
var _combineExtensions = exports$11;
var exports8 = {
};
var exports9 = {
};
var fromCharCode2 = _fromCharCode;
function regexCheck(regex) {
    return check;
    function check(code) {
        return regex.test(fromCharCode2(code));
    }
}
exports9 = regexCheck;
var _regexCheck = exports9;
var regexCheck1 = _regexCheck;
var asciiAlphanumeric = regexCheck1(/[\dA-Za-z]/);
exports8 = asciiAlphanumeric;
var _asciiAlphanumeric = exports8;
var exports10 = {
};
var exports11 = {
};
function markdownLineEnding(code) {
    return code < -2;
}
exports11 = markdownLineEnding;
var _markdownLineEnding = exports11;
var markdownLineEnding1 = _markdownLineEnding;
var exports12 = {
};
var exports13 = {
};
function markdownSpace(code) {
    return code === -2 || code === -1 || code === 32;
}
exports13 = markdownSpace;
var _markdownSpace = exports13;
var markdownSpace1 = _markdownSpace;
function spaceFactory(effects, ok, type, max) {
    var limit = max ? max - 1 : Infinity;
    var size = 0;
    return start;
    function start(code) {
        if (markdownSpace1(code)) {
            effects.enter(type);
            return prefix(code);
        }
        return ok(code);
    }
    function prefix(code) {
        if (markdownSpace1(code) && (size++) < limit) {
            effects.consume(code);
            return prefix;
        }
        effects.exit(type);
        return ok(code);
    }
}
exports12 = spaceFactory;
var _factorySpace = exports12;
var factorySpace = _factorySpace;
var partialBlankLine = {
    tokenize: tokenizePartialBlankLine,
    partial: true
};
function tokenizePartialBlankLine(effects, ok, nok) {
    return factorySpace(effects, afterWhitespace, "linePrefix");
    function afterWhitespace(code) {
        return code === null || markdownLineEnding1(code) ? ok(code) : nok(code);
    }
}
exports10 = partialBlankLine;
var _partialBlankLine = exports10;
var exports14 = {
};
function sizeChunks(chunks) {
    var index = -1;
    var size = 0;
    while((++index) < chunks.length){
        size += typeof chunks[index] === "string" ? chunks[index].length : 1;
    }
    return size;
}
exports14 = sizeChunks;
var _sizeChunks = exports14;
var exports$13 = {
};
var sizeChunks$1 = _sizeChunks;
function prefixSize(events, type) {
    var tail = events[events.length - 1];
    if (!tail || tail[1].type !== type) return 0;
    return sizeChunks$1(tail[2].sliceStream(tail[1]));
}
exports$13 = prefixSize;
var _prefixSize = exports$13;
var exports15 = {
};
var assign1 = _assign;
var chunkedSplice2 = _chunkedSplice;
var exports16 = {
};
var assign2 = _assign;
function shallow(object) {
    return assign2({
    }, object);
}
exports16 = shallow;
var _shallow = exports16;
var shallow1 = _shallow;
function subtokenize(events) {
    var jumps = {
    };
    var index = -1;
    var event;
    var lineIndex;
    var otherIndex;
    var otherEvent;
    var parameters;
    var subevents;
    var more;
    while((++index) < events.length){
        while(index in jumps){
            index = jumps[index];
        }
        event = events[index];
        if (index && event[1].type === "chunkFlow" && events[index - 1][1].type === "listItemPrefix") {
            subevents = event[1]._tokenizer.events;
            otherIndex = 0;
            if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
                otherIndex += 2;
            }
            if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
                while((++otherIndex) < subevents.length){
                    if (subevents[otherIndex][1].type === "content") {
                        break;
                    }
                    if (subevents[otherIndex][1].type === "chunkText") {
                        subevents[otherIndex][1].isInFirstContentOfListItem = true;
                        otherIndex++;
                    }
                }
            }
        }
        if (event[0] === "enter") {
            if (event[1].contentType) {
                assign1(jumps, subcontent(events, index));
                index = jumps[index];
                more = true;
            }
        } else if (event[1]._container || event[1]._movePreviousLineEndings) {
            otherIndex = index;
            lineIndex = undefined;
            while(otherIndex--){
                otherEvent = events[otherIndex];
                if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
                    if (otherEvent[0] === "enter") {
                        if (lineIndex) {
                            events[lineIndex][1].type = "lineEndingBlank";
                        }
                        otherEvent[1].type = "lineEnding";
                        lineIndex = otherIndex;
                    }
                } else {
                    break;
                }
            }
            if (lineIndex) {
                event[1].end = shallow1(events[lineIndex][1].start);
                parameters = events.slice(lineIndex, index);
                parameters.unshift(event);
                chunkedSplice2(events, lineIndex, index - lineIndex + 1, parameters);
            }
        }
    }
    return !more;
}
function subcontent(events, eventIndex) {
    var token = events[eventIndex][1];
    var context = events[eventIndex][2];
    var startPosition = eventIndex - 1;
    var startPositions = [];
    var tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
    var childEvents = tokenizer.events;
    var jumps = [];
    var gaps = {
    };
    var stream;
    var previous;
    var index;
    var entered;
    var end;
    var adjust;
    while(token){
        while(events[++startPosition][1] !== token){
        }
        startPositions.push(startPosition);
        if (!token._tokenizer) {
            stream = context.sliceStream(token);
            if (!token.next) {
                stream.push(null);
            }
            if (previous) {
                tokenizer.defineSkip(token.start);
            }
            if (token.isInFirstContentOfListItem) {
                tokenizer._gfmTasklistFirstContentOfListItem = true;
            }
            tokenizer.write(stream);
            if (token.isInFirstContentOfListItem) {
                tokenizer._gfmTasklistFirstContentOfListItem = undefined;
            }
        }
        previous = token;
        token = token.next;
    }
    token = previous;
    index = childEvents.length;
    while(index--){
        if (childEvents[index][0] === "enter") {
            entered = true;
        } else if (entered && childEvents[index][1].type === childEvents[index - 1][1].type && childEvents[index][1].start.line !== childEvents[index][1].end.line) {
            add(childEvents.slice(index + 1, end));
            token._tokenizer = token.next = undefined;
            token = token.previous;
            end = index + 1;
        }
    }
    tokenizer.events = token._tokenizer = token.next = undefined;
    add(childEvents.slice(0, end));
    index = -1;
    adjust = 0;
    while((++index) < jumps.length){
        gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
        adjust += jumps[index][1] - jumps[index][0] - 1;
    }
    return gaps;
    function add(slice) {
        var start = startPositions.pop();
        jumps.unshift([
            start,
            start + slice.length - 1
        ]);
        chunkedSplice2(events, start, 2, slice);
    }
}
exports15 = subtokenize;
var _subtokenize = exports15;
var exports17 = {
};
function resolveAll(constructs1, events, context) {
    var called = [];
    var index = -1;
    var resolve;
    while((++index) < constructs1.length){
        resolve = constructs1[index].resolveAll;
        if (resolve && called.indexOf(resolve) < 0) {
            events = resolve(events, context);
            called.push(resolve);
        }
    }
    return events;
}
exports17 = resolveAll;
var _resolveAll = exports17;
var exports18 = {
};
function markdownLineEndingOrSpace(code) {
    return code < 0 || code === 32;
}
exports18 = markdownLineEndingOrSpace;
var _markdownLineEndingOrSpace = exports18;
var exports19 = {
};
var regexCheck2 = _regexCheck;
var unicodeWhitespace = regexCheck2(/\s/);
exports19 = unicodeWhitespace;
var _unicodeWhitespace = exports19;
var exports20 = {
};
var unicodePunctuation = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
exports20 = unicodePunctuation;
var _unicodePunctuationRegex = exports20;
var exports$14 = {
};
var regexCheck3 = _regexCheck;
var unicodePunctuationRegex = _unicodePunctuationRegex;
var unicodePunctuation$1 = regexCheck3(unicodePunctuationRegex);
exports$14 = unicodePunctuation$1;
var _unicodePunctuation = exports$14;
var exports$2 = {
};
var markdownLineEndingOrSpace1 = _markdownLineEndingOrSpace;
var unicodePunctuation$2 = _unicodePunctuation;
var unicodeWhitespace1 = _unicodeWhitespace;
function classifyCharacter(code) {
    if (code === null || markdownLineEndingOrSpace1(code) || unicodeWhitespace1(code)) {
        return 1;
    }
    if (unicodePunctuation$2(code)) {
        return 2;
    }
}
exports$2 = classifyCharacter;
var _classifyCharacter = exports$2;
var exports21 = {
};
var regexCheck4 = _regexCheck;
var asciiAlpha = regexCheck4(/[A-Za-z]/);
exports21 = asciiAlpha;
var _asciiAlpha = exports21;
var exports22 = {
};
var markdownLineEnding2 = _markdownLineEnding;
var markdownSpace2 = _markdownSpace;
var factorySpace1 = _factorySpace;
function whitespaceFactory(effects, ok) {
    var seen;
    return start;
    function start(code) {
        if (markdownLineEnding2(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            seen = true;
            return start;
        }
        if (markdownSpace2(code)) {
            return factorySpace1(effects, start, seen ? "linePrefix" : "lineSuffix")(code);
        }
        return ok(code);
    }
}
exports22 = whitespaceFactory;
var _factoryWhitespace = exports22;
var exports23 = {
};
var chunkedSplice3 = _chunkedSplice;
function chunkedPush(list, items) {
    if (list.length) {
        chunkedSplice3(list, list.length, 0, items);
        return list;
    }
    return items;
}
exports23 = chunkedPush;
var _chunkedPush = exports23;
var exports$15 = {
};
Object.defineProperty(exports$15, "__esModule", {
    value: true
});
var markdownLineEnding3 = _markdownLineEnding;
var factorySpace2 = _factorySpace;
var tokenize = initializeContent;
function initializeContent(effects) {
    var contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
    var previous;
    return contentStart;
    function afterContentStartConstruct(code) {
        if (code === null) {
            effects.consume(code);
            return;
        }
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace2(effects, contentStart, "linePrefix");
    }
    function paragraphInitial(code) {
        effects.enter("paragraph");
        return lineStart(code);
    }
    function lineStart(code) {
        var token = effects.enter("chunkText", {
            contentType: "text",
            previous: previous
        });
        if (previous) {
            previous.next = token;
        }
        previous = token;
        return data(code);
    }
    function data(code) {
        if (code === null) {
            effects.exit("chunkText");
            effects.exit("paragraph");
            effects.consume(code);
            return;
        }
        if (markdownLineEnding3(code)) {
            effects.consume(code);
            effects.exit("chunkText");
            return lineStart;
        }
        effects.consume(code);
        return data;
    }
}
exports$15.tokenize = tokenize;
var exports$21 = {
};
Object.defineProperty(exports$21, "__esModule", {
    value: true
});
var markdownLineEnding$1 = _markdownLineEnding;
var factorySpace$1 = _factorySpace;
var partialBlankLine1 = _partialBlankLine;
var tokenize$1 = initializeDocument;
var containerConstruct = {
    tokenize: tokenizeContainer
};
var lazyFlowConstruct = {
    tokenize: tokenizeLazyFlow
};
function initializeDocument(effects) {
    var self = this;
    var stack = [];
    var continued = 0;
    var inspectConstruct = {
        tokenize: tokenizeInspect,
        partial: true
    };
    var inspectResult;
    var childFlow;
    var childToken;
    return start;
    function start(code) {
        if (continued < stack.length) {
            self.containerState = stack[continued][1];
            return effects.attempt(stack[continued][0].continuation, documentContinue, documentContinued)(code);
        }
        return documentContinued(code);
    }
    function documentContinue(code) {
        continued++;
        return start(code);
    }
    function documentContinued(code) {
        if (inspectResult && inspectResult.flowContinue) {
            return flowStart(code);
        }
        self.interrupt = childFlow && childFlow.currentConstruct && childFlow.currentConstruct.interruptible;
        self.containerState = {
        };
        return effects.attempt(containerConstruct, containerContinue, flowStart)(code);
    }
    function containerContinue(code) {
        stack.push([
            self.currentConstruct,
            self.containerState
        ]);
        self.containerState = undefined;
        return documentContinued(code);
    }
    function flowStart(code) {
        if (code === null) {
            exitContainers(0, true);
            effects.consume(code);
            return;
        }
        childFlow = childFlow || self.parser.flow(self.now());
        effects.enter("chunkFlow", {
            contentType: "flow",
            previous: childToken,
            _tokenizer: childFlow
        });
        return flowContinue(code);
    }
    function flowContinue(code) {
        if (code === null) {
            continueFlow(effects.exit("chunkFlow"));
            return flowStart(code);
        }
        if (markdownLineEnding$1(code)) {
            effects.consume(code);
            continueFlow(effects.exit("chunkFlow"));
            return effects.check(inspectConstruct, documentAfterPeek);
        }
        effects.consume(code);
        return flowContinue;
    }
    function documentAfterPeek(code) {
        exitContainers(inspectResult.continued, inspectResult && inspectResult.flowEnd);
        continued = 0;
        return start(code);
    }
    function continueFlow(token) {
        if (childToken) childToken.next = token;
        childToken = token;
        childFlow.lazy = inspectResult && inspectResult.lazy;
        childFlow.defineSkip(token.start);
        childFlow.write(self.sliceStream(token));
    }
    function exitContainers(size, end) {
        var index = stack.length;
        if (childFlow && end) {
            childFlow.write([
                null
            ]);
            childToken = childFlow = undefined;
        }
        while((index--) > size){
            self.containerState = stack[index][1];
            stack[index][0].exit.call(self, effects);
        }
        stack.length = size;
    }
    function tokenizeInspect(effects1, ok) {
        var subcontinued = 0;
        inspectResult = {
        };
        return inspectStart;
        function inspectStart(code) {
            if (subcontinued < stack.length) {
                self.containerState = stack[subcontinued][1];
                return effects1.attempt(stack[subcontinued][0].continuation, inspectContinue, inspectLess)(code);
            }
            if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
                inspectResult.flowContinue = true;
                return inspectDone(code);
            }
            self.interrupt = childFlow.currentConstruct && childFlow.currentConstruct.interruptible;
            self.containerState = {
            };
            return effects1.attempt(containerConstruct, inspectFlowEnd, inspectDone)(code);
        }
        function inspectContinue(code) {
            subcontinued++;
            return self.containerState._closeFlow ? inspectFlowEnd(code) : inspectStart(code);
        }
        function inspectLess(code) {
            if (childFlow.currentConstruct && childFlow.currentConstruct.lazy) {
                self.containerState = {
                };
                return effects1.attempt(containerConstruct, inspectFlowEnd, effects1.attempt(lazyFlowConstruct, inspectFlowEnd, effects1.check(partialBlankLine1, inspectFlowEnd, inspectLazy)))(code);
            }
            return inspectFlowEnd(code);
        }
        function inspectLazy(code) {
            subcontinued = stack.length;
            inspectResult.lazy = true;
            inspectResult.flowContinue = true;
            return inspectDone(code);
        }
        function inspectFlowEnd(code) {
            inspectResult.flowEnd = true;
            return inspectDone(code);
        }
        function inspectDone(code) {
            inspectResult.continued = subcontinued;
            self.interrupt = self.containerState = undefined;
            return ok(code);
        }
    }
}
function tokenizeContainer(effects, ok, nok) {
    return factorySpace$1(effects, effects.attempt(this.parser.constructs.document, ok, nok), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? undefined : 4);
}
function tokenizeLazyFlow(effects, ok, nok) {
    return factorySpace$1(effects, effects.lazy(this.parser.constructs.flow, ok, nok), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? undefined : 4);
}
exports$21.tokenize = tokenize$1;
var exports$3 = {
};
var markdownLineEnding$2 = _markdownLineEnding;
var factorySpace$2 = _factorySpace;
var prefixSize1 = _prefixSize;
var subtokenize1 = _subtokenize;
var content1 = {
    tokenize: tokenizeContent,
    resolve: resolveContent,
    interruptible: true,
    lazy: true
};
var continuationConstruct = {
    tokenize: tokenizeContinuation,
    partial: true
};
function resolveContent(events) {
    subtokenize1(events);
    return events;
}
function tokenizeContent(effects, ok) {
    var previous;
    return start;
    function start(code) {
        effects.enter("content");
        previous = effects.enter("chunkContent", {
            contentType: "content"
        });
        return data(code);
    }
    function data(code) {
        if (code === null) {
            return contentEnd(code);
        }
        if (markdownLineEnding$2(code)) {
            return effects.check(continuationConstruct, contentContinue, contentEnd)(code);
        }
        effects.consume(code);
        return data;
    }
    function contentEnd(code) {
        effects.exit("chunkContent");
        effects.exit("content");
        return ok(code);
    }
    function contentContinue(code) {
        effects.consume(code);
        effects.exit("chunkContent");
        previous = previous.next = effects.enter("chunkContent", {
            contentType: "content",
            previous: previous
        });
        return data;
    }
}
function tokenizeContinuation(effects, ok, nok) {
    var self = this;
    return startLookahead;
    function startLookahead(code) {
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace$2(effects, prefixed, "linePrefix");
    }
    function prefixed(code) {
        if (code === null || markdownLineEnding$2(code)) {
            return nok(code);
        }
        if (self.parser.constructs.disable.null.indexOf("codeIndented") > -1 || prefixSize1(self.events, "linePrefix") < 4) {
            return effects.interrupt(self.parser.constructs.flow, nok, ok)(code);
        }
        return ok(code);
    }
}
exports$3 = content1;
var _content = exports$3;
var exports$4 = {
};
Object.defineProperty(exports$4, "__esModule", {
    value: true
});
var factorySpace$3 = _factorySpace;
var partialBlankLine$1 = _partialBlankLine;
var content$1 = _content;
var tokenize$2 = initializeFlow;
function initializeFlow(effects) {
    var self = this;
    var initial = effects.attempt(partialBlankLine$1, atBlankEnding, effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace$3(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content$1, afterConstruct)), "linePrefix")));
    return initial;
    function atBlankEnding(code) {
        if (code === null) {
            effects.consume(code);
            return;
        }
        effects.enter("lineEndingBlank");
        effects.consume(code);
        effects.exit("lineEndingBlank");
        self.currentConstruct = undefined;
        return initial;
    }
    function afterConstruct(code) {
        if (code === null) {
            effects.consume(code);
            return;
        }
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        self.currentConstruct = undefined;
        return initial;
    }
}
exports$4.tokenize = tokenize$2;
var exports$5 = {
};
Object.defineProperty(exports$5, "__esModule", {
    value: true
});
var assign3 = _assign;
var shallow2 = _shallow;
var text1 = initializeFactory("text");
var string = initializeFactory("string");
var resolver = {
    resolveAll: createResolver()
};
function initializeFactory(field) {
    return {
        tokenize: initializeText,
        resolveAll: createResolver(field === "text" ? resolveAllLineSuffixes : undefined)
    };
    function initializeText(effects) {
        var self = this;
        var constructs1 = this.parser.constructs[field];
        var text1 = effects.attempt(constructs1, start, notText);
        return start;
        function start(code) {
            return atBreak(code) ? text1(code) : notText(code);
        }
        function notText(code) {
            if (code === null) {
                effects.consume(code);
                return;
            }
            effects.enter("data");
            effects.consume(code);
            return data;
        }
        function data(code) {
            if (atBreak(code)) {
                effects.exit("data");
                return text1(code);
            }
            effects.consume(code);
            return data;
        }
        function atBreak(code) {
            var list = constructs1[code];
            var index = -1;
            if (code === null) {
                return true;
            }
            if (list) {
                while((++index) < list.length){
                    if (!list[index].previous || list[index].previous.call(self, self.previous)) {
                        return true;
                    }
                }
            }
        }
    }
}
function createResolver(extraResolver) {
    return resolveAllText;
    function resolveAllText(events, context) {
        var index = -1;
        var enter;
        while((++index) <= events.length){
            if (enter === undefined) {
                if (events[index] && events[index][1].type === "data") {
                    enter = index;
                    index++;
                }
            } else if (!events[index] || events[index][1].type !== "data") {
                if (index !== enter + 2) {
                    events[enter][1].end = events[index - 1][1].end;
                    events.splice(enter + 2, index - enter - 2);
                    index = enter + 2;
                }
                enter = undefined;
            }
        }
        return extraResolver ? extraResolver(events, context) : events;
    }
}
function resolveAllLineSuffixes(events, context) {
    var eventIndex = -1;
    var chunks;
    var data;
    var chunk;
    var index;
    var bufferIndex;
    var size;
    var tabs;
    var token;
    while((++eventIndex) <= events.length){
        if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
            data = events[eventIndex - 1][1];
            chunks = context.sliceStream(data);
            index = chunks.length;
            bufferIndex = -1;
            size = 0;
            tabs = undefined;
            while(index--){
                chunk = chunks[index];
                if (typeof chunk === "string") {
                    bufferIndex = chunk.length;
                    while(chunk.charCodeAt(bufferIndex - 1) === 32){
                        size++;
                        bufferIndex--;
                    }
                    if (bufferIndex) break;
                    bufferIndex = -1;
                } else if (chunk === -2) {
                    tabs = true;
                    size++;
                } else if (chunk === -1) ;
                else {
                    index++;
                    break;
                }
            }
            if (size) {
                token = {
                    type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
                    start: {
                        line: data.end.line,
                        column: data.end.column - size,
                        offset: data.end.offset - size,
                        _index: data.start._index + index,
                        _bufferIndex: index ? bufferIndex : data.start._bufferIndex + bufferIndex
                    },
                    end: shallow2(data.end)
                };
                data.end = shallow2(token.start);
                if (data.start.offset === data.end.offset) {
                    assign3(data, token);
                } else {
                    events.splice(eventIndex, 0, [
                        "enter",
                        token,
                        context
                    ], [
                        "exit",
                        token,
                        context
                    ]);
                    eventIndex += 2;
                }
            }
            eventIndex++;
        }
    }
    return events;
}
exports$5.resolver = resolver;
exports$5.string = string;
exports$5.text = text1;
var exports$6 = {
};
var fromCharCode3 = _fromCharCode;
function serializeChunks(chunks) {
    var index = -1;
    var result = [];
    var chunk;
    var value;
    var atTab;
    while((++index) < chunks.length){
        chunk = chunks[index];
        if (typeof chunk === "string") {
            value = chunk;
        } else if (chunk === -5) {
            value = "\r";
        } else if (chunk === -4) {
            value = "\n";
        } else if (chunk === -3) {
            value = "\r" + "\n";
        } else if (chunk === -2) {
            value = "\t";
        } else if (chunk === -1) {
            if (atTab) continue;
            value = " ";
        } else {
            value = fromCharCode3(chunk);
        }
        atTab = chunk === -2;
        result.push(value);
    }
    return result.join("");
}
exports$6 = serializeChunks;
var _serializeChunks = exports$6;
var exports$7 = {
};
function sliceChunks(chunks, token) {
    var startIndex = token.start._index;
    var startBufferIndex = token.start._bufferIndex;
    var endIndex = token.end._index;
    var endBufferIndex = token.end._bufferIndex;
    var view;
    if (startIndex === endIndex) {
        view = [
            chunks[startIndex].slice(startBufferIndex, endBufferIndex)
        ];
    } else {
        view = chunks.slice(startIndex, endIndex);
        if (startBufferIndex > -1) {
            view[0] = view[0].slice(startBufferIndex);
        }
        if (endBufferIndex > 0) {
            view.push(chunks[endIndex].slice(0, endBufferIndex));
        }
    }
    return view;
}
exports$7 = sliceChunks;
var _sliceChunks = exports$7;
var exports$8 = {
};
var assign$1 = _assign;
var chunkedSplice$1 = _chunkedSplice;
var chunkedPush$1 = _chunkedPush;
var miniflat1 = _miniflat;
var markdownLineEnding$3 = _markdownLineEnding;
var shallow$1 = _shallow;
var resolveAll1 = _resolveAll;
var serializeChunks$1 = _serializeChunks;
var sliceChunks$1 = _sliceChunks;
function createTokenizer(parser, initialize, from) {
    var point = from ? shallow$1(from) : {
        line: 1,
        column: 1,
        offset: 0
    };
    var columnStart = {
    };
    var resolveAllConstructs = [];
    var chunks = [];
    var stack = [];
    var effects = {
        consume: consume,
        enter: enter,
        exit: exit,
        attempt: constructFactory(onsuccessfulconstruct),
        check: constructFactory(onsuccessfulcheck),
        interrupt: constructFactory(onsuccessfulcheck, {
            interrupt: true
        }),
        lazy: constructFactory(onsuccessfulcheck, {
            lazy: true
        })
    };
    var context = {
        previous: null,
        events: [],
        parser: parser,
        sliceStream: sliceStream,
        sliceSerialize: sliceSerialize,
        now: now,
        defineSkip: skip,
        write: write
    };
    var state = initialize.tokenize.call(context, effects);
    if (initialize.resolveAll) {
        resolveAllConstructs.push(initialize);
    }
    point._index = 0;
    point._bufferIndex = -1;
    return context;
    function write(slice) {
        chunks = chunkedPush$1(chunks, slice);
        main();
        if (chunks[chunks.length - 1] !== null) {
            return [];
        }
        addResult(initialize, 0);
        context.events = resolveAll1(resolveAllConstructs, context.events, context);
        return context.events;
    }
    function sliceSerialize(token) {
        return serializeChunks$1(sliceStream(token));
    }
    function sliceStream(token) {
        return sliceChunks$1(chunks, token);
    }
    function now() {
        return shallow$1(point);
    }
    function skip(value) {
        columnStart[value.line] = value.column;
        accountForPotentialSkip();
    }
    function main() {
        var chunkIndex;
        var chunk;
        while(point._index < chunks.length){
            chunk = chunks[point._index];
            if (typeof chunk === "string") {
                chunkIndex = point._index;
                if (point._bufferIndex < 0) {
                    point._bufferIndex = 0;
                }
                while(point._index === chunkIndex && point._bufferIndex < chunk.length){
                    go(chunk.charCodeAt(point._bufferIndex));
                }
            } else {
                go(chunk);
            }
        }
    }
    function go(code) {
        state = state(code);
    }
    function consume(code) {
        if (markdownLineEnding$3(code)) {
            point.line++;
            point.column = 1;
            point.offset += code === -3 ? 2 : 1;
            accountForPotentialSkip();
        } else if (code !== -1) {
            point.column++;
            point.offset++;
        }
        if (point._bufferIndex < 0) {
            point._index++;
        } else {
            point._bufferIndex++;
            if (point._bufferIndex === chunks[point._index].length) {
                point._bufferIndex = -1;
                point._index++;
            }
        }
        context.previous = code;
    }
    function enter(type, fields) {
        var token = fields || {
        };
        token.type = type;
        token.start = now();
        context.events.push([
            "enter",
            token,
            context
        ]);
        stack.push(token);
        return token;
    }
    function exit(type) {
        var token = stack.pop();
        token.end = now();
        context.events.push([
            "exit",
            token,
            context
        ]);
        return token;
    }
    function onsuccessfulconstruct(construct, info) {
        addResult(construct, info.from);
    }
    function onsuccessfulcheck(construct, info) {
        info.restore();
    }
    function constructFactory(onreturn, fields) {
        return hook;
        function hook(constructs1, returnState, bogusState) {
            var listOfConstructs;
            var constructIndex;
            var currentConstruct;
            var info;
            return constructs1.tokenize || "length" in constructs1 ? handleListOfConstructs(miniflat1(constructs1)) : handleMapOfConstructs;
            function handleMapOfConstructs(code) {
                if (code in constructs1 || null in constructs1) {
                    return handleListOfConstructs(constructs1.null ? miniflat1(constructs1[code]).concat(miniflat1(constructs1.null)) : constructs1[code])(code);
                }
                return bogusState(code);
            }
            function handleListOfConstructs(list) {
                listOfConstructs = list;
                constructIndex = 0;
                return handleConstruct(list[constructIndex]);
            }
            function handleConstruct(construct) {
                return start;
                function start(code) {
                    info = store();
                    currentConstruct = construct;
                    if (!construct.partial) {
                        context.currentConstruct = construct;
                    }
                    if (construct.name && context.parser.constructs.disable.null.indexOf(construct.name) > -1) {
                        return nok();
                    }
                    return construct.tokenize.call(fields ? assign$1({
                    }, context, fields) : context, effects, ok, nok)(code);
                }
            }
            function ok(code) {
                onreturn(currentConstruct, info);
                return returnState;
            }
            function nok(code) {
                info.restore();
                if ((++constructIndex) < listOfConstructs.length) {
                    return handleConstruct(listOfConstructs[constructIndex]);
                }
                return bogusState;
            }
        }
    }
    function addResult(construct, from1) {
        if (construct.resolveAll && resolveAllConstructs.indexOf(construct) < 0) {
            resolveAllConstructs.push(construct);
        }
        if (construct.resolve) {
            chunkedSplice$1(context.events, from1, context.events.length - from1, construct.resolve(context.events.slice(from1), context));
        }
        if (construct.resolveTo) {
            context.events = construct.resolveTo(context.events, context);
        }
    }
    function store() {
        var startPoint = now();
        var startPrevious = context.previous;
        var startCurrentConstruct = context.currentConstruct;
        var startEventsIndex = context.events.length;
        var startStack = Array.from(stack);
        return {
            restore: restore,
            from: startEventsIndex
        };
        function restore() {
            point = startPoint;
            context.previous = startPrevious;
            context.currentConstruct = startCurrentConstruct;
            context.events.length = startEventsIndex;
            stack = startStack;
            accountForPotentialSkip();
        }
    }
    function accountForPotentialSkip() {
        if (point.line in columnStart && point.column < 2) {
            point.column = columnStart[point.line];
            point.offset += columnStart[point.line] - 1;
        }
    }
}
exports$8 = createTokenizer;
var _createTokenizer = exports$8;
var exports$9 = {
};
function movePoint(point, offset) {
    point.column += offset;
    point.offset += offset;
    point._bufferIndex += offset;
    return point;
}
exports$9 = movePoint;
var _movePoint = exports$9;
var exports$a = {
};
var chunkedSplice$2 = _chunkedSplice;
var chunkedPush$2 = _chunkedPush;
var shallow$2 = _shallow;
var resolveAll$1 = _resolveAll;
var classifyCharacter1 = _classifyCharacter;
var movePoint$1 = _movePoint;
var attention = {
    name: "attention",
    tokenize: tokenizeAttention,
    resolveAll: resolveAllAttention
};
function resolveAllAttention(events, context) {
    var index = -1;
    var open;
    var group;
    var text1;
    var openingSequence;
    var closingSequence;
    var use;
    var nextEvents;
    var offset;
    while((++index) < events.length){
        if (events[index][0] === "enter" && events[index][1].type === "attentionSequence" && events[index][1]._close) {
            open = index;
            while(open--){
                if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index][1]).charCodeAt(0)) {
                    if ((events[open][1]._close || events[index][1]._open) && (events[index][1].end.offset - events[index][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index][1].end.offset - events[index][1].start.offset) % 3)) {
                        continue;
                    }
                    use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index][1].end.offset - events[index][1].start.offset > 1 ? 2 : 1;
                    openingSequence = {
                        type: use > 1 ? "strongSequence" : "emphasisSequence",
                        start: movePoint$1(shallow$2(events[open][1].end), -use),
                        end: shallow$2(events[open][1].end)
                    };
                    closingSequence = {
                        type: use > 1 ? "strongSequence" : "emphasisSequence",
                        start: shallow$2(events[index][1].start),
                        end: movePoint$1(shallow$2(events[index][1].start), use)
                    };
                    text1 = {
                        type: use > 1 ? "strongText" : "emphasisText",
                        start: shallow$2(events[open][1].end),
                        end: shallow$2(events[index][1].start)
                    };
                    group = {
                        type: use > 1 ? "strong" : "emphasis",
                        start: shallow$2(openingSequence.start),
                        end: shallow$2(closingSequence.end)
                    };
                    events[open][1].end = shallow$2(openingSequence.start);
                    events[index][1].start = shallow$2(closingSequence.end);
                    nextEvents = [];
                    if (events[open][1].end.offset - events[open][1].start.offset) {
                        nextEvents = chunkedPush$2(nextEvents, [
                            [
                                "enter",
                                events[open][1],
                                context
                            ],
                            [
                                "exit",
                                events[open][1],
                                context
                            ]
                        ]);
                    }
                    nextEvents = chunkedPush$2(nextEvents, [
                        [
                            "enter",
                            group,
                            context
                        ],
                        [
                            "enter",
                            openingSequence,
                            context
                        ],
                        [
                            "exit",
                            openingSequence,
                            context
                        ],
                        [
                            "enter",
                            text1,
                            context
                        ]
                    ]);
                    nextEvents = chunkedPush$2(nextEvents, resolveAll$1(context.parser.constructs.insideSpan.null, events.slice(open + 1, index), context));
                    nextEvents = chunkedPush$2(nextEvents, [
                        [
                            "exit",
                            text1,
                            context
                        ],
                        [
                            "enter",
                            closingSequence,
                            context
                        ],
                        [
                            "exit",
                            closingSequence,
                            context
                        ],
                        [
                            "exit",
                            group,
                            context
                        ]
                    ]);
                    if (events[index][1].end.offset - events[index][1].start.offset) {
                        offset = 2;
                        nextEvents = chunkedPush$2(nextEvents, [
                            [
                                "enter",
                                events[index][1],
                                context
                            ],
                            [
                                "exit",
                                events[index][1],
                                context
                            ]
                        ]);
                    } else {
                        offset = 0;
                    }
                    chunkedSplice$2(events, open - 1, index - open + 3, nextEvents);
                    index = open + nextEvents.length - offset - 2;
                    break;
                }
            }
        }
    }
    index = -1;
    while((++index) < events.length){
        if (events[index][1].type === "attentionSequence") {
            events[index][1].type = "data";
        }
    }
    return events;
}
function tokenizeAttention(effects, ok) {
    var before = classifyCharacter1(this.previous);
    var marker;
    return start;
    function start(code) {
        effects.enter("attentionSequence");
        marker = code;
        return sequence(code);
    }
    function sequence(code) {
        var token;
        var after;
        var open;
        var close;
        if (code === marker) {
            effects.consume(code);
            return sequence;
        }
        token = effects.exit("attentionSequence");
        after = classifyCharacter1(code);
        open = !after || after === 2 && before;
        close = !before || before === 2 && after;
        token._open = marker === 42 ? open : open && (before || !close);
        token._close = marker === 42 ? close : close && (after || !open);
        return ok(code);
    }
}
exports$a = attention;
var _attention = exports$a;
var exports$b = {
};
var regexCheck5 = _regexCheck;
var asciiAtext = regexCheck5(/[#-'*+\--9=?A-Z^-~]/);
exports$b = asciiAtext;
var _asciiAtext = exports$b;
var exports$c = {
};
function asciiControl(code) {
    return code < 32 || code === 127;
}
exports$c = asciiControl;
var _asciiControl = exports$c;
var exports$d = {
};
var asciiAlphanumeric1 = _asciiAlphanumeric;
var asciiAlpha1 = _asciiAlpha;
var asciiAtext$1 = _asciiAtext;
var asciiControl$1 = _asciiControl;
var autolink = {
    name: "autolink",
    tokenize: tokenizeAutolink
};
function tokenizeAutolink(effects, ok, nok) {
    var size = 1;
    return start;
    function start(code) {
        effects.enter("autolink");
        effects.enter("autolinkMarker");
        effects.consume(code);
        effects.exit("autolinkMarker");
        effects.enter("autolinkProtocol");
        return open;
    }
    function open(code) {
        if (asciiAlpha1(code)) {
            effects.consume(code);
            return schemeOrEmailAtext;
        }
        return asciiAtext$1(code) ? emailAtext(code) : nok(code);
    }
    function schemeOrEmailAtext(code) {
        return code === 43 || code === 45 || code === 46 || asciiAlphanumeric1(code) ? schemeInsideOrEmailAtext(code) : emailAtext(code);
    }
    function schemeInsideOrEmailAtext(code) {
        if (code === 58) {
            effects.consume(code);
            return urlInside;
        }
        if ((code === 43 || code === 45 || code === 46 || asciiAlphanumeric1(code)) && (size++) < 32) {
            effects.consume(code);
            return schemeInsideOrEmailAtext;
        }
        return emailAtext(code);
    }
    function urlInside(code) {
        if (code === 62) {
            effects.exit("autolinkProtocol");
            return end(code);
        }
        if (code === 32 || code === 60 || asciiControl$1(code)) {
            return nok(code);
        }
        effects.consume(code);
        return urlInside;
    }
    function emailAtext(code) {
        if (code === 64) {
            effects.consume(code);
            size = 0;
            return emailAtSignOrDot;
        }
        if (asciiAtext$1(code)) {
            effects.consume(code);
            return emailAtext;
        }
        return nok(code);
    }
    function emailAtSignOrDot(code) {
        return asciiAlphanumeric1(code) ? emailLabel(code) : nok(code);
    }
    function emailLabel(code) {
        if (code === 46) {
            effects.consume(code);
            size = 0;
            return emailAtSignOrDot;
        }
        if (code === 62) {
            effects.exit("autolinkProtocol").type = "autolinkEmail";
            return end(code);
        }
        return emailValue(code);
    }
    function emailValue(code) {
        if ((code === 45 || asciiAlphanumeric1(code)) && (size++) < 63) {
            effects.consume(code);
            return code === 45 ? emailValue : emailLabel;
        }
        return nok(code);
    }
    function end(code) {
        effects.enter("autolinkMarker");
        effects.consume(code);
        effects.exit("autolinkMarker");
        effects.exit("autolink");
        return ok;
    }
}
exports$d = autolink;
var _autolink = exports$d;
var exports$e = {
};
var markdownSpace3 = _markdownSpace;
var factorySpace$4 = _factorySpace;
var blockQuote1 = {
    name: "blockQuote",
    tokenize: tokenizeBlockQuoteStart,
    continuation: {
        tokenize: tokenizeBlockQuoteContinuation
    },
    exit: exit1
};
function tokenizeBlockQuoteStart(effects, ok, nok) {
    var self = this;
    return start;
    function start(code) {
        if (code === 62) {
            if (!self.containerState.open) {
                effects.enter("blockQuote", {
                    _container: true
                });
                self.containerState.open = true;
            }
            effects.enter("blockQuotePrefix");
            effects.enter("blockQuoteMarker");
            effects.consume(code);
            effects.exit("blockQuoteMarker");
            return after;
        }
        return nok(code);
    }
    function after(code) {
        if (markdownSpace3(code)) {
            effects.enter("blockQuotePrefixWhitespace");
            effects.consume(code);
            effects.exit("blockQuotePrefixWhitespace");
            effects.exit("blockQuotePrefix");
            return ok;
        }
        effects.exit("blockQuotePrefix");
        return ok(code);
    }
}
function tokenizeBlockQuoteContinuation(effects, ok, nok) {
    return factorySpace$4(effects, effects.attempt(blockQuote1, ok, nok), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? undefined : 4);
}
function exit1(effects) {
    effects.exit("blockQuote");
}
exports$e = blockQuote1;
var _blockQuote = exports$e;
var exports$f = {
};
var regexCheck$1 = _regexCheck;
var asciiPunctuation = regexCheck$1(/[!-/:-@[-`{-~]/);
exports$f = asciiPunctuation;
var _asciiPunctuation = exports$f;
var exports$g = {
};
var asciiPunctuation$1 = _asciiPunctuation;
var characterEscape = {
    name: "characterEscape",
    tokenize: tokenizeCharacterEscape
};
function tokenizeCharacterEscape(effects, ok, nok) {
    return start;
    function start(code) {
        effects.enter("characterEscape");
        effects.enter("escapeMarker");
        effects.consume(code);
        effects.exit("escapeMarker");
        return open;
    }
    function open(code) {
        if (asciiPunctuation$1(code)) {
            effects.enter("characterEscapeValue");
            effects.consume(code);
            effects.exit("characterEscapeValue");
            effects.exit("characterEscape");
            return ok;
        }
        return nok(code);
    }
}
exports$g = characterEscape;
var _characterEscape = exports$g;
var exports$h = {
};
var regexCheck$2 = _regexCheck;
var asciiDigit = regexCheck$2(/\d/);
exports$h = asciiDigit;
var _asciiDigit = exports$h;
var exports$i = {
};
var regexCheck$3 = _regexCheck;
var asciiHexDigit = regexCheck$3(/[\dA-Fa-f]/);
exports$i = asciiHexDigit;
var _asciiHexDigit = exports$i;
var exports$j = {
};
var exports24 = {
};
var el;
var semicolon = 59;
exports24 = decodeEntity;
function decodeEntity(characters) {
    var entity = "&" + characters + ";";
    var __char;
    el = el || document.createElement("i");
    el.innerHTML = entity;
    __char = el.textContent;
    if (__char.charCodeAt(__char.length - 1) === semicolon && characters !== "semi") {
        return false;
    }
    return __char === entity ? false : __char;
}
var _decodeEntity = exports24;
var decodeEntity1 = _decodeEntity;
var asciiAlphanumeric$1 = _asciiAlphanumeric;
var asciiDigit$1 = _asciiDigit;
var asciiHexDigit$1 = _asciiHexDigit;
function _interopDefaultLegacy(e) {
    return e && typeof e === "object" && "default" in e ? e : {
        default: e
    };
}
var decodeEntity__default = _interopDefaultLegacy(decodeEntity1);
var characterReference = {
    name: "characterReference",
    tokenize: tokenizeCharacterReference
};
function tokenizeCharacterReference(effects, ok, nok) {
    var self = this;
    var size = 0;
    var max;
    var test;
    return start;
    function start(code) {
        effects.enter("characterReference");
        effects.enter("characterReferenceMarker");
        effects.consume(code);
        effects.exit("characterReferenceMarker");
        return open;
    }
    function open(code) {
        if (code === 35) {
            effects.enter("characterReferenceMarkerNumeric");
            effects.consume(code);
            effects.exit("characterReferenceMarkerNumeric");
            return numeric;
        }
        effects.enter("characterReferenceValue");
        max = 31;
        test = asciiAlphanumeric$1;
        return value(code);
    }
    function numeric(code) {
        if (code === 88 || code === 120) {
            effects.enter("characterReferenceMarkerHexadecimal");
            effects.consume(code);
            effects.exit("characterReferenceMarkerHexadecimal");
            effects.enter("characterReferenceValue");
            max = 6;
            test = asciiHexDigit$1;
            return value;
        }
        effects.enter("characterReferenceValue");
        max = 7;
        test = asciiDigit$1;
        return value(code);
    }
    function value(code) {
        var token;
        if (code === 59 && size) {
            token = effects.exit("characterReferenceValue");
            if (test === asciiAlphanumeric$1 && !decodeEntity__default["default"](self.sliceSerialize(token))) {
                return nok(code);
            }
            effects.enter("characterReferenceMarker");
            effects.consume(code);
            effects.exit("characterReferenceMarker");
            effects.exit("characterReference");
            return ok;
        }
        if (test(code) && (size++) < max) {
            effects.consume(code);
            return value;
        }
        return nok(code);
    }
}
exports$j = characterReference;
var _characterReference = exports$j;
var exports$k = {
};
var markdownLineEnding$4 = _markdownLineEnding;
var factorySpace$5 = _factorySpace;
var prefixSize$1 = _prefixSize;
var markdownLineEndingOrSpace2 = _markdownLineEndingOrSpace;
var codeFenced = {
    name: "codeFenced",
    tokenize: tokenizeCodeFenced,
    concrete: true
};
function tokenizeCodeFenced(effects, ok, nok) {
    var self = this;
    var closingFenceConstruct = {
        tokenize: tokenizeClosingFence,
        partial: true
    };
    var initialPrefix = prefixSize$1(this.events, "linePrefix");
    var sizeOpen = 0;
    var marker;
    return start;
    function start(code) {
        effects.enter("codeFenced");
        effects.enter("codeFencedFence");
        effects.enter("codeFencedFenceSequence");
        marker = code;
        return sequenceOpen(code);
    }
    function sequenceOpen(code) {
        if (code === marker) {
            effects.consume(code);
            sizeOpen++;
            return sequenceOpen;
        }
        effects.exit("codeFencedFenceSequence");
        return sizeOpen < 3 ? nok(code) : factorySpace$5(effects, infoOpen, "whitespace")(code);
    }
    function infoOpen(code) {
        if (code === null || markdownLineEnding$4(code)) {
            return openAfter(code);
        }
        effects.enter("codeFencedFenceInfo");
        effects.enter("chunkString", {
            contentType: "string"
        });
        return info(code);
    }
    function info(code) {
        if (code === null || markdownLineEndingOrSpace2(code)) {
            effects.exit("chunkString");
            effects.exit("codeFencedFenceInfo");
            return factorySpace$5(effects, infoAfter, "whitespace")(code);
        }
        if (code === 96 && code === marker) return nok(code);
        effects.consume(code);
        return info;
    }
    function infoAfter(code) {
        if (code === null || markdownLineEnding$4(code)) {
            return openAfter(code);
        }
        effects.enter("codeFencedFenceMeta");
        effects.enter("chunkString", {
            contentType: "string"
        });
        return meta(code);
    }
    function meta(code) {
        if (code === null || markdownLineEnding$4(code)) {
            effects.exit("chunkString");
            effects.exit("codeFencedFenceMeta");
            return openAfter(code);
        }
        if (code === 96 && code === marker) return nok(code);
        effects.consume(code);
        return meta;
    }
    function openAfter(code) {
        effects.exit("codeFencedFence");
        return self.interrupt ? ok(code) : content2(code);
    }
    function content2(code) {
        if (code === null) {
            return after(code);
        }
        if (markdownLineEnding$4(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return effects.attempt(closingFenceConstruct, after, initialPrefix ? factorySpace$5(effects, content2, "linePrefix", initialPrefix + 1) : content2);
        }
        effects.enter("codeFlowValue");
        return contentContinue(code);
    }
    function contentContinue(code) {
        if (code === null || markdownLineEnding$4(code)) {
            effects.exit("codeFlowValue");
            return content2(code);
        }
        effects.consume(code);
        return contentContinue;
    }
    function after(code) {
        effects.exit("codeFenced");
        return ok(code);
    }
    function tokenizeClosingFence(effects1, ok1, nok1) {
        var size = 0;
        return factorySpace$5(effects1, closingSequenceStart, "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? undefined : 4);
        function closingSequenceStart(code) {
            effects1.enter("codeFencedFence");
            effects1.enter("codeFencedFenceSequence");
            return closingSequence(code);
        }
        function closingSequence(code) {
            if (code === marker) {
                effects1.consume(code);
                size++;
                return closingSequence;
            }
            if (size < sizeOpen) return nok1(code);
            effects1.exit("codeFencedFenceSequence");
            return factorySpace$5(effects1, closingSequenceEnd, "whitespace")(code);
        }
        function closingSequenceEnd(code) {
            if (code === null || markdownLineEnding$4(code)) {
                effects1.exit("codeFencedFence");
                return ok1(code);
            }
            return nok1(code);
        }
    }
}
exports$k = codeFenced;
var _codeFenced = exports$k;
var exports$l = {
};
var chunkedSplice$3 = _chunkedSplice;
var markdownLineEnding$5 = _markdownLineEnding;
var factorySpace$6 = _factorySpace;
var prefixSize$2 = _prefixSize;
var codeIndented = {
    name: "codeIndented",
    tokenize: tokenizeCodeIndented,
    resolve: resolveCodeIndented
};
var indentedContentConstruct = {
    tokenize: tokenizeIndentedContent,
    partial: true
};
function resolveCodeIndented(events, context) {
    var code = {
        type: "codeIndented",
        start: events[0][1].start,
        end: events[events.length - 1][1].end
    };
    chunkedSplice$3(events, 0, 0, [
        [
            "enter",
            code,
            context
        ]
    ]);
    chunkedSplice$3(events, events.length, 0, [
        [
            "exit",
            code,
            context
        ]
    ]);
    return events;
}
function tokenizeCodeIndented(effects, ok, nok) {
    return effects.attempt(indentedContentConstruct, afterPrefix, nok);
    function afterPrefix(code) {
        if (code === null) {
            return ok(code);
        }
        if (markdownLineEnding$5(code)) {
            return effects.attempt(indentedContentConstruct, afterPrefix, ok)(code);
        }
        effects.enter("codeFlowValue");
        return content2(code);
    }
    function content2(code) {
        if (code === null || markdownLineEnding$5(code)) {
            effects.exit("codeFlowValue");
            return afterPrefix(code);
        }
        effects.consume(code);
        return content2;
    }
}
function tokenizeIndentedContent(effects, ok, nok) {
    var self = this;
    return factorySpace$6(effects, afterPrefix, "linePrefix", 4 + 1);
    function afterPrefix(code) {
        if (markdownLineEnding$5(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return factorySpace$6(effects, afterPrefix, "linePrefix", 4 + 1);
        }
        return prefixSize$2(self.events, "linePrefix") < 4 ? nok(code) : ok(code);
    }
}
exports$l = codeIndented;
var _codeIndented = exports$l;
var exports$m = {
};
var markdownLineEnding$6 = _markdownLineEnding;
var codeText1 = {
    name: "codeText",
    tokenize: tokenizeCodeText,
    resolve: resolveCodeText,
    previous: previous
};
function resolveCodeText(events) {
    var tailExitIndex = events.length - 4;
    var headEnterIndex = 3;
    var index;
    var enter;
    if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
        index = headEnterIndex;
        while((++index) < tailExitIndex){
            if (events[index][1].type === "codeTextData") {
                events[tailExitIndex][1].type = events[headEnterIndex][1].type = "codeTextPadding";
                headEnterIndex += 2;
                tailExitIndex -= 2;
                break;
            }
        }
    }
    index = headEnterIndex - 1;
    tailExitIndex++;
    while((++index) <= tailExitIndex){
        if (enter === undefined) {
            if (index !== tailExitIndex && events[index][1].type !== "lineEnding") {
                enter = index;
            }
        } else if (index === tailExitIndex || events[index][1].type === "lineEnding") {
            events[enter][1].type = "codeTextData";
            if (index !== enter + 2) {
                events[enter][1].end = events[index - 1][1].end;
                events.splice(enter + 2, index - enter - 2);
                tailExitIndex -= index - enter - 2;
                index = enter + 2;
            }
            enter = undefined;
        }
    }
    return events;
}
function previous(code) {
    return code !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenizeCodeText(effects, ok, nok) {
    var sizeOpen = 0;
    var size;
    var token;
    return start;
    function start(code) {
        effects.enter("codeText");
        effects.enter("codeTextSequence");
        return openingSequence(code);
    }
    function openingSequence(code) {
        if (code === 96) {
            effects.consume(code);
            sizeOpen++;
            return openingSequence;
        }
        effects.exit("codeTextSequence");
        return gap(code);
    }
    function gap(code) {
        if (code === null) {
            return nok(code);
        }
        if (code === 96) {
            token = effects.enter("codeTextSequence");
            size = 0;
            return closingSequence(code);
        }
        if (code === 32) {
            effects.enter("space");
            effects.consume(code);
            effects.exit("space");
            return gap;
        }
        if (markdownLineEnding$6(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return gap;
        }
        effects.enter("codeTextData");
        return data(code);
    }
    function data(code) {
        if (code === null || code === 32 || code === 96 || markdownLineEnding$6(code)) {
            effects.exit("codeTextData");
            return gap(code);
        }
        effects.consume(code);
        return data;
    }
    function closingSequence(code) {
        if (code === 96) {
            effects.consume(code);
            size++;
            return closingSequence;
        }
        if (size === sizeOpen) {
            effects.exit("codeTextSequence");
            effects.exit("codeText");
            return ok(code);
        }
        token.type = "codeTextData";
        return data(code);
    }
}
exports$m = codeText1;
var _codeText = exports$m;
var exports$n = {
};
var markdownLineEnding$7 = _markdownLineEnding;
var markdownLineEndingOrSpace$1 = _markdownLineEndingOrSpace;
var asciiControl$2 = _asciiControl;
function destinationFactory(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
    var limit = max || Infinity;
    var balance = 0;
    return start;
    function start(code) {
        if (code === 60) {
            effects.enter(type);
            effects.enter(literalType);
            effects.enter(literalMarkerType);
            effects.consume(code);
            effects.exit(literalMarkerType);
            return destinationEnclosedBefore;
        }
        if (asciiControl$2(code)) {
            return nok(code);
        }
        effects.enter(type);
        effects.enter(rawType);
        effects.enter(stringType);
        effects.enter("chunkString", {
            contentType: "string"
        });
        return destinationRaw(code);
    }
    function destinationEnclosedBefore(code) {
        if (code === 62) {
            effects.enter(literalMarkerType);
            effects.consume(code);
            effects.exit(literalMarkerType);
            effects.exit(literalType);
            effects.exit(type);
            return ok;
        }
        effects.enter(stringType);
        effects.enter("chunkString", {
            contentType: "string"
        });
        return destinationEnclosed(code);
    }
    function destinationEnclosed(code) {
        if (code === 62) {
            effects.exit("chunkString");
            effects.exit(stringType);
            return destinationEnclosedBefore(code);
        }
        if (code === null || code === 60 || markdownLineEnding$7(code)) {
            return nok(code);
        }
        effects.consume(code);
        return code === 92 ? destinationEnclosedEscape : destinationEnclosed;
    }
    function destinationEnclosedEscape(code) {
        if (code === 60 || code === 62 || code === 92) {
            effects.consume(code);
            return destinationEnclosed;
        }
        return destinationEnclosed(code);
    }
    function destinationRaw(code) {
        if (code === 40) {
            if ((++balance) > limit) return nok(code);
            effects.consume(code);
            return destinationRaw;
        }
        if (code === 41) {
            if (!balance--) {
                effects.exit("chunkString");
                effects.exit(stringType);
                effects.exit(rawType);
                effects.exit(type);
                return ok(code);
            }
            effects.consume(code);
            return destinationRaw;
        }
        if (code === null || markdownLineEndingOrSpace$1(code)) {
            if (balance) return nok(code);
            effects.exit("chunkString");
            effects.exit(stringType);
            effects.exit(rawType);
            effects.exit(type);
            return ok(code);
        }
        if (asciiControl$2(code)) return nok(code);
        effects.consume(code);
        return code === 92 ? destinationRawEscape : destinationRaw;
    }
    function destinationRawEscape(code) {
        if (code === 40 || code === 41 || code === 92) {
            effects.consume(code);
            return destinationRaw;
        }
        return destinationRaw(code);
    }
}
exports$n = destinationFactory;
var _factoryDestination = exports$n;
var exports$o = {
};
var markdownLineEnding$8 = _markdownLineEnding;
var markdownSpace$1 = _markdownSpace;
function labelFactory(effects, ok, nok, type, markerType, stringType) {
    var self = this;
    var size = 0;
    var data;
    return start;
    function start(code) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        effects.enter(stringType);
        return atBreak;
    }
    function atBreak(code) {
        if (code === null || code === 91 || code === 93 && !data || code === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs || size > 999) {
            return nok(code);
        }
        if (code === 93) {
            effects.exit(stringType);
            effects.enter(markerType);
            effects.consume(code);
            effects.exit(markerType);
            effects.exit(type);
            return ok;
        }
        if (markdownLineEnding$8(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return atBreak;
        }
        effects.enter("chunkString", {
            contentType: "string"
        });
        return label(code);
    }
    function label(code) {
        if (code === null || code === 91 || code === 93 || markdownLineEnding$8(code) || (size++) > 999) {
            effects.exit("chunkString");
            return atBreak(code);
        }
        effects.consume(code);
        data = data || !markdownSpace$1(code);
        return code === 92 ? labelEscape : label;
    }
    function labelEscape(code) {
        if (code === 91 || code === 92 || code === 93) {
            effects.consume(code);
            size++;
            return label;
        }
        return label(code);
    }
}
exports$o = labelFactory;
var _factoryLabel = exports$o;
var exports$p = {
};
var markdownLineEnding$9 = _markdownLineEnding;
var factorySpace$7 = _factorySpace;
function titleFactory(effects, ok, nok, type, markerType, stringType) {
    var marker;
    return start;
    function start(code) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        marker = code === 40 ? 41 : code;
        return atFirstTitleBreak;
    }
    function atFirstTitleBreak(code) {
        if (code === marker) {
            effects.enter(markerType);
            effects.consume(code);
            effects.exit(markerType);
            effects.exit(type);
            return ok;
        }
        effects.enter(stringType);
        return atTitleBreak(code);
    }
    function atTitleBreak(code) {
        if (code === marker) {
            effects.exit(stringType);
            return atFirstTitleBreak(marker);
        }
        if (code === null) {
            return nok(code);
        }
        if (markdownLineEnding$9(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return factorySpace$7(effects, atTitleBreak, "linePrefix");
        }
        effects.enter("chunkString", {
            contentType: "string"
        });
        return title(code);
    }
    function title(code) {
        if (code === marker || code === null || markdownLineEnding$9(code)) {
            effects.exit("chunkString");
            return atTitleBreak(code);
        }
        effects.consume(code);
        return code === 92 ? titleEscape : title;
    }
    function titleEscape(code) {
        if (code === marker || code === 92) {
            effects.consume(code);
            return title;
        }
        return title(code);
    }
}
exports$p = titleFactory;
var _factoryTitle = exports$p;
var exports$q = {
};
var normalizeIdentifier1 = _normalizeIdentifier;
var markdownLineEnding$a = _markdownLineEnding;
var factorySpace$8 = _factorySpace;
var markdownLineEndingOrSpace$2 = _markdownLineEndingOrSpace;
var factoryDestination = _factoryDestination;
var factoryLabel = _factoryLabel;
var factoryWhitespace = _factoryWhitespace;
var factoryTitle = _factoryTitle;
var definition1 = {
    name: "definition",
    tokenize: tokenizeDefinition
};
var titleConstruct = {
    tokenize: tokenizeTitle,
    partial: true
};
function tokenizeDefinition(effects, ok, nok) {
    var self = this;
    var identifier;
    return start;
    function start(code) {
        effects.enter("definition");
        return factoryLabel.call(self, effects, labelAfter, nok, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(code);
    }
    function labelAfter(code) {
        identifier = normalizeIdentifier1(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));
        if (code === 58) {
            effects.enter("definitionMarker");
            effects.consume(code);
            effects.exit("definitionMarker");
            return factoryWhitespace(effects, factoryDestination(effects, effects.attempt(titleConstruct, factorySpace$8(effects, after, "whitespace"), factorySpace$8(effects, after, "whitespace")), nok, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"));
        }
        return nok(code);
    }
    function after(code) {
        if (code === null || markdownLineEnding$a(code)) {
            effects.exit("definition");
            if (self.parser.defined.indexOf(identifier) < 0) {
                self.parser.defined.push(identifier);
            }
            return ok(code);
        }
        return nok(code);
    }
}
function tokenizeTitle(effects, ok, nok) {
    return start;
    function start(code) {
        return markdownLineEndingOrSpace$2(code) ? factoryWhitespace(effects, before)(code) : nok(code);
    }
    function before(code) {
        if (code === 34 || code === 39 || code === 40) {
            return factoryTitle(effects, factorySpace$8(effects, after, "whitespace"), nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code);
        }
        return nok(code);
    }
    function after(code) {
        return code === null || markdownLineEnding$a(code) ? ok(code) : nok(code);
    }
}
exports$q = definition1;
var _definition = exports$q;
var exports$r = {
};
var markdownLineEnding$b = _markdownLineEnding;
var hardBreakEscape = {
    name: "hardBreakEscape",
    tokenize: tokenizeHardBreakEscape
};
function tokenizeHardBreakEscape(effects, ok, nok) {
    return start;
    function start(code) {
        effects.enter("hardBreakEscape");
        effects.enter("escapeMarker");
        effects.consume(code);
        return open;
    }
    function open(code) {
        if (markdownLineEnding$b(code)) {
            effects.exit("escapeMarker");
            effects.exit("hardBreakEscape");
            return ok(code);
        }
        return nok(code);
    }
}
exports$r = hardBreakEscape;
var _hardBreakEscape = exports$r;
var exports$s = {
};
var chunkedSplice$4 = _chunkedSplice;
var markdownLineEnding$c = _markdownLineEnding;
var markdownSpace$2 = _markdownSpace;
var factorySpace$9 = _factorySpace;
var markdownLineEndingOrSpace$3 = _markdownLineEndingOrSpace;
var headingAtx = {
    name: "headingAtx",
    tokenize: tokenizeHeadingAtx,
    resolve: resolveHeadingAtx
};
function resolveHeadingAtx(events, context) {
    var contentEnd = events.length - 2;
    var contentStart = 3;
    var content2;
    var text1;
    if (events[contentStart][1].type === "whitespace") {
        contentStart += 2;
    }
    if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
        contentEnd -= 2;
    }
    if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
        contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
    }
    if (contentEnd > contentStart) {
        content2 = {
            type: "atxHeadingText",
            start: events[contentStart][1].start,
            end: events[contentEnd][1].end
        };
        text1 = {
            type: "chunkText",
            start: events[contentStart][1].start,
            end: events[contentEnd][1].end,
            contentType: "text"
        };
        chunkedSplice$4(events, contentStart, contentEnd - contentStart + 1, [
            [
                "enter",
                content2,
                context
            ],
            [
                "enter",
                text1,
                context
            ],
            [
                "exit",
                text1,
                context
            ],
            [
                "exit",
                content2,
                context
            ]
        ]);
    }
    return events;
}
function tokenizeHeadingAtx(effects, ok, nok) {
    var self = this;
    var size = 0;
    return start;
    function start(code) {
        effects.enter("atxHeading");
        effects.enter("atxHeadingSequence");
        return fenceOpenInside(code);
    }
    function fenceOpenInside(code) {
        if (code === 35 && (size++) < 6) {
            effects.consume(code);
            return fenceOpenInside;
        }
        if (code === null || markdownLineEndingOrSpace$3(code)) {
            effects.exit("atxHeadingSequence");
            return self.interrupt ? ok(code) : headingBreak(code);
        }
        return nok(code);
    }
    function headingBreak(code) {
        if (code === 35) {
            effects.enter("atxHeadingSequence");
            return sequence(code);
        }
        if (code === null || markdownLineEnding$c(code)) {
            effects.exit("atxHeading");
            return ok(code);
        }
        if (markdownSpace$2(code)) {
            return factorySpace$9(effects, headingBreak, "whitespace")(code);
        }
        effects.enter("atxHeadingText");
        return data(code);
    }
    function sequence(code) {
        if (code === 35) {
            effects.consume(code);
            return sequence;
        }
        effects.exit("atxHeadingSequence");
        return headingBreak(code);
    }
    function data(code) {
        if (code === null || code === 35 || markdownLineEndingOrSpace$3(code)) {
            effects.exit("atxHeadingText");
            return headingBreak(code);
        }
        effects.consume(code);
        return data;
    }
}
exports$s = headingAtx;
var _headingAtx = exports$s;
var exports$t = {
};
var basics = [
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
    "source",
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
];
exports$t = basics;
var _htmlBlockNames = exports$t;
var exports$u = {
};
var raws = [
    "pre",
    "script",
    "style",
    "textarea"
];
exports$u = raws;
var _htmlRawNames = exports$u;
var exports$v = {
};
var fromCharCode$1 = _fromCharCode;
var asciiAlphanumeric$2 = _asciiAlphanumeric;
var markdownLineEnding$d = _markdownLineEnding;
var markdownSpace$3 = _markdownSpace;
var partialBlankLine$2 = _partialBlankLine;
var markdownLineEndingOrSpace$4 = _markdownLineEndingOrSpace;
var asciiAlpha$1 = _asciiAlpha;
var htmlBlockNames = _htmlBlockNames;
var htmlRawNames = _htmlRawNames;
var htmlFlow = {
    name: "htmlFlow",
    tokenize: tokenizeHtmlFlow,
    resolveTo: resolveToHtmlFlow,
    concrete: true
};
var nextBlankConstruct = {
    tokenize: tokenizeNextBlank,
    partial: true
};
function resolveToHtmlFlow(events) {
    var index = events.length;
    while(index--){
        if (events[index][0] === "enter" && events[index][1].type === "htmlFlow") {
            break;
        }
    }
    if (index > 1 && events[index - 2][1].type === "linePrefix") {
        events[index][1].start = events[index - 2][1].start;
        events[index + 1][1].start = events[index - 2][1].start;
        events.splice(index - 2, 2);
    }
    return events;
}
function tokenizeHtmlFlow(effects, ok, nok) {
    var self = this;
    var kind;
    var startTag;
    var buffer;
    var index;
    var marker;
    return start;
    function start(code) {
        effects.enter("htmlFlow");
        effects.enter("htmlFlowData");
        effects.consume(code);
        return open;
    }
    function open(code) {
        if (code === 33) {
            effects.consume(code);
            return declarationStart;
        }
        if (code === 47) {
            effects.consume(code);
            return tagCloseStart;
        }
        if (code === 63) {
            effects.consume(code);
            kind = 3;
            return self.interrupt ? ok : continuationDeclarationInside;
        }
        if (asciiAlpha$1(code)) {
            effects.consume(code);
            buffer = fromCharCode$1(code);
            startTag = true;
            return tagName;
        }
        return nok(code);
    }
    function declarationStart(code) {
        if (code === 45) {
            effects.consume(code);
            kind = 2;
            return commentOpenInside;
        }
        if (code === 91) {
            effects.consume(code);
            kind = 5;
            buffer = "CDATA[";
            index = 0;
            return cdataOpenInside;
        }
        if (asciiAlpha$1(code)) {
            effects.consume(code);
            kind = 4;
            return self.interrupt ? ok : continuationDeclarationInside;
        }
        return nok(code);
    }
    function commentOpenInside(code) {
        if (code === 45) {
            effects.consume(code);
            return self.interrupt ? ok : continuationDeclarationInside;
        }
        return nok(code);
    }
    function cdataOpenInside(code) {
        if (code === buffer.charCodeAt(index++)) {
            effects.consume(code);
            return index === buffer.length ? self.interrupt ? ok : continuation : cdataOpenInside;
        }
        return nok(code);
    }
    function tagCloseStart(code) {
        if (asciiAlpha$1(code)) {
            effects.consume(code);
            buffer = fromCharCode$1(code);
            return tagName;
        }
        return nok(code);
    }
    function tagName(code) {
        if (code === null || code === 47 || code === 62 || markdownLineEndingOrSpace$4(code)) {
            if (code !== 47 && startTag && htmlRawNames.indexOf(buffer.toLowerCase()) > -1) {
                kind = 1;
                return self.interrupt ? ok(code) : continuation(code);
            }
            if (htmlBlockNames.indexOf(buffer.toLowerCase()) > -1) {
                kind = 6;
                if (code === 47) {
                    effects.consume(code);
                    return basicSelfClosing;
                }
                return self.interrupt ? ok(code) : continuation(code);
            }
            kind = 7;
            return self.interrupt ? nok(code) : startTag ? completeAttributeNameBefore(code) : completeClosingTagAfter(code);
        }
        if (code === 45 || asciiAlphanumeric$2(code)) {
            effects.consume(code);
            buffer += fromCharCode$1(code);
            return tagName;
        }
        return nok(code);
    }
    function basicSelfClosing(code) {
        if (code === 62) {
            effects.consume(code);
            return self.interrupt ? ok : continuation;
        }
        return nok(code);
    }
    function completeClosingTagAfter(code) {
        if (markdownSpace$3(code)) {
            effects.consume(code);
            return completeClosingTagAfter;
        }
        return completeEnd(code);
    }
    function completeAttributeNameBefore(code) {
        if (code === 47) {
            effects.consume(code);
            return completeEnd;
        }
        if (code === 58 || code === 95 || asciiAlpha$1(code)) {
            effects.consume(code);
            return completeAttributeName;
        }
        if (markdownSpace$3(code)) {
            effects.consume(code);
            return completeAttributeNameBefore;
        }
        return completeEnd(code);
    }
    function completeAttributeName(code) {
        if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric$2(code)) {
            effects.consume(code);
            return completeAttributeName;
        }
        return completeAttributeNameAfter(code);
    }
    function completeAttributeNameAfter(code) {
        if (code === 61) {
            effects.consume(code);
            return completeAttributeValueBefore;
        }
        if (markdownSpace$3(code)) {
            effects.consume(code);
            return completeAttributeNameAfter;
        }
        return completeAttributeNameBefore(code);
    }
    function completeAttributeValueBefore(code) {
        if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
            return nok(code);
        }
        if (code === 34 || code === 39) {
            effects.consume(code);
            marker = code;
            return completeAttributeValueQuoted;
        }
        if (markdownSpace$3(code)) {
            effects.consume(code);
            return completeAttributeValueBefore;
        }
        marker = undefined;
        return completeAttributeValueUnquoted(code);
    }
    function completeAttributeValueQuoted(code) {
        if (code === marker) {
            effects.consume(code);
            return completeAttributeValueQuotedAfter;
        }
        if (code === null || markdownLineEnding$d(code)) {
            return nok(code);
        }
        effects.consume(code);
        return completeAttributeValueQuoted;
    }
    function completeAttributeValueUnquoted(code) {
        if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 62 || code === 96 || markdownLineEndingOrSpace$4(code)) {
            return completeAttributeNameAfter(code);
        }
        effects.consume(code);
        return completeAttributeValueUnquoted;
    }
    function completeAttributeValueQuotedAfter(code) {
        if (code === 47 || code === 62 || markdownSpace$3(code)) {
            return completeAttributeNameBefore(code);
        }
        return nok(code);
    }
    function completeEnd(code) {
        if (code === 62) {
            effects.consume(code);
            return completeAfter;
        }
        return nok(code);
    }
    function completeAfter(code) {
        if (markdownSpace$3(code)) {
            effects.consume(code);
            return completeAfter;
        }
        return code === null || markdownLineEnding$d(code) ? continuation(code) : nok(code);
    }
    function continuation(code) {
        if (code === 45 && kind === 2) {
            effects.consume(code);
            return continuationCommentInside;
        }
        if (code === 60 && kind === 1) {
            effects.consume(code);
            return continuationRawTagOpen;
        }
        if (code === 62 && kind === 4) {
            effects.consume(code);
            return continuationClose;
        }
        if (code === 63 && kind === 3) {
            effects.consume(code);
            return continuationDeclarationInside;
        }
        if (code === 93 && kind === 5) {
            effects.consume(code);
            return continuationCharacterDataInside;
        }
        if (markdownLineEnding$d(code) && (kind === 6 || kind === 7)) {
            return effects.check(nextBlankConstruct, continuationClose, continuationAtLineEnding)(code);
        }
        if (code === null || markdownLineEnding$d(code)) {
            return continuationAtLineEnding(code);
        }
        effects.consume(code);
        return continuation;
    }
    function continuationAtLineEnding(code) {
        effects.exit("htmlFlowData");
        return htmlContinueStart(code);
    }
    function htmlContinueStart(code) {
        if (code === null) {
            return done(code);
        }
        if (markdownLineEnding$d(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return htmlContinueStart;
        }
        effects.enter("htmlFlowData");
        return continuation(code);
    }
    function continuationCommentInside(code) {
        if (code === 45) {
            effects.consume(code);
            return continuationDeclarationInside;
        }
        return continuation(code);
    }
    function continuationRawTagOpen(code) {
        if (code === 47) {
            effects.consume(code);
            buffer = "";
            return continuationRawEndTag;
        }
        return continuation(code);
    }
    function continuationRawEndTag(code) {
        if (code === 62 && htmlRawNames.indexOf(buffer.toLowerCase()) > -1) {
            effects.consume(code);
            return continuationClose;
        }
        if (asciiAlpha$1(code) && buffer.length < 8) {
            effects.consume(code);
            buffer += fromCharCode$1(code);
            return continuationRawEndTag;
        }
        return continuation(code);
    }
    function continuationCharacterDataInside(code) {
        if (code === 93) {
            effects.consume(code);
            return continuationDeclarationInside;
        }
        return continuation(code);
    }
    function continuationDeclarationInside(code) {
        if (code === 62) {
            effects.consume(code);
            return continuationClose;
        }
        return continuation(code);
    }
    function continuationClose(code) {
        if (code === null || markdownLineEnding$d(code)) {
            effects.exit("htmlFlowData");
            return done(code);
        }
        effects.consume(code);
        return continuationClose;
    }
    function done(code) {
        effects.exit("htmlFlow");
        return ok(code);
    }
}
function tokenizeNextBlank(effects, ok, nok) {
    return start;
    function start(code) {
        effects.exit("htmlFlowData");
        effects.enter("lineEndingBlank");
        effects.consume(code);
        effects.exit("lineEndingBlank");
        return effects.attempt(partialBlankLine$2, ok, nok);
    }
}
exports$v = htmlFlow;
var _htmlFlow = exports$v;
var exports$w = {
};
var asciiAlphanumeric$3 = _asciiAlphanumeric;
var markdownLineEnding$e = _markdownLineEnding;
var markdownSpace$4 = _markdownSpace;
var factorySpace$a = _factorySpace;
var markdownLineEndingOrSpace$5 = _markdownLineEndingOrSpace;
var asciiAlpha$2 = _asciiAlpha;
var htmlText = {
    name: "htmlText",
    tokenize: tokenizeHtmlText
};
function tokenizeHtmlText(effects, ok, nok) {
    var self = this;
    var marker;
    var buffer;
    var index;
    var returnState;
    return start;
    function start(code) {
        effects.enter("htmlText");
        effects.enter("htmlTextData");
        effects.consume(code);
        return open;
    }
    function open(code) {
        if (code === 33) {
            effects.consume(code);
            return declarationOpen;
        }
        if (code === 47) {
            effects.consume(code);
            return tagCloseStart;
        }
        if (code === 63) {
            effects.consume(code);
            return instruction;
        }
        if (asciiAlpha$2(code)) {
            effects.consume(code);
            return tagOpen;
        }
        return nok(code);
    }
    function declarationOpen(code) {
        if (code === 45) {
            effects.consume(code);
            return commentOpen;
        }
        if (code === 91) {
            effects.consume(code);
            buffer = "CDATA[";
            index = 0;
            return cdataOpen;
        }
        if (asciiAlpha$2(code)) {
            effects.consume(code);
            return declaration;
        }
        return nok(code);
    }
    function commentOpen(code) {
        if (code === 45) {
            effects.consume(code);
            return commentStart;
        }
        return nok(code);
    }
    function commentStart(code) {
        if (code === null || code === 62) {
            return nok(code);
        }
        if (code === 45) {
            effects.consume(code);
            return commentStartDash;
        }
        return comment(code);
    }
    function commentStartDash(code) {
        if (code === null || code === 62) {
            return nok(code);
        }
        return comment(code);
    }
    function comment(code) {
        if (code === null) {
            return nok(code);
        }
        if (code === 45) {
            effects.consume(code);
            return commentClose;
        }
        if (markdownLineEnding$e(code)) {
            returnState = comment;
            return atLineEnding(code);
        }
        effects.consume(code);
        return comment;
    }
    function commentClose(code) {
        if (code === 45) {
            effects.consume(code);
            return end;
        }
        return comment(code);
    }
    function cdataOpen(code) {
        if (code === buffer.charCodeAt(index++)) {
            effects.consume(code);
            return index === buffer.length ? cdata : cdataOpen;
        }
        return nok(code);
    }
    function cdata(code) {
        if (code === null) {
            return nok(code);
        }
        if (code === 93) {
            effects.consume(code);
            return cdataClose;
        }
        if (markdownLineEnding$e(code)) {
            returnState = cdata;
            return atLineEnding(code);
        }
        effects.consume(code);
        return cdata;
    }
    function cdataClose(code) {
        if (code === 93) {
            effects.consume(code);
            return cdataEnd;
        }
        return cdata(code);
    }
    function cdataEnd(code) {
        if (code === 62) {
            return end(code);
        }
        if (code === 93) {
            effects.consume(code);
            return cdataEnd;
        }
        return cdata(code);
    }
    function declaration(code) {
        if (code === null || code === 62) {
            return end(code);
        }
        if (markdownLineEnding$e(code)) {
            returnState = declaration;
            return atLineEnding(code);
        }
        effects.consume(code);
        return declaration;
    }
    function instruction(code) {
        if (code === null) {
            return nok(code);
        }
        if (code === 63) {
            effects.consume(code);
            return instructionClose;
        }
        if (markdownLineEnding$e(code)) {
            returnState = instruction;
            return atLineEnding(code);
        }
        effects.consume(code);
        return instruction;
    }
    function instructionClose(code) {
        return code === 62 ? end(code) : instruction(code);
    }
    function tagCloseStart(code) {
        if (asciiAlpha$2(code)) {
            effects.consume(code);
            return tagClose;
        }
        return nok(code);
    }
    function tagClose(code) {
        if (code === 45 || asciiAlphanumeric$3(code)) {
            effects.consume(code);
            return tagClose;
        }
        return tagCloseBetween(code);
    }
    function tagCloseBetween(code) {
        if (markdownLineEnding$e(code)) {
            returnState = tagCloseBetween;
            return atLineEnding(code);
        }
        if (markdownSpace$4(code)) {
            effects.consume(code);
            return tagCloseBetween;
        }
        return end(code);
    }
    function tagOpen(code) {
        if (code === 45 || asciiAlphanumeric$3(code)) {
            effects.consume(code);
            return tagOpen;
        }
        if (code === 47 || code === 62 || markdownLineEndingOrSpace$5(code)) {
            return tagOpenBetween(code);
        }
        return nok(code);
    }
    function tagOpenBetween(code) {
        if (code === 47) {
            effects.consume(code);
            return end;
        }
        if (code === 58 || code === 95 || asciiAlpha$2(code)) {
            effects.consume(code);
            return tagOpenAttributeName;
        }
        if (markdownLineEnding$e(code)) {
            returnState = tagOpenBetween;
            return atLineEnding(code);
        }
        if (markdownSpace$4(code)) {
            effects.consume(code);
            return tagOpenBetween;
        }
        return end(code);
    }
    function tagOpenAttributeName(code) {
        if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric$3(code)) {
            effects.consume(code);
            return tagOpenAttributeName;
        }
        return tagOpenAttributeNameAfter(code);
    }
    function tagOpenAttributeNameAfter(code) {
        if (code === 61) {
            effects.consume(code);
            return tagOpenAttributeValueBefore;
        }
        if (markdownLineEnding$e(code)) {
            returnState = tagOpenAttributeNameAfter;
            return atLineEnding(code);
        }
        if (markdownSpace$4(code)) {
            effects.consume(code);
            return tagOpenAttributeNameAfter;
        }
        return tagOpenBetween(code);
    }
    function tagOpenAttributeValueBefore(code) {
        if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
            return nok(code);
        }
        if (code === 34 || code === 39) {
            effects.consume(code);
            marker = code;
            return tagOpenAttributeValueQuoted;
        }
        if (markdownLineEnding$e(code)) {
            returnState = tagOpenAttributeValueBefore;
            return atLineEnding(code);
        }
        if (markdownSpace$4(code)) {
            effects.consume(code);
            return tagOpenAttributeValueBefore;
        }
        effects.consume(code);
        marker = undefined;
        return tagOpenAttributeValueUnquoted;
    }
    function tagOpenAttributeValueQuoted(code) {
        if (code === marker) {
            effects.consume(code);
            return tagOpenAttributeValueQuotedAfter;
        }
        if (code === null) {
            return nok(code);
        }
        if (markdownLineEnding$e(code)) {
            returnState = tagOpenAttributeValueQuoted;
            return atLineEnding(code);
        }
        effects.consume(code);
        return tagOpenAttributeValueQuoted;
    }
    function tagOpenAttributeValueQuotedAfter(code) {
        if (code === 62 || code === 47 || markdownLineEndingOrSpace$5(code)) {
            return tagOpenBetween(code);
        }
        return nok(code);
    }
    function tagOpenAttributeValueUnquoted(code) {
        if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 96) {
            return nok(code);
        }
        if (code === 62 || markdownLineEndingOrSpace$5(code)) {
            return tagOpenBetween(code);
        }
        effects.consume(code);
        return tagOpenAttributeValueUnquoted;
    }
    function atLineEnding(code) {
        effects.exit("htmlTextData");
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace$a(effects, afterPrefix, "linePrefix", self.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? undefined : 4);
    }
    function afterPrefix(code) {
        effects.enter("htmlTextData");
        return returnState(code);
    }
    function end(code) {
        if (code === 62) {
            effects.consume(code);
            effects.exit("htmlTextData");
            effects.exit("htmlText");
            return ok;
        }
        return nok(code);
    }
}
exports$w = htmlText;
var _htmlText = exports$w;
var exports$x = {
};
var chunkedSplice$5 = _chunkedSplice;
var chunkedPush$3 = _chunkedPush;
var normalizeIdentifier$1 = _normalizeIdentifier;
var shallow$3 = _shallow;
var resolveAll$2 = _resolveAll;
var markdownLineEndingOrSpace$6 = _markdownLineEndingOrSpace;
var factoryDestination$1 = _factoryDestination;
var factoryLabel$1 = _factoryLabel;
var factoryWhitespace$1 = _factoryWhitespace;
var factoryTitle$1 = _factoryTitle;
var labelEnd = {
    name: "labelEnd",
    tokenize: tokenizeLabelEnd,
    resolveTo: resolveToLabelEnd,
    resolveAll: resolveAllLabelEnd
};
var resourceConstruct = {
    tokenize: tokenizeResource
};
var fullReferenceConstruct = {
    tokenize: tokenizeFullReference
};
var collapsedReferenceConstruct = {
    tokenize: tokenizeCollapsedReference
};
function resolveAllLabelEnd(events) {
    var index = -1;
    var token;
    while((++index) < events.length){
        token = events[index][1];
        if (!token._used && (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd")) {
            events.splice(index + 1, token.type === "labelImage" ? 4 : 2);
            token.type = "data";
            index++;
        }
    }
    return events;
}
function resolveToLabelEnd(events, context) {
    var index = events.length;
    var offset = 0;
    var group;
    var label;
    var text1;
    var token;
    var open;
    var close;
    var media;
    while(index--){
        token = events[index][1];
        if (open) {
            if (token.type === "link" || token.type === "labelLink" && token._inactive) {
                break;
            }
            if (events[index][0] === "enter" && token.type === "labelLink") {
                token._inactive = true;
            }
        } else if (close) {
            if (events[index][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
                open = index;
                if (token.type !== "labelLink") {
                    offset = 2;
                    break;
                }
            }
        } else if (token.type === "labelEnd") {
            close = index;
        }
    }
    group = {
        type: events[open][1].type === "labelLink" ? "link" : "image",
        start: shallow$3(events[open][1].start),
        end: shallow$3(events[events.length - 1][1].end)
    };
    label = {
        type: "label",
        start: shallow$3(events[open][1].start),
        end: shallow$3(events[close][1].end)
    };
    text1 = {
        type: "labelText",
        start: shallow$3(events[open + offset + 2][1].end),
        end: shallow$3(events[close - 2][1].start)
    };
    media = [
        [
            "enter",
            group,
            context
        ],
        [
            "enter",
            label,
            context
        ]
    ];
    media = chunkedPush$3(media, events.slice(open + 1, open + offset + 3));
    media = chunkedPush$3(media, [
        [
            "enter",
            text1,
            context
        ]
    ]);
    media = chunkedPush$3(media, resolveAll$2(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context));
    media = chunkedPush$3(media, [
        [
            "exit",
            text1,
            context
        ],
        events[close - 2],
        events[close - 1],
        [
            "exit",
            label,
            context
        ]
    ]);
    media = chunkedPush$3(media, events.slice(close + 1));
    media = chunkedPush$3(media, [
        [
            "exit",
            group,
            context
        ]
    ]);
    chunkedSplice$5(events, open, events.length, media);
    return events;
}
function tokenizeLabelEnd(effects, ok, nok) {
    var self = this;
    var index = self.events.length;
    var labelStart;
    var defined;
    while(index--){
        if ((self.events[index][1].type === "labelImage" || self.events[index][1].type === "labelLink") && !self.events[index][1]._balanced) {
            labelStart = self.events[index][1];
            break;
        }
    }
    return start;
    function start(code) {
        if (!labelStart) {
            return nok(code);
        }
        if (labelStart._inactive) return balanced(code);
        defined = self.parser.defined.indexOf(normalizeIdentifier$1(self.sliceSerialize({
            start: labelStart.end,
            end: self.now()
        }))) > -1;
        effects.enter("labelEnd");
        effects.enter("labelMarker");
        effects.consume(code);
        effects.exit("labelMarker");
        effects.exit("labelEnd");
        return afterLabelEnd;
    }
    function afterLabelEnd(code) {
        if (code === 40) {
            return effects.attempt(resourceConstruct, ok, defined ? ok : balanced)(code);
        }
        if (code === 91) {
            return effects.attempt(fullReferenceConstruct, ok, defined ? effects.attempt(collapsedReferenceConstruct, ok, balanced) : balanced)(code);
        }
        return defined ? ok(code) : balanced(code);
    }
    function balanced(code) {
        labelStart._balanced = true;
        return nok(code);
    }
}
function tokenizeResource(effects, ok, nok) {
    return start;
    function start(code) {
        effects.enter("resource");
        effects.enter("resourceMarker");
        effects.consume(code);
        effects.exit("resourceMarker");
        return factoryWhitespace$1(effects, open);
    }
    function open(code) {
        if (code === 41) {
            return end(code);
        }
        return factoryDestination$1(effects, destinationAfter, nok, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 3)(code);
    }
    function destinationAfter(code) {
        return markdownLineEndingOrSpace$6(code) ? factoryWhitespace$1(effects, between)(code) : end(code);
    }
    function between(code) {
        if (code === 34 || code === 39 || code === 40) {
            return factoryTitle$1(effects, factoryWhitespace$1(effects, end), nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code);
        }
        return end(code);
    }
    function end(code) {
        if (code === 41) {
            effects.enter("resourceMarker");
            effects.consume(code);
            effects.exit("resourceMarker");
            effects.exit("resource");
            return ok;
        }
        return nok(code);
    }
}
function tokenizeFullReference(effects, ok, nok) {
    var self = this;
    return start;
    function start(code) {
        return factoryLabel$1.call(self, effects, afterLabel, nok, "reference", "referenceMarker", "referenceString")(code);
    }
    function afterLabel(code) {
        return self.parser.defined.indexOf(normalizeIdentifier$1(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) < 0 ? nok(code) : ok(code);
    }
}
function tokenizeCollapsedReference(effects, ok, nok) {
    return start;
    function start(code) {
        effects.enter("reference");
        effects.enter("referenceMarker");
        effects.consume(code);
        effects.exit("referenceMarker");
        return open;
    }
    function open(code) {
        if (code === 93) {
            effects.enter("referenceMarker");
            effects.consume(code);
            effects.exit("referenceMarker");
            effects.exit("reference");
            return ok;
        }
        return nok(code);
    }
}
exports$x = labelEnd;
var _labelEnd = exports$x;
var exports$y = {
};
var labelEnd$1 = _labelEnd;
var labelStartImage = {
    name: "labelStartImage",
    tokenize: tokenizeLabelStartImage,
    resolveAll: labelEnd$1.resolveAll
};
function tokenizeLabelStartImage(effects, ok, nok) {
    var self = this;
    return start;
    function start(code) {
        effects.enter("labelImage");
        effects.enter("labelImageMarker");
        effects.consume(code);
        effects.exit("labelImageMarker");
        return open;
    }
    function open(code) {
        if (code === 91) {
            effects.enter("labelMarker");
            effects.consume(code);
            effects.exit("labelMarker");
            effects.exit("labelImage");
            return after;
        }
        return nok(code);
    }
    function after(code) {
        return code === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code) : ok(code);
    }
}
exports$y = labelStartImage;
var _labelStartImage = exports$y;
var exports$z = {
};
var labelEnd$2 = _labelEnd;
var labelStartLink = {
    name: "labelStartLink",
    tokenize: tokenizeLabelStartLink,
    resolveAll: labelEnd$2.resolveAll
};
function tokenizeLabelStartLink(effects, ok, nok) {
    var self = this;
    return start;
    function start(code) {
        effects.enter("labelLink");
        effects.enter("labelMarker");
        effects.consume(code);
        effects.exit("labelMarker");
        effects.exit("labelLink");
        return after;
    }
    function after(code) {
        return code === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code) : ok(code);
    }
}
exports$z = labelStartLink;
var _labelStartLink = exports$z;
var exports$A = {
};
var factorySpace$b = _factorySpace;
var lineEnding = {
    name: "lineEnding",
    tokenize: tokenizeLineEnding
};
function tokenizeLineEnding(effects, ok) {
    return start;
    function start(code) {
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace$b(effects, ok, "linePrefix");
    }
}
exports$A = lineEnding;
var _lineEnding = exports$A;
var exports$B = {
};
var markdownLineEnding$f = _markdownLineEnding;
var markdownSpace$5 = _markdownSpace;
var factorySpace$c = _factorySpace;
var thematicBreak1 = {
    name: "thematicBreak",
    tokenize: tokenizeThematicBreak
};
function tokenizeThematicBreak(effects, ok, nok) {
    var size = 0;
    var marker;
    return start;
    function start(code) {
        effects.enter("thematicBreak");
        marker = code;
        return atBreak(code);
    }
    function atBreak(code) {
        if (code === marker) {
            effects.enter("thematicBreakSequence");
            return sequence(code);
        }
        if (markdownSpace$5(code)) {
            return factorySpace$c(effects, atBreak, "whitespace")(code);
        }
        if (size < 3 || code !== null && !markdownLineEnding$f(code)) {
            return nok(code);
        }
        effects.exit("thematicBreak");
        return ok(code);
    }
    function sequence(code) {
        if (code === marker) {
            effects.consume(code);
            size++;
            return sequence;
        }
        effects.exit("thematicBreakSequence");
        return atBreak(code);
    }
}
exports$B = thematicBreak1;
var _thematicBreak = exports$B;
var exports$C = {
};
var markdownSpace$6 = _markdownSpace;
var factorySpace$d = _factorySpace;
var partialBlankLine$3 = _partialBlankLine;
var sizeChunks1 = _sizeChunks;
var prefixSize$3 = _prefixSize;
var asciiDigit$2 = _asciiDigit;
var thematicBreak$1 = _thematicBreak;
var list1 = {
    name: "list",
    tokenize: tokenizeListStart,
    continuation: {
        tokenize: tokenizeListContinuation
    },
    exit: tokenizeListEnd
};
var listItemPrefixWhitespaceConstruct = {
    tokenize: tokenizeListItemPrefixWhitespace,
    partial: true
};
var indentConstruct = {
    tokenize: tokenizeIndent,
    partial: true
};
function tokenizeListStart(effects, ok, nok) {
    var self = this;
    var initialSize = prefixSize$3(self.events, "linePrefix");
    var size = 0;
    return start;
    function start(code) {
        var kind = self.containerState.type || (code === 42 || code === 43 || code === 45 ? "listUnordered" : "listOrdered");
        if (kind === "listUnordered" ? !self.containerState.marker || code === self.containerState.marker : asciiDigit$2(code)) {
            if (!self.containerState.type) {
                self.containerState.type = kind;
                effects.enter(kind, {
                    _container: true
                });
            }
            if (kind === "listUnordered") {
                effects.enter("listItemPrefix");
                return code === 42 || code === 45 ? effects.check(thematicBreak$1, nok, atMarker)(code) : atMarker(code);
            }
            if (!self.interrupt || code === 49) {
                effects.enter("listItemPrefix");
                effects.enter("listItemValue");
                return inside(code);
            }
        }
        return nok(code);
    }
    function inside(code) {
        if (asciiDigit$2(code) && (++size) < 10) {
            effects.consume(code);
            return inside;
        }
        if ((!self.interrupt || size < 2) && (self.containerState.marker ? code === self.containerState.marker : code === 41 || code === 46)) {
            effects.exit("listItemValue");
            return atMarker(code);
        }
        return nok(code);
    }
    function atMarker(code) {
        effects.enter("listItemMarker");
        effects.consume(code);
        effects.exit("listItemMarker");
        self.containerState.marker = self.containerState.marker || code;
        return effects.check(partialBlankLine$3, self.interrupt ? nok : onBlank, effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
    }
    function onBlank(code) {
        self.containerState.initialBlankLine = true;
        initialSize++;
        return endOfPrefix(code);
    }
    function otherPrefix(code) {
        if (markdownSpace$6(code)) {
            effects.enter("listItemPrefixWhitespace");
            effects.consume(code);
            effects.exit("listItemPrefixWhitespace");
            return endOfPrefix;
        }
        return nok(code);
    }
    function endOfPrefix(code) {
        self.containerState.size = initialSize + sizeChunks1(self.sliceStream(effects.exit("listItemPrefix")));
        return ok(code);
    }
}
function tokenizeListContinuation(effects, ok, nok) {
    var self = this;
    self.containerState._closeFlow = undefined;
    return effects.check(partialBlankLine$3, onBlank, notBlank);
    function onBlank(code) {
        self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine;
        return ok(code);
    }
    function notBlank(code) {
        if (self.containerState.furtherBlankLines || !markdownSpace$6(code)) {
            self.containerState.furtherBlankLines = self.containerState.initialBlankLine = undefined;
            return notInCurrentItem(code);
        }
        self.containerState.furtherBlankLines = self.containerState.initialBlankLine = undefined;
        return effects.attempt(indentConstruct, ok, notInCurrentItem)(code);
    }
    function notInCurrentItem(code) {
        self.containerState._closeFlow = true;
        self.interrupt = undefined;
        return factorySpace$d(effects, effects.attempt(list1, ok, nok), "linePrefix", self.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? undefined : 4)(code);
    }
}
function tokenizeIndent(effects, ok, nok) {
    var self = this;
    return factorySpace$d(effects, afterPrefix, "listItemIndent", self.containerState.size + 1);
    function afterPrefix(code) {
        return prefixSize$3(self.events, "listItemIndent") === self.containerState.size ? ok(code) : nok(code);
    }
}
function tokenizeListEnd(effects) {
    effects.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
    var self = this;
    return factorySpace$d(effects, afterPrefix, "listItemPrefixWhitespace", self.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? undefined : 4 + 1);
    function afterPrefix(code) {
        return markdownSpace$6(code) || !prefixSize$3(self.events, "listItemPrefixWhitespace") ? nok(code) : ok(code);
    }
}
exports$C = list1;
var _list = exports$C;
var exports$D = {
};
var markdownLineEnding$g = _markdownLineEnding;
var factorySpace$e = _factorySpace;
var shallow$4 = _shallow;
var setextUnderline = {
    name: "setextUnderline",
    tokenize: tokenizeSetextUnderline,
    resolveTo: resolveToSetextUnderline
};
function resolveToSetextUnderline(events, context) {
    var index = events.length;
    var content2;
    var text1;
    var definition1;
    var heading;
    while(index--){
        if (events[index][0] === "enter") {
            if (events[index][1].type === "content") {
                content2 = index;
                break;
            }
            if (events[index][1].type === "paragraph") {
                text1 = index;
            }
        } else {
            if (events[index][1].type === "content") {
                events.splice(index, 1);
            }
            if (!definition1 && events[index][1].type === "definition") {
                definition1 = index;
            }
        }
    }
    heading = {
        type: "setextHeading",
        start: shallow$4(events[text1][1].start),
        end: shallow$4(events[events.length - 1][1].end)
    };
    events[text1][1].type = "setextHeadingText";
    if (definition1) {
        events.splice(text1, 0, [
            "enter",
            heading,
            context
        ]);
        events.splice(definition1 + 1, 0, [
            "exit",
            events[content2][1],
            context
        ]);
        events[content2][1].end = shallow$4(events[definition1][1].end);
    } else {
        events[content2][1] = heading;
    }
    events.push([
        "exit",
        heading,
        context
    ]);
    return events;
}
function tokenizeSetextUnderline(effects, ok, nok) {
    var self = this;
    var index = self.events.length;
    var marker;
    var paragraph;
    while(index--){
        if (self.events[index][1].type !== "lineEnding" && self.events[index][1].type !== "linePrefix" && self.events[index][1].type !== "content") {
            paragraph = self.events[index][1].type === "paragraph";
            break;
        }
    }
    return start;
    function start(code) {
        if (!self.lazy && (self.interrupt || paragraph)) {
            effects.enter("setextHeadingLine");
            effects.enter("setextHeadingLineSequence");
            marker = code;
            return closingSequence(code);
        }
        return nok(code);
    }
    function closingSequence(code) {
        if (code === marker) {
            effects.consume(code);
            return closingSequence;
        }
        effects.exit("setextHeadingLineSequence");
        return factorySpace$e(effects, closingSequenceEnd, "lineSuffix")(code);
    }
    function closingSequenceEnd(code) {
        if (code === null || markdownLineEnding$g(code)) {
            effects.exit("setextHeadingLine");
            return ok(code);
        }
        return nok(code);
    }
}
exports$D = setextUnderline;
var _setextUnderline = exports$D;
var exports$E = {
};
Object.defineProperty(exports$E, "__esModule", {
    value: true
});
var text$1 = exports$5;
var attention$1 = _attention;
var autolink$1 = _autolink;
var blockQuote$1 = _blockQuote;
var characterEscape$1 = _characterEscape;
var characterReference$1 = _characterReference;
var codeFenced$1 = _codeFenced;
var codeIndented$1 = _codeIndented;
var codeText$1 = _codeText;
var definition$1 = _definition;
var hardBreakEscape$1 = _hardBreakEscape;
var headingAtx$1 = _headingAtx;
var htmlFlow$1 = _htmlFlow;
var htmlText$1 = _htmlText;
var labelEnd$3 = _labelEnd;
var labelStartImage$1 = _labelStartImage;
var labelStartLink$1 = _labelStartLink;
var lineEnding$1 = _lineEnding;
var thematicBreak$2 = _thematicBreak;
var list$1 = _list;
var setextUnderline$1 = _setextUnderline;
var document1 = {
    42: list$1,
    43: list$1,
    45: list$1,
    48: list$1,
    49: list$1,
    50: list$1,
    51: list$1,
    52: list$1,
    53: list$1,
    54: list$1,
    55: list$1,
    56: list$1,
    57: list$1,
    62: blockQuote$1
};
var contentInitial = {
    91: definition$1
};
var flowInitial = {
    "-2": codeIndented$1,
    "-1": codeIndented$1,
    32: codeIndented$1
};
var flow = {
    35: headingAtx$1,
    42: thematicBreak$2,
    45: [
        setextUnderline$1,
        thematicBreak$2
    ],
    60: htmlFlow$1,
    61: setextUnderline$1,
    95: thematicBreak$2,
    96: codeFenced$1,
    126: codeFenced$1
};
var string$1 = {
    38: characterReference$1,
    92: characterEscape$1
};
var text$2 = {
    "-5": lineEnding$1,
    "-4": lineEnding$1,
    "-3": lineEnding$1,
    33: labelStartImage$1,
    38: characterReference$1,
    42: attention$1,
    60: [
        autolink$1,
        htmlText$1
    ],
    91: labelStartLink$1,
    92: [
        hardBreakEscape$1,
        characterEscape$1
    ],
    93: labelEnd$3,
    95: attention$1,
    96: codeText$1
};
var insideSpan = {
    null: [
        attention$1,
        text$1.resolver
    ]
};
var disable = {
    null: []
};
exports$E.contentInitial = contentInitial;
exports$E.disable = disable;
exports$E.document = document1;
exports$E.flow = flow;
exports$E.flowInitial = flowInitial;
exports$E.insideSpan = insideSpan;
exports$E.string = string$1;
exports$E.text = text$2;
var exports$F = {
};
var miniflat$11 = _miniflat;
var content$2 = exports$15;
var document$1 = exports$21;
var flow$1 = exports$4;
var text$3 = exports$5;
var combineExtensions1 = _combineExtensions;
var createTokenizer$1 = _createTokenizer;
var constructs1 = exports$E;
function parse(options) {
    var settings = options || {
    };
    var parser = {
        defined: [],
        constructs: combineExtensions1([
            constructs1
        ].concat(miniflat$11(settings.extensions))),
        content: create(content$2),
        document: create(document$1),
        flow: create(flow$1),
        string: create(text$3.string),
        text: create(text$3.text)
    };
    return parser;
    function create(initializer) {
        return creator;
        function creator(from) {
            return createTokenizer$1(parser, initializer, from);
        }
    }
}
exports$F = parse;
var _parse = exports$F;
const a = _parse;
var exports25 = {
};
var search = /[\0\t\n\r]/g;
function preprocess() {
    var start = true;
    var column = 1;
    var buffer = "";
    var atCarriageReturn;
    return preprocessor;
    function preprocessor(value, encoding, end) {
        var chunks = [];
        var match;
        var next;
        var startPosition;
        var endPosition;
        var code;
        value = buffer + value.toString(encoding);
        startPosition = 0;
        buffer = "";
        if (start) {
            if (value.charCodeAt(0) === 65279) {
                startPosition++;
            }
            start = undefined;
        }
        while(startPosition < value.length){
            search.lastIndex = startPosition;
            match = search.exec(value);
            endPosition = match ? match.index : value.length;
            code = value.charCodeAt(endPosition);
            if (!match) {
                buffer = value.slice(startPosition);
                break;
            }
            if (code === 10 && startPosition === endPosition && atCarriageReturn) {
                chunks.push(-3);
                atCarriageReturn = undefined;
            } else {
                if (atCarriageReturn) {
                    chunks.push(-5);
                    atCarriageReturn = undefined;
                }
                if (startPosition < endPosition) {
                    chunks.push(value.slice(startPosition, endPosition));
                    column += endPosition - startPosition;
                }
                if (code === 0) {
                    chunks.push(65533);
                    column++;
                } else if (code === 9) {
                    next = Math.ceil(column / 4) * 4;
                    chunks.push(-2);
                    while((column++) < next)chunks.push(-1);
                } else if (code === 10) {
                    chunks.push(-4);
                    column = 1;
                } else {
                    atCarriageReturn = true;
                    column = 1;
                }
            }
            startPosition = endPosition + 1;
        }
        if (end) {
            if (atCarriageReturn) chunks.push(-5);
            if (buffer) chunks.push(buffer);
            chunks.push(null);
        }
        return chunks;
    }
}
exports25 = preprocess;
var _preprocess = exports25;
var exports26 = {
};
var subtokenize2 = _subtokenize;
function postprocess(events) {
    while(!subtokenize2(events)){
    }
    return events;
}
exports26 = postprocess;
var _postprocess = exports26;
var exports27 = {
};
var own1 = {
}.hasOwnProperty;
exports27 = stringify;
function stringify(value) {
    if (!value || typeof value !== "object") {
        return "";
    }
    if (own1.call(value, "position") || own1.call(value, "type")) {
        return position(value.position);
    }
    if (own1.call(value, "start") || own1.call(value, "end")) {
        return position(value);
    }
    if (own1.call(value, "line") || own1.call(value, "column")) {
        return point1(value);
    }
    return "";
}
function point1(point1) {
    if (!point1 || typeof point1 !== "object") {
        point1 = {
        };
    }
    return index(point1.line) + ":" + index(point1.column);
}
function position(pos) {
    if (!pos || typeof pos !== "object") {
        pos = {
        };
    }
    return point1(pos.start) + "-" + point1(pos.end);
}
function index(value) {
    return value && typeof value === "number" ? value : 1;
}
var exports$16 = exports27;
var exports28 = {
};
exports28 = fromMarkdown2;
var toString1 = exports$1;
var assign4 = _assign;
var own2 = _hasOwnProperty;
var normalizeIdentifier2 = _normalizeIdentifier;
var safeFromInt1 = _safeFromInt;
var parser = a;
var preprocessor = _preprocess;
var postprocess1 = _postprocess;
var decode = _decodeEntity;
var stringifyPosition = exports$16;
function fromMarkdown2(value, encoding, options) {
    if (typeof encoding !== "string") {
        options = encoding;
        encoding = undefined;
    }
    return compiler(options)(postprocess1(parser(options).document().write(preprocessor()(value, encoding, true))));
}
function compiler(options) {
    var settings = options || {
    };
    var config = configure({
        canContainEols: [
            "emphasis",
            "fragment",
            "heading",
            "paragraph",
            "strong"
        ],
        enter: {
            autolink: opener(link),
            autolinkProtocol: onenterdata,
            autolinkEmail: onenterdata,
            atxHeading: opener(heading),
            blockQuote: opener(blockQuote2),
            characterEscape: onenterdata,
            characterReference: onenterdata,
            codeFenced: opener(codeFlow),
            codeFencedFenceInfo: buffer,
            codeFencedFenceMeta: buffer,
            codeIndented: opener(codeFlow, buffer),
            codeText: opener(codeText2, buffer),
            codeTextData: onenterdata,
            data: onenterdata,
            codeFlowValue: onenterdata,
            definition: opener(definition2),
            definitionDestinationString: buffer,
            definitionLabelString: buffer,
            definitionTitleString: buffer,
            emphasis: opener(emphasis),
            hardBreakEscape: opener(hardBreak),
            hardBreakTrailing: opener(hardBreak),
            htmlFlow: opener(html, buffer),
            htmlFlowData: onenterdata,
            htmlText: opener(html, buffer),
            htmlTextData: onenterdata,
            image: opener(image),
            label: buffer,
            link: opener(link),
            listItem: opener(listItem),
            listItemValue: onenterlistitemvalue,
            listOrdered: opener(list2, onenterlistordered),
            listUnordered: opener(list2),
            paragraph: opener(paragraph),
            reference: onenterreference,
            referenceString: buffer,
            resourceDestinationString: buffer,
            resourceTitleString: buffer,
            setextHeading: opener(heading),
            strong: opener(strong),
            thematicBreak: opener(thematicBreak2)
        },
        exit: {
            atxHeading: closer(),
            atxHeadingSequence: onexitatxheadingsequence,
            autolink: closer(),
            autolinkEmail: onexitautolinkemail,
            autolinkProtocol: onexitautolinkprotocol,
            blockQuote: closer(),
            characterEscapeValue: onexitdata,
            characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
            characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
            characterReferenceValue: onexitcharacterreferencevalue,
            codeFenced: closer(onexitcodefenced),
            codeFencedFence: onexitcodefencedfence,
            codeFencedFenceInfo: onexitcodefencedfenceinfo,
            codeFencedFenceMeta: onexitcodefencedfencemeta,
            codeFlowValue: onexitdata,
            codeIndented: closer(onexitcodeindented),
            codeText: closer(onexitcodetext),
            codeTextData: onexitdata,
            data: onexitdata,
            definition: closer(),
            definitionDestinationString: onexitdefinitiondestinationstring,
            definitionLabelString: onexitdefinitionlabelstring,
            definitionTitleString: onexitdefinitiontitlestring,
            emphasis: closer(),
            hardBreakEscape: closer(onexithardbreak),
            hardBreakTrailing: closer(onexithardbreak),
            htmlFlow: closer(onexithtmlflow),
            htmlFlowData: onexitdata,
            htmlText: closer(onexithtmltext),
            htmlTextData: onexitdata,
            image: closer(onexitimage),
            label: onexitlabel,
            labelText: onexitlabeltext,
            lineEnding: onexitlineending,
            link: closer(onexitlink),
            listItem: closer(),
            listOrdered: closer(),
            listUnordered: closer(),
            paragraph: closer(),
            referenceString: onexitreferencestring,
            resourceDestinationString: onexitresourcedestinationstring,
            resourceTitleString: onexitresourcetitlestring,
            resource: onexitresource,
            setextHeading: closer(onexitsetextheading),
            setextHeadingLineSequence: onexitsetextheadinglinesequence,
            setextHeadingText: onexitsetextheadingtext,
            strong: closer(),
            thematicBreak: closer()
        }
    }, settings.mdastExtensions || []);
    var data = {
    };
    return compile;
    function compile(events) {
        var stack = [
            {
                type: "root",
                children: []
            }
        ];
        var tokenStack = [];
        var listStack = [];
        var index1 = -1;
        var handler;
        var listStart;
        var context = {
            stack: stack,
            tokenStack: tokenStack,
            config: config,
            enter: enter,
            exit: exit2,
            buffer: buffer,
            resume: resume,
            setData: setData,
            getData: getData
        };
        while((++index1) < events.length){
            if (events[index1][1].type === "listOrdered" || events[index1][1].type === "listUnordered") {
                if (events[index1][0] === "enter") {
                    listStack.push(index1);
                } else {
                    listStart = listStack.pop(index1);
                    index1 = prepareList(events, listStart, index1);
                }
            }
        }
        index1 = -1;
        while((++index1) < events.length){
            handler = config[events[index1][0]];
            if (own2.call(handler, events[index1][1].type)) {
                handler[events[index1][1].type].call(assign4({
                    sliceSerialize: events[index1][2].sliceSerialize
                }, context), events[index1][1]);
            }
        }
        if (tokenStack.length) {
            throw new Error("Cannot close document, a token (`" + tokenStack[tokenStack.length - 1].type + "`, " + stringifyPosition({
                start: tokenStack[tokenStack.length - 1].start,
                end: tokenStack[tokenStack.length - 1].end
            }) + ") is still open");
        }
        stack[0].position = {
            start: point2(events.length ? events[0][1].start : {
                line: 1,
                column: 1,
                offset: 0
            }),
            end: point2(events.length ? events[events.length - 2][1].end : {
                line: 1,
                column: 1,
                offset: 0
            })
        };
        return stack[0];
    }
    function prepareList(events, start, length) {
        var index1 = start - 1;
        var containerBalance = -1;
        var listSpread = false;
        var listItem;
        var tailIndex;
        var lineIndex;
        var tailEvent;
        var event;
        var firstBlankLineIndex;
        var atMarker;
        while((++index1) <= length){
            event = events[index1];
            if (event[1].type === "listUnordered" || event[1].type === "listOrdered" || event[1].type === "blockQuote") {
                if (event[0] === "enter") {
                    containerBalance++;
                } else {
                    containerBalance--;
                }
                atMarker = undefined;
            } else if (event[1].type === "lineEndingBlank") {
                if (event[0] === "enter") {
                    if (listItem && !atMarker && !containerBalance && !firstBlankLineIndex) {
                        firstBlankLineIndex = index1;
                    }
                    atMarker = undefined;
                }
            } else if (event[1].type === "linePrefix" || event[1].type === "listItemValue" || event[1].type === "listItemMarker" || event[1].type === "listItemPrefix" || event[1].type === "listItemPrefixWhitespace") {
            } else {
                atMarker = undefined;
            }
            if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
                if (listItem) {
                    tailIndex = index1;
                    lineIndex = undefined;
                    while(tailIndex--){
                        tailEvent = events[tailIndex];
                        if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
                            if (tailEvent[0] === "exit") continue;
                            if (lineIndex) {
                                events[lineIndex][1].type = "lineEndingBlank";
                                listSpread = true;
                            }
                            tailEvent[1].type = "lineEnding";
                            lineIndex = tailIndex;
                        } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") {
                        } else {
                            break;
                        }
                    }
                    if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
                        listItem._spread = true;
                    }
                    listItem.end = point2(lineIndex ? events[lineIndex][1].start : event[1].end);
                    events.splice(lineIndex || index1, 0, [
                        "exit",
                        listItem,
                        event[2]
                    ]);
                    index1++;
                    length++;
                }
                if (event[1].type === "listItemPrefix") {
                    listItem = {
                        type: "listItem",
                        _spread: false,
                        start: point2(event[1].start)
                    };
                    events.splice(index1, 0, [
                        "enter",
                        listItem,
                        event[2]
                    ]);
                    index1++;
                    length++;
                    firstBlankLineIndex = undefined;
                    atMarker = true;
                }
            }
        }
        events[start][1]._spread = listSpread;
        return length;
    }
    function setData(key, value) {
        data[key] = value;
    }
    function getData(key) {
        return data[key];
    }
    function point2(d) {
        return {
            line: d.line,
            column: d.column,
            offset: d.offset
        };
    }
    function opener(create, and) {
        return open;
        function open(token) {
            enter.call(this, create(token), token);
            if (and) and.call(this, token);
        }
    }
    function buffer() {
        this.stack.push({
            type: "fragment",
            children: []
        });
    }
    function enter(node, token) {
        this.stack[this.stack.length - 1].children.push(node);
        this.stack.push(node);
        this.tokenStack.push(token);
        node.position = {
            start: point2(token.start)
        };
        return node;
    }
    function closer(and) {
        return close;
        function close(token) {
            if (and) and.call(this, token);
            exit2.call(this, token);
        }
    }
    function exit2(token) {
        var node = this.stack.pop();
        var open = this.tokenStack.pop();
        if (!open) {
            throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({
                start: token.start,
                end: token.end
            }) + "): it\u2019s not open");
        } else if (open.type !== token.type) {
            throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({
                start: token.start,
                end: token.end
            }) + "): a different token (`" + open.type + "`, " + stringifyPosition({
                start: open.start,
                end: open.end
            }) + ") is open");
        }
        node.position.end = point2(token.end);
        return node;
    }
    function resume() {
        return toString1(this.stack.pop());
    }
    function onenterlistordered() {
        setData("expectingFirstListItemValue", true);
    }
    function onenterlistitemvalue(token) {
        if (getData("expectingFirstListItemValue")) {
            this.stack[this.stack.length - 2].start = parseInt(this.sliceSerialize(token), 10);
            setData("expectingFirstListItemValue");
        }
    }
    function onexitcodefencedfenceinfo() {
        var data1 = this.resume();
        this.stack[this.stack.length - 1].lang = data1;
    }
    function onexitcodefencedfencemeta() {
        var data1 = this.resume();
        this.stack[this.stack.length - 1].meta = data1;
    }
    function onexitcodefencedfence() {
        if (getData("flowCodeInside")) return;
        this.buffer();
        setData("flowCodeInside", true);
    }
    function onexitcodefenced() {
        var data1 = this.resume();
        this.stack[this.stack.length - 1].value = data1.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
        setData("flowCodeInside");
    }
    function onexitcodeindented() {
        var data1 = this.resume();
        this.stack[this.stack.length - 1].value = data1;
    }
    function onexitdefinitionlabelstring(token) {
        var label = this.resume();
        this.stack[this.stack.length - 1].label = label;
        this.stack[this.stack.length - 1].identifier = normalizeIdentifier2(this.sliceSerialize(token)).toLowerCase();
    }
    function onexitdefinitiontitlestring() {
        var data1 = this.resume();
        this.stack[this.stack.length - 1].title = data1;
    }
    function onexitdefinitiondestinationstring() {
        var data1 = this.resume();
        this.stack[this.stack.length - 1].url = data1;
    }
    function onexitatxheadingsequence(token) {
        if (!this.stack[this.stack.length - 1].depth) {
            this.stack[this.stack.length - 1].depth = this.sliceSerialize(token).length;
        }
    }
    function onexitsetextheadingtext() {
        setData("setextHeadingSlurpLineEnding", true);
    }
    function onexitsetextheadinglinesequence(token) {
        this.stack[this.stack.length - 1].depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
    }
    function onexitsetextheading() {
        setData("setextHeadingSlurpLineEnding");
    }
    function onenterdata(token) {
        var siblings = this.stack[this.stack.length - 1].children;
        var tail = siblings[siblings.length - 1];
        if (!tail || tail.type !== "text") {
            tail = text2();
            tail.position = {
                start: point2(token.start)
            };
            this.stack[this.stack.length - 1].children.push(tail);
        }
        this.stack.push(tail);
    }
    function onexitdata(token) {
        var tail = this.stack.pop();
        tail.value += this.sliceSerialize(token);
        tail.position.end = point2(token.end);
    }
    function onexitlineending(token) {
        var context = this.stack[this.stack.length - 1];
        if (getData("atHardBreak")) {
            context.children[context.children.length - 1].position.end = point2(token.end);
            setData("atHardBreak");
            return;
        }
        if (!getData("setextHeadingSlurpLineEnding") && config.canContainEols.indexOf(context.type) > -1) {
            onenterdata.call(this, token);
            onexitdata.call(this, token);
        }
    }
    function onexithardbreak() {
        setData("atHardBreak", true);
    }
    function onexithtmlflow() {
        var data1 = this.resume();
        this.stack[this.stack.length - 1].value = data1;
    }
    function onexithtmltext() {
        var data1 = this.resume();
        this.stack[this.stack.length - 1].value = data1;
    }
    function onexitcodetext() {
        var data1 = this.resume();
        this.stack[this.stack.length - 1].value = data1;
    }
    function onexitlink() {
        var context = this.stack[this.stack.length - 1];
        if (getData("inReference")) {
            context.type += "Reference";
            context.referenceType = getData("referenceType") || "shortcut";
            delete context.url;
            delete context.title;
        } else {
            delete context.identifier;
            delete context.label;
            delete context.referenceType;
        }
        setData("referenceType");
    }
    function onexitimage() {
        var context = this.stack[this.stack.length - 1];
        if (getData("inReference")) {
            context.type += "Reference";
            context.referenceType = getData("referenceType") || "shortcut";
            delete context.url;
            delete context.title;
        } else {
            delete context.identifier;
            delete context.label;
            delete context.referenceType;
        }
        setData("referenceType");
    }
    function onexitlabeltext(token) {
        this.stack[this.stack.length - 2].identifier = normalizeIdentifier2(this.sliceSerialize(token)).toLowerCase();
    }
    function onexitlabel() {
        var fragment = this.stack[this.stack.length - 1];
        var value = this.resume();
        this.stack[this.stack.length - 1].label = value;
        setData("inReference", true);
        if (this.stack[this.stack.length - 1].type === "link") {
            this.stack[this.stack.length - 1].children = fragment.children;
        } else {
            this.stack[this.stack.length - 1].alt = value;
        }
    }
    function onexitresourcedestinationstring() {
        var data1 = this.resume();
        this.stack[this.stack.length - 1].url = data1;
    }
    function onexitresourcetitlestring() {
        var data1 = this.resume();
        this.stack[this.stack.length - 1].title = data1;
    }
    function onexitresource() {
        setData("inReference");
    }
    function onenterreference() {
        setData("referenceType", "collapsed");
    }
    function onexitreferencestring(token) {
        var label = this.resume();
        this.stack[this.stack.length - 1].label = label;
        this.stack[this.stack.length - 1].identifier = normalizeIdentifier2(this.sliceSerialize(token)).toLowerCase();
        setData("referenceType", "full");
    }
    function onexitcharacterreferencemarker(token) {
        setData("characterReferenceType", token.type);
    }
    function onexitcharacterreferencevalue(token) {
        var data1 = this.sliceSerialize(token);
        var type = getData("characterReferenceType");
        var value;
        var tail;
        if (type) {
            value = safeFromInt1(data1, type === "characterReferenceMarkerNumeric" ? 10 : 16);
            setData("characterReferenceType");
        } else {
            value = decode(data1);
        }
        tail = this.stack.pop();
        tail.value += value;
        tail.position.end = point2(token.end);
    }
    function onexitautolinkprotocol(token) {
        onexitdata.call(this, token);
        this.stack[this.stack.length - 1].url = this.sliceSerialize(token);
    }
    function onexitautolinkemail(token) {
        onexitdata.call(this, token);
        this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(token);
    }
    function blockQuote2() {
        return {
            type: "blockquote",
            children: []
        };
    }
    function codeFlow() {
        return {
            type: "code",
            lang: null,
            meta: null,
            value: ""
        };
    }
    function codeText2() {
        return {
            type: "inlineCode",
            value: ""
        };
    }
    function definition2() {
        return {
            type: "definition",
            identifier: "",
            label: null,
            title: null,
            url: ""
        };
    }
    function emphasis() {
        return {
            type: "emphasis",
            children: []
        };
    }
    function heading() {
        return {
            type: "heading",
            depth: undefined,
            children: []
        };
    }
    function hardBreak() {
        return {
            type: "break"
        };
    }
    function html() {
        return {
            type: "html",
            value: ""
        };
    }
    function image() {
        return {
            type: "image",
            title: null,
            url: "",
            alt: null
        };
    }
    function link() {
        return {
            type: "link",
            title: null,
            url: "",
            children: []
        };
    }
    function list2(token) {
        return {
            type: "list",
            ordered: token.type === "listOrdered",
            start: null,
            spread: token._spread,
            children: []
        };
    }
    function listItem(token) {
        return {
            type: "listItem",
            spread: token._spread,
            checked: null,
            children: []
        };
    }
    function paragraph() {
        return {
            type: "paragraph",
            children: []
        };
    }
    function strong() {
        return {
            type: "strong",
            children: []
        };
    }
    function text2() {
        return {
            type: "text",
            value: ""
        };
    }
    function thematicBreak2() {
        return {
            type: "thematicBreak"
        };
    }
}
function configure(config, extensions) {
    var index1 = -1;
    while((++index1) < extensions.length){
        extension2(config, extensions[index1]);
    }
    return config;
}
function extension2(config, extension3) {
    var key;
    var left;
    for(key in extension3){
        left = own2.call(config, key) ? config[key] : config[key] = {
        };
        if (key === "canContainEols") {
            config[key] = [].concat(left, extension3[key]);
        } else {
            Object.assign(left, extension3[key]);
        }
    }
}
var exports$17 = exports28;
globalThis.document = {
    createElement: (...data1)=>{
        return new class {
            set innerHTML(data) {
                this.textContent = data;
            }
            textContent = '';
        }();
    }
};
document.createElement();
const fromMarkdown1 = exports$17;
export { fromMarkdown1 as fromMarkdown };
