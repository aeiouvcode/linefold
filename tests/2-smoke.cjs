const fs=require('fs'),vm=require('vm'),assert=require('assert');
let handlers={},buttons={};function node(){return {children:[],classList:{add(){},remove(){},toggle(){}},style:{setProperty(){}},dataset:{},appendChild(el){this.children.push(el)},setAttribute(){},addEventListener(){},getBoundingClientRect(){return {left:0,top:0}},textContent:''}}
const canvas=node();const ctx=new Proxy({}, {get(_,key){return (...args)=>key==='createRadialGradient'?{addColorStop(){}}:undefined},set(){return true}});canvas.getContext=()=>ctx;const ids=new Proxy({}, {get(o,k){return o[k]??(o[k]=node())}});ids.c=canvas;const document={body:node(),createElement:()=>node(),getElementById:k=>ids[k],querySelectorAll:()=>[]};let context={document,innerWidth:390,innerHeight:844,devicePixelRatio:1,crypto:require('crypto'),Math,console,requestAnimationFrame(){},setTimeout(){},addEventListener(k,v){handlers[k]=v}};context.window=context;vm.createContext(context);const html=fs.readFileSync(require('path').join(__dirname,'..','index.html'),'utf8');const script=html.match(/<script>([\s\S]*?)<\/script>/)[1];vm.runInContext(script,context);
assert.equal(context.__lf.stations.length,6);assert.equal(context.__lf.trains.length,2);
let S=context.__lf.stations, L=context.__lf.lines;
// Resize after a loaded game must keep every station on the new phone map.
context.innerWidth=1280;context.innerHeight=713;context.size();context.innerWidth=390;context.innerHeight=844;context.size();assert(context.__lf.stations.every(q=>q.x>=0&&q.x<=390&&q.y>=0&&q.y<=844));
// Opposing directions share one corridor; offsets must be distinct and consistent.
L[2]=[S[0],S[1]];L[3]=[S[1],S[0]];
let a=context.laneOffset(S[0],S[1],0),b=context.laneOffset(S[1],S[0],2),c=context.laneOffset(S[0],S[1],3);
assert.notEqual(a.y,b.y);assert.notEqual(b.y,c.y);
let p=context.pathPoint(L[2],0,.5,2);assert(Number.isFinite(p.x)&&Number.isFinite(p.y));
// Pointer-drawn lines should spawn only once, then retain all locomotives on edits.
L[2]=[];L[3]=[];let before=context.__lf.trains.length;
vm.runInContext("selected=2",context);context.down({preventDefault(){},clientX:S[0].x,clientY:S[0].y});context.up({preventDefault(){},clientX:S[1].x,clientY:S[1].y});
assert.equal(context.__lf.trains.length,before+1);assert.equal(L[2].length,2);
context.spawnTrain(2);assert.equal(context.__lf.trains.filter(t=>t.li===2).length,2);
context.down({preventDefault(){},clientX:S[1].x,clientY:S[1].y});context.up({preventDefault(){},clientX:S[2].x,clientY:S[2].y});assert.equal(context.__lf.trains.filter(t=>t.li===2).length,2);
// Passenger delivery, growth, weekly choice, draw command smoke.
S[1].pass=['circle'];let tr=context.__lf.trains.find(t=>t.li===2);tr.seg=0;tr.p=.999;tr.dir=1;context.update(.04);assert(tr.load.includes('circle'));
tr.seg=0;tr.p=.999;tr.dir=1;tr.load=['square'];let moved=context.__lf.state.moved;context.update(.04);assert.equal(context.__lf.state.moved,moved+1);
context.draw();for(let i=0;i<550;i++){if(context.__lf.state.paused)context.paused=false;if(context.ended)break;context.update(.04)}assert(context.__lf.stations.length>6);console.log('PASS init, shared corridor geometry, pointer route, multi-engine persistence, board/alight, growth, draw');
