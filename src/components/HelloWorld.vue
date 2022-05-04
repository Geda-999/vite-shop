<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div>
            <button class="bg-bootstrap_primary px-6 py-2 rounded" @click="show('list')">A页面</button>
            <button class=" bg-pink-500 px-6 py-2 rounded" @click="show('shop')">B页面</button>

        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    methods: {
        show(index) {
            if (index == 'list') {
                this.$router.push('/list')
            }
            if (index == 'shop') {
                this.$router.push('/shop')
            }

        }
    }
}
</script>
