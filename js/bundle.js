(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == 'function' && require;
                if (!u && a)
                    return a(o, !0);
                if (i)
                    return i(o, !0);
                throw new Error('Cannot find module \'' + o + '\'');
            }
            var f = n[o] = { exports: {} };
            t[o][0].call(f.exports, function (e) {
                var n = t[o][1][e];
                return s(n ? n : e);
            }, f, f.exports, e, t, n, r);
        }
        return n[o].exports;
    }
    var i = typeof require == 'function' && require;
    for (var o = 0; o < r.length; o++)
        s(r[o]);
    return s;
}({
    1: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                var choo = require('choo');
                var app = choo();
                var mainView = require('./views/main');
                app.route('/', mainView);
                app.state = { projects: [] };
                const container = document.getElementById('app');
                const tree = app.start();
                container.innerHTML = '';
                container.appendChild(tree);
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/fake_b19d897e.js', '/'));
        },
        {
            './views/main': 2,
            '7YKIPe': 11,
            'buffer': 10,
            'choo': 6
        }
    ],
    2: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                const html = require('choo/html');
                module.exports = function (state, prev, send) {
                    return html`
    <ul class="portfolio">
        ${ state.projects.map((project, index) => html`
            <li class="portfolio-item">
                <span>
                    <video poster="${ project.featured_image_path }" preload="none" loop muted>
                        <source type="video/mp4" data-src="${ project.featured_video_path }" />
                    </video>
                    <div class="portfolio-itemBorder"></div>
                    <div class="portfolio-itemImage" style="background-image: url('${ project.featured_image_path }');"></div>
                    <img class="portfolio-itemImage-touch" data-src="${ project.featured_image_path }" alt="" />
                </span>
                <a class="portfolio-itemExternalLink" href="${ project.site.url }" target="_blank">${ project.site.url_title }</a>
            </li>`) }
    </ul>`;
                };
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/views/main.js', '/views'));
        },
        {
            '7YKIPe': 11,
            'buffer': 10,
            'choo/html': 5
        }
    ],
    3: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                var trailingNewlineRegex = /\n[\s]+$/;
                var leadingNewlineRegex = /^\n[\s]+/;
                var trailingSpaceRegex = /[\s]+$/;
                var leadingSpaceRegex = /^[\s]+/;
                var multiSpaceRegex = /[\n\s]+/g;
                var TEXT_TAGS = [
                    'a',
                    'abbr',
                    'b',
                    'bdi',
                    'bdo',
                    'br',
                    'cite',
                    'data',
                    'dfn',
                    'em',
                    'i',
                    'kbd',
                    'mark',
                    'q',
                    'rp',
                    'rt',
                    'rtc',
                    'ruby',
                    's',
                    'amp',
                    'small',
                    'span',
                    'strong',
                    'sub',
                    'sup',
                    'time',
                    'u',
                    'var',
                    'wbr'
                ];
                var CODE_TAGS = [
                    'code',
                    'pre'
                ];
                module.exports = function appendChild(el, childs) {
                    if (!Array.isArray(childs))
                        return;
                    var nodeName = el.nodeName.toLowerCase();
                    var hadText = false;
                    var value, leader;
                    for (var i = 0, len = childs.length; i < len; i++) {
                        var node = childs[i];
                        if (Array.isArray(node)) {
                            appendChild(el, node);
                            continue;
                        }
                        if (typeof node === 'number' || typeof node === 'boolean' || typeof node === 'function' || node instanceof Date || node instanceof RegExp) {
                            node = node.toString();
                        }
                        var lastChild = el.childNodes[el.childNodes.length - 1];
                        if (typeof node === 'string') {
                            hadText = true;
                            if (lastChild && lastChild.nodeName === '#text') {
                                lastChild.nodeValue += node;
                            } else {
                                node = document.createTextNode(node);
                                el.appendChild(node);
                                lastChild = node;
                            }
                            if (i === len - 1) {
                                hadText = false;
                                if (TEXT_TAGS.indexOf(nodeName) === -1 && CODE_TAGS.indexOf(nodeName) === -1) {
                                    value = lastChild.nodeValue.replace(leadingNewlineRegex, '').replace(trailingSpaceRegex, '').replace(trailingNewlineRegex, '').replace(multiSpaceRegex, ' ');
                                    if (value === '') {
                                        el.removeChild(lastChild);
                                    } else {
                                        lastChild.nodeValue = value;
                                    }
                                } else if (CODE_TAGS.indexOf(nodeName) === -1) {
                                    leader = i === 0 ? '' : ' ';
                                    value = lastChild.nodeValue.replace(leadingNewlineRegex, leader).replace(leadingSpaceRegex, ' ').replace(trailingSpaceRegex, '').replace(trailingNewlineRegex, '').replace(multiSpaceRegex, ' ');
                                    lastChild.nodeValue = value;
                                }
                            }
                        } else if (node && node.nodeType) {
                            if (hadText) {
                                hadText = false;
                                if (TEXT_TAGS.indexOf(nodeName) === -1 && CODE_TAGS.indexOf(nodeName) === -1) {
                                    value = lastChild.nodeValue.replace(leadingNewlineRegex, '').replace(trailingNewlineRegex, '').replace(multiSpaceRegex, ' ');
                                    if (value === '') {
                                        el.removeChild(lastChild);
                                    } else {
                                        lastChild.nodeValue = value;
                                    }
                                } else if (CODE_TAGS.indexOf(nodeName) === -1) {
                                    value = lastChild.nodeValue.replace(leadingSpaceRegex, ' ').replace(leadingNewlineRegex, '').replace(trailingNewlineRegex, '').replace(multiSpaceRegex, ' ');
                                    lastChild.nodeValue = value;
                                }
                            }
                            var _nodeName = node.nodeName;
                            if (_nodeName)
                                nodeName = _nodeName.toLowerCase();
                            el.appendChild(node);
                        }
                    }
                };
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/bel/appendChild.js', '/../node_modules/bel'));
        },
        {
            '7YKIPe': 11,
            'buffer': 10
        }
    ],
    4: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                var hyperx = require('hyperx');
                var appendChild = require('./appendChild');
                var SVGNS = 'http://www.w3.org/2000/svg';
                var XLINKNS = 'http://www.w3.org/1999/xlink';
                var BOOL_PROPS = [
                    'autofocus',
                    'checked',
                    'defaultchecked',
                    'disabled',
                    'formnovalidate',
                    'indeterminate',
                    'readonly',
                    'required',
                    'selected',
                    'willvalidate'
                ];
                var COMMENT_TAG = '!--';
                var SVG_TAGS = [
                    'svg',
                    'altGlyph',
                    'altGlyphDef',
                    'altGlyphItem',
                    'animate',
                    'animateColor',
                    'animateMotion',
                    'animateTransform',
                    'circle',
                    'clipPath',
                    'color-profile',
                    'cursor',
                    'defs',
                    'desc',
                    'ellipse',
                    'feBlend',
                    'feColorMatrix',
                    'feComponentTransfer',
                    'feComposite',
                    'feConvolveMatrix',
                    'feDiffuseLighting',
                    'feDisplacementMap',
                    'feDistantLight',
                    'feFlood',
                    'feFuncA',
                    'feFuncB',
                    'feFuncG',
                    'feFuncR',
                    'feGaussianBlur',
                    'feImage',
                    'feMerge',
                    'feMergeNode',
                    'feMorphology',
                    'feOffset',
                    'fePointLight',
                    'feSpecularLighting',
                    'feSpotLight',
                    'feTile',
                    'feTurbulence',
                    'filter',
                    'font',
                    'font-face',
                    'font-face-format',
                    'font-face-name',
                    'font-face-src',
                    'font-face-uri',
                    'foreignObject',
                    'g',
                    'glyph',
                    'glyphRef',
                    'hkern',
                    'image',
                    'line',
                    'linearGradient',
                    'marker',
                    'mask',
                    'metadata',
                    'missing-glyph',
                    'mpath',
                    'path',
                    'pattern',
                    'polygon',
                    'polyline',
                    'radialGradient',
                    'rect',
                    'set',
                    'stop',
                    'switch',
                    'symbol',
                    'text',
                    'textPath',
                    'title',
                    'tref',
                    'tspan',
                    'use',
                    'view',
                    'vkern'
                ];
                function belCreateElement(tag, props, children) {
                    var el;
                    if (SVG_TAGS.indexOf(tag) !== -1) {
                        props.namespace = SVGNS;
                    }
                    var ns = false;
                    if (props.namespace) {
                        ns = props.namespace;
                        delete props.namespace;
                    }
                    if (ns) {
                        el = document.createElementNS(ns, tag);
                    } else if (tag === COMMENT_TAG) {
                        return document.createComment(props.comment);
                    } else {
                        el = document.createElement(tag);
                    }
                    for (var p in props) {
                        if (props.hasOwnProperty(p)) {
                            var key = p.toLowerCase();
                            var val = props[p];
                            if (key === 'classname') {
                                key = 'class';
                                p = 'class';
                            }
                            if (p === 'htmlFor') {
                                p = 'for';
                            }
                            if (BOOL_PROPS.indexOf(key) !== -1) {
                                if (val === 'true')
                                    val = key;
                                else if (val === 'false')
                                    continue;
                            }
                            if (key.slice(0, 2) === 'on') {
                                el[p] = val;
                            } else {
                                if (ns) {
                                    if (p === 'xlink:href') {
                                        el.setAttributeNS(XLINKNS, p, val);
                                    } else if (/^xmlns($|:)/i.test(p)) {
                                    } else {
                                        el.setAttributeNS(null, p, val);
                                    }
                                } else {
                                    el.setAttribute(p, val);
                                }
                            }
                        }
                    }
                    appendChild(el, children);
                    return el;
                }
                module.exports = hyperx(belCreateElement, { comments: true });
                module.exports.default = module.exports;
                module.exports.createElement = belCreateElement;
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/bel/browser.js', '/../node_modules/bel'));
        },
        {
            './appendChild': 3,
            '7YKIPe': 11,
            'buffer': 10,
            'hyperx': 13
        }
    ],
    5: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                module.exports = require('bel');
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/choo/html/index.js', '/../node_modules/choo/html'));
        },
        {
            '7YKIPe': 11,
            'bel': 4,
            'buffer': 10
        }
    ],
    6: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                var scrollToAnchor = require('scroll-to-anchor');
                var documentReady = require('document-ready');
                var nanolocation = require('nanolocation');
                var nanotiming = require('nanotiming');
                var nanorouter = require('nanorouter');
                var nanomorph = require('nanomorph');
                var nanoquery = require('nanoquery');
                var nanohref = require('nanohref');
                var nanoraf = require('nanoraf');
                var nanobus = require('nanobus');
                var xtend = require('xtend');
                module.exports = Choo;
                var HISTORY_OBJECT = {};
                function Choo(opts) {
                    if (!(this instanceof Choo))
                        return new Choo(opts);
                    opts = opts || {};
                    var self = this;
                    this._events = {
                        DOMCONTENTLOADED: 'DOMContentLoaded',
                        DOMTITLECHANGE: 'DOMTitleChange',
                        REPLACESTATE: 'replaceState',
                        PUSHSTATE: 'pushState',
                        NAVIGATE: 'navigate',
                        POPSTATE: 'popState',
                        RENDER: 'render'
                    };
                    this._historyEnabled = opts.history === undefined ? true : opts.history;
                    this._hrefEnabled = opts.href === undefined ? true : opts.href;
                    this._hasWindow = typeof window !== 'undefined';
                    this._createLocation = nanolocation;
                    this._loaded = false;
                    this._tree = null;
                    this.router = nanorouter({ curry: true });
                    this.emitter = nanobus('choo.emit');
                    this.state = { events: this._events };
                    if (this._hasWindow)
                        this.state.title = document.title;
                    this.emitter.prependListener(this._events.DOMTITLECHANGE, function (title) {
                        self.state.title = title;
                        if (self._hasWindow)
                            document.title = title;
                    });
                }
                Choo.prototype.route = function (route, handler) {
                    var self = this;
                    this.router.on(route, function (params) {
                        return function () {
                            self.state.params = params;
                            self.state.route = route;
                            var routeTiming = nanotiming('choo.route(\'' + route + '\')');
                            var res = handler(self.state, function (eventName, data) {
                                self.emitter.emit(eventName, data);
                            });
                            routeTiming();
                            return res;
                        };
                    });
                };
                Choo.prototype.use = function (cb) {
                    var msg = 'choo.use';
                    msg = cb.storeName ? msg + '(' + cb.storeName + ')' : msg;
                    var endTiming = nanotiming(msg);
                    cb(this.state, this.emitter, this);
                    endTiming();
                };
                Choo.prototype.start = function () {
                    var self = this;
                    if (this._historyEnabled) {
                        this.emitter.prependListener(this._events.NAVIGATE, function () {
                            self.state.query = nanoquery(window.location.search);
                            if (self._loaded) {
                                self.emitter.emit(self._events.RENDER);
                                setTimeout(scrollToAnchor.bind(null, window.location.hash), 0);
                            }
                        });
                        this.emitter.prependListener(this._events.POPSTATE, function () {
                            self.emitter.emit(self._events.NAVIGATE);
                        });
                        this.emitter.prependListener(this._events.PUSHSTATE, function (href) {
                            window.history.pushState(HISTORY_OBJECT, null, href);
                            self.emitter.emit(self._events.NAVIGATE);
                        });
                        this.emitter.prependListener(this._events.REPLACESTATE, function (href) {
                            window.history.replaceState(HISTORY_OBJECT, null, href);
                            self.emitter.emit(self._events.NAVIGATE);
                        });
                        window.onpopstate = function () {
                            self.emitter.emit(self._events.POPSTATE);
                        };
                        if (self._hrefEnabled) {
                            nanohref(function (location) {
                                var href = location.href;
                                var currHref = window.location.href;
                                if (href === currHref)
                                    return;
                                self.emitter.emit(self._events.PUSHSTATE, href);
                            });
                        }
                    }
                    this.state.href = this._createLocation();
                    this._tree = this.router(this.state.href);
                    this.state.query = nanoquery(window.location.search);
                    this.emitter.prependListener(self._events.RENDER, nanoraf(function () {
                        var renderTiming = nanotiming('choo.render');
                        self.state.href = self._createLocation();
                        var newTree = self.router(self.state.href);
                        var morphTiming = nanotiming('choo.morph');
                        nanomorph(self._tree, newTree);
                        morphTiming();
                        renderTiming();
                    }));
                    documentReady(function () {
                        self.emitter.emit(self._events.DOMCONTENTLOADED);
                        self._loaded = true;
                    });
                    return this._tree;
                };
                Choo.prototype.mount = function mount(selector) {
                    var self = this;
                    documentReady(function () {
                        var renderTiming = nanotiming('choo.render');
                        var newTree = self.start();
                        self._tree = document.querySelector(selector);
                        var morphTiming = nanotiming('choo.morph');
                        nanomorph(self._tree, newTree);
                        morphTiming();
                        renderTiming();
                    });
                };
                Choo.prototype.toString = function (location, state) {
                    this.state = xtend(this.state, state || {});
                    this.state.href = location.replace(/\?.+$/, '');
                    this.state.query = nanoquery(location);
                    var html = this.router(location);
                    return html.toString();
                };
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/choo/index.js', '/../node_modules/choo'));
        },
        {
            '7YKIPe': 11,
            'assert': 8,
            'buffer': 10,
            'document-ready': 7,
            'nanobus': 16,
            'nanohref': 17,
            'nanolocation': 18,
            'nanomorph': 19,
            'nanoquery': 22,
            'nanoraf': 23,
            'nanorouter': 24,
            'nanotiming': 25,
            'scroll-to-anchor': 28,
            'xtend': 34
        }
    ],
    7: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                'use strict';
                module.exports = ready;
                function ready(callback) {
                    var state = document.readyState;
                    if (state === 'complete' || state === 'interactive') {
                        return setTimeout(callback, 0);
                    }
                    document.addEventListener('DOMContentLoaded', function onLoad() {
                        callback();
                    });
                }
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/document-ready/index.js', '/../node_modules/document-ready'));
        },
        {
            '7YKIPe': 11,
            'assert': 8,
            'buffer': 10
        }
    ],
    8: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                var util = require('util/');
                var pSlice = Array.prototype.slice;
                var hasOwn = Object.prototype.hasOwnProperty;
                var assert = module.exports = ok;
                assert.AssertionError = function AssertionError(options) {
                    this.name = 'AssertionError';
                    this.actual = options.actual;
                    this.expected = options.expected;
                    this.operator = options.operator;
                    if (options.message) {
                        this.message = options.message;
                        this.generatedMessage = false;
                    } else {
                        this.message = getMessage(this);
                        this.generatedMessage = true;
                    }
                    var stackStartFunction = options.stackStartFunction || fail;
                    if (Error.captureStackTrace) {
                        Error.captureStackTrace(this, stackStartFunction);
                    } else {
                        var err = new Error();
                        if (err.stack) {
                            var out = err.stack;
                            var fn_name = stackStartFunction.name;
                            var idx = out.indexOf('\n' + fn_name);
                            if (idx >= 0) {
                                var next_line = out.indexOf('\n', idx + 1);
                                out = out.substring(next_line + 1);
                            }
                            this.stack = out;
                        }
                    }
                };
                util.inherits(assert.AssertionError, Error);
                function replacer(key, value) {
                    if (util.isUndefined(value)) {
                        return '' + value;
                    }
                    if (util.isNumber(value) && (isNaN(value) || !isFinite(value))) {
                        return value.toString();
                    }
                    if (util.isFunction(value) || util.isRegExp(value)) {
                        return value.toString();
                    }
                    return value;
                }
                function truncate(s, n) {
                    if (util.isString(s)) {
                        return s.length < n ? s : s.slice(0, n);
                    } else {
                        return s;
                    }
                }
                function getMessage(self) {
                    return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' + self.operator + ' ' + truncate(JSON.stringify(self.expected, replacer), 128);
                }
                function fail(actual, expected, message, operator, stackStartFunction) {
                    throw new assert.AssertionError({
                        message: message,
                        actual: actual,
                        expected: expected,
                        operator: operator,
                        stackStartFunction: stackStartFunction
                    });
                }
                assert.fail = fail;
                function ok(value, message) {
                    if (!value)
                        fail(value, true, message, '==', assert.ok);
                }
                assert.ok = ok;
                assert.equal = function equal(actual, expected, message) {
                    if (actual != expected)
                        fail(actual, expected, message, '==', assert.equal);
                };
                assert.notEqual = function notEqual(actual, expected, message) {
                    if (actual == expected) {
                        fail(actual, expected, message, '!=', assert.notEqual);
                    }
                };
                assert.deepEqual = function deepEqual(actual, expected, message) {
                    if (!_deepEqual(actual, expected)) {
                        fail(actual, expected, message, 'deepEqual', assert.deepEqual);
                    }
                };
                function _deepEqual(actual, expected) {
                    if (actual === expected) {
                        return true;
                    } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
                        if (actual.length != expected.length)
                            return false;
                        for (var i = 0; i < actual.length; i++) {
                            if (actual[i] !== expected[i])
                                return false;
                        }
                        return true;
                    } else if (util.isDate(actual) && util.isDate(expected)) {
                        return actual.getTime() === expected.getTime();
                    } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
                        return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase;
                    } else if (!util.isObject(actual) && !util.isObject(expected)) {
                        return actual == expected;
                    } else {
                        return objEquiv(actual, expected);
                    }
                }
                function isArguments(object) {
                    return Object.prototype.toString.call(object) == '[object Arguments]';
                }
                function objEquiv(a, b) {
                    if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
                        return false;
                    if (a.prototype !== b.prototype)
                        return false;
                    if (isArguments(a)) {
                        if (!isArguments(b)) {
                            return false;
                        }
                        a = pSlice.call(a);
                        b = pSlice.call(b);
                        return _deepEqual(a, b);
                    }
                    try {
                        var ka = objectKeys(a), kb = objectKeys(b), key, i;
                    } catch (e) {
                        return false;
                    }
                    if (ka.length != kb.length)
                        return false;
                    ka.sort();
                    kb.sort();
                    for (i = ka.length - 1; i >= 0; i--) {
                        if (ka[i] != kb[i])
                            return false;
                    }
                    for (i = ka.length - 1; i >= 0; i--) {
                        key = ka[i];
                        if (!_deepEqual(a[key], b[key]))
                            return false;
                    }
                    return true;
                }
                assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
                    if (_deepEqual(actual, expected)) {
                        fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
                    }
                };
                assert.strictEqual = function strictEqual(actual, expected, message) {
                    if (actual !== expected) {
                        fail(actual, expected, message, '===', assert.strictEqual);
                    }
                };
                assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
                    if (actual === expected) {
                        fail(actual, expected, message, '!==', assert.notStrictEqual);
                    }
                };
                function expectedException(actual, expected) {
                    if (!actual || !expected) {
                        return false;
                    }
                    if (Object.prototype.toString.call(expected) == '[object RegExp]') {
                        return expected.test(actual);
                    } else if (actual instanceof expected) {
                        return true;
                    } else if (expected.call({}, actual) === true) {
                        return true;
                    }
                    return false;
                }
                function _throws(shouldThrow, block, expected, message) {
                    var actual;
                    if (util.isString(expected)) {
                        message = expected;
                        expected = null;
                    }
                    try {
                        block();
                    } catch (e) {
                        actual = e;
                    }
                    message = (expected && expected.name ? ' (' + expected.name + ').' : '.') + (message ? ' ' + message : '.');
                    if (shouldThrow && !actual) {
                        fail(actual, expected, 'Missing expected exception' + message);
                    }
                    if (!shouldThrow && expectedException(actual, expected)) {
                        fail(actual, expected, 'Got unwanted exception' + message);
                    }
                    if (shouldThrow && actual && expected && !expectedException(actual, expected) || !shouldThrow && actual) {
                        throw actual;
                    }
                }
                assert.throws = function (block, error, message) {
                    _throws.apply(this, [true].concat(pSlice.call(arguments)));
                };
                assert.doesNotThrow = function (block, message) {
                    _throws.apply(this, [false].concat(pSlice.call(arguments)));
                };
                assert.ifError = function (err) {
                    if (err) {
                        throw err;
                    }
                };
                var objectKeys = Object.keys || function (obj) {
                    var keys = [];
                    for (var key in obj) {
                        if (hasOwn.call(obj, key))
                            keys.push(key);
                    }
                    return keys;
                };
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/gulp-browserify/node_modules/assert/assert.js', '/../node_modules/gulp-browserify/node_modules/assert'));
        },
        {
            '7YKIPe': 11,
            'buffer': 10,
            'util/': 31
        }
    ],
    9: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                ;
                (function (exports) {
                    'use strict';
                    var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
                    var PLUS = '+'.charCodeAt(0);
                    var SLASH = '/'.charCodeAt(0);
                    var NUMBER = '0'.charCodeAt(0);
                    var LOWER = 'a'.charCodeAt(0);
                    var UPPER = 'A'.charCodeAt(0);
                    var PLUS_URL_SAFE = '-'.charCodeAt(0);
                    var SLASH_URL_SAFE = '_'.charCodeAt(0);
                    function decode(elt) {
                        var code = elt.charCodeAt(0);
                        if (code === PLUS || code === PLUS_URL_SAFE)
                            return 62;
                        if (code === SLASH || code === SLASH_URL_SAFE)
                            return 63;
                        if (code < NUMBER)
                            return -1;
                        if (code < NUMBER + 10)
                            return code - NUMBER + 26 + 26;
                        if (code < UPPER + 26)
                            return code - UPPER;
                        if (code < LOWER + 26)
                            return code - LOWER + 26;
                    }
                    function b64ToByteArray(b64) {
                        var i, j, l, tmp, placeHolders, arr;
                        if (b64.length % 4 > 0) {
                            throw new Error('Invalid string. Length must be a multiple of 4');
                        }
                        var len = b64.length;
                        placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0;
                        arr = new Arr(b64.length * 3 / 4 - placeHolders);
                        l = placeHolders > 0 ? b64.length - 4 : b64.length;
                        var L = 0;
                        function push(v) {
                            arr[L++] = v;
                        }
                        for (i = 0, j = 0; i < l; i += 4, j += 3) {
                            tmp = decode(b64.charAt(i)) << 18 | decode(b64.charAt(i + 1)) << 12 | decode(b64.charAt(i + 2)) << 6 | decode(b64.charAt(i + 3));
                            push((tmp & 16711680) >> 16);
                            push((tmp & 65280) >> 8);
                            push(tmp & 255);
                        }
                        if (placeHolders === 2) {
                            tmp = decode(b64.charAt(i)) << 2 | decode(b64.charAt(i + 1)) >> 4;
                            push(tmp & 255);
                        } else if (placeHolders === 1) {
                            tmp = decode(b64.charAt(i)) << 10 | decode(b64.charAt(i + 1)) << 4 | decode(b64.charAt(i + 2)) >> 2;
                            push(tmp >> 8 & 255);
                            push(tmp & 255);
                        }
                        return arr;
                    }
                    function uint8ToBase64(uint8) {
                        var i, extraBytes = uint8.length % 3, output = '', temp, length;
                        function encode(num) {
                            return lookup.charAt(num);
                        }
                        function tripletToBase64(num) {
                            return encode(num >> 18 & 63) + encode(num >> 12 & 63) + encode(num >> 6 & 63) + encode(num & 63);
                        }
                        for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
                            temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
                            output += tripletToBase64(temp);
                        }
                        switch (extraBytes) {
                        case 1:
                            temp = uint8[uint8.length - 1];
                            output += encode(temp >> 2);
                            output += encode(temp << 4 & 63);
                            output += '==';
                            break;
                        case 2:
                            temp = (uint8[uint8.length - 2] << 8) + uint8[uint8.length - 1];
                            output += encode(temp >> 10);
                            output += encode(temp >> 4 & 63);
                            output += encode(temp << 2 & 63);
                            output += '=';
                            break;
                        }
                        return output;
                    }
                    exports.toByteArray = b64ToByteArray;
                    exports.fromByteArray = uint8ToBase64;
                }(typeof exports === 'undefined' ? this.base64js = {} : exports));
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js', '/../node_modules/gulp-browserify/node_modules/base64-js/lib'));
        },
        {
            '7YKIPe': 11,
            'buffer': 10
        }
    ],
    10: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                var base64 = require('base64-js');
                var ieee754 = require('ieee754');
                exports.Buffer = Buffer;
                exports.SlowBuffer = Buffer;
                exports.INSPECT_MAX_BYTES = 50;
                Buffer.poolSize = 8192;
                Buffer._useTypedArrays = function () {
                    try {
                        var buf = new ArrayBuffer(0);
                        var arr = new Uint8Array(buf);
                        arr.foo = function () {
                            return 42;
                        };
                        return 42 === arr.foo() && typeof arr.subarray === 'function';
                    } catch (e) {
                        return false;
                    }
                }();
                function Buffer(subject, encoding, noZero) {
                    if (!(this instanceof Buffer))
                        return new Buffer(subject, encoding, noZero);
                    var type = typeof subject;
                    if (encoding === 'base64' && type === 'string') {
                        subject = stringtrim(subject);
                        while (subject.length % 4 !== 0) {
                            subject = subject + '=';
                        }
                    }
                    var length;
                    if (type === 'number')
                        length = coerce(subject);
                    else if (type === 'string')
                        length = Buffer.byteLength(subject, encoding);
                    else if (type === 'object')
                        length = coerce(subject.length);
                    else
                        throw new Error('First argument needs to be a number, array or string.');
                    var buf;
                    if (Buffer._useTypedArrays) {
                        buf = Buffer._augment(new Uint8Array(length));
                    } else {
                        buf = this;
                        buf.length = length;
                        buf._isBuffer = true;
                    }
                    var i;
                    if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
                        buf._set(subject);
                    } else if (isArrayish(subject)) {
                        for (i = 0; i < length; i++) {
                            if (Buffer.isBuffer(subject))
                                buf[i] = subject.readUInt8(i);
                            else
                                buf[i] = subject[i];
                        }
                    } else if (type === 'string') {
                        buf.write(subject, 0, encoding);
                    } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
                        for (i = 0; i < length; i++) {
                            buf[i] = 0;
                        }
                    }
                    return buf;
                }
                Buffer.isEncoding = function (encoding) {
                    switch (String(encoding).toLowerCase()) {
                    case 'hex':
                    case 'utf8':
                    case 'utf-8':
                    case 'ascii':
                    case 'binary':
                    case 'base64':
                    case 'raw':
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                        return true;
                    default:
                        return false;
                    }
                };
                Buffer.isBuffer = function (b) {
                    return !!(b !== null && b !== undefined && b._isBuffer);
                };
                Buffer.byteLength = function (str, encoding) {
                    var ret;
                    str = str + '';
                    switch (encoding || 'utf8') {
                    case 'hex':
                        ret = str.length / 2;
                        break;
                    case 'utf8':
                    case 'utf-8':
                        ret = utf8ToBytes(str).length;
                        break;
                    case 'ascii':
                    case 'binary':
                    case 'raw':
                        ret = str.length;
                        break;
                    case 'base64':
                        ret = base64ToBytes(str).length;
                        break;
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                        ret = str.length * 2;
                        break;
                    default:
                        throw new Error('Unknown encoding');
                    }
                    return ret;
                };
                Buffer.concat = function (list, totalLength) {
                    if (list.length === 0) {
                        return new Buffer(0);
                    } else if (list.length === 1) {
                        return list[0];
                    }
                    var i;
                    if (typeof totalLength !== 'number') {
                        totalLength = 0;
                        for (i = 0; i < list.length; i++) {
                            totalLength += list[i].length;
                        }
                    }
                    var buf = new Buffer(totalLength);
                    var pos = 0;
                    for (i = 0; i < list.length; i++) {
                        var item = list[i];
                        item.copy(buf, pos);
                        pos += item.length;
                    }
                    return buf;
                };
                function _hexWrite(buf, string, offset, length) {
                    offset = Number(offset) || 0;
                    var remaining = buf.length - offset;
                    if (!length) {
                        length = remaining;
                    } else {
                        length = Number(length);
                        if (length > remaining) {
                            length = remaining;
                        }
                    }
                    var strLen = string.length;
                    if (length > strLen / 2) {
                        length = strLen / 2;
                    }
                    for (var i = 0; i < length; i++) {
                        var byte = parseInt(string.substr(i * 2, 2), 16);
                        buf[offset + i] = byte;
                    }
                    Buffer._charsWritten = i * 2;
                    return i;
                }
                function _utf8Write(buf, string, offset, length) {
                    var charsWritten = Buffer._charsWritten = blitBuffer(utf8ToBytes(string), buf, offset, length);
                    return charsWritten;
                }
                function _asciiWrite(buf, string, offset, length) {
                    var charsWritten = Buffer._charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length);
                    return charsWritten;
                }
                function _binaryWrite(buf, string, offset, length) {
                    return _asciiWrite(buf, string, offset, length);
                }
                function _base64Write(buf, string, offset, length) {
                    var charsWritten = Buffer._charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length);
                    return charsWritten;
                }
                function _utf16leWrite(buf, string, offset, length) {
                    var charsWritten = Buffer._charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length);
                    return charsWritten;
                }
                Buffer.prototype.write = function (string, offset, length, encoding) {
                    if (isFinite(offset)) {
                        if (!isFinite(length)) {
                            encoding = length;
                            length = undefined;
                        }
                    } else {
                        var swap = encoding;
                        encoding = offset;
                        offset = length;
                        length = swap;
                    }
                    offset = Number(offset) || 0;
                    var remaining = this.length - offset;
                    if (!length) {
                        length = remaining;
                    } else {
                        length = Number(length);
                        if (length > remaining) {
                            length = remaining;
                        }
                    }
                    encoding = String(encoding || 'utf8').toLowerCase();
                    var ret;
                    switch (encoding) {
                    case 'hex':
                        ret = _hexWrite(this, string, offset, length);
                        break;
                    case 'utf8':
                    case 'utf-8':
                        ret = _utf8Write(this, string, offset, length);
                        break;
                    case 'ascii':
                        ret = _asciiWrite(this, string, offset, length);
                        break;
                    case 'binary':
                        ret = _binaryWrite(this, string, offset, length);
                        break;
                    case 'base64':
                        ret = _base64Write(this, string, offset, length);
                        break;
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                        ret = _utf16leWrite(this, string, offset, length);
                        break;
                    default:
                        throw new Error('Unknown encoding');
                    }
                    return ret;
                };
                Buffer.prototype.toString = function (encoding, start, end) {
                    var self = this;
                    encoding = String(encoding || 'utf8').toLowerCase();
                    start = Number(start) || 0;
                    end = end !== undefined ? Number(end) : end = self.length;
                    if (end === start)
                        return '';
                    var ret;
                    switch (encoding) {
                    case 'hex':
                        ret = _hexSlice(self, start, end);
                        break;
                    case 'utf8':
                    case 'utf-8':
                        ret = _utf8Slice(self, start, end);
                        break;
                    case 'ascii':
                        ret = _asciiSlice(self, start, end);
                        break;
                    case 'binary':
                        ret = _binarySlice(self, start, end);
                        break;
                    case 'base64':
                        ret = _base64Slice(self, start, end);
                        break;
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                        ret = _utf16leSlice(self, start, end);
                        break;
                    default:
                        throw new Error('Unknown encoding');
                    }
                    return ret;
                };
                Buffer.prototype.toJSON = function () {
                    return {
                        type: 'Buffer',
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    };
                };
                Buffer.prototype.copy = function (target, target_start, start, end) {
                    var source = this;
                    if (!start)
                        start = 0;
                    if (!end && end !== 0)
                        end = this.length;
                    if (!target_start)
                        target_start = 0;
                    if (end === start)
                        return;
                    if (target.length === 0 || source.length === 0)
                        return;
                    if (end > this.length)
                        end = this.length;
                    if (target.length - target_start < end - start)
                        end = target.length - target_start + start;
                    var len = end - start;
                    if (len < 100 || !Buffer._useTypedArrays) {
                        for (var i = 0; i < len; i++)
                            target[i + target_start] = this[i + start];
                    } else {
                        target._set(this.subarray(start, start + len), target_start);
                    }
                };
                function _base64Slice(buf, start, end) {
                    if (start === 0 && end === buf.length) {
                        return base64.fromByteArray(buf);
                    } else {
                        return base64.fromByteArray(buf.slice(start, end));
                    }
                }
                function _utf8Slice(buf, start, end) {
                    var res = '';
                    var tmp = '';
                    end = Math.min(buf.length, end);
                    for (var i = start; i < end; i++) {
                        if (buf[i] <= 127) {
                            res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i]);
                            tmp = '';
                        } else {
                            tmp += '%' + buf[i].toString(16);
                        }
                    }
                    return res + decodeUtf8Char(tmp);
                }
                function _asciiSlice(buf, start, end) {
                    var ret = '';
                    end = Math.min(buf.length, end);
                    for (var i = start; i < end; i++)
                        ret += String.fromCharCode(buf[i]);
                    return ret;
                }
                function _binarySlice(buf, start, end) {
                    return _asciiSlice(buf, start, end);
                }
                function _hexSlice(buf, start, end) {
                    var len = buf.length;
                    if (!start || start < 0)
                        start = 0;
                    if (!end || end < 0 || end > len)
                        end = len;
                    var out = '';
                    for (var i = start; i < end; i++) {
                        out += toHex(buf[i]);
                    }
                    return out;
                }
                function _utf16leSlice(buf, start, end) {
                    var bytes = buf.slice(start, end);
                    var res = '';
                    for (var i = 0; i < bytes.length; i += 2) {
                        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
                    }
                    return res;
                }
                Buffer.prototype.slice = function (start, end) {
                    var len = this.length;
                    start = clamp(start, len, 0);
                    end = clamp(end, len, len);
                    if (Buffer._useTypedArrays) {
                        return Buffer._augment(this.subarray(start, end));
                    } else {
                        var sliceLen = end - start;
                        var newBuf = new Buffer(sliceLen, undefined, true);
                        for (var i = 0; i < sliceLen; i++) {
                            newBuf[i] = this[i + start];
                        }
                        return newBuf;
                    }
                };
                Buffer.prototype.get = function (offset) {
                    console.log('.get() is deprecated. Access using array indexes instead.');
                    return this.readUInt8(offset);
                };
                Buffer.prototype.set = function (v, offset) {
                    console.log('.set() is deprecated. Access using array indexes instead.');
                    return this.writeUInt8(v, offset);
                };
                Buffer.prototype.readUInt8 = function (offset, noAssert) {
                    if (!noAssert) {
                    }
                    if (offset >= this.length)
                        return;
                    return this[offset];
                };
                function _readUInt16(buf, offset, littleEndian, noAssert) {
                    if (!noAssert) {
                    }
                    var len = buf.length;
                    if (offset >= len)
                        return;
                    var val;
                    if (littleEndian) {
                        val = buf[offset];
                        if (offset + 1 < len)
                            val |= buf[offset + 1] << 8;
                    } else {
                        val = buf[offset] << 8;
                        if (offset + 1 < len)
                            val |= buf[offset + 1];
                    }
                    return val;
                }
                Buffer.prototype.readUInt16LE = function (offset, noAssert) {
                    return _readUInt16(this, offset, true, noAssert);
                };
                Buffer.prototype.readUInt16BE = function (offset, noAssert) {
                    return _readUInt16(this, offset, false, noAssert);
                };
                function _readUInt32(buf, offset, littleEndian, noAssert) {
                    if (!noAssert) {
                    }
                    var len = buf.length;
                    if (offset >= len)
                        return;
                    var val;
                    if (littleEndian) {
                        if (offset + 2 < len)
                            val = buf[offset + 2] << 16;
                        if (offset + 1 < len)
                            val |= buf[offset + 1] << 8;
                        val |= buf[offset];
                        if (offset + 3 < len)
                            val = val + (buf[offset + 3] << 24 >>> 0);
                    } else {
                        if (offset + 1 < len)
                            val = buf[offset + 1] << 16;
                        if (offset + 2 < len)
                            val |= buf[offset + 2] << 8;
                        if (offset + 3 < len)
                            val |= buf[offset + 3];
                        val = val + (buf[offset] << 24 >>> 0);
                    }
                    return val;
                }
                Buffer.prototype.readUInt32LE = function (offset, noAssert) {
                    return _readUInt32(this, offset, true, noAssert);
                };
                Buffer.prototype.readUInt32BE = function (offset, noAssert) {
                    return _readUInt32(this, offset, false, noAssert);
                };
                Buffer.prototype.readInt8 = function (offset, noAssert) {
                    if (!noAssert) {
                    }
                    if (offset >= this.length)
                        return;
                    var neg = this[offset] & 128;
                    if (neg)
                        return (255 - this[offset] + 1) * -1;
                    else
                        return this[offset];
                };
                function _readInt16(buf, offset, littleEndian, noAssert) {
                    if (!noAssert) {
                    }
                    var len = buf.length;
                    if (offset >= len)
                        return;
                    var val = _readUInt16(buf, offset, littleEndian, true);
                    var neg = val & 32768;
                    if (neg)
                        return (65535 - val + 1) * -1;
                    else
                        return val;
                }
                Buffer.prototype.readInt16LE = function (offset, noAssert) {
                    return _readInt16(this, offset, true, noAssert);
                };
                Buffer.prototype.readInt16BE = function (offset, noAssert) {
                    return _readInt16(this, offset, false, noAssert);
                };
                function _readInt32(buf, offset, littleEndian, noAssert) {
                    if (!noAssert) {
                    }
                    var len = buf.length;
                    if (offset >= len)
                        return;
                    var val = _readUInt32(buf, offset, littleEndian, true);
                    var neg = val & 2147483648;
                    if (neg)
                        return (4294967295 - val + 1) * -1;
                    else
                        return val;
                }
                Buffer.prototype.readInt32LE = function (offset, noAssert) {
                    return _readInt32(this, offset, true, noAssert);
                };
                Buffer.prototype.readInt32BE = function (offset, noAssert) {
                    return _readInt32(this, offset, false, noAssert);
                };
                function _readFloat(buf, offset, littleEndian, noAssert) {
                    if (!noAssert) {
                    }
                    return ieee754.read(buf, offset, littleEndian, 23, 4);
                }
                Buffer.prototype.readFloatLE = function (offset, noAssert) {
                    return _readFloat(this, offset, true, noAssert);
                };
                Buffer.prototype.readFloatBE = function (offset, noAssert) {
                    return _readFloat(this, offset, false, noAssert);
                };
                function _readDouble(buf, offset, littleEndian, noAssert) {
                    if (!noAssert) {
                    }
                    return ieee754.read(buf, offset, littleEndian, 52, 8);
                }
                Buffer.prototype.readDoubleLE = function (offset, noAssert) {
                    return _readDouble(this, offset, true, noAssert);
                };
                Buffer.prototype.readDoubleBE = function (offset, noAssert) {
                    return _readDouble(this, offset, false, noAssert);
                };
                Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
                    if (!noAssert) {
                        verifuint(value, 255);
                    }
                    if (offset >= this.length)
                        return;
                    this[offset] = value;
                };
                function _writeUInt16(buf, value, offset, littleEndian, noAssert) {
                    if (!noAssert) {
                        verifuint(value, 65535);
                    }
                    var len = buf.length;
                    if (offset >= len)
                        return;
                    for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
                        buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
                    }
                }
                Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
                    _writeUInt16(this, value, offset, true, noAssert);
                };
                Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
                    _writeUInt16(this, value, offset, false, noAssert);
                };
                function _writeUInt32(buf, value, offset, littleEndian, noAssert) {
                    if (!noAssert) {
                        verifuint(value, 4294967295);
                    }
                    var len = buf.length;
                    if (offset >= len)
                        return;
                    for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
                        buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
                    }
                }
                Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
                    _writeUInt32(this, value, offset, true, noAssert);
                };
                Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
                    _writeUInt32(this, value, offset, false, noAssert);
                };
                Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
                    if (!noAssert) {
                        verifsint(value, 127, -128);
                    }
                    if (offset >= this.length)
                        return;
                    if (value >= 0)
                        this.writeUInt8(value, offset, noAssert);
                    else
                        this.writeUInt8(255 + value + 1, offset, noAssert);
                };
                function _writeInt16(buf, value, offset, littleEndian, noAssert) {
                    if (!noAssert) {
                        verifsint(value, 32767, -32768);
                    }
                    var len = buf.length;
                    if (offset >= len)
                        return;
                    if (value >= 0)
                        _writeUInt16(buf, value, offset, littleEndian, noAssert);
                    else
                        _writeUInt16(buf, 65535 + value + 1, offset, littleEndian, noAssert);
                }
                Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
                    _writeInt16(this, value, offset, true, noAssert);
                };
                Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
                    _writeInt16(this, value, offset, false, noAssert);
                };
                function _writeInt32(buf, value, offset, littleEndian, noAssert) {
                    if (!noAssert) {
                        verifsint(value, 2147483647, -2147483648);
                    }
                    var len = buf.length;
                    if (offset >= len)
                        return;
                    if (value >= 0)
                        _writeUInt32(buf, value, offset, littleEndian, noAssert);
                    else
                        _writeUInt32(buf, 4294967295 + value + 1, offset, littleEndian, noAssert);
                }
                Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
                    _writeInt32(this, value, offset, true, noAssert);
                };
                Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
                    _writeInt32(this, value, offset, false, noAssert);
                };
                function _writeFloat(buf, value, offset, littleEndian, noAssert) {
                    if (!noAssert) {
                        verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38);
                    }
                    var len = buf.length;
                    if (offset >= len)
                        return;
                    ieee754.write(buf, value, offset, littleEndian, 23, 4);
                }
                Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
                    _writeFloat(this, value, offset, true, noAssert);
                };
                Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
                    _writeFloat(this, value, offset, false, noAssert);
                };
                function _writeDouble(buf, value, offset, littleEndian, noAssert) {
                    if (!noAssert) {
                        verifIEEE754(value, 1.7976931348623157e+308, -1.7976931348623157e+308);
                    }
                    var len = buf.length;
                    if (offset >= len)
                        return;
                    ieee754.write(buf, value, offset, littleEndian, 52, 8);
                }
                Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
                    _writeDouble(this, value, offset, true, noAssert);
                };
                Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
                    _writeDouble(this, value, offset, false, noAssert);
                };
                Buffer.prototype.fill = function (value, start, end) {
                    if (!value)
                        value = 0;
                    if (!start)
                        start = 0;
                    if (!end)
                        end = this.length;
                    if (typeof value === 'string') {
                        value = value.charCodeAt(0);
                    }
                    if (end === start)
                        return;
                    if (this.length === 0)
                        return;
                    for (var i = start; i < end; i++) {
                        this[i] = value;
                    }
                };
                Buffer.prototype.inspect = function () {
                    var out = [];
                    var len = this.length;
                    for (var i = 0; i < len; i++) {
                        out[i] = toHex(this[i]);
                        if (i === exports.INSPECT_MAX_BYTES) {
                            out[i + 1] = '...';
                            break;
                        }
                    }
                    return '<Buffer ' + out.join(' ') + '>';
                };
                Buffer.prototype.toArrayBuffer = function () {
                    if (typeof Uint8Array !== 'undefined') {
                        if (Buffer._useTypedArrays) {
                            return new Buffer(this).buffer;
                        } else {
                            var buf = new Uint8Array(this.length);
                            for (var i = 0, len = buf.length; i < len; i += 1)
                                buf[i] = this[i];
                            return buf.buffer;
                        }
                    } else {
                        throw new Error('Buffer.toArrayBuffer not supported in this browser');
                    }
                };
                function stringtrim(str) {
                    if (str.trim)
                        return str.trim();
                    return str.replace(/^\s+|\s+$/g, '');
                }
                var BP = Buffer.prototype;
                Buffer._augment = function (arr) {
                    arr._isBuffer = true;
                    arr._get = arr.get;
                    arr._set = arr.set;
                    arr.get = BP.get;
                    arr.set = BP.set;
                    arr.write = BP.write;
                    arr.toString = BP.toString;
                    arr.toLocaleString = BP.toString;
                    arr.toJSON = BP.toJSON;
                    arr.copy = BP.copy;
                    arr.slice = BP.slice;
                    arr.readUInt8 = BP.readUInt8;
                    arr.readUInt16LE = BP.readUInt16LE;
                    arr.readUInt16BE = BP.readUInt16BE;
                    arr.readUInt32LE = BP.readUInt32LE;
                    arr.readUInt32BE = BP.readUInt32BE;
                    arr.readInt8 = BP.readInt8;
                    arr.readInt16LE = BP.readInt16LE;
                    arr.readInt16BE = BP.readInt16BE;
                    arr.readInt32LE = BP.readInt32LE;
                    arr.readInt32BE = BP.readInt32BE;
                    arr.readFloatLE = BP.readFloatLE;
                    arr.readFloatBE = BP.readFloatBE;
                    arr.readDoubleLE = BP.readDoubleLE;
                    arr.readDoubleBE = BP.readDoubleBE;
                    arr.writeUInt8 = BP.writeUInt8;
                    arr.writeUInt16LE = BP.writeUInt16LE;
                    arr.writeUInt16BE = BP.writeUInt16BE;
                    arr.writeUInt32LE = BP.writeUInt32LE;
                    arr.writeUInt32BE = BP.writeUInt32BE;
                    arr.writeInt8 = BP.writeInt8;
                    arr.writeInt16LE = BP.writeInt16LE;
                    arr.writeInt16BE = BP.writeInt16BE;
                    arr.writeInt32LE = BP.writeInt32LE;
                    arr.writeInt32BE = BP.writeInt32BE;
                    arr.writeFloatLE = BP.writeFloatLE;
                    arr.writeFloatBE = BP.writeFloatBE;
                    arr.writeDoubleLE = BP.writeDoubleLE;
                    arr.writeDoubleBE = BP.writeDoubleBE;
                    arr.fill = BP.fill;
                    arr.inspect = BP.inspect;
                    arr.toArrayBuffer = BP.toArrayBuffer;
                    return arr;
                };
                function clamp(index, len, defaultValue) {
                    if (typeof index !== 'number')
                        return defaultValue;
                    index = ~~index;
                    if (index >= len)
                        return len;
                    if (index >= 0)
                        return index;
                    index += len;
                    if (index >= 0)
                        return index;
                    return 0;
                }
                function coerce(length) {
                    length = ~~Math.ceil(+length);
                    return length < 0 ? 0 : length;
                }
                function isArray(subject) {
                    return (Array.isArray || function (subject) {
                        return Object.prototype.toString.call(subject) === '[object Array]';
                    })(subject);
                }
                function isArrayish(subject) {
                    return isArray(subject) || Buffer.isBuffer(subject) || subject && typeof subject === 'object' && typeof subject.length === 'number';
                }
                function toHex(n) {
                    if (n < 16)
                        return '0' + n.toString(16);
                    return n.toString(16);
                }
                function utf8ToBytes(str) {
                    var byteArray = [];
                    for (var i = 0; i < str.length; i++) {
                        var b = str.charCodeAt(i);
                        if (b <= 127)
                            byteArray.push(str.charCodeAt(i));
                        else {
                            var start = i;
                            if (b >= 55296 && b <= 57343)
                                i++;
                            var h = encodeURIComponent(str.slice(start, i + 1)).substr(1).split('%');
                            for (var j = 0; j < h.length; j++)
                                byteArray.push(parseInt(h[j], 16));
                        }
                    }
                    return byteArray;
                }
                function asciiToBytes(str) {
                    var byteArray = [];
                    for (var i = 0; i < str.length; i++) {
                        byteArray.push(str.charCodeAt(i) & 255);
                    }
                    return byteArray;
                }
                function utf16leToBytes(str) {
                    var c, hi, lo;
                    var byteArray = [];
                    for (var i = 0; i < str.length; i++) {
                        c = str.charCodeAt(i);
                        hi = c >> 8;
                        lo = c % 256;
                        byteArray.push(lo);
                        byteArray.push(hi);
                    }
                    return byteArray;
                }
                function base64ToBytes(str) {
                    return base64.toByteArray(str);
                }
                function blitBuffer(src, dst, offset, length) {
                    var pos;
                    for (var i = 0; i < length; i++) {
                        if (i + offset >= dst.length || i >= src.length)
                            break;
                        dst[i + offset] = src[i];
                    }
                    return i;
                }
                function decodeUtf8Char(str) {
                    try {
                        return decodeURIComponent(str);
                    } catch (err) {
                        return String.fromCharCode(65533);
                    }
                }
                function verifuint(value, max) {
                }
                function verifsint(value, max, min) {
                }
                function verifIEEE754(value, max, min) {
                }
                function assert(test, message) {
                    if (!test)
                        throw new Error(message || 'Failed assertion');
                }
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/gulp-browserify/node_modules/buffer/index.js', '/../node_modules/gulp-browserify/node_modules/buffer'));
        },
        {
            '7YKIPe': 11,
            'base64-js': 9,
            'buffer': 10,
            'ieee754': 14
        }
    ],
    11: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                var process = module.exports = {};
                process.nextTick = function () {
                    var canSetImmediate = typeof window !== 'undefined' && window.setImmediate;
                    var canPost = typeof window !== 'undefined' && window.postMessage && window.addEventListener;
                    if (canSetImmediate) {
                        return function (f) {
                            return window.setImmediate(f);
                        };
                    }
                    if (canPost) {
                        var queue = [];
                        window.addEventListener('message', function (ev) {
                            var source = ev.source;
                            if ((source === window || source === null) && ev.data === 'process-tick') {
                                ev.stopPropagation();
                                if (queue.length > 0) {
                                    var fn = queue.shift();
                                    fn();
                                }
                            }
                        }, true);
                        return function nextTick(fn) {
                            queue.push(fn);
                            window.postMessage('process-tick', '*');
                        };
                    }
                    return function nextTick(fn) {
                        setTimeout(fn, 0);
                    };
                }();
                process.title = 'browser';
                process.browser = true;
                process.env = {};
                process.argv = [];
                function noop() {
                }
                process.on = noop;
                process.addListener = noop;
                process.once = noop;
                process.off = noop;
                process.removeListener = noop;
                process.removeAllListeners = noop;
                process.emit = noop;
                process.binding = function (name) {
                    throw new Error('process.binding is not supported');
                };
                process.cwd = function () {
                    return '/';
                };
                process.chdir = function (dir) {
                    throw new Error('process.chdir is not supported');
                };
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/gulp-browserify/node_modules/process/browser.js', '/../node_modules/gulp-browserify/node_modules/process'));
        },
        {
            '7YKIPe': 11,
            'buffer': 10
        }
    ],
    12: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                module.exports = attributeToProperty;
                var transform = {
                    'class': 'className',
                    'for': 'htmlFor',
                    'http-equiv': 'httpEquiv'
                };
                function attributeToProperty(h) {
                    return function (tagName, attrs, children) {
                        for (var attr in attrs) {
                            if (attr in transform) {
                                attrs[transform[attr]] = attrs[attr];
                                delete attrs[attr];
                            }
                        }
                        return h(tagName, attrs, children);
                    };
                }
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/hyperscript-attribute-to-property/index.js', '/../node_modules/hyperscript-attribute-to-property'));
        },
        {
            '7YKIPe': 11,
            'buffer': 10
        }
    ],
    13: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                var attrToProp = require('hyperscript-attribute-to-property');
                var VAR = 0, TEXT = 1, OPEN = 2, CLOSE = 3, ATTR = 4;
                var ATTR_KEY = 5, ATTR_KEY_W = 6;
                var ATTR_VALUE_W = 7, ATTR_VALUE = 8;
                var ATTR_VALUE_SQ = 9, ATTR_VALUE_DQ = 10;
                var ATTR_EQ = 11, ATTR_BREAK = 12;
                var COMMENT = 13;
                module.exports = function (h, opts) {
                    if (!opts)
                        opts = {};
                    var concat = opts.concat || function (a, b) {
                        return String(a) + String(b);
                    };
                    if (opts.attrToProp !== false) {
                        h = attrToProp(h);
                    }
                    return function (strings) {
                        var state = TEXT, reg = '';
                        var arglen = arguments.length;
                        var parts = [];
                        for (var i = 0; i < strings.length; i++) {
                            if (i < arglen - 1) {
                                var arg = arguments[i + 1];
                                var p = parse(strings[i]);
                                var xstate = state;
                                if (xstate === ATTR_VALUE_DQ)
                                    xstate = ATTR_VALUE;
                                if (xstate === ATTR_VALUE_SQ)
                                    xstate = ATTR_VALUE;
                                if (xstate === ATTR_VALUE_W)
                                    xstate = ATTR_VALUE;
                                if (xstate === ATTR)
                                    xstate = ATTR_KEY;
                                p.push([
                                    VAR,
                                    xstate,
                                    arg
                                ]);
                                parts.push.apply(parts, p);
                            } else
                                parts.push.apply(parts, parse(strings[i]));
                        }
                        var tree = [
                            null,
                            {},
                            []
                        ];
                        var stack = [[
                                tree,
                                -1
                            ]];
                        for (var i = 0; i < parts.length; i++) {
                            var cur = stack[stack.length - 1][0];
                            var p = parts[i], s = p[0];
                            if (s === OPEN && /^\//.test(p[1])) {
                                var ix = stack[stack.length - 1][1];
                                if (stack.length > 1) {
                                    stack.pop();
                                    stack[stack.length - 1][0][2][ix] = h(cur[0], cur[1], cur[2].length ? cur[2] : undefined);
                                }
                            } else if (s === OPEN) {
                                var c = [
                                    p[1],
                                    {},
                                    []
                                ];
                                cur[2].push(c);
                                stack.push([
                                    c,
                                    cur[2].length - 1
                                ]);
                            } else if (s === ATTR_KEY || s === VAR && p[1] === ATTR_KEY) {
                                var key = '';
                                var copyKey;
                                for (; i < parts.length; i++) {
                                    if (parts[i][0] === ATTR_KEY) {
                                        key = concat(key, parts[i][1]);
                                    } else if (parts[i][0] === VAR && parts[i][1] === ATTR_KEY) {
                                        if (typeof parts[i][2] === 'object' && !key) {
                                            for (copyKey in parts[i][2]) {
                                                if (parts[i][2].hasOwnProperty(copyKey) && !cur[1][copyKey]) {
                                                    cur[1][copyKey] = parts[i][2][copyKey];
                                                }
                                            }
                                        } else {
                                            key = concat(key, parts[i][2]);
                                        }
                                    } else
                                        break;
                                }
                                if (parts[i][0] === ATTR_EQ)
                                    i++;
                                var j = i;
                                for (; i < parts.length; i++) {
                                    if (parts[i][0] === ATTR_VALUE || parts[i][0] === ATTR_KEY) {
                                        if (!cur[1][key])
                                            cur[1][key] = strfn(parts[i][1]);
                                        else
                                            cur[1][key] = concat(cur[1][key], parts[i][1]);
                                    } else if (parts[i][0] === VAR && (parts[i][1] === ATTR_VALUE || parts[i][1] === ATTR_KEY)) {
                                        if (!cur[1][key])
                                            cur[1][key] = strfn(parts[i][2]);
                                        else
                                            cur[1][key] = concat(cur[1][key], parts[i][2]);
                                    } else {
                                        if (key.length && !cur[1][key] && i === j && (parts[i][0] === CLOSE || parts[i][0] === ATTR_BREAK)) {
                                            cur[1][key] = key.toLowerCase();
                                        }
                                        if (parts[i][0] === CLOSE) {
                                            i--;
                                        }
                                        break;
                                    }
                                }
                            } else if (s === ATTR_KEY) {
                                cur[1][p[1]] = true;
                            } else if (s === VAR && p[1] === ATTR_KEY) {
                                cur[1][p[2]] = true;
                            } else if (s === CLOSE) {
                                if (selfClosing(cur[0]) && stack.length) {
                                    var ix = stack[stack.length - 1][1];
                                    stack.pop();
                                    stack[stack.length - 1][0][2][ix] = h(cur[0], cur[1], cur[2].length ? cur[2] : undefined);
                                }
                            } else if (s === VAR && p[1] === TEXT) {
                                if (p[2] === undefined || p[2] === null)
                                    p[2] = '';
                                else if (!p[2])
                                    p[2] = concat('', p[2]);
                                if (Array.isArray(p[2][0])) {
                                    cur[2].push.apply(cur[2], p[2]);
                                } else {
                                    cur[2].push(p[2]);
                                }
                            } else if (s === TEXT) {
                                cur[2].push(p[1]);
                            } else if (s === ATTR_EQ || s === ATTR_BREAK) {
                            } else {
                                throw new Error('unhandled: ' + s);
                            }
                        }
                        if (tree[2].length > 1 && /^\s*$/.test(tree[2][0])) {
                            tree[2].shift();
                        }
                        if (tree[2].length > 2 || tree[2].length === 2 && /\S/.test(tree[2][1])) {
                            throw new Error('multiple root elements must be wrapped in an enclosing tag');
                        }
                        if (Array.isArray(tree[2][0]) && typeof tree[2][0][0] === 'string' && Array.isArray(tree[2][0][2])) {
                            tree[2][0] = h(tree[2][0][0], tree[2][0][1], tree[2][0][2]);
                        }
                        return tree[2][0];
                        function parse(str) {
                            var res = [];
                            if (state === ATTR_VALUE_W)
                                state = ATTR;
                            for (var i = 0; i < str.length; i++) {
                                var c = str.charAt(i);
                                if (state === TEXT && c === '<') {
                                    if (reg.length)
                                        res.push([
                                            TEXT,
                                            reg
                                        ]);
                                    reg = '';
                                    state = OPEN;
                                } else if (c === '>' && !quot(state) && state !== COMMENT) {
                                    if (state === OPEN) {
                                        res.push([
                                            OPEN,
                                            reg
                                        ]);
                                    } else if (state === ATTR_KEY) {
                                        res.push([
                                            ATTR_KEY,
                                            reg
                                        ]);
                                    } else if (state === ATTR_VALUE && reg.length) {
                                        res.push([
                                            ATTR_VALUE,
                                            reg
                                        ]);
                                    }
                                    res.push([CLOSE]);
                                    reg = '';
                                    state = TEXT;
                                } else if (state === COMMENT && /-$/.test(reg) && c === '-') {
                                    if (opts.comments) {
                                        res.push([
                                            ATTR_VALUE,
                                            reg.substr(0, reg.length - 1)
                                        ], [CLOSE]);
                                    }
                                    reg = '';
                                    state = TEXT;
                                } else if (state === OPEN && /^!--$/.test(reg)) {
                                    if (opts.comments) {
                                        res.push([
                                            OPEN,
                                            reg
                                        ], [
                                            ATTR_KEY,
                                            'comment'
                                        ], [ATTR_EQ]);
                                    }
                                    reg = c;
                                    state = COMMENT;
                                } else if (state === TEXT || state === COMMENT) {
                                    reg += c;
                                } else if (state === OPEN && /\s/.test(c)) {
                                    res.push([
                                        OPEN,
                                        reg
                                    ]);
                                    reg = '';
                                    state = ATTR;
                                } else if (state === OPEN) {
                                    reg += c;
                                } else if (state === ATTR && /[^\s"'=/]/.test(c)) {
                                    state = ATTR_KEY;
                                    reg = c;
                                } else if (state === ATTR && /\s/.test(c)) {
                                    if (reg.length)
                                        res.push([
                                            ATTR_KEY,
                                            reg
                                        ]);
                                    res.push([ATTR_BREAK]);
                                } else if (state === ATTR_KEY && /\s/.test(c)) {
                                    res.push([
                                        ATTR_KEY,
                                        reg
                                    ]);
                                    reg = '';
                                    state = ATTR_KEY_W;
                                } else if (state === ATTR_KEY && c === '=') {
                                    res.push([
                                        ATTR_KEY,
                                        reg
                                    ], [ATTR_EQ]);
                                    reg = '';
                                    state = ATTR_VALUE_W;
                                } else if (state === ATTR_KEY) {
                                    reg += c;
                                } else if ((state === ATTR_KEY_W || state === ATTR) && c === '=') {
                                    res.push([ATTR_EQ]);
                                    state = ATTR_VALUE_W;
                                } else if ((state === ATTR_KEY_W || state === ATTR) && !/\s/.test(c)) {
                                    res.push([ATTR_BREAK]);
                                    if (/[\w-]/.test(c)) {
                                        reg += c;
                                        state = ATTR_KEY;
                                    } else
                                        state = ATTR;
                                } else if (state === ATTR_VALUE_W && c === '"') {
                                    state = ATTR_VALUE_DQ;
                                } else if (state === ATTR_VALUE_W && c === '\'') {
                                    state = ATTR_VALUE_SQ;
                                } else if (state === ATTR_VALUE_DQ && c === '"') {
                                    res.push([
                                        ATTR_VALUE,
                                        reg
                                    ], [ATTR_BREAK]);
                                    reg = '';
                                    state = ATTR;
                                } else if (state === ATTR_VALUE_SQ && c === '\'') {
                                    res.push([
                                        ATTR_VALUE,
                                        reg
                                    ], [ATTR_BREAK]);
                                    reg = '';
                                    state = ATTR;
                                } else if (state === ATTR_VALUE_W && !/\s/.test(c)) {
                                    state = ATTR_VALUE;
                                    i--;
                                } else if (state === ATTR_VALUE && /\s/.test(c)) {
                                    res.push([
                                        ATTR_VALUE,
                                        reg
                                    ], [ATTR_BREAK]);
                                    reg = '';
                                    state = ATTR;
                                } else if (state === ATTR_VALUE || state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ) {
                                    reg += c;
                                }
                            }
                            if (state === TEXT && reg.length) {
                                res.push([
                                    TEXT,
                                    reg
                                ]);
                                reg = '';
                            } else if (state === ATTR_VALUE && reg.length) {
                                res.push([
                                    ATTR_VALUE,
                                    reg
                                ]);
                                reg = '';
                            } else if (state === ATTR_VALUE_DQ && reg.length) {
                                res.push([
                                    ATTR_VALUE,
                                    reg
                                ]);
                                reg = '';
                            } else if (state === ATTR_VALUE_SQ && reg.length) {
                                res.push([
                                    ATTR_VALUE,
                                    reg
                                ]);
                                reg = '';
                            } else if (state === ATTR_KEY) {
                                res.push([
                                    ATTR_KEY,
                                    reg
                                ]);
                                reg = '';
                            }
                            return res;
                        }
                    };
                    function strfn(x) {
                        if (typeof x === 'function')
                            return x;
                        else if (typeof x === 'string')
                            return x;
                        else if (x && typeof x === 'object')
                            return x;
                        else
                            return concat('', x);
                    }
                };
                function quot(state) {
                    return state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ;
                }
                var hasOwn = Object.prototype.hasOwnProperty;
                function has(obj, key) {
                    return hasOwn.call(obj, key);
                }
                var closeRE = RegExp('^(' + [
                    'area',
                    'base',
                    'basefont',
                    'bgsound',
                    'br',
                    'col',
                    'command',
                    'embed',
                    'frame',
                    'hr',
                    'img',
                    'input',
                    'isindex',
                    'keygen',
                    'link',
                    'meta',
                    'param',
                    'source',
                    'track',
                    'wbr',
                    '!--',
                    'animate',
                    'animateTransform',
                    'circle',
                    'cursor',
                    'desc',
                    'ellipse',
                    'feBlend',
                    'feColorMatrix',
                    'feComposite',
                    'feConvolveMatrix',
                    'feDiffuseLighting',
                    'feDisplacementMap',
                    'feDistantLight',
                    'feFlood',
                    'feFuncA',
                    'feFuncB',
                    'feFuncG',
                    'feFuncR',
                    'feGaussianBlur',
                    'feImage',
                    'feMergeNode',
                    'feMorphology',
                    'feOffset',
                    'fePointLight',
                    'feSpecularLighting',
                    'feSpotLight',
                    'feTile',
                    'feTurbulence',
                    'font-face-format',
                    'font-face-name',
                    'font-face-uri',
                    'glyph',
                    'glyphRef',
                    'hkern',
                    'image',
                    'line',
                    'missing-glyph',
                    'mpath',
                    'path',
                    'polygon',
                    'polyline',
                    'rect',
                    'set',
                    'stop',
                    'tref',
                    'use',
                    'view',
                    'vkern'
                ].join('|') + ')(?:[.#][a-zA-Z0-9\x7F-\uFFFF_:-]+)*$');
                function selfClosing(tag) {
                    return closeRE.test(tag);
                }
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/hyperx/index.js', '/../node_modules/hyperx'));
        },
        {
            '7YKIPe': 11,
            'buffer': 10,
            'hyperscript-attribute-to-property': 12
        }
    ],
    14: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                exports.read = function (buffer, offset, isLE, mLen, nBytes) {
                    var e, m;
                    var eLen = nBytes * 8 - mLen - 1;
                    var eMax = (1 << eLen) - 1;
                    var eBias = eMax >> 1;
                    var nBits = -7;
                    var i = isLE ? nBytes - 1 : 0;
                    var d = isLE ? -1 : 1;
                    var s = buffer[offset + i];
                    i += d;
                    e = s & (1 << -nBits) - 1;
                    s >>= -nBits;
                    nBits += eLen;
                    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
                    }
                    m = e & (1 << -nBits) - 1;
                    e >>= -nBits;
                    nBits += mLen;
                    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
                    }
                    if (e === 0) {
                        e = 1 - eBias;
                    } else if (e === eMax) {
                        return m ? NaN : (s ? -1 : 1) * Infinity;
                    } else {
                        m = m + Math.pow(2, mLen);
                        e = e - eBias;
                    }
                    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
                };
                exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
                    var e, m, c;
                    var eLen = nBytes * 8 - mLen - 1;
                    var eMax = (1 << eLen) - 1;
                    var eBias = eMax >> 1;
                    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                    var i = isLE ? 0 : nBytes - 1;
                    var d = isLE ? 1 : -1;
                    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
                    value = Math.abs(value);
                    if (isNaN(value) || value === Infinity) {
                        m = isNaN(value) ? 1 : 0;
                        e = eMax;
                    } else {
                        e = Math.floor(Math.log(value) / Math.LN2);
                        if (value * (c = Math.pow(2, -e)) < 1) {
                            e--;
                            c *= 2;
                        }
                        if (e + eBias >= 1) {
                            value += rt / c;
                        } else {
                            value += rt * Math.pow(2, 1 - eBias);
                        }
                        if (value * c >= 2) {
                            e++;
                            c /= 2;
                        }
                        if (e + eBias >= eMax) {
                            m = 0;
                            e = eMax;
                        } else if (e + eBias >= 1) {
                            m = (value * c - 1) * Math.pow(2, mLen);
                            e = e + eBias;
                        } else {
                            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                            e = 0;
                        }
                    }
                    for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
                    }
                    e = e << mLen | m;
                    eLen += mLen;
                    for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
                    }
                    buffer[offset + i - d] |= s * 128;
                };
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/ieee754/index.js', '/../node_modules/ieee754'));
        },
        {
            '7YKIPe': 11,
            'buffer': 10
        }
    ],
    15: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                assert.notEqual = notEqual;
                assert.notOk = notOk;
                assert.equal = equal;
                assert.ok = assert;
                module.exports = assert;
                function equal(a, b, m) {
                }
                function notEqual(a, b, m) {
                }
                function notOk(t, m) {
                }
                function assert(t, m) {
                    if (!t)
                        throw new Error(m || 'AssertionError');
                }
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/nanoassert/index.js', '/../node_modules/nanoassert'));
        },
        {
            '7YKIPe': 11,
            'buffer': 10
        }
    ],
    16: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                var splice = require('remove-array-items');
                var nanotiming = require('nanotiming');
                module.exports = Nanobus;
                function Nanobus(name) {
                    if (!(this instanceof Nanobus))
                        return new Nanobus(name);
                    this._name = name || 'nanobus';
                    this._starListeners = [];
                    this._listeners = {};
                }
                Nanobus.prototype.emit = function (eventName, data) {
                    var emitTiming = nanotiming(this._name + '(\'' + eventName + '\')');
                    var listeners = this._listeners[eventName];
                    if (listeners && listeners.length > 0) {
                        this._emit(this._listeners[eventName], data);
                    }
                    if (this._starListeners.length > 0) {
                        this._emit(this._starListeners, eventName, data, emitTiming.uuid);
                    }
                    emitTiming();
                    return this;
                };
                Nanobus.prototype.on = Nanobus.prototype.addListener = function (eventName, listener) {
                    if (eventName === '*') {
                        this._starListeners.push(listener);
                    } else {
                        if (!this._listeners[eventName])
                            this._listeners[eventName] = [];
                        this._listeners[eventName].push(listener);
                    }
                    return this;
                };
                Nanobus.prototype.prependListener = function (eventName, listener) {
                    if (eventName === '*') {
                        this._starListeners.unshift(listener);
                    } else {
                        if (!this._listeners[eventName])
                            this._listeners[eventName] = [];
                        this._listeners[eventName].unshift(listener);
                    }
                    return this;
                };
                Nanobus.prototype.once = function (eventName, listener) {
                    var self = this;
                    this.on(eventName, once);
                    function once() {
                        listener.apply(self, arguments);
                        self.removeListener(eventName, once);
                    }
                    return this;
                };
                Nanobus.prototype.prependOnceListener = function (eventName, listener) {
                    var self = this;
                    this.prependListener(eventName, once);
                    function once() {
                        listener.apply(self, arguments);
                        self.removeListener(eventName, once);
                    }
                    return this;
                };
                Nanobus.prototype.removeListener = function (eventName, listener) {
                    if (eventName === '*') {
                        this._starListeners = this._starListeners.slice();
                        return remove(this._starListeners, listener);
                    } else {
                        if (typeof this._listeners[eventName] !== 'undefined') {
                            this._listeners[eventName] = this._listeners[eventName].slice();
                        }
                        return remove(this._listeners[eventName], listener);
                    }
                    function remove(arr, listener) {
                        if (!arr)
                            return;
                        var index = arr.indexOf(listener);
                        if (index !== -1) {
                            splice(arr, index, 1);
                            return true;
                        }
                    }
                };
                Nanobus.prototype.removeAllListeners = function (eventName) {
                    if (eventName) {
                        if (eventName === '*') {
                            this._starListeners = [];
                        } else {
                            this._listeners[eventName] = [];
                        }
                    } else {
                        this._starListeners = [];
                        this._listeners = {};
                    }
                    return this;
                };
                Nanobus.prototype.listeners = function (eventName) {
                    var listeners = eventName !== '*' ? this._listeners[eventName] : this._starListeners;
                    var ret = [];
                    if (listeners) {
                        var ilength = listeners.length;
                        for (var i = 0; i < ilength; i++)
                            ret.push(listeners[i]);
                    }
                    return ret;
                };
                Nanobus.prototype._emit = function (arr, eventName, data, uuid) {
                    if (typeof arr === 'undefined')
                        return;
                    if (data === undefined) {
                        data = eventName;
                        eventName = null;
                    }
                    var length = arr.length;
                    for (var i = 0; i < length; i++) {
                        var listener = arr[i];
                        if (eventName) {
                            if (uuid !== undefined)
                                listener(eventName, data, uuid);
                            else
                                listener(eventName, data);
                        } else {
                            listener(data);
                        }
                    }
                };
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/nanobus/index.js', '/../node_modules/nanobus'));
        },
        {
            '7YKIPe': 11,
            'assert': 8,
            'buffer': 10,
            'nanotiming': 25,
            'remove-array-items': 27
        }
    ],
    17: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                var safeExternalLink = /[noopener|noreferrer] [noopener|noreferrer]/;
                var protocolLink = /^[\w-_]+:/;
                module.exports = href;
                function href(cb, root) {
                    root = root || window.document;
                    window.addEventListener('click', function (e) {
                        if (e.button && e.button !== 0 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.defaultPrevented)
                            return;
                        var anchor = function traverse(node) {
                            if (!node || node === root)
                                return;
                            if (node.localName !== 'a' || node.href === undefined) {
                                return traverse(node.parentNode);
                            }
                            return node;
                        }(e.target);
                        if (!anchor)
                            return;
                        if (window.location.origin !== anchor.origin || anchor.hasAttribute('download') || anchor.getAttribute('target') === '_blank' && safeExternalLink.test(anchor.getAttribute('rel')) || protocolLink.test(anchor.getAttribute('href')))
                            return;
                        e.preventDefault();
                        cb(anchor);
                    });
                }
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/nanohref/index.js', '/../node_modules/nanohref'));
        },
        {
            '7YKIPe': 11,
            'assert': 8,
            'buffer': 10
        }
    ],
    18: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                module.exports = nanolocation;
                function nanolocation() {
                    var pathname = window.location.pathname.replace(/\/$/, '');
                    var hash = window.location.hash.replace(/^#/, '/');
                    return pathname + hash;
                }
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/nanolocation/index.js', '/../node_modules/nanolocation'));
        },
        {
            '7YKIPe': 11,
            'assert': 8,
            'buffer': 10
        }
    ],
    19: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                var morph = require('./lib/morph');
                var TEXT_NODE = 3;
                module.exports = nanomorph;
                function nanomorph(oldTree, newTree) {
                    var tree = walk(newTree, oldTree);
                    return tree;
                }
                function walk(newNode, oldNode) {
                    if (!oldNode) {
                        return newNode;
                    } else if (!newNode) {
                        return null;
                    } else if (newNode.isSameNode && newNode.isSameNode(oldNode)) {
                        return oldNode;
                    } else if (newNode.tagName !== oldNode.tagName) {
                        return newNode;
                    } else {
                        morph(newNode, oldNode);
                        updateChildren(newNode, oldNode);
                        return oldNode;
                    }
                }
                function updateChildren(newNode, oldNode) {
                    var oldChild, newChild, morphed, oldMatch;
                    var offset = 0;
                    for (var i = 0;; i++) {
                        oldChild = oldNode.childNodes[i];
                        newChild = newNode.childNodes[i - offset];
                        if (!oldChild && !newChild) {
                            break;
                        } else if (!newChild) {
                            oldNode.removeChild(oldChild);
                            i--;
                        } else if (!oldChild) {
                            oldNode.appendChild(newChild);
                            offset++;
                        } else if (same(newChild, oldChild)) {
                            morphed = walk(newChild, oldChild);
                            if (morphed !== oldChild) {
                                oldNode.replaceChild(morphed, oldChild);
                                offset++;
                            }
                        } else {
                            oldMatch = null;
                            for (var j = i; j < oldNode.childNodes.length; j++) {
                                if (same(oldNode.childNodes[j], newChild)) {
                                    oldMatch = oldNode.childNodes[j];
                                    break;
                                }
                            }
                            if (oldMatch) {
                                morphed = walk(newChild, oldMatch);
                                if (morphed !== oldMatch)
                                    offset++;
                                oldNode.insertBefore(morphed, oldChild);
                            } else if (!newChild.id && !oldChild.id) {
                                morphed = walk(newChild, oldChild);
                                if (morphed !== oldChild) {
                                    oldNode.replaceChild(morphed, oldChild);
                                    offset++;
                                }
                            } else {
                                oldNode.insertBefore(newChild, oldChild);
                                offset++;
                            }
                        }
                    }
                }
                function same(a, b) {
                    if (a.id)
                        return a.id === b.id;
                    if (a.isSameNode)
                        return a.isSameNode(b);
                    if (a.tagName !== b.tagName)
                        return false;
                    if (a.type === TEXT_NODE)
                        return a.nodeValue === b.nodeValue;
                    return false;
                }
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/nanomorph/index.js', '/../node_modules/nanomorph'));
        },
        {
            './lib/morph': 21,
            '7YKIPe': 11,
            'assert': 15,
            'buffer': 10
        }
    ],
    20: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                module.exports = [
                    'onclick',
                    'ondblclick',
                    'onmousedown',
                    'onmouseup',
                    'onmouseover',
                    'onmousemove',
                    'onmouseout',
                    'onmouseenter',
                    'onmouseleave',
                    'ontouchcancel',
                    'ontouchend',
                    'ontouchmove',
                    'ontouchstart',
                    'ondragstart',
                    'ondrag',
                    'ondragenter',
                    'ondragleave',
                    'ondragover',
                    'ondrop',
                    'ondragend',
                    'onkeydown',
                    'onkeypress',
                    'onkeyup',
                    'onunload',
                    'onabort',
                    'onerror',
                    'onresize',
                    'onscroll',
                    'onselect',
                    'onchange',
                    'onsubmit',
                    'onreset',
                    'onfocus',
                    'onblur',
                    'oninput',
                    'oncontextmenu',
                    'onfocusin',
                    'onfocusout'
                ];
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/nanomorph/lib/events.js', '/../node_modules/nanomorph/lib'));
        },
        {
            '7YKIPe': 11,
            'buffer': 10
        }
    ],
    21: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                var events = require('./events');
                var eventsLength = events.length;
                var ELEMENT_NODE = 1;
                var TEXT_NODE = 3;
                var COMMENT_NODE = 8;
                module.exports = morph;
                function morph(newNode, oldNode) {
                    var nodeType = newNode.nodeType;
                    var nodeName = newNode.nodeName;
                    if (nodeType === ELEMENT_NODE) {
                        copyAttrs(newNode, oldNode);
                    }
                    if (nodeType === TEXT_NODE || nodeType === COMMENT_NODE) {
                        if (oldNode.nodeValue !== newNode.nodeValue) {
                            oldNode.nodeValue = newNode.nodeValue;
                        }
                    }
                    if (nodeName === 'INPUT')
                        updateInput(newNode, oldNode);
                    else if (nodeName === 'OPTION')
                        updateOption(newNode, oldNode);
                    else if (nodeName === 'TEXTAREA')
                        updateTextarea(newNode, oldNode);
                    copyEvents(newNode, oldNode);
                }
                function copyAttrs(newNode, oldNode) {
                    var oldAttrs = oldNode.attributes;
                    var newAttrs = newNode.attributes;
                    var attrNamespaceURI = null;
                    var attrValue = null;
                    var fromValue = null;
                    var attrName = null;
                    var attr = null;
                    for (var i = newAttrs.length - 1; i >= 0; --i) {
                        attr = newAttrs[i];
                        attrName = attr.name;
                        attrNamespaceURI = attr.namespaceURI;
                        attrValue = attr.value;
                        if (attrNamespaceURI) {
                            attrName = attr.localName || attrName;
                            fromValue = oldNode.getAttributeNS(attrNamespaceURI, attrName);
                            if (fromValue !== attrValue) {
                                oldNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
                            }
                        } else {
                            if (!oldNode.hasAttribute(attrName)) {
                                oldNode.setAttribute(attrName, attrValue);
                            } else {
                                fromValue = oldNode.getAttribute(attrName);
                                if (fromValue !== attrValue) {
                                    if (attrValue === 'null' || attrValue === 'undefined') {
                                        oldNode.removeAttribute(attrName);
                                    } else {
                                        oldNode.setAttribute(attrName, attrValue);
                                    }
                                }
                            }
                        }
                    }
                    for (var j = oldAttrs.length - 1; j >= 0; --j) {
                        attr = oldAttrs[j];
                        if (attr.specified !== false) {
                            attrName = attr.name;
                            attrNamespaceURI = attr.namespaceURI;
                            if (attrNamespaceURI) {
                                attrName = attr.localName || attrName;
                                if (!newNode.hasAttributeNS(attrNamespaceURI, attrName)) {
                                    oldNode.removeAttributeNS(attrNamespaceURI, attrName);
                                }
                            } else {
                                if (!newNode.hasAttributeNS(null, attrName)) {
                                    oldNode.removeAttribute(attrName);
                                }
                            }
                        }
                    }
                }
                function copyEvents(newNode, oldNode) {
                    for (var i = 0; i < eventsLength; i++) {
                        var ev = events[i];
                        if (newNode[ev]) {
                            oldNode[ev] = newNode[ev];
                        } else if (oldNode[ev]) {
                            oldNode[ev] = undefined;
                        }
                    }
                }
                function updateOption(newNode, oldNode) {
                    updateAttribute(newNode, oldNode, 'selected');
                }
                function updateInput(newNode, oldNode) {
                    var newValue = newNode.value;
                    var oldValue = oldNode.value;
                    updateAttribute(newNode, oldNode, 'checked');
                    updateAttribute(newNode, oldNode, 'disabled');
                    if (newValue !== oldValue) {
                        oldNode.setAttribute('value', newValue);
                        oldNode.value = newValue;
                    }
                    if (newValue === 'null') {
                        oldNode.value = '';
                        oldNode.removeAttribute('value');
                    }
                    if (!newNode.hasAttributeNS(null, 'value')) {
                        oldNode.removeAttribute('value');
                    } else if (oldNode.type === 'range') {
                        oldNode.value = newValue;
                    }
                }
                function updateTextarea(newNode, oldNode) {
                    var newValue = newNode.value;
                    if (newValue !== oldNode.value) {
                        oldNode.value = newValue;
                    }
                    if (oldNode.firstChild && oldNode.firstChild.nodeValue !== newValue) {
                        if (newValue === '' && oldNode.firstChild.nodeValue === oldNode.placeholder) {
                            return;
                        }
                        oldNode.firstChild.nodeValue = newValue;
                    }
                }
                function updateAttribute(newNode, oldNode, name) {
                    if (newNode[name] !== oldNode[name]) {
                        oldNode[name] = newNode[name];
                        if (newNode[name]) {
                            oldNode.setAttribute(name, '');
                        } else {
                            oldNode.removeAttribute(name);
                        }
                    }
                }
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/nanomorph/lib/morph.js', '/../node_modules/nanomorph/lib'));
        },
        {
            './events': 20,
            '7YKIPe': 11,
            'buffer': 10
        }
    ],
    22: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                var reg = new RegExp('([^?=&]+)(=([^&]*))?', 'g');
                module.exports = qs;
                function qs(url) {
                    var obj = {};
                    url.replace(/^.*\?/, '').replace(reg, function (a0, a1, a2, a3) {
                        obj[window.decodeURIComponent(a1)] = window.decodeURIComponent(a3);
                    });
                    return obj;
                }
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/nanoquery/browser.js', '/../node_modules/nanoquery'));
        },
        {
            '7YKIPe': 11,
            'assert': 8,
            'buffer': 10
        }
    ],
    23: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                'use strict';
                module.exports = nanoraf;
                function nanoraf(render, raf) {
                    if (!raf)
                        raf = window.requestAnimationFrame;
                    var redrawScheduled = false;
                    var args = null;
                    return function frame() {
                        if (args === null && !redrawScheduled) {
                            redrawScheduled = true;
                            raf(function redraw() {
                                redrawScheduled = false;
                                var length = args.length;
                                var _args = new Array(length);
                                for (var i = 0; i < length; i++)
                                    _args[i] = args[i];
                                render.apply(render, _args);
                                args = null;
                            });
                        }
                        args = arguments;
                    };
                }
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/nanoraf/index.js', '/../node_modules/nanoraf'));
        },
        {
            '7YKIPe': 11,
            'assert': 8,
            'buffer': 10
        }
    ],
    24: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                var wayfarer = require('wayfarer');
                var isLocalFile = /file:\/\//.test(typeof window === 'object' && window.location && window.location.origin);
                var electron = '^(file://|/)(.*.html?/?)?';
                var protocol = '^(http(s)?(://))?(www.)?';
                var domain = '[a-zA-Z0-9-_.]+(:[0-9]{1,5})?(/{1})?';
                var qs = '[?].*$';
                var stripElectron = new RegExp(electron);
                var prefix = new RegExp(protocol + domain);
                var normalize = new RegExp('#');
                var suffix = new RegExp(qs);
                module.exports = Nanorouter;
                function Nanorouter(opts) {
                    opts = opts || {};
                    var router = wayfarer(opts.default || '/404');
                    var curry = opts.curry || false;
                    var prevCallback = null;
                    var prevRoute = null;
                    emit.router = router;
                    emit.on = on;
                    return emit;
                    function on(routename, listener) {
                        routename = routename.replace(/^[#/]/, '');
                        router.on(routename, listener);
                    }
                    function emit(route) {
                        if (!curry) {
                            return router(route);
                        } else {
                            route = pathname(route, isLocalFile);
                            if (route === prevRoute) {
                                return prevCallback();
                            } else {
                                prevRoute = route;
                                prevCallback = router(route);
                                return prevCallback();
                            }
                        }
                    }
                }
                function pathname(route, isElectron) {
                    if (isElectron)
                        route = route.replace(stripElectron, '');
                    else
                        route = route.replace(prefix, '');
                    return route.replace(suffix, '').replace(normalize, '/');
                }
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/nanorouter/index.js', '/../node_modules/nanorouter'));
        },
        {
            '7YKIPe': 11,
            'buffer': 10,
            'wayfarer': 32
        }
    ],
    25: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                var onIdle = require('./lib/on-idle');
                var perf;
                var disabled = true;
                try {
                    perf = window.performance;
                    disabled = window.localStorage.DISABLE_NANOTIMING === 'true' || !perf.mark;
                } catch (e) {
                }
                module.exports = nanotiming;
                function nanotiming(name) {
                    if (disabled)
                        return noop;
                    var uuid = (perf.now() * 100).toFixed();
                    var startName = 'start-' + uuid + '-' + name;
                    perf.mark(startName);
                    function end(cb) {
                        var endName = 'end-' + uuid + '-' + name;
                        perf.mark(endName);
                        onIdle(function () {
                            var measureName = name + ' [' + uuid + ']';
                            perf.measure(measureName, startName, endName);
                            perf.clearMarks(startName);
                            perf.clearMarks(endName);
                            if (cb)
                                cb(name);
                        });
                    }
                    end.uuid = uuid;
                    return end;
                }
                function noop(cb) {
                    if (cb)
                        onIdle(cb);
                }
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/nanotiming/index.js', '/../node_modules/nanotiming'));
        },
        {
            './lib/on-idle': 26,
            '7YKIPe': 11,
            'assert': 8,
            'buffer': 10
        }
    ],
    26: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                var dftOpts = {};
                var hasWindow = typeof window !== 'undefined';
                var hasIdle = hasWindow && window.requestIdleCallback;
                module.exports = onIdle;
                function onIdle(cb, opts) {
                    opts = opts || dftOpts;
                    var timerId;
                    if (hasIdle) {
                        timerId = window.requestIdleCallback(function (idleDeadline) {
                            if (idleDeadline.timeRemaining() <= 10 && !idleDeadline.didTimeout) {
                                return onIdle(cb, opts);
                            } else {
                                cb(idleDeadline);
                            }
                        }, opts);
                        return window.cancelIdleCallback.bind(window, timerId);
                    } else if (hasWindow) {
                        timerId = setTimeout(cb, 0);
                        return clearTimeout.bind(window, timerId);
                    }
                }
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/nanotiming/lib/on-idle.js', '/../node_modules/nanotiming/lib'));
        },
        {
            '7YKIPe': 11,
            'assert': 8,
            'buffer': 10
        }
    ],
    27: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                'use strict';
                module.exports = function removeItems(arr, startIdx, removeCount) {
                    var i, length = arr.length;
                    if (startIdx >= length || removeCount === 0) {
                        return;
                    }
                    removeCount = startIdx + removeCount > length ? length - startIdx : removeCount;
                    var len = length - removeCount;
                    for (i = startIdx; i < len; ++i) {
                        arr[i] = arr[i + removeCount];
                    }
                    arr.length = len;
                };
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/remove-array-items/index.js', '/../node_modules/remove-array-items'));
        },
        {
            '7YKIPe': 11,
            'buffer': 10
        }
    ],
    28: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                module.exports = scrollToAnchor;
                function scrollToAnchor(anchor, options) {
                    if (anchor) {
                        try {
                            var el = document.querySelector(anchor);
                            if (el)
                                el.scrollIntoView(options);
                        } catch (e) {
                        }
                    }
                }
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/scroll-to-anchor/index.js', '/../node_modules/scroll-to-anchor'));
        },
        {
            '7YKIPe': 11,
            'buffer': 10
        }
    ],
    29: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                if (typeof Object.create === 'function') {
                    module.exports = function inherits(ctor, superCtor) {
                        ctor.super_ = superCtor;
                        ctor.prototype = Object.create(superCtor.prototype, {
                            constructor: {
                                value: ctor,
                                enumerable: false,
                                writable: true,
                                configurable: true
                            }
                        });
                    };
                } else {
                    module.exports = function inherits(ctor, superCtor) {
                        ctor.super_ = superCtor;
                        var TempCtor = function () {
                        };
                        TempCtor.prototype = superCtor.prototype;
                        ctor.prototype = new TempCtor();
                        ctor.prototype.constructor = ctor;
                    };
                }
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/util/node_modules/inherits/inherits_browser.js', '/../node_modules/util/node_modules/inherits'));
        },
        {
            '7YKIPe': 11,
            'buffer': 10
        }
    ],
    30: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                module.exports = function isBuffer(arg) {
                    return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
                };
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/util/support/isBufferBrowser.js', '/../node_modules/util/support'));
        },
        {
            '7YKIPe': 11,
            'buffer': 10
        }
    ],
    31: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                var formatRegExp = /%[sdj%]/g;
                exports.format = function (f) {
                    if (!isString(f)) {
                        var objects = [];
                        for (var i = 0; i < arguments.length; i++) {
                            objects.push(inspect(arguments[i]));
                        }
                        return objects.join(' ');
                    }
                    var i = 1;
                    var args = arguments;
                    var len = args.length;
                    var str = String(f).replace(formatRegExp, function (x) {
                        if (x === '%%')
                            return '%';
                        if (i >= len)
                            return x;
                        switch (x) {
                        case '%s':
                            return String(args[i++]);
                        case '%d':
                            return Number(args[i++]);
                        case '%j':
                            try {
                                return JSON.stringify(args[i++]);
                            } catch (_) {
                                return '[Circular]';
                            }
                        default:
                            return x;
                        }
                    });
                    for (var x = args[i]; i < len; x = args[++i]) {
                        if (isNull(x) || !isObject(x)) {
                            str += ' ' + x;
                        } else {
                            str += ' ' + inspect(x);
                        }
                    }
                    return str;
                };
                exports.deprecate = function (fn, msg) {
                    if (isUndefined(global.process)) {
                        return function () {
                            return exports.deprecate(fn, msg).apply(this, arguments);
                        };
                    }
                    if (process.noDeprecation === true) {
                        return fn;
                    }
                    var warned = false;
                    function deprecated() {
                        if (!warned) {
                            if (process.throwDeprecation) {
                                throw new Error(msg);
                            } else if (process.traceDeprecation) {
                                console.trace(msg);
                            } else {
                                console.error(msg);
                            }
                            warned = true;
                        }
                        return fn.apply(this, arguments);
                    }
                    return deprecated;
                };
                var debugs = {};
                var debugEnviron;
                exports.debuglog = function (set) {
                    if (isUndefined(debugEnviron))
                        debugEnviron = process.env.NODE_DEBUG || '';
                    set = set.toUpperCase();
                    if (!debugs[set]) {
                        if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
                            var pid = process.pid;
                            debugs[set] = function () {
                                var msg = exports.format.apply(exports, arguments);
                                console.error('%s %d: %s', set, pid, msg);
                            };
                        } else {
                            debugs[set] = function () {
                            };
                        }
                    }
                    return debugs[set];
                };
                function inspect(obj, opts) {
                    var ctx = {
                        seen: [],
                        stylize: stylizeNoColor
                    };
                    if (arguments.length >= 3)
                        ctx.depth = arguments[2];
                    if (arguments.length >= 4)
                        ctx.colors = arguments[3];
                    if (isBoolean(opts)) {
                        ctx.showHidden = opts;
                    } else if (opts) {
                        exports._extend(ctx, opts);
                    }
                    if (isUndefined(ctx.showHidden))
                        ctx.showHidden = false;
                    if (isUndefined(ctx.depth))
                        ctx.depth = 2;
                    if (isUndefined(ctx.colors))
                        ctx.colors = false;
                    if (isUndefined(ctx.customInspect))
                        ctx.customInspect = true;
                    if (ctx.colors)
                        ctx.stylize = stylizeWithColor;
                    return formatValue(ctx, obj, ctx.depth);
                }
                exports.inspect = inspect;
                inspect.colors = {
                    'bold': [
                        1,
                        22
                    ],
                    'italic': [
                        3,
                        23
                    ],
                    'underline': [
                        4,
                        24
                    ],
                    'inverse': [
                        7,
                        27
                    ],
                    'white': [
                        37,
                        39
                    ],
                    'grey': [
                        90,
                        39
                    ],
                    'black': [
                        30,
                        39
                    ],
                    'blue': [
                        34,
                        39
                    ],
                    'cyan': [
                        36,
                        39
                    ],
                    'green': [
                        32,
                        39
                    ],
                    'magenta': [
                        35,
                        39
                    ],
                    'red': [
                        31,
                        39
                    ],
                    'yellow': [
                        33,
                        39
                    ]
                };
                inspect.styles = {
                    'special': 'cyan',
                    'number': 'yellow',
                    'boolean': 'yellow',
                    'undefined': 'grey',
                    'null': 'bold',
                    'string': 'green',
                    'date': 'magenta',
                    'regexp': 'red'
                };
                function stylizeWithColor(str, styleType) {
                    var style = inspect.styles[styleType];
                    if (style) {
                        return '\x1B[' + inspect.colors[style][0] + 'm' + str + '\x1B[' + inspect.colors[style][1] + 'm';
                    } else {
                        return str;
                    }
                }
                function stylizeNoColor(str, styleType) {
                    return str;
                }
                function arrayToHash(array) {
                    var hash = {};
                    array.forEach(function (val, idx) {
                        hash[val] = true;
                    });
                    return hash;
                }
                function formatValue(ctx, value, recurseTimes) {
                    if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
                        var ret = value.inspect(recurseTimes, ctx);
                        if (!isString(ret)) {
                            ret = formatValue(ctx, ret, recurseTimes);
                        }
                        return ret;
                    }
                    var primitive = formatPrimitive(ctx, value);
                    if (primitive) {
                        return primitive;
                    }
                    var keys = Object.keys(value);
                    var visibleKeys = arrayToHash(keys);
                    if (ctx.showHidden) {
                        keys = Object.getOwnPropertyNames(value);
                    }
                    if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
                        return formatError(value);
                    }
                    if (keys.length === 0) {
                        if (isFunction(value)) {
                            var name = value.name ? ': ' + value.name : '';
                            return ctx.stylize('[Function' + name + ']', 'special');
                        }
                        if (isRegExp(value)) {
                            return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
                        }
                        if (isDate(value)) {
                            return ctx.stylize(Date.prototype.toString.call(value), 'date');
                        }
                        if (isError(value)) {
                            return formatError(value);
                        }
                    }
                    var base = '', array = false, braces = [
                            '{',
                            '}'
                        ];
                    if (isArray(value)) {
                        array = true;
                        braces = [
                            '[',
                            ']'
                        ];
                    }
                    if (isFunction(value)) {
                        var n = value.name ? ': ' + value.name : '';
                        base = ' [Function' + n + ']';
                    }
                    if (isRegExp(value)) {
                        base = ' ' + RegExp.prototype.toString.call(value);
                    }
                    if (isDate(value)) {
                        base = ' ' + Date.prototype.toUTCString.call(value);
                    }
                    if (isError(value)) {
                        base = ' ' + formatError(value);
                    }
                    if (keys.length === 0 && (!array || value.length == 0)) {
                        return braces[0] + base + braces[1];
                    }
                    if (recurseTimes < 0) {
                        if (isRegExp(value)) {
                            return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
                        } else {
                            return ctx.stylize('[Object]', 'special');
                        }
                    }
                    ctx.seen.push(value);
                    var output;
                    if (array) {
                        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
                    } else {
                        output = keys.map(function (key) {
                            return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
                        });
                    }
                    ctx.seen.pop();
                    return reduceToSingleString(output, base, braces);
                }
                function formatPrimitive(ctx, value) {
                    if (isUndefined(value))
                        return ctx.stylize('undefined', 'undefined');
                    if (isString(value)) {
                        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, '\\\'').replace(/\\"/g, '"') + '\'';
                        return ctx.stylize(simple, 'string');
                    }
                    if (isNumber(value))
                        return ctx.stylize('' + value, 'number');
                    if (isBoolean(value))
                        return ctx.stylize('' + value, 'boolean');
                    if (isNull(value))
                        return ctx.stylize('null', 'null');
                }
                function formatError(value) {
                    return '[' + Error.prototype.toString.call(value) + ']';
                }
                function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
                    var output = [];
                    for (var i = 0, l = value.length; i < l; ++i) {
                        if (hasOwnProperty(value, String(i))) {
                            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
                        } else {
                            output.push('');
                        }
                    }
                    keys.forEach(function (key) {
                        if (!key.match(/^\d+$/)) {
                            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
                        }
                    });
                    return output;
                }
                function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
                    var name, str, desc;
                    desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
                    if (desc.get) {
                        if (desc.set) {
                            str = ctx.stylize('[Getter/Setter]', 'special');
                        } else {
                            str = ctx.stylize('[Getter]', 'special');
                        }
                    } else {
                        if (desc.set) {
                            str = ctx.stylize('[Setter]', 'special');
                        }
                    }
                    if (!hasOwnProperty(visibleKeys, key)) {
                        name = '[' + key + ']';
                    }
                    if (!str) {
                        if (ctx.seen.indexOf(desc.value) < 0) {
                            if (isNull(recurseTimes)) {
                                str = formatValue(ctx, desc.value, null);
                            } else {
                                str = formatValue(ctx, desc.value, recurseTimes - 1);
                            }
                            if (str.indexOf('\n') > -1) {
                                if (array) {
                                    str = str.split('\n').map(function (line) {
                                        return '  ' + line;
                                    }).join('\n').substr(2);
                                } else {
                                    str = '\n' + str.split('\n').map(function (line) {
                                        return '   ' + line;
                                    }).join('\n');
                                }
                            }
                        } else {
                            str = ctx.stylize('[Circular]', 'special');
                        }
                    }
                    if (isUndefined(name)) {
                        if (array && key.match(/^\d+$/)) {
                            return str;
                        }
                        name = JSON.stringify('' + key);
                        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                            name = name.substr(1, name.length - 2);
                            name = ctx.stylize(name, 'name');
                        } else {
                            name = name.replace(/'/g, '\\\'').replace(/\\"/g, '"').replace(/(^"|"$)/g, '\'');
                            name = ctx.stylize(name, 'string');
                        }
                    }
                    return name + ': ' + str;
                }
                function reduceToSingleString(output, base, braces) {
                    var numLinesEst = 0;
                    var length = output.reduce(function (prev, cur) {
                        numLinesEst++;
                        if (cur.indexOf('\n') >= 0)
                            numLinesEst++;
                        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
                    }, 0);
                    if (length > 60) {
                        return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
                    }
                    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
                }
                function isArray(ar) {
                    return Array.isArray(ar);
                }
                exports.isArray = isArray;
                function isBoolean(arg) {
                    return typeof arg === 'boolean';
                }
                exports.isBoolean = isBoolean;
                function isNull(arg) {
                    return arg === null;
                }
                exports.isNull = isNull;
                function isNullOrUndefined(arg) {
                    return arg == null;
                }
                exports.isNullOrUndefined = isNullOrUndefined;
                function isNumber(arg) {
                    return typeof arg === 'number';
                }
                exports.isNumber = isNumber;
                function isString(arg) {
                    return typeof arg === 'string';
                }
                exports.isString = isString;
                function isSymbol(arg) {
                    return typeof arg === 'symbol';
                }
                exports.isSymbol = isSymbol;
                function isUndefined(arg) {
                    return arg === void 0;
                }
                exports.isUndefined = isUndefined;
                function isRegExp(re) {
                    return isObject(re) && objectToString(re) === '[object RegExp]';
                }
                exports.isRegExp = isRegExp;
                function isObject(arg) {
                    return typeof arg === 'object' && arg !== null;
                }
                exports.isObject = isObject;
                function isDate(d) {
                    return isObject(d) && objectToString(d) === '[object Date]';
                }
                exports.isDate = isDate;
                function isError(e) {
                    return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
                }
                exports.isError = isError;
                function isFunction(arg) {
                    return typeof arg === 'function';
                }
                exports.isFunction = isFunction;
                function isPrimitive(arg) {
                    return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
                }
                exports.isPrimitive = isPrimitive;
                exports.isBuffer = require('./support/isBuffer');
                function objectToString(o) {
                    return Object.prototype.toString.call(o);
                }
                function pad(n) {
                    return n < 10 ? '0' + n.toString(10) : n.toString(10);
                }
                var months = [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ];
                function timestamp() {
                    var d = new Date();
                    var time = [
                        pad(d.getHours()),
                        pad(d.getMinutes()),
                        pad(d.getSeconds())
                    ].join(':');
                    return [
                        d.getDate(),
                        months[d.getMonth()],
                        time
                    ].join(' ');
                }
                exports.log = function () {
                    console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
                };
                exports.inherits = require('inherits');
                exports._extend = function (origin, add) {
                    if (!add || !isObject(add))
                        return origin;
                    var keys = Object.keys(add);
                    var i = keys.length;
                    while (i--) {
                        origin[keys[i]] = add[keys[i]];
                    }
                    return origin;
                };
                function hasOwnProperty(obj, prop) {
                    return Object.prototype.hasOwnProperty.call(obj, prop);
                }
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/util/util.js', '/../node_modules/util'));
        },
        {
            './support/isBuffer': 30,
            '7YKIPe': 11,
            'buffer': 10,
            'inherits': 29
        }
    ],
    32: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                var trie = require('./trie');
                module.exports = Wayfarer;
                function Wayfarer(dft) {
                    if (!(this instanceof Wayfarer))
                        return new Wayfarer(dft);
                    var _default = (dft || '').replace(/^\//, '');
                    var _trie = trie();
                    emit._trie = _trie;
                    emit.emit = emit;
                    emit.on = on;
                    emit._wayfarer = true;
                    return emit;
                    function on(route, cb) {
                        route = route || '/';
                        cb.route = route;
                        if (cb && cb._wayfarer && cb._trie) {
                            _trie.mount(route, cb._trie.trie);
                        } else {
                            var node = _trie.create(route);
                            node.cb = cb;
                        }
                        return emit;
                    }
                    function emit(route) {
                        var args = new Array(arguments.length);
                        for (var i = 1; i < args.length; i++) {
                            args[i] = arguments[i];
                        }
                        var node = _trie.match(route);
                        if (node && node.cb) {
                            args[0] = node.params;
                            var cb = node.cb;
                            return cb.apply(cb, args);
                        }
                        var dft = _trie.match(_default);
                        if (dft && dft.cb) {
                            args[0] = dft.params;
                            var dftcb = dft.cb;
                            return dftcb.apply(dftcb, args);
                        }
                        throw new Error('route \'' + route + '\' did not match');
                    }
                }
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/wayfarer/index.js', '/../node_modules/wayfarer'));
        },
        {
            './trie': 33,
            '7YKIPe': 11,
            'assert': 8,
            'buffer': 10
        }
    ],
    33: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                var mutate = require('xtend/mutable');
                var xtend = require('xtend');
                module.exports = Trie;
                function Trie() {
                    if (!(this instanceof Trie))
                        return new Trie();
                    this.trie = { nodes: {} };
                }
                Trie.prototype.create = function (route) {
                    var routes = route.replace(/^\//, '').split('/');
                    function createNode(index, trie) {
                        var thisRoute = routes.hasOwnProperty(index) && routes[index];
                        if (thisRoute === false)
                            return trie;
                        var node = null;
                        if (/^:|^\*/.test(thisRoute)) {
                            if (!trie.nodes.hasOwnProperty('$$')) {
                                node = { nodes: {} };
                                trie.nodes['$$'] = node;
                            } else {
                                node = trie.nodes['$$'];
                            }
                            if (thisRoute[0] === '*') {
                                trie.wildcard = true;
                            }
                            trie.name = thisRoute.replace(/^:|^\*/, '');
                        } else if (!trie.nodes.hasOwnProperty(thisRoute)) {
                            node = { nodes: {} };
                            trie.nodes[thisRoute] = node;
                        } else {
                            node = trie.nodes[thisRoute];
                        }
                        return createNode(index + 1, node);
                    }
                    return createNode(0, this.trie);
                };
                Trie.prototype.match = function (route) {
                    var routes = route.replace(/^\//, '').split('/');
                    var params = {};
                    function search(index, trie) {
                        if (trie === undefined)
                            return undefined;
                        var thisRoute = routes[index];
                        if (thisRoute === undefined)
                            return trie;
                        if (trie.nodes.hasOwnProperty(thisRoute)) {
                            return search(index + 1, trie.nodes[thisRoute]);
                        } else if (trie.name) {
                            try {
                                params[trie.name] = decodeURIComponent(thisRoute);
                            } catch (e) {
                                return search(index, undefined);
                            }
                            return search(index + 1, trie.nodes['$$']);
                        } else if (trie.wildcard) {
                            try {
                                params['wildcard'] = decodeURIComponent(routes.slice(index).join('/'));
                            } catch (e) {
                                return search(index, undefined);
                            }
                            return trie.nodes['$$'];
                        } else {
                            return search(index + 1);
                        }
                    }
                    var node = search(0, this.trie);
                    if (!node)
                        return undefined;
                    node = xtend(node);
                    node.params = params;
                    return node;
                };
                Trie.prototype.mount = function (route, trie) {
                    var split = route.replace(/^\//, '').split('/');
                    var node = null;
                    var key = null;
                    if (split.length === 1) {
                        key = split[0];
                        node = this.create(key);
                    } else {
                        var headArr = split.splice(0, split.length - 1);
                        var head = headArr.join('/');
                        key = split[0];
                        node = this.create(head);
                    }
                    mutate(node.nodes, trie.nodes);
                    if (trie.name)
                        node.name = trie.name;
                    if (node.nodes['']) {
                        Object.keys(node.nodes['']).forEach(function (key) {
                            if (key === 'nodes')
                                return;
                            node[key] = node.nodes[''][key];
                        });
                        mutate(node.nodes, node.nodes[''].nodes);
                        delete node.nodes[''].nodes;
                    }
                };
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/wayfarer/trie.js', '/../node_modules/wayfarer'));
        },
        {
            '7YKIPe': 11,
            'assert': 8,
            'buffer': 10,
            'xtend': 34,
            'xtend/mutable': 35
        }
    ],
    34: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                module.exports = extend;
                var hasOwnProperty = Object.prototype.hasOwnProperty;
                function extend() {
                    var target = {};
                    for (var i = 0; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source) {
                            if (hasOwnProperty.call(source, key)) {
                                target[key] = source[key];
                            }
                        }
                    }
                    return target;
                }
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/xtend/immutable.js', '/../node_modules/xtend'));
        },
        {
            '7YKIPe': 11,
            'buffer': 10
        }
    ],
    35: [
        function (require, module, exports) {
            (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
                module.exports = extend;
                var hasOwnProperty = Object.prototype.hasOwnProperty;
                function extend(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source) {
                            if (hasOwnProperty.call(source, key)) {
                                target[key] = source[key];
                            }
                        }
                    }
                    return target;
                }
            }.call(this, require('7YKIPe'), typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}, require('buffer').Buffer, arguments[3], arguments[4], arguments[5], arguments[6], '/../node_modules/xtend/mutable.js', '/../node_modules/xtend'));
        },
        {
            '7YKIPe': 11,
            'buffer': 10
        }
    ]
}, {}, [1]));