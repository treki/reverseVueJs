const app = {
    data(){
        return{
            message: "I'm awesome!"
        }
    },
    methods: {
        reverseMe: function(){
            this.message = this.message
            .split('').reverse().join('')
        }
    }
}

Vue.createApp(app).mount('#app')