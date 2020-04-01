import Picker from "../components/Picker.vue";
let plugin = {};
plugin.install=function(Vue){
    Vue.component(Picker.name,Picker)
}
export default plugin
