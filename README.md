# package

## Project setup
```
npm install package-time
```

### Compiles and hot-reloads for development
```
npm run serve
```
### package-time的使用
```
引入css样式  import "../node_modules/package-time/lib/package-time.css"
import vuePicker from "package-time";
Vue.use(vuePicker);
```
### package-time在组件中使用
```
<vuePicker :color="color"  v-model="deliveryTime"  />
color 选中状态的颜色
deliveryTime 当前选中的值
```