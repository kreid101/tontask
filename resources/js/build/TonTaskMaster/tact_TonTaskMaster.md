# TACT Compilation Report
Contract: TonTaskMaster
BOC Size: 1326 bytes

# Types
Total Types: 12

## StateInit
TLB: `_ code:^cell data:^cell = StateInit`
Signature: `StateInit{code:^cell,data:^cell}`

## Context
TLB: `_ bounced:bool sender:address value:int257 raw:^slice = Context`
Signature: `Context{bounced:bool,sender:address,value:int257,raw:^slice}`

## SendParameters
TLB: `_ bounce:bool to:address value:int257 mode:int257 body:Maybe ^cell code:Maybe ^cell data:Maybe ^cell = SendParameters`
Signature: `SendParameters{bounce:bool,to:address,value:int257,mode:int257,body:Maybe ^cell,code:Maybe ^cell,data:Maybe ^cell}`

## Deploy
TLB: `deploy#946a98b6 queryId:uint64 = Deploy`
Signature: `Deploy{queryId:uint64}`

## DeployOk
TLB: `deploy_ok#aff90f57 queryId:uint64 = DeployOk`
Signature: `DeployOk{queryId:uint64}`

## FactoryDeploy
TLB: `factory_deploy#6d0ff13b queryId:uint64 cashback:address = FactoryDeploy`
Signature: `FactoryDeploy{queryId:uint64,cashback:address}`

## ChangeOwner
TLB: `change_owner#819dbe99 queryId:uint64 newOwner:address = ChangeOwner`
Signature: `ChangeOwner{queryId:uint64,newOwner:address}`

## ChangeOwnerOk
TLB: `change_owner_ok#327b2b4a queryId:uint64 newOwner:address = ChangeOwnerOk`
Signature: `ChangeOwnerOk{queryId:uint64,newOwner:address}`

## TaskData
TLB: `_ id:uint128 creator:address executor:address coin_amount:uint64 status:uint8 = TaskData`
Signature: `TaskData{id:uint128,creator:address,executor:address,coin_amount:uint64,status:uint8}`

## InternalTask
TLB: `internal_task#0a2fd9f4 id:uint128 creator:address executor:address coin_amount:uint64 = InternalTask`
Signature: `InternalTask{id:uint128,creator:address,executor:address,coin_amount:uint64}`

## ChildCallback
TLB: `child_callback#7c2bdc76 id:uint64 address:address = ChildCallback`
Signature: `ChildCallback{id:uint64,address:address}`

## TaskAddresses
TLB: `_ address:dict<uint32, address> length:uint32 = TaskAddresses`
Signature: `TaskAddresses{address:dict<uint32, address>,length:uint32}`

# Get Methods
Total Get Methods: 3

## balance

## addressOfChild
Argument: id

## owner

# Error Codes
2: Stack undeflow
3: Stack overflow
4: Integer overflow
5: Integer out of expected range
6: Invalid opcode
7: Type check error
8: Cell overflow
9: Cell underflow
10: Dictionary error
13: Out of gas error
32: Method ID not found
34: Action is invalid or not supported
37: Not enough TON
38: Not enough extra-currencies
128: Null reference exception
129: Invalid serialization prefix
130: Invalid incoming message
131: Constraints error
132: Access denied
133: Contract stopped
134: Invalid argument
135: Code of a contract was not found
136: Invalid address
137: Masterchain support is not enabled for this contract
11133: you cant take your own tasks
25049: you dont have enough rights to call this function