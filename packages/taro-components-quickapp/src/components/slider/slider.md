## slider

### 滑动选择器。
> 属性及支持度

|     | 属性名 | 类型 | 默认值 | 说明 |
| --- | ---   | ---- | ---   | --- |
| √ | min             | Number      | 0       | 最小值 |
| √ | max             | Number      | 100     | 最大值 |
| √ | step            | Number      | 1       | 步长，取值必须大于 0，并且可被(max - min)整除 |
| √ | disabled        | Boolean     | false   | 是否禁用   |
| √ | value           | Number      | 0       | 当前取值   |
| x | color           | Color       | #e9e9e9 | 背景条的颜色（请使用 backgroundColor）        |
| x | selectedColor  | Color       | #1aad19 | 已选择的颜色（请使用 activeColor）            |
| √ | activeColor     | Color       | #1aad19 | 已选择的颜色    |
| √ | backgroundColor | Color       | #e9e9e9 | 背景条的颜色    |
| x | blockSize      | Number      | 28      | 滑块的大小，取值范围为 12 - 28 |
| x | blockColor     | Color       | #ffffff | 滑块的颜色 |
| √ | showValue      | Boolean     | false   | 是否显示当前 value  |
| √ | onChange      | EventHandle |         | 完成一次拖动后触发的事件 |
| √ | onChanging    | EventHandle |         | 拖动过程中触发的事件|
