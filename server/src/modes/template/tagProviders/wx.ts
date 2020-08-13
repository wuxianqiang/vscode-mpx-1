export default [
  {
    desc: ["视图容器。"],
    attrs: [
      {
        name: "hover-class",
        type: {
          name: "string"
        },
        desc: [
          '指定按下去的样式类。当 `hover-class="none"` 时，没有点击态效果'
        ],
        defaultValue: "none"
      },
      {
        name: "hover-stop-propagation",
        type: {
          name: "boolean"
        },
        desc: ["指定是否阻止本节点的祖先节点出现点击态"],
        since: "1.5.0",
        defaultValue: "false"
      },
      {
        name: "hover-start-time",
        type: {
          name: "number"
        },
        desc: ["按住后多久出现点击态，单位毫秒"],
        defaultValue: "50"
      },
      {
        name: "hover-stay-time",
        type: {
          name: "number"
        },
        desc: ["手指松开后点击态保留时间，单位毫秒"],
        defaultValue: "400"
      }
    ],
    tips: [
      "如果需要使用滚动视图，请使用 [scroll-view](https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html)"
    ],
    demoImages: [
      "https://developers.weixin.qq.com/miniprogram/dev/image/pic/view.png"
    ],
    name: "view",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/view.html"
  },
  {
    desc: [
      "可滚动视图区域。\n\n使用竖向滚动时，需要给`<scroll-view/>`一个固定高度，通过 WXSS 设置 height。"
    ],
    attrs: [
      {
        name: "scroll-x",
        type: {
          name: "boolean"
        },
        desc: ["允许横向滚动"],
        defaultValue: "false"
      },
      {
        name: "scroll-y",
        type: {
          name: "boolean"
        },
        desc: ["允许纵向滚动"],
        defaultValue: "false"
      },
      {
        name: "upper-threshold",
        type: {
          name: "number"
        },
        desc: ["距顶部/左边多远时（单位px），触发 scrolltoupper 事件"],
        defaultValue: "50"
      },
      {
        name: "lower-threshold",
        type: {
          name: "number"
        },
        desc: ["距底部/右边多远时（单位px），触发 scrolltolower 事件"],
        defaultValue: "50"
      },
      {
        name: "scroll-top",
        type: {
          name: "number"
        },
        desc: ["设置竖向滚动条位置"]
      },
      {
        name: "scroll-left",
        type: {
          name: "number"
        },
        desc: ["设置横向滚动条位置"]
      },
      {
        name: "scroll-into-view",
        type: {
          name: "string"
        },
        desc: [
          "值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素"
        ]
      },
      {
        name: "scroll-with-animation",
        type: {
          name: "boolean"
        },
        desc: ["在设置滚动条位置时使用动画过渡"],
        defaultValue: "false"
      },
      {
        name: "enable-back-to-top",
        type: {
          name: "boolean"
        },
        desc: [
          "iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向"
        ],
        defaultValue: "false"
      },
      {
        name: "bindscrolltoupper",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["滚动到顶部/左边，会触发 scrolltoupper 事件"]
      },
      {
        name: "bindscrolltolower",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["滚动到底部/右边，会触发 scrolltolower 事件"]
      },
      {
        name: "bindscroll",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}"
        ]
      }
    ],
    tips: [
      "请勿在 `scroll-view` 中使用 `textarea`、`map`、`canvas`、`video` 组件",
      "`scroll-into-view` 的优先级高于 `scroll-top`",
      "在滚动 `scroll-view` 时会阻止页面回弹，所以在 `scroll-view` 中滚动，是无法触发 `onPullDownRefresh`",
      "若要使用下拉刷新，请使用页面的滚动，而不是 `scroll-view` ，这样也能通过点击顶部状态栏回到页面顶部"
    ],
    demoImages: [
      "https://developers.weixin.qq.com/miniprogram/dev/image/pic/scroll-view.png"
    ],
    name: "scroll-view",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
  },
  {
    desc: [
      '滑块视图容器。\n\n从 [1.4.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html "基础库 1.4.0 开始支持，低版本需做兼容处理。") 开始，`change`事件返回`detail`中包含一个`source`字段，表示导致变更的原因，可能值如下：\n\n*   `autoplay` 自动播放导致swiper变化；\n*   `touch` 用户划动引起swiper变化；\n*   其他原因将用空字符串表示。'
    ],
    attrs: [
      {
        name: "indicator-dots",
        type: {
          name: "boolean"
        },
        desc: ["是否显示面板指示点"],
        defaultValue: "false"
      },
      {
        name: "indicator-color",
        type: {
          name: "string"
        },
        desc: ["指示点颜色"],
        since: "1.1.0",
        defaultValue: "rgba(0, 0, 0, .3)"
      },
      {
        name: "indicator-active-color",
        type: {
          name: "string"
        },
        desc: ["当前选中的指示点颜色"],
        since: "1.1.0",
        defaultValue: "#000000"
      },
      {
        name: "autoplay",
        type: {
          name: "boolean"
        },
        desc: ["是否自动切换"],
        defaultValue: "false"
      },
      {
        name: "current",
        type: {
          name: "number"
        },
        desc: ["当前所在滑块的 index"],
        defaultValue: "0"
      },
      {
        name: "current-item-id",
        type: {
          name: "string"
        },
        desc: ["当前所在滑块的 item-id ，不能与 current 被同时指定"],
        since: "1.9.0"
      },
      {
        name: "interval",
        type: {
          name: "number"
        },
        desc: ["自动切换时间间隔"],
        defaultValue: "5000"
      },
      {
        name: "duration",
        type: {
          name: "number"
        },
        desc: ["滑动动画时长"],
        defaultValue: "500"
      },
      {
        name: "circular",
        type: {
          name: "boolean"
        },
        desc: ["是否采用衔接滑动"],
        defaultValue: "false"
      },
      {
        name: "vertical",
        type: {
          name: "boolean"
        },
        desc: ["滑动方向是否为纵向"],
        defaultValue: "false"
      },
      {
        name: "previous-margin",
        type: {
          name: "string"
        },
        desc: ["前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值"],
        since: "1.9.0",
        defaultValue: "0px"
      },
      {
        name: "next-margin",
        type: {
          name: "string"
        },
        desc: ["后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值"],
        since: "1.9.0",
        defaultValue: "0px"
      },
      {
        name: "display-multiple-items",
        type: {
          name: "number"
        },
        desc: ["同时显示的滑块数量"],
        since: "1.9.0",
        defaultValue: "1"
      },
      {
        name: "skip-hidden-item-layout",
        type: {
          name: "boolean"
        },
        desc: [
          "是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息"
        ],
        since: "1.9.0",
        defaultValue: "false"
      },
      {
        name: "bindchange",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "current 改变时会触发 change 事件，event.detail = {current: current, source: source}"
        ]
      },
      {
        name: "bindanimationfinish",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["动画结束时会触发 animationfinish 事件，event.detail 同上"],
        since: "1.9.0"
      }
    ],
    notices: ["其中只可放置`<swiper-item/>`组件，否则会导致未定义的行为。"],
    name: "swiper",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
  },
  {
    desc: ["仅可放置在`<swiper/>`组件中，宽高自动设置为100%。"],
    attrs: [
      {
        name: "item-id",
        type: {
          name: "string"
        },
        desc: ["该 swiper-item 的标识符"],
        since: "1.9.0"
      }
    ],
    tips: [
      "如果在 `bindchange` 的事件回调函数中使用 `setData` 改变 `current` 值，则有可能导致 `setData` 被不停地调用，因而通常情况下请在改变 `current` 值前检测 `source` 字段来判断是否是由于用户触摸引起。"
    ],
    name: "swiper-item",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
  },
  {
    desc: ["`movable-view` 的可移动区域"],
    attrs: [
      {
        name: "scale-area",
        type: {
          name: "boolean"
        },
        desc: [
          "当里面的movable-view设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个movable-area"
        ],
        since: "1.9.90",
        defaultValue: "false"
      }
    ],
    notices: ["movable-area 必须设置width和height属性，不设置默认为10px"],
    name: "movable-area",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html",
    since: "1.2.0"
  },
  {
    desc: ["可移动的视图容器，在页面中可以拖拽滑动"],
    attrs: [
      {
        name: "direction",
        type: {
          name: "string"
        },
        desc: [
          "movable-view的移动方向，属性值有all、vertical、horizontal、none"
        ],
        defaultValue: "none"
      },
      {
        name: "inertia",
        type: {
          name: "boolean"
        },
        desc: ["movable-view是否带有惯性"],
        defaultValue: "false"
      },
      {
        name: "out-of-bounds",
        type: {
          name: "boolean"
        },
        desc: ["超过可移动区域后，movable-view是否还可以移动"],
        defaultValue: "false"
      },
      {
        name: "x",
        type: {
          name: "number | string"
        },
        desc: [
          "定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画"
        ]
      },
      {
        name: "y",
        type: {
          name: "number | string"
        },
        desc: [
          "定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画"
        ]
      },
      {
        name: "damping",
        type: {
          name: "number"
        },
        desc: [
          "阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快"
        ],
        defaultValue: "20"
      },
      {
        name: "friction",
        type: {
          name: "number"
        },
        desc: [
          "摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值"
        ],
        defaultValue: "2"
      },
      {
        name: "disabled",
        type: {
          name: "boolean"
        },
        desc: ["是否禁用"],
        since: "1.9.90",
        defaultValue: "false"
      },
      {
        name: "scale",
        type: {
          name: "boolean"
        },
        desc: ["是否支持双指缩放，默认缩放手势生效区域是在movable-view内"],
        since: "1.9.90",
        defaultValue: "false"
      },
      {
        name: "scale-min",
        type: {
          name: "number"
        },
        desc: ["定义缩放倍数最小值"],
        since: "1.9.90",
        defaultValue: "0.5"
      },
      {
        name: "scale-max",
        type: {
          name: "number"
        },
        desc: ["定义缩放倍数最大值"],
        since: "1.9.90",
        defaultValue: "10"
      },
      {
        name: "scale-value",
        type: {
          name: "number"
        },
        desc: ["定义缩放倍数，取值范围为 0.5 - 10"],
        since: "1.9.90",
        defaultValue: "1"
      },
      {
        name: "animation",
        type: {
          name: "boolean"
        },
        desc: ["是否使用动画"],
        since: "2.1.0",
        defaultValue: "true"
      },
      {
        name: "bindchange",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "拖动过程中触发的事件，event.detail = {x: x, y: y, source: source}，其中source表示产生移动的原因，值可为touch（拖动）、touch-out-of-bounds（超出移动范围）、out-of-bounds（超出移动范围后的回弹）、friction（惯性）和空字符串（setData）"
        ],
        since: "1.9.90"
      },
      {
        name: "bindscale",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          '缩放过程中触发的事件，event.detail = {x: x, y: y, scale: scale}，其中x和y字段在[2.1.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")之后开始支持返回'
        ],
        since: "1.9.90"
      },
      {
        name: "htouchmove",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "初次手指触摸后移动为横向的移动，如果catch此事件，则意味着touchmove事件也被catch"
        ],
        since: "1.9.90"
      },
      {
        name: "vtouchmove",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "初次手指触摸后移动为纵向的移动，如果catch此事件，则意味着touchmove事件也被catch"
        ],
        since: "1.9.90"
      }
    ],
    notices: [
      "movable-view 必须设置width和height属性，不设置默认为10px",
      "movable-view 默认为绝对定位，top和left属性为0px",
      "当movable-view小于movable-area时，movable-view的移动范围是在movable-area内；当movable-view大于movable-area时，movable-view的移动范围必须包含movable-area（x轴方向和y轴方向分开考虑）",
      "movable-view必须在`<movable-area/>`组件中，并且必须是直接子节点，否则不能移动。"
    ],
    name: "movable-view",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html",
    since: "1.2.0"
  },
  {
    desc: [
      "覆盖在原生组件之上的文本视图，可覆盖的原生组件包括`map`、`video`、`canvas`、`camera`、`live-player`、`live-pusher`，只支持嵌套`cover-view`、`cover-image`，可在`cover-view`中使用`button`。"
    ],
    attrs: [
      {
        name: "scroll-top",
        type: {
          name: "number"
        },
        desc: [
          "设置顶部滚动偏移量，仅在设置了 overflow-y: scroll 成为滚动元素后生效"
        ],
        since: "2.1.0"
      }
    ],
    name: "cover-view",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html",
    since: "1.4.0"
  },
  {
    desc: [
      "覆盖在原生组件之上的图片视图，可覆盖的原生组件同`cover-view`，支持嵌套在cover-view里。"
    ],
    attrs: [
      {
        name: "src",
        type: {
          name: "string"
        },
        desc: [
          "图标路径，支持临时路径、网络地址（1.6.0起支持）、云文件ID（2.2.3起支持）。暂不支持base64格式。"
        ]
      },
      {
        name: "bindload",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["图片加载成功时触发"],
        since: "2.1.0"
      },
      {
        name: "binderror",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["图片加载失败时触发"],
        since: "2.1.0"
      }
    ],
    tips: [
      "基础库 2.2.4 起支持 touch 相关事件，也可使用 hover-class 设置点击态",
      "基础库 2.1.0 起支持设置 `scale` `rotate` 的 css 样式，包括 transition 动画",
      "基础库 1.9.90 起 `cover-view` 支持 `overflow: scroll`，但不支持动态更新 `overflow`",
      "基础库 1.9.90 起最外层 `cover-view` 支持 `position: fixed`",
      "基础库 1.9.0 起支持插在 `view` 等标签下。在此之前只可嵌套在原生组件`map`、`video`、`canvas`、`camera`内，避免嵌套在其他组件内。",
      "基础库 1.6.0 起支持css transition动画，`transition-property`只支持`transform (translateX, translateY)`与`opacity`。",
      "基础库 1.6.0 起支持css opacity。",
      "事件模型遵循冒泡模型，但不会冒泡到原生组件。",
      "文本建议都套上cover-view标签，避免排版错误。",
      "只支持基本的定位、布局、文本样式。不支持设置`单边的border`、`background-image`、`shadow`、`overflow: visible`等。",
      "建议子节点不要溢出父节点",
      "默认设置的样式有：`white-space: nowrap;` `line-height: 1.2;` `display: block;`"
    ],
    bugs: [
      "自定义组件嵌套 `cover-view` 时，自定义组件的 slot 及其父节点暂不支持通过 wx:if 控制显隐，否则会导致 `cover-view` 不显示"
    ],
    name: "cover-image",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html",
    since: "1.4.0"
  },
  {
    desc: ["图标。"],
    attrs: [
      {
        name: "type",
        type: {
          name: "string"
        },
        desc: [
          "icon的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear"
        ]
      },
      {
        name: "size",
        type: {
          name: "number"
        },
        desc: ["icon的大小，单位px"],
        defaultValue: "23"
      },
      {
        name: "color",
        type: {
          name: "string"
        },
        desc: ["icon的颜色，同css的color"]
      }
    ],
    demoImages: [
      "https://developers.weixin.qq.com/miniprogram/dev/image/pic/icon.png"
    ],
    name: "icon",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/icon.html"
  },
  {
    desc: ["文本。"],
    attrs: [
      {
        name: "selectable",
        type: {
          name: "boolean"
        },
        desc: ["文本是否可选"],
        since: "1.1.0",
        defaultValue: "false"
      },
      {
        enum: [
          {
            value: "ensp",
            desc: "中文字符空格一半大小"
          },
          {
            value: "emsp",
            desc: "中文字符空格大小"
          },
          {
            value: "nbsp",
            desc: "根据字体设置的空格大小"
          }
        ],
        name: "space",
        type: {
          name: "string"
        },
        desc: ["显示连续空格"],
        since: "1.4.0",
        defaultValue: "false"
      },
      {
        name: "decode",
        type: {
          name: "boolean"
        },
        desc: ["是否解码"],
        since: "1.4.0",
        defaultValue: "false"
      }
    ],
    tips: [
      "decode可以解析的有 `&nbsp;` `&lt;` `&gt;` `&amp;` `&apos;` `&ensp;` `&emsp;`",
      "各个操作系统的空格标准并不一致。",
      "`<text/>` 组件内只支持 `<text/>` 嵌套。",
      "除了文本节点以外的其他节点都无法长按选中。"
    ],
    bugs: [
      "基础库版本低于 `2.1.0` 时， `<text/>` 组件内嵌的 `<text/>` style 设置可能不会生效。"
    ],
    demoImages: [
      "https://developers.weixin.qq.com/miniprogram/dev/image/pic/text.png"
    ],
    name: "text",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/text.html"
  },
  {
    desc: [
      "富文本。\n\n支持默认事件，包括：`tap`、`touchstart`、`touchmove`、`touchcancel`、`touchend`和`longtap`"
    ],
    attrs: [
      {
        name: "nodes",
        type: {
          name: "any[] | string"
        },
        desc: ["节点列表 / HTML String"],
        since: "1.4.0"
      }
    ],
    notices: [
      "nodes 属性推荐使用 Array 类型，由于组件会将 String 类型转换为 Array 类型，因而性能会有所下降"
    ],
    tips: [
      "nodes 不推荐使用 String 类型，性能会有所下降。",
      "`rich-text` 组件内屏蔽所有节点的事件。",
      "attrs 属性不支持 id ，支持 class 。",
      "name 属性大小写不敏感。",
      "如果使用了不受信任的HTML节点，该节点及其所有子节点将会被移除。",
      "img 标签仅支持网络图片。",
      "如果在自定义组件中使用 `rich-text` 组件，那么仅自定义组件的 wxss 样式对 `rich-text` 中的 class 生效。"
    ],
    name: "rich-text",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html",
    since: "1.4.0"
  },
  {
    desc: ["进度条。"],
    attrs: [
      {
        name: "percent",
        type: {
          name: "number"
        },
        desc: ["百分比0~100"],
        defaultValue: "无"
      },
      {
        name: "show-info",
        type: {
          name: "boolean"
        },
        desc: ["在进度条右侧显示百分比"],
        defaultValue: "false"
      },
      {
        name: "stroke-width",
        type: {
          name: "number"
        },
        desc: ["进度条线的宽度，单位px"],
        defaultValue: "6"
      },
      {
        name: "color",
        type: {
          name: "string"
        },
        desc: ["进度条颜色 （请使用 active-color）"],
        defaultValue: "#09BB07"
      },
      {
        name: "active-color",
        type: {
          name: "string"
        },
        desc: ["已选择的进度条的颜色"]
      },
      {
        name: "background-color",
        type: {
          name: "string"
        },
        desc: ["未选择的进度条的颜色"]
      },
      {
        name: "active",
        type: {
          name: "boolean"
        },
        desc: ["进度条从左往右的动画"],
        defaultValue: "false"
      },
      {
        name: "active-mode",
        type: {
          name: "string"
        },
        desc: ["backwards: 动画从头播；forwards：动画从上次结束点接着播"],
        since: "1.7.0",
        defaultValue: "backwards"
      }
    ],
    demoImages: [
      "https://developers.weixin.qq.com/miniprogram/dev/image/pic/progress.png"
    ],
    name: "progress",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/progress.html"
  },
  {
    desc: ["按钮。"],
    attrs: [
      {
        enum: [
          {
            value: "default",
            desc: "默认大小"
          },
          {
            value: "mini",
            desc: "小尺寸"
          }
        ],
        extras: [
          {
            key: "生效时机"
          }
        ],
        name: "size",
        type: {
          name: "string"
        },
        desc: ["按钮的大小"],
        defaultValue: "default"
      },
      {
        enum: [
          {
            value: "primary",
            desc: "绿色"
          },
          {
            value: "default",
            desc: "白色"
          },
          {
            value: "warn",
            desc: "红色"
          }
        ],
        extras: [
          {
            key: "生效时机"
          }
        ],
        name: "type",
        type: {
          name: "string"
        },
        desc: ["按钮的样式类型"],
        defaultValue: "default"
      },
      {
        extras: [
          {
            key: "生效时机"
          }
        ],
        name: "plain",
        type: {
          name: "boolean"
        },
        desc: ["按钮是否镂空，背景色透明"],
        defaultValue: "false"
      },
      {
        extras: [
          {
            key: "生效时机"
          }
        ],
        name: "disabled",
        type: {
          name: "boolean"
        },
        desc: ["是否禁用"],
        defaultValue: "false"
      },
      {
        extras: [
          {
            key: "生效时机"
          }
        ],
        name: "loading",
        type: {
          name: "boolean"
        },
        desc: ["名称前是否带 loading 图标"],
        defaultValue: "false"
      },
      {
        enum: [
          {
            value: "submit",
            desc: "提交表单"
          },
          {
            value: "reset",
            desc: "重置表单"
          }
        ],
        extras: [
          {
            key: "生效时机"
          }
        ],
        name: "form-type",
        type: {
          name: "string"
        },
        desc: [
          "用于 `<form/>` 组件，点击分别会触发 `<form/>` 组件的 submit/reset 事件"
        ]
      },
      {
        enum: [
          {
            value: "contact",
            desc: "打开客服会话",
            since: "1.1.0"
          },
          {
            value: "share",
            desc:
              "触发用户转发，使用前建议先阅读[使用指引](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html#使用指引)",
            since: "1.2.0"
          },
          {
            value: "getUserInfo",
            desc: "获取用户信息，可以从bindgetuserinfo回调中获取到用户信息",
            since: "1.3.0"
          },
          {
            value: "getPhoneNumber",
            desc:
              "获取用户手机号，可以从bindgetphonenumber回调中获取到用户信息，[具体说明](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html)",
            since: "1.2.0"
          },
          {
            value: "launchApp",
            desc:
              "打开APP，可以通过app-parameter属性设定向APP传的参数[具体说明](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/launchApp.html)",
            since: "1.9.5"
          },
          {
            value: "openSetting",
            desc: "打开授权设置页",
            since: "2.0.7"
          },
          {
            value: "feedback",
            desc:
              "打开“意见反馈”页面，用户可提交反馈内容并上传[日志](https://developers.weixin.qq.com/miniprogram/dev/api/debug/wx.getLogManager.html)，开发者可以登录[小程序管理后台](https://mp.weixin.qq.com/)后进入左侧菜单“客服反馈”页面获取到反馈内容",
            since: "2.1.0"
          }
        ],
        extras: [
          {
            key: "生效时机"
          }
        ],
        name: "open-type",
        type: {
          name: "string"
        },
        desc: ["微信开放能力"],
        since: "1.1.0"
      },
      {
        extras: [
          {
            key: "生效时机"
          }
        ],
        name: "hover-class",
        type: {
          name: "string"
        },
        desc: [
          '指定按钮按下去的样式类。当 `hover-class="none"` 时，没有点击态效果'
        ],
        defaultValue: "button-hover"
      },
      {
        extras: [
          {
            key: "生效时机"
          }
        ],
        name: "hover-stop-propagation",
        type: {
          name: "boolean"
        },
        desc: ["指定是否阻止本节点的祖先节点出现点击态"],
        since: "1.5.0",
        defaultValue: "false"
      },
      {
        extras: [
          {
            key: "生效时机"
          }
        ],
        name: "hover-start-time",
        type: {
          name: "number"
        },
        desc: ["按住后多久出现点击态，单位毫秒"],
        defaultValue: "20"
      },
      {
        extras: [
          {
            key: "生效时机"
          }
        ],
        name: "hover-stay-time",
        type: {
          name: "number"
        },
        desc: ["手指松开后点击态保留时间，单位毫秒"],
        defaultValue: "70"
      },
      {
        extras: [
          {
            key: "生效时机",
            value: 'open-type="getUserInfo"'
          }
        ],
        name: "lang",
        type: {
          name: "string"
        },
        desc: [
          "指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。"
        ],
        since: "1.3.0",
        defaultValue: "en"
      },
      {
        extras: [
          {
            key: "生效时机",
            value: 'open-type="getUserInfo"'
          }
        ],
        name: "bindgetuserinfo",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与[wx.getUserInfo](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html)返回的一致"
        ],
        since: "1.3.0"
      },
      {
        extras: [
          {
            key: "生效时机",
            value: 'open-type="contact"'
          }
        ],
        name: "session-from",
        type: {
          name: "string"
        },
        desc: ["会话来源"],
        since: "1.4.0"
      },
      {
        extras: [
          {
            key: "生效时机",
            value: 'open-type="contact"'
          }
        ],
        name: "send-message-title",
        type: {
          name: "string"
        },
        desc: ["会话内消息卡片标题"],
        since: "1.5.0",
        defaultValue: "当前标题"
      },
      {
        extras: [
          {
            key: "生效时机",
            value: 'open-type="contact"'
          }
        ],
        name: "send-message-path",
        type: {
          name: "string"
        },
        desc: ["会话内消息卡片点击跳转小程序路径"],
        since: "1.5.0",
        defaultValue: "当前分享路径"
      },
      {
        extras: [
          {
            key: "生效时机",
            value: 'open-type="contact"'
          }
        ],
        name: "send-message-img",
        type: {
          name: "string"
        },
        desc: ["会话内消息卡片图片"],
        since: "1.5.0",
        defaultValue: "截图"
      },
      {
        extras: [
          {
            key: "生效时机",
            value: 'open-type="contact"'
          }
        ],
        name: "show-message-card",
        type: {
          name: "boolean"
        },
        desc: ["显示会话内消息卡片"],
        since: "1.5.0",
        defaultValue: "false"
      },
      {
        extras: [
          {
            key: "生效时机",
            value: 'open-type="contact"'
          }
        ],
        name: "bindcontact",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["客服消息回调"],
        since: "1.5.0"
      },
      {
        extras: [
          {
            key: "生效时机",
            value: 'open-type="getPhoneNumber"'
          }
        ],
        name: "bindgetphonenumber",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["获取用户手机号回调"],
        since: "1.2.0"
      },
      {
        extras: [
          {
            key: "生效时机",
            value: 'open-type="launchApp"'
          }
        ],
        name: "app-parameter",
        type: {
          name: "string"
        },
        desc: ["打开 APP 时，向 APP 传递的参数"],
        since: "1.9.5"
      },
      {
        extras: [
          {
            key: "生效时机",
            value: 'open-type="launchApp"'
          }
        ],
        name: "binderror",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["当使用开放能力时，发生错误的回调"],
        since: "1.9.5"
      },
      {
        extras: [
          {
            key: "生效时机",
            value: 'open-type="openSetting"'
          }
        ],
        name: "bindopensetting",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["在打开授权设置页后回调"],
        since: "2.0.7"
      }
    ],
    notices: [
      "`button-hover` 默认为`{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}`",
      "`bindgetphonenumber` 从1.2.0 开始支持，但是在1.5.3以下版本中无法使用`wx.canIUse`进行检测，建议使用基础库版本进行判断。",
      "在`bindgetphonenumber` 等返回加密信息的回调中调用 `wx.login` 登录，可能会刷新登录态。此时服务器使用 code 换取的 sessionKey 不是加密时使用的 sessionKey，导致解密失败。建议开发者提前进行 `login`；或者在回调中先使用 `checkSession` 进行登录态检查，避免 `login` 刷新登录态。",
      "从 2.1.0 起，button 可作为原生组件的子节点嵌入，以便在原生组件上使用 `open-type` 的能力"
    ],
    tips: [
      "目前，设置了 `form-type` 的 `button` 只会对当前组件中的 `form` 有效。因而，将 `button` 封装在自定义组件中，而 `from` 在自定义组件外，将会使这个 `button` 的 `form-type` 失效。"
    ],
    demoImages: [
      "https://developers.weixin.qq.com/miniprogram/dev/image/pic/button.png"
    ],
    name: "button",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
  },
  {
    desc: ["多项选择器，内部由多个`checkbox`组成。"],
    attrs: [
      {
        name: "bindchange",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "`<checkbox-group/>`中选中项发生改变是触发 change 事件，detail = {value:\\[选中的checkbox的value的数组\\]}"
        ]
      }
    ],
    name: "checkbox-group",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html"
  },
  {
    desc: ["多选项目。"],
    attrs: [
      {
        name: "value",
        type: {
          name: "string"
        },
        desc: [
          "`<checkbox/>`标识，选中时触发`<checkbox-group/>`的 change 事件，并携带 `<checkbox/>` 的 value"
        ]
      },
      {
        name: "disabled",
        type: {
          name: "boolean"
        },
        desc: ["是否禁用"],
        defaultValue: "false"
      },
      {
        name: "checked",
        type: {
          name: "boolean"
        },
        desc: ["当前是否选中，可用来设置默认选中"],
        defaultValue: "false"
      },
      {
        name: "color",
        type: {
          name: "string"
        },
        desc: ["checkbox的颜色，同css的color"]
      }
    ],
    demoImages: [
      "https://developers.weixin.qq.com/miniprogram/dev/image/pic/checkbox.png"
    ],
    name: "checkbox",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html"
  },
  {
    desc: [
      "表单，将组件内的用户输入的`<switch/>` `<input/>` `<checkbox/>` `<slider/>` `<radio/>` `<picker/>` 提交。\n\n当点击 `<form/>` 表单中 formType 为 submit 的 `<button/>` 组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。"
    ],
    attrs: [
      {
        name: "report-submit",
        type: {
          name: "boolean"
        },
        desc: [
          "是否返回 formId 用于发送[模板消息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/template-message.html)"
        ]
      },
      {
        name: "bindsubmit",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'} , formId: ''}"
        ]
      },
      {
        name: "bindreset",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["表单重置时会触发 reset 事件"]
      }
    ],
    demoImages: [
      "https://developers.weixin.qq.com/miniprogram/dev/image/pic/form.png"
    ],
    name: "form",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/form.html"
  },
  {
    desc: [
      "输入框。该组件是[原生组件](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)，使用时请注意相关限制。"
    ],
    attrs: [
      {
        name: "value",
        type: {
          name: "string"
        },
        desc: ["输入框的初始内容"]
      },
      {
        enum: [
          {
            value: "text",
            desc: "文本输入键盘"
          },
          {
            value: "number",
            desc: "数字输入键盘"
          },
          {
            value: "idcard",
            desc: "身份证输入键盘"
          },
          {
            value: "digit",
            desc: "带小数点的数字键盘"
          }
        ],
        name: "type",
        type: {
          name: "string"
        },
        desc: ["input 的类型"],
        defaultValue: "text"
      },
      {
        name: "password",
        type: {
          name: "boolean"
        },
        desc: ["是否是密码类型"],
        defaultValue: "false"
      },
      {
        name: "placeholder",
        type: {
          name: "string"
        },
        desc: ["输入框为空时占位符"]
      },
      {
        name: "placeholder-style",
        type: {
          name: "string"
        },
        desc: ["指定 placeholder 的样式"]
      },
      {
        name: "placeholder-class",
        type: {
          name: "string"
        },
        desc: ["指定 placeholder 的样式类"],
        defaultValue: "input-placeholder"
      },
      {
        name: "disabled",
        type: {
          name: "boolean"
        },
        desc: ["是否禁用"],
        defaultValue: "false"
      },
      {
        name: "maxlength",
        type: {
          name: "number"
        },
        desc: ["最大输入长度，设置为 -1 的时候不限制最大长度"],
        defaultValue: "140"
      },
      {
        name: "cursor-spacing",
        type: {
          name: "number"
        },
        desc: [
          "指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离"
        ],
        defaultValue: "0"
      },
      {
        name: "auto-focus",
        type: {
          name: "boolean"
        },
        desc: ["(即将废弃，请直接使用 focus )自动聚焦，拉起键盘"],
        defaultValue: "false"
      },
      {
        name: "focus",
        type: {
          name: "boolean"
        },
        desc: ["获取焦点"],
        defaultValue: "false"
      },
      {
        enum: [
          {
            value: "send",
            desc: "右下角按钮为“发送”"
          },
          {
            value: "search",
            desc: "右下角按钮为“搜索”"
          },
          {
            value: "next",
            desc: "右下角按钮为“下一个”"
          },
          {
            value: "go",
            desc: "右下角按钮为“前往”"
          },
          {
            value: "done",
            desc: "右下角按钮为“完成”"
          }
        ],
        name: "confirm-type",
        type: {
          name: "string"
        },
        desc: ["设置键盘右下角按钮的文字，仅在type='text'时生效"],
        since: "1.1.0",
        defaultValue: "done"
      },
      {
        name: "confirm-hold",
        type: {
          name: "boolean"
        },
        desc: ["点击键盘右下角按钮时是否保持键盘不收起"],
        since: "1.1.0",
        defaultValue: "false"
      },
      {
        name: "cursor",
        type: {
          name: "number"
        },
        desc: ["指定focus时的光标位置"],
        since: "1.5.0"
      },
      {
        name: "selection-start",
        type: {
          name: "number"
        },
        desc: ["光标起始位置，自动聚集时有效，需与selection-end搭配使用"],
        since: "1.9.0",
        defaultValue: "-1"
      },
      {
        name: "selection-end",
        type: {
          name: "number"
        },
        desc: ["光标结束位置，自动聚集时有效，需与selection-start搭配使用"],
        since: "1.9.0",
        defaultValue: "-1"
      },
      {
        name: "adjust-position",
        type: {
          name: "boolean"
        },
        desc: ["键盘弹起时，是否自动上推页面"],
        since: "1.9.90",
        defaultValue: "true"
      },
      {
        name: "bindinput",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "键盘输入时触发，event.detail = {value, cursor, keyCode}，keyCode 为键值，2.1.0 起支持，处理函数可以直接 return 一个字符串，将替换输入框的内容。"
        ]
      },
      {
        name: "bindfocus",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度，在基础库 1.9.90 起支持"
        ]
      },
      {
        name: "bindblur",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["输入框失去焦点时触发，event.detail = {value: value}"]
      },
      {
        name: "bindconfirm",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["点击完成按钮时触发，event.detail = {value: value}"]
      }
    ],
    notices: [
      "confirm-type的最终表现与手机输入法本身的实现有关，部分安卓系统输入法和第三方输入法可能不支持或不完全支持。"
    ],
    tips: [
      "请注意[原生组件使用限制](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html#原生组件的使用限制)。",
      "input 组件是一个原生组件，字体是系统字体，所以无法设置 font-family；",
      "在 input 聚焦期间，避免使用 css 动画；",
      "对于将 `input` 封装在自定义组件中、而 `from` 在自定义组件外的情况， `form` 将不能获得这个自定义组件中 `input` 的值。此时需要使用自定义组件的 [内置 behaviors](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html) `wx://form-field`。"
    ],
    bugs: [
      "微信版本 `6.3.30`, focus 属性设置无效；",
      "微信版本 `6.3.30`, placeholder 在聚焦时出现重影问题；"
    ],
    demoImages: [
      "https://developers.weixin.qq.com/miniprogram/dev/image/pic/input.png"
    ],
    name: "input",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
  },
  {
    desc: [
      "用来改进表单组件的可用性，使用`for`属性找到对应的`id`，或者将控件放在该标签下，当点击时，就会触发对应的控件。\n\n`for`优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。\n\n目前可以绑定的控件有：`<button/>`, `<checkbox/>`, `<radio/>`, `<switch/>`。"
    ],
    attrs: [
      {
        name: "for",
        type: {
          name: "string"
        },
        desc: ["绑定控件的 id"]
      }
    ],
    demoImages: [
      "https://developers.weixin.qq.com/miniprogram/dev/image/pic/label.png"
    ],
    name: "label",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/label.html"
  },
  {
    desc: [
      "从底部弹起的滚动选择器，现支持五种选择器，通过mode来区分，分别是普通选择器，多列选择器，时间选择器，日期选择器，省市区选择器，默认是普通选择器。"
    ],
    attrs: [
      {
        subAttrs: [
          {
            equal: "selector",
            attrs: [
              {
                name: "range",
                type: {
                  name: "any[] | ArrayObject"
                },
                desc: ["mode为 selector 或 multiSelector 时，range 有效"]
              },
              {
                name: "range-key",
                type: {
                  name: "string"
                },
                desc: [
                  "当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容"
                ]
              },
              {
                name: "value",
                type: {
                  name: "number"
                },
                desc: [
                  "value 的值表示选择了 range 中的第几个（下标从 0 开始）"
                ],
                defaultValue: "0"
              },
              {
                name: "bindchange",
                type: {
                  name: "function",
                  returns: {
                    name: "any"
                  }
                },
                desc: [
                  "value 改变时触发 change 事件，event.detail = {value: value}"
                ]
              },
              {
                name: "disabled",
                type: {
                  name: "boolean"
                },
                desc: ["是否禁用"],
                defaultValue: "false"
              },
              {
                name: "bindcancel",
                type: {
                  name: "function",
                  returns: {
                    name: "any"
                  }
                },
                desc: ["取消选择或点遮罩层收起 picker 时触发"],
                since: "1.9.90"
              }
            ]
          },
          {
            equal: "multiSelector",
            attrs: [
              {
                name: "range",
                type: {
                  name: "any[][] | ArrayObject"
                },
                desc: [
                  'mode为 selector 或 multiSelector 时，range 有效。二维数组，长度表示多少列，数组的每项表示每列的数据，如`[["a","b"], ["c","d"]]`'
                ]
              },
              {
                name: "range-key",
                type: {
                  name: "string"
                },
                desc: [
                  "当 range 是一个 二维Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容"
                ]
              },
              {
                name: "value",
                type: {
                  name: "any[]"
                },
                desc: [
                  "value 每一项的值表示选择了 range 对应项中的第几个（下标从 0 开始）"
                ]
              },
              {
                name: "bindchange",
                type: {
                  name: "function",
                  returns: {
                    name: "any"
                  }
                },
                desc: [
                  "value 改变时触发 change 事件，event.detail = {value: value}"
                ]
              },
              {
                name: "bindcolumnchange",
                type: {
                  name: "function",
                  returns: {
                    name: "any"
                  }
                },
                desc: [
                  "某一列的值改变时触发 columnchange 事件，event.detail = {column: column, value: value}，column 的值表示改变了第几列（下标从0开始），value 的值表示变更值的下标"
                ]
              },
              {
                name: "bindcancel",
                type: {
                  name: "function",
                  returns: {
                    name: "any"
                  }
                },
                desc: ["取消选择时触发"],
                since: "1.9.90"
              },
              {
                name: "disabled",
                type: {
                  name: "boolean"
                },
                desc: ["是否禁用"],
                defaultValue: "false"
              }
            ]
          },
          {
            equal: "time",
            attrs: [
              {
                name: "value",
                type: {
                  name: "string"
                },
                desc: ['表示选中的时间，格式为"hh:mm"']
              },
              {
                name: "start",
                type: {
                  name: "string"
                },
                desc: ['表示有效时间范围的开始，字符串格式为"hh:mm"']
              },
              {
                name: "end",
                type: {
                  name: "string"
                },
                desc: ['表示有效时间范围的结束，字符串格式为"hh:mm"']
              },
              {
                name: "bindchange",
                type: {
                  name: "function",
                  returns: {
                    name: "any"
                  }
                },
                desc: [
                  "value 改变时触发 change 事件，event.detail = {value: value}"
                ]
              },
              {
                name: "bindcancel",
                type: {
                  name: "function",
                  returns: {
                    name: "any"
                  }
                },
                desc: ["取消选择时触发"],
                since: "1.9.90"
              },
              {
                name: "disabled",
                type: {
                  name: "boolean"
                },
                desc: ["是否禁用"],
                defaultValue: "false"
              }
            ]
          },
          {
            equal: "date",
            attrs: [
              {
                name: "value",
                type: {
                  name: "string"
                },
                desc: ['表示选中的日期，格式为"YYYY-MM-DD"'],
                defaultValue: "0"
              },
              {
                name: "start",
                type: {
                  name: "string"
                },
                desc: ['表示有效日期范围的开始，字符串格式为"YYYY-MM-DD"']
              },
              {
                name: "end",
                type: {
                  name: "string"
                },
                desc: ['表示有效日期范围的结束，字符串格式为"YYYY-MM-DD"']
              },
              {
                enum: [
                  {
                    value: "year",
                    desc: "选择器粒度为年"
                  },
                  {
                    value: "month",
                    desc: "选择器粒度为月份"
                  },
                  {
                    value: "day",
                    desc: "选择器粒度为天"
                  }
                ],
                name: "fields",
                type: {
                  name: "string"
                },
                desc: ["有效值 year,month,day，表示选择器的粒度"],
                defaultValue: "day"
              },
              {
                name: "bindchange",
                type: {
                  name: "function",
                  returns: {
                    name: "any"
                  }
                },
                desc: [
                  "value 改变时触发 change 事件，event.detail = {value: value}"
                ]
              },
              {
                name: "bindcancel",
                type: {
                  name: "function",
                  returns: {
                    name: "any"
                  }
                },
                desc: ["取消选择时触发"],
                since: "1.9.90"
              },
              {
                name: "disabled",
                type: {
                  name: "boolean"
                },
                desc: ["是否禁用"],
                defaultValue: "false"
              }
            ]
          },
          {
            equal: "region",
            attrs: [
              {
                name: "value",
                type: {
                  name: "any[]"
                },
                desc: ["表示选中的省市区，默认选中每一列的第一个值"]
              },
              {
                name: "custom-item",
                type: {
                  name: "string"
                },
                desc: ["可为每一列的顶部添加一个自定义的项"],
                since: "1.5.0"
              },
              {
                name: "bindchange",
                type: {
                  name: "function",
                  returns: {
                    name: "any"
                  }
                },
                desc: [
                  "value 改变时触发 change 事件，event.detail = {value: value, code: code, postcode: postcode}，其中字段code是统计用区划代码，postcode是邮政编码"
                ]
              },
              {
                name: "bindcancel",
                type: {
                  name: "function",
                  returns: {
                    name: "any"
                  }
                },
                desc: ["取消选择时触发"],
                since: "1.9.90"
              },
              {
                name: "disabled",
                type: {
                  name: "boolean"
                },
                desc: ["是否禁用"],
                defaultValue: "false"
              }
            ]
          }
        ],
        name: "mode",
        type: {
          name: "string"
        },
        desc: ["选择器的类型"],
        defaultValue: "selector"
      }
    ],
    demoImages: [
      "https://developers.weixin.qq.com/miniprogram/dev/image/pic/picker.png"
    ],
    name: "picker",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/picker.html"
  },
  {
    desc: ["嵌入页面的滚动选择器"],
    attrs: [
      {
        name: "value",
        type: {
          name: "number[]"
        },
        desc: [
          "数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。"
        ]
      },
      {
        name: "indicator-style",
        type: {
          name: "string"
        },
        desc: ["设置选择器中间选中框的样式"]
      },
      {
        name: "indicator-class",
        type: {
          name: "string"
        },
        desc: ["设置选择器中间选中框的类名"],
        since: "1.1.0"
      },
      {
        name: "mask-style",
        type: {
          name: "string"
        },
        desc: ["设置蒙层的样式"],
        since: "1.5.0"
      },
      {
        name: "mask-class",
        type: {
          name: "string"
        },
        desc: ["设置蒙层的类名"],
        since: "1.5.0"
      },
      {
        name: "bindchange",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "当滚动选择，value 改变时触发 change 事件，event.detail = {value: value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）"
        ]
      }
    ],
    notices: ["其中只可放置`<picker-view-column/>`组件，其他节点不会显示。"],
    name: "picker-view",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html"
  },
  {
    desc: [
      "仅可放置于`<picker-view />`中，其孩子节点的高度会自动设置成与picker-view的选中框的高度一致"
    ],
    tips: [
      "滚动时在iOS自带振动反馈，可在系统设置 -> 声音与触感 -> 系统触感反馈中关闭"
    ],
    demoImages: [
      "https://developers.weixin.qq.com/miniprogram/dev/image/picker_view.png"
    ],
    name: "picker-view-column",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html"
  },
  {
    desc: ["单项选择器，内部由多个`<radio/>`组成。"],
    attrs: [
      {
        name: "bindchange",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "`<radio-group/>` 中的选中项发生变化时触发 change 事件，event.detail = {value: 选中项radio的value}"
        ]
      }
    ],
    name: "radio-group",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/radio.html"
  },
  {
    desc: ["单选项目"],
    attrs: [
      {
        name: "value",
        type: {
          name: "string"
        },
        desc: [
          "`<radio/>` 标识。当该`<radio/>` 选中时，`<radio-group/>` 的 change 事件会携带`<radio/>`的value"
        ]
      },
      {
        name: "checked",
        type: {
          name: "boolean"
        },
        desc: ["当前是否选中"],
        defaultValue: "false"
      },
      {
        name: "disabled",
        type: {
          name: "boolean"
        },
        desc: ["是否禁用"],
        defaultValue: "false"
      },
      {
        name: "color",
        type: {
          name: "string"
        },
        desc: ["radio的颜色，同css的color"]
      }
    ],
    demoImages: [
      "https://developers.weixin.qq.com/miniprogram/dev/image/pic/radio.png"
    ],
    name: "radio",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/radio.html"
  },
  {
    desc: ["滑动选择器。"],
    attrs: [
      {
        name: "min",
        type: {
          name: "number"
        },
        desc: ["最小值"],
        defaultValue: "0"
      },
      {
        name: "max",
        type: {
          name: "number"
        },
        desc: ["最大值"],
        defaultValue: "100"
      },
      {
        name: "step",
        type: {
          name: "number"
        },
        desc: ["步长，取值必须大于 0，并且可被(max - min)整除"],
        defaultValue: "1"
      },
      {
        name: "disabled",
        type: {
          name: "boolean"
        },
        desc: ["是否禁用"],
        defaultValue: "false"
      },
      {
        name: "value",
        type: {
          name: "number"
        },
        desc: ["当前取值"],
        defaultValue: "0"
      },
      {
        name: "color",
        type: {
          name: "string"
        },
        desc: ["背景条的颜色（请使用 background-color）"],
        defaultValue: "#e9e9e9"
      },
      {
        name: "selected-color",
        type: {
          name: "string"
        },
        desc: ["已选择的颜色（请使用 active-color）"],
        defaultValue: "#1aad19"
      },
      {
        name: "active-color",
        type: {
          name: "string"
        },
        desc: ["已选择的颜色"],
        defaultValue: "#1aad19"
      },
      {
        name: "background-color",
        type: {
          name: "string"
        },
        desc: ["背景条的颜色"],
        defaultValue: "#e9e9e9"
      },
      {
        name: "block-size",
        type: {
          name: "number"
        },
        desc: ["滑块的大小，取值范围为 12 - 28"],
        since: "1.9.0",
        defaultValue: "28"
      },
      {
        name: "block-color",
        type: {
          name: "string"
        },
        desc: ["滑块的颜色"],
        since: "1.9.0",
        defaultValue: "#ffffff"
      },
      {
        name: "show-value",
        type: {
          name: "boolean"
        },
        desc: ["是否显示当前 value"],
        defaultValue: "false"
      },
      {
        name: "bindchange",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["完成一次拖动后触发的事件，event.detail = {value: value}"]
      },
      {
        name: "bindchanging",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["拖动过程中触发的事件，event.detail = {value: value}"],
        since: "1.7.0"
      }
    ],
    demoImages: [
      "https://developers.weixin.qq.com/miniprogram/dev/image/pic/slider.png"
    ],
    name: "slider",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/slider.html"
  },
  {
    desc: ["开关选择器。"],
    attrs: [
      {
        name: "checked",
        type: {
          name: "boolean"
        },
        desc: ["是否选中"],
        defaultValue: "false"
      },
      {
        name: "disabled",
        type: {
          name: "boolean"
        },
        desc: ["是否禁用"],
        defaultValue: "false"
      },
      {
        name: "type",
        type: {
          name: "string"
        },
        desc: ["样式，有效值：switch, checkbox"],
        defaultValue: "switch"
      },
      {
        name: "bindchange",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["checked 改变时触发 change 事件，event.detail={ value:checked}"]
      },
      {
        name: "color",
        type: {
          name: "string"
        },
        desc: ["switch 的颜色，同 css 的 color"]
      }
    ],
    tips: [
      "switch类型切换时在iOS自带振动反馈，可在系统设置 -> 声音与触感 -> 系统触感反馈中关闭"
    ],
    demoImages: [
      "https://developers.weixin.qq.com/miniprogram/dev/image/pic/switch.png"
    ],
    name: "switch",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/switch.html"
  },
  {
    desc: [
      "多行输入框。该组件是[原生组件](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)，使用时请注意相关限制。"
    ],
    attrs: [
      {
        name: "value",
        type: {
          name: "string"
        },
        desc: ["输入框的内容"]
      },
      {
        name: "placeholder",
        type: {
          name: "string"
        },
        desc: ["输入框为空时占位符"]
      },
      {
        name: "placeholder-style",
        type: {
          name: "string"
        },
        desc: ["指定 placeholder 的样式"]
      },
      {
        name: "placeholder-class",
        type: {
          name: "string"
        },
        desc: ["指定 placeholder 的样式类"],
        defaultValue: "textarea-placeholder"
      },
      {
        name: "disabled",
        type: {
          name: "boolean"
        },
        desc: ["是否禁用"],
        defaultValue: "false"
      },
      {
        name: "maxlength",
        type: {
          name: "number"
        },
        desc: ["最大输入长度，设置为 -1 的时候不限制最大长度"],
        defaultValue: "140"
      },
      {
        name: "auto-focus",
        type: {
          name: "boolean"
        },
        desc: ["自动聚焦，拉起键盘。"],
        defaultValue: "false"
      },
      {
        name: "focus",
        type: {
          name: "boolean"
        },
        desc: ["获取焦点"],
        defaultValue: "false"
      },
      {
        name: "auto-height",
        type: {
          name: "boolean"
        },
        desc: ["是否自动增高，设置auto-height时，style.height不生效"],
        defaultValue: "false"
      },
      {
        name: "fixed",
        type: {
          name: "boolean"
        },
        desc: [
          "如果 textarea 是在一个 `position:fixed` 的区域，需要显示指定属性 fixed 为 true"
        ],
        defaultValue: "false"
      },
      {
        name: "cursor-spacing",
        type: {
          name: "number"
        },
        desc: [
          "指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离"
        ],
        defaultValue: "0"
      },
      {
        name: "cursor",
        type: {
          name: "number"
        },
        desc: ["指定focus时的光标位置"],
        since: "1.5.0"
      },
      {
        name: "show-confirm-bar",
        type: {
          name: "boolean"
        },
        desc: ["是否显示键盘上方带有”完成“按钮那一栏"],
        since: "1.6.0",
        defaultValue: "true"
      },
      {
        name: "selection-start",
        type: {
          name: "number"
        },
        desc: ["光标起始位置，自动聚集时有效，需与selection-end搭配使用"],
        since: "1.9.0",
        defaultValue: "-1"
      },
      {
        name: "selection-end",
        type: {
          name: "number"
        },
        desc: ["光标结束位置，自动聚集时有效，需与selection-start搭配使用"],
        since: "1.9.0",
        defaultValue: "-1"
      },
      {
        name: "adjust-position",
        type: {
          name: "boolean"
        },
        desc: ["键盘弹起时，是否自动上推页面"],
        since: "1.9.90",
        defaultValue: "true"
      },
      {
        name: "bindfocus",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度，在基础库 1.9.90 起支持"
        ]
      },
      {
        name: "bindblur",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["输入框失去焦点时触发，event.detail = {value, cursor}"]
      },
      {
        name: "bindlinechange",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}"
        ]
      },
      {
        name: "bindinput",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "当键盘输入时，触发 input 事件，event.detail = {value, cursor}，**bindinput 处理函数的返回值并不会反映到 textarea 上**"
        ]
      },
      {
        name: "bindconfirm",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["点击完成时， 触发 confirm 事件，event.detail = {value: value}"]
      }
    ],
    tips: [
      "请注意[原生组件使用限制](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html#原生组件的使用限制)。",
      "`textarea` 的 `blur` 事件会晚于页面上的 `tap` 事件，如果需要在 `button` 的点击事件获取 `textarea`，可以使用 `form` 的 `bindsubmit`。",
      "不建议在多行文本上对用户的输入进行修改，所以 `textarea` 的 `bindinput` 处理函数并不会将返回值反映到 `textarea` 上。"
    ],
    bugs: [
      "微信版本 `6.3.30`，`textarea` 在列表渲染时，新增加的 `textarea` 在自动聚焦时的位置计算错误。"
    ],
    name: "textarea",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
  },
  {
    desc: ["页面链接。"],
    attrs: [
      {
        name: "target",
        type: {
          name: "string"
        },
        desc: ["在哪个目标上发生跳转，默认当前小程序，可选值self/miniProgram"],
        since: "2.0.7",
        defaultValue: "self"
      },
      {
        name: "url",
        type: {
          name: "string"
        },
        desc: ["当前小程序内的跳转链接"]
      },
      {
        enum: [
          {
            value: "navigate",
            desc: "对应 `wx.navigateTo` 或 `wx.navigateToMiniProgram` 的功能"
          },
          {
            value: "redirect",
            desc: "对应 `wx.redirectTo` 的功能"
          },
          {
            value: "switchTab",
            desc: "对应 `wx.switchTab` 的功能"
          },
          {
            value: "reLaunch",
            desc: "对应 `wx.reLaunch` 的功能",
            since: "1.1.0"
          },
          {
            value: "navigateBack",
            desc: "对应 `wx.navigateBack` 的功能",
            since: "1.1.0"
          },
          {
            value: "exit",
            desc: '退出小程序，target="miniProgram"时生效',
            since: "2.1.0"
          }
        ],
        name: "open-type",
        type: {
          name: "string"
        },
        desc: ["跳转方式"],
        defaultValue: "navigate"
      },
      {
        name: "delta",
        type: {
          name: "number"
        },
        desc: ["当 open-type 为 'navigateBack' 时有效，表示回退的层数"]
      },
      {
        name: "app-id",
        type: {
          name: "string"
        },
        desc: ['当target="miniProgram"时有效，要打开的小程序 appId'],
        since: "2.0.7"
      },
      {
        name: "path",
        type: {
          name: "string"
        },
        desc: [
          '当target="miniProgram"时有效，打开的页面路径，如果为空则打开首页'
        ],
        since: "2.0.7"
      },
      {
        name: "extra-data",
        type: {
          name: "Object"
        },
        desc: [
          '当target="miniProgram"时有效，需要传递给目标小程序的数据，目标小程序可在 `App.onLaunch()`，`App.onShow()` 中获取到这份数据。[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/app.html)'
        ],
        since: "2.0.7"
      },
      {
        name: "version",
        type: {
          name: "string"
        },
        desc: [
          '当target="miniProgram"时有效，要打开的小程序版本，有效值 develop（开发版），trial（体验版），release（正式版），仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。'
        ],
        since: "2.0.7",
        defaultValue: "release"
      },
      {
        name: "hover-class",
        type: {
          name: "string"
        },
        desc: ['指定点击时的样式类，当`hover-class="none"`时，没有点击态效果'],
        defaultValue: "navigator-hover"
      },
      {
        name: "hover-stop-propagation",
        type: {
          name: "boolean"
        },
        desc: ["指定是否阻止本节点的祖先节点出现点击态"],
        since: "1.5.0",
        defaultValue: "false"
      },
      {
        name: "hover-start-time",
        type: {
          name: "number"
        },
        desc: ["按住后多久出现点击态，单位毫秒"],
        defaultValue: "50"
      },
      {
        name: "hover-stay-time",
        type: {
          name: "number"
        },
        desc: ["手指松开后点击态保留时间，单位毫秒"],
        defaultValue: "600"
      },
      {
        name: "bindsuccess",
        type: {
          name: "string"
        },
        desc: ['当target="miniProgram"时有效，跳转小程序成功'],
        since: "2.0.7"
      },
      {
        name: "bindfail",
        type: {
          name: "string"
        },
        desc: ['当target="miniProgram"时有效，跳转小程序失败'],
        since: "2.0.7"
      },
      {
        name: "bindcomplete",
        type: {
          name: "string"
        },
        desc: ['当target="miniProgram"时有效，跳转小程序完成'],
        since: "2.0.7"
      }
    ],
    notices: [
      "`navigator-hover` 默认为 `{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}`, `<navigator/>` 的子节点背景色应为透明色"
    ],
    name: "navigator",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
  },
  {
    desc: [
      '这个组件从小程序基础库版本 [2.1.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。") 开始支持。\n\n仅在插件的自定义组件中有效，用于跳转到插件功能页。'
    ],
    attrs: [
      {
        name: "version",
        type: {
          name: "string"
        },
        desc: [
          "跳转到的小程序版本，有效值 `develop`（开发版），`trial`（体验版），`release`（正式版）；**线上版本必须设置为 `release`**"
        ],
        since: "2.1.0",
        defaultValue: "release"
      },
      {
        name: "name",
        type: {
          name: "string"
        },
        desc: [
          "要跳转到的功能页",
          '目前支持的功能页和name可选值: {loginAndGetUserInfo => "[用户信息功能页](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/functional-pages/user-info.html)"; requestPayment => "[支付功能页](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/functional-pages/request-payment.html)"}'
        ],
        since: "2.1.0"
      },
      {
        name: "args",
        type: {
          name: "Object"
        },
        desc: ["功能页参数，参数格式与具体功能页相关"],
        since: "2.1.0",
        defaultValue: "null"
      },
      {
        name: "bindsuccess",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["功能页返回，且操作成功时触发， detail 格式与具体功能页相关"],
        since: "2.1.0"
      },
      {
        name: "bindfail",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["功能页返回，且操作失败时触发， detail 格式与具体功能页相关"],
        since: "2.1.0"
      }
    ],
    tips: [
      "功能页是插件所有者小程序中的一个特殊页面，开发者不能自定义这个页面的外观。",
      "在功能页展示时，一些与界面展示相关的接口将被禁用（接口调用返回 fail ）。",
      "这个组件本身可以在开发者工具中使用，但功能页的跳转目前不支持在开发者工具中调试，请在真机上测试。"
    ],
    name: "functional-page-navigator",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html"
  },
  {
    desc: ["音频。"],
    attrs: [
      {
        name: "id",
        type: {
          name: "string"
        },
        desc: ["audio 组件的唯一标识符"]
      },
      {
        name: "src",
        type: {
          name: "string"
        },
        desc: ["要播放音频的资源地址"]
      },
      {
        name: "loop",
        type: {
          name: "boolean"
        },
        desc: ["是否循环播放"],
        defaultValue: "false"
      },
      {
        name: "controls",
        type: {
          name: "boolean"
        },
        desc: ["是否显示默认控件"],
        defaultValue: "false"
      },
      {
        name: "poster",
        type: {
          name: "string"
        },
        desc: [
          "默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效"
        ]
      },
      {
        name: "name",
        type: {
          name: "string"
        },
        desc: [
          "默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效"
        ],
        defaultValue: "未知音频"
      },
      {
        name: "author",
        type: {
          name: "string"
        },
        desc: [
          "默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效"
        ],
        defaultValue: "未知作者"
      },
      {
        name: "binderror",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "当发生错误时触发 error 事件，detail = {errMsg: MediaError.code}",
          'MediaError.code: {1 => "获取资源被用户禁止"; 2 => "网络错误"; 3 => "解码错误"; 4 => "不合适资源"}'
        ]
      },
      {
        name: "bindplay",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["当开始/继续播放时触发play事件"]
      },
      {
        name: "bindpause",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["当暂停播放时触发 pause 事件"]
      },
      {
        name: "bindtimeupdate",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration}"
        ]
      },
      {
        name: "bindended",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["当播放到末尾时触发 ended 事件"]
      }
    ],
    relateApis: [
      {
        name: "wx.createAudioContext",
        link:
          "https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createAudioContext.html"
      }
    ],
    notices: [
      "1.6.0 版本开始，该组件不再维护。建议使用能力更强的 [wx.createInnerAudioContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createInnerAudioContext.html) 接口"
    ],
    demoImages: [
      "https://developers.weixin.qq.com/miniprogram/dev/image/pic/audio.png"
    ],
    name: "audio",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/audio.html"
  },
  {
    desc: ["图片。"],
    attrs: [
      {
        name: "src",
        type: {
          name: "string"
        },
        desc: ["图片资源地址，支持云文件ID（2.2.3起）"]
      },
      {
        enum: [
          {
            value: "scaleToFill",
            desc:
              "缩放: 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素  原图：![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg) 处理后: ![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/1.png)"
          },
          {
            value: "aspectFit",
            desc:
              "缩放: 保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。  原图：![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg) 处理后: ![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/2.png)"
          },
          {
            value: "aspectFill",
            desc:
              "缩放: 保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。  原图：![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg) 处理后: ![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/3.png)"
          },
          {
            value: "widthFix",
            desc: "缩放: 宽度不变，高度自动变化，保持原图宽高比不变"
          },
          {
            value: "top",
            desc:
              "裁剪: 不缩放图片，只显示图片的顶部区域  原图：![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg) 处理后: ![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/4.png)"
          },
          {
            value: "bottom",
            desc:
              "裁剪: 不缩放图片，只显示图片的底部区域  原图：![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg) 处理后: ![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/5.png)"
          },
          {
            value: "center",
            desc:
              "裁剪: 不缩放图片，只显示图片的中间区域  原图：![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg) 处理后: ![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/6.png)"
          },
          {
            value: "left",
            desc:
              "裁剪: 不缩放图片，只显示图片的左边区域  原图：![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg) 处理后: ![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/7.png)"
          },
          {
            value: "right",
            desc:
              "裁剪: 不缩放图片，只显示图片的右边区域  原图：![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg) 处理后: ![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/8.png)"
          },
          {
            value: "top left",
            desc:
              "裁剪: 不缩放图片，只显示图片的左上边区域  原图：![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg) 处理后: ![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/9.png)"
          },
          {
            value: "top right",
            desc:
              "裁剪: 不缩放图片，只显示图片的右上边区域  原图：![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg) 处理后: ![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/10.png)"
          },
          {
            value: "bottom left",
            desc:
              "裁剪: 不缩放图片，只显示图片的左下边区域  原图：![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg) 处理后: ![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/11.png)"
          },
          {
            value: "bottom right",
            desc:
              "裁剪: 不缩放图片，只显示图片的右下边区域  原图：![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg) 处理后: ![](https://developers.weixin.qq.com/miniprogram/dev/image/cat/12.png)"
          }
        ],
        name: "mode",
        type: {
          name: "string"
        },
        desc: ["图片裁剪、缩放的模式"],
        defaultValue: "'scaleToFill'"
      },
      {
        name: "lazy-load",
        type: {
          name: "boolean"
        },
        desc: ["图片懒加载。只针对page与scroll-view下的image有效"],
        since: "1.5.0",
        defaultValue: "false"
      },
      {
        name: "binderror",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "当错误发生时，发布到 AppService 的事件名，事件对象event.detail = {errMsg: 'something wrong'}"
        ]
      },
      {
        name: "bindload",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "当图片载入完毕时，发布到 AppService 的事件名，事件对象event.detail = {height:'图片高度px', width:'图片宽度px'}"
        ]
      }
    ],
    notices: [
      "image组件默认宽度300px、高度225px** **注2：image组件中二维码/小程序码图片不支持长按识别。仅在wx.previewImage中支持长按识别。"
    ],
    name: "image",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
  },
  {
    desc: [
      "视频。该组件是[原生组件](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)，使用时请注意相关限制。\n\n`<video />` 默认宽度300px、高度225px，可通过wxss设置宽高。"
    ],
    attrs: [
      {
        name: "src",
        type: {
          name: "string"
        },
        desc: ["要播放视频的资源地址，支持云文件ID（2.2.3起）"]
      },
      {
        name: "initial-time",
        type: {
          name: "number"
        },
        desc: ["指定视频初始播放位置"],
        since: "1.6.0"
      },
      {
        name: "duration",
        type: {
          name: "number"
        },
        desc: ["指定视频时长"],
        since: "1.1.0"
      },
      {
        name: "controls",
        type: {
          name: "boolean"
        },
        desc: ["是否显示默认播放控件（播放/暂停按钮、播放进度、时间）"],
        defaultValue: "true"
      },
      {
        name: "danmu-list",
        type: {
          name: "ArrayObject"
        },
        desc: ["弹幕列表"]
      },
      {
        name: "danmu-btn",
        type: {
          name: "boolean"
        },
        desc: ["是否显示弹幕按钮，只在初始化时有效，不能动态变更"],
        defaultValue: "false"
      },
      {
        name: "enable-danmu",
        type: {
          name: "boolean"
        },
        desc: ["是否展示弹幕，只在初始化时有效，不能动态变更"],
        defaultValue: "false"
      },
      {
        name: "autoplay",
        type: {
          name: "boolean"
        },
        desc: ["是否自动播放"],
        defaultValue: "false"
      },
      {
        name: "loop",
        type: {
          name: "boolean"
        },
        desc: ["是否循环播放"],
        since: "1.4.0",
        defaultValue: "false"
      },
      {
        name: "muted",
        type: {
          name: "boolean"
        },
        desc: ["是否静音播放"],
        since: "1.4.0",
        defaultValue: "false"
      },
      {
        name: "page-gesture",
        type: {
          name: "boolean"
        },
        desc: ["在非全屏模式下，是否开启亮度与音量调节手势"],
        since: "1.6.0",
        defaultValue: "false"
      },
      {
        name: "direction",
        type: {
          name: "number"
        },
        desc: [
          "设置全屏时视频的方向，不指定则根据宽高比自动判断。有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）"
        ],
        since: "1.7.0"
      },
      {
        name: "show-progress",
        type: {
          name: "boolean"
        },
        desc: ["若不设置，宽度大于240时才会显示"],
        since: "1.9.0",
        defaultValue: "true"
      },
      {
        name: "show-fullscreen-btn",
        type: {
          name: "boolean"
        },
        desc: ["是否显示全屏按钮"],
        since: "1.9.0",
        defaultValue: "true"
      },
      {
        name: "show-play-btn",
        type: {
          name: "boolean"
        },
        desc: ["是否显示视频底部控制栏的播放按钮"],
        since: "1.9.0",
        defaultValue: "true"
      },
      {
        name: "show-center-play-btn",
        type: {
          name: "boolean"
        },
        desc: ["是否显示视频中间的播放按钮"],
        since: "1.9.0",
        defaultValue: "true"
      },
      {
        name: "enable-progress-gesture",
        type: {
          name: "boolean"
        },
        desc: ["是否开启控制进度的手势"],
        since: "1.9.0",
        defaultValue: "true"
      },
      {
        name: "object-fit",
        type: {
          name: "string"
        },
        desc: [
          "当视频大小与 video 容器大小不一致时，视频的表现形式。contain：包含，fill：填充，cover：覆盖"
        ],
        defaultValue: "contain"
      },
      {
        name: "poster",
        type: {
          name: "string"
        },
        desc: [
          "视频封面的图片网络资源地址或云文件ID（2.2.3起支持）如果 controls 属性值为 false 则设置 poster 无效"
        ]
      },
      {
        name: "bindplay",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["当开始/继续播放时触发play事件"]
      },
      {
        name: "bindpause",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["当暂停播放时触发 pause 事件"]
      },
      {
        name: "bindended",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["当播放到末尾时触发 ended 事件"]
      },
      {
        name: "bindtimeupdate",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次"
        ]
      },
      {
        name: "bindfullscreenchange",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "视频进入和退出全屏时触发，event.detail = {fullScreen, direction}，direction取为 vertical 或 horizontal"
        ],
        since: "1.4.0"
      },
      {
        name: "bindwaiting",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["视频出现缓冲时触发"],
        since: "1.7.0"
      },
      {
        name: "binderror",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["视频播放出错时触发"],
        since: "1.7.0"
      }
    ],
    relateApis: [
      {
        name: "wx.createVideoContext",
        link:
          "https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.createVideoContext.html"
      }
    ],
    tips: [
      "请注意[原生组件使用限制](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html#原生组件的使用限制)。"
    ],
    demoImages: [
      "https://developers.weixin.qq.com/miniprogram/dev/image/pic/video.png"
    ],
    name: "video",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
  },
  {
    desc: [
      "系统相机。该组件是[原生组件](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)，使用时请注意相关限制。"
    ],
    attrs: [
      {
        name: "mode",
        type: {
          name: "string"
        },
        desc: ["有效值为 normal, scanCode"],
        since: "2.1.0",
        defaultValue: "normal"
      },
      {
        name: "device-position",
        type: {
          name: "string"
        },
        desc: ["前置或后置，值为front, back"],
        defaultValue: "back"
      },
      {
        name: "flash",
        type: {
          name: "string"
        },
        desc: ["闪光灯，值为auto, on, off"],
        defaultValue: "auto"
      },
      {
        name: "bindstop",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["摄像头在非正常终止时触发，如退出后台等情况"]
      },
      {
        name: "binderror",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["用户不允许使用摄像头时触发"]
      },
      {
        name: "bindscancode",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ['在成功识别到一维码时触发，仅在 mode="scanCode" 时生效'],
        since: "2.1.0"
      }
    ],
    relateApis: [
      {
        name: "wx.createCameraContext",
        link:
          "https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/wx.createCameraContext.html"
      }
    ],
    tips: [
      "请注意[原生组件使用限制](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html#原生组件的使用限制)。",
      "同一页面只能插入一个 `camera` 组件。"
    ],
    name: "camera",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html",
    since: "1.6.0",
    authorize: {
      name: "scope.camera",
      link:
        "https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html"
    }
  },
  {
    desc: [
      '实时音视频播放。该组件是[原生组件](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)，使用时请注意相关限制。\n\n暂只针对国内主体如下类目的小程序开放，需要先通过类目审核，再在小程序管理后台，“设置”-“接口设置”中自助开通该组件权限。\n\n{社交 => "直播"; 教育 => "在线教育"; 医疗 => "互联网医院，公立医院"; 政务民生 => "所有二级类目"; 金融 =\\> "基金、信托、保险、银行、证券/期货、非金融机构自营小额贷款、征信业务、消费金融"}'
    ],
    attrs: [
      {
        name: "src",
        type: {
          name: "string"
        },
        desc: ["音视频地址。目前仅支持 flv, rtmp 格式"]
      },
      {
        name: "mode",
        type: {
          name: "string"
        },
        desc: ["live（直播），RTC（实时通话）"],
        defaultValue: "live"
      },
      {
        name: "autoplay",
        type: {
          name: "boolean"
        },
        desc: ["自动播放"],
        defaultValue: "false"
      },
      {
        name: "muted",
        type: {
          name: "boolean"
        },
        desc: ["是否静音"],
        defaultValue: "false"
      },
      {
        name: "orientation",
        type: {
          name: "string"
        },
        desc: ["画面方向，可选值有 vertical，horizontal"],
        defaultValue: "vertical"
      },
      {
        name: "object-fit",
        type: {
          name: "string"
        },
        desc: ["填充模式，可选值有 contain，fillCrop"],
        defaultValue: "contain"
      },
      {
        name: "background-mute",
        type: {
          name: "boolean"
        },
        desc: ["进入后台时是否静音（已废弃，默认退台静音）"],
        defaultValue: "false"
      },
      {
        name: "min-cache",
        type: {
          name: "number"
        },
        desc: ["最小缓冲区，单位s"],
        defaultValue: "1"
      },
      {
        name: "max-cache",
        type: {
          name: "number"
        },
        desc: ["最大缓冲区，单位s"],
        defaultValue: "3"
      },
      {
        name: "bindstatechange",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "播放状态变化事件，detail = {code}",
          'code: {2001 => "已经连接服务器"; 2002 => "已经连接服务器,开始拉流"; 2003 => "网络接收到首个视频数据包(IDR)"; 2004 => "视频播放开始"; 2005 => "视频播放进度"; 2006 => "视频播放结束"; 2007 => "视频播放Loading"; 2008 => "解码器启动"; 2009 => "视频分辨率改变"; -2301 => "网络断连，且经多次重连抢救无效，更多重试请自行重启播放"; -2302 => "获取加速拉流地址失败"; 2101 => "当前视频帧解码失败"; 2102 => "当前音频帧解码失败"; 2103 => "网络断连, 已启动自动重连"; 2104 => "网络来包不稳：可能是下行带宽不足，或由于主播端出流不均匀"; 2105 => "当前视频播放出现卡顿"; 2106 => "硬解启动失败，采用软解"; 2107 => "当前视频帧不连续，可能丢帧"; 2108 => "当前流硬解第一个I帧失败，SDK自动切软解"; 3001 => "RTMP -DNS解析失败"; 3002 => "RTMP服务器连接失败"; 3003 => "RTMP服务器握手失败"; 3005 => "RTMP 读/写失败"}'
        ]
      },
      {
        name: "bindfullscreenchange",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["全屏变化事件，detail = {direction, fullScreen}"]
      },
      {
        name: "bindnetstatus",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "网络状态通知，detail = {info}",
          'info: {videoBitrate => "当前视频编/码器输出的比特率，单位 kbps"; audioBitrate => "当前音频编/码器输出的比特率，单位 kbps"; videoFPS => "当前视频帧率"; videoGOP => "当前视频 GOP,也就是每两个关键帧(I帧)间隔时长，单位 s"; netSpeed => "当前的发送/接收速度"; netJitter => "网络抖动情况，抖动越大，网络越不稳定"; videoWidth => "视频画面的宽度"; videoHeight => "视频画面的高度"}'
        ],
        since: "1.9.0"
      }
    ],
    notices: [
      "`<live-player />` 默认宽度300px、高度225px，可通过wxss设置宽高。",
      "开发者工具上暂不支持。",
      "相关api：[wx.createLivePlayerContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/wx.createLivePlayerContext.html)"
    ],
    tips: [
      "请注意[原生组件使用限制](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html#原生组件的使用限制)。"
    ],
    name: "live-player",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html",
    since: "1.7.0"
  },
  {
    desc: [
      '实时音视频录制。该组件是[原生组件](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)，使用时请注意相关限制。\n\n暂只针对国内主体如下类目的小程序开放，需要先通过类目审核，再在小程序管理后台，“设置”-“接口设置”中自助开通该组件权限。\n\n{社交 => "直播"; 教育 => "在线教育"; 医疗 => "互联网医院，公立医院"; 政务民生 => "所有二级类目"; 金融 =\\> "基金、信托、保险、银行、证券/期货、非金融机构自营小额贷款、征信业务、消费金融"}'
    ],
    attrs: [
      {
        name: "url",
        type: {
          name: "string"
        },
        desc: ["推流地址。目前仅支持 flv, rtmp 格式"]
      },
      {
        name: "mode",
        type: {
          name: "string"
        },
        desc: ["SD（标清）, HD（高清）, FHD（超清）, RTC（实时通话）"],
        defaultValue: "RTC"
      },
      {
        name: "autopush",
        type: {
          name: "boolean"
        },
        desc: ["自动推流"],
        defaultValue: "false"
      },
      {
        name: "muted",
        type: {
          name: "boolean"
        },
        desc: ["是否静音"],
        defaultValue: "false"
      },
      {
        name: "enable-camera",
        type: {
          name: "boolean"
        },
        desc: ["开启摄像头"],
        defaultValue: "true"
      },
      {
        name: "auto-focus",
        type: {
          name: "boolean"
        },
        desc: ["自动聚集"],
        defaultValue: "true"
      },
      {
        name: "orientation",
        type: {
          name: "string"
        },
        desc: ["vertical，horizontal"],
        defaultValue: "vertical"
      },
      {
        name: "beauty",
        type: {
          name: "number"
        },
        desc: ["美颜"],
        defaultValue: "0"
      },
      {
        name: "whiteness",
        type: {
          name: "number"
        },
        desc: ["美白"],
        defaultValue: "0"
      },
      {
        name: "aspect",
        type: {
          name: "string"
        },
        desc: ["宽高比，可选值有 3:4, 9:16"],
        defaultValue: "9:16"
      },
      {
        name: "min-bitrate",
        type: {
          name: "number"
        },
        desc: ["最小码率"],
        defaultValue: "200"
      },
      {
        name: "max-bitrate",
        type: {
          name: "number"
        },
        desc: ["最大码率"],
        defaultValue: "1000"
      },
      {
        name: "waiting-image",
        type: {
          name: "string"
        },
        desc: ["进入后台时推流的等待画面"]
      },
      {
        name: "waiting-image-hash",
        type: {
          name: "string"
        },
        desc: ["等待画面资源的MD5值"]
      },
      {
        name: "zoom",
        type: {
          name: "boolean"
        },
        desc: ["调整焦距"],
        since: "2.1.0",
        defaultValue: "false"
      },
      {
        name: "device-position",
        type: {
          name: "string"
        },
        desc: ["前置或后置，值为front, back"],
        since: "2.3.0",
        defaultValue: "front"
      },
      {
        name: "background-mute",
        type: {
          name: "boolean"
        },
        desc: ["进入后台时是否静音"],
        defaultValue: "false"
      },
      {
        name: "bindstatechange",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "状态变化事件，detail = {code}",
          'code: {1001 => "已经连接推流服务器"; 1002 => "已经与服务器握手完毕,开始推流"; 1003 => "打开摄像头成功"; 1004 => "录屏启动成功"; 1005 => "推流动态调整分辨率"; 1006 => "推流动态调整码率"; 1007 => "首帧画面采集完成"; 1008 => "编码器启动"; -1301 => "打开摄像头失败"; -1302 => "打开麦克风失败"; -1303 => "视频编码失败"; -1304 => "音频编码失败"; -1305 => "不支持的视频分辨率"; -1306 => "不支持的音频采样率"; -1307 => "网络断连，且经多次重连抢救无效，更多重试请自行重启推流"; -1308 => "开始录屏失败，可能是被用户拒绝"; -1309 => "录屏失败，不支持的Android系统版本，需要5.0以上的系统"; -1310 => "录屏被其他应用打断了"; -1311 => "Android Mic打开成功，但是录不到音频数据"; -1312 => "录屏动态切横竖屏失败"; 1101 => "网络状况不佳：上行带宽太小，上传数据受阻"; 1102 => "网络断连, 已启动自动重连"; 1103 => "硬编码启动失败,采用软编码"; 1104 => "视频编码失败"; 1105 => "新美颜软编码启动失败，采用老的软编码"; 1106 => "新美颜软编码启动失败，采用老的软编码"; 3001 => "RTMP -DNS解析失败"; 3002 => "RTMP服务器连接失败"; 3003 => "RTMP服务器握手失败"; 3004 => "RTMP服务器主动断开，请检查推流地址的合法性或防盗链有效期"; 3005 => "RTMP 读/写失败"}'
        ]
      },
      {
        name: "bindnetstatus",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "网络状态通知，detail = {info}",
          'info: {videoBitrate => "当前视频编/码器输出的比特率，单位 kbps"; audioBitrate => "当前音频编/码器输出的比特率，单位 kbps"; videoFPS => "当前视频帧率"; videoGOP => "当前视频 GOP,也就是每两个关键帧(I帧)间隔时长，单位 s"; netSpeed => "当前的发送/接收速度"; netJitter => "网络抖动情况，抖动越大，网络越不稳定"; videoWidth => "视频画面的宽度"; videoHeight => "视频画面的高度"}'
        ],
        since: "1.9.0"
      },
      {
        name: "binderror",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "渲染错误事件，detail = {errMsg, errCode}",
          'errCode: {10001 => "用户禁止使用摄像头"; 10002 => "用户禁止使用录音"}'
        ],
        since: "1.7.4"
      }
    ],
    notices: [
      "`<live-pusher />` 默认宽度为100%、无默认高度，请通过wxss设置宽高。",
      "开发者工具上暂不支持。",
      "相关api：[wx.createLivePusherContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/wx.createLivePusherContext.html)"
    ],
    tips: [
      "请注意[原生组件使用限制](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html#原生组件的使用限制)。",
      "`waiting-image` 属性在 2.3.0 起完整支持网络路径、临时文件和包内路径。"
    ],
    name: "live-pusher",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html",
    since: "1.7.0",
    authorize: {
      name: "scope.camera、scope.record",
      link:
        "https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html"
    }
  },
  {
    desc: [
      "地图。该组件是[原生组件](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)，使用时请注意相关限制。 个性化地图能力可在小程序后台“设置-开发者工具-腾讯位置服务”申请开通。 设置subkey后，小程序内的地图组件均会使用该底图效果，底图场景的切换会在后续版本提供。 详见[《小程序个性地图使用指南》](https://lbs.qq.com/product/miniapp/guide/)"
    ],
    attrs: [
      {
        name: "longitude",
        type: {
          name: "number"
        },
        desc: ["中心经度"]
      },
      {
        name: "latitude",
        type: {
          name: "number"
        },
        desc: ["中心纬度"]
      },
      {
        name: "scale",
        type: {
          name: "number"
        },
        desc: ["缩放级别，取值范围为5-18"],
        defaultValue: "16"
      },
      {
        name: "markers",
        type: {
          name: "Object",
          definitions: [
            {
              name: "id",
              type: {
                name: "number"
              },
              desc: ["标记点id"],
              required: false,
              notice:
                "marker点击事件回调会返回此id。**建议为每个marker设置上Number类型id，保证更新marker时有更好的性能。**"
            },
            {
              name: "latitude",
              type: {
                name: "number"
              },
              desc: ["纬度"],
              required: true,
              notice: "浮点数，范围 -90 ~ 90"
            },
            {
              name: "longitude",
              type: {
                name: "number"
              },
              desc: ["经度"],
              required: true,
              notice: "浮点数，范围 -180 ~ 180"
            },
            {
              name: "title",
              type: {
                name: "string"
              },
              desc: ["标注点名"],
              required: false
            },
            {
              name: "z-index",
              type: {
                name: "number"
              },
              desc: ["显示层级"],
              required: false,
              since: "2.3.0"
            },
            {
              name: "icon-path",
              type: {
                name: "string"
              },
              desc: ["显示的图标"],
              required: true,
              notice:
                "项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对小程序根目录；也支持临时路径和网络图片（[2.3.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html \"基础库 2.3.0 开始支持，低版本需做兼容处理。\")）"
            },
            {
              name: "rotate",
              type: {
                name: "number"
              },
              desc: ["旋转角度"],
              required: false,
              notice: "顺时针旋转的角度，范围 0 ~ 360，默认为 0"
            },
            {
              name: "alpha",
              type: {
                name: "number"
              },
              desc: ["标注的透明度"],
              required: false,
              notice: "默认1，无透明，范围 0 ~ 1"
            },
            {
              name: "width",
              type: {
                name: "number"
              },
              desc: ["标注图标宽度"],
              required: false,
              notice: "默认为图片实际宽度"
            },
            {
              name: "height",
              type: {
                name: "number"
              },
              desc: ["标注图标高度"],
              required: false,
              notice: "默认为图片实际高度"
            },
            {
              name: "callout",
              type: {
                name: "Object",
                definitions: [
                  {
                    name: "content",
                    type: {
                      name: "string"
                    },
                    desc: ["文本"],
                    since: "1.2.0"
                  },
                  {
                    name: "color",
                    type: {
                      name: "string"
                    },
                    desc: ["文本颜色"],
                    since: "1.2.0"
                  },
                  {
                    name: "font-size",
                    type: {
                      name: "number"
                    },
                    desc: ["文字大小"],
                    since: "1.2.0"
                  },
                  {
                    name: "border-radius",
                    type: {
                      name: "number"
                    },
                    desc: ["边框圆角"],
                    since: "1.2.0"
                  },
                  {
                    name: "border-midth",
                    type: {
                      name: "number"
                    },
                    desc: ["边框宽度"],
                    since: "2.3.0"
                  },
                  {
                    name: "border-color",
                    type: {
                      name: "string"
                    },
                    desc: ["边框颜色"],
                    since: "2.3.0"
                  },
                  {
                    name: "bg-color",
                    type: {
                      name: "string"
                    },
                    desc: ["背景色"],
                    since: "1.2.0"
                  },
                  {
                    name: "padding",
                    type: {
                      name: "number"
                    },
                    desc: ["文本边缘留白"],
                    since: "1.2.0"
                  },
                  {
                    name: "display",
                    type: {
                      name: "string"
                    },
                    desc: ["'BYCLICK':点击显示; 'ALWAYS':常显"],
                    since: "1.2.0"
                  },
                  {
                    name: "text-align",
                    type: {
                      name: "string"
                    },
                    desc: ["文本对齐方式。有效值: left, right, center"],
                    since: "1.6.0"
                  }
                ]
              },
              desc: ["自定义标记点上方的气泡窗口"],
              required: false,
              notice: "支持的属性见下表，可识别换行符。",
              since: "1.2.0"
            },
            {
              name: "label",
              type: {
                name: "Object",
                definitions: [
                  {
                    name: "content",
                    type: {
                      name: "string"
                    },
                    desc: ["文本"],
                    since: "1.2.0"
                  },
                  {
                    name: "color",
                    type: {
                      name: "string"
                    },
                    desc: ["文本颜色"],
                    since: "1.2.0"
                  },
                  {
                    name: "font-size",
                    type: {
                      name: "number"
                    },
                    desc: ["文字大小"],
                    since: "1.2.0"
                  },
                  {
                    name: "x",
                    type: {
                      name: "number"
                    },
                    desc: ["label的坐标（废弃）"],
                    since: "1.2.0"
                  },
                  {
                    name: "y",
                    type: {
                      name: "number"
                    },
                    desc: ["label的坐标（废弃）"],
                    since: "1.2.0"
                  },
                  {
                    name: "anchor-x",
                    type: {
                      name: "number"
                    },
                    desc: ["label的坐标，原点是 marker 对应的经纬度"],
                    since: "2.1.0"
                  },
                  {
                    name: "anchor-y",
                    type: {
                      name: "number"
                    },
                    desc: ["label的坐标，原点是 marker 对应的经纬度"],
                    since: "2.1.0"
                  },
                  {
                    name: "border-width",
                    type: {
                      name: "number"
                    },
                    desc: ["边框宽度"],
                    since: "1.6.0"
                  },
                  {
                    name: "border-color",
                    type: {
                      name: "string"
                    },
                    desc: ["边框颜色"],
                    since: "1.6.0"
                  },
                  {
                    name: "border-radius",
                    type: {
                      name: "number"
                    },
                    desc: ["边框圆角"],
                    since: "1.6.0"
                  },
                  {
                    name: "bg-rolor",
                    type: {
                      name: "string"
                    },
                    desc: ["背景色"],
                    since: "1.6.0"
                  },
                  {
                    name: "padding",
                    type: {
                      name: "number"
                    },
                    desc: ["文本边缘留白"],
                    since: "1.6.0"
                  },
                  {
                    name: "text-align",
                    type: {
                      name: "string"
                    },
                    desc: ["文本对齐方式。有效值: left, right, center"],
                    since: "1.6.0"
                  }
                ]
              },
              desc: ["为标记点旁边增加标签"],
              required: false,
              notice: "支持的属性见下表，可识别换行符。",
              since: "1.2.0"
            },
            {
              name: "anchor",
              type: {
                name: "Object"
              },
              desc: ["经纬度在标注图标的锚点，默认底边中点"],
              required: false,
              notice:
                "{x, y}，x表示横向(0-1)，y表示竖向(0-1)。{x: .5, y: 1} 表示底边中点",
              since: "1.2.0"
            }
          ]
        },
        desc: ["标记点"]
      },
      {
        name: "covers",
        type: {
          name: "any[]"
        },
        desc: ["**即将移除，请使用 markers**"]
      },
      {
        name: "polyline",
        type: {
          name: "Object",
          definitions: [
            {
              name: "points",
              type: {
                name: "any[]"
              },
              desc: ["经纬度数组"],
              required: true,
              notice: "[{latitude: 0, longitude: 0}]"
            },
            {
              name: "color",
              type: {
                name: "string"
              },
              desc: ["线的颜色"],
              required: false,
              notice: "8位十六进制表示，后两位表示alpha值，如：#000000AA"
            },
            {
              name: "width",
              type: {
                name: "number"
              },
              desc: ["线的宽度"],
              required: false
            },
            {
              name: "dotted-line",
              type: {
                name: "boolean"
              },
              desc: ["是否虚线"],
              required: false,
              notice: "默认false"
            },
            {
              name: "arrow-line",
              type: {
                name: "boolean"
              },
              desc: ["带箭头的线"],
              required: false,
              notice: "默认false，开发者工具暂不支持该属性",
              since: "1.2.0"
            },
            {
              name: "arrow-icon-path",
              type: {
                name: "string"
              },
              desc: ["更换箭头图标"],
              required: false,
              notice: "在arrowLine为true时生效",
              since: "1.6.0"
            },
            {
              name: "border-color",
              type: {
                name: "string"
              },
              desc: ["线的边框颜色"],
              required: false,
              since: "1.2.0"
            },
            {
              name: "border-width",
              type: {
                name: "number"
              },
              desc: ["线的厚度"],
              required: false,
              since: "1.2.0"
            }
          ]
        },
        desc: ["路线"]
      },
      {
        name: "polygons",
        type: {
          name: "Object",
          definitions: [
            {
              name: "points",
              type: {
                name: "any[]"
              },
              desc: ["经纬度数组"],
              required: true,
              notice: "[{latitude: 0, longitude: 0}]"
            },
            {
              name: "stroke-width",
              type: {
                name: "number"
              },
              desc: ["描边的宽度"],
              required: false
            },
            {
              name: "stroke-color",
              type: {
                name: "string"
              },
              desc: ["描边的颜色"],
              required: false,
              notice: "8位十六进制表示，后两位表示alpha值，如：#000000AA"
            },
            {
              name: "fill-color",
              type: {
                name: "string"
              },
              desc: ["填充颜色"],
              required: false,
              notice: "8位十六进制表示，后两位表示alpha值，如：#000000AA"
            },
            {
              name: "z-index",
              type: {
                name: "number"
              },
              desc: ["设置多边形Z轴数值"],
              required: false
            }
          ]
        },
        desc: ["多边形"],
        since: "2.3.0"
      },
      {
        name: "circles",
        type: {
          name: "Object",
          definitions: [
            {
              name: "latitude",
              type: {
                name: "number"
              },
              desc: ["纬度"],
              required: true,
              notice: "浮点数，范围 -90 ~ 90"
            },
            {
              name: "longitude",
              type: {
                name: "number"
              },
              desc: ["经度"],
              required: true,
              notice: "浮点数，范围 -180 ~ 180"
            },
            {
              name: "color",
              type: {
                name: "string"
              },
              desc: ["描边的颜色"],
              required: false,
              notice: "8位十六进制表示，后两位表示alpha值，如：#000000AA"
            },
            {
              name: "fill-color",
              type: {
                name: "string"
              },
              desc: ["填充颜色"],
              required: false,
              notice: "8位十六进制表示，后两位表示alpha值，如：#000000AA"
            },
            {
              name: "radius",
              type: {
                name: "number"
              },
              desc: ["半径"],
              required: true
            },
            {
              name: "stroke-width",
              type: {
                name: "number"
              },
              desc: ["描边的宽度"],
              required: false
            }
          ]
        },
        desc: ["圆"]
      },
      {
        name: "controls",
        type: {
          name: "Object",
          definitions: [
            {
              name: "id",
              type: {
                name: "number"
              },
              desc: ["控件id"],
              required: false,
              notice: "在控件点击事件回调会返回此id"
            },
            {
              name: "position",
              type: {
                name: "Object",
                definitions: [
                  {
                    name: "left",
                    type: {
                      name: "number"
                    },
                    desc: ["距离地图的左边界多远"],
                    required: false,
                    notice: "默认为0"
                  },
                  {
                    name: "top",
                    type: {
                      name: "number"
                    },
                    desc: ["距离地图的上边界多远"],
                    required: false,
                    notice: "默认为0"
                  },
                  {
                    name: "width",
                    type: {
                      name: "number"
                    },
                    desc: ["控件宽度"],
                    required: false,
                    notice: "默认为图片宽度"
                  },
                  {
                    name: "height",
                    type: {
                      name: "number"
                    },
                    desc: ["控件高度"],
                    required: false,
                    notice: "默认为图片高度"
                  }
                ]
              },
              desc: ["控件在地图的位置"],
              required: true,
              notice: "控件相对地图位置"
            },
            {
              name: "icon-path",
              type: {
                name: "string"
              },
              desc: ["显示的图标"],
              required: true,
              notice:
                "项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对小程序根目录；也支持临时路径"
            },
            {
              name: "clickable",
              type: {
                name: "boolean"
              },
              desc: ["是否可点击"],
              required: false,
              notice: "默认不可点击"
            }
          ]
        },
        desc: [
          "控件（即将废弃，建议使用 [cover-view](https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html) 代替）"
        ]
      },
      {
        name: "include-points",
        type: {
          name: "any[]"
        },
        desc: ["缩放视野以包含所有给定的坐标点"]
      },
      {
        name: "show-location",
        type: {
          name: "boolean"
        },
        desc: ["显示带有方向的当前定位点"]
      },
      {
        name: "subkey",
        type: {
          name: "string"
        },
        desc: ["个性化地图使用的key，仅初始化地图时有效"],
        since: "2.3.0",
        defaultValue: "''"
      },
      {
        name: "enable-3D",
        type: {
          name: "boolean"
        },
        desc: ["展示3D楼块(工具暂不支持）"],
        since: "2.3.0",
        defaultValue: "false"
      },
      {
        name: "show-compass",
        type: {
          name: "boolean"
        },
        desc: ["显示指南针"],
        since: "2.3.0",
        defaultValue: "false"
      },
      {
        name: "enable-overlooking",
        type: {
          name: "boolean"
        },
        desc: ["开启俯视"],
        since: "2.3.0",
        defaultValue: "false"
      },
      {
        name: "enable-zoom",
        type: {
          name: "boolean"
        },
        desc: ["是否支持缩放"],
        since: "2.3.0",
        defaultValue: "true"
      },
      {
        name: "enable-scroll",
        type: {
          name: "boolean"
        },
        desc: ["是否支持拖动"],
        since: "2.3.0",
        defaultValue: "true"
      },
      {
        name: "enable-rotate",
        type: {
          name: "boolean"
        },
        desc: ["是否支持旋转"],
        since: "2.3.0",
        defaultValue: "false"
      },
      {
        name: "bindmarkertap",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["点击标记点时触发，会返回marker的id"]
      },
      {
        name: "bindcallouttap",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["点击标记点对应的气泡时触发，会返回marker的id"],
        since: "1.2.0"
      },
      {
        name: "bindcontroltap",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["点击控件时触发，会返回control的id"]
      },
      {
        name: "bindregionchange",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["视野发生变化时触发"],
        since:
          '[2.3.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html "基础库 2.3.0 开始支持，低版本需做兼容处理。")起增加`causedBy` 参数区分拖动、缩放和调用接口等来源'
      },
      {
        name: "bindtap",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["点击地图时触发"]
      },
      {
        name: "bindupdated",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["在地图渲染更新完成时触发"],
        since: "1.6.0"
      },
      {
        name: "bindpoitap",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["点击地图poi点时触发"],
        since: "2.3.0"
      }
    ],
    relateApis: [
      {
        name: "wx.createMapContext",
        link:
          "https://developers.weixin.qq.com/miniprogram/dev/api/map/wx.createMapContext.html"
      }
    ],
    notices: ["covers 属性即将移除，请使用 markers 替代"],
    tips: [
      "请注意[原生组件使用限制](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html#原生组件的使用限制)。",
      "`map` 组件使用的经纬度是火星坐标系，调用 `wx.getLocation` 接口需要指定 `type` 为 `gcj02`"
    ],
    name: "map",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
  },
  {
    desc: [
      "画布。该组件是[原生组件](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)，使用时请注意相关限制。"
    ],
    attrs: [
      {
        name: "canvas-id",
        type: {
          name: "string"
        },
        desc: ["canvas 组件的唯一标识符"]
      },
      {
        name: "disable-scroll",
        type: {
          name: "boolean"
        },
        desc: [
          "当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新"
        ],
        defaultValue: "false"
      },
      {
        name: "bindtouchstart",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["手指触摸动作开始"]
      },
      {
        name: "bindtouchmove",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["手指触摸后移动"]
      },
      {
        name: "bindtouchend",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["手指触摸动作结束"]
      },
      {
        name: "bindtouchcancel",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["手指触摸动作被打断，如来电提醒，弹窗"]
      },
      {
        name: "bindlongtap",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动"
        ]
      },
      {
        name: "binderror",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "当发生错误时触发 error 事件，detail = {errMsg: 'something wrong'}"
        ]
      }
    ],
    relateApis: [
      {
        name: "wx.createCanvasContext",
        link:
          "https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createCanvasContext.html"
      }
    ],
    tips: [
      "请注意[原生组件使用限制](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html#原生组件的使用限制)。"
    ],
    bugs: ["避免设置过大的宽高，在安卓下会有crash的问题"],
    name: "canvas",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"
  },
  {
    desc: ["用于展示微信开放的数据。"],
    attrs: [
      {
        enum: [
          {
            value: "groupName",
            desc: "拉取群名称",
            since: "1.4.0"
          },
          {
            value: "userNickName",
            desc: "用户昵称",
            since: "1.9.90"
          },
          {
            value: "userAvatarUrl",
            desc: "用户头像",
            since: "1.9.90"
          },
          {
            value: "userGender",
            desc: "用户性别",
            since: "1.9.90"
          },
          {
            value: "userCity",
            desc: "用户所在城市",
            since: "1.9.90"
          },
          {
            value: "userProvince",
            desc: "用户所在省份",
            since: "1.9.90"
          },
          {
            value: "userCountry",
            desc: "用户所在国家",
            since: "1.9.90"
          },
          {
            value: "userLanguage",
            desc: "用户的语言",
            since: "1.9.90"
          }
        ],
        name: "type",
        type: {
          name: "string"
        },
        desc: ["开放数据类型"]
      },
      {
        name: "open-gid",
        type: {
          name: "string"
        },
        desc: ['当 type="groupName" 时生效, 群id']
      },
      {
        name: "lang",
        type: {
          name: "string"
        },
        desc: [
          '当 type="user*" 时生效，以哪种语言展示 userInfo，有效值有：en, zh_CN, zh_TW'
        ],
        defaultValue: "en"
      }
    ],
    tips: [" 只有当前用户在此群内才能拉取到群名称"],
    name: "open-data",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html",
    since: "1.4.0"
  },
  {
    desc: [
      "web-view 组件是一个可以用来承载网页的容器，会自动铺满整个小程序页面。**个人类型与海外类型的小程序暂不支持使用。**"
    ],
    attrs: [
      {
        name: "src",
        type: {
          name: "string"
        },
        desc: [
          "webview 指向网页的链接。可打开关联的公众号的文章，其它网页需登录[小程序管理后台](https://mp.weixin.qq.com/)配置业务域名。"
        ]
      },
      {
        name: "bindmessage",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "网页向小程序 postMessage 时，会在特定时机（小程序后退、组件销毁、分享）触发并收到消息。e.detail = { data }"
        ]
      },
      {
        name: "bindload",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["网页加载成功时候触发此事件。e.detail = { src }"]
      },
      {
        name: "binderror",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["网页加载失败的时候触发此事件。e.detail = { src }"]
      }
    ],
    tips: [
      "网页内iframe的域名也需要配置到域名白名单。",
      "开发者工具上，可以在 `<web-view/>` 组件上通过右键 \\- 调试，打开 `<web-view/>` 组件的调试。",
      "每个页面只能有一个`<web-view/>`，`<web-view/>`会自动铺满整个页面，并覆盖其他组件。",
      "`<web-view/>`网页与小程序之间不支持除JSSDK提供的接口之外的通信。",
      "在iOS中，若存在JSSDK接口调用无响应的情况，可在`<web-view/>`的src后面加个#wechat_redirect解决。"
    ],
    name: "web-view",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html",
    since: "1.6.4"
  },
  {
    desc: ["广告。**目前暂时以邀请制开放申请，请留意后续模板消息的通知**"],
    attrs: [
      {
        name: "unit-id",
        type: {
          name: "string"
        },
        desc: [
          "广告单元id，可在[小程序管理后台](https://mp.weixin.qq.com)的流量主模块新建"
        ]
      },
      {
        name: "bindload",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: ["广告加载成功的回调"],
        since: "2.2.1"
      },
      {
        name: "binderror",
        type: {
          name: "function",
          returns: {
            name: "any"
          }
        },
        desc: [
          "当广告发生错误时，触发的事件，可以通过该事件获取错误码及原因，事件对象event.detail = {errCode: 1002}"
        ],
        since: "2.2.1"
      }
    ],
    notices: [
      "监听到error回调后，开发者可以针对性的处理，比如隐藏广告组件的父容器，以保证用户体验，但不要移除广告组件，否则将无法收到bindload的回调。"
    ],
    name: "ad",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/ad.html",
    since: "1.9.94"
  },
  {
    desc: [
      "用户扫码打开小程序时，开发者可在小程序内配置公众号关注组件，方便用户快捷关注公众号，可嵌套在原生组件内。"
    ],
    tips: [
      "使用组件前，需前往小程序后台，在“设置”->“接口设置”->“公众号关注组件”中设置要展示的公众号。 **注：设置的公众号需与小程序主体一致。**",
      "在一个小程序的生命周期内，只有从以下场景进入小程序，才具有展示引导关注公众号组件的能力:\n\n*   当小程序从扫二维码场景（场景值1011）打开时\n*   当小程序从扫小程序码场景（场景值1047）打开时\n*   当小程序从聊天顶部场景（场景值1089）中的“最近使用”内打开时，若小程序之前未被销毁，则该组件保持上一次打开小程序时的状态\n*   当从其他小程序返回小程序（场景值1038）时，若小程序之前未被销毁，则该组件保持上一次打开小程序时的状态",
      "当小程序从扫二维码场景（场景值1011）打开时",
      "当小程序从扫小程序码场景（场景值1047）打开时",
      "当小程序从聊天顶部场景（场景值1089）中的“最近使用”内打开时，若小程序之前未被销毁，则该组件保持上一次打开小程序时的状态",
      "当从其他小程序返回小程序（场景值1038）时，若小程序之前未被销毁，则该组件保持上一次打开小程序时的状态",
      "每个页面只能配置一个该组件。"
    ],
    name: "official-account",
    docLink:
      "https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html",
    since: "2.3.0"
  },
  {
    desc: ["用于承载组件使用者提供的wxml结构"],
    attrs: [
      {
        name: "name",
        type: {
          name: "string"
        }
      }
    ],
    name: "slot",
    docLink:
      "https://mp.weixin.qq.com/debug/wxadoc/dev/framework/custom-component/wxml-wxss.html#%E7%BB%84%E4%BB%B6wxml%E7%9A%84slot"
  },
  {
    attrs: [
      {
        name: "name",
        type: {
          name: "string"
        }
      },
      {
        name: "is",
        type: {
          name: "string"
        }
      },
      {
        name: "data",
        type: {
          name: "any"
        }
      }
    ],
    name: "template",
    docLink:
      "https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/template.html"
  },
  {
    name: "block",
    docLink:
      "https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/conditional.html#block-wxif"
  },
  {
    desc: [
      "import 有作用域的概念，即只会 import 目标文件中定义的 template，而不会 import 目标文件 import 的 template"
    ],
    attrs: [
      {
        name: "src",
        type: {
          name: "string"
        }
      }
    ],
    name: "import",
    docLink:
      "https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/import.html#import"
  },
  {
    desc: [
      "include 可以将目标文件除了 <template/> <wxs/> 外的整个代码引入，相当于是拷贝到 include 位置"
    ],
    attrs: [
      {
        name: "src",
        type: {
          name: "string"
        }
      }
    ],
    name: "include",
    docLink:
      "https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/import.html#include"
  }
];
