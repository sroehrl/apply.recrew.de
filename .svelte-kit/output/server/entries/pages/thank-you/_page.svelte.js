import { c as compute_rest_props, a as compute_slots, s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, a as spread, b as escape_object, e as escape_attribute_value, d as add_attribute, v as validate_component, f as escape } from "../../../chunks/ssr.js";
import { b as Card, F as FacebookSolid, E as EnvelopeSolid, a as CopyToClipboard, S as ShareNodesSolid } from "../../../chunks/CopyToClipboard.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { twMerge } from "tailwind-merge";
import { p as page } from "../../../chunks/stores.js";
const Hr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["icon", "divClass", "hrClass", "iconDivClass", "textSpanClass", "innerDivClass"]);
  let $$slots = compute_slots(slots);
  let { icon = false } = $$props;
  let { divClass = "inline-flex items-center justify-center w-full" } = $$props;
  let { hrClass = "h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" } = $$props;
  let { iconDivClass = "absolute start-1/2 px-4 bg-white -translate-x-1/2 rtl:translate-x-1/2 " } = $$props;
  let { textSpanClass = "absolute px-3 font-medium text-gray-900 -translate-x-1/2 rtl:translate-x-1/2 bg-white start-1/2 dark:text-white dark:bg-gray-900 " } = $$props;
  let { innerDivClass = "absolute px-4 -translate-x-1/2 rtl:translate-x-1/2 bg-white start-1/2 dark:bg-gray-900" } = $$props;
  let horizontalCls = twMerge(hrClass, $$props.classHr);
  let divCls = twMerge(divClass, $$slots && "relative", $$props.classDiv);
  let innerDivCls = twMerge(innerDivClass, icon ? iconDivClass : textSpanClass, $$props.classInnerDiv);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.hrClass === void 0 && $$bindings.hrClass && hrClass !== void 0)
    $$bindings.hrClass(hrClass);
  if ($$props.iconDivClass === void 0 && $$bindings.iconDivClass && iconDivClass !== void 0)
    $$bindings.iconDivClass(iconDivClass);
  if ($$props.textSpanClass === void 0 && $$bindings.textSpanClass && textSpanClass !== void 0)
    $$bindings.textSpanClass(textSpanClass);
  if ($$props.innerDivClass === void 0 && $$bindings.innerDivClass && innerDivClass !== void 0)
    $$bindings.innerDivClass(innerDivClass);
  return `${$$slots.default ? `<div${spread([escape_object($$restProps), { class: escape_attribute_value(divCls) }], {})}><hr${add_attribute("class", horizontalCls, 0)}> <div${add_attribute("class", innerDivCls, 0)}>${slots.default ? slots.default({}) : ``}</div></div>` : `<hr${add_attribute("class", horizontalCls, 0)}>`} `;
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var qrcode = { exports: {} };
(function(module, exports) {
  (function(global2, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    var Constructor = (
      /* istanbul ignore next */
      function() {
      }
    );
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var slice = Array.prototype.slice;
    function createObject(prototype, properties) {
      var result;
      if (typeof Object.create === "function") {
        result = Object.create(prototype);
      } else {
        Constructor.prototype = prototype;
        result = new Constructor();
        Constructor.prototype = null;
      }
      if (properties) {
        extendObject(true, result, properties);
      }
      return result;
    }
    function extend(name, constructor, prototype, statics) {
      var superConstructor = this;
      if (typeof name !== "string") {
        statics = prototype;
        prototype = constructor;
        constructor = name;
        name = null;
      }
      if (typeof constructor !== "function") {
        statics = prototype;
        prototype = constructor;
        constructor = function() {
          return superConstructor.apply(this, arguments);
        };
      }
      extendObject(false, constructor, superConstructor, statics);
      constructor.prototype = createObject(superConstructor.prototype, prototype);
      constructor.prototype.constructor = constructor;
      constructor.class_ = name || superConstructor.class_;
      constructor.super_ = superConstructor;
      return constructor;
    }
    function extendObject(own, target, sources) {
      sources = slice.call(arguments, 2);
      var property;
      var source;
      for (var i = 0, length = sources.length; i < length; i++) {
        source = sources[i];
        for (property in source) {
          if (!own || hasOwnProperty.call(source, property)) {
            target[property] = source[property];
          }
        }
      }
    }
    var extend_1 = extend;
    function Nevis() {
    }
    Nevis.class_ = "Nevis";
    Nevis.super_ = Object;
    Nevis.extend = extend_1;
    var nevis = Nevis;
    var lite = nevis;
    var Renderer = lite.extend(function(qrious, element, enabled) {
      this.qrious = qrious;
      this.element = element;
      this.element.qrious = qrious;
      this.enabled = Boolean(enabled);
    }, {
      /**
       * Draws the specified QR code <code>frame</code> on the underlying element.
       *
       * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
       *
       * @param {Frame} frame - the {@link Frame} to be drawn
       * @return {void}
       * @protected
       * @abstract
       * @memberof Renderer#
       */
      draw: function(frame) {
      },
      /**
       * Returns the element onto which this {@link Renderer} is rendering the QR code.
       *
       * If this method is called while this {@link Renderer} is disabled, it will be immediately enabled and rendered
       * before the element is returned.
       *
       * @return {*} The element.
       * @public
       * @memberof Renderer#
       */
      getElement: function() {
        if (!this.enabled) {
          this.enabled = true;
          this.render();
        }
        return this.element;
      },
      /**
       * Calculates the size (in pixel units) to represent an individual module within the QR code based on the
       * <code>frame</code> provided.
       *
       * Any configured padding will be excluded from the returned size.
       *
       * The returned value will be at least one, even in cases where the size of the QR code does not fit its contents.
       * This is done so that the inevitable clipping is handled more gracefully since this way at least something is
       * displayed instead of just a blank space filled by the background color.
       *
       * @param {Frame} frame - the {@link Frame} from which the module size is to be derived
       * @return {number} The pixel size for each module in the QR code which will be no less than one.
       * @protected
       * @memberof Renderer#
       */
      getModuleSize: function(frame) {
        var qrious = this.qrious;
        var padding = qrious.padding || 0;
        var pixels = Math.floor((qrious.size - padding * 2) / frame.width);
        return Math.max(1, pixels);
      },
      /**
       * Renders a QR code on the underlying element based on the <code>frame</code> provided.
       *
       * @param {Frame} frame - the {@link Frame} to be rendered
       * @return {void}
       * @public
       * @memberof Renderer#
       */
      render: function(frame) {
        if (this.enabled) {
          this.resize();
          this.reset();
          this.draw(frame);
        }
      },
      /**
       * Resets the underlying element, effectively clearing any previously rendered QR code.
       *
       * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
       *
       * @return {void}
       * @protected
       * @abstract
       * @memberof Renderer#
       */
      reset: function() {
      },
      /**
       * Ensures that the size of the underlying element matches that defined on the associated {@link QRious} instance.
       *
       * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
       *
       * @return {void}
       * @protected
       * @abstract
       * @memberof Renderer#
       */
      resize: function() {
      }
    });
    var Renderer_1 = Renderer;
    var CanvasRenderer = Renderer_1.extend({
      /**
       * @override
       */
      draw: function(frame) {
        var i, j;
        var qrious = this.qrious;
        var moduleSize = this.getModuleSize(frame);
        var offset = parseInt((this.element.width - frame.width * moduleSize) / 2);
        var context = this.element.getContext("2d");
        context.fillStyle = qrious.foreground;
        context.globalAlpha = qrious.foregroundAlpha;
        for (i = 0; i < frame.width; i++) {
          for (j = 0; j < frame.width; j++) {
            if (frame.buffer[j * frame.width + i]) {
              context.fillRect(moduleSize * i + offset, moduleSize * j + offset, moduleSize, moduleSize);
            }
          }
        }
      },
      /**
       * @override
       */
      reset: function() {
        var qrious = this.qrious;
        var context = this.element.getContext("2d");
        var size = qrious.size;
        context.lineWidth = 1;
        context.clearRect(0, 0, size, size);
        context.fillStyle = qrious.background;
        context.globalAlpha = qrious.backgroundAlpha;
        context.fillRect(0, 0, size, size);
      },
      /**
       * @override
       */
      resize: function() {
        var element = this.element;
        element.width = element.height = this.qrious.size;
      }
    });
    var CanvasRenderer_1 = CanvasRenderer;
    var Alignment = lite.extend(null, {
      /**
       * The alignment pattern block.
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof Alignment
       */
      BLOCK: [
        0,
        11,
        15,
        19,
        23,
        27,
        31,
        16,
        18,
        20,
        22,
        24,
        26,
        28,
        20,
        22,
        24,
        24,
        26,
        28,
        28,
        22,
        24,
        24,
        26,
        26,
        28,
        28,
        24,
        24,
        26,
        26,
        26,
        28,
        28,
        24,
        26,
        26,
        26,
        28,
        28
      ]
    });
    var Alignment_1 = Alignment;
    var ErrorCorrection = lite.extend(null, {
      /**
       * The error correction blocks.
       *
       * There are four elements per version. The first two indicate the number of blocks, then the data width, and finally
       * the ECC width.
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof ErrorCorrection
       */
      BLOCKS: [
        1,
        0,
        19,
        7,
        1,
        0,
        16,
        10,
        1,
        0,
        13,
        13,
        1,
        0,
        9,
        17,
        1,
        0,
        34,
        10,
        1,
        0,
        28,
        16,
        1,
        0,
        22,
        22,
        1,
        0,
        16,
        28,
        1,
        0,
        55,
        15,
        1,
        0,
        44,
        26,
        2,
        0,
        17,
        18,
        2,
        0,
        13,
        22,
        1,
        0,
        80,
        20,
        2,
        0,
        32,
        18,
        2,
        0,
        24,
        26,
        4,
        0,
        9,
        16,
        1,
        0,
        108,
        26,
        2,
        0,
        43,
        24,
        2,
        2,
        15,
        18,
        2,
        2,
        11,
        22,
        2,
        0,
        68,
        18,
        4,
        0,
        27,
        16,
        4,
        0,
        19,
        24,
        4,
        0,
        15,
        28,
        2,
        0,
        78,
        20,
        4,
        0,
        31,
        18,
        2,
        4,
        14,
        18,
        4,
        1,
        13,
        26,
        2,
        0,
        97,
        24,
        2,
        2,
        38,
        22,
        4,
        2,
        18,
        22,
        4,
        2,
        14,
        26,
        2,
        0,
        116,
        30,
        3,
        2,
        36,
        22,
        4,
        4,
        16,
        20,
        4,
        4,
        12,
        24,
        2,
        2,
        68,
        18,
        4,
        1,
        43,
        26,
        6,
        2,
        19,
        24,
        6,
        2,
        15,
        28,
        4,
        0,
        81,
        20,
        1,
        4,
        50,
        30,
        4,
        4,
        22,
        28,
        3,
        8,
        12,
        24,
        2,
        2,
        92,
        24,
        6,
        2,
        36,
        22,
        4,
        6,
        20,
        26,
        7,
        4,
        14,
        28,
        4,
        0,
        107,
        26,
        8,
        1,
        37,
        22,
        8,
        4,
        20,
        24,
        12,
        4,
        11,
        22,
        3,
        1,
        115,
        30,
        4,
        5,
        40,
        24,
        11,
        5,
        16,
        20,
        11,
        5,
        12,
        24,
        5,
        1,
        87,
        22,
        5,
        5,
        41,
        24,
        5,
        7,
        24,
        30,
        11,
        7,
        12,
        24,
        5,
        1,
        98,
        24,
        7,
        3,
        45,
        28,
        15,
        2,
        19,
        24,
        3,
        13,
        15,
        30,
        1,
        5,
        107,
        28,
        10,
        1,
        46,
        28,
        1,
        15,
        22,
        28,
        2,
        17,
        14,
        28,
        5,
        1,
        120,
        30,
        9,
        4,
        43,
        26,
        17,
        1,
        22,
        28,
        2,
        19,
        14,
        28,
        3,
        4,
        113,
        28,
        3,
        11,
        44,
        26,
        17,
        4,
        21,
        26,
        9,
        16,
        13,
        26,
        3,
        5,
        107,
        28,
        3,
        13,
        41,
        26,
        15,
        5,
        24,
        30,
        15,
        10,
        15,
        28,
        4,
        4,
        116,
        28,
        17,
        0,
        42,
        26,
        17,
        6,
        22,
        28,
        19,
        6,
        16,
        30,
        2,
        7,
        111,
        28,
        17,
        0,
        46,
        28,
        7,
        16,
        24,
        30,
        34,
        0,
        13,
        24,
        4,
        5,
        121,
        30,
        4,
        14,
        47,
        28,
        11,
        14,
        24,
        30,
        16,
        14,
        15,
        30,
        6,
        4,
        117,
        30,
        6,
        14,
        45,
        28,
        11,
        16,
        24,
        30,
        30,
        2,
        16,
        30,
        8,
        4,
        106,
        26,
        8,
        13,
        47,
        28,
        7,
        22,
        24,
        30,
        22,
        13,
        15,
        30,
        10,
        2,
        114,
        28,
        19,
        4,
        46,
        28,
        28,
        6,
        22,
        28,
        33,
        4,
        16,
        30,
        8,
        4,
        122,
        30,
        22,
        3,
        45,
        28,
        8,
        26,
        23,
        30,
        12,
        28,
        15,
        30,
        3,
        10,
        117,
        30,
        3,
        23,
        45,
        28,
        4,
        31,
        24,
        30,
        11,
        31,
        15,
        30,
        7,
        7,
        116,
        30,
        21,
        7,
        45,
        28,
        1,
        37,
        23,
        30,
        19,
        26,
        15,
        30,
        5,
        10,
        115,
        30,
        19,
        10,
        47,
        28,
        15,
        25,
        24,
        30,
        23,
        25,
        15,
        30,
        13,
        3,
        115,
        30,
        2,
        29,
        46,
        28,
        42,
        1,
        24,
        30,
        23,
        28,
        15,
        30,
        17,
        0,
        115,
        30,
        10,
        23,
        46,
        28,
        10,
        35,
        24,
        30,
        19,
        35,
        15,
        30,
        17,
        1,
        115,
        30,
        14,
        21,
        46,
        28,
        29,
        19,
        24,
        30,
        11,
        46,
        15,
        30,
        13,
        6,
        115,
        30,
        14,
        23,
        46,
        28,
        44,
        7,
        24,
        30,
        59,
        1,
        16,
        30,
        12,
        7,
        121,
        30,
        12,
        26,
        47,
        28,
        39,
        14,
        24,
        30,
        22,
        41,
        15,
        30,
        6,
        14,
        121,
        30,
        6,
        34,
        47,
        28,
        46,
        10,
        24,
        30,
        2,
        64,
        15,
        30,
        17,
        4,
        122,
        30,
        29,
        14,
        46,
        28,
        49,
        10,
        24,
        30,
        24,
        46,
        15,
        30,
        4,
        18,
        122,
        30,
        13,
        32,
        46,
        28,
        48,
        14,
        24,
        30,
        42,
        32,
        15,
        30,
        20,
        4,
        117,
        30,
        40,
        7,
        47,
        28,
        43,
        22,
        24,
        30,
        10,
        67,
        15,
        30,
        19,
        6,
        118,
        30,
        18,
        31,
        47,
        28,
        34,
        34,
        24,
        30,
        20,
        61,
        15,
        30
      ],
      /**
       * The final format bits with mask (level << 3 | mask).
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof ErrorCorrection
       */
      FINAL_FORMAT: [
        // L
        30660,
        29427,
        32170,
        30877,
        26159,
        25368,
        27713,
        26998,
        // M
        21522,
        20773,
        24188,
        23371,
        17913,
        16590,
        20375,
        19104,
        // Q
        13663,
        12392,
        16177,
        14854,
        9396,
        8579,
        11994,
        11245,
        // H
        5769,
        5054,
        7399,
        6608,
        1890,
        597,
        3340,
        2107
      ],
      /**
       * A map of human-readable ECC levels.
       *
       * @public
       * @static
       * @type {Object.<string, number>}
       * @memberof ErrorCorrection
       */
      LEVELS: {
        L: 1,
        M: 2,
        Q: 3,
        H: 4
      }
    });
    var ErrorCorrection_1 = ErrorCorrection;
    var Galois = lite.extend(null, {
      /**
       * The Galois field exponent table.
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof Galois
       */
      EXPONENT: [
        1,
        2,
        4,
        8,
        16,
        32,
        64,
        128,
        29,
        58,
        116,
        232,
        205,
        135,
        19,
        38,
        76,
        152,
        45,
        90,
        180,
        117,
        234,
        201,
        143,
        3,
        6,
        12,
        24,
        48,
        96,
        192,
        157,
        39,
        78,
        156,
        37,
        74,
        148,
        53,
        106,
        212,
        181,
        119,
        238,
        193,
        159,
        35,
        70,
        140,
        5,
        10,
        20,
        40,
        80,
        160,
        93,
        186,
        105,
        210,
        185,
        111,
        222,
        161,
        95,
        190,
        97,
        194,
        153,
        47,
        94,
        188,
        101,
        202,
        137,
        15,
        30,
        60,
        120,
        240,
        253,
        231,
        211,
        187,
        107,
        214,
        177,
        127,
        254,
        225,
        223,
        163,
        91,
        182,
        113,
        226,
        217,
        175,
        67,
        134,
        17,
        34,
        68,
        136,
        13,
        26,
        52,
        104,
        208,
        189,
        103,
        206,
        129,
        31,
        62,
        124,
        248,
        237,
        199,
        147,
        59,
        118,
        236,
        197,
        151,
        51,
        102,
        204,
        133,
        23,
        46,
        92,
        184,
        109,
        218,
        169,
        79,
        158,
        33,
        66,
        132,
        21,
        42,
        84,
        168,
        77,
        154,
        41,
        82,
        164,
        85,
        170,
        73,
        146,
        57,
        114,
        228,
        213,
        183,
        115,
        230,
        209,
        191,
        99,
        198,
        145,
        63,
        126,
        252,
        229,
        215,
        179,
        123,
        246,
        241,
        255,
        227,
        219,
        171,
        75,
        150,
        49,
        98,
        196,
        149,
        55,
        110,
        220,
        165,
        87,
        174,
        65,
        130,
        25,
        50,
        100,
        200,
        141,
        7,
        14,
        28,
        56,
        112,
        224,
        221,
        167,
        83,
        166,
        81,
        162,
        89,
        178,
        121,
        242,
        249,
        239,
        195,
        155,
        43,
        86,
        172,
        69,
        138,
        9,
        18,
        36,
        72,
        144,
        61,
        122,
        244,
        245,
        247,
        243,
        251,
        235,
        203,
        139,
        11,
        22,
        44,
        88,
        176,
        125,
        250,
        233,
        207,
        131,
        27,
        54,
        108,
        216,
        173,
        71,
        142,
        0
      ],
      /**
       * The Galois field log table.
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof Galois
       */
      LOG: [
        255,
        0,
        1,
        25,
        2,
        50,
        26,
        198,
        3,
        223,
        51,
        238,
        27,
        104,
        199,
        75,
        4,
        100,
        224,
        14,
        52,
        141,
        239,
        129,
        28,
        193,
        105,
        248,
        200,
        8,
        76,
        113,
        5,
        138,
        101,
        47,
        225,
        36,
        15,
        33,
        53,
        147,
        142,
        218,
        240,
        18,
        130,
        69,
        29,
        181,
        194,
        125,
        106,
        39,
        249,
        185,
        201,
        154,
        9,
        120,
        77,
        228,
        114,
        166,
        6,
        191,
        139,
        98,
        102,
        221,
        48,
        253,
        226,
        152,
        37,
        179,
        16,
        145,
        34,
        136,
        54,
        208,
        148,
        206,
        143,
        150,
        219,
        189,
        241,
        210,
        19,
        92,
        131,
        56,
        70,
        64,
        30,
        66,
        182,
        163,
        195,
        72,
        126,
        110,
        107,
        58,
        40,
        84,
        250,
        133,
        186,
        61,
        202,
        94,
        155,
        159,
        10,
        21,
        121,
        43,
        78,
        212,
        229,
        172,
        115,
        243,
        167,
        87,
        7,
        112,
        192,
        247,
        140,
        128,
        99,
        13,
        103,
        74,
        222,
        237,
        49,
        197,
        254,
        24,
        227,
        165,
        153,
        119,
        38,
        184,
        180,
        124,
        17,
        68,
        146,
        217,
        35,
        32,
        137,
        46,
        55,
        63,
        209,
        91,
        149,
        188,
        207,
        205,
        144,
        135,
        151,
        178,
        220,
        252,
        190,
        97,
        242,
        86,
        211,
        171,
        20,
        42,
        93,
        158,
        132,
        60,
        57,
        83,
        71,
        109,
        65,
        162,
        31,
        45,
        67,
        216,
        183,
        123,
        164,
        118,
        196,
        23,
        73,
        236,
        127,
        12,
        111,
        246,
        108,
        161,
        59,
        82,
        41,
        157,
        85,
        170,
        251,
        96,
        134,
        177,
        187,
        204,
        62,
        90,
        203,
        89,
        95,
        176,
        156,
        169,
        160,
        81,
        11,
        245,
        22,
        235,
        122,
        117,
        44,
        215,
        79,
        174,
        213,
        233,
        230,
        231,
        173,
        232,
        116,
        214,
        244,
        234,
        168,
        80,
        88,
        175
      ]
    });
    var Galois_1 = Galois;
    var Version = lite.extend(null, {
      /**
       * The version pattern block.
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof Version
       */
      BLOCK: [
        3220,
        1468,
        2713,
        1235,
        3062,
        1890,
        2119,
        1549,
        2344,
        2936,
        1117,
        2583,
        1330,
        2470,
        1667,
        2249,
        2028,
        3780,
        481,
        4011,
        142,
        3098,
        831,
        3445,
        592,
        2517,
        1776,
        2234,
        1951,
        2827,
        1070,
        2660,
        1345,
        3177
      ]
    });
    var Version_1 = Version;
    var Frame = lite.extend(function(options) {
      var dataBlock, eccBlock, index2, neccBlock1, neccBlock2;
      var valueLength = options.value.length;
      this._badness = [];
      this._level = ErrorCorrection_1.LEVELS[options.level];
      this._polynomial = [];
      this._value = options.value;
      this._version = 0;
      this._stringBuffer = [];
      while (this._version < 40) {
        this._version++;
        index2 = (this._level - 1) * 4 + (this._version - 1) * 16;
        neccBlock1 = ErrorCorrection_1.BLOCKS[index2++];
        neccBlock2 = ErrorCorrection_1.BLOCKS[index2++];
        dataBlock = ErrorCorrection_1.BLOCKS[index2++];
        eccBlock = ErrorCorrection_1.BLOCKS[index2];
        index2 = dataBlock * (neccBlock1 + neccBlock2) + neccBlock2 - 3 + (this._version <= 9);
        if (valueLength <= index2) {
          break;
        }
      }
      this._dataBlock = dataBlock;
      this._eccBlock = eccBlock;
      this._neccBlock1 = neccBlock1;
      this._neccBlock2 = neccBlock2;
      var width = this.width = 17 + 4 * this._version;
      this.buffer = Frame._createArray(width * width);
      this._ecc = Frame._createArray(dataBlock + (dataBlock + eccBlock) * (neccBlock1 + neccBlock2) + neccBlock2);
      this._mask = Frame._createArray((width * (width + 1) + 1) / 2);
      this._insertFinders();
      this._insertAlignments();
      this.buffer[8 + width * (width - 8)] = 1;
      this._insertTimingGap();
      this._reverseMask();
      this._insertTimingRowAndColumn();
      this._insertVersion();
      this._syncMask();
      this._convertBitStream(valueLength);
      this._calculatePolynomial();
      this._appendEccToData();
      this._interleaveBlocks();
      this._pack();
      this._finish();
    }, {
      _addAlignment: function(x, y) {
        var i;
        var buffer = this.buffer;
        var width = this.width;
        buffer[x + width * y] = 1;
        for (i = -2; i < 2; i++) {
          buffer[x + i + width * (y - 2)] = 1;
          buffer[x - 2 + width * (y + i + 1)] = 1;
          buffer[x + 2 + width * (y + i)] = 1;
          buffer[x + i + 1 + width * (y + 2)] = 1;
        }
        for (i = 0; i < 2; i++) {
          this._setMask(x - 1, y + i);
          this._setMask(x + 1, y - i);
          this._setMask(x - i, y - 1);
          this._setMask(x + i, y + 1);
        }
      },
      _appendData: function(data, dataLength, ecc, eccLength) {
        var bit, i, j;
        var polynomial = this._polynomial;
        var stringBuffer = this._stringBuffer;
        for (i = 0; i < eccLength; i++) {
          stringBuffer[ecc + i] = 0;
        }
        for (i = 0; i < dataLength; i++) {
          bit = Galois_1.LOG[stringBuffer[data + i] ^ stringBuffer[ecc]];
          if (bit !== 255) {
            for (j = 1; j < eccLength; j++) {
              stringBuffer[ecc + j - 1] = stringBuffer[ecc + j] ^ Galois_1.EXPONENT[Frame._modN(bit + polynomial[eccLength - j])];
            }
          } else {
            for (j = ecc; j < ecc + eccLength; j++) {
              stringBuffer[j] = stringBuffer[j + 1];
            }
          }
          stringBuffer[ecc + eccLength - 1] = bit === 255 ? 0 : Galois_1.EXPONENT[Frame._modN(bit + polynomial[0])];
        }
      },
      _appendEccToData: function() {
        var i;
        var data = 0;
        var dataBlock = this._dataBlock;
        var ecc = this._calculateMaxLength();
        var eccBlock = this._eccBlock;
        for (i = 0; i < this._neccBlock1; i++) {
          this._appendData(data, dataBlock, ecc, eccBlock);
          data += dataBlock;
          ecc += eccBlock;
        }
        for (i = 0; i < this._neccBlock2; i++) {
          this._appendData(data, dataBlock + 1, ecc, eccBlock);
          data += dataBlock + 1;
          ecc += eccBlock;
        }
      },
      _applyMask: function(mask) {
        var r3x, r3y, x, y;
        var buffer = this.buffer;
        var width = this.width;
        switch (mask) {
          case 0:
            for (y = 0; y < width; y++) {
              for (x = 0; x < width; x++) {
                if (!(x + y & 1) && !this._isMasked(x, y)) {
                  buffer[x + y * width] ^= 1;
                }
              }
            }
            break;
          case 1:
            for (y = 0; y < width; y++) {
              for (x = 0; x < width; x++) {
                if (!(y & 1) && !this._isMasked(x, y)) {
                  buffer[x + y * width] ^= 1;
                }
              }
            }
            break;
          case 2:
            for (y = 0; y < width; y++) {
              for (r3x = 0, x = 0; x < width; x++, r3x++) {
                if (r3x === 3) {
                  r3x = 0;
                }
                if (!r3x && !this._isMasked(x, y)) {
                  buffer[x + y * width] ^= 1;
                }
              }
            }
            break;
          case 3:
            for (r3y = 0, y = 0; y < width; y++, r3y++) {
              if (r3y === 3) {
                r3y = 0;
              }
              for (r3x = r3y, x = 0; x < width; x++, r3x++) {
                if (r3x === 3) {
                  r3x = 0;
                }
                if (!r3x && !this._isMasked(x, y)) {
                  buffer[x + y * width] ^= 1;
                }
              }
            }
            break;
          case 4:
            for (y = 0; y < width; y++) {
              for (r3x = 0, r3y = y >> 1 & 1, x = 0; x < width; x++, r3x++) {
                if (r3x === 3) {
                  r3x = 0;
                  r3y = !r3y;
                }
                if (!r3y && !this._isMasked(x, y)) {
                  buffer[x + y * width] ^= 1;
                }
              }
            }
            break;
          case 5:
            for (r3y = 0, y = 0; y < width; y++, r3y++) {
              if (r3y === 3) {
                r3y = 0;
              }
              for (r3x = 0, x = 0; x < width; x++, r3x++) {
                if (r3x === 3) {
                  r3x = 0;
                }
                if (!((x & y & 1) + !(!r3x | !r3y)) && !this._isMasked(x, y)) {
                  buffer[x + y * width] ^= 1;
                }
              }
            }
            break;
          case 6:
            for (r3y = 0, y = 0; y < width; y++, r3y++) {
              if (r3y === 3) {
                r3y = 0;
              }
              for (r3x = 0, x = 0; x < width; x++, r3x++) {
                if (r3x === 3) {
                  r3x = 0;
                }
                if (!((x & y & 1) + (r3x && r3x === r3y) & 1) && !this._isMasked(x, y)) {
                  buffer[x + y * width] ^= 1;
                }
              }
            }
            break;
          case 7:
            for (r3y = 0, y = 0; y < width; y++, r3y++) {
              if (r3y === 3) {
                r3y = 0;
              }
              for (r3x = 0, x = 0; x < width; x++, r3x++) {
                if (r3x === 3) {
                  r3x = 0;
                }
                if (!((r3x && r3x === r3y) + (x + y & 1) & 1) && !this._isMasked(x, y)) {
                  buffer[x + y * width] ^= 1;
                }
              }
            }
            break;
        }
      },
      _calculateMaxLength: function() {
        return this._dataBlock * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2;
      },
      _calculatePolynomial: function() {
        var i, j;
        var eccBlock = this._eccBlock;
        var polynomial = this._polynomial;
        polynomial[0] = 1;
        for (i = 0; i < eccBlock; i++) {
          polynomial[i + 1] = 1;
          for (j = i; j > 0; j--) {
            polynomial[j] = polynomial[j] ? polynomial[j - 1] ^ Galois_1.EXPONENT[Frame._modN(Galois_1.LOG[polynomial[j]] + i)] : polynomial[j - 1];
          }
          polynomial[0] = Galois_1.EXPONENT[Frame._modN(Galois_1.LOG[polynomial[0]] + i)];
        }
        for (i = 0; i <= eccBlock; i++) {
          polynomial[i] = Galois_1.LOG[polynomial[i]];
        }
      },
      _checkBadness: function() {
        var b, b1, h, x, y;
        var bad = 0;
        var badness = this._badness;
        var buffer = this.buffer;
        var width = this.width;
        for (y = 0; y < width - 1; y++) {
          for (x = 0; x < width - 1; x++) {
            if (buffer[x + width * y] && buffer[x + 1 + width * y] && buffer[x + width * (y + 1)] && buffer[x + 1 + width * (y + 1)] || // All background colour.
            !(buffer[x + width * y] || buffer[x + 1 + width * y] || buffer[x + width * (y + 1)] || buffer[x + 1 + width * (y + 1)])) {
              bad += Frame.N2;
            }
          }
        }
        var bw = 0;
        for (y = 0; y < width; y++) {
          h = 0;
          badness[0] = 0;
          for (b = 0, x = 0; x < width; x++) {
            b1 = buffer[x + width * y];
            if (b === b1) {
              badness[h]++;
            } else {
              badness[++h] = 1;
            }
            b = b1;
            bw += b ? 1 : -1;
          }
          bad += this._getBadness(h);
        }
        if (bw < 0) {
          bw = -bw;
        }
        var count = 0;
        var big = bw;
        big += big << 2;
        big <<= 1;
        while (big > width * width) {
          big -= width * width;
          count++;
        }
        bad += count * Frame.N4;
        for (x = 0; x < width; x++) {
          h = 0;
          badness[0] = 0;
          for (b = 0, y = 0; y < width; y++) {
            b1 = buffer[x + width * y];
            if (b === b1) {
              badness[h]++;
            } else {
              badness[++h] = 1;
            }
            b = b1;
          }
          bad += this._getBadness(h);
        }
        return bad;
      },
      _convertBitStream: function(length) {
        var bit, i;
        var ecc = this._ecc;
        var version = this._version;
        for (i = 0; i < length; i++) {
          ecc[i] = this._value.charCodeAt(i);
        }
        var stringBuffer = this._stringBuffer = ecc.slice();
        var maxLength = this._calculateMaxLength();
        if (length >= maxLength - 2) {
          length = maxLength - 2;
          if (version > 9) {
            length--;
          }
        }
        var index2 = length;
        if (version > 9) {
          stringBuffer[index2 + 2] = 0;
          stringBuffer[index2 + 3] = 0;
          while (index2--) {
            bit = stringBuffer[index2];
            stringBuffer[index2 + 3] |= 255 & bit << 4;
            stringBuffer[index2 + 2] = bit >> 4;
          }
          stringBuffer[2] |= 255 & length << 4;
          stringBuffer[1] = length >> 4;
          stringBuffer[0] = 64 | length >> 12;
        } else {
          stringBuffer[index2 + 1] = 0;
          stringBuffer[index2 + 2] = 0;
          while (index2--) {
            bit = stringBuffer[index2];
            stringBuffer[index2 + 2] |= 255 & bit << 4;
            stringBuffer[index2 + 1] = bit >> 4;
          }
          stringBuffer[1] |= 255 & length << 4;
          stringBuffer[0] = 64 | length >> 4;
        }
        index2 = length + 3 - (version < 10);
        while (index2 < maxLength) {
          stringBuffer[index2++] = 236;
          stringBuffer[index2++] = 17;
        }
      },
      _getBadness: function(length) {
        var i;
        var badRuns = 0;
        var badness = this._badness;
        for (i = 0; i <= length; i++) {
          if (badness[i] >= 5) {
            badRuns += Frame.N1 + badness[i] - 5;
          }
        }
        for (i = 3; i < length - 1; i += 2) {
          if (badness[i - 2] === badness[i + 2] && badness[i + 2] === badness[i - 1] && badness[i - 1] === badness[i + 1] && badness[i - 1] * 3 === badness[i] && // Background around the foreground pattern? Not part of the specs.
          (badness[i - 3] === 0 || i + 3 > length || badness[i - 3] * 3 >= badness[i] * 4 || badness[i + 3] * 3 >= badness[i] * 4)) {
            badRuns += Frame.N3;
          }
        }
        return badRuns;
      },
      _finish: function() {
        this._stringBuffer = this.buffer.slice();
        var currentMask, i;
        var bit = 0;
        var mask = 3e4;
        for (i = 0; i < 8; i++) {
          this._applyMask(i);
          currentMask = this._checkBadness();
          if (currentMask < mask) {
            mask = currentMask;
            bit = i;
          }
          if (bit === 7) {
            break;
          }
          this.buffer = this._stringBuffer.slice();
        }
        if (bit !== i) {
          this._applyMask(bit);
        }
        mask = ErrorCorrection_1.FINAL_FORMAT[bit + (this._level - 1 << 3)];
        var buffer = this.buffer;
        var width = this.width;
        for (i = 0; i < 8; i++, mask >>= 1) {
          if (mask & 1) {
            buffer[width - 1 - i + width * 8] = 1;
            if (i < 6) {
              buffer[8 + width * i] = 1;
            } else {
              buffer[8 + width * (i + 1)] = 1;
            }
          }
        }
        for (i = 0; i < 7; i++, mask >>= 1) {
          if (mask & 1) {
            buffer[8 + width * (width - 7 + i)] = 1;
            if (i) {
              buffer[6 - i + width * 8] = 1;
            } else {
              buffer[7 + width * 8] = 1;
            }
          }
        }
      },
      _interleaveBlocks: function() {
        var i, j;
        var dataBlock = this._dataBlock;
        var ecc = this._ecc;
        var eccBlock = this._eccBlock;
        var k = 0;
        var maxLength = this._calculateMaxLength();
        var neccBlock1 = this._neccBlock1;
        var neccBlock2 = this._neccBlock2;
        var stringBuffer = this._stringBuffer;
        for (i = 0; i < dataBlock; i++) {
          for (j = 0; j < neccBlock1; j++) {
            ecc[k++] = stringBuffer[i + j * dataBlock];
          }
          for (j = 0; j < neccBlock2; j++) {
            ecc[k++] = stringBuffer[neccBlock1 * dataBlock + i + j * (dataBlock + 1)];
          }
        }
        for (j = 0; j < neccBlock2; j++) {
          ecc[k++] = stringBuffer[neccBlock1 * dataBlock + i + j * (dataBlock + 1)];
        }
        for (i = 0; i < eccBlock; i++) {
          for (j = 0; j < neccBlock1 + neccBlock2; j++) {
            ecc[k++] = stringBuffer[maxLength + i + j * eccBlock];
          }
        }
        this._stringBuffer = ecc;
      },
      _insertAlignments: function() {
        var i, x, y;
        var version = this._version;
        var width = this.width;
        if (version > 1) {
          i = Alignment_1.BLOCK[version];
          y = width - 7;
          for (; ; ) {
            x = width - 7;
            while (x > i - 3) {
              this._addAlignment(x, y);
              if (x < i) {
                break;
              }
              x -= i;
            }
            if (y <= i + 9) {
              break;
            }
            y -= i;
            this._addAlignment(6, y);
            this._addAlignment(y, 6);
          }
        }
      },
      _insertFinders: function() {
        var i, j, x, y;
        var buffer = this.buffer;
        var width = this.width;
        for (i = 0; i < 3; i++) {
          j = 0;
          y = 0;
          if (i === 1) {
            j = width - 7;
          }
          if (i === 2) {
            y = width - 7;
          }
          buffer[y + 3 + width * (j + 3)] = 1;
          for (x = 0; x < 6; x++) {
            buffer[y + x + width * j] = 1;
            buffer[y + width * (j + x + 1)] = 1;
            buffer[y + 6 + width * (j + x)] = 1;
            buffer[y + x + 1 + width * (j + 6)] = 1;
          }
          for (x = 1; x < 5; x++) {
            this._setMask(y + x, j + 1);
            this._setMask(y + 1, j + x + 1);
            this._setMask(y + 5, j + x);
            this._setMask(y + x + 1, j + 5);
          }
          for (x = 2; x < 4; x++) {
            buffer[y + x + width * (j + 2)] = 1;
            buffer[y + 2 + width * (j + x + 1)] = 1;
            buffer[y + 4 + width * (j + x)] = 1;
            buffer[y + x + 1 + width * (j + 4)] = 1;
          }
        }
      },
      _insertTimingGap: function() {
        var x, y;
        var width = this.width;
        for (y = 0; y < 7; y++) {
          this._setMask(7, y);
          this._setMask(width - 8, y);
          this._setMask(7, y + width - 7);
        }
        for (x = 0; x < 8; x++) {
          this._setMask(x, 7);
          this._setMask(x + width - 8, 7);
          this._setMask(x, width - 8);
        }
      },
      _insertTimingRowAndColumn: function() {
        var x;
        var buffer = this.buffer;
        var width = this.width;
        for (x = 0; x < width - 14; x++) {
          if (x & 1) {
            this._setMask(8 + x, 6);
            this._setMask(6, 8 + x);
          } else {
            buffer[8 + x + width * 6] = 1;
            buffer[6 + width * (8 + x)] = 1;
          }
        }
      },
      _insertVersion: function() {
        var i, j, x, y;
        var buffer = this.buffer;
        var version = this._version;
        var width = this.width;
        if (version > 6) {
          i = Version_1.BLOCK[version - 7];
          j = 17;
          for (x = 0; x < 6; x++) {
            for (y = 0; y < 3; y++, j--) {
              if (1 & (j > 11 ? version >> j - 12 : i >> j)) {
                buffer[5 - x + width * (2 - y + width - 11)] = 1;
                buffer[2 - y + width - 11 + width * (5 - x)] = 1;
              } else {
                this._setMask(5 - x, 2 - y + width - 11);
                this._setMask(2 - y + width - 11, 5 - x);
              }
            }
          }
        }
      },
      _isMasked: function(x, y) {
        var bit = Frame._getMaskBit(x, y);
        return this._mask[bit] === 1;
      },
      _pack: function() {
        var bit, i, j;
        var k = 1;
        var v = 1;
        var width = this.width;
        var x = width - 1;
        var y = width - 1;
        var length = (this._dataBlock + this._eccBlock) * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2;
        for (i = 0; i < length; i++) {
          bit = this._stringBuffer[i];
          for (j = 0; j < 8; j++, bit <<= 1) {
            if (128 & bit) {
              this.buffer[x + width * y] = 1;
            }
            do {
              if (v) {
                x--;
              } else {
                x++;
                if (k) {
                  if (y !== 0) {
                    y--;
                  } else {
                    x -= 2;
                    k = !k;
                    if (x === 6) {
                      x--;
                      y = 9;
                    }
                  }
                } else if (y !== width - 1) {
                  y++;
                } else {
                  x -= 2;
                  k = !k;
                  if (x === 6) {
                    x--;
                    y -= 8;
                  }
                }
              }
              v = !v;
            } while (this._isMasked(x, y));
          }
        }
      },
      _reverseMask: function() {
        var x, y;
        var width = this.width;
        for (x = 0; x < 9; x++) {
          this._setMask(x, 8);
        }
        for (x = 0; x < 8; x++) {
          this._setMask(x + width - 8, 8);
          this._setMask(8, x);
        }
        for (y = 0; y < 7; y++) {
          this._setMask(8, y + width - 7);
        }
      },
      _setMask: function(x, y) {
        var bit = Frame._getMaskBit(x, y);
        this._mask[bit] = 1;
      },
      _syncMask: function() {
        var x, y;
        var width = this.width;
        for (y = 0; y < width; y++) {
          for (x = 0; x <= y; x++) {
            if (this.buffer[x + width * y]) {
              this._setMask(x, y);
            }
          }
        }
      }
    }, {
      _createArray: function(length) {
        var i;
        var array = [];
        for (i = 0; i < length; i++) {
          array[i] = 0;
        }
        return array;
      },
      _getMaskBit: function(x, y) {
        var bit;
        if (x > y) {
          bit = x;
          x = y;
          y = bit;
        }
        bit = y;
        bit += y * y;
        bit >>= 1;
        bit += x;
        return bit;
      },
      _modN: function(x) {
        while (x >= 255) {
          x -= 255;
          x = (x >> 8) + (x & 255);
        }
        return x;
      },
      // *Badness* coefficients.
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    });
    var Frame_1 = Frame;
    var ImageRenderer = Renderer_1.extend({
      /**
       * @override
       */
      draw: function() {
        this.element.src = this.qrious.toDataURL();
      },
      /**
       * @override
       */
      reset: function() {
        this.element.src = "";
      },
      /**
       * @override
       */
      resize: function() {
        var element = this.element;
        element.width = element.height = this.qrious.size;
      }
    });
    var ImageRenderer_1 = ImageRenderer;
    var Option = lite.extend(function(name, modifiable, defaultValue, valueTransformer) {
      this.name = name;
      this.modifiable = Boolean(modifiable);
      this.defaultValue = defaultValue;
      this._valueTransformer = valueTransformer;
    }, {
      /**
       * Transforms the specified <code>value</code> so that it can be applied for this {@link Option}.
       *
       * If a value transformer has been specified for this {@link Option}, it will be called upon to transform
       * <code>value</code>. Otherwise, <code>value</code> will be returned directly.
       *
       * @param {*} value - the value to be transformed
       * @return {*} The transformed value or <code>value</code> if no value transformer is specified.
       * @public
       * @memberof Option#
       */
      transform: function(value) {
        var transformer = this._valueTransformer;
        if (typeof transformer === "function") {
          return transformer(value, this);
        }
        return value;
      }
    });
    var Option_1 = Option;
    var Utilities = lite.extend(null, {
      /**
       * Returns the absolute value of a given number.
       *
       * This method is simply a convenient shorthand for <code>Math.abs</code> while ensuring that nulls are returned as
       * <code>null</code> instead of zero.
       *
       * @param {number} value - the number whose absolute value is to be returned
       * @return {number} The absolute value of <code>value</code> or <code>null</code> if <code>value</code> is
       * <code>null</code>.
       * @public
       * @static
       * @memberof Utilities
       */
      abs: function(value) {
        return value != null ? Math.abs(value) : null;
      },
      /**
       * Returns whether the specified <code>object</code> has a property with the specified <code>name</code> as an own
       * (not inherited) property.
       *
       * @param {Object} object - the object on which the property is to be checked
       * @param {string} name - the name of the property to be checked
       * @return {boolean} <code>true</code> if <code>object</code> has an own property with <code>name</code>.
       * @public
       * @static
       * @memberof Utilities
       */
      hasOwn: function(object, name) {
        return Object.prototype.hasOwnProperty.call(object, name);
      },
      /**
       * A non-operation method that does absolutely nothing.
       *
       * @return {void}
       * @public
       * @static
       * @memberof Utilities
       */
      noop: function() {
      },
      /**
       * Transforms the specified <code>string</code> to upper case while remaining null-safe.
       *
       * @param {string} string - the string to be transformed to upper case
       * @return {string} <code>string</code> transformed to upper case if <code>string</code> is not <code>null</code>.
       * @public
       * @static
       * @memberof Utilities
       */
      toUpperCase: function(string) {
        return string != null ? string.toUpperCase() : null;
      }
    });
    var Utilities_1 = Utilities;
    var OptionManager = lite.extend(function(options) {
      this.options = {};
      options.forEach(function(option) {
        this.options[option.name] = option;
      }, this);
    }, {
      /**
       * Returns whether an option with the specified <code>name</code> is available.
       *
       * @param {string} name - the name of the {@link Option} whose existence is to be checked
       * @return {boolean} <code>true</code> if an {@link Option} exists with <code>name</code>; otherwise
       * <code>false</code>.
       * @public
       * @memberof OptionManager#
       */
      exists: function(name) {
        return this.options[name] != null;
      },
      /**
       * Returns the value of the option with the specified <code>name</code> on the <code>target</code> object provided.
       *
       * @param {string} name - the name of the {@link Option} whose value on <code>target</code> is to be returned
       * @param {Object} target - the object from which the value of the named {@link Option} is to be returned
       * @return {*} The value of the {@link Option} with <code>name</code> on <code>target</code>.
       * @public
       * @memberof OptionManager#
       */
      get: function(name, target) {
        return OptionManager._get(this.options[name], target);
      },
      /**
       * Returns a copy of all of the available options on the <code>target</code> object provided.
       *
       * @param {Object} target - the object from which the option name/value pairs are to be returned
       * @return {Object.<string, *>} A hash containing the name/value pairs of all options on <code>target</code>.
       * @public
       * @memberof OptionManager#
       */
      getAll: function(target) {
        var name;
        var options = this.options;
        var result = {};
        for (name in options) {
          if (Utilities_1.hasOwn(options, name)) {
            result[name] = OptionManager._get(options[name], target);
          }
        }
        return result;
      },
      /**
       * Initializes the available options for the <code>target</code> object provided and then applies the initial values
       * within the speciifed <code>options</code>.
       *
       * This method will throw an error if any of the names within <code>options</code> does not match an available option.
       *
       * This involves setting the default values and defining properties for all of the available options on
       * <code>target</code> before finally calling {@link OptionMananger#setAll} with <code>options</code> and
       * <code>target</code>. Any options that are configured to be modifiable will have a setter included in their defined
       * property that will allow its corresponding value to be modified.
       *
       * If a change handler is specified, it will be called whenever the value changes on <code>target</code> for a
       * modifiable option, but only when done so via the defined property's setter.
       *
       * @param {Object.<string, *>} options - the name/value pairs of the initial options to be set
       * @param {Object} target - the object on which the options are to be initialized
       * @param {Function} [changeHandler] - the function to be called whenever the value of an modifiable option changes on
       * <code>target</code>
       * @return {void}
       * @throws {Error} If <code>options</code> contains an invalid option name.
       * @public
       * @memberof OptionManager#
       */
      init: function(options, target, changeHandler) {
        if (typeof changeHandler !== "function") {
          changeHandler = Utilities_1.noop;
        }
        var name, option;
        for (name in this.options) {
          if (Utilities_1.hasOwn(this.options, name)) {
            option = this.options[name];
            OptionManager._set(option, option.defaultValue, target);
            OptionManager._createAccessor(option, target, changeHandler);
          }
        }
        this._setAll(options, target, true);
      },
      /**
       * Sets the value of the option with the specified <code>name</code> on the <code>target</code> object provided to
       * <code>value</code>.
       *
       * This method will throw an error if <code>name</code> does not match an available option or matches an option that
       * cannot be modified.
       *
       * If <code>value</code> is <code>null</code> and the {@link Option} has a default value configured, then that default
       * value will be used instead. If the {@link Option} also has a value transformer configured, it will be used to
       * transform whichever value was determined to be used.
       *
       * This method returns whether the value of the underlying field on <code>target</code> was changed as a result.
       *
       * @param {string} name - the name of the {@link Option} whose value is to be set
       * @param {*} value - the value to be set for the named {@link Option} on <code>target</code>
       * @param {Object} target - the object on which <code>value</code> is to be set for the named {@link Option}
       * @return {boolean} <code>true</code> if the underlying field on <code>target</code> was changed; otherwise
       * <code>false</code>.
       * @throws {Error} If <code>name</code> is invalid or is for an option that cannot be modified.
       * @public
       * @memberof OptionManager#
       */
      set: function(name, value, target) {
        return this._set(name, value, target);
      },
      /**
       * Sets all of the specified <code>options</code> on the <code>target</code> object provided to their corresponding
       * values.
       *
       * This method will throw an error if any of the names within <code>options</code> does not match an available option
       * or matches an option that cannot be modified.
       *
       * If any value within <code>options</code> is <code>null</code> and the corresponding {@link Option} has a default
       * value configured, then that default value will be used instead. If an {@link Option} also has a value transformer
       * configured, it will be used to transform whichever value was determined to be used.
       *
       * This method returns whether the value for any of the underlying fields on <code>target</code> were changed as a
       * result.
       *
       * @param {Object.<string, *>} options - the name/value pairs of options to be set
       * @param {Object} target - the object on which the options are to be set
       * @return {boolean} <code>true</code> if any of the underlying fields on <code>target</code> were changed; otherwise
       * <code>false</code>.
       * @throws {Error} If <code>options</code> contains an invalid option name or an option that cannot be modiifed.
       * @public
       * @memberof OptionManager#
       */
      setAll: function(options, target) {
        return this._setAll(options, target);
      },
      _set: function(name, value, target, allowUnmodifiable) {
        var option = this.options[name];
        if (!option) {
          throw new Error("Invalid option: " + name);
        }
        if (!option.modifiable && !allowUnmodifiable) {
          throw new Error("Option cannot be modified: " + name);
        }
        return OptionManager._set(option, value, target);
      },
      _setAll: function(options, target, allowUnmodifiable) {
        if (!options) {
          return false;
        }
        var name;
        var changed = false;
        for (name in options) {
          if (Utilities_1.hasOwn(options, name) && this._set(name, options[name], target, allowUnmodifiable)) {
            changed = true;
          }
        }
        return changed;
      }
    }, {
      _createAccessor: function(option, target, changeHandler) {
        var descriptor = {
          get: function() {
            return OptionManager._get(option, target);
          }
        };
        if (option.modifiable) {
          descriptor.set = function(value) {
            if (OptionManager._set(option, value, target)) {
              changeHandler(value, option);
            }
          };
        }
        Object.defineProperty(target, option.name, descriptor);
      },
      _get: function(option, target) {
        return target["_" + option.name];
      },
      _set: function(option, value, target) {
        var fieldName = "_" + option.name;
        var oldValue = target[fieldName];
        var newValue = option.transform(value != null ? value : option.defaultValue);
        target[fieldName] = newValue;
        return newValue !== oldValue;
      }
    });
    var OptionManager_1 = OptionManager;
    var ServiceManager = lite.extend(function() {
      this._services = {};
    }, {
      /**
       * Returns the {@link Service} being managed with the specified <code>name</code>.
       *
       * @param {string} name - the name of the {@link Service} to be returned
       * @return {Service} The {@link Service} is being managed with <code>name</code>.
       * @throws {Error} If no {@link Service} is being managed with <code>name</code>.
       * @public
       * @memberof ServiceManager#
       */
      getService: function(name) {
        var service = this._services[name];
        if (!service) {
          throw new Error("Service is not being managed with name: " + name);
        }
        return service;
      },
      /**
       * Sets the {@link Service} implementation to be managed for the specified <code>name</code> to the
       * <code>service</code> provided.
       *
       * @param {string} name - the name of the {@link Service} to be managed with <code>name</code>
       * @param {Service} service - the {@link Service} implementation to be managed
       * @return {void}
       * @throws {Error} If a {@link Service} is already being managed with the same <code>name</code>.
       * @public
       * @memberof ServiceManager#
       */
      setService: function(name, service) {
        if (this._services[name]) {
          throw new Error("Service is already managed with name: " + name);
        }
        if (service) {
          this._services[name] = service;
        }
      }
    });
    var ServiceManager_1 = ServiceManager;
    var optionManager = new OptionManager_1([
      new Option_1("background", true, "white"),
      new Option_1("backgroundAlpha", true, 1, Utilities_1.abs),
      new Option_1("element"),
      new Option_1("foreground", true, "black"),
      new Option_1("foregroundAlpha", true, 1, Utilities_1.abs),
      new Option_1("level", true, "L", Utilities_1.toUpperCase),
      new Option_1("mime", true, "image/png"),
      new Option_1("padding", true, null, Utilities_1.abs),
      new Option_1("size", true, 100, Utilities_1.abs),
      new Option_1("value", true, "")
    ]);
    var serviceManager = new ServiceManager_1();
    var QRious = lite.extend(function(options) {
      optionManager.init(options, this, this.update.bind(this));
      var element = optionManager.get("element", this);
      var elementService = serviceManager.getService("element");
      var canvas = element && elementService.isCanvas(element) ? element : elementService.createCanvas();
      var image = element && elementService.isImage(element) ? element : elementService.createImage();
      this._canvasRenderer = new CanvasRenderer_1(this, canvas, true);
      this._imageRenderer = new ImageRenderer_1(this, image, image === element);
      this.update();
    }, {
      /**
       * Returns all of the options configured for this {@link QRious}.
       *
       * Any changes made to the returned object will not be reflected in the options themselves or their corresponding
       * underlying fields.
       *
       * @return {Object.<string, *>} A copy of the applied options.
       * @public
       * @memberof QRious#
       */
      get: function() {
        return optionManager.getAll(this);
      },
      /**
       * Sets all of the specified <code>options</code> and automatically updates this {@link QRious} if any of the
       * underlying fields are changed as a result.
       *
       * This is the preferred method for updating multiple options at one time to avoid unnecessary updates between
       * changes.
       *
       * @param {QRious~Options} options - the options to be set
       * @return {void}
       * @throws {Error} If any <code>options</code> are invalid or cannot be modified.
       * @public
       * @memberof QRious#
       */
      set: function(options) {
        if (optionManager.setAll(options, this)) {
          this.update();
        }
      },
      /**
       * Returns the image data URI for the generated QR code using the <code>mime</code> provided.
       *
       * @param {string} [mime] - the MIME type for the image
       * @return {string} The image data URI for the QR code.
       * @public
       * @memberof QRious#
       */
      toDataURL: function(mime) {
        return this.canvas.toDataURL(mime || this.mime);
      },
      /**
       * Updates this {@link QRious} by generating a new {@link Frame} and re-rendering the QR code.
       *
       * @return {void}
       * @protected
       * @memberof QRious#
       */
      update: function() {
        var frame = new Frame_1({
          level: this.level,
          value: this.value
        });
        this._canvasRenderer.render(frame);
        this._imageRenderer.render(frame);
      }
    }, {
      /**
       * Configures the <code>service</code> provided to be used by all {@link QRious} instances.
       *
       * @param {Service} service - the {@link Service} to be configured
       * @return {void}
       * @throws {Error} If a {@link Service} has already been configured with the same name.
       * @public
       * @static
       * @memberof QRious
       */
      use: function(service) {
        serviceManager.setService(service.getName(), service);
      }
    });
    Object.defineProperties(QRious.prototype, {
      canvas: {
        /**
         * Returns the <code>canvas</code> element being used to render the QR code for this {@link QRious}.
         *
         * @return {*} The <code>canvas</code> element.
         * @public
         * @memberof QRious#
         * @alias canvas
         */
        get: function() {
          return this._canvasRenderer.getElement();
        }
      },
      image: {
        /**
         * Returns the <code>img</code> element being used to render the QR code for this {@link QRious}.
         *
         * @return {*} The <code>img</code> element.
         * @public
         * @memberof QRious#
         * @alias image
         */
        get: function() {
          return this._imageRenderer.getElement();
        }
      }
    });
    var QRious_1$2 = QRious;
    var index = QRious_1$2;
    var Service = lite.extend({
      /**
       * Returns the name of this {@link Service}.
       *
       * @return {string} The service name.
       * @public
       * @abstract
       * @memberof Service#
       */
      getName: function() {
      }
    });
    var Service_1 = Service;
    var ElementService = Service_1.extend({
      /**
       * Creates an instance of a canvas element.
       *
       * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
       *
       * @return {*} The newly created canvas element.
       * @public
       * @abstract
       * @memberof ElementService#
       */
      createCanvas: function() {
      },
      /**
       * Creates an instance of a image element.
       *
       * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
       *
       * @return {*} The newly created image element.
       * @public
       * @abstract
       * @memberof ElementService#
       */
      createImage: function() {
      },
      /**
       * @override
       */
      getName: function() {
        return "element";
      },
      /**
       * Returns whether the specified <code>element</code> is a canvas.
       *
       * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
       *
       * @param {*} element - the element to be checked
       * @return {boolean} <code>true</code> if <code>element</code> is a canvas; otherwise <code>false</code>.
       * @public
       * @abstract
       * @memberof ElementService#
       */
      isCanvas: function(element) {
      },
      /**
       * Returns whether the specified <code>element</code> is an image.
       *
       * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
       *
       * @param {*} element - the element to be checked
       * @return {boolean} <code>true</code> if <code>element</code> is an image; otherwise <code>false</code>.
       * @public
       * @abstract
       * @memberof ElementService#
       */
      isImage: function(element) {
      }
    });
    var ElementService_1 = ElementService;
    var BrowserElementService = ElementService_1.extend({
      /**
       * @override
       */
      createCanvas: function() {
        return document.createElement("canvas");
      },
      /**
       * @override
       */
      createImage: function() {
        return document.createElement("img");
      },
      /**
       * @override
       */
      isCanvas: function(element) {
        return element instanceof HTMLCanvasElement;
      },
      /**
       * @override
       */
      isImage: function(element) {
        return element instanceof HTMLImageElement;
      }
    });
    var BrowserElementService_1 = BrowserElementService;
    index.use(new BrowserElementService_1());
    var QRious_1 = index;
    return QRious_1;
  });
})(qrcode);
var qrcodeExports = qrcode.exports;
const QrCode = /* @__PURE__ */ getDefaultExportFromCjs(qrcodeExports);
const Lib = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const QRcode = new QrCode();
  let { errorCorrection = "L" } = $$props;
  let { background = "#fff" } = $$props;
  let { color = "#000" } = $$props;
  let { size = "200" } = $$props;
  let { value = "" } = $$props;
  let { padding = 0 } = $$props;
  let { className = "qrcode" } = $$props;
  let image = "";
  function generateQrCode() {
    QRcode.set({
      background,
      foreground: color,
      level: errorCorrection,
      padding,
      size,
      value
    });
    image = QRcode.toDataURL("image/jpeg");
  }
  if ($$props.errorCorrection === void 0 && $$bindings.errorCorrection && errorCorrection !== void 0)
    $$bindings.errorCorrection(errorCorrection);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  {
    {
      if (value) {
        generateQrCode();
      }
    }
  }
  return `<img${add_attribute("src", image, 0)}${add_attribute("alt", value, 0)}${add_attribute("class", className, 0)}>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let link = "https://apply.recrew.de";
  $$unsubscribe_page();
  return `<div class="flex items-center justify-center my-10">${validate_component(Card, "Card").$$render($$result, { href: "/cards" }, {}, {
    default: () => {
      return `<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" data-svelte-h="svelte-100nt1u">Danke!</h5> <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight" data-svelte-h="svelte-9wxh4p">Deine Anfrage wurde gesendet. Wir melden uns!</p>`;
    }
  })}</div> ${validate_component(Hr, "Hr").$$render($$result, {}, {}, {})} <div class="w-4/5 mx-auto dark:text-white mb-12">${validate_component(Heading, "Heading").$$render($$result, { class: "mt-3 text-center", tag: "h5" }, {}, {
    default: () => {
      return `Lust mit deinen Freunden zu arbeiten?`;
    }
  })} <p class="text-center mb-3" data-svelte-h="svelte-hnzpyw">Schnellbewerbung teilen:</p> <div class="flex gap-8 justify-center"><a href="https://www.instagram.com/recrewjobs/" class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900" data-svelte-h="svelte-1krd3e"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a78.831 78.831 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465a72.11 72.11 0 0 1-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78.43 78.43 0 0 1-2.189-.023l-.194-.006a63.036 63.036 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.889 4.889 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428a74.1 74.1 0 0 1-.03-.712l-.005-.194A79.047 79.047 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.678a4.897 4.897 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></path></svg></a> <a href="${"https://www.facebook.com/sharer/sharer.php?u=" + escape(link, true)}" class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">${validate_component(FacebookSolid, "FacebookSolid").$$render($$result, { class: "w-6 h-6 inline" }, {}, {})}</a> <a href="${"mailto:?subject=Arbeite%20mit%20mir%20bei%20Recrew&body=Bewerbung:%20" + escape(link, true)}" class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">${validate_component(EnvelopeSolid, "EnvelopeSolid").$$render($$result, { class: "w-6 h-6 inline" }, {}, {})}</a> ${validate_component(CopyToClipboard, "CopyToClipboard").$$render($$result, { textToCopy: link }, {}, {
    default: () => {
      return `<div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">${validate_component(ShareNodesSolid, "ShareNodesSolid").$$render($$result, {}, {}, {})}</div>`;
    }
  })}</div> <div class="grid place-items-center">${`<h3 class="leading-4 text-xl mb-3" data-svelte-h="svelte-kpjgjt">Allgemeiner QR-Code</h3> ${validate_component(Lib, "QrCode").$$render($$result, { value: link, class: "mt-3 " }, {}, {})} ${$page.url.searchParams.get("ref") ? `<p class="mt-3" data-svelte-h="svelte-1lj6kdo">Erstelle persönlichen Empfehlungscode ...</p>` : ``}`}</div></div>`;
});
export {
  Page as default
};
