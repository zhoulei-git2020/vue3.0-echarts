(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
    typeof define === 'function' && define.amd ? define(['vue'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Datav = factory(global.Vue));
}(this, (function (vue) { 'use strict';

    vue.pushScopeId("data-v-07bdddea");

    vue.popScopeId();

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css_248z = ".test[data-v-07bdddea] {\n  color: red;\n}";
    styleInject(css_248z);

    /* eslint-disable */

    var script = {
      name: 'SvgAnimation'
    };

    var _withId = /*#__PURE__*/vue.withScopeId("data-v-5a151e4f");

    vue.pushScopeId("data-v-5a151e4f");

    var _hoisted_1 = /*#__PURE__*/vue.createVNode("div", {
      "class": "container"
    }, [/*#__PURE__*/vue.createVNode("svg", {
      width: "500",
      height: "200",
      viewBox: "0 0 500 200"
    }, [/*#__PURE__*/vue.createCommentVNode(" x起始点0 y起始点0 宽100px 高50px fill=填充色红色  transform=向x轴右偏移10px向下偏移10 rotate(30)顺时针旋转30度"), /*#__PURE__*/vue.createVNode("rect", {
      x: "0",
      y: "0",
      width: "100",
      height: "50",
      fill: "red",
      transform: "translate(10, 10) rotate(30)"
    })])], -1
    /* HOISTED */
    );

    vue.popScopeId();

    var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
      return vue.openBlock(), vue.createBlock("div", null, [_hoisted_1]);
    });

    var css_248z$1 = ".container[data-v-5a151e4f] svg {\n  border: 1px solid;\n}";
    styleInject(css_248z$1);

    script.render = render;
    script.__scopeId = "data-v-5a151e4f";
    script.__file = "src/components/SvgAnimation/SvgAnimation.vue";

    function SvgAnimation (Vue) {
      Vue.component(script.name, script);
    }

    function index (Vue) {
      Vue.use(SvgAnimation);
    }

    return index;

})));
