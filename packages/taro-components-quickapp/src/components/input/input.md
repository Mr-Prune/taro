### input
input组件

### Props
| 名称 | 类型 | 默认值 | 必填 | 描述 |
|  -  | - | - |  - | - | 
| type | button、checkbo、radio 、text 、email 、date 、time 、number 、password | text | 否 | 不支持动态修改 |
| checked | boolean | false |  否 |当前组件的checked状态，可触发checked伪类，type为checkbox时生效 |
| name | string | - |  否 | input组件名称 |
| value | string | - |  否 | input组件的值 |
| placeholder | string | - |  否 | 提示文本的内容，type为text|email|date|time时生效 |
| maxlength | number | false |  否 | 组件可接收用户输入字符的最大长度  |
| enterkeytype | default、send 、search、next、go、done | default |  否 | 设置软键盘Enter按钮的显示文本或图标． |
