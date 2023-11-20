# Plantillas

En este apartado crearemos las plantillas necesarias para hacer un CRUD tipo Tareas.


## Configuración

Para configuración necesitará algo como lo siguiente.

`.env`
```sh
DB_DATABASE=crud_todo_db
## omitted for brevity ...

PATH_USER=/home/username/crud-todo
PATH_BACKEND=api-laravel
PATH_BACKEND_ROOT=app
PATH_FRONTEND=spa-vue
PATH_FRONTEND_ROOT=src
PATH_MODULE=

CRUD_SCHEMA=public
CRUD_TABLE_MASTER=tasks
CRUD_TABLE_MASTER_IS_HELPER=FALSE
CRUD_STACK_BACKEND=my-backend-example
CRUD_STACK_FRONTEND=my-frontend-example
## omitted for brevity ...
```

Empezaremos por las plantillas del **Backend**.


## `stack/my-backend-example`

Para el lado del _backend_ esta será la plantilla del **route**.

`./src/stack/my-backend-example/templates/route`
```txt
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\<%= fn.uCamelCase(fn.singular(tableMaster)); %>Controller;

Route::prefix('<%= tableMaster; %>')->group(function () {
    Route::get('/', [<%= fn.uCamelCase(fn.singular(tableMaster)); %>Controller::class, 'index']);
    Route::get('/{<%= fn.singular(tableMaster); %>}', [<%= fn.uCamelCase(fn.singular(tableMaster)); %>Controller::class, 'show']); 
    Route::post('/', [<%= fn.uCamelCase(fn.singular(tableMaster)); %>Controller::class, 'store']);
    Route::put('/{<%= fn.singular(tableMaster); %>}', [<%= fn.uCamelCase(fn.singular(tableMaster)); %>Controller::class, 'update']);
    Route::delete('/{<%= fn.singular(tableMaster); %>}', [<%= fn.uCamelCase(fn.singular(tableMaster)); %>Controller::class,'destroy']);
});
```

Esta plantilla deberá generar el siguiente archivo.

`/home/username/crud-todo/api-laravel/app/Routes/apiTask.php`
```php
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

Route::prefix('tasks')->group(function () {
    Route::get('/', [TaskController::class, 'index']);
    Route::get('/{task}', [TaskController::class, 'show']); 
    Route::post('/', [TaskController::class, 'store']);
    Route::put('/{task}', [TaskController::class, 'update']);
    Route::delete('/{task}', [TaskController::class,'destroy']);
});
```

Tome en cuenta que las rutas es el único código que deberá cortar y pegar respectivamente en el lugar que corresponde. Es decir que, debe actualizar su correspondiente archivo `/home/username/crud-todo/api-laravel/routes/api.php` con el código anterior.

---

Continuamos con el **modelo**. Este será el respectivo archivo.

`./src/stack/my-backend-example/templates/model`
```txt
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class <%= fn.uCamelCase(fn.singular(tableMaster)); %> extends Model
{
    use HasFactory, SoftDeletes;
    
    protected $fillable = [<%
        tableStructure.forEach(function(field, index) {
        if  (fn.v.noIdAndExcludeFields(field.column_name)) { %>
        '<%= field.column_name; %>'<%= fn.addCommaToArr(tableStructure, index, 0) -%><%
        }}); %>
    ];
}
```

Esta plantilla deberá generar el siguiente archivo.

`/home/username/crud-todo/api-laravel/app/Models/Task.php`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
    use HasFactory, SoftDeletes;
    
    protected $fillable = [
        'title', 
        'description', 
        'done'
    ];
}
```

---

Concluimos el _backend_ con el **controlador**. Esta será el respectivo archivo de plantilla.

`./src/stack/my-backend-example/templates/controller`
```txt
<?php

namespace App\Http\Controllers;

use App\Models\<%= fn.uCamelCase(fn.singular(tableMaster)); %>;
use Illuminate\Http\Request;
use \Illuminate\Http\JsonResponse;

class <%= fn.uCamelCase(fn.singular(tableMaster)); %>Controller extends Controller
{
    /** Display a listing of the resource. */
    public function index(): Array
    {
        $<%= tableMaster; %> = <%= fn.uCamelCase(fn.singular(tableMaster)); %>::all()->toArray();
        return array_reverse($<%= tableMaster; %>);
    }

    /** Store a newly created resource in storage. */
    public function store(Request $request): JsonResponse
    {
        $<%= fn.singular(tableMaster); %> = new <%= fn.uCamelCase(fn.singular(tableMaster)); %>([<%
            tableStructure.forEach(function(field, index) {
            if  (fn.v.noIdAndExcludeFields(field.column_name) && !['done'].includes(field.column_name)) { %>
            '<%= field.column_name; %>' => $request-><%= field.column_name; %><%= fn.addCommaToArr(tableStructure, index, 1) -%><%
            }}); %>
        ]);

        $<%= fn.singular(tableMaster); %>->save(); 
        $<%= fn.singular(tableMaster); %>->refresh();
        
        return response()->json([
            "<%= fn.singular(tableMaster); %>Id" => $<%= fn.singular(tableMaster); %>->id,
            "message"=> "The <%= fn.singular(tableMaster); %> successfully stored"
        ], 201);
    }    

    /** Display the specified resource. */
    public function show(<%= fn.uCamelCase(fn.singular(tableMaster)); %> $<%= fn.singular(tableMaster); %>): JsonResponse
    {
        return  response()->json($<%= fn.singular(tableMaster); %>);
    }

    /** Update the specified resource in storage. */
    public function update(Request $request, <%= fn.uCamelCase(fn.singular(tableMaster)); %> $<%= fn.singular(tableMaster); %>): JsonResponse
    {<%
        tableStructure.forEach(function(field) {
        if  (fn.v.noIdAndExcludeFields(field.column_name)) { %>
        $<%= fn.singular(tableMaster); %>-><%= field.column_name; %> = $request-><%= field.column_name; %>;<%
        }}); %>

        $<%= fn.singular(tableMaster); %>->save();

        return response()->json(["message"=> "The <%= fn.singular(tableMaster); %> successfully updated"], 200);
    }   

    /** Remove the specified resource from storage. */
    public function destroy(<%= fn.uCamelCase(fn.singular(tableMaster)); %> $<%= fn.singular(tableMaster); %>): JsonResponse
    {
        $<%= fn.singular(tableMaster); %>->delete();        
 
        return response()->json([], 204);
    }
    
}
```

Esta plantilla deberá generar el siguiente archivo.

`/home/username/crud-todo/api-laravel/app/Http/Controllers/TaskController.php`
```php
<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use \Illuminate\Http\JsonResponse;

class TaskController extends Controller
{
    /** Display a listing of the resource. */
    public function index(): Array
    {
        $tasks = Task::all()->toArray();
        return array_reverse($tasks);
    }

    /** Store a newly created resource in storage. */
    public function store(Request $request): JsonResponse
    {
        $task = new Task([
            'title' => $request->title, 
            'description' => $request->description
        ]);

        $task->save(); 
        $task->refresh();
        
        return response()->json([
            "taskId" => $task->id,
            "message"=> "The task successfully stored"
        ], 201);
    }    

    /** Display the specified resource. */
    public function show(Task $task): JsonResponse
    {
        return  response()->json($task);
    }

    /** Update the specified resource in storage. */
    public function update(Request $request, Task $task): JsonResponse
    {
        $task->title = $request->title;
        $task->description = $request->description;
        $task->done = $request->done;

        $task->save();

        return response()->json(["message"=> "The task successfully updated"], 200);
    }   

    /** Remove the specified resource from storage. */
    public function destroy(Task $task): JsonResponse
    {
        $task->delete();        
 
        return response()->json([], 204);
    }
    
}
```

Si ha llegado hasta aquí, entonces ya debe tener construido su respectivo código de la **API** que funcionará como **backend** para el **CRUD de Tareas**.




## `stack/my-frontend-example`

```txt
<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  data() {
    return {
      <%= tableMaster; %>: []
    }
  },
  mounted() {
    this.get<%= fn.uCamelCase(tableMaster); %>();
  },
  methods: {
    get<%= fn.uCamelCase(tableMaster); %>() {
      axios
        .get('http://localhost:8000/api/<%= tableMaster; %>')
        .then(response => this.<%= tableMaster; %> = response.data )
        .catch(
          error => console.log({
            errorCode: error.code, errorMessage: error.message
          })
        );
    },
    remove<%= fn.uCamelCase(fn.singular(tableMaster)); %>(id) {
      axios
        .delete(`http://localhost:8000/api/<%= tableMaster; %>/${id}`)
        .then(response => {
          console.log({ statusCode: response.status })
          if (response.status===204)
            this.get<%= fn.uCamelCase(tableMaster); %>();
          })
        .catch(
          error => console.log({
            errorCode: error.code, errorMessage: error.message
          })
        );
    }
  }
})
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-2xl" align="center">ToDo List</h1>    
    <router-link
      :to="{name: 'create'}"
      class="btn btn-primary"
      >Create
    </router-link>
    <table class="min-w-full text-left text-sm font-light">
      <thead class="border-b font-medium dark:border-neutral-500">
        <tr><%
          tableStructure.forEach(function(field){%>
          <th class=""><%= field.column_name; %></th><%
          }); %>
          <th class="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="<%= fn.singular(tableMaster); %> in <%= tableMaster; %>"
          :key="<%= fn.singular(tableMaster); %>.id"
          class="border-b dark:border-neutral-500"
        ><%
        tableStructure.forEach((field) => { %>
          <td class="">{{ <%= fn.singular(tableMaster); %>.<%= field.column_name; %> }}</td><%});
        %>        
          <td class="p-2">
            <button
              class="btn btn-success m-1 text-sm"
              @click="$router.push({name: 'edit', params: {id: <%= fn.singular(tableMaster); %>.id}})"
            >
              Edit
            </button>
            <button
              class="btn btn-danger m-1 text-sm"
              @click="remove<%= fn.uCamelCase(fn.singular(tableMaster)); %>(<%= fn.singular(tableMaster); %>.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <h4 v-if="<%= tableMaster; %>.length === 0">Empty list.</h4>
  </div>
</template>
```

Se verá sí:

```vue
<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  data() {
    return {
      tasks: []
    }
  },
  mounted() {
    this.getTasks();
  },
  methods: {
    getTasks() {
      axios
        .get('http://localhost:8000/api/tasks')
        .then(response => this.tasks = response.data )
        .catch(
          error => console.log({
            errorCode: error.code, errorMessage: error.message
          })
        );
    },
    removeTask(id) {
      axios
        .delete(`http://localhost:8000/api/tasks/${id}`)
        .then(response => {
          console.log({ statusCode: response.status })
          if (response.status===204)
            this.getTasks();
          })
        .catch(
          error => console.log({
            errorCode: error.code, errorMessage: error.message
          })
        );
    }
  }
})
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-2xl" align="center">ToDo List</h1>    
    <router-link
      :to="{name: 'create'}"
      class="btn btn-primary"
      >Create
    </router-link>
    <table class="min-w-full text-left text-sm font-light">
      <thead class="border-b font-medium dark:border-neutral-500">
        <tr>
          <th class="">id</th>
          <th class="">title</th>
          <th class="">description</th>
          <th class="">done</th>
          <th class="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="task in tasks"
          :key="task.id"
          class="border-b dark:border-neutral-500"
        >
          <td class="">{{ task.id }}</td>
          <td class="">{{ task.title }}</td>
          <td class="">{{ task.description }}</td>
          <td class="">{{ task.done }}</td>        
          <td class="p-2">
            <button
              class="btn btn-success m-1 text-sm"
              @click="$router.push({name: 'edit', params: {id: task.id}})"
            >
              Edit
            </button>
            <button
              class="btn btn-danger m-1 text-sm"
              @click="removeTask(task.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <h4 v-if="tasks.length === 0">Empty list.</h4>
  </div>
</template>
```


