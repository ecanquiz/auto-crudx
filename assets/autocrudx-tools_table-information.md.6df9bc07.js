import{_ as s,o as n,c as a,S as l}from"./chunks/framework.233e4693.js";const i=JSON.parse('{"title":"Información de Tablas","description":"","frontmatter":{},"headers":[],"relativePath":"autocrudx-tools/table-information.md","filePath":"autocrudx-tools/table-information.md"}'),p={name:"autocrudx-tools/table-information.md"},o=l(`<h1 id="informacion-de-tablas" tabindex="-1">Información de Tablas <a class="header-anchor" href="#informacion-de-tablas" aria-label="Permalink to &quot;Información de Tablas&quot;">​</a></h1><blockquote><p>Al aplicar la configuración del <a href="./../code-debugging.html">depurador de código</a>, <code>autocrudx-tools</code> mostrará en pantalla la información de la <strong><em>tabla</em></strong> a la cual desea generar el <strong><em>CRUD</em></strong>.</p></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># omitted for brevity ...</span></span>
<span class="line"><span style="color:#A6ACCD;">CRUD_GENERATE</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">FALSE</span></span></code></pre></div><p>Tenga en cuenta lo siguiente:</p><ul><li><code>tableMaster</code>: Nombre de la <strong><em>tabla maestro</em></strong>.</li><li><code>tableStructure</code>: Estructura de la <strong><em>tabla maestro</em></strong>.</li><li><code>tableDetailOfMaster</code>: <strong><em>Tabla(s) detalle(s) del maestro</em></strong>, si la(s) hubiera.</li><li><code>tableMasterForeignKeysAssoc</code>: <strong><em>Tabla(s) asociativa(s) del maestro</em></strong>, si la(s) hubiera.</li><li><code>tableStructureClean</code>: Estructura de la <strong><em>tabla maestro</em></strong> sin los campos <code>created_at</code>, <code>updated_at</code> y <code>deleted_at</code>.</li></ul><p>Veamos los ejemplos...</p><h2 id="ejemplo-basico" tabindex="-1">Ejemplo Básico <a class="header-anchor" href="#ejemplo-basico" aria-label="Permalink to &quot;Ejemplo Básico&quot;">​</a></h2><blockquote><p>Este ejemplo es para generar un <strong><em>CRUD</em></strong> a una <strong><em>tabla</em> maestro</strong> llamada <code>countries</code>. Recuerde antes aplicar la configuración del <a href="./../code-debugging.html">depurador de código</a> para mostrar en pantalla la información de la tabla.</p></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># omitted for brevity ...</span></span>
<span class="line"><span style="color:#A6ACCD;">CRUD_TABLE_MASTER</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">countries</span></span>
<span class="line"><span style="color:#A6ACCD;">CRUD_TABLE_MASTER_IS_HELPER</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">TRUE</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># omitted for brevity ...</span></span></code></pre></div><p>Inmediatamente <code>autocrudx-tools</code> leerá la información de la tabla <code>countries</code> anteriormente creada en base de datos y mostrará un JSON como el siguiente, además de la <a href="./../code-debugging.html#informacion-general">información general </a> y las <a href="./../autocrudx-tools/functional-tools.html">herramientas funcionales</a>.</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// omitted for brevity ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  tableMaster</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;countries&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  tableStructure</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;bigint&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nextval(&#39;countries_id_seq&#39;::regclass)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;name&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;character varying&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;deleted_at&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;timestamp without time zone&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;YES&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;created_at&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;timestamp without time zone&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;YES&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;updated_at&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;timestamp without time zone&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;YES&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  tableDetailsOfMaster</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[],</span></span>
<span class="line"><span style="color:#A6ACCD;">  tableForeignKeysAssoc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[],</span></span>
<span class="line"><span style="color:#A6ACCD;">  tableStructureClean</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;bigint&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nextval(&#39;countries_id_seq&#39;::regclass)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;name&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;character varying&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">nodemon</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> clean exit - waiting for changes before restart</span></span></code></pre></div><p>Tenga en cuenta que para este ejemplo, <code>autocrudx-tools</code> arrojó información de los correspondientes arreglos <code>tableMaster</code>, <code>tableStructure</code> y <code>tableStructureClean</code>. Mientras que <code>tableDetailOfMaster</code> y <code>tableMasterForeignKeysAssoc</code> respectivamente son arreglos vacios.</p><h2 id="ejemplo-intermedio" tabindex="-1">Ejemplo Intermedio <a class="header-anchor" href="#ejemplo-intermedio" aria-label="Permalink to &quot;Ejemplo Intermedio&quot;">​</a></h2><blockquote><p>Este ejemplo es para generar un <strong><em>CRUD</em></strong> a una <strong><em>tabla</em> maestro</strong> llamada <code>people</code>. Recuerde antes aplicar la configuración del <a href="./../code-debugging.html">depurador de código</a> para mostrar en pantalla la información de la tabla.</p></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># omitted for brevity ...</span></span>
<span class="line"><span style="color:#A6ACCD;">CRUD_TABLE_MASTER</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">people</span></span>
<span class="line"><span style="color:#A6ACCD;">CRUD_TABLE_MASTER_IS_HELPER</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">FALSE</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># omitted for brevity ...</span></span></code></pre></div><p>Inmediatamente <code>autocrudx-tools</code> leerá la información de la tabla <code>people</code> anteriormente creada en base de datos y mostrará un JSON como el siguiente, además de la <a href="./../code-debugging.html#informacion-general">información general </a> y las <a href="./../autocrudx-tools/functional-tools.html">herramientas funcionales</a>.</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// omitted for brevity ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  tableMaster: &#39;people&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  tableStructure: </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;bigint&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nextval(&#39;people_id_seq&#39;::regclass)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;email&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;character varying&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;type&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;boolean&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;identification_card&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;character varying&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;business_name&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;character varying&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;phone&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;character varying&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;country_id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;bigint&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;domicile&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;text&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;deleted_at&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;timestamp without time zone&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;YES&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;created_at&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;timestamp without time zone&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;YES&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;updated_at&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;timestamp without time zone&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;YES&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  tableDetailsOfMaster: </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  tableForeignKeysAssoc: </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;country_id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      foreign_table_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;countries&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      foreign_column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      constraint_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;people_country_id_foreign&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      table_schema</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;public&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  tableStructureClean: </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;bigint&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nextval(&#39;people_id_seq&#39;::regclass)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;email&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;character varying&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;type&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;boolean&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;identification_card&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;character varying&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;business_name&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;character varying&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;phone&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;character varying&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;country_id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;bigint&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;domicile&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;text&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">nodemon</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> clean exit - waiting for changes before restart</span></span></code></pre></div><p>Tenga en cuenta que para este ejemplo, <code>autocrudx-tools</code> arrojó información de los arreglos <code>tableMaster</code>, <code>tableStructure</code>, <code>tableForeignKeysAssoc</code> y <code>tableStructureClean</code> respectivamente. Mientras que <code>tableDetailOfMaster</code> se trata de un arreglo vacio.</p><h2 id="ejemplo-avanzado" tabindex="-1">Ejemplo Avanzado <a class="header-anchor" href="#ejemplo-avanzado" aria-label="Permalink to &quot;Ejemplo Avanzado&quot;">​</a></h2><blockquote><p>Este ejemplo es para generar un <strong><em>CRUD</em></strong> a una <strong><em>tabla</em> maestro</strong> llamada <code>meetings</code>. Recuerde antes aplicar la configuración del <a href="./../code-debugging.html">depurador de código</a> para mostrar en pantalla la información de la tabla.</p></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># omitted for brevity ...</span></span>
<span class="line"><span style="color:#A6ACCD;">CRUD_TABLE_MASTER</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">meetings</span></span>
<span class="line"><span style="color:#A6ACCD;">CRUD_TABLE_MASTER_IS_HELPER</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">FALSE</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># omitted for brevity ...</span></span></code></pre></div><p>Inmediatamente <code>autocrudx-tools</code> leerá la información de la tabla <code>meetings</code> anteriormente creada en base de datos y mostrará un JSON como el siguiente, además de la <a href="./../code-debugging.html#informacion-general">información general </a> y las <a href="./../autocrudx-tools/functional-tools.html">herramientas funcionales</a>.</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// omitted for brevity ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  tableMaster</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;meetings&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  tableStructure</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;integer&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nextval(&#39;meetings_id_seq&#39;::regclass)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;country_id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;bigint&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;place&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;character varying&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;subject&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;character varying&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;reason&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;character varying&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;observation&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;text&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;YES&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;deleted_at&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;timestamp without time zone&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;YES&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;created_at&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;timestamp without time zone&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;YES&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;updated_at&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;timestamp without time zone&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;YES&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  tableDetailsOfMaster</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      idForeignKey</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;meeting_id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      tableName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;attendes&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      tableStructure</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Array</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">      tableForeignKeysAssoc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Array</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      idForeignKey</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;meeting_id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      tableName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;approaches&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      tableStructure</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Array</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">      tableForeignKeysAssoc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      idForeignKey</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;meeting_id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      tableName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;agreements&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      tableStructure</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Array</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">      tableForeignKeysAssoc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  tableForeignKeysAssoc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;country_id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      foreign_table_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;countries&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      foreign_column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      constraint_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;meetings_country_id_foreign&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      table_schema</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;public&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  tableStructureClean</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;integer&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nextval(&#39;meetings_id_seq&#39;::regclass)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;country_id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;bigint&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;place&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;character varying&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;subject&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;character varying&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;reason&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;character varying&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;observation&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;text&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;YES&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">nodemon</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> clean exit - waiting for changes before restart</span></span></code></pre></div><p>Tenga en cuenta que para este ejemplo, <code>autocrudx-tools</code> arrojó información de los arreglos <code>tableMaster</code>, <code>tableStructure</code>, <code>tableDetailOfMaster</code> <code>tableForeignKeysAssoc</code> y <code>tableStructureClean</code> respectivamente.</p><hr><blockquote><p>Ahora que el arreglo <code>tableDetailOfMaster</code> tiene información, hagamos un pequeño cambio en el archivo <a href="./../app-ts-file.html"><code>app.ts</code></a> para indagar al respecto.</p></blockquote><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#676E95;font-style:italic;">// omitted for brevity ...</span></span>
<span class="line"><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">( </span></span>
<span class="line"><span style="color:#A6ACCD;">  config</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">dataJSON</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(dataJSON</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tableDetailsOfMaster)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// for consoleLogCustom of dataJSON</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>Ahora <code>autocrudx-tools</code> mostrará un JSON como el siguiente.</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    idForeignKey</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;meeting_id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    tableName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;agreements&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    tableStructure</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    tableForeignKeysAssoc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    idForeignKey</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;meeting_id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    tableName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;attendes&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    tableStructure</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    tableForeignKeysAssoc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    idForeignKey</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;meeting_id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    tableName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;approaches&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    tableStructure</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    tableForeignKeysAssoc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span></code></pre></div><blockquote><p>Ahora que la tabla detalle <code>attendes</code>, en este caso trae toda información, mostremos un acercamiento.</p></blockquote><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#676E95;font-style:italic;">// omitted for brevity ...</span></span>
<span class="line"><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  config</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">dataJSON</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(dataJSON</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tableDetailsOfMaster[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// for consoleLogCustom of dataJSON</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>Ahora <code>autocrudx-tools</code> mostrará un JSON como el siguiente.</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  idForeignKey</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;meeting_id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  tableName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;attendes&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  tableStructure</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;integer&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nextval(&#39;attendes_id_seq&#39;::regclass)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;meeting_id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;integer&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;YES&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;idcard&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;character varying&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;fullname&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;character varying&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;email&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;character varying&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;phone&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;character varying&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;observation&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;text&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;YES&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;entity_id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;bigint&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;dependency_id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;bigint&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;position_id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;bigint&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;NO&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;deleted_at&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;timestamp without time zone&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;YES&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;created_at&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;timestamp without time zone&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;YES&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;updated_at&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data_type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;timestamp without time zone&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      character_maximum_length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      is_nullable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;YES&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  tableForeignKeysAssoc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;entity_id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      foreign_table_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;entities&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      foreign_column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      constraint_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;attendes_entity_id_foreign&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      table_schema</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;public&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;dependency_id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      foreign_table_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;dependencies&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      foreign_column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      constraint_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;attendes_dependency_id_foreign&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      table_schema</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;public&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;position_id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      foreign_table_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;positions&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      foreign_column_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;id&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      constraint_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;attendes_position_id_foreign&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      table_schema</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;public&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><hr><blockquote><p>En el momento que se conoce <strong>cómo</strong> trabajar con las <a href="./functional-tools.html">herramientas funcionales</a> y <strong>cómo</strong> buscar la información de tablas, ya es tiempo de pasar a desarrollar nuestro propio <strong><em>Generador de CRUDs</em></strong> dentro de la <a href="./../stack/folder.html">carpeta stack</a>.</p></blockquote>`,35),e=[o];function c(t,D,r,y,C,A){return n(),a("div",null,e)}const m=s(p,[["render",c]]);export{i as __pageData,m as default};
