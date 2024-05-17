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

export type TaskAddresses = {
    $$type: 'TaskAddresses';
    address: Dictionary<number, Address>;
    length: bigint;
}

export function storeTaskAddresses(src: TaskAddresses) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeDict(src.address, Dictionary.Keys.Uint(32), Dictionary.Values.Address());
        b_0.storeUint(src.length, 32);
    };
}

export function loadTaskAddresses(slice: Slice) {
    let sc_0 = slice;
    let _address = Dictionary.load(Dictionary.Keys.Uint(32), Dictionary.Values.Address(), sc_0);
    let _length = sc_0.loadUintBig(32);
    return { $$type: 'TaskAddresses' as const, address: _address, length: _length };
}

function loadTupleTaskAddresses(source: TupleReader) {
    let _address = Dictionary.loadDirect(Dictionary.Keys.Uint(32), Dictionary.Values.Address(), source.readCellOpt());
    let _length = source.readBigNumber();
    return { $$type: 'TaskAddresses' as const, address: _address, length: _length };
}

function storeTupleTaskAddresses(source: TaskAddresses) {
    let builder = new TupleBuilder();
    builder.writeCell(source.address.size > 0 ? beginCell().storeDictDirect(source.address, Dictionary.Keys.Uint(32), Dictionary.Values.Address()).endCell() : null);
    builder.writeNumber(source.length);
    return builder.build();
}

function dictValueParserTaskAddresses(): DictionaryValue<TaskAddresses> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTaskAddresses(src)).endCell());
        },
        parse: (src) => {
            return loadTaskAddresses(src.loadRef().beginParse());
        }
    }
}

 type TonTaskMaster_init_args = {
    $$type: 'TonTaskMaster_init_args';
}

function initTonTaskMaster_init_args(src: TonTaskMaster_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
    };
}

async function TonTaskMaster_init() {
    const __code = Cell.fromBase64('te6ccgECHAEABSIAART/APSkE/S88sgLAQIBYgIDAvLQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFNs88uCCyPhDAcx/AcoAVUBQRct/WCDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFgIC9ADLH4EBAc8Aye1UFwQCASAMDQL2AZIwf+BwIddJwh+VMCDXCx/eIIIQCi/Z9LqO1jDTHwGCEAov2fS68uCB03/6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB0z9VMGwU4CCCEHwr3Ha6BQYCrvhDVTDbPFxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiHBagEJZfwUEQxNtAts8fwcKAcqOSjDTHwGCEHwr3Ha68uCB0z/6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIEmwSA6QQJIAgQAQgbpUwWfRbMJRBM/QW4gJ/4CDAACLXScEhsJJbf+CCEJRqmLa64wIwcAgA9gTQ9AQwbQGBLnUBgBD0D2+h8uCHAYEudSICgBD0F8gByPQAyQHMcAHKAFUwBYIQCi/Z9FAFyx8Ty38BINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFss/yQFO0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/CQE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwKAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAsAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCEb4o7tnm2eNijBcOAgEgDxAAAiMCASAREgIBSBobAhG22Btnm2eNijAXEwIBIBUWAQ74J28Qeds8FADaIMEBIcJNsfLQhsgiwQCYgC0BywcCowLef3BvAASOGwR6qQwgwABSMLCzm3AzpjAUb4wEpAQDkTDiBOQBs5cCgC5vjAKk3o4QA3qpDKYwE2+MA6QiwAAQNOYzIqUDmlMSb4EBywcCpQLkbCHJ0AIVsxY2zxVBNs8bFGAXGAC5svRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnCdl05as07LczoOlm2UZuikgnBAznVp5xX50lCwHWFuJkeygAZztRNDUAfhj0gABjjPTf/pAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB9ATTH1kCgQEB1wAFBFAzbBXgMPgo1wsKgwm68uCJ2zwZABqAICQCWfQOb6GSMG3fABpwghAdzWUA+EJtI1UCABGwr7tRNDSAAGAAdbJu40NWlwZnM6Ly9RbWRmM2dtNkVjSjVNdFN4TGdzbVBWa2l3YmVRV3Y1a3o3QlhnWk5jOG1NM29Wgg');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initTonTaskMaster_init_args({ $$type: 'TonTaskMaster_init_args' })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const TonTaskMaster_errors: { [key: number]: { message: string } } = {
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

const TonTaskMaster_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwner","header":2174598809,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwnerOk","header":846932810,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"TaskData","header":null,"fields":[{"name":"id","type":{"kind":"simple","type":"uint","optional":false,"format":128}},{"name":"creator","type":{"kind":"simple","type":"address","optional":false}},{"name":"executor","type":{"kind":"simple","type":"address","optional":false}},{"name":"coin_amount","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"status","type":{"kind":"simple","type":"uint","optional":false,"format":8}}]},
    {"name":"InternalTask","header":170908148,"fields":[{"name":"id","type":{"kind":"simple","type":"uint","optional":false,"format":128}},{"name":"creator","type":{"kind":"simple","type":"address","optional":false}},{"name":"executor","type":{"kind":"simple","type":"address","optional":false}},{"name":"coin_amount","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"ChildCallback","header":2083249270,"fields":[{"name":"id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"address","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"TaskAddresses","header":null,"fields":[{"name":"address","type":{"kind":"dict","key":"uint","keyFormat":32,"value":"address"}},{"name":"length","type":{"kind":"simple","type":"uint","optional":false,"format":32}}]},
]

const TonTaskMaster_getters: ABIGetter[] = [
    {"name":"balance","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
    {"name":"addressOfChild","arguments":[{"name":"id","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"address","optional":true}},
    {"name":"owner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
]

const TonTaskMaster_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"InternalTask"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ChildCallback"}},
    {"receiver":"internal","message":{"kind":"empty"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class TonTaskMaster implements Contract {
    
    static async init() {
        return await TonTaskMaster_init();
    }
    
    static async fromInit() {
        const init = await TonTaskMaster_init();
        const address = contractAddress(0, init);
        return new TonTaskMaster(address, init);
    }
    
    static fromAddress(address: Address) {
        return new TonTaskMaster(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  TonTaskMaster_types,
        getters: TonTaskMaster_getters,
        receivers: TonTaskMaster_receivers,
        errors: TonTaskMaster_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: InternalTask | ChildCallback | null | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'InternalTask') {
            body = beginCell().store(storeInternalTask(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ChildCallback') {
            body = beginCell().store(storeChildCallback(message)).endCell();
        }
        if (message === null) {
            body = new Cell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getBalance(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('balance', builder.build())).stack;
        let result = source.readString();
        return result;
    }
    
    async getAddressOfChild(provider: ContractProvider, id: bigint) {
        let builder = new TupleBuilder();
        builder.writeNumber(id);
        let source = (await provider.get('addressOfChild', builder.build())).stack;
        let result = source.readAddressOpt();
        return result;
    }
    
    async getOwner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('owner', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}