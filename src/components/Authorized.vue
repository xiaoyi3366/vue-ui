
<script>
import { check } from '../utils/auth'
export default {
    functional: true,
    props: {
        authority: {
            type: Array,
            required: true
        }
    },
    render(h,context) {// render函数书写函数试组件，全局注册，在main.js中
        const { props, scopedSlots } = context;
        return check(props.authority) ? scopedSlots.default():null
    }
}
</script>

<style>

</style>
