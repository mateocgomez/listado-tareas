var data = {
    tareas: [{
        texto: 'Aprender Vue.js',
        terminada: false
    }],
    nuevaTarea: ''
}

Vue.component('titulo', {
    template: '<h1>{{titulo}} 👨🏻‍💻</h1>',
    data: () => {
        return {
            titulo: 'Listado de Tareas'
        }
    }
})

Vue.component('nueva-tarea', {
    template: `
        <div class="input-group">
            <input @keyup.enter="agregarTarea" class="form-control" type="text" placeholder="Añadir la nueva tarea" v-model="nuevaTarea">
            <span class="input-group-btn">
                <button type="button" @click="agregarTarea()" class="btn btn-primary">Agregar tarea 💻  </button>
            </span>
        </div>
    `,
    data: () => {
        return this.data;
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
        }
    }
})

Vue.component('lista-tareas', {
    template: `       
    <ul class="list-group mt-4">
    <li v-for="(tarea,indice) in tareas" class="list-group-item" :class="{terminada: tarea.terminada}">
        {{tarea.texto}}
        <span class="float-right">
            <button type="button" class="btn btn-xs btn-success "
            @click="tarea.terminada = !tarea.terminada"
            >👍🏼 </button>
            <span class="float-right">
                <button type="button" class="btn btn-xs btn-danger ml-3 "
                @click="borrar(indice)"
            >☠️ </button>
        </span>
    </li>
    </ul>`,
    data: () => {
        return data
    },
    methods: {
        borrar: function(indice) {
            this.tareas.splice(indice, 1);
        }
    }
})


var app = new Vue({
    el: '#app',
    data: data
})