const app = Vue.createApp({
    data(){
        return{
            name: "Naing Phyo Tun",
            age : 15,
            profile: "../images/user.webp",
            para: '<span style="color: red;">This is a Text.</span>',
            seen: true,
            mark: 30,
            students: [
                {name: "Mg Mg", age: 15, gendle:"Male"},
                {name: "Ma Ma", age: 16, gendle:"Female"},
                {name: "Aung Aung", age: 17, gendle:"Male"}
            ],
            username: "",
        }
    },
    methods:{
        reverse(){
            this.name = this.name.split('').reverse().join('')
        }
    },
    computed:{
        girls(){
            return this.students.filter(row => row.gendle=="Female")
        },
        boys(){
            return this.students.filter(row => row.gendle=="Male")
        }
    }
})