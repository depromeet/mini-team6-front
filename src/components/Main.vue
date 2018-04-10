<template>
<div>
    <profile></profile>
    <money></money>
    <list></list>
    <img src="../assets/footer.png"/>
</div>
</template>

<script type="text/javascript">
import Profile from './Profile.vue'
import Money from './Money.vue'
import List from './List.vue'

export default {
    components: { Profile, Money, List}
}
</script>
