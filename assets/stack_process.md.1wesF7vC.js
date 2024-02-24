import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.C_yPwr0l.js";const c=JSON.parse('{"title":"Proceso","description":"","frontmatter":{},"headers":[],"relativePath":"stack/process.md","filePath":"stack/process.md"}'),l={name:"stack/process.md"},e=n(`<h1 id="proceso" tabindex="-1">Proceso <a class="header-anchor" href="#proceso" aria-label="Permalink to &quot;Proceso&quot;">​</a></h1><blockquote><p>Una vez declaradas las <a href="./renderings.html">renderizaciones</a> se establece el proceso de generación.</p></blockquote><h2 id="archivo-process-ts" tabindex="-1">Archivo <code>process.ts</code> <a class="header-anchor" href="#archivo-process-ts" aria-label="Permalink to &quot;Archivo \`process.ts\`&quot;">​</a></h2><p>En el archivo <code>./stack/my-backend/process.ts</code> se declara el proceso para generar el renderizado del <strong><em>backend</em></strong>.</p><p>📃<code>./stack/my-backend/process.ts</code></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@config/index&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { rendering } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;autocrudx-tools&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ParamsAll,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  tableDetailsOfMasterCustomized</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;autocrudx-tools&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  paramsOmitOutput: Omit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ParamsAll, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;output&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> backend</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`@stack/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">crud</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">stackBackend</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/renderings\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ).default</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ParamsAll</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">paramsOmitOutput,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    output: config.pathBackend,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    moduleName: config.moduleName,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pathUser: config.pathUser</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (params.tableDetailsOfMaster.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    params.tableDetailsOfMaster.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> paramsWhitDetail</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">params,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        tableDetailsCurrent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          table </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> unknown</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tableDetailsOfMasterCustomized</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(backend.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">detailController</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(paramsWhitDetail))</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(backend.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">detailModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(paramsWhitDetail))</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(backend.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">detailRoute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(paramsWhitDetail))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(backend.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">masterController</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params))</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(backend.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">masterModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params))</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(backend.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">masterRoute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li><p>Tome en cuenta que empezamos importamos el <code>config</code> de nuestro programa, la función <code>rendering</code> del módulo <code>autocrudx-tools</code> más el tipado <code>ParamsAll</code> y <code>tableDetailsOfMasterCustomized</code> del mismo módulo.</p></li><li><p>Tenga presente que el módulo <code>proccess</code> exporta una función <code>async</code> que devuelve una <code>Promise&lt;void&gt;</code>. Dicha función recibe un argumento llamado <code>paramsOmitOutput</code> tipo <code>Omit&lt;ParamsAll, &#39;output&#39;&gt;</code> como parametro.</p></li><li><p>Lo primero que hace la función <code>proccess</code> es importar dinámicamente el módulo <a href="./renderings.html"><code>renderings.ts</code></a> estableciéndolo en la constante <code>backend</code>.</p></li><li><p>Lo segundo que hace la función <code>proccess</code> es declarar la constante <code>params</code> para agrupar todos los parametros necesarios para el proceso en sí.</p></li><li><p>A continuación, el proceso se divide en 2 partes:</p><ol><li>La condición si se cumple que <code>params.tableDetailsOfMaster.length</code> es diferente de cero (<code>0</code>).</li><li>Más el resto del proceso.</li></ol></li><li><p>Preste atención que para renderizar cualquier plantilla basta con ejecutar la función <code>rendering</code>, perteneciente al módulo <code>autocrudx-tools</code>, pasándole como argumento cualquiera de las funciones importadas dinámicamente desde el módulo <code>renderings</code> del correspondiente <strong><em>Stack</em></strong>.</p></li></ul><p>Algo como esto:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(myStackName.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fooTemplateName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params))</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(myStackName.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">barTemplateName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params))</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(myStackName.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bazTemplateName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params))</span></span></code></pre></div><p>En el ejemplo anterior <code>myStackName</code> sería algo como la constante <code>backend</code> declarada aguas arriba. En el próximo ejemplo note que esta constante no se llamará <code>backend</code> sino <code>frontend</code>. Usted puede colocarle en nombre que desee, ya que la forma no es relevante.</p><hr><p>En el archivo <code>./stack/my-backend/process.ts</code> se declara el proceso para generar el renderizado del <strong><em>frontend</em></strong>.</p><p>📃<code>./stack/frontend-folder-name/process.ts</code></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@config/index&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { rendering } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;autocrudx-tools&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ParamsAll,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  tableDetailsOfMasterCustomized</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;autocrudx-tools&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  paramsOmitOutput: Omit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ParamsAll, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;output&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> frontend</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`@stack/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">crud</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">stackFrontend</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/renderings\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ).default</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ParamsAll</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">paramsOmitOutput,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    output: config.pathFrontend,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    moduleName: config.moduleName,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pathUser: config.pathUser</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (params.tableDetailsOfMaster.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(frontend.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tabs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params))</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(frontend.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">masterTab</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params))</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(frontend.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">masterUseTab</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    params.tableDetailsOfMaster.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> paramsWhitDetail</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">params,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        tableDetailsCurrent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          table </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> unknown</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tableDetailsOfMasterCustomized</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }     </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(frontend.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">detailTab</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(paramsWhitDetail))</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(frontend.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">detailUseTab</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(paramsWhitDetail))      </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(frontend.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">detailServices</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(paramsWhitDetail))</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(frontend.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">detailTypes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(paramsWhitDetail))      </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(frontend.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">masterRoutes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params))</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(frontend.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">masterDatagrid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params))</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(frontend.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">masterUseDatagrid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params))</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(frontend.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">masterServices</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params))</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(frontend.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">masterTypes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Siéntase libre de colocarle el nombre que desee, con tal y cumpla con su tipado correspondiente.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Rendering</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    outputFile</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    outputPath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ParamsAll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    template</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rendering</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ({</span></span>
<span class="line highlighted"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  outputFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  outputPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  params</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  template</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span></span></code></pre></div><ul><li>Finalmente, tenga claro que para renderizar todas las <code>tableDetailsOfMaster</code>, <a href="./../autocrudx-tools/table-information.html#ejemplo-avanzado">cuando las hay</a>, es decir: si se cumple que <code>(params.tableDetailsOfMaster.length!==0)</code>, simplemente se recorre el correspondiente arreglo con el método <code>forEach</code> de JavaScript.</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// omitted for brevity ...</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">params.tableDetailsOfMaster.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> paramsWhitDetail</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">params,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    tableDetailsCurrent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      table </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> unknown</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tableDetailsOfMasterCustomized</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(myStackName.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fooTemplateName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(paramsWhitDetail))</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  rendering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(myStackName.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">barTemplateName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(paramsWhitDetail))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // omitted for brevity ...     </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// omitted for brevity ...</span></span></code></pre></div><p>Tome en cuenta cuando recorra el arreglo <code>params.tableDetailsOfMaster</code>, que por cada <code>tableDetailsCurrent</code> se creará una constante llamada <code>paramsWhitDetail</code> para ser pasada como argumento respectivamente.</p>`,19),t=[e];function h(p,k,r,d,E,g){return a(),i("div",null,t)}const y=s(l,[["render",h]]);export{c as __pageData,y as default};
