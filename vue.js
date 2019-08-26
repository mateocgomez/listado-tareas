var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Listado de Tareas',
        tareas: [{
            texto: 'Aprender Vue.js',
            terminada: false
        }, ],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea: function() {
            var texto = this.nuevaTarea.trim();
            if (texto) {
                this.tareas.push({
                    texto: texto,
                    terminada: false
                })
            }
            this.nuevaTarea = '';
        },
        borrar: function(indice) {
            this.tareas.splice(indice, 1);
        }
    },
})