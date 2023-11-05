import{_ as s,o as a,c as n,S as o}from"./chunks/framework.233e4693.js";const F=JSON.parse('{"title":"Configurar Entorno","description":"","frontmatter":{},"headers":[],"relativePath":"env-config.md","filePath":"env-config.md"}'),l={name:"env-config.md"},p=o(`<h1 id="configurar-entorno" tabindex="-1">Configurar Entorno <a class="header-anchor" href="#configurar-entorno" aria-label="Permalink to &quot;Configurar Entorno&quot;">​</a></h1><h2 id="archivo-env" tabindex="-1">Archivo <code>.env</code> <a class="header-anchor" href="#archivo-env" aria-label="Permalink to &quot;Archivo \`.env\`&quot;">​</a></h2><p>En la raíz del proyecto <strong>Auto-CRUDx</strong>, hubique y abra siguiente archivo.</p><p>📃<code>.env.example</code></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">DB_DATABASE</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">db_name</span></span>
<span class="line"><span style="color:#A6ACCD;">DB_HOST</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">localhost</span></span>
<span class="line"><span style="color:#A6ACCD;">DB_PASSWORD</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">12345678</span></span>
<span class="line"><span style="color:#A6ACCD;">DB_PORT</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">5432</span></span>
<span class="line"><span style="color:#A6ACCD;">DB_USER</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">postgres</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">PATH_USER</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">/home/username</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH_BACKEND</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">backend-folder-name</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH_BACKEND_ROOT</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">app</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH_FRONTEND</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">frontend-folder-name</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH_FRONTEND_ROOT</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">src</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH_MODULE</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">User</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">CRUD_SCHEMA</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">public</span></span>
<span class="line"><span style="color:#A6ACCD;">CRUD_TABLE_MASTER</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">users</span></span>
<span class="line"><span style="color:#A6ACCD;">CRUD_TABLE_MASTER_IS_HELPER</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">FALSE</span></span>
<span class="line"><span style="color:#A6ACCD;">CRUD_EXCLUDE_FIELDS</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">created_at,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">updated_at,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">deleted_at</span></span>
<span class="line"><span style="color:#A6ACCD;">CRUD_GENERATE</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">TRUE</span></span>
<span class="line"><span style="color:#A6ACCD;">CRUD_STACK_BACKEND</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">demo-backend</span></span>
<span class="line"><span style="color:#A6ACCD;">CRUD_STACK_FRONTEND</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">demo-frontend</span></span></code></pre></div><p>Cópielo y péguelo en la misma raiz del proyecto para crear el archivo de configuración del entorno <code>.env</code>. Tenga en cuenta que este archivo agrupa 3 secciones respectivamente (<code>DB</code>, <code>PATH</code> y <code>CRUD</code>) que describiremos a continuación.</p><h2 id="descripcion-de-seccion-db" tabindex="-1">Descripción de sección <code>DB</code> <a class="header-anchor" href="#descripcion-de-seccion-db" aria-label="Permalink to &quot;Descripción de sección \`DB\`&quot;">​</a></h2><ul><li><strong><code>DB_DATABASE</code>:</strong> Nombre de la base de datos.</li><li><strong><code>DB_HOST</code></strong>: IP de la máquina anfitriona donde se hospeda el proyecto.</li><li><strong><code>DB_PASSWORD</code></strong>: <em>Password</em> de la base de datos.</li><li><strong><code>DB_PORT</code></strong> : Puerto por donde escucha la base de datos.</li><li><strong><code>DB_USER</code></strong>: Usuario de la base de datos.</li></ul><h2 id="descripcion-de-seccion-path" tabindex="-1">Descripción de sección <code>PATH</code> <a class="header-anchor" href="#descripcion-de-seccion-path" aria-label="Permalink to &quot;Descripción de sección \`PATH\`&quot;">​</a></h2><ul><li><strong><code>PATH_USER</code></strong>: Ruta del usuario en la máquina anfitriona.</li><li><strong><code>PATH_BACKEND</code></strong>: Carpeta(s) donde está alojado el <code>scaffold</code> de su <em>backend</em>.</li><li><strong><code>PATH_BACKEND_ROOT</code></strong>: Nombre de la carpeta, dentro del <code>PATH_BACKEND</code>, donde se escribirá el correspondiente código generado.</li><li><strong><code>PATH_FRONTEND</code></strong>: Carpeta(s) donde está alojado el <code>scaffold</code> de su <em>frontend</em>.</li><li><strong><code>PATH_FRONTEND_ROOT</code></strong>: Nombre de la carpeta, dentro del <code>PATH_FRONTEND</code>, donde se escribirá el correspondiente código generado.</li><li><strong><code>PATH_MODULE</code></strong>: Si está usando estructura modular, puede suministrar el nombre del módulo.</li></ul><h2 id="descripcion-de-seccion-crud" tabindex="-1">Descripción de sección <code>CRUD</code> <a class="header-anchor" href="#descripcion-de-seccion-crud" aria-label="Permalink to &quot;Descripción de sección \`CRUD\`&quot;">​</a></h2><ul><li><strong><code>CRUD_SCHEMA</code></strong>: Nombre del esquema de la base de datos donde se encuetra la tabla en cuestión.</li><li><strong><code>CRUD_TABLE_MASTER</code></strong>: Nombre de la tabla que se le generará el CRUD.</li><li><strong><code>CRUD_TABLE_MASTER_IS_HELPER</code></strong>: Indica si se trata de una simple tabla para llenar una lista desplegable (elemento select html).</li><li><strong><code>CRUD_EXCLUDE_FIELDS</code></strong>: Campos que contiene la respectiva tabla que desea sean excluidos del CRUD.</li><li><strong><code>CRUD_GENERATE</code></strong>: Indica si desea generar el CRUD o <em>debuggear</em> el <em>dataJSON</em> proveniente de la base de datos que alimenta el CRUD.</li><li><strong><code>CRUD_STACK_BACKEND</code></strong>: Nombre de la carpeta de su <a href="./stack-folder.html#stack-my-backend">Stack para el Backend</a>.</li><li><strong><code>CRUD_STACK_FRONTEND</code></strong>: Nombre de la carpeta de su <a href="/auto-crudx/stack-folder.html#stack-my-frontend">Stack para el Frontend</a>.</li></ul><h2 id="carpeta-config" tabindex="-1">Carpeta <code>config</code> <a class="header-anchor" href="#carpeta-config" aria-label="Permalink to &quot;Carpeta \`config\`&quot;">​</a></h2><p>En la carpeta <code>config</code> se capturan los parámetros del archivo <code>.env</code> enviándolos a JavaScript para ser exportados.</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#A6ACCD;">src/</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">├── config/</span></span>
<span class="line"><span style="color:#A6ACCD;">├── stack/</span></span>
<span class="line"><span style="color:#A6ACCD;">└── app.ts</span></span></code></pre></div><p>Echemos un vistazo.</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#A6ACCD;">├── config/</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├── crud.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├── db.ts</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    ├── index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">    └── output.ts</span></span></code></pre></div><p>Tenga en cuenta que hay 3 archivos (<code>crud.ts</code>, <code>db.ts</code> y <code>output.ts</code>) respectivamente más el <code>index.ts</code> quien representa la interface de los anteriores.</p><h2 id="src-config-index-ts" tabindex="-1"><code>src/config/index.ts</code> <a class="header-anchor" href="#src-config-index-ts" aria-label="Permalink to &quot;\`src/config/index.ts\`&quot;">​</a></h2><p>Tenga en cuenta lo que exporta este archivo.</p><p>📃<code>src/config/index.ts</code></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> crud </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./crud</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> dbConfig </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./db</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// import * as output from &#39;./output&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">moduleName</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">pathBackend</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">pathFrontend</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">pathModule</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">pathUser</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./output</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//output</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    crud</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    dbConfig</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">    </span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    moduleName</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    pathBackend</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    pathFrontend</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    pathModule</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    pathUser</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Si desea obtener las variables de entorno simplemente importelas.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">crud</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">dbConfig</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">moduleName</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">pathBackend</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">pathFrontend</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">pathModule</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">pathUser</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@config/index</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><p>Hagamos un simple vistazo a los otros archivos de configuración para revisar como funciona esto.</p><h2 id="src-config-db-ts" tabindex="-1"><code>./src/config/db.ts</code> <a class="header-anchor" href="#src-config-db-ts" aria-label="Permalink to &quot;\`./src/config/db.ts\`&quot;">​</a></h2><p>📃</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> dotenv </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dotenv</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dotenv</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">config</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> dbConfig </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB_HOST</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB_PORT)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">database</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB_DATABASE</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">user</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB_USER</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB_PASSWORD    </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> dbConfig</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="src-config-crud-ts" tabindex="-1"><code>./src/config/crud.ts</code> <a class="header-anchor" href="#src-config-crud-ts" aria-label="Permalink to &quot;\`./src/config/crud.ts\`&quot;">​</a></h2><p>📃</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> dotenv </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dotenv</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dotenv</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">config</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">schema</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CRUD_SCHEMA</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">tableMaster</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CRUD_TABLE_MASTER</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">tableMasterIsHelper</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Boolean</span><span style="color:#A6ACCD;">(JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">((process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CRUD_TABLE_MASTER_IS_HELPER</span><span style="color:#89DDFF;">??</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toLowerCase</span><span style="color:#A6ACCD;">()))</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">excludeFields</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CRUD_EXCLUDE_FIELDS </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CRUD_EXCLUDE_FIELDS</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">generate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Boolean</span><span style="color:#A6ACCD;">(JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">((process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CRUD_GENERATE</span><span style="color:#89DDFF;">??</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toLowerCase</span><span style="color:#A6ACCD;">()))</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">stackBackend</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CRUD_STACK_BACKEND</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">stackFrontend</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CRUD_STACK_FRONTEND</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="src-config-output-ts" tabindex="-1"><code>./src/config/output.ts</code> <a class="header-anchor" href="#src-config-output-ts" aria-label="Permalink to &quot;\`./src/config/output.ts\`&quot;">​</a></h2><p>📃</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> dotenv </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dotenv</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dotenv</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">config</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> pathUser </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PATH_USER</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> moduleName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PATH_MODULE</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> pathModule </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> moduleName </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">moduleName</span><span style="color:#89DDFF;">}\`</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> pathBackend </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">pathUser</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PATH_BACKEND</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PATH_BACKEND_ROOT</span><span style="color:#89DDFF;">}\${</span><span style="color:#A6ACCD;">pathModule</span><span style="color:#89DDFF;">}\`</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> pathFrontend </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">pathUser</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PATH_FRONTEND</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PATH_FRONTEND_ROOT</span><span style="color:#89DDFF;">}\${</span><span style="color:#A6ACCD;">pathModule</span><span style="color:#89DDFF;">}\`</span></span></code></pre></div>`,34),e=[p];function t(c,r,D,y,C,i){return a(),n("div",null,e)}const d=s(l,[["render",t]]);export{F as __pageData,d as default};