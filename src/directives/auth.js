// directives存放指令的文件夹
// 指令式权限控制有弊端，他只能在第一次时有效。如果身份是动态加载的，可以改动的，会不生效
import { check } from "../utils/auth"
function install(Vue, options = {}) {
    Vue.directive(options.name || "auth", {
        inserted(el,binding) {
            if (!check(binding.value)) {
                el.parentNode && el.parentNode.removeChild(el)
            }
        }
    })
}
export default { install }