const __vite__fileDeps=["assets/ImageViewer-5KR27HWJ-ZUzD3crE.js","assets/app-BZeU-3gH.js","assets/app-BMBJh9W0.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as A,e as v,R as w,q as D,d as T,j as o,y as I}from"./app-BZeU-3gH.js";import{C as M,P as x,N,I as H,c as J,a as B}from"./Icons-ByYaahaO.js";import{u as E}from"./useTonConnect-eI4NsDC-.js";import{d as r}from"./index-CcZ2_vLw.js";import{d as S}from"./index-DOrAevw5.js";import F from"./TaskWorker-DL8ccY3J.js";var U=A.lazy(()=>v(()=>import("./ImageViewer-5KR27HWJ-ZUzD3crE.js"),__vite__mapDeps([0,1,2])));function Y(){const n=A.useRef([]);n.current=[];const t=A.useRef(new Set),e=A.useCallback(function({fallback:s,children:i}){const[g,c]=A.useState(void 0);A.useEffect(()=>(t.current.add(c),()=>{t.current.delete(c)}),[c]);const C=A.useCallback(()=>c(void 0),[]);if(g===void 0||typeof window>"u")return null;const y=U;return w.createElement(A.Suspense,{fallback:s??null},w.createElement(y,{images:n.current,onClose:C,defaultIndex:g,children:i}))},[]);return{getOnClick(a,s){const i=n.current.length;return a&&n.current.push([a,s]),g=>{g.preventDefault();for(const c of t.current)c(i)}},ImageViewer:e}}function z(n){return t=>{let e=t;e.storeUint(2490013878,32),e.storeUint(n.queryId,64)}}function O(n){return t=>{let e=t;e.storeUint(170908148,32),e.storeUint(n.id,128),e.storeAddress(n.creator),e.storeAddress(n.executor),e.storeUint(n.coin_amount,64)}}function j(n){return t=>{let e=t;e.storeUint(2083249270,32),e.storeUint(n.id,64),e.storeAddress(n.address)}}async function f(){const n=r.Cell.fromBase64("te6ccgECHQEABVwAART/APSkE/S88sgLAQIBYgIDAvLQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFNs88uCCyPhDAcx/AcoAVUBQRct/WCDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFgIC9ADLH4EBAc8Aye1UGAQCASANDgLw7aLt+wGSMH/gcCHXScIflTAg1wsf3iCCEAov2fS6jtYw0x8BghAKL9n0uvLggdN/+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdM/VTBsFOAgBQYCrvhDVTDbPFxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiHBagEJZfwUEQxNtAts8fwcLAuSCEHwr3Ha6jkow0x8BghB8K9x2uvLggdM/+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBJsEgOkECSAIEAEIG6VMFn0WzCUQTP0FuICf+AgwAAi10nBIbCSW3/gIIIQlGqYtrrjAsAAkTDjDXAICQD2BND0BDBtAYEudQGAEPQPb6Hy4IcBgS51IgKAEPQXyAHI9ADJAcxwAcoAVTAFghAKL9n0UAXLHxPLfwEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8Wyz/JAVAw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/CgBY+QGC8Awc12WUYLD4G5QjfNX/wTpPtY6mibKBXedN03cGRqTqupVtM3/bMeABOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8CwHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAMAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAhG+KO7Z5tnjYowYDwIBIBARAAIjAgEgEhMCAUgbHAIRttgbZ5tnjYowGBQCASAWFwEO+CdvEHnbPBUA2iDBASHCTbHy0IbIIsEAmIAtAcsHAqMC3n9wbwAEjhsEeqkMIMAAUjCws5twM6YwFG+MBKQEA5Ew4gTkAbOXAoAub4wCpN6OEAN6qQymMBNvjAOkIsAAEDTmMyKlA5pTEm+BAcsHAqUC5GwhydACFbMWNs8VQTbPGxRgGBkAubL0YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwnZdOWrNOy3M6DpZtlGbopIJwQM51aecV+dJQsB1hbiZHsoAGc7UTQ1AH4Y9IAAY4z03/6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfQE0x9ZAoEBAdcABQRQM2wV4DD4KNcLCoMJuvLgids8GgAagCAkAln0Dm+hkjBt3wAacIIQHc1lAPhCbSNVAgARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1RVkFoZjNuSG50RFdKcTdpVlhtQ0NXS0NFd3BTWFFSZ3RHaWg4QWt3NlRHS4IA=="),t=r.Cell.fromBase64("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");let e=r.beginCell();e.storeRef(t),e.storeUint(0,1);const a=e.endCell();return{code:n,data:a}}const P={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},11133:{message:"you cant take your own tasks"},25049:{message:"you dont have enough rights to call this function"}},K=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]},{name:"ChangeOwner",header:2174598809,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"newOwner",type:{kind:"simple",type:"address",optional:!1}}]},{name:"ChangeOwnerOk",header:846932810,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"newOwner",type:{kind:"simple",type:"address",optional:!1}}]},{name:"TaskData",header:null,fields:[{name:"id",type:{kind:"simple",type:"uint",optional:!1,format:128}},{name:"creator",type:{kind:"simple",type:"address",optional:!1}},{name:"executor",type:{kind:"simple",type:"address",optional:!1}},{name:"coin_amount",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"status",type:{kind:"simple",type:"uint",optional:!1,format:8}}]},{name:"InternalTask",header:170908148,fields:[{name:"id",type:{kind:"simple",type:"uint",optional:!1,format:128}},{name:"creator",type:{kind:"simple",type:"address",optional:!1}},{name:"executor",type:{kind:"simple",type:"address",optional:!1}},{name:"coin_amount",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"ChildCallback",header:2083249270,fields:[{name:"id",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"address",type:{kind:"simple",type:"address",optional:!1}}]},{name:"TaskAddresses",header:null,fields:[{name:"address",type:{kind:"dict",key:"uint",keyFormat:32,value:"address"}},{name:"length",type:{kind:"simple",type:"uint",optional:!1,format:32}}]}],W=[{name:"balance",arguments:[],returnType:{kind:"simple",type:"string",optional:!1}},{name:"addressOfChild",arguments:[{name:"id",type:{kind:"simple",type:"int",optional:!1,format:257}}],returnType:{kind:"simple",type:"address",optional:!0}},{name:"owner",arguments:[],returnType:{kind:"simple",type:"address",optional:!1}}],X=[{receiver:"internal",message:{kind:"typed",type:"InternalTask"}},{receiver:"internal",message:{kind:"typed",type:"ChildCallback"}},{receiver:"internal",message:{kind:"empty"}},{receiver:"internal",message:{kind:"text",text:"clear"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class m{constructor(t,e){this.abi={types:K,getters:W,receivers:X,errors:P},this.address=t,this.init=e}static async init(){return await f()}static async fromInit(){const t=await f(),e=r.contractAddress(0,t);return new m(e,t)}static fromAddress(t){return new m(t)}async send(t,e,a,s){let i=null;if(s&&typeof s=="object"&&!(s instanceof r.Slice)&&s.$$type==="InternalTask"&&(i=r.beginCell().store(O(s)).endCell()),s&&typeof s=="object"&&!(s instanceof r.Slice)&&s.$$type==="ChildCallback"&&(i=r.beginCell().store(j(s)).endCell()),s===null&&(i=new r.Cell),s==="clear"&&(i=r.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof r.Slice)&&s.$$type==="Deploy"&&(i=r.beginCell().store(z(s)).endCell()),i===null)throw new Error("Invalid message type");await t.internal(e,{...a,body:i})}async getBalance(t){let e=new r.TupleBuilder;return(await t.get("balance",e.build())).stack.readString()}async getAddressOfChild(t,e){let a=new r.TupleBuilder;return a.writeNumber(e),(await t.get("addressOfChild",a.build())).stack.readAddressOpt()}async getOwner(t){let e=new r.TupleBuilder;return(await t.get("owner",e.build())).stack.readAddress()}}function G(n){return t=>{let e=t;e.storeUint(2490013878,32),e.storeUint(n.queryId,64)}}function V(n){return t=>{let e=t;e.storeUint(170908148,32),e.storeUint(n.id,128),e.storeAddress(n.creator),e.storeAddress(n.executor),e.storeUint(n.coin_amount,64)}}function R(n){let t=n.readBigNumber(),e=n.readAddress(),a=n.readAddress(),s=n.readBigNumber(),i=n.readBigNumber();return{$$type:"TaskData",id:t,creator:e,executor:a,coin_amount:s,status:i}}function Z(n){return t=>{t.store(V(n.msg))}}async function Q(n){const t=r.Cell.fromBase64("te6ccgECHAEABSwAART/APSkE/S88sgLAQIBYgIDA37QAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFts88uCC2zwTBAUCASAJCgK67aLt+wGSMH/gcCHXScIflTAg1wsf3iDAACLXScEhsJJbf+AgghCUapi2uo6oMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+DAAJEw4w1wBgcB9sj4QwHMfwHKAFVgUHYg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYFBlBFy39YINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFss/ywcByMsfyQHMyQgBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8FwHI+QGC8JCEkRl2Tsc0v7b8ZQi7A+hG5gxWJVrGBEROMKl93e0quo68MYFh2fhBbyQQI18DUlDHBZF/nPhBbyQQI18DUnDHBeLy9HT4J28QggiYloChUkByf1UgbW1t2zwBf9sx4BcABO1UAgEgCwwCASAPEAIRuIq9s82zxsdYEw0CEbhR3bPNs8bHGBMOAApUdUNTVAACJgIBIBESAgFIGhsCEbbYG2ebZ42OMBMUALm3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOE7Lpy1Zp2W5nQdLNsozdFJBOCBnOrTzivzpKFgOsLcTI9lAC4O1E0NQB+GPSAAHjAvgo1wsKgwm68uCJ0x8BghAKL9n0uvLggdN/+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdM/VTAE0VUC2zwVFgEO+CdvEHnbPBkA5vpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB03/6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB0z/TB1VABdQB0NMfMBcWbBcBwDCBK31TEscFs/L0+EFvJBNfA4IK+vCAoXH4I/hC+EKCCvrwgHL4KFKgyFmCEHwr3HZQA8sfyz8BINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WyX9VMG1t2zxVUBcByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAGACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzADaIMEBIcJNsfLQhsgiwQCYgC0BywcCowLef3BvAASOGwR6qQwgwABSMLCzm3AzpjAUb4wEpAQDkTDiBOQBs5cCgC5vjAKk3o4QA3qpDKYwE2+MA6QiwAAQNOYzIqUDmlMSb4EBywcCpQLkbCHJ0AARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1RTUFZTkRvQjE5RllTMlBVNUZSZWl5cE1YSkE3TUd0Uzg1Rjc4MnVpR000TYIA=="),e=r.Cell.fromBase64("te6cckECHgEABTYAAQHAAQEFoFzrAgEU/wD0pBP0vPLICwMCAWIECgN+0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRbbPPLggts8EwUIArrtou37AZIwf+BwIddJwh+VMCDXCx/eIMAAItdJwSGwklt/4CCCEJRqmLa6jqgw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4MAAkTDjDXAGBwE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwWAcj5AYLwkISRGXZOxzS/tvxlCLsD6EbmDFYlWsYERE4wqX3d7Sq6jrwxgWHZ+EFvJBAjXwNSUMcFkX+c+EFvJBAjXwNScMcF4vL0dPgnbxCCCJiWgKFSQHJ/VSBtbW3bPAF/2zHgFgH2yPhDAcx/AcoAVWBQdiDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFgUGUEXLf1gg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8Wyz/LBwHIyx/JAczJCQAE7VQCASALEAIBIAwOAhG4ir2zzbPGx1gTDQAKVHVDU1QCEbhR3bPNs8bHGBMPAAImAgEgERsCASASGgIRttgbZ5tnjY4wExgC4O1E0NQB+GPSAAHjAvgo1wsKgwm68uCJ0x8BghAKL9n0uvLggdN/+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdM/VTAE0VUC2zwUFQDm+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHTf/pAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHTP9MHVUAF1AHQ0x8wFxZsFwHAMIErfVMSxwWz8vT4QW8kE18Dggr68IChcfgj+EL4QoIK+vCAcvgoUqDIWYIQfCvcdlADyx/LPwEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJf1UwbW3bPFVQFgHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAXAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAQ74J28Qeds8GQDaIMEBIcJNsfLQhsgiwQCYgC0BywcCowLef3BvAASOGwR6qQwgwABSMLCzm3AzpjAUb4wEpAQDkTDiBOQBs5cCgC5vjAKk3o4QA3qpDKYwE2+MA6QiwAAQNOYzIqUDmlMSb4EBywcCpQLkbCHJ0AC5t3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwThOy6ctWadluZ0HSzbKM3RSQTggZzq084r86ShYDrC3EyPZQAgFIHB0AEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtUU1BWU5Eb0IxOUZZUzJQVTVGUmVpeXBNWEpBN01HdFM4NUY3ODJ1aUdNNE2CCX5FhK");let a=r.beginCell();a.storeRef(e),a.storeUint(0,1),Z({$$type:"TonTaskChild_init_args",msg:n})(a);const s=a.endCell();return{code:t,data:s}}const q={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},11133:{message:"you cant take your own tasks"},25049:{message:"you dont have enough rights to call this function"}},_=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]},{name:"Deploy",header:2490013878,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"DeployOk",header:2952335191,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"FactoryDeploy",header:1829761339,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"cashback",type:{kind:"simple",type:"address",optional:!1}}]},{name:"ChangeOwner",header:2174598809,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"newOwner",type:{kind:"simple",type:"address",optional:!1}}]},{name:"ChangeOwnerOk",header:846932810,fields:[{name:"queryId",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"newOwner",type:{kind:"simple",type:"address",optional:!1}}]},{name:"InternalTask",header:170908148,fields:[{name:"id",type:{kind:"simple",type:"uint",optional:!1,format:128}},{name:"creator",type:{kind:"simple",type:"address",optional:!1}},{name:"executor",type:{kind:"simple",type:"address",optional:!1}},{name:"coin_amount",type:{kind:"simple",type:"uint",optional:!1,format:64}}]},{name:"ChildCallback",header:2083249270,fields:[{name:"id",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"address",type:{kind:"simple",type:"address",optional:!1}}]},{name:"TaskData",header:null,fields:[{name:"id",type:{kind:"simple",type:"uint",optional:!1,format:128}},{name:"creator",type:{kind:"simple",type:"address",optional:!1}},{name:"executor",type:{kind:"simple",type:"address",optional:!1}},{name:"coin_amount",type:{kind:"simple",type:"uint",optional:!1,format:64}},{name:"status",type:{kind:"simple",type:"uint",optional:!1,format:8}}]}],$=[{name:"showData",arguments:[],returnType:{kind:"simple",type:"TaskData",optional:!1}},{name:"balance",arguments:[],returnType:{kind:"simple",type:"string",optional:!1}},{name:"owner",arguments:[],returnType:{kind:"simple",type:"address",optional:!1}}],ee=[{receiver:"internal",message:{kind:"empty"}},{receiver:"internal",message:{kind:"text",text:"task is done"}},{receiver:"internal",message:{kind:"typed",type:"Deploy"}}];class p{constructor(t,e){this.abi={types:_,getters:$,receivers:ee,errors:q},this.address=t,this.init=e}static async init(t){return await Q(t)}static async fromInit(t){const e=await Q(t),a=r.contractAddress(0,e);return new p(a,e)}static fromAddress(t){return new p(t)}async send(t,e,a,s){let i=null;if(s===null&&(i=new r.Cell),s==="task is done"&&(i=r.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof r.Slice)&&s.$$type==="Deploy"&&(i=r.beginCell().store(G(s)).endCell()),i===null)throw new Error("Invalid message type");await t.internal(e,{...a,body:i})}async getShowData(t){let e=new r.TupleBuilder,a=(await t.get("showData",e.build())).stack;return R(a)}async getBalance(t){let e=new r.TupleBuilder;return(await t.get("balance",e.build())).stack.readString()}async getOwner(t){let e=new r.TupleBuilder;return(await t.get("owner",e.build())).stack.readAddress()}}function te(){const n=E(),t=new S.TonClient({endpoint:"https://testnet.toncenter.com/api/v2/jsonRPC",apiKey:"7f9775a808b429f000a1bd9a8ee2c23ae2bc5df3d2930d6991fe84c01acf8c5c"}),e=m.fromAddress(r.Address.parse("EQCkJJHLIt8xjhuwQOfKhUSUOoq1slbIDNZnTeL7z0viT8fx")),a=t.open(e);return{newTask:async s=>{if(n.connected){let i={$$type:"InternalTask",id:s.id,creator:s.sender,executor:s.executor,coin_amount:s.coin_amount};a==null||a.send(n.sender,{value:s.coin_amount},i).then(()=>console.log("123")).catch(g=>console.log("bed ba"))}},getChild:async s=>await a.getAddressOfChild(s),getChildInfo:async s=>{let i=await p.fromAddress(s);return(await t.open(i)).getShowData()},markAsDone:async s=>{let i=await p.fromAddress(s);(await t.open(i)).send(n.sender,{value:r.toNano("0.05")},"task is done")}}}function se({task:n}){E(),Y(),D();const[t,e]=A.useState({id:BigInt(n.id),executor:null,coin_amount:r.toNano(n.price)}),a=async l=>{await e(d=>({...d,executor:r.Address.parse(l.user_id)})),i.newTask(t)},s=T(),i=te();async function g(){let l=await i.getChild(n.id);if(l!==null){let d=await i.getChildInfo(l);(Number(d.status)===1&&n.status!==1||Number(d.status)===4&&n.status!==4)&&I.post("/updtask",{id:Number(n.id),status:Number(d.status),exec:d.executor.toString()})}}const c=()=>{setInterval(g,5e3)};A.useEffect(c,[]);const h=(l=>{const d=/#[a-zA-Z0-9_]+/g,u=l.match(d);return console.log(u),u||[]})(n.tags).map(l=>o.jsx(M,{className:"p-4 bg-t-gr text-white",children:l})),b=n.responses.map(l=>o.jsxs("div",{className:"flex justify-between items-center overflow-scroll",strong:!0,inset:!0,outline:!0,children:[o.jsxs("div",{onClick:()=>console.log("user profile"),children:[o.jsxs("div",{className:"text-md",children:[l.user.fname," ",l.user.lname]}),o.jsx("div",{className:"text-t-hint",children:k(l.user.wallet)})]}),o.jsx("div",{children:o.jsx("button",{className:"bg-t-blue p-2 rounded-2xl",onClick:()=>a(l),children:"choose"})})]},l.id));function k(l){const d=l.slice(0,4),u=l.slice(-4);return`${d}...${u}`}const L=()=>{I.get("/tasks/"+s)};return o.jsxs(x,{colors:{bgMaterial:"bg-black"},children:[o.jsx(N,{colors:{bgMaterial:"bg-t-black"},className:"gap-2 text-white border-b-2 border-t-hint",title:"Task",left:o.jsx(H,{onClick:L,className:"cursor-pointer m-4 ",material:J()})}),o.jsxs(B,{className:"bg-t-black my-0  py-4",children:[o.jsxs("div",{className:"flex flex-col gap-2 mb-6",children:[o.jsx("div",{className:"text-white text-2xl",children:n.headline}),o.jsxs("div",{className:"text-t-blue",children:[n.price," TON"]}),o.jsxs("div",{className:"text-t-hint",children:["Posted on: ",new Date(n.created_at).toLocaleString("en-us",{month:"long",day:"numeric"})]})]}),o.jsx("div",{className:"gap-2 flex mb-6",children:h}),o.jsx("div",{className:"text-t-hint mb-6",children:n.description}),o.jsx("div",{className:"w-full flex justify-center",children:o.jsx("button",{className:"w-10/12 h-8 rounded text-white bg-t-blue",children:"Share Task"})})]}),o.jsxs(B,{className:"bg-t-black text-white py-4 my-2",children:[o.jsx("div",{className:"text-lg mb-2",children:"Workers applied"}),b]})]})}function Ae({task:n}){let[t,e]=A.useState("");return A.useEffect(()=>{const a=n.user.tid,s=new URLSearchParams(window.Telegram.WebApp.initData),i=JSON.parse(s.get("user")).id;a==i&&(e("creator"),console.log("true"))},[]),t==="creator"?o.jsx(se,{task:n}):o.jsx(F,{})}export{Ae as default};
