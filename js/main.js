'use strict';
    
var vm = new Vue({
    el: "#app",
    data: {
        //v-modelで付与した名前に対しての状態をここで設定できる。
        name: "asada",
        newTodo: '',
        secondTodo:'',
        changeTodo:'',
        result:[],
        todos: [
            'task1',
            'task2',
            'task3'
        ]
    },
    methods: {
        addTodo: function (event) {
            event.preventDefault();
            this.todos.push(this.newTodo+this.secondTodo);
            this.newTodo = '';
            this.secondTodo = '';
        },
        deleteTodo: function (index) {
            //indexには配列で展開された際にindexに入っている値（ここでは数字、添字）が入っている。
                this.todos.splice(index,1);
        },
        searchTodo: function () {
            event.preventDefault();
            this.result.splice(0);
            console.log(this.result);
            this.todos.forEach(item => {
                console.log(item);
                if (item == this.changeTodo) {
                    this.result.push(this.changeTodo);
                }
            })

        }
    }
})