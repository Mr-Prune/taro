##### CheckboxGroup
##### 多项选择器，内部由多个 checkbox 组成。

> 属性及支持度

|     | 属性名 | 类型 | 默认值 | 说明 |
| --- | ---   | ---- | ---   | ---- |
| √ | onChange | EventHandle |   | <CheckboxGroup/>中选中项发生改变是触发 change 事件，detail = value:[选中的 Checkbox 的 value 的数组] |

##### Checkbox
##### 多选项目。∂∂∂∂

> 属性及支持度

|     | 属性名 | 类型 | 默认值 | 说明 |
| --- | ---| --- | --- | ---- |
| √ | value      | String      |   | <Checkbox/>标识，选中时触发<CheckboxGroup/>的 change 事件，并携带 <checkbox/> 的 value |
| √ | checked    | Boolean     | false  | 当前是否选中   |
| √ | disabled   | Boolean     | false  | 是否禁用   |
| √ | color      | Color       |   | checkbox 的颜色，同 css 的 color       |
| √ | onChange | EventHandle |  | 选中项发生变化时触发 change 事件       |

