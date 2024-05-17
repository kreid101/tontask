import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwner = {
    $$type: 'ChangeOwner';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2174598809, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwner(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2174598809) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwner(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwner(source: ChangeOwner) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwner(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwnerOk = {
    $$type: 'ChangeOwnerOk';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(846932810, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwnerOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 846932810) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwnerOk(src.loadRef().beginParse());
        }
    }
}

export type InternalTask = {
    $$type: 'InternalTask';
    id: bigint;
    creator: Address;
    executor: Address;
    coin_amount: bigint;
}

export function storeInternalTask(src: InternalTask) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(170908148, 32);
        b_0.storeUint(src.id, 128);
        b_0.storeAddress(src.creator);
        b_0.storeAddress(src.executor);
        b_0.storeUint(src.coin_amount, 64);
    };
}

export function loadInternalTask(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 170908148) { throw Error('Invalid prefix'); }
    let _id = sc_0.loadUintBig(128);
    let _creator = sc_0.loadAddress();
    let _executor = sc_0.loadAddress();
    let _coin_amount = sc_0.loadUintBig(64);
    return { $$type: 'InternalTask' as const, id: _id, creator: _creator, executor: _executor, coin_amount: _coin_amount };
}

function loadTupleInternalTask(source: TupleReader) {
    let _id = source.readBigNumber();
    let _creator = source.readAddress();
    let _executor = source.readAddress();
    let _coin_amount = source.readBigNumber();
    return { $$type: 'InternalTask' as const, id: _id, creator: _creator, executor: _executor, coin_amount: _coin_amount };
}

function storeTupleInternalTask(source: InternalTask) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.id);
    builder.writeAddress(source.creator);
    builder.writeAddress(source.executor);
    builder.writeNumber(source.coin_amount);
    return builder.build();
}

function dictValueParserInternalTask(): DictionaryValue<InternalTask> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeInternalTask(src)).endCell());
        },
        parse: (src) => {
            return loadInternalTask(src.loadRef().beginParse());
        }
    }
}

export type ChildCallback = {
    $$type: 'ChildCallback';
    id: bigint;
    address: Address;
}

export function storeChildCallback(src: ChildCallback) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2083249270, 32);
        b_0.storeUint(src.id, 64);
        b_0.storeAddress(src.address);
    };
}

export function loadChildCallback(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2083249270) { throw Error('Invalid prefix'); }
    let _id = sc_0.loadUintBig(64);
    let _address = sc_0.loadAddress();
    return { $$type: 'ChildCallback' as const, id: _id, address: _address };
}

function loadTupleChildCallback(source: TupleReader) {
    let _id = source.readBigNumber();
    let _address = source.readAddress();
    return { $$type: 'ChildCallback' as const, id: _id, address: _address };
}

function storeTupleChildCallback(source: ChildCallback) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.id);
    builder.writeAddress(source.address);
    return builder.build();
}

function dictValueParserChildCallback(): DictionaryValue<ChildCallback> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChildCallback(src)).endCell());
        },
        parse: (src) => {
            return loadChildCallback(src.loadRef().beginParse());
        }
    }
}

export type TaskData = {
    $$type: 'TaskData';
    id: bigint;
    creator: Address;
    executor: Address;
    coin_amount: bigint;
    status: bigint;
}

export function storeTaskData(src: TaskData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(src.id, 128);
        b_0.storeAddress(src.creator);
        b_0.storeAddress(src.executor);
        b_0.storeUint(src.coin_amount, 64);
        b_0.storeUint(src.status, 8);
    };
}

export function loadTaskData(slice: Slice) {
    let sc_0 = slice;
    let _id = sc_0.loadUintBig(128);
    let _creator = sc_0.loadAddress();
    let _executor = sc_0.loadAddress();
    let _coin_amount = sc_0.loadUintBig(64);
    let _status = sc_0.loadUintBig(8);
    return { $$type: 'TaskData' as const, id: _id, creator: _creator, executor: _executor, coin_amount: _coin_amount, status: _status };
}

function loadTupleTaskData(source: TupleReader) {
    let _id = source.readBigNumber();
    let _creator = source.readAddress();
    let _executor = source.readAddress();
    let _coin_amount = source.readBigNumber();
    let _status = source.readBigNumber();
    return { $$type: 'TaskData' as const, id: _id, creator: _creator, executor: _executor, coin_amount: _coin_amount, status: _status };
}

function storeTupleTaskData(source: TaskData) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.id);
    builder.writeAddress(source.creator);
    builder.writeAddress(source.executor);
    builder.writeNumber(source.coin_amount);
    builder.writeNumber(source.status);
    return builder.build();
}

function dictValueParserTaskData(): DictionaryValue<TaskData> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTaskData(src)).endCell());
        },
        parse: (src) => {
            return loadTaskData(src.loadRef().beginParse());
        }
    }
}

 type TonTaskChild_init_args = {
    $$type: 'TonTaskChild_init_args';
    msg: InternalTask;
}

function initTonTaskChild_init_args(src: TonTaskChild_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.store(storeInternalTask(src.msg));
    };
}

async function TonTaskChild_init(msg: InternalTask) {
    const __code = Cell.fromBase64('te6ccgECHAEABSwAART/APSkE/S88sgLAQIBYgIDA37QAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFts88uCC2zwTBAUCASAJCgK67aLt+wGSMH/gcCHXScIflTAg1wsf3iDAACLXScEhsJJbf+AgghCUapi2uo6oMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+DAAJEw4w1wBgcB9sj4QwHMfwHKAFVgUHYg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYFBlBFy39YINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFss/ywcByMsfyQHMyQgBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8FwHI+QGC8JCEkRl2Tsc0v7b8ZQi7A+hG5gxWJVrGBEROMKl93e0quo68MYFh2fhBbyQQI18DUlDHBZF/nPhBbyQQI18DUnDHBeLy9HT4J28QggiYloChUkByf1UgbW1t2zwBf9sx4BcABO1UAgEgCwwCASAPEAIRuIq9s82zxsdYEw0CEbhR3bPNs8bHGBMOAApUdUNTVAACJgIBIBESAgFIGhsCEbbYG2ebZ42OMBMUALm3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOE7Lpy1Zp2W5nQdLNsozdFJBOCBnOrTzivzpKFgOsLcTI9lAC4O1E0NQB+GPSAAHjAvgo1wsKgwm68uCJ0x8BghAKL9n0uvLggdN/+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdM/VTAE0VUC2zwVFgEO+CdvEHnbPBkA5vpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB03/6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB0z/TB1VABdQB0NMfMBcWbBcBwDCBK31TEscFs/L0+EFvJBNfA4IK+vCAoXH4I/hC+EKCCvrwgHL4KFKgyFmCEHwr3HZQA8sfyz8BINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WyX9VMG1t2zxVUBcByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAGACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzADaIMEBIcJNsfLQhsgiwQCYgC0BywcCowLef3BvAASOGwR6qQwgwABSMLCzm3AzpjAUb4wEpAQDkTDiBOQBs5cCgC5vjAKk3o4QA3qpDKYwE2+MA6QiwAAQNOYzIqUDmlMSb4EBywcCpQLkbCHJ0AARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1RTUFZTkRvQjE5RllTMlBVNUZSZWl5cE1YSkE3TUd0Uzg1Rjc4MnVpR000TYIA==');
    const __system = Cell.fromBase64('te6cckECHgEABTYAAQHAAQEFoFzrAgEU/wD0pBP0vPLICwMCAWIECgN+0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRbbPPLggts8EwUIArrtou37AZIwf+BwIddJwh+VMCDXCx/eIMAAItdJwSGwklt/4CCCEJRqmLa6jqgw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4MAAkTDjDXAGBwE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwWAcj5AYLwkISRGXZOxzS/tvxlCLsD6EbmDFYlWsYERE4wqX3d7Sq6jrwxgWHZ+EFvJBAjXwNSUMcFkX+c+EFvJBAjXwNScMcF4vL0dPgnbxCCCJiWgKFSQHJ/VSBtbW3bPAF/2zHgFgH2yPhDAcx/AcoAVWBQdiDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFgUGUEXLf1gg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8Wyz/LBwHIyx/JAczJCQAE7VQCASALEAIBIAwOAhG4ir2zzbPGx1gTDQAKVHVDU1QCEbhR3bPNs8bHGBMPAAImAgEgERsCASASGgIRttgbZ5tnjY4wExgC4O1E0NQB+GPSAAHjAvgo1wsKgwm68uCJ0x8BghAKL9n0uvLggdN/+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdM/VTAE0VUC2zwUFQDm+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHTf/pAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHTP9MHVUAF1AHQ0x8wFxZsFwHAMIErfVMSxwWz8vT4QW8kE18Dggr68IChcfgj+EL4QoIK+vCAcvgoUqDIWYIQfCvcdlADyx/LPwEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJf1UwbW3bPFVQFgHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAXAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAQ74J28Qeds8GQDaIMEBIcJNsfLQhsgiwQCYgC0BywcCowLef3BvAASOGwR6qQwgwABSMLCzm3AzpjAUb4wEpAQDkTDiBOQBs5cCgC5vjAKk3o4QA3qpDKYwE2+MA6QiwAAQNOYzIqUDmlMSb4EBywcCpQLkbCHJ0AC5t3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwThOy6ctWadluZ0HSzbKM3RSQTggZzq084r86ShYDrC3EyPZQAgFIHB0AEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtUU1BWU5Eb0IxOUZZUzJQVTVGUmVpeXBNWEpBN01HdFM4NUY3ODJ1aUdNNE2CCX5FhK');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initTonTaskChild_init_args({ $$type: 'TonTaskChild_init_args', msg })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const TonTaskChild_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack undeflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    11133: { message: `you cant take your own tasks` },
    25049: { message: `you dont have enough rights to call this function` },
}

const TonTaskChild_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwner","header":2174598809,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwnerOk","header":846932810,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"InternalTask","header":170908148,"fields":[{"name":"id","type":{"kind":"simple","type":"uint","optional":false,"format":128}},{"name":"creator","type":{"kind":"simple","type":"address","optional":false}},{"name":"executor","type":{"kind":"simple","type":"address","optional":false}},{"name":"coin_amount","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"ChildCallback","header":2083249270,"fields":[{"name":"id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"address","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"TaskData","header":null,"fields":[{"name":"id","type":{"kind":"simple","type":"uint","optional":false,"format":128}},{"name":"creator","type":{"kind":"simple","type":"address","optional":false}},{"name":"executor","type":{"kind":"simple","type":"address","optional":false}},{"name":"coin_amount","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"status","type":{"kind":"simple","type":"uint","optional":false,"format":8}}]},
]

const TonTaskChild_getters: ABIGetter[] = [
    {"name":"showData","arguments":[],"returnType":{"kind":"simple","type":"TaskData","optional":false}},
    {"name":"balance","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
    {"name":"owner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
]

const TonTaskChild_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"empty"}},
    {"receiver":"internal","message":{"kind":"text","text":"task is done"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class TonTaskChild implements Contract {
    
    static async init(msg: InternalTask) {
        return await TonTaskChild_init(msg);
    }
    
    static async fromInit(msg: InternalTask) {
        const init = await TonTaskChild_init(msg);
        const address = contractAddress(0, init);
        return new TonTaskChild(address, init);
    }
    
    static fromAddress(address: Address) {
        return new TonTaskChild(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  TonTaskChild_types,
        getters: TonTaskChild_getters,
        receivers: TonTaskChild_receivers,
        errors: TonTaskChild_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: null | 'task is done' | Deploy) {
        
        let body: Cell | null = null;
        if (message === null) {
            body = new Cell();
        }
        if (message === 'task is done') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getShowData(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('showData', builder.build())).stack;
        const result = loadTupleTaskData(source);
        return result;
    }
    
    async getBalance(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('balance', builder.build())).stack;
        let result = source.readString();
        return result;
    }
    
    async getOwner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('owner', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}