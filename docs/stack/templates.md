# Plantillas

## `stack/my-backend-example`

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

## `stack/my-frontend-example`
