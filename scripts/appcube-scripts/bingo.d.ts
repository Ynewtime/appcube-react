/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2022. All rights reserved.
 */

interface BingoRequireFunction {
  (id: string): any
}

interface BingoModule {
  exports: any
  require: BingoRequireFunction
  id: string
  filename: string
  loaded: boolean
  parent: BingoModule | null
  children: BingoModule[]
}

interface BingoRequire extends BingoRequireFunction {
  resolve(id: string): string

  cache: any
  extensions: any
  main: BingoModule | undefined
}

/**
 * module the bingo module global variable
 */
declare var module: BingoModule
/**
 * require the bingo module require function
 */
declare var require: BingoRequire
/**
 * exports the bingo module exports variable
 */
declare var exports: any
/**
 * __filename the module's filename
 */
declare var __filename: string
/**
 * __dirname the module's dir name
 */
declare var __dirname: string

/**
 * Console the bingo's console class.
 */
interface Console {
  /**
   * assert assert a value
   * @param value
   * @param message
   * @param optionalParams
   */
  assert(value: any, message?: string, ...optionalParams: any[]): void

  dir(obj: any, options?: { showHidden?: boolean; depth?: number; colors?: boolean }): void

  /**
   * error write error log message
   * @param message the first message
   * @param optionalParams the rest message
   */
  error(message?: any, ...optionalParams: any[]): void

  /**
   * info write info log message
   * @param message the first message
   * @param optionalParams the rest message
   */
  info(message?: any, ...optionalParams: any[]): void

  /**
   * log write debug log message
   * @param message the first message
   * @param optionalParams the rest message
   */
  log(message?: any, ...optionalParams: any[]): void

  /**
   * debug write debug log message
   * @param message the first message
   * @param optionalParams the rest message
   */
  debug(message?: any, ...optionalParams: any[]): void

  time(label: string): void

  timeEnd(label: string): void

  trace(message?: any, ...optionalParams: any[]): void

  warn(message?: any, ...optionalParams: any[]): void
}

declare var console: Console

/**
 * Action's Object options
 */
interface ObjectOptions {
  type: string
  label?: string
  description?: string
}

/**
 * Action's method options
 */
interface MethodOptions {
  input: string
  output?: string
  label?: string
  description?: string
}

/**
 * Action's parameter options
 */
interface ParamOptions {
  /**
   * Parameter type name, support: Boolean, String, Number, Date, Datetime, Object, Any, Class
   */
  type: string
  /**
   * Whether the parameter is required
   */
  required?: boolean
  /**
   * Whether the parameter is a collection type
   */
  isCollection?: boolean
  /**
   * Minimum value of the parameter
   */
  min?: number | string
  /**
   * Maximum value of the parameter
   */
  max?: number | string
  /**
   * Whether to calculate the length of the string in characters
   */
  lengthInCharacter?: boolean

  /**
   * Matching pattern when parameter checking
   */
  pattern?: string | RegExp

  /**
   * Prompt message returned when the parameter is illegal
   */
  message?: string

  /**
   * label of parameter
   */
  label?: string

  /**
   * the detail info of parameter
   */
  description?: string

  /**
   * The schema object name to which the parameter is bound, used only when type equal Object
   */
  metaName?: string
}

/**
 * Action
 */
interface Action {
  /**
   * To mark the class as an action parameter class or method class.
   * @returns {Function|*}
   */
  object(options: ObjectOptions): Function

  /**
   * To mark the entry point method of the action
   * @returns {Function|*}
   */
  method(options: MethodOptions): Function

  /**
   * To mark action's parameter option
   * @returns {Function|*}
   */
  param(options: ParamOptions): Function
}

/**
 * Action的全局对象，描述action的基本信息.
 */
declare var action: Action

/**
 * useObject to mark the object used by script.
 * @param {string[]} names - object's name array
 * @returns {Function|*}
 */
declare function useObject(names: string[]): Function

/**
 * Bo对象的引用装饰函数
 * useBo to mark the bo used by script.
 * @param {string[]} names - bo's name array
 * @returns {Function|*}
 */
declare function useBo(names: string[]): Function

/**
 * 取对象的size
 * @param value {any}
 * @returns {number}
 */
declare function len(value: any): number

/**
 * Map the typescript string index signature.
 */
interface Dict {
  [id: string]: any
}

/**
 * FLow instance information
 */
interface FlowInstance {
  id: ID
  name: Text
  version: Text
  state: Numeric
  title: Text
}

/**
 * create/update operation will compile bpm definition and return
 */
interface BPMMetaDataCompileInfo {
  id: ID
  errors: string[]
  warnings: string[]
}

/**
 * editer lock state information
 */
interface EditerLockInfo {
  Locked?: boolean
  Editable?: boolean
  LockedBy?: string
  Type?: string
  ResourceID?: ID
  ResourceName?: string
  LockUser?: string
  Lock?: boolean
}

/**
 * bpm metadata definition structure
 */
interface BPMMetadataDefinition {
  active?: boolean
  belongTo?: string
  compilerVer?: number
  createdBy?: string
  createdDate?: string
  custom?: boolean
  deletedDate?: string
  description?: string
  id?: string
  installedPackage?: string
  instanceLabel?: string
  isDeleted?: boolean
  label?: string
  lastModifiedBy?: string
  lastModifiedDate?: string
  localUrl?: string
  logo?: string
  name?: string
  owner?: string
  protectMode?: number
  startStage?: string
  startType?: string
  status?: string
  systemModifiedDate?: string
  version?: string
  visibility?: number
  webSite?: string
  jsonDefinition?: string
}

/**
 * bpm metadata config struct
 */
interface BPMMetadataConfig {
  cancelable?: boolean
  noCancelAfterElem?: string
  noCancelAfterElemLabel?: string
}

/**
 * bpm metadata the common base struct
 */
interface BPMMetadataBase {
  name?: string
  label?: string
}

/**
 * bpm metadata base element for activity
 */
interface BPMMetadataBaseElement extends BPMMetadataBase {
  document?: string
  connector?: string
  connectorLabel?: string
  connectorPoint?: string
  faultConnector?: string
  faultConnectorPoint?: string
  locationX?: number
  locationY?: number
}

/**
 * bpm metadata event definition
 */
interface BPMMetadataEventDefinition {
  timeDate?: string
  timeDuration?: string
  timeCycle?: string
  errorRef?: string
  signalRef?: string
  event?: string
}

/**
 * bpm metadata record crud operation
 */
interface BPMMetadataRecordCrud {
  object?: string
  rollbackIfErr?: boolean
  actionConditions?: BPMMetadataActionCondition[]
  variable?: string
  assignRecordIDTo?: string
  sortField?: string
  sortOrder?: string
  nullIfNoRecords?: boolean
  skipValueType?: string
  skipValue?: string
  limitValueType?: string
  limitValue?: string
  assignTotalRecordNumTo?: string
  isDistinct?: boolean
}

/**
 * bpm medata input assignment
 */
interface BPMMetadataInputAssignment extends BPMMetadataBase {
  input?: string
  valueType?: string
  value?: string
}

/**
 * bpm medata output assignment
 */
interface BPMMetadataOutputAssignment extends BPMMetadataBase {
  assignTo?: string
  output?: string
}

/**
 * bpm medata base event for all event
 */
interface BPMMetadataBaseEvent extends BPMMetadataBaseElement, BPMMetadataEventDefinition {
  type?: string
}

/**
 * bpm metadata event definition boundary event
 */
interface BPMMetadataBoundaryEvent extends BPMMetadataBaseEvent {
  cancelActivity?: boolean
  outputAssignments?: BPMMetadataOutputAssignment[]
}

/**
 * bpm metadata activity struct
 */
interface BPMMetadataActivity extends BPMMetadataBaseElement {
  isForCompensation?: boolean
  inputAssignments?: BPMMetadataInputAssignment[]
  outputAssignments?: BPMMetadataOutputAssignment[]
  boundaryEvents?: BPMMetadataBoundaryEvent[]
  usingSLA?: string
}

/**
 * bpm metadata action condition struct
 */
interface BPMMetadataActionCondition extends BPMMetadataBase {
  field?: string
  operator?: string
  valueType?: string
  value?: string
}

/**
 * bpm metadata constant struct
 */
interface BPMMetadataConstant {
  name?: string
  typeAlias?: string
  description?: string
  dataType?: string
  valueType?: string
  value?: string
}

/**
 * bpm metadata variable struct
 */
interface BPMMetadataVariable {
  name?: string
  typeAlias?: string
  description?: string
  dataType?: string
  extType?: string
  extNS?: string
  isInput?: boolean
  isOutput?: boolean
  isCollection?: boolean
  defaultValueType?: string
  defaultValue?: string
  currencyFactor?: number
  isNested?: boolean
}

/**
 * bpm metadata assignment struct
 */
interface BPMMetadataAssignment {
  name?: string
  typeAlias?: string
  label?: string
  description?: string
  locationX?: number
  locationY?: number
  connector?: string
  connectorPoint?: string
  assignmentItems?: BPMMetadataAssignmentItem[]
}

/**
 * bpm metadata assignment item struct
 */
interface BPMMetadataAssignmentItem extends BPMMetadataBase {
  assignTo?: string
  operator?: string
  valueType?: string
  value?: string
}

/**
 * bpm metadata start event struct
 */
interface BPMMetadataStartEvent extends BPMMetadataBaseEvent {
  startType?: string
  renderType?: string
  render?: string
  title?: string
}

/**
 * bpm metadata end event struct
 */
interface BPMMetadataEndEvent extends BPMMetadataBaseEvent {}

/**
 * bpm metadata send event struct
 */
interface BPMMetadataSendEvent extends BPMMetadataBaseEvent {
  inputAssignments?: BPMMetadataInputAssignment[]
  topic?: string
  routeKey?: string
}

/**
 * bpm metadata catch event struct
 */
interface BPMMetadataCatchEvent extends BPMMetadataBaseEvent {
  criteria?: string
  inputAssignments?: BPMMetadataInputAssignment[]
  outputAssignments?: BPMMetadataOutputAssignment[]
  afterGateway?: boolean
}

/**
 * bpm metadata service task struct
 */
interface BPMMetadataServiceTask extends BPMMetadataActivity, BPMMetadataRecordCrud {
  type?: string
  ref?: string
}

/**
 * bpm metadata router struct
 */
interface BPMMetadataRouter extends BPMMetadataBase {
  defaultRouteType?: string
  defaultRouteTo?: string
  routerItems?: BPMMetadataRouterItem[]
}

/**
 * bpm metadata router item struct
 */
interface BPMMetadataRouterItem extends BPMMetadataBase {
  criteria?: string
  routeType?: string
  routeTo?: string
}

/**
 * bpm metadata human resource struct
 */
interface BPMMetadataHumanResource {
  type?: string
  value?: string
}

/**
 * bpm metadata auto approval config struct
 */
interface BPMMetadataAutoApprovalConfig {
  approvedByBPStarter?: boolean
  approvedByPreTaskOwner?: boolean
  action?: string
  assignments?: BPMMetadataInputAssignment[]
}

/**
 * bpm metadata sla action struct
 */
interface BPMMetadataSLAAction extends BPMMetadataBase {
  type?: string
  action?: string
  criteria?: string
  inputAssignments?: BPMMetadataInputAssignment[]
}

/**
 * bpm metadata usr task struct
 */
interface BPMMetadataUserTask extends BPMMetadataActivity {
  title?: string
  description?: string
  dueDate?: string
  actions?: string
  renderType?: string
  render?: string
  priority?: number
  approvalType?: string
  defaultOutcome?: string
  outcomePercentage?: number
  outcomeTriggerType?: string
  skipApprovalOn?: string
  routeType?: string
  routeTo?: string
  router?: BPMMetadataRouter
  participants?: BPMMetadataHumanResource[]
  excludeParticipants?: BPMMetadataHumanResource[]
  taskOwner?: string
  preActions?: BPMMetadataSLAAction[]
  postActions?: BPMMetadataSLAAction[]
  groupAsSingleParticipant?: boolean
  managerLevel?: number
  riseIfManagerNotExist?: boolean
  autoApproval?: BPMMetadataAutoApprovalConfig
}

/**
 * bpm metadata call activity struct
 */
interface BPMMetadataCallActivity extends BPMMetadataActivity {
  type?: string
  ref?: string
}

/**
 * bpm metadata sub process struct
 */
interface BPMMetadataSubProcess extends BPMMetadataActivity {
  dataMappers?: BPMMetadataAssignment[]
  startEvents?: BPMMetadataStartEvent[]
  endEvents?: BPMMetadataEndEvent[]
  sendEvents?: BPMMetadataSendEvent[]
  catchEvents?: BPMMetadataCatchEvent[]
  serviceTasks?: BPMMetadataServiceTask[]
  userTasks?: BPMMetadataUserTask[]
  callActivities?: BPMMetadataCallActivity[]
  subProcesses?: BPMMetadataSubProcess[]
  exclusiveGateways?: BPMMetadataExclusiveGateway[]
  eventGateways?: BPMMetadataEventGateway[]
  parallelGateways?: BPMMetadataParallelGateway[]
  laneSet?: BPMMetadataLaneSet
  collapsed?: boolean
}

/**
 * bpm metadata business rule task struct
 */
interface BPMMetadataBusinessRuleTask extends BPMMetadataActivity {
  implementation?: string
  ref?: string
}

/**
 * bpm metadata connector info struct
 */
interface BPMMetadataConnectorInfo {
  name?: string
  label?: string
  isDefault?: boolean
  criteria?: string
  to?: string
  toPoint?: string
}

/**
 * bpm metadata base gateway for all gateway
 */
interface BPMMetadataBaseGateway extends BPMMetadataBase {
  document?: string
  connectors?: BPMMetadataConnectorInfo[]
  locationX?: number
  locationY?: number
  direction?: string
}

/**
 * bpm metadata exclusive gateway struct
 */
interface BPMMetadataExclusiveGateway extends BPMMetadataBaseGateway {}

/**
 * bpm metadata event gateway struct
 */
interface BPMMetadataEventGateway extends BPMMetadataBaseGateway {
  parallel?: boolean
}

/**
 * bpm metadata parallel gateway struct
 */
interface BPMMetadataParallelGateway extends BPMMetadataBaseGateway {
  partner?: string
}

/**
 * bpm metadata inclusive gateway struct
 */
interface BPMMetadataInclusiveGateway extends BPMMetadataBaseGateway {
  partner?: string
}

/**
 * bpm metadata lane struct
 */
interface BPMMetadataLane extends BPMMetadataBase {
  locationX?: number
  locationY?: number
  width?: number
  height?: number
  color?: string
  role?: string
  elements?: string[]
}

/**
 * bpm metadata lane set struct
 */
interface BPMMetadataLaneSet extends BPMMetadataBase {
  lanes?: BPMMetadataLane[]
}

/**
 * bpm metadata sla struct
 */
interface BPMMetadataSLA extends BPMMetadataBase {
  label?: string
  active?: boolean
  criteria?: string
  startWhen?: string
  variable?: string
  goalDays?: number
  goalHours?: number
  goalMinutes?: number
  goalOnlyBusinessDays?: number
  goalIncreaseUrgencyBy?: number
  goalActions?: BPMMetadataSLAAction[]
  deadlineDays?: number
  deadlineHours?: number
  deadlineMinutes?: number
  deadlineOnlyBusinessDays?: boolean
  deadlineIncreaseUrgencyBy?: number
  deadlineActions?: BPMMetadataSLAAction[]
}

/**
 * bpm metadata start interface struct
 */
interface BPMMetadataStartInterface {
  Title?: string
  Operation?: string
  StartType?: string
  URL?: string
}

/**
 * bpm metadata business process struct
 */
interface BPMMetadataBusinessProcess {
  constants?: BPMMetadataConstant[]
  variables?: BPMMetadataVariable[]
  dataMappers?: BPMMetadataAssignment[]
  startEvents?: BPMMetadataStartEvent[]
  endEvents?: BPMMetadataEndEvent[]
  sendEvents?: BPMMetadataSendEvent[]
  catchEvents?: BPMMetadataCatchEvent[]
  serviceTasks?: BPMMetadataServiceTask[]
  userTasks?: BPMMetadataUserTask[]
  callActivities?: BPMMetadataCallActivity[]
  subProcesses?: BPMMetadataSubProcess[]
  businessRuleTasks?: BPMMetadataBusinessRuleTask[]
  excludeGateways?: BPMMetadataExclusiveGateway[]
  eventGateways?: BPMMetadataEventGateway[]
  parallelGateways?: BPMMetadataParallelGateway[]
  inclusiveGateways?: BPMMetadataInclusiveGateway[]
  usingSLA?: string
  startSLAs?: string[]
  stopSLAs?: string[]
  sLAs?: BPMMetadataSLA[]
  laneSet?: BPMMetadataLaneSet
  interfaces?: BPMMetadataStartInterface[]
  config?: BPMMetadataConfig
}

/**
 * bpm metadata business process detail struct
 */
interface BPMMetadataDefinitionDetail extends BPMMetadataBusinessProcess, BPMMetadataDefinition {}

/**
 * Header the http header type
 */
interface Header {
  [id: string]: string[]
}

declare type ID = string
declare type Text = string
declare type TextArea = string
declare type Datetime = Date
declare type Numeric = number
declare type Checkbox = boolean
declare type Lookup = string
declare type MasterDetail = string
declare type Currency = string
declare type Phone = string
declare type Hierarchy = string
declare type PostalCode = string

/**
 * Entity db entity
 */
interface Entity {
  readonly id?: ID
  name?: Text
  readonly createdBy?: Text
  readonly createdDate?: Datetime
  readonly lastModifiedBy?: Text
  readonly lastModifiedDate?: Datetime
  readonly owner?: Lookup
  readonly currencyIsoCode?: Text
  readonly installedPackage?: Lookup
  readonly custom?: Checkbox
}

// please see lib.es2015.collection.d.ts
/// <reference no-default-lib="true"/>

interface Map<K, V> {
  clear(): void

  delete(key: K): boolean

  forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void

  get(key: K): V | undefined

  has(key: K): boolean

  set(key: K, value: V): this

  readonly size: number
}

interface MapConstructor {
  new (): Map<any, any>

  new <K, V>(entries?: readonly (readonly [K, V])[] | null): Map<K, V>

  readonly prototype: Map<any, any>
}

declare var Map: MapConstructor

interface ReadonlyMap<K, V> {
  forEach(callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void, thisArg?: any): void

  get(key: K): V | undefined

  has(key: K): boolean

  readonly size: number
}

interface WeakMap<K extends object, V> {
  delete(key: K): boolean

  get(key: K): V | undefined

  has(key: K): boolean

  set(key: K, value: V): this
}

interface WeakMapConstructor {
  new <K extends object = object, V = any>(entries?: readonly [K, V][] | null): WeakMap<K, V>

  readonly prototype: WeakMap<object, any>
}

declare var WeakMap: WeakMapConstructor

interface Set<T> {
  add(value: T): this

  clear(): void

  delete(value: T): boolean

  forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void

  has(value: T): boolean

  readonly size: number
}

interface SetConstructor {
  new <T = any>(values?: readonly T[] | null): Set<T>

  readonly prototype: Set<any>
}

declare var Set: SetConstructor

interface ReadonlySet<T> {
  forEach(callbackfn: (value: T, value2: T, set: ReadonlySet<T>) => void, thisArg?: any): void

  has(value: T): boolean

  readonly size: number
}

interface WeakSet<T extends object> {
  add(value: T): this

  delete(value: T): boolean

  has(value: T): boolean
}

interface WeakSetConstructor {
  new <T extends object = object>(values?: readonly T[] | null): WeakSet<T>

  readonly prototype: WeakSet<object>
}

declare var WeakSet: WeakSetConstructor

declare module 'runtime' {
  /**
   * 获取栈信息
   */
  export declare function stack(): string
  /**
   * 让线程睡眠一段时间, 最大睡眠时间为1分钟, 超出上限值会抛出异常。
   *
   * 负时间段或零时间段会导致睡眠立即返回。
   *
   * @param duration 睡眠时间。单位为毫秒。
   */
  export declare function sleep(duration: number): void
}

declare module 'assert' {
  /**
   * 用例断言错误类
   */
  export declare class AssertionError implements Error {
    name: string
    readonly message: string
    constructor(message: string)
    toString(): string
  }
  /**
   * 设置测试用例失败
   *
   * @example
   * ```ts
   *
   * import { fail } from 'assert';
   * fail("some error message");
   * ```
   *
   * @param msg 错误信息
   */
  export declare function fail(message: string): void
  /**
   * 断言boolean变量为true
   *
   * @param value boolean变量值
   * @param 测试用例断言失败时，期待提示的信息
   */
  export declare function ok(value: boolean, message: string): void
  /**
   * 断言实际值与期待值相等, 仅适应简单类型：number, string, boolean
   *
   * @param actual 实际值
   * @param expected 期待值
   * @param message 测试用例断言失败时，期待提示的信息
   */
  export declare function equal(actual: any, expected: any, message: string): void
  /**
   * 断言实际值与期待值不相等, 仅适应简单类型：number, string, boolean
   *
   * @param actual 实际值
   * @param expected 期待值
   * @param message 测试用例断言失败时，期待提示的信息
   */
  export declare function notEqual(actual: any, expected: any, message: string): void
  /**
   * 断言实际值与期待值相等, 适应复杂类型：decimal.Decimal, Date, Array, Object
   *
   * @param actual 实际值
   * @param expected 期待值
   * @param message 测试用例断言失败时，期待提示的信息
   */
  export declare function deepEqual(actual: any, expected: any, message: string): void
  /**
   *
   * 断言实际值与期待值不相等, 适应复杂类型：decimal.Decimal, Date, Array, Object
   *
   * @param actual 实际值
   * @param expected 期待值
   * @param message 测试用例断言失败时，期待提示的信息
   */
  export declare function notDeepEqual(actual: any, expected: any, message: string): void
  /**
   * javascript严格模式下，断言实际值与期待值相等, 仅适应简单类型：number, string, boolean
   *
   * @param actual 实际值
   * @param expected 期待值
   * @param message 测试用例断言失败时，期待提示的信息
   */
  export declare function strictEqual(actual: any, expected: any, message: string): void
  /**
   * javascript严格模式下，断言实际值与期待值不相等, 仅适应简单类型：number, string, boolean
   *
   * @param actual 实际值
   * @param expected 期待值
   * @param message 测试用例断言失败时，期待提示的信息
   */
  export declare function notStrictEqual(actual: any, expected: any, message: string): void
  /**
   *  期待抛出异常
   *
   * @param block 需要测试的代码段
   * @param error 期待错误信息
   * @param message 异常的消息（当测试失败时）。
   *
   * import { throws } from 'assert';
   *
   * let f = function () {
   *     throw new Error('here have an exception');
   * }
   *
   * throws(f, 'have no any exception throwed.');
   */
  export declare function throws(block: any, error: any, message?: string): void
  /**
   * 测试期待没有异常
   * @param block 需要测试的代码段
   * @param message 异常的消息（当测试失败时）
   *
   * @example
   * ```ts
   *
   * import { doesNotThrow } from 'assert';
   *
   * let f = function () {
   *     console.log('no exception');
   * }
   * doesNotThrow(f, 'have a exception throwed.');
   */
  export declare function doesNotThrow(block: any, message: string): void
}

declare module 'testing' {
  export declare type TestFunction = () => void
  export interface TestDefinition {
    fn: TestFunction
    name: string
  }
  /**
   * Must be called before any test() that needs to be filtered.
   * @example
   * ```ts
   * import * as test from 'testing'
   * test.setFilter("string")
   * ```
   * @param s string
   */
  export declare function setFilter(s: string): void
  /**
   * test the test function
   * test it
   * @example
   * ```ts
   * import * as test from 'testing'
   * test.test("name",function)
   * ```
   * @param name function name
   * @param fn testfunction
   */
  export declare function test(name: string, fn: TestFunction): void
  /**
   *
   * @example
   * ```ts
   * import * as test from 'testing'
   * test.before("name",function)
   * ```
   * @param name function name
   * @param fn testfunction
   */
  export declare function before(name: string, fn: TestFunction): void
  /**
   * @example
   * ```ts
   * import * as test from 'testing'
   * test.beforeEach("name",function)
   * ```
   * @param name function name
   * @param fn testfunction
   */
  export declare function beforeEach(name: string, fn: TestFunction): void
  /**
   * @example
   * ```ts
   * import * as test from 'testing'
   * test.after("name",function)
   * ```
   * @param name function name
   * @param fn testfunction
   */
  export declare function after(name: string, fn: TestFunction): void
  /**
   * @example
   * ```ts
   * import * as test from 'testing'
   * test.afterEach("name",function)
   * ```
   * @param name function name
   * @param fn testfunction
   */
  export declare function afterEach(name: string, fn: TestFunction): void
  export declare class Result {
    name: string
    message: string
    success: boolean
    constructor()
  }
  export declare function runSuite(): Result[]
}

declare module 'sys' {
  import { Decimal } from 'decimal'
  /**
   * 获取系统参数值，以字符串形式返回
   *
   * 在开启安全配置情况下，需要 '管理系统设置' 权限或者拥有该系统参数的读权限才可以访问。
   * 同时只要有访问权限，不管系统参数是否加密，都是以明文的方式获取。
   *
   * @example
   * ```ts
   *
   * import { getParameter } from 'sys';
   * let email = getParameter('ipaddress');
   * ```
   * @param name 系统参数名称
   * @returns 系统参数字符串值
   */
  export declare function getParameter(name: string): string
  /**
   * 获取系统参数值，与`getParameter`方法不同之处是，该函数返回具体的类型变量，类型映射关系如下：
   *
   * Text   => string
   * Time   => string
   * Number => decimal.Decimal
   * Boolean => boolean
   *
   * 在开启安全配置情况下，需要 '管理系统设置' 权限或者拥有该系统参数的读权限才可以访问。
   * 同时只要有访问权限，不管系统参数是否加密，都是以明文的方式获取。
   *
   * @example
   * ```ts
   *
   * import { getTypeParameter } from 'sys';
   *
   * let email = getTypeParameter('ipaddress');
   * ```
   *
   * @param name 系统参数名称
   * @returns 系统参数值
   *
   */
  export declare function getTypeParameter(name: string): string | Decimal | boolean
  /**
   * 获取系统参数值, 同`getTypeParameter`的区别在于：
   * 在开启安全配置情况下，需要 '管理系统设置' 权限或者拥有该系统参数的读权限才可以访问。
   * 如果系统参数的值是加密内容，则会抛出异常。
   *
   * @example
   * ```ts
   *
   * import { getParameterWithoutDecrypt } from 'sys';
   * let email = getParameterWithoutDecrypt('ipaddress');
   * ```
   *
   * @param name 系统参数名称
   * @returns 系统参数值
   */
  export declare function getNonEncryptionParameter(name: string): string | Decimal | boolean
  /**
   * 获取自定义多语言资源。
   *
   * @param labelId 标签id
   * @param language 语言
   */
  export declare function getCustomResource(labelId: string, language: string): string
  /**
   * 获取多语言资源翻译内容
   *
   * @param picklistId picklist id
   * @param elementId emement id
   * @param language 语言类型
   */
  export declare function getCustomTranslation(picklistId: string, elementId: string, language: string): string
  /**
   * 获取字段的picklist id
   *
   * @param objectName 对象名称
   * @param fieldName 字段名称
   */
  export declare function getFieldPicklistID(objectName: string, fieldName: string): string
  /**
   * 获取appcube核心引擎版本号.
   */
  export declare function getVersion(): string
  /**
   * 设置系统参数值.
   *
   * @param name 系统参数名字.
   * @param value 系统参数值.
   */
  export declare function setParameter(name: string, value: any): void
  /**
   * 发送rest action
   * @example
   * ```ts
   *
   * import * as sys from 'sys';
   * let res = sys.sendRest("actiontest", {name:'hello, bingo', age: 1});
   * ```
   *
   * @param name rest action名称
   * @param input rest action请求参数
   *
   */
  export declare function sendRest(name: string, input: Dict): Dict
  /**
   * 发送系统邮件
   * @example
   *```ts
   *
   * import * as sys from 'sys';
   *
   * function testSend() {
   *    let map = {
   *        "body":"email content",
   *        "subject": "email subject",
   *        "address": "receiver@xxx.com",
   *        "cc": "cc@xxx.com", //optional
   *        "bcc": "bcc@xxx.com" //optional
   *        }
   *    sys.sendEmail('template-name', map) // send with template
   * }
   * ```
   * @param template 邮箱模板名
   * @param input 邮件发送参数，如cc, bcc, body, subject, address等
   */
  export declare function sendEmail(template: string, input: Dict): Dict
  /**
   * Send a system email and wait for response
   * @example
   *```ts
   *
   * import * as sys from 'sys';
   * function testSend() {
   *    let map = {
   *        "body":"email content",
   *        "subject": "email subject",
   *        "address": "receiver@xxx.com",
   *        "cc": "cc@xxx.com", //optional
   *        "bcc": "bcc@xxx.com" //optional
   *        }
   *    sys.sendSyncEmail('template-name', map) // send with template
   * }
   * ```
   * @param template email template name
   * @param input the request input parameters.
   */
  export declare function sendSyncEmail(template: string, input: Dict): Dict
  /**
   * Send a custom email with specified sender and email server
   * @example
   *```ts
   *
   * import * as sys from 'sys';
   * function testSend() {
   *    let map = {
   *        "body":"email content",
   *        "subject": "email subject",
   *        "address": "receiver@xxx.com",
   *        "cc": "cc@xxx.com", //optional
   *        "bcc": "bcc@xxx.com" //optional
   *        }
   *    sys.sendCustomEmail('user', 'pwd', 'xx@xx.com', '', map) // send without template
   * }
   * ```
   * @param userName email user name
   * @param password user password
   * @param sender email sender
   * @param template email template name
   * @param input the request input parameters.
   * @param smtpHost email SMTP server ip:port (optional)
   */
  export declare function sendCustomEmail(userName: string, password: string, sender: string, template: string, input: Dict, smtpHost?: string): Dict
  /**
   * 发送kafka事件
   *
   * @param topic topic决事件发给哪个kafka, 请使用自定义kafka连接器的topic，如果为"", 使用系统内置的kafka.
   * @param eventName 事件名称
   * @param input 事件的内容
   * @param routeKey 事件消息的分区路由key, 同一个key，事件消息会发送kakfa的同一个分区
   */
  export declare function sendEvent(topic: string, eventName: string, input: Dict, routeKey?: string): void
  /**
   * 延时发送kafka事件，与sendEvent的立即发生事件消息不同，sendDelayEvent会等到脚本执行完，事务结束后，再发送事件消息给kafka
   *
   * @param topic topic决事件发给哪个kafka, 请使用自定义kafka连接器的topic，如果为"", 使用系统内置的kafka.
   * @param eventName 事件名称
   * @param input 事件的内容
   * @param routeKey 事件消息的分区路由key, 同一个key，事件消息会发送kakfa的同一个分区
   */
  export declare function sendDelayEvent(topic: string, eventName: string, input: Dict, routeKey?: string): void
  /**
   * 事件标识
   */
  export declare enum TransactionFlag {
    /**
     * 使用请求执行上下的事务
     */
    Shared = 0,
    /**
     * 创建独立的事务，该事务与请求执行上下的事务互相独立，互不影响。
     */
    Independent = 1,
  }
  /**
   *　调用flow
   *
   * @example
   * ```ts
   *
   * import * as sys from 'sys';
   *
   * let result = sys.invokeFlow('sum', {a: 1, b: 2}); // result = {c: 3}
   * ```
   *
   * @param flowName flow名称
   * @param param flow调用参数
   * @param flag 事件标识，不建议使用
   *
   * @return flow输出参数
   */
  export declare function invokeFlow(flowName: string, param: Object, flag?: TransactionFlag): any
  /**
   * 调用BO的操作，与custom api不同，此处的调用是进程内调用，所以需要相应的BO已经安装了
   *
   *
   * @example
   * ```ts
   * import * as sys from 'sys';
   *
   * let result = sys.invokeSimpleBO('calculator', 'sum', {a: 1, b: 2}, '1.0.0'); // result = {c: 3}
   * ```
   *
   * @param boName bo名称
   * @param operationName bo的操作名
   * @param param bo的操作的输入参数
   * @param version bo版本号
   *
   * @return bo操作的输出参数内容
   */
  export declare function invokeSimpleBO(boName: string, operationName: string, param: Object, version: string): any
  /**
   * Format i18n error
   * @param name the error no
   * @param args the error format's placeholder parameters
   */
  export declare function formatError(name: string, ...args: any[]): string
  /**
   * the currency code
   */
  export declare enum CurrencyCode {
    USD = 'USD',
    CNY = 'CNY',
    EUR = 'EUR',
    GBP = 'GBP',
    JPY = 'JPY',
    KRW = 'KRW',
    HKD = 'HKD',
    TWD = 'TWD',
    SGD = 'SGD',
    RUB = 'RUB',
    MXN = 'MXN',
  }
  /**
   * @example
   * ```ts
   *
   * import  * as sys from 'sys';
   *
   * let flag = sys.isValidCurrencyCode(sys.CurrencyCode.USD);
   * ```
   *
   * @param code the currency code
   *
   * @return true|false
   */
  export declare function isValidCurrencyCode(code: CurrencyCode): boolean
  /**
   *  organization info
   */
  export interface Organization {
    /**
     * name of the  organization
     */
    name: string
    /**
     * id of the  organization
     */
    id: string
    /**
     * address of the user in organization
     */
    address: string
    /**
     * description of the user in organization
     */
    description: string
    /**
     * phone of the user in organization
     */
    phone: string
    /**
     *primary contact of the organization
     */
    primaryContact: string
    /**
     * country of the organization
     */
    localeSidKey: string
    /**
     * language of the user in organization
     */
    languageLocaleKey: string
    /**
     * time zone of the user in organization
     */
    timeZone: string
    /**
     *currency  of the user in organization
     */
    currencyLocaleKey: string
    /**
     *logo  of the user in organization
     */
    logo: string
  }
  /**
   *
   * 获取组织信息，
   *
   * 在开启安全配置情况下，需要 '管理系统设置' 权限
   *
   * @example
   * ```ts
   *
   * import  * as sys from 'sys';
   *
   * let org = sys.getOrganization();
   * ```
   *
   */
  export declare function getOrganization(): Organization | null
  /**
   *  picklist Values
   */
  export interface Value {
    ID: string
    Name: string
    IsDefault: boolean
    IsActive: boolean
    Label: string
    SequenceNo: bigint
    Color: string
    ControlFieldValue: string
    Description: string
    IsBaseline: boolean
  }
  /**
   *  pickList info
   */
  export interface PickList {
    /**
     * id of the  pickList
     */
    id: string
    /**
     * name of the  pickList
     */
    name: string
    /**
     * is Sorted of the  pickList?
     */
    isSorted: boolean
    /**
     * is Restricted of the  pickList?
     */
    isRestricted: boolean
    /**
     * controlField of the  pickList
     */
    controlField: string
    /**
     * masterLabel of the  pickList
     */
    masterLabel: string
    /**
     * description of the  pickList
     */
    description: string
    /**
     * is Global of the  pickList
     */
    isGlobal: boolean
    /**
     * is Global of the  pickList
     */
    isColorable: boolean
    /**
     * isBaseline of the  pickList
     */
    isBaseline: boolean
    /**
     * picklistValues of the  pickList
     */
    picklistValues: Value[]
  }
  /**
   * @example
   * ```ts
   *
   * import  * as sys from 'sys';
   *
   * let flag = sys.getPickList(id);
   * ```
   *
   * @param id the PickList id
   *
   * @return PickList info
   */
  export declare function getPickList(id: string): PickList | null
  /**
   *
   * 获取当前租户的许可证
   *
   * 在开启安全配置情况下，需要 '管理系统设置' 权限
   *
   * @example
   * ```ts
   *
   * import  * as sys from 'sys';
   *
   * let result = sys.getLicense();
   * ```
   *
   * @return license info of current tenant
   */
  export declare function getLicense(): Object[]
  /**
   * @example
   * ```ts
   *
   * import  * as sys from 'sys';
   *
   * let flg = sys.verifyExecuteAPIProfile();
   * if (flg){ // 如果为真，表示用户有请求自定义接口的业务权限，默认传上下文的method和URL，如 POST /service/.../test
   *     ...
   * }
   * ```
   *
   * @return Boolean
   */
  export declare function verifyExecuteAPIProfile(): boolean
}

declare module 'context' {
  import { TimeZones } from 'date'
  /**
   * 获取登录用户的id。
   */
  export declare function getUserId(): string
  /**
   * 获取登录用户的名称。
   */
  export declare function getUserName(): string
  /**
   * 登录用户的类型：
   */
  export declare enum UserType {
    /**
     * 平台用户
     */
    User = 'User',
    /**
     * 业务用户
     */
    PortalUser = 'PortalUser',
    /**
     * 匿名用户
     */
    Guest = 'guest',
  }
  /**
   * 获取登录用户类型。
   */
  export declare function getUserType(): UserType
  /**
   * 获取用户归档租户的id。
   */
  export declare function getTenantId(): string
  /**
   * 获取用户归档租户的名称。
   */
  export declare function getTenantName(): string
  /**
   * 获取登录用户的的locale信息。
   */
  export declare function getLocale(): string
  /**
   * 获取登录用户的access token。
   */
  export declare function getToken(): string
  /**
   * 当用户是使用同一身份认证功能对接的第三方系统登录时，获取登录用户的外部系统的token。
   */
  export declare function getThirdPartyToken(): string
  /**
   * 获取登录用户的时区索引值。
   */
  export declare function getTimeZone(): TimeZones
  /**
   * 获取租户的组织时区索引值。
   */
  export declare function getOrganizationTimeZone(): TimeZones
  /**
   * 获取请求客户端的ip地址信息。获取原则：
   * 1. 从http header中的`X-Forwarded-For`, `X-Real-Ip`的设置值中获取。
   * 2. 如果1没有获取到，则直接返回`request`中的`remote address`，
   *    这个值因为会经过中间代理如nginx转发，已经不是原始的客户端的ip地址了。
   */
  export declare function getClient(): string
  /**
   *
   * 获取服务的url信息，因为安全问题，此处固定返回值：http://localhost,
   * 以保证能调用本服务节点的restful api。
   */
  export declare function getHost(): string
  /**
   * 设置请求的http的响应状态码, http状态码, 必须是一个有效的HTTP 1xx-5xx状态码
   * @deprecated 接口已经标识在未来版本弃用，请使用新的API: `getHttp().response.setStatusCode`
   *
   * @param code http状态码
   *
   */
  export declare function setHttpStatus(code: number): void
  /**
   * 获取http请求的响应的返回值，一般不用调用此接口。正常情况下，脚本执行完后，会有自己的返回值。
   *
   * 调用此API的场景：
   *
   * - 需要返回特殊类型的值：如二进制文件流等。
   * - 需要定制脚本API返回内容的JSON内容。
   *
   * 特别注意：
   * 如果通过API改变了脚本的返回内容，则AppCube开发studio中脚本调试窗口无法正确处理新的响应值。
   * 输出参数，日志窗口会没有任何响应。
   *
   * @deprecated 接口已经标识在未来版本弃用，请使用`getHttp().response.setBody`
   *
   * @param value 特殊的响应值
   */
  export declare function setResponseValue(value: any): void
  /**
   * 设置http请求的响应的header值。
   *
   * @deprecated 接口已经标识在未来版本弃用, 请使用`getHttp().response.setHeader`
   *
   * @param key header key
   * @param value header value
   */
  export declare function setHttpHeader(key: string, value: string): void
  /**
   * 获取http请求的header信息。
   *
   * @deprecated 接口已经标识在未来版本弃用, 请使用`getHttp().request.header`
   */
  export declare function getHttpHeader(): Header
  /**
   * 获取http请求的body信息。
   * @deprecated 接口已经标识在未来版本弃用, 请使用`getHttp().request.body`
   */
  export declare function getHttpBody(): any
  /**
   * 获取http请求的路径参数对
   * @deprecated  接口已经标识在未来版本弃用, 请使用`getHttp().request.pathVars`
   */
  export declare function getHttpPathVars(): Dict
  /**
   * 设置响应的错误信息。
   * @deprecated  接口已经标识在未来版本弃用, 请使用`error.Error`。
   *
   * @param name: the error no
   * @param message: the error message
   */
  export declare function setError(name: string, message: string): void
  /**
   * 设置国际化错误信息。
   * @deprecated 接口已经标识在未来版本弃用, 请使用`error.I18nError`。
   */
  export declare function setI18nError(name: string, ...args: any[]): void
  /**
   * 抛出国际化错误信息。
   * @deprecated 接口已经标识在未来版本弃用, 请使用`error.I18nError`。
   */
  export declare function throwError(name: string, ...args: any[]): void
  /**
   * 错误信息类型
   */
  export declare class Error {
    name: string
    message: string
  }
  /**
   * 获取当前执行上下文中的错误信息。
   *
   * @deprecated 接口已经标识在未来版本弃用.
   */
  export declare function getError(): Error
  /**
   * 设置会话级级别的缓存键值对。
   * 不能与 {@link setSessionValue} 一起使用， 主要区别在与保留了字段的类型。
   *
   * @param value 键值对
   */
  export declare function setTypedSessionValue(value: Dict): void
  /**
   * 依据输入的key列表，获取会话级别的session键值对。
   * 需要与  {@link setSessionValueExt} 一起使用， 主要区别在与保留了字段的类型
   *
   * @param keys 需要查询的key列表。
   */
  export declare function getTypedSessionValue(keys: string[]): Dict
  /**
   * 设置会话级级别的缓存键值对。
   * @param value 键值对
   */
  export declare function setSessionValue(value: Dict): void
  /**
   * 依据输入的key列表，获取会话级别的session键值对。
   *
   * @param keys 需要查询的key列表。
   */
  export declare function getSessionValue(keys: string[]): Dict
  /**
   * 清空用户会话级别的缓存键值对。
   */
  export declare function delSessionValue(): void
  /**
   * 获取定时任务id, 用于定时任务触发的脚本流程中。
   */
  export declare function getTimedTaskId(): string
  /**
   * 获取登录用户的`role`信息。
   */
  export declare function getRole(): string
  /**
   * 设置登录用户的role信息。
   * @param roleName 角色名称。
   */
  export declare function setRole(roleName: string): void
  /**
   * 从会话级别的缓存中获取外部业务的权限信息。
   *
   * {"customAPI1": true, "customAPI2": false}
   */
  export declare function getExtPermissions(): Dict
  /**
   * 设置外部业务权限信息到会话级别的缓存中。
   *
   * @param permissions 权限数据键值对
   */
  export declare function setExtPermissions(permissions: Dict): void
  /**
   * 从会话级缓存中获取外部的数据过滤器信息。
   */
  export declare function getExtDataFilters(): Dict
  /**
   * 设置外部的数据过滤器转会话级缓存中。
   *
   * 数据过滤器的键是维度变量的名称，数据过滤器的值代表当前用户可以访问的范围。
   *
   * 数据过滤器格式：
   * ```json
   * { "DEPARTMENT":"HR|IT|DEVELOPMENT", "COUNTRY":"China" }
   * ```
   *
   * @param 数据过滤器
   */
  export declare function setExtDataFilters(dataFilters: Dict): void
  /**
   * http请求类型
   */
  export interface Request {
    /**
     * 请求头
     */
    header: Header
    /**
     * 请求体信息
     */
    body: any
    /**
     * 请求url查询参数
     */
    queries: Dict
    /**
     * 请求url路径参数
     */
    pathVars: Dict
    /**
     * 请求url
     */
    url: string
    /**
     * 请求方法
     */
    method: string
  }
  /**
   * http请求响应类型
   */
  export interface Response {
    /**
     * 设置响应头键值对
     *
     * @param key header key
     * @param value header value
     */
    setHeader(key: string, value: string): void
    /**
     * 设置请求的http的响应状态码, http状态码, 必须是一个有效的HTTP 1xx-5xx状态码
     * @param code  http状态码
     */
    setStatusCode(code: number): void
    /**
     * 获取http请求的响应的返回值，一般不用调用此接口。正常情况下，脚本执行完后，会有自己的返回值。
     *
     * 调用此API的场景：
     *
     * - 需要返回特殊类型的值：如二进制文件流等。
     * - 需要定制脚本API返回内容的JSON内容。
     *
     * 特别注意：
     * 如果通过API改变了脚本的返回内容，则AppCube开发studio中脚本调试窗口无法正确处理新的响应值。
     * 输出参数，日志窗口会没有任何响应。
 
     * @param value 特殊响应值
     */
    setBody(value: any): void
  }
  /**
   * http类型
   */
  export interface Http {
    request: Request
    response: Response
  }
  /**
   * 获取http信息。
   */
  export declare function getHttp(): Http
  /**
   * 脚本执行触发请求类型
   */
  export declare enum RequestType {
    /**
     * 登录用户的restful请求
     */
    User = 0,
    /**
     * 事件触发的请求
     */
    Event = 1,
    /**
     * 定时任务触发的请求
     */
    Task = 2,
  }
  /**
   * 获取脚本执行触发请求类型
   */
  export declare function getRequestType(): RequestType
  /**
   * 设置请求上下的变量
   * 只支持string类型的变量，复杂对象，调用者需要自己采用JSON模块来进行序列化与反序列化
   * 如果存放的变量类型不是string类型，不作任何隐式转换，接口抛异常
   * 请求上下文local变量总大小限制为1MB,key的总大小也限制为1MB，不可配置
   * 变量个数限制为1000个，不可配置
   * @param key 变量名
   * @param vavlue 变量值
   */
  export declare function setLocalValue(key: string, value: string): void
  /**
   * 获取请求上下文变量
   * @param key 变量名
   * @returns 变量值，如果变量名不存在，返回undefined
   */
  export declare function getLocalValue(key: string): string | null
  /**
   * 删除请求上下变量
   * @param key 变量名
   */
  export declare function deleteLocalValue(key: string): void
  /**
   * 获取请求上下变量名列表
   */
  export declare function localKeys(): string[]
}

declare module 'decimal' {
  /**
   * Decimal class
   */
  export interface Decimal {
    Add(d2: Decimal): Decimal
    Div(d2: Decimal): Decimal
    Mod(d2: Decimal): Decimal
    Mul(d2: Decimal): Decimal
    Neg(): Decimal
    Pow(d2: Decimal): Decimal
    Cmp(d2: Decimal): number
    Equal(d2: Decimal): boolean
    GreaterThan(d2: Decimal): boolean
    GreaterThanOrEqual(d2: Decimal): boolean
    LessThan(d2: Decimal): boolean
    LessThanOrEqual(d2: Decimal): boolean
    Sign(): number
    Exponent(): number
    Abs(): Decimal
    Floor(): Decimal
    Ceil(): Decimal
    IntPart(): number
    String(): string
    /**
     * StringFixed returns a rounded fixed-point string with places digits after the decimal point.
     *
     * @example
     * ```ts
     *
     * newFromFloat(0).StringFixed(2) // output: "0.00"
     * newFromFloat(0).StringFixed(0) // output: "0"
     * newFromFloat(5.45).StringFixed(0) // output: "5"
     * newFromFloat(5.45).StringFixed(1) // output: "5.5"
     * newFromFloat(5.45).StringFixed(2) // output: "5.45"
     * newFromFloat(5.45).StringFixed(3) // output: "5.450"
     * newFromFloat(545).StringFixed(-1) // output: "550"
     * ```
     * @param places
     * @constructor
     */
    StringFixed(places: number): string
    Sub(d2: Decimal): Decimal
    Truncate(precision: number): Decimal
  }
  /**
   * Create zero decimal value
   * @example
   * ```ts
   *
   * let z = decimal.zero();
   * ```
   */
  export declare function zero(): Decimal
  /**
   * Craete decimal value from number value
   *
   * @example
   * ```ts
   *
   * let d = decimal.NewFromFloat(13.135); // d is 13.135
   * ```
   *
   * @param value the number value
   */
  export declare function newFromFloat(value: number): Decimal
  /**
   * Create decimal value use exponent
   * @example
   * ```ts
   *
   * let d = decimal.newWithExponent(1.234567, 3); // d is 3^1.234567
   * ```
   *
   * @param value the base value
   * @param exp the exponent
   */
  export declare function newWithExponent(value: number, exp: number): Decimal
  /**
   * Create decimal value from digital string
   * @example
   * ```ts
   *
   * let d = decimal.newFromString('-123.4567'); d is -123.4567
   * ```
   *
   * @param value the digital string
   *
   */
  export declare function newFromString(value: string): Decimal
  /**
   * Calculate the absolute value of the decimal
   * @param dec
   * @example
   * ```ts
   * import * as decimal from 'decimal';
   * let d = decimal.newFromString('-123.4567'); d is -123.4567
   * decimal.abs(d)
   * ```
   */
  export declare function abs(dec: Decimal): Decimal
  /**
   * Get the maximum value of multiple decimal values
   * @param first the first decimal value
   * @param decs the rest decimal values
   *
   * @example
   * ```ts
   * import * as decimal from 'decimal';
   * let d = decimal.newFromString('-123.4567');
   * let e = decimal.newFromString('-12.467');
   * decimal.max(d,e)
   * ```
   */
  export declare function max(first: Decimal, ...decs: Decimal[]): Decimal
  /**
   * Get the minimum value of multiple decimal values
   * @param first the first decimal value
   * @param decs the rest decimal values
   * @example
   * ```ts
   * import * as decimal from 'decimal';
   * let d = decimal.newFromString('-123.4567');
   * let e = decimal.newFromString('-12.467');
   * decimal.min(d,e)
   * ```
   */
  export declare function min(first: Decimal, ...decs: Decimal[]): Decimal
  /**
   * Calculate the average of multiple decimal values
   * @param first the first decimal value
   * @param decs the rest decimal values
   * @example
   * ```ts
   * import * as decimal from 'decimal';
   * let d = decimal.newFromString('-123.4567');
   * let e = decimal.newFromString('-12.467');
   * decimal.avg(d,e)
   * ```
   */
  export declare function avg(first: Decimal, ...decs: Decimal[]): Decimal
  /**
   * Convert decimal.Decimal type to number value
   * @param d
   *
   * @example
   * ```ts
   * import * as decimal from 'decimal';
   * let d = decimal.newFromString('-123.4567');
   * decimal.toNumber(d)
   */
  export declare function toNumber(d: any): number
  /**
   * Numerical formatting
   *
   * @example
   * ```ts
   *
   * decimal.numberFormat('0', 3.1415927)            // 3
   * decimal.numberFormat('0.0', 3.1415927)          // 3.1
   * decimal.numberFormat('0.00', 3.1415927)         // 3.14
   * decimal.numberFormat('#.##%', 100 * 3.1415927)  // 314.16%
   * decimal.numberFormat('00.000', 3.1415927)       // 03.142
   * decimal.numberFormat('#.#####e0', 299792458)    // 2.99792E+08
   * decimal.numberFormat(',###', 299792458)         // 299,792,458
   * decimal.numberFormat('$,###.##',1234556)        // $1,234,556
   * decimal.numberFormat('0.00', 11.1)              // 11.10
   * ```
   *
   * @param format the format to be used
   * @param value the number or Decimal to be formatted
   */
  export declare function numberFormat(format: string, value: number | Decimal): string
  /**
   * Format currency value with currency symbol, etc.
   *
   * @example
   * ```ts
   *
   * import * as decimal from 'decimal';
   * let money = decimal.fmtCurrency(1234.123,2,"s nv","$", ".", ",");
   * ```
   *
   * @param value currency value.
   * @param precision number of decimal places to be reserved. The default value is 2.
   * @param format currency information display format, for example, the position relationships between currency symbols, negative values, and values.
   * @param symbol currency symbol. Example: $
   * @param decimal symbol of the decimal point. The default value is .
   * @param thousand thousands separator symbol. The default value is ,
   *
   * @returns Formatted currency expression character string.
   */
  export declare function fmtCurrency(value: number, precision: number, format: string, symbol: string, decimal: string, thousand: string): string
  /**
   * format currency value with organization format
   *
   * @example
   * ```ts
   *
   * import * as decimal from 'decimal';
   * let money = decimal.fmtOrgCurrency(1234.123,"USD");
   * ```
   *
   * @param value currency value.
   * @param isoCode The currency type (USD or CNY) must be one of the company's currency types. If this parameter is left empty, the currency type of the current user is used.
   */
  export declare function fmtOrgCurrency(value: number, isoCode: string): string
}

declare module 'http' {
  /**
   * Header contains the request header fields either received
   * by the server or to be sent by the client.
   *
   * If a server received a request with header lines,
   *
   *    Host: example.com
   *    accept-encoding: gzip, deflate
   *    Accept-Language: en-us
   *    fOO: Bar
   *    foo: two
   *
   * then
   *
   * ```typescript
   * let header = {
   *		"Accept-Encoding": {"gzip, deflate"},
   *		"Accept-Language": {"en-us"},
   *		"Foo": {"Bar", "two"},
   * }
   * ```
   *
   * For incoming requests, the Host header is promoted to the
   * Request.Host field and removed from the Header map.
   *
   * HTTP defines that header names are case-insensitive. The
   * request parser implements this by using CanonicalHeaderKey,
   * making the first character and any characters following a
   * hyphen uppercase and the rest lowercase.
   *
   * For client requests, certain headers such as Content-Length
   * and Connection are automatically written when needed and
   * values in Header may be ignored. See the documentation
   * for the Request.Write method.
   */
  export interface Header {
    [id: string]: string | string[]
  }
  /**
   * http请求的url的query参数定义，是一个key/value结构
   */
  export interface Parameter {
    [id: string]: any
  }
  export interface KeyValue {
    [id: string]: any
  }
  export declare type Data = any | string | KeyValue
  /**
   * builtin form data structure to hold form data body request
   */
  export interface FormData {
    /**
     * form data file content type
     */
    contentType: string
    /**
     * form data file name
     */
    filename: string
    /**
     * form data
     */
    data: Data
  }
  /**
   * The http request
   */
  export interface Request {
    /**
     * the body content
     */
    data?: Uint8Array | string | Object
    /**
     * the url query parameters
     */
    params?: Parameter
    /**
     * the header content value
     */
    headers?: Header
    /**
     * the request timeout, unit: seconds
     */
    timeout?: number
  }
  /**
   * The response message
   */
  export interface Response {
    /**
     * the http status code
     */
    statusCode?: number
    /**
     * the header content value
     */
    headers?: Header
    /**
     * the raw body content
     */
    data?: any
    /**
     * the json body content
     */
    body?: any
    /**
     * the http process error
     */
    error?: Error
  }
  /**
   * http client
   */
  export interface Client {
    /**
     * GET method
     * @param url the request url
     * @param callOptions the request options
     */
    get(url: string, callOptions?: Request): Response
    /**
     * POST method
     * @param url the request url
     * @param callOptions the request options
     */
    post(url: string, callOptions?: Request): Response
    /**
     * PUT method
     * @param url the request url
     * @param callOptions the request options
     */
    put(url: string, callOptions?: Request): Response
    /**
     * DELETE method
     * @param url the request url
     * @param callOptions the request options
     */
    del(url: string, callOptions?: Request): Response
    /**
     * PATCH method
     *
     * @param url the request url
     * @param callOptions the request options
     */
    patch(url: string, callOptions?: Request): Response
    response(): Response
  }
  /**
   * http client option
   */
  export interface ClientOption {
    /**
     * the ssl certificate
     */
    caCert?: string
    /**
     * the http proxy url, for example: openproxy.huawei.com
     */
    proxy?: string
    /**
     * baseUrl
     */
    baseUrl?: string
    /**
     * eanble cookie
     */
    enableCookie?: boolean
    /**
     * default encoding, default as utf-8
     */
    encoding?: string
    /**
     * 是否禁用重定向
     */
    disableRedirect?: boolean
    /**
     * if notCanonicalMIMEHeaderKey is fasle,  canonical the
     * MIME header key s. The canonicalization converts the first
     * letter and any letter following a hyphen to upper case;
     * the rest are converted to lowercase. For example, the
     * canonical key for "accept-encoding" is "Accept-Encoding".
     * MIME header keys are assumed to be ASCII only.
     * If s contains a space or invalid header field bytes, it is
     * returned without modifications.
     */
    notCanonicalMIMEHeaderKey?: boolean
  }
  /**
   * Create a http client
   * @example
   * ```ts
   *
   * import * as iconv from 'iconv';
   * import * as http from 'http';
   * import {Encoding} from 'buffer';
   *
   * let client = http.newClient();
   * let resp = client.get('xxx.com/login');
   * let result = iconv.decode(resp.data, Encoding.Utf8);
   * ```
   * @param options the client options
   */
  export declare function newClient(options?: ClientOption): Client
}

declare module 'xml' {
  /**
   * 将Object对象编码为xml文档。
   *
   * @param object 对象内容
   */
  export declare function encode(object: Object): string
  /**
   * 将xml文档内容解码为Object对象。
   *
   * 特别注意，只支持简单的xml内容，不支持复杂的xml内容，如有模式定义引用等。
   *
   * @param content xml字符串
   */
  export declare function decode(content: string): Object
}

declare module 'iconv' {
  /**
   * Decode the byte buffer that encoding with GBK, GB18030, GB2132, ISO8859_1 .etc to a utf-8 string.
   * @example
   *
   * ```ts
   *
   * import * as iconv from 'iconv';
   * import * as http from 'http';
   * import {Encoding} from 'buffer';
   *
   * let client = http.newClient();
   * let resp = client.get('xxx.com/login');
   * let iconv.decode(resp.data, Encoding.Utf8);
   * ```
   *
   * @param buffer the byte buffer that encoding with GBK, GB18030, GB2132, ISO8859_1 .etc
   * @param encoding the encoding method: GBK, GB18030, GB2132, ISO8859_1
   */
  export declare function decode(buffer: any, encoding: string): string
  /**
   * Encode a utf8 string to a buffer that encoding with GBK, GB18030, GB2132, ISO8859_1 .etc
   *
   * @example
   * ```ts
   *
   * import * as iconv from 'iconv';
   * let result = iconv.encode('hello 中国', 'GBK');
   * ```
   *
   * @param content the utf8 string
   * @param encoding the encoding method: GBK, GB18030, GB2132, ISO8859_1
   */
  export declare function encode(content: string, encoding: string): any
}

declare module 'base64' {
  /**
   * Encodes the data decoded by Base64 into a character string.
   *
   * @param content the content need to be encode
   *
   *
   * @example
   *
   * ```ts
   *
   * import {encode} from 'base64';
   * encode("I love china");
   *
   * ```
   *
   */
  export declare function encode(content: any): string
  /**
   * Decodes Base64 data
   *
   * @param content the content need to be decode
   * @example
   *
   * ```ts
   *
   * import {decode} from 'base64';
   * decode("SSBsb3ZlIGNoaW5h");
   *
   * ```
   *
   */
  export declare function decode(content: string): any
}

declare module 'buffer' {
  /**
   * 编码类型
   */
  export declare enum Encoding {
    /**
     * 无，默认为utf8
     */
    None = '',
    /**
     * base64编码
     */
    Base64 = 'base64',
    /**
     * Hex编码
     */
    Hex = 'hex',
    /**
     * utf8编码
     */
    Utf8 = 'utf8',
  }
  /**
   * Buffer类型接口
   */
  export interface Buffer {
    /**
     * 给Buffer对象分配一个固定大小的字节数组内存。
     *
     * @param size 字节数组大小
     */
    alloc(size: number): void
    /**
     * 获取Buffer对象指定位置的字节值。
     *
     * @param i 位置索引
     */
    get(i: number): number
    /**
     * 设置Buffer对象指定位置的字节值
     *
     * @param i 位置索引
     * @param value 字节值
     */
    set(i: number, value: number): void
    /**
     * 获取Buffer对象字节数组大小。
     */
    size(): number
    /**
     * 从Buffer对象的一个切片区间[start, end)，并返回一个新的Buffer对象。
     * 需要特别注意是：新的Buffer对象，与原Buffer对象共享底层的字节数组内存。
     *
     * @example
     * ```ts
     *
     * import * as buffer from 'buffer';
     *
     * let buf = buffer.from("1234567890");
     * let slice = buf.slice(5, 8);
     *
     * console.log(buf.toString()); // 1234567890
     * console.log(slice.toString()); // 678
     *
     * slice.set(1, 65);
     *
     * console.log(buf.toString()); // 123456A890
     * console.log(slice.toString()); // 6A8
     * ```
     *
     * @param start 起始位置, 默认值为0
     * @param end 结束位置, 默认值为原Buffer的大小。
     */
    slice(start?: number, end?: number): Buffer
    /**
     * 拷贝Buffer对象指定区间[sourceStart, sourceEnd)的字节内容到目标Buffer对象区间[target, ]，
     *
     * 请务必保证目标Buffer对象的内存空间足够。
     *
     * @example
     * ```ts
     *
     * import * as buffer from 'buffer';
     *
     * let source = buffer.from("1234567890");
     *
     * let target = buffer.empty();
     * target.alloc(3);
     * source.copy(target, 0, 5, 8);
     *
     * console.log(target.toString()); // 678
     * ```
     *
     * @param target 目标Buffer对象
     * @param targetStart 目标起始位置, 默认值为0
     * @param sourceStart 源始起始位置，默认值为0
     * @param sourceEnd 源结束位置，默认为源Buffer对象的大小
     */
    copy(target: Buffer, targetStart?: number, sourceStart?: number, sourceEnd?: number): void
    /**
     * 判断两个Buffer对象是否相等，比较原则是按照字节数组进行比较。
     */
    equals(otherBuffer: Buffer): boolean
    /**
     * 把Buffer对象字节数组转换为字符串内容
     * @param encoding 字符串编码格式，默认为utf8。
     */
    toString(encoding?: Encoding): string
    /**
     * 获取Buffer对象字节数组。
     */
    bytes(): any
    /**
     * @deprecated 该API已经声明在未来版本废弃。
     */
    goBuffer(): any
  }
  /**
   * 从字符串创建一个Buffer对象。
   *
   * @param str 字符串
   * @param encoding 字符串编码格式，默认为utf8
   */
  export declare function from(str: string, encoding?: Encoding): Buffer
  /**
   * 从二进制字节数组创建一个Buffer对象
   * @param bytes 二进制字节数组。
   */
  export declare function fromBytes(bytes?: any): Buffer
  /**
   * 创建一个空的Buffer对象。
   */
  export declare function empty(): Buffer
  /**
   * 比较两个Buffer对象的大小。
   *
   * 比较规则：按照buffer的字节数组，逐字节大小比较:
   *
   * left > right, 返回1
   *
   * left == right, 返回0
   *
   * left < right, 返回-1
   *
   * @param left Buffer对象
   * @param right Buffer对象
   *
   * @returns 比较结果
   *
   */
  export declare function compare(left: Buffer, right: Buffer): number
  /**
   * 获取字符串的编码格式。
   *
   * @param str 待检查字符串
   */
  export declare function getStringEncoding(str: string): Encoding
}

declare module 'crypto' {
  import * as buffer from 'buffer'
  /**
   * Hash枚举
   */
  export declare enum Hashs {
    MD5 = 'md5',
    SHA1 = 'sha1',
    SHA256 = 'sha256',
    SHA512 = 'sha512',
  }
  /**
   * RSA padding枚举
   */
  export declare enum RSAPadding {
    PKCS1 = 'PKCS1',
    OAEP = 'OAEP',
  }
  /**
   * 获取支持的hash算法列表，目前支持：md5 sha1 sha256 sha512
   */
  export declare function getHashes(): string[]
  /**
   * Hash接口
   */
  export interface Hash {
    /**
     * hash运算
     * @param data 数据
     */
    sum(data: buffer.Buffer): buffer.Buffer
  }
  /**
   * 创建hash对象
   * @example
   * ```ts
   *
   * import * as crypto from 'crypto';
   * import * as buffer from 'buffer';
   *
   * let hash = crypto.createHash(crypto.Hashs.SHA512);
   *
   * console.log(hash.sum(buffer.from("11111111111111")).toString(buffer.Encoding.Base64));
   * ```
   * @param hash hash算法名称. 注意: MD5, SHA1是不安全的hash算法
   */
  export declare function createHash(hash: Hashs): Hash
  /**
   * Hmac api
   */
  export interface Hmac {
    /**
     * sum api
     * @param data 数据
     */
    sum(data: buffer.Buffer): buffer.Buffer
  }
  /**
   * 创建Hmac对象
   *
   * @example
   * ```ts
   *
   * import * as crypto from 'crypto';
   * import * as buffer from 'buffer';
   *
   * let hmac = crypto.createHmac(crypto.Hashs.SHA256, buffer.from('22222222222222'));
   *
   * console.log(hmac.sum(buffer.from("11111111111111")).toString(buffer.Encoding.Base64));
   * ```
   *
   * @param hash hash算法名称. 注意: MD5, SHA1是不安全的hash算法
   * @param key hash key
   */
  export declare function createHmac(hash: Hashs, key: buffer.Buffer): Hmac
  /**
   * 获取支持的AES加密算法类型, 目前支持: aes-ecb, aes-cbc, aes-gcm
   */
  export declare function getCiphers(): string[]
  /**
   * Cipher接口
   */
  export interface Cipher {
    /**
     * 加密
     * @param plainText 明文
     */
    encrypt(plainText: buffer.Buffer): buffer.Buffer
  }
  /**
   * Padding模式
   */
  export declare enum Padding {
    NONE = 0,
    PKCS5 = 1,
    PKCS7 = 2,
  }
  /**
   * 支持的对称加密算法名称
   */
  export declare enum Algorithm {
    AES_ECB = 'aes-ecb',
    AES_CBC = 'aes-cbc',
    AES_GCM = 'aes-gcm',
  }
  /**
   * 加密选项
   */
  export interface Option {
    /**
     * 初始化向量
     */
    iv?: buffer.Buffer
    /**
     * 仅对GCM算法有效
     */
    nonce?: buffer.Buffer
    /**
     * 填充模式
     */
    padding?: Padding
  }
  /**
   * 创建对称加密对象
   *
   * @example
   * ```ts
   *
   * import * as crypto from 'crypto';
   * import * as buffer from 'buffer';
   *
   * let key = buffer.from("***********9");
   * let nonce = buffer.from("********2");
   * let plainText = buffer.from('****');
   *
   * let cipher = crypto.createCipher(crypto.Algorithm.AES_GCM, key, { nonce: nonce });
   * let cipherText = cipher.encrypt(plainText);
   * console.log(cipherText.toString(buffer.Encoding.Base64));
   * ```
   *
   * @param algorithm 加密算法名称. 备注: aes-ecb不是安全是加密算法
   * @param key 密钥
   * @param option 加密选项
   */
  export declare function createCipher(algorithm: Algorithm, key: buffer.Buffer, option: Option): Cipher
  /**
   * decipher api
   */
  export interface Decipher {
    /**
     * 解密
     * @param cipherText 密文
     */
    decrypt(cipherText: buffer.Buffer): buffer.Buffer
  }
  /**
   * 创建解密对象
   *
   * @example
   * ```ts
   *
   * import * as crypto from 'crypto';
   * import * as buffer from 'buffer';
   *
   * let key = buffer.from("************123");
   * let nonce = buffer.from("***********456");
   * let cipherText = buffer.from('iSzDBqz**********Bw==', buffer.Encoding.Base64);
   *
   * let decipher = crypto.createDecipher(crypto.Algorithm.AES_GCM, key, { nonce: nonce });
   * let plainText = decipher.decrypt(cipherText);
   * console.log(plainText.toString()); //huawei
   *
   * ```
   *
   * @param algorithm 算法名称. 备注: aes-ecb不是安全是加密算法
   * @param key 密钥
   * @param option  解密选项
   */
  export declare function createDecipher(algorithm: Algorithm, key: buffer.Buffer, option: Option): Decipher
  /**
   * rsa密钥对
   */
  export interface RSAKey {
    /**
     * 私钥
     */
    privateKey: buffer.Buffer
    /**
     * 公钥
     */
    publicKey: buffer.Buffer
  }
  /**
   * 使用rsa公钥加密
   *
   * @param publicKey 公钥
   * @param plainText 明文
   * @param padding 填充模式, 默认值为PKCS1。
   */
  export declare function publicEncrypt(publicKey: buffer.Buffer, plainText: buffer.Buffer, padding?: RSAPadding): buffer.Buffer
  /**
   * 使用rsa私钥解密
   *
   * @example
   * ```ts
   *
   * import * as crypto from 'crypto';
   * import * as buffer from 'buffer';
   * import * as assert from 'assert';
   *
   * let rsakey = crypto.generateKey(2048);
   * let data = buffer.from("something");
   * let cipherText = crypto.publicEncrypt(rsakey.publicKey, data);
   * let plainText = crypto.privateDecrypt(rsakey.privateKey, cipherText);
   * assert.equal(plainText, "something", "not equal");
   * ```
   * @param privateKey 私钥
   * @param cipherText 密文
   * @param padding 填充模式, 默认值为PKCS1
   */
  export declare function privateDecrypt(privateKey: buffer.Buffer, cipherText: buffer.Buffer, padding?: RSAPadding): buffer.Buffer
  /**
   * 使用rsa私钥加密，不建议使用这种方式来加密，不符合rsa的设计理念，存在安全风险。
   *
   * 该api只是为了能兼容其他编程语言中错误用法。
   *
   * @param privateKey rsa私钥
   * @param cipherText 密文
   */
  export declare function privateEncrypt(privateKey: buffer.Buffer, cipherText: buffer.Buffer): buffer.Buffer
  /**
   * 使用rsa公钥钥解密，不建议使用这种方式来解密，不符合rsa的设计理念，存在安全风险。
   *
   * 该api只是为了能兼容其他编程语言中错误用法。
   *
   * @param publicKey rsa公钥
   * @param plainText 明文
   */
  export declare function publicDecrypt(publicKey: buffer.Buffer, plainText: buffer.Buffer): buffer.Buffer
  /**
   * 生成rsa的密钥对。支持1024, 2048, 3072, 4096位。
   *
   * 密钥位越大，安全性越高，可加密的数据内容越长，加密的时间越长。建议设置位大于等于2048
   *
   * @example
   * ```ts
   *
   * import * as crypto from 'crypto';
   * import * as buffer from 'buffer';
   *
   * let rsakey = crypto.generateKey(2048);
   *
   * console.log(rsakey.privateKey.toString());
   *
   * console.log('\n');
   *
   * console.log(rsakey.publicKey.toString());
   * ```
   *
   * @param bits 密钥位数
   * @param padding 填充模式
   */
  export declare function generateKey(bits: number, padding?: RSAPadding): RSAKey
  /**
   * 签名api
   */
  export interface Signer {
    /**
     * 签名，该api安全性不高，建议使用signByPSS
     * @param privateKey RSA私钥
     * @param data 签名数据
     */
    sign(privateKey: buffer.Buffer, data: buffer.Buffer): buffer.Buffer
    /**
     * PSS签名
     * @example
     * ```ts
     *
     * import * as crypto from 'crypto';
     * import * as buffer from 'buffer';
     *
     * let rsakey = crypto.generateKey(1024);
     *
     * let data = buffer.from("huawei");
     * let sign = crypto.createSign(crypto.Hashs.SHA256);
     * let signed = sign.signByPSS(rsakey.privateKey, data);
     *
     * console.log(signed.toString(buffer.Encoding.Base64));
     *
     * ```
     * @param privateKey RSA私钥
     * @param data 签名数据
     */
    signByPSS(privateKey: buffer.Buffer, data: buffer.Buffer): buffer.Buffer
  }
  /**
   * 创建签名对象
   *
   * @example
   * ```ts
   *
   * import * as crypto from 'crypto';
   * import * as buffer from 'buffer';
   *
   * let rsakey = crypto.generateKey(1024);
   *
   * let data = buffer.from("huawei");
   * let sign = crypto.createSign(crypto.Hashs.SHA256);
   * let signed = sign.sign(rsakey.privateKey, data);
   *
   * console.log(signed.toString(buffer.Encoding.Base64));
   * ```
   *
   * @param hash hash算法名称. 注意: MD5, SHA1是不安全的hash算法
   */
  export declare function createSign(hash: Hashs): Signer
  /**
   * 验证api
   */
  export interface Verify {
    /**
     * 验证
     * @param publicKey RSA公钥
     * @param signed 待验证的签名
     * @param src 原始数据
     */
    verify(publicKey: buffer.Buffer, signed: buffer.Buffer, src: buffer.Buffer): boolean
  }
  /**
   * 创建签名对象
   *
   * @example
   * ```ts
   *
   * import * as crypto from 'crypto';
   * import * as buffer from 'buffer';
   *
   * let rsakey = crypto.generateKey(1024);
   *
   * let data = buffer.from("huawei");
   * let sign = crypto.createSign(crypto.Hashs.SHA256);
   * let signed = sign.sign(rsakey.privateKey, data);
   *
   * let verify = crypto.createVerify(crypto.Hashs.SHA256);
   * console.log(verify.verify(rsakey.publicKey, signed, data)); // true
   * ```
   *
   * @param algorithm hash算法名称. 注意: MD5, SHA1是不安全的hash算法
   */
  export declare function createVerify(hash: Hashs): Verify
  /**
   * pbkdf2算法
   *
   * @example
   * ```ts
   *
   * import * as crypto from 'crypto';
   * import * as buffer from 'buffer';
   *
   * let password = buffer.from("1xxxxxxxxxx1");
   * let salt = buffer.from("1xxxxxxxxxx1");
   *
   * let crypt = crypto.pbkdf2(password, salt, 1000, 32, crypto.Hashs.SHA1);
   * console.log(crypt.toString(buffer.Encoding.Base64));
   * ```
   *
   * @param password 密钥
   * @param salt 盐值. 注意：为了安全起见，盐长度应大于8字节，盐应该是安全的随机数
   * @param iterations 迭达次数. 注意：建议迭代1000次以上
   * @param keyLen 生成hash key长度. 注意：小于32字节，在某些情况下可能不够安全
   * @param algorithm hash算法名称
   */
  export declare function pbkdf2(password: buffer.Buffer, salt: buffer.Buffer, iterations: number, keyLen: number, algorithm: string): buffer.Buffer
  /**
   * 生成安全随机字符串
   *
   * @example
   * ```ts
   *
   * import * as crypto from 'crypto';
   * import * as buffer from 'buffer';
   *
   * let rand = crypto.randomBytes(32);
   * console.log(rand.toString(buffer.Encoding.Base64));
   * ```
   *
   * @param size 生成安全随机字符串的长度
   */
  export declare function randomBytes(size: number): buffer.Buffer
}

declare module 'crypto-js' {
  import * as buffer from 'buffer'
  /**
   * @deprecated
   * The enum has deprecated
   */
  export declare enum mode {
    CBC = 0,
  }
  /**
   * @deprecated
   * The class has deprecated
   */
  export declare enum pad {
    Pkcs7 = 2,
  }
  /**
   * @deprecated
   * The class has deprecated
   */
  export declare class MyBuffer {
    private readonly m_buf
    constructor(buf: buffer.Buffer)
    toString(encoding?: any): string
    toBuffer(): buffer.Buffer
  }
  /**
   * @deprecated
   * The namespace has deprecated
   */
  export declare namespace enc {
    namespace Base64 {
      function parse(secureKey: string): MyBuffer
    }
    namespace Hex {
      function parse(secureKey: string): MyBuffer
    }
    namespace Utf8 {
      function parse(secureKey: string): MyBuffer
    }
  }
  /**
   * @deprecated
   * The interface has deprecated
   */
  export interface Option {
    iv: MyBuffer
    mode: mode
    padding?: pad
  }
  /**
   * @deprecated
   *
   * The namespace has deprecated
   */
  export declare namespace AES {
    /**
     * @deprecated
     * The api has deprecated
     *
     * @param data
     * @param key
     * @param option
     */
    function encrypt(data: MyBuffer, key: MyBuffer, option: Option): MyBuffer
    /**
     * @deprecated
     * The api has deprecated
     *
     * @param data
     * @param key
     * @param option
     */
    function decrypt(data: string | MyBuffer, key: MyBuffer, option: Option): MyBuffer
  }
}

declare module 'excel' {
  /**
   * 把对象数据编码为excel文件二进制内容。
   *
   * @param columns excel表格列名数组。
   * @param data 对象数据
   *
   * @example
   * ```ts
   *
   * import { encode } from 'excel';
   *
   * let value = encode(['a', 'b', 'c'], [{'a': 1, 'b': 2, 'c': 3}, {'a': 4, 'b': 5, 'c': 6}, {'a': 7, 'b': 2, 'c': 3}]);
   * // 输出内容:
   * // a b   c
   * // 1 2   3
   * // 4 5   6
   * // 7 2   3
   * ```
   */
  export declare function encode(columns: string[], data: Object[]): any
  /**
   * 把数组内容编码为excel文件二进制内容。
   * 与encode的区别时，对象输入是一个一维数组。
   *
   *
   * @param columns excel表格列名数组。
   * @param data 数据数组，不能缺少一个数据。
   *
   * @example
   * ```ts
   *
   * import { encodeV2 } from 'excel';
   *
   * let value = encodeV2(['a', 'b', 'c'], [1, 2, 3, 4, 5, 6, 7, 2, 3]);
   * // 输出内容:
   * // a b   c
   * // 1 2   3
   * // 4 5   6
   * // 7 2   3
   * ```
   */
  export declare function encodeV2(columns: string[], data: any[]): any
}

declare module 'text' {
  /**
   * 将字符串转换为字节
   *
   * @example
   * ```ts
   *
   * import * as text from 'text';
   * let value = text.bytes('I want to be binary');
   * ```
   * @param content the string context
   */
  export declare function bytes(content: string): any
  /**
   * 匿名化文本，部分特殊字符会依旧显示
   * e.g. "Hello, world" -> "\*\*\*\*\*, \*\*\*\*\*"
   * @param text
   */
  export declare function concealAll(text: string): string
  /**
   * 匿名化文本的后半部分
   * e.g. "A区5栋3楼" -> "A区5***"
   * @param text
   */
  export declare function concealHalf(text: string): string
  /**
   * 匿名化文本的最后4个字符
   * e.g. "how are you" -> "how are ***"
   * @param text
   */
  export declare function concealLastFourChars(text: string): string
  /**
   * 匿名化文本的中间部分，首尾的文本会依旧显示
   * e.g. "12345678" -> "12\*\*\*\*78"
   * @param text
   */
  export declare function concealMiddlePart(text: string): string
  /**
   * 将姓名的名部分匿名化，姓部分正常显示
   * e.g. "Albert Einstein" -> "\*\*\*\*\*\* Einstein"
   * @param text
   */
  export declare function concealName(text: string): string
  /**
   * Conceal postcode
   * 匿名化邮政编码
   * e.g. "75275 2359" -> "75275 \*\*\*\*"
   * @param text
   */
  export declare function concealPostcode(text: string): string
  /**
   * 将年龄中的个位数大小隐藏
   * e.g. "23" -> "2*"
   * @param text
   */
  export declare function concealAge(text: string): string
  /**
   * 将日期格式的文本匿名化，仅显示年份
   * e.g. "2020-10-19" -> "2020-\*\*-\*\*"
   * @param text
   */
  export declare function concealDate(text: string): string
  /**
   * 将时间格式的文本匿名化，仅显示小时
   * e.g. "10:20:30" -> "10:\*\*:\*\*"
   * @param text
   */
  export declare function concealTime(text: string): string
  /**
   * 将时间日期格式的文本匿名化，仅显示日期
   * e.g. "2020-10-19 11:22:33" -> "2020-10-19 \*\*:\*\*:\*\*"
   * @param text
   */
  export declare function concealDatetime(text: string): string
  /**
   * 将电话号码格式的文本匿名化，仅显示首尾部分的文本
   * e.g. "00000000000" -> "000\*\*\*\*0000"
   * @param text
   */
  export declare function concealPhone(text: string): string
  /**
   * 将邮箱地址格式文本匿名化
   * e.g. "example@example.com" -> "\*\*\*\*\*\*@\*\*\*\*\*\*.com"
   * @param text
   */
  export declare function concealEmail(text: string): string
  /**
   * 将符合IP地址的格式文本匿名化，支持匿名化多个IP地址
   * e.g. "100.XXX.XXX.40:5060, 100.XXX.XXX.40:7080" -> "100.\*\*\*.\*\*.40:5060, 100.\*\*\*.\*\*.40:7080"
   * @param text
   */
  export declare function concealIP(text: string): string
}

declare module 'db' {
  /**
   * 对象操作的一些flag设置
   */
  export interface Flag {
    /**
     * 是否起一个独立的事务
     *
     * @deprecated 该接口已经标注废弃, 请使用`transaction`接口封装独立的事务。
     */
    isNewTransaction?: boolean
    /**
     * 是否执行快速的批量插入, 它要求记录集里面每条记录的字段集合完全一致。
     */
    bulkImport?: boolean
  }
  /**
   * 对象记录数组
   */
  export interface Record {
    [id: string]: any
  }
  /**
* ## 对象查询的条件支持的操作符
*
* ### 操作符列表
*
* | datatype |  support operator |  comment |
* | ------- | --------------- | --------- |
* | AutoNumber      | eq, ne, le, ge, lt, gt, in, contains, startwith, endwith, isnull, isnotnull | |
* | CheckBox        | eq, ne, isnull, isnotnull | |
* | Currency        | eq, ne, le, ge, lt, gt, in, isnull, isnotnull | |
* | Date            | eq, ne, le, ge, lt, gt, in, isnull, isnotnull | |
* | DateTime        | eq, ne, le, ge, lt, gt, in, isnull, isnotnull | |
* | Email           | eq, ne, le, ge, lt, gt, in, contains, startwith, endwith, isnull, isnotnull | |
* | Formula         | isnull, isnotnull |  |
* | ID              | eq, ne, in, isnull, isnotnull | |
* | Lookup          | eq, ne, in, isnull, isnotnull | |
* | MasterDetail    | eq, ne, in, isnull, isnotnull | |
* | Name            | eq, ne, le, ge, lt, gt, in, contains, startwith, endwith, isnull, isnotnull | |
* | Hierarchy       | eq, ne, in, isnull, isnotnull | |
* | Number          | eq, ne, le, ge, lt, gt, in, isnull, isnotnull | |
* | Percent         | eq, ne, le, ge, lt, gt, in, isnull, isnotnull | |
* | Phone           | eq, ne, le, ge, lt, gt, in, contains, startwith, endwith, isnull, isnotnull | |
* | SingleSelect    | eq, ne, isnull, isnotnull |  |
* | MultiSelect     | eq, ne, includes, excludes, isnull, isnotnull | |
* | RollupSummary   | sum, min, max, count, isnull, isnotnull | |
* | Text            | eq, ne, le, ge, lt, gt, contains, startwith, endwith, isnull, isnotnull | |
* | TextArea        | isnull, isnotnull |  |
* | URL             | eq, ne, le, ge, lt, gt, in, contains, startwith, endwith, isnull, isnotnull | |
* | PostalCode      | eq, ne, le, ge, lt, gt, in, contains, startwith, endwith, isnull, isnotnull | |
*

* - in
*
* in操作符需要传入数组形式的值：
*
* ```json
* {
*    "value": ["hello", "hi"]
* }
* ```
*/
  export declare enum Operator {
    eq = 'eq',
    ne = 'ne',
    le = 'le',
    ge = 'ge',
    lt = 'lt',
    gt = 'gt',
    in = 'in',
    contains = 'contains',
    startWith = 'startwith',
    endWith = 'endwith',
    isnull = 'isnull',
    isnotnull = 'isnotnull',
    includes = 'includes',
    excludes = 'excludes',
  }
  /**
   * 条件连接词枚举
   */
  export declare enum Conjunction {
    AND = 'AND',
    OR = 'OR',
  }
  /**
   *  条件操作符类型
   */
  export interface ConditionOperator {
    /**
     * 字段名
     */
    field: string
    /**
     * 操作符，如："eq", "in"
     */
    operator: Operator | string
    /**
     * 字段值
     */
    value?: any
    /**
     * 维度变量名, 它仅用于外部数据过滤器场景。
     */
    variable?: string
  }
  /**
   * 复合条件类型
   */
  export declare type Conditions = ConditionOperator | CombinationCondition
  /**
   * 条件类型
   */
  export interface Condition {
    /**
     * 条件连接词
     */
    conjunction?: Conjunction | string
    /**
     * 被连接的条件集合
     */
    conditions?: Conditions[]
  }
  /**
   * 组合条件类型
   */
  export interface CombinationCondition {
    condition: Condition
  }
  /**
   * 排序方式枚举
   */
  export declare enum Order {
    asc = 'asc',
    desc = 'desc',
    ASC = 'asc',
    DESC = 'desc',
  }
  /**
   * OrderBy类型
   */
  export interface OrderBy {
    /**
     * 排序字段
     */
    field: string
    /**
     * 排序方式
     */
    order: Order | string
  }
  /**
   * 分组类型
   */
  export interface GroupBy {
    /**
     * 分组字段
     */
    field: string
  }
  /**
   * 聚合函数列表
   */
  export declare enum Function {
    min = 'min',
    max = 'max',
    sum = 'sum',
    avg = 'avg',
    MIN = 'min',
    MAX = 'max',
    SUM = 'sum',
    AVG = 'avg',
  }
  /**
   * 聚合接口
   */
  export interface Aggregate {
    /**
     * 字段别名
     */
    alias?: string
    /**
     * 字段名
     */
    field: string
    /**
     * 聚合函数
     */
    function: Function | string
  }
  /**
   * 投影字段类型
   */
  export interface FieldOption {
    /**
     * 投影字段集合
     */
    fields: string[]
  }
  /**
   * 查询选择
   */
  export interface OptionItem {
    /**
     * 投影字段集合
     */
    fields?: string[]
    /**
     * 排序字段集合
     */
    orderby?: OrderBy[]
    /**
     * 分组字段集合
     */
    groupby?: GroupBy[]
    /**
     * 聚合函数列表
     */
    aggregate?: Aggregate[]
    /**
     * 跳过的记录数目, 默认值为0
     */
    skip?: number
    /**
     * 查询记录数的上限, 默认值为5000，最大可指定为10000
     */
    limit?: number
    /**
     * distinct字段
     */
    distinct?: boolean
  }
  /**
   * 查询选项类型
   */
  export interface Option {
    options?: OptionItem
  }
  /**
   * 父关系类型
   */
  export interface ParentRelation {
    /**
     * 当前对象的字段(Lookup/MasterDetail类型),据此确定父对象
     */
    relatedField: string
    /**
     * 父对象的待查字段
     */
    options: FieldOption
    /**
     * (可选)第二级父对象
     */
    parents?: ParentRelation[]
  }
  /**
   * 子关系类型
   */
  export interface ChildRelation {
    /**
     * 子对象关系名(子对象定义Lookup/MasterDetail时指定),据此确定子对象
     */
    relationName: string
    /**
     * 子对象的待查字段
     */
    options: FieldOption
    /**
     * (可选)第二级子对象
     */
    childs?: ChildRelation[]
  }
  /**
   * 查询关系类型
   */
  export interface Relation {
    parents?: ParentRelation[]
    childs?: ChildRelation[]
  }
  /**
   * 对象封装器
   */
  export interface Orm {
    /**
     * 新增加记录
     *
     * @param record 记录
     * @param flag 操作flag
     * @return 新增记录id
     */
    insert(record: Record, flag?: Flag): string
    /**
     * 按照id更新记录
     *
     * @param id 记录id
     * @param record 需要更新的内容
     * @param flag 操作flag
     * @return 影响的记录数
     */
    update(id: string, record: Record, flag?: Flag): number
    /**
     * 按照id删除记录
     *
     * @param id 记录id
     * @param flag 操作flag
     * @return 影响的记录数
     */
    delete(id: string, flag?: Flag): number
    /**
     * 依据id查询记录
     *
     * @param id 记录id
     * @param option 查询选项，在按照id查询的情况，主要可以指定查询字段集，其他选项没有效果。
     * @param relation 父子关系，如果需要级联查询出父子关系，则需要指定
     *
     * @example
     * ```ts
     *
     * import * as db from 'db';
     *
     * let s = db.object('Student__CST');
     * let id = '00da000000f2scP5Bw36';
     *
     * let option = {
     *     options： {
     *         fields: ["name", "age", "grade"],
     *     }
     * };
     *
     * let record = s.query(id, option);
     * ```
     */
    query(id: string, option?: Option, relation?: Relation): Record
    /**
     * 批量插入数据
     *
     * @param records 记录集
     * @param flag 事务flag等
     * @return 成功插入记录的id列表
     *
     * @example
     * ```ts
     *
     * import * as db from 'db';
     *
     * let s = db.object('Student__CST');
     * let records = [
     *     {"name": "Tom","age__CST": "13"},
     *     {"name": "Jerry","age__CST": "12"},
     * ];
     *
     * let ids = s.batchInsert(record);
     * ```
     */
    batchInsert(records: Record[], flag?: Flag): string[]
    /**
     * 批量更新记录
     *
     * @param records 记录集
     * @param flag 事务flag等
     * @return string[] ids of the inserted records
     *
     * @example
     * ```ts
     *
     * import * as db from 'db';
     *
     * let s = db.object('Student__CST');
     *
     * let records = [
     *     {"id":"00da000000f2scP5Bw36", "name": "Tom_t"},
     *     {"id":"00da000000f2scP5Bw37", "name": "Jerry_j"},
     * ];
     *
     * let ids = s.batchUpdate(record);
     * ```
     */
    batchUpdate(records: Record[], flag?: Flag): string[]
    /**
     * 批量创建父子对象组合记录
     *
     * @param records 父子对象组合记录数组
     * @param flag 事务flag
     * @return 插入记录集id列表
     *
     * @example
     *
     * ```ts
     *
     * import * as db from 'db';
     *
     * let s = db.object('Customer__CST');
     *
     * // 父子记录需要通过关联字段关联起来，如下面的记录通过`Contacts`关联在一起，形成一条组合记录。
     * let records = [ {
     *     "name": "hello",
     *     "count__CST": 123,
     *     "Contacts": {
     *         "records": [
     *         {
     *             "name": "hello_contact1"
     *         },
     *         {
     *             "name": "hello_contact2"
     *         }]
     *     }
     * }];
     *
     * let ids = s.compositeInsert(records);
     * console.log("id list = ", ids);
     * ```
     */
    compositeInsert(records: Record[], flag?: Flag): Record[]
    /**
     * 按照条件更新记录
     *
     * @param condition 匹配条件
     * @param record 需要更新的内容
     * @param flag 操作flag
     * @return 影响的记录数
     *
     * @example
     * ```ts
     *
     * import * as db from 'db';
     *
     * let s = db.object('Student__CST');
     * let cond = {
     *     conjunction: db.Conjunction.AND,
     *     conditions: [
     *         {
     *             field: "name",
     *             operator: db.Operator.eq,
     *             value: "Tom"
     *         }
     *     ]
     * }
     * let record = {
     *     "name": "NewTom",
     *     "age__CST": "14"
     * };
     * let num = s.updateByCondition(cond, record);
     *
     * ```
     */
    updateByCondition(condition: Condition, record: Record, flag?: Flag): number
    /**
     * 按照条件删除记录
     *
     * @param condition 匹配条件
     * @param flag 操作flag
     * @return 影响的记录数
     *
     * @example
     * ```ts
     *
     * import * as db from 'db';
     *
     * let s = db.object('Student__CST');
     * let cond = {
     *     conjunction: db.Conjunction.AND,
     *     conditions: [
     *         {
     *             field: "name",
     *             operator: db.Operator.eq,
     *             value: "Tom"
     *         }
     *     ]
     * }
     * let num = s.deleteByCondition(cond);
     * ```
     */
    deleteByCondition(condition: Condition, flag?: Flag): number
    /**
     * 按照条件查询记录, 支持限制查询返回的记录条数，通过skip值指定从第多少条开始，limit指定总共返回多少条记录。
     * 在不指定skip, limit情况，默认值为skip=0, limit=5000，意味着查询返回结果集的前5000条。
     * limit最大值可设置为10000条，意味着该查询接口最多只能返回查询结果集的前10000条。
     *
     * @param condition 匹配条件
     * @param option 查询选项
     * @param relation 父子对象关系
     * @return 满足条件的记录集
     *
     * @example
     * ```ts
     *
     * import * as db from 'db';
     *
     * let s = db.object('Student__CST');
     *
     * let cond = {
     *     conjunction: db.Conjunction.AND,
     *     conditions:[
     *         {
     *             field: "age__CST",
     *             operator: db.Operator.lt,
     *             "value": 10
     *         }
     *     ]
     * }
     *
     * let records = s.queryByCondition(cond);
     * ```
     */
    queryByCondition(condition: Condition, option?: Option, relation?: Relation): Record[]
    /**
     * 计数满足条件记录数
     *
     * @param condition 匹配条件
     * @return 满足条件的记录数
     *
     * @example
     * ```ts
     *
     * import * as db from 'db';
     *
     * let s = db.object('Student__CST');
     * let cond = {
     *     conjunction: db.Conjunction.AND,
     *     conditions: [
     *         {
     *             field: "age__CST",
     *             "operator": db.Operator.lt,
     *             "value": 10
     *         }
     *     ]
     * }
     * let num = s.count(cond);
     * ```
     */
    count(condition?: Condition): number
  }
  /**
   * 创建一个对象封装器
   *
   * 注意：需要使用useObject装饰，在App打包时，会打包对象的元数据定义。
   *
   * @param name 对象名，可以指定自定义对象，标准对象。
   * @param dynamic 被标识已经废弃使用，请使用`db.dynamicObject`接口。
   * @return 对象封装器
   *
   * @example
   * ```ts
   *
   * import * as db from 'db';
   *
   * @useObject(['Student__CST'])
   * class Demo {
   *     run(): void {
   *         let s = db.object('Student__CST');
   *     }
   * }
   * ```
   */
  export declare function object(name: string, dynamic?: boolean): Orm
  /**
   * 创建一个动态对象封装器，该接口适合操作编译时不确定对象名称，需要运行时指定的场景。
   *
   * 注意：不需要useObject装饰，在App打包时，不会打包对象的元数据定义。
   *
   * @param name 对象名，可以指定自定义对象，标准对象。
   * @return 对象封装器
   *
   * @example
   * ```ts
   *
   * import * as db from 'db';
   *
   * class Demo {
   *     run(): void {
   *         let s = db.dynamicObject('Student__CST');
   *     }
   * }
   * ```
   */
  export declare function dynamicObject(name: string): Orm
  /**
   * sql执行选项接口
   */
  export interface SqlOptions {
    /**
     * sql绑定参数列表
     */
    params?: any[]
    /**
     * 是否支持动态对象名，不在编译阶段指定, 不需要useObject装饰。
     */
    dynamic?: boolean
    /**
     * 是否需要返回附加信息, 如picklist label
     */
    extra?: boolean
  }
  /**
   * sql列定义
   */
  export interface Column {
    /**
     * 列id
     */
    ID: string
    /**
     * 列名称
     */
    Name: string
    /**
     * 列标签
     */
    Label: string
    /**
     * 列数据类型
     */
    Type: string
    /**
     * 列定义大小
     */
    Size: number
    /**
     * 列的值的scale, 仅在number类型字段有效
     */
    Scale: number
  }
  /**
   * sql结果集
   */
  export interface ResultSet {
    /**
     * 影响记录数
     * @deprecated 该字段已经废弃使用
     */
    AffectedRows: number
    /**
     * 结果集的列定义信息
     */
    RdsDef: Column[]
    /**
     * 结果集
     */
    Rds: Record[]
  }
  /**
   * sql操作接口
   */
  export interface Sql {
    /**
     * 执行sql语句, 使用'limit offset, count'语句来进行查询分页,
     * 支持限制查询返回的记录条数，通过offset值指定从第多少条开始，count指定总共返回多少条记录。
     * 在不指定offset, count情况，默认值为offset=0, count=5000，意味着查询返回结果集的前5000条。
     * count最大值可设置为10000条，意味着该查询接口最多只能返回查询结果集的前10000条。
     *
     * @param stmt sql
     * @param options sql执行选项
     * @return 记录集
     */
    exec(stmt: string, options?: SqlOptions): Record[]
    /**
     * 执行sql语句, 使用'limit offset, count'语句来进行查询分页,
     * 支持限制查询返回的记录条数，通过offset值指定从第多少条开始，count指定总共返回多少条记录。
     * 在不指定offset, count情况，默认值为offset=0, count=5000，意味着查询返回结果集的前5000条。
     * count最大值可设置为10000条，意味着该查询接口最多只能返回查询结果集的前10000条。
     *
     * @param stmt sql
     * @param options sql执行选项
     * @return ResultSet
     *
     * @example
     * ```ts
     *
     * import * as db from 'db';
     *
     * @useObject(['student__cst'])
     * class Demo {
     *    run(): void {
     *        let se = db.sql();
     *        let value = sql.execute("select name, age__CST from student__CST where name = ? and age__CST = ?", { params: ['hello2', 'age2']});
     *    }
     * }
     *
     * let demo = new Demo();
     * demo.run();
     * ```
     */
    execute(stmt: string, options?: SqlOptions): ResultSet
    /**
     * 输出一个sql执行计划
     *
     * @param stmt sql
     * @param options 执行选项
     * @return 执行计划信息
     *
     * @example
     * ```ts
     *
     * import * as db from 'db';
     * let se = db.sql();
     * let plans = se.explain("select name, age__CST from student__CST where name = ? and age__CST = ?", { params: ['hello2', 'age2']});
     * ```
     */
    explain(stmt: string, options?: SqlOptions): Record[]
  }
  /**
   * 创建一个sql封装器
   */
  export declare function sql(): Sql
  /**
   * 聚合对象接口
   */
  export interface Bo {
    /**
     * 按照根对象id查询聚合对象
     *
     * @param id 根对象记录id
     * @param option 根对象查询选项
     * @return 记录集
     *
     * @example
     * ```ts
     *
     * import * as db from 'db';
     *
     * let b = db.bo('MyBOTest');
     * let id = '00da000000f2scP5Bw36';
     * let option = {
     *     options: {
     *         fields: ["name", "age", "grade"],
     *     }
     * };
     *
     * let records = b.query(id, option);
     * ```
     */
    query(id: string, option?: Option): Record
    /**
     * 按照根对象id列表查询聚合对象
     *
     * @param idList 根对象id列表
     * @param option 根对象查询选项
     * @return 记录集
     *
     * @example
     * ```ts
     *
     * import * as db from 'db';
     *
     * let b = db.bo('MyBOTest');
     * let ids = ['00da000000f2scP5Bw36','00da000000f2scP5Bw37','00da000000f2scP5Bw38'];
     * let option = {
     *     options: {
     *         fields: ["name", "age", "grade"],
     *     }
     * };
     *
     * let records = b.queryByIdList(ids, opt);
     * ```
     */
    queryByIdList(idList: string[], option?: Option): Record[]
    /**
     * 按照根对象的条件查询聚合对象
     *
     * @param condition 根对象匹配条件
     * @param option 根对象查询选项
     * @return 记录集
     *
     * @example
     * ```ts
     *
     * import * as db from 'db';
     *
     * let b = db.bo('MyBOTest');
     * let cond = {
     *     conjunction: db.Conjunction.AND,
     *     conditions: [
     *         {
     *             field: "name",
     *             operator: db.Operator.eq,
     *             value: "Tom",
     *         }
     *     ]
     * };
     *
     * let option = {
     *     options: {
     *         fields: ["name", "age", "grade"],
     *     }
     * };
     *
     * let records = b.queryByCondition(cond, option);
     * ```
     */
    queryByCondition(condition: Condition, option?: Option): Record[]
  }
  /**
   * 创建一个聚合对象
   * @param name 聚合对象名称
   */
  export declare function bo(name: string): Bo
  /**
   * 系统对象操作接口
   */
  export interface Setup {
    /**
     * 创建记录
     * @param record 记录
     * @returns 新增记录id
     */
    insert(record: Record): string
    /**
     * 按照id更新记录
     * @param id 记录id
     * @param record 更新内容
     * @returns 影响记录数
     */
    update(id: string, record: Record): number
    /**
     * 按照id删除记录
     * @param id 记录id
     * @return 影响记录数
     */
    delete(id: string): number
    /**
     * 按照id查询记录
     *
     * @param id 记录id
     * @return 记录
     */
    query(id: string): Record
    /**
     * 批量插入记录
     *
     * @param records 记录集
     * @returns 插入成功的记录id集
     */
    batchInsert(records: Record[]): string[]
    /**
     * 批量更新记录
     *
     * @param records 记录集
     * @returns 更新的记录id集
     */
    batchUpdate(records: Record[]): string[]
    /**
     * 按照条件更新记录，最多只能更新5000条记录
     *
     * @param record 需要更新的内容
     * @param condition 匹配条件
     */
    updateByCondition(record: Record, condition?: Condition): number
    /**
     * 按照条件删除记录, 最多只能删除5000条记录
     *
     * @param condition 匹配条件
     */
    deleteByCondition(condition?: Condition): number
    /**
     * 支持限制查询返回的记录条数，通过skip值指定从第多少条开始，limit指定总共返回多少条记录。
     * 在不指定skip, limit情况，默认值为skip=0, limit=5000，意味着查询返回结果集的前5000条。
     * limit最大值可设置为10000条，意味着该查询接口最多只能返回查询结果集的前10000条。
     *
     * @param condition 匹配条件
     * @param option 查询选项
     * @param relation 父子关系
     * @return 记录集
     */
    queryByCondition(condition?: Condition, option?: Option, relation?: Relation): Record[]
    /**
     * 计数满足条件记录数
     *
     * @param condition 匹配条件
     * @return 满足条件的记录数
     *
     * @example
     * ```ts
     *
     * import * as db from 'db';
     *
     * let s = db.setup('setup_object');
     * let cond = {
     *     conjunction: db.Conjunction.AND,
     *     conditions: [
     *         {
     *             field: "name",
     *             "operator": db.Operator.eq,
     *             "value": 'setup_name'
     *         }
     *     ]
     * }
     * let num = s.count(cond);
     * ```
     */
    count(condition?: Condition): number
  }
  /**
   * 创建一个系统对象封装器。
   *
   * 注意：不需要useObject装饰，在App打包时，不会打包对象的元数据定义。
   *
   * `setup`针对系统对象，`object`针对标准对象，定制对象。
   * 两者的核心区别：系统对象为了性能，大部分都会缓存在进程私有缓存中，而标准对象，定制对象不会缓存。
   * 如果是依据id的单独查询一条记录，setup直接从缓存查询结果，object需要从数据库查询结果，setup会快很多。
   * 批量删除，更新时，setup反而性能很差， setup对象删除，更新记录时，需要作很多特殊处理，所以不能直接从数据库层面批量删除。
   * `setup.updateByCondition`与`setup.deleteByCondition`的实现方式是：
   * 先调用`object.queryByCondition`从数据库查询出所有的满足条件的`id`, 然后依据`id`一个一个的去delete, update。
   *
   * @param objectName 对象名，可以指定系统对象。
   * @return 对象封装器
   *
   * @example
   * ```ts
   *
   * import * as db from 'db';
   *
   * class Demo {
   *     run(): void {
   *         let s = db.setup('CustomResource');
   *     }
   * }
   * ```
   */
  export declare function setup(objectName: string): Setup
  /**
   * 数据库事务操作抽象，用于`transaction`函数。
   */
  export interface Operation {
    (): void
  }
  /**
   * 把一系列数据操作封装成一个独立的事务。这些操作要么全成功，要么全失败。
   *
   * 且成功与失败不影响外部的操作，外部的操作的成功失败也不影响`transaction`的结果。
   *
   * @example
   * ```ts
   *
   * import { transaction } from 'db';
   *
   * let op = function(): void {
   *      // 进行一些数据库操作
   * }
   *
   * transaction(op);
   *
   * ```
   * @param operation 数据库操作函数
   */
  export declare function transaction(operation: Operation): void
  /**
   * 提交当前的数据库操作
   *
   * @example
   * ```ts
   *
   * import { commit } from 'db';
   *
   * // ...一些数据库操作
   *
   * // 如果希望提前提交流程前面的数据库操作，调用commit
   * commit();
   * ```
   */
  export declare function commit(): void
  /**
   * 回滚当前的数据库事务。
   *
   * @example
   * ```ts
   *
   * import { rollback } from 'db';
   *
   * // ...一些数据库操作
   *
   * // 如果希望回滚流程前面的数据库操作，调用rollback
   * rollback();
   * ```
   */
  export declare function rollback(): void
}

declare module 'meta' {
  /**
   * Metadata interface
   */
  export interface Meta {
    /**
     * 获取对象的定义信息
     */
    getObjectDef(): ObjectDef
    /**
     * 获取对象的字段列表
     *
     * @example
     * ```ts
     * import * as meta from 'meta';
     * let oj=meta.object("name")
     * let names=oj.fieldNames()
     * ```
     */
    fieldNames(): string[]
    /**
     * 根据名字获取指定字段的长度
     *
     * @example
     * ```ts
     * import * as meta from 'meta';
     * let oj=meta.object("object_name")
     * let len=oj.fieldLength("field_name")
     * ```
     */
    fieldLength(name: string): number
    /**
     * 根据名字获取字段的数值范围，即该字段的小数点后位数，只对数值类型字段有意义
     *
     * @example
     * ```ts
     * import * as meta from 'meta';
     * let oj=meta.object("object_name")
     * let scale=oj.fieldScale("field_name")
     * ```
     */
    fieldScale(name: string): number
    /**
     * 根据名字获取字段的类型
     *
     * @example
     * ```ts
     * import * as meta from 'meta';
     * let oj=meta.object("object_name")
     * let names=oj.fieldType("field_name")
     * ```
     */
    fieldType(name: string): string
    /**
     * 获取对象所属的队列列表
     *
     * @example
     * ```ts
     * import * as meta from 'meta';
     * let oj=meta.object("object_name")
     * let contents=oj.queues()
     * ```
     */
    queues(): Object[]
    /**
     * 根据 id 获取队列的所有成员的邮箱地址。
     * 在开启安全配置情况下， 需要 '查看所有用户' 权限才能访问
     *
     * @example
     * ```ts
     * import * as meta from 'meta';
     * let oj=meta.object("object_name")
     * let contents=oj.getMemberEmailsFromQueueByID("id")
     * ```
     */
    getMemberEmailsFromQueueByID(id: string): string
    /**
     * 根据字段名字获取字段的详细定义
     *
     * @param name 字段名字
     */
    getFieldDef(name: string): FieldDef
  }
  /**
   * DataType: 字段类型
   */
  export declare enum DataType {
    /**
     * ID id 类型， 每个对象都有且唯一有一个 id 类型的字段
     */
    ID = 'ID',
    /**
     * Name name 类型
     */
    Name = 'Name',
    /**
     * Text 文本类型
     */
    Text = 'Text',
    /**
     * TextArea 文本区
     */
    TextArea = 'TextArea',
    /**
     * AutoNumber 自动编码
     */
    AutoNumber = 'AutoNumber',
    /**
     * CheckBox 复选框
     */
    Bool = 'CheckBox',
    /**
     * Number 数字
     */
    Number = 'Number',
    /**
     * Currency 币种金额
     */
    Currency = 'Currency',
    /**
     * Percent 百分比
     */
    Percent = 'Percent',
    /**
     * Date 日期
     */
    Date = 'Date',
    /**
     * DateTime 日期/时间
     */
    DateTime = 'DateTime',
    /**
     * SingleSelect 选项列表
     */
    SingleSelect = 'SingleSelect',
    /**
     * MultiSelect 选项列表（多项选择）
     */
    MultiSelect = 'MultiSelect',
    /**
     * Lookup 查找关系
     */
    Lookup = 'Lookup',
    /**
     * MasterDetail 主从关系类型
     */
    MasterDetail = 'MasterDetail',
    /**
     * Phone 电话
     */
    Phone = 'Phone',
    /**
     * Email 电子邮件
     */
    Email = 'Email',
    /**
     * URL URL
     */
    URL = 'URL',
    /**
     * PostalCode 邮政编码
     */
    PostalCode = 'PostalCode',
    /**
     * Formula 公式
     */
    Formula = 'Formula',
    /**
     * RollupSummary 汇总字段
     */
    RollupSummary = 'RollupSummary',
    /**
     * MultiLanguage 多语言
     */
    MultiLanguage = 'MultiLanguage',
    /**
     * EncryptedText 加密文本
     */
    EncryptedText = 'EncryptedText',
  }
  /**
   * Create a metadata object.
   * @param name the object name
   * @param dynamic 是否为动态创建的对象，该参数适合操作编译时不确定对象名称，需要运行时指定的场景。 默认为非动态， 即需要 useObject 装饰
   *
   * @example
   * ```ts
   * import * as meta from 'meta';
   * let oj=meta.object("name")
   * ```
   *
   * @example
   *
   * ```ts
   * import * as meta from 'meta';
   * let obj = meta.object("name", true);
   * ```
   */
  export declare function object(name: string, dynamic?: boolean): Meta
  /**
   * ObjectDef 对象元数据定义
   */
  export interface ObjectDef {
    /**
     * 对象ID
     */
    id: string
    /**
     * Key前缀
     */
    keyPrefix: string
    /**
     * 对象名
     */
    name: string
    /**
     * 对象类型
     */
    category: string
    /**
     * 对象标签
     */
    label: string
    /**
     * 对象版本
     */
    version: number
    /**
     * 是否允许爆表
     */
    allowReports: boolean
    /**
     * 是否允许流媒体API接入
     */
    allowStreamingAPIAccess: boolean
    /**
     * 是否允许批量接入
     */
    allowBulkAPIAccess: boolean
    /**
     * 是否可检索
     */
    allowSearch: boolean
    /**
     * 是否可分享
     */
    allowSharing: boolean
    /**
     * 对象状态
     * 分为：complete、pending、dropping
     */
    status: string
    /**
     * 创建者 ID
     */
    createdBy: string
    /**
     * 创建者名称
     */
    createdByName: string
    /**
     * 创建日期
     */
    createdDate: string
    /**
     * 最后修改者 ID
     */
    lastModifiedBy: string
    /**
     * 最后修改者名称
     */
    lastModifiedByName: string
    /**
     * 最后修改日期
     */
    lastModifiedDate: string
    /**
     * 对象描述信息
     */
    desc: string
    /**
     * 安装包
     */
    installedPackage: string
    /**
     * 是否公开
     */
    isPublic: boolean
    /**
     * 对象归属
     */
    belongTo: string
    /**
     * 是否支持OLAP
     */
    isOlap: boolean
  }
  /**
   * FieldDef 字段元数据定义
   */
  export interface FieldDef {
    /**
     * 字段 id
     */
    id: string
    /**
     * 字段名
     */
    name: string
    /**
     * 字段标签
     */
    label: string
    /**
     * 字段类型
     */
    dataType: string
    /**
     * 字段类别
     */
    category: string
    /**
     * 是否必填
     */
    required: boolean
    /**
     * 是否唯一
     */
    unique: boolean
    /**
     * 是否有索引
     */
    isIndexed: boolean
    /**
     * 字段数据长度
     */
    dataLength: number
    /**
     * 字段的数值范围，即该字段的小数点后位数，只对数值类型字段有意义
     */
    scale?: number
    /**
     * 字段状态，如果非complete表示尚不可用
     */
    status: string
    /**
     * 是否大小写敏感
     */
    caseSensitive: boolean
    /**
     * 公式
     */
    formula?: string
    /**
     * 掩码类型
     */
    maskType?: string
    /**
     * 掩码字符
     */
    maskChar?: string
    /**
     * 加密文本类型的最小可搜索长度。
     */
    minEncryptedSearchableLength?: number
    /**
     * 选项列表 id
     */
    picklistId?: string
    /**
     * 选项列表值
     */
    picklistValues?: string[]
    /**
     * 选项列表默认值
     */
    picklistDefaultValue?: string
    /**
     * 自动编码模式
     */
    pattern?: string
    /**
     * 自动编码开始数字
     */
    startingNumber?: number
    /**
     * 字段关联关系描述
     */
    referenceObjectsDetails?: FieldRelationship[]
    /**
     * 默认值
     */
    defaultValue?: any
    /**
     * 创建者 id
     */
    createdBy: string
    /**
     * 创建者名字
     */
    createdByName: string
    /**
     * 创建时间
     */
    createdDate: string
    /**
     * 最后修改者 id
     */
    lastModifiedBy: string
    /**
     * 最后修改者名字
     */
    lastModifiedByName: string
    /**
     * 最后修改时间
     */
    lastModifiedDate: string
    /**
     * 字段描述
     */
    description: string
    /**
     * 保护模式
     */
    protectMode: number
    /**
     * 安装包
     */
    installedPackage: string
    /**
     * 是否可搜索
     */
    isSearchable: boolean
    /**
     * 拓展属性
     */
    extraSourceAttribute: string
  }
  /**
   * 字段关联关系定义
   */
  export interface FieldRelationship {
    /**
     * 关联对象 id
     */
    referenceObjectId: string
    /**
     *  关联对象名
     */
    referenceObjectName: string
    /**
     * 关系名字
     */
    relationshipName: string
    /**
     * 关系标签
     */
    relationshipLabel: string
  }
}

declare module 'zabbix' {
  export declare enum BuiltinValue {
    Resume = '0',
    Fault = '1',
    Event = '1',
  }
  /**
   * Send monitoring data
   * @example
   * ```ts
   * import * as zabbix from 'zabbix';
   * zabbix.send(key, value);
   * ```
   * @param key monitoring parameters
   * @param value monitoring parameter value
   */
  export declare function send(key: string, value: string): void
}

declare module 'uuid' {
  /**
   * @deprecated Version 1, based on timestamp and MAC address (RFC 4122)
   * @example
   *
   * ```ts
   *
   * import * as uuid from 'uuid';
   * console.log(uuid.v1()); // d149d808-63a7-11e8-8bff-90e2ba2ce5ec
   * ```
   */
  export declare function v1(): string
  /**
   * Version 4, based on random numbers (RFC 4122)
   * @example
   * ```ts
   *
   * import * as uuid from 'uuid';
   * console.log(uuid.v4()); // 7bd11fef-af41-446e-8630-aec57a0bc891
   * ```
   */
  export declare function v4(): string
}

declare module 'date' {
  /**
   * 时区索引枚举
   */
  export declare enum TimeZones {
    Local = '',
    AfricaCairo = '1',
    AfricaJohannesburg = '2',
    AfricaNairobi = '3',
    AmericaAnchorage = '4',
    AmericaBogota = '5',
    AmericaArgentinaBuenosAires = '6',
    AmericaCaracas = '7',
    AmericaChicago = '8',
    AmericaDenver = '9',
    AmericaHalifax = '10',
    AmericaLima = '11',
    AmericaLosAngeles = '12',
    AmericaMexicoCity = '13',
    AmericaNewYork = '14',
    AmericaPanama = '15',
    AmericaPhoenix = '16',
    AmericaPuertoRico = '17',
    AmericaSaoPaulo = '18',
    AmericaStJohns = '19',
    AmericaTijuana = '20',
    AsiaBaghdad = '21',
    AsiaBangkok = '22',
    AsiaKolkata = '23',
    AsiaColombo = '24',
    AsiaDhaka = '25',
    AsiaDubai = '26',
    AsiaHongKong = '27',
    AsiaJakarta = '28',
    AsiaJerusalem = '29',
    AsiaKabul = '30',
    AsiaKamchatka = '31',
    AsiaKarachi = '32',
    AsiaKathmandu = '33',
    AsiaKualaLumpur = '34',
    AsiaKuwait = '35',
    AsiaManila = '36',
    AsiaRangoon = '37',
    AsiaRiyadh = '38',
    AsiaHoChiMinh = '39',
    AsiaSeoul = '40',
    AsiaSingapore = '41',
    AsiaTaipei = '42',
    AsiaTashkent = '43',
    AsiaTbilisi = '44',
    AsiaTehran = '45',
    AsiaTokyo = '46',
    AsiaYekaterinburg = '47',
    AtlanticBermuda = '48',
    AtlanticCapeVerde = '49',
    AtlanticSouthGeorgia = '50',
    AustraliaAdelaide = '51',
    AustraliaBrisbane = '52',
    AustraliaDarwin = '53',
    AustraliaLordHowe = '54',
    AustraliaPerth = '55',
    AustraliaSydney = '56',
    AsiaShanghai = '57',
    EuropeAmsterdam = '58',
    EuropeAthens = '59',
    EuropeBerlin = '60',
    EuropeBrussels = '61',
    EuropeBucharest = '62',
    EuropeDublin = '63',
    EuropeHelsinki = '64',
    EuropeIstanbul = '65',
    EuropeLisbon = '66',
    EuropeLondon = '67',
    EuropeMinsk = '68',
    EuropeMoscow = '69',
    EuropeParis = '70',
    EuropePrague = '71',
    EuropeRome = '72',
    GMT = '73',
    PacificAuckland = '74',
    PacificChatham = '75',
    PacificEnderbury = '76',
    PacificFiji = '77',
    PacificGuadalcanal = '78',
    PacificHonolulu = '79',
    PacificKiritimati = '80',
    PacificNiue = '81',
    PacificNorfolk = '82',
    PacificPagoPago = '83',
    PacificTongatapu = '84',
    AmericaIndianaIndianapolis = '85',
    AmericaElSalvador = '86',
    AmericaSantiago = '87',
    AfricaAlgiers = '88',
    AsiaBeirut = '90',
    AsiaBaku = '91',
    AfricaCasablanca = '92',
    AsiaYerevan = '93',
    AtlanticAzores = '94',
    PacificPitcairn = '95',
    PacificGambier = '96',
    AmericaAdak = '97',
    AmericaScoresbysund = '98',
    PacificMarquesas = '99',
    AmericaMazatlan = '100',
  }
  /**
   * 时区信息类型
   */
  export interface TimeZone {
    /**
     * 时区索引值
     */
    value: TimeZones
    /**
     * 在IANA的时区数据库中的短名称
     */
    name: string
    /**
     * 时区显示名称
     */
    display: string
  }
  /**
   * 根据时区索引值，获取时区信息。
   *
   * @example
   * ```ts
   *
   * import { TimeZones, getTimeZone } from 'date';
   *
   * let timeZone = getTimeZone(TimeZones.AsiaShanghai);
   * console.log(timeZone);
   * // output:
   * // {
   * //     display: '(GMT+08:00) China Standard Time (Asia/Shanghai)',
   * //     name: 'Asia/Shanghai',
   * //     value: '57'
   * // }
   * ```
   * @param zoneIndex 时区索引值
   * @return 时区信息
   */
  export declare function getTimeZone(zoneIndex: TimeZones): TimeZone
  /**
   * 获取所有时区列表。
   *
   * @example
   * ```ts
   *
   * import { getTimeZones } from 'date';
   *
   * let timeZone = getTimeZones();
   * ```
   *
   * @return 时区列表
   */
  export declare function getTimeZones(): TimeZone[]
  /**
   * 将Date类型格式为字符串.
   *
   * @example
   *
   * ```ts
   *
   * import { getTimeZone } from 'context';
   * import { format } from 'date';
   *
   * let result = format(new Date(), 'yyyy-MM-dd HH:mm:ss', getTimeZone());
   * console.log(result);
   *
   * // 2021-01-26 11:57:02
   * ```
   *
   * @param date Date对象
   * @param layout 日期格式化字符串模板
   * @param timezone 时区索引值，请参考枚举`TimeZones`.
   * @return 格式化后的字符串
   */
  export declare function format(date: Date, layout: string, timezone?: TimeZones): string
  /**
   * 按照指定是格式化字符串，把日期字符串解析为Date类型变量。
   *
   * 如果没指定时区值, 则按照如下原则获取时区信息：
   *
   * - 用户http 请求触发的脚本中，使用用户时区.
   * - 定时任务触发的脚本中，使用租户时区.
   * - 事件触发的脚本中，使用UTC时区
   *
   * @example
   *
   * ```ts
   *
   * import { getTimeZone } from 'context';
   * import { toDate } from 'date';
   *
   * let date = toDate('2018-08-08 20:08:08', 'yyyy-MM-dd HH:mm:ss', getTimeZone());
   * ```
   *
   * @param date 时间字符串
   * @param layout 时间格式化字符串模板，如: `yyyy-MM-dd HH:mm:ss`
   * @param timezone 时区索引值，请参考枚举`TimeZones`
   * @return Date类型值
   */
  export declare function toDate(date: string, layout: string, timezone?: TimeZones): Date
  /**
   * 按照指定是格式化字符串，把日期字符串解析为Date类型变量。
   *
   * 按照如下原则获取时区信息：
   *
   * - 用户http 请求触发的脚本中，使用用户时区.
   * - 定时任务触发的脚本中，使用租户时区.
   * - 事件触发的脚本中，使用UTC时区
   *
   * @example
   * ```ts
   *
   * import { parse } from 'date';
   *
   * let date = parse('2018-08-08 20:08:08');
   * ```
   * @param date 时间字符串
   * @return Date类型值
   */
  export declare function parse(dateStr: string): Date
  /**
   * 获取当前时间，时区处理原则同`parse`函数。
   *
   * @example
   * ```ts
   *
   * import { now } from 'date';
   *
   * let currentTime = now();
   * ```
   * @return 当前时间
   */
  export declare function now(): Date
}

declare module 'permission' {
  import { Profile } from 'portaluser'
  /**
   *
   * Check whether has the specified permission set for the current user
   *
   * @example
   * ```ts
   *
   * import * as ps from 'permission';
   *
   * let permission_set_name = "edit_account"
   * let ok = ps.hasPermissionSet(permission_set_name)
   * ```
   *
   * @param permissionSetName the permission set name
   */
  export declare function hasPermissionSet(permissionSetName: string): boolean
  /**
   * permission assignment
   *
   */
  export interface PermissionAssignment {
    /**
     * permission name
     */
    servicePermission: string
    /**
     * if current profile has the permission
     */
    accessible: boolean
  }
  /**
   * clone part type
   */
  export declare enum ClonePartType {
    App = 1,
    Menu = 2,
    StandardObject = 3,
    CustomObject = 4,
    StandardObjectLayout = 5,
    CustomObjectLayout = 6,
    Flow = 7,
    Script = 8,
    BPM = 9,
    Connector = 10,
    Event = 11,
    ServicePermission = 12,
    SysParameter = 13,
    BAProject = 14,
  }
  /**
   * permission value type
   *
   * "CustomizeApplication": 开发应用
   *
   * "ViewAllUsers": 查看所有用户
   *
   * "ManageUsers": 管理用户&用户权限
   *
   * "ViewRoles": 查看角色
   *
   * "ManageRoles": 管理角色
   *
   * "ViewProfiles": 查看权限管理
   *
   * "ViewPermissionSets"： 查看扩展权限集
   *
   * "ManagePermissionSets"：管理扩展权限集
   *
   * "AssignPermissionSets": 分配扩展权限集
   *
   * "ViewGroups": 查看组
   *
   * "ManageGroups": 管理组
   *
   * "ViewQueues": 查看队列
   *
   * "ManageQueues": 管理队列
   *
   * "ManageSharing": 管理分享规则
   *
   * "ManageSystemConfig": 管理系统设置
   *
   * "ViewProcesses": 查看 BPM
   *
   * "ManageProcesses": 管理 BPM
   *
   * "RunProcesses": 执行 BPM
   *
   * "ViewFlows": 查看服务编排
   *
   * "ManageFlows": 管理服务编排
   *
   * "RunFlows": 执行服务编排
   *
   * "ViewScripts": 查看脚本
   *
   * "ManageScripts": 管理脚本
   *
   * "RunScripts": 执行脚本
   *
   * "ViewTimedTasks": 查看定时任务
   *
   * "ManageTimedTasks": 管理定时任务
   *
   * "ViewReports": 查看报表
   *
   * "ManageReports": 管理报表
   *
   * "RunReports": 运行报表
   *
   * "ExportReports": 导出报表
   *
   * "ViewDashboards": 查看仪表板
   *
   * "ManageDashboards": 管理仪表板
   *
   * "RunDashboards": 执行仪表板
   *
   * "ViewAllData": 查看所有数据
   *
   * "ModifyAllData": 修改所有数据
   *
   * "RunSQL": 运行 SQL
   *
   * "ManageWebsite": 管理网站
   *
   * "ManagePackage": 管理包
   *
   * "ManageDevelopBranch": 管理开发分支
   *
   * "UseDevelopBranch": 使用开发分支
   *
   * "ManageFeatureBranch": 管理特性分支
   *
   * "UseFeatureBranch": 使用特性分支
   *
   * "ManageFixBugBranch": 管理BUG修复分支
   *
   * "UseFixBugBranch": 使用BUG修复分支
   *
   * "ManageBaseline": 管理基线
   *
   * "ViewEncryptedData": 查看加密数据
   *
   * "ViewETLEngine": 管理 ETL 作业
   *
   * "ViewPortalUserPermissions": 查看业务用户权限
   *
   * "ManagePortalUserPermissions": 管理业务用户权限
   *
   * "ViewServicePermissions": 查看业务权限
   *
   * "ManageServicePermissions": 管理业务权限
   *
   * "ManageScene": 管理场景
   *
   * "ManageEventStreaming": 运行和停止数据接入与事件流任务
   *
   * "ViewNativeBO": 查看原生服务
   *
   * "ManageNativeBO": 管理原生服务
   *
   * "AssetBaseQuery": 查询组件/库
   *
   * "AssetListQuery": 资产列表查询
   *
   * "AssetAdmin": 管理组件/库
   *
   * "AppAdmin": 管理&开发页面
   *
   * "AppDev": 开发页面
   *
   * "DataVAdmin": 管理&开发DMAX项目
   *
   * "DataVDev": 开发DMAX项目
   *
   * "BaAdmin": 管理&开发BA组态项目
   *
   * "BaDev": 开发BA组态项目
   *
   * "ManageDevCloud": 对接DevCloud
   *
   * "ViewTenantTraceLog": 查看租户跟踪日志
   *
   * "ViewPrivateData": 查看敏感隐私数据
   *
   *
   */
  export declare type PermValueType = 'CustomizeApplication' | 'ViewAllUsers' | 'ManageUsers' | 'ViewRoles' | 'ManageRoles' | 'ViewProfiles' | 'ViewPermissionSets' | 'ManagePermissionSets' | 'AssignPermissionSets' | 'ViewGroups' | 'ManageGroups' | 'ViewQueues' | 'ManageQueues' | 'ManageSharing' | 'ManageSystemConfig' | 'ViewProcesses' | 'ManageProcesses' | 'RunProcesses' | 'ViewFlows' | 'ManageFlows' | 'RunFlows' | 'ViewScripts' | 'ManageScripts' | 'RunScripts' | 'ViewTimedTasks' | 'ManageTimedTasks' | 'ViewReports' | 'ManageReports' | 'RunReports' | 'ExportReports' | 'ViewDashboards' | 'ManageDashboards' | 'RunDashboards' | 'ViewAllData' | 'ModifyAllData' | 'RunSQL' | 'ManageWebsite' | 'ManagePackage' | 'ManageDevelopBranch' | 'UseDevelopBranch' | 'ManageFeatureBranch' | 'UseFeatureBranch' | 'ManageFixBugBranch' | 'UseFixBugBranch' | 'ManageBaseline' | 'ViewEncryptedData' | 'ViewETLEngine' | 'ViewPortalUserPermissions' | 'ManagePortalUserPermissions' | 'ViewServicePermissions' | 'ManageServicePermissions' | 'ManageScene' | 'ManageEventStreaming' | 'ViewNativeBO' | 'ManageNativeBO' | 'AssetBaseQuery' | 'AssetListQuery' | 'AssetAdmin' | 'AppPackage' | 'AppInstall' | 'AppAdmin' | 'AppDev' | 'DataVAdmin' | 'DataVDev' | 'BaAdmin' | 'BaDev' | 'ManageDevCloud' | 'ViewTenantTraceLog' | 'ViewPrivateData'
  /**
   * permission map
   */
  export declare type PermissionValue = {
    [a in PermValueType]?: boolean
  }
  /**
   *
   * @param data
   */
  export declare function valueMap(data: PermissionValue): PermissionValue
  /**
   * 权限相关管理接口
   *
   * 在开启安全配置情况下，需要对应的权限才可以执行， 如对权限进行增删改需要 '管理权限'， 查看需要权限需要 '查看权限管理'
   *
   */
  export interface ProfileManager {
    /**
     * 创建一个权限集并返回其 id
     *
     * 使用独立的事务，不与调用脚本共用一个事务，执行成功后即持久化到数据库中
     *
     * @param name name of profile, should be unique
     * @param desc description
     */
    create(name: string, desc: string): string
    /**
     * 克隆一个权限集并返回其 id
     *
     * 使用独立的事务，不与调用脚本共用一个事务，执行成功后即持久化到数据库中
     *
     * @param srcProfileId
     * @param name
     */
    clone(srcProfileId: string, name: string): string
    /**
     *  部分克隆权限集并返回其 id
     *
     *  使用独立的事务，不与调用脚本共用一个事务，执行成功后即持久化到数据库中
     *
     * @example
     * ```ts
     *
     * import * as permission from 'permission';
     *
     * let src = "src_profile_id"
     * let newName = "cloned_name"
     * let mng = permission.newProfileManager();
     * mng.partialClone(src, newName, permission.ClonePartType.App, permission.ClonePartType.Menu, permission.ClonePartType.ServicePermission, permission.ClonePartType.SysParameter);
     * ```
     *
     * @param srcProfileID
     * @param name
     * @param parts
     */
    partialClone(srcProfileID: string, name: string, ...parts: ClonePartType[]): string
    /**
     * 继承克隆权限。新的权限仅克隆基本权限与业务权限，克隆后可独立修改。 其他权限项均与父权限保持一致，不允许修改。
     *
     * 子权限不允许被继承克隆。
     *
     * 使用独立的事务，不与调用脚本共用一个事务，执行成功后即持久化到数据库中
     *
     * @example
     * ```ts
     * import * as ps from 'permission';
     *
     * let src = "src_profile_id"
     * let newName = "cloned_name"
     * let mng = ps.newProfileManager();
     * let newId = mng.inheritClone(src, newName);
     * ```
     *
     * @param srcProfileId
     * @param name
     */
    inheritClone(srcProfileId: string, name: string): string
    /**
     * 部分继承克隆权限。新的权限仅克隆基本权限与业务权限，克隆后可独立修改。可选部分权限仅克隆而不继承，可独立修改。
     *
     * 其他权限项均与父权限保持继承关系，不允许修改。
     *
     * 使用独立的事务，不与调用脚本共用一个事务，执行成功后即持久化到数据库中
     *
     * @example
     * ```ts
     * import * as ps from 'permission';
     *
     * let src = "src_profile_id"
     * let newName = "profile_name"
     * let mng = ps.newProfileManager();
     * let newId = mng.partialInheritClone(src, newName, ps.ClonePartType.App, ps.ClonePartType.Menu);
     * ```
     *
     * @param srcProfileId
     * @param name
     * @param parts 仅克隆而不继承的权限。目前仅支持输入ps.ClonePartType.App和ps.ClonePartType.Menu。
     * @return 新权限配置的ID
     */
    partialInheritClone(srcProfileId: string, name: string, ...parts: ClonePartType[]): string
    /**
     * 重新设置继承克隆的子权限的部分继承设置
     *
     * 使用独立的事务，不与调用脚本共用一个事务，执行成功后即持久化到数据库中
     *
     * @param profileID
     * @param parts 仅克隆而不继承的权限。目前仅支持输入ps.ClonePartType.App和ps.ClonePartType.Menu。
     */
    setInheritProfilePartial(profileID: string, ...parts: ClonePartType[]): any
    /**
     * get all profiles
     */
    getList(): Profile[]
    /**
     * get profile by id
     *
     * @param id profile id
     */
    getById(id: string): Profile
    /**
     *
     * get profile by name, if not found return null
     *
     * @param name of profile
     */
    getByName(name: string): Profile
    /**
     *
     * update profile value by id
     *
     * @example
     * ```ts
     * import * as ps from 'permission';
     *
     * let id = "xxxx"
     * let mng = permission.newProfileManager();
     * let values = permission.valueMap({ ViewAllData: false, ManageUsers: true, ManageProcesses: true });
     * mng.updateProfileById(id, values);
     * ```
     *
     * @param id
     * @param values
     */
    updateProfileById(id: string, values: PermissionValue): void
    /**
     * update profile value by name
     *
     * @example
     *```ts
     * import * as ps from 'permission';
     *
     * let name = "name"
     * let mng = permission.newProfileManager();
     * let values = permission.valueMap({ ViewAllData: false, ManageUsers: true, ManageProcesses: true });
     * mng.updateProfileByName(name, values);
     * ```
     *
     * @param name
     * @param values
     */
    updateProfileByName(name: string, values: PermissionValue): void
    /**
     * 根据ID获取权限配置的应用程序设置
     *
     * @param profileId
     * @return 应用程序配置的列表
     */
    getAppProfilesById(profileId: string): AppProfile[]
    /**
     * 根据ProfileID更新指定权限配置的应用程序设置
     *
     * @example
     * ```ts
     * import * as permission from 'permission';
     *
     * let mng = permission.newProfileManager();
     * mng.updateAppProfilesById(id, [{ applicationID: "app_ID", visible: true, default: true }])
     * ```
     *
     * @param profileID Profile ID
     * @param appProfiles 需要更新的AppProfile配置信息，未指定的AppProfile不会修改。
     */
    updateAppProfilesById(profileID: string, appProfiles: AppProfile[]): void
    /**
     * 根据权限配置ID和应用程序ID获取菜单设置
     *
     * @example
     * ```typescript
     * import * as permission from 'permission';
     *
     * let mng = permission.newProfileManager();
     * let appMenuList = mgr.getAppMenuProfilesById("profileID", "appID")
     * console.log(appMenuList)
     * ```
     *
     * @param profileID 权限配置ID
     * @param appID 应用程序ID
     * @return 应用菜单配置的列表
     */
    getAppMenuProfilesById(profileID: string, appID: string): AppMenuProfile[]
    /**
     * 更新应用的菜单配置
     *
     * @example
     * ```typescript
     * import * as permission from 'permission';
     *
     * let mng = permission.newProfileManager();
     * mng.updateAppMenuProfilesById( profileID, appID, [{menu: 'menuID1', default: true, visible: true},{menu: 'menuID2', default: false, visible: false}])
     * ```
     *
     * @param profileID
     * @param appID
     * @param menuProfiles
     */
    updateAppMenuProfilesById(profileID: string, appID: string, menuProfiles: AppMenuProfile[]): any
    /**
     * delete profile by id, if profile does not exist, throw error
     *
     * @param id
     */
    deleteById(id: string): void
    /**
     *
     * delete profile by name, if profile does not exist, throw error
     *
     * @param name name of profile
     */
    deleteByName(name: string): void
    /**
     * get service permissions by profile id
     *
     * @param id profile id
     */
    getPermissionsById(id: string): PermissionAssignment[]
    /**
     * set service permission by profile id
     *
     * @param id profile id
     * @param permission permission name
     * @param accessible
     */
    setPermission(id: string, permission: string, accessible: boolean): void
    /**
     * set multiple service permission
     *
     * @param id profile id
     * @param pas permission assignment list
     */
    setPermissions(id: string, pas: PermissionAssignment[]): void
    /**
     * set connector permission allows to update accessibility of one connector
     * @param id profile id
     * @param connectorType type of connector, e.g. obs
     * @param connectorName the name of the connector
     * @param accessible
     */
    setConnectorPermission(id: string, connectorType: ConnectorType, connectorName: string, accessible: boolean): void
  }
  export declare enum ConnectorType {
    obs = 'obs',
    minio = 'minio',
    s3 = 's3',
    objectstorageproxy = 'objectstorageproxy',
  }
  /**
   * service permission
   *
   */
  export interface Permission {
    id: string
    name: string
    label: string
    category: string
  }
  /**
   * 业务权限凭证管理
   *
   * 在开启安全配置情况下，需要对应的权限才可以执行， 如对业务权限进行增删改需要 '管理业务权限凭证'， 查看需要 '查看业务权限凭证'
   *
   */
  export interface PermissionManager {
    /**
     * create a service permission, return new created permission id
     *
     * @param name name of permission, should be unique
     * @param label label of permission
     * @param category category of permission, can be empty or unset
     */
    create(name: string, label: string, category: string): string
    /**
     * get all permission
     */
    getList(): Permission[]
    /**
     * get all permission categories
     */
    getCategoryList(): string[]
    /**
     * get permission list by category, if category is empty string, return all permission without category
     *
     * @param category
     */
    getListByCategory(category: string): Permission[]
    /**
     * delete permission by id
     *
     * @param id
     */
    delete(id: string): void
  }
  /**
   * profile manager
   *
   *@example
   *```ts
   *import * as permission from 'permission';
   *
   *let mng = permission.newProfileManager();
   *
   *let profiles = mng.getList();
   *console.log(profiles);
   *for (let p of profiles) {
   *   console.log(p.name);
   *}
   *
   *try {
   *   let id = mng.create("create_by_script_1", "由脚本创建");
   *   let p = mng.getById(id);
   *   console.log(p);
   *   console.log(p.id);
   *   console.log(p.name);
   *
   *   let pas = mng.getPermissionsById(id);
   *   // console.log(pas);
   *
   *   for (let pa of pas) {
   *       console.log(pa.servicePermission, pa.accessible);
   *       if (!pa.accessible) {
   *           mng.setPermission(id, pa.servicePermission, !pa.accessible);
   *       }
   *   }
   *   pas.filter((v, i) => i % 2 == 0).forEach((v) => mng.setPermission(id, v.servicePermission, false))
   *
   *   pas = mng.getPermissionsById(id);
   *   console.log(pas);
   *
   *
   *   mng.deleteById(id);
   *
   *} catch (e) {
   *    console.log(e.message);
   *}
   *```
   *
   *
   * @example
   * ```ts
   * import * as permission from 'permission';
   *
   *
   * let mng = permission.newProfileManager();
   * let newName = "SOMNAME";
   * try {
   *  mng.deleteByName(newName);
   * }catch (e) {
   *   console.log(e);
   * }
   *
   * let anonymous = "Anonymous User Profile";
   * let ap = mng.getByName(anonymous);
   *
   *
   * let newId = mng.clone(ap.id, newName);
   *
   * let aps = mng.getPermissionsById(ap.id);
   * let bps = mng.getPermissionsById(newId);
   *
   * for (let i = 0; i < aps.length; i++) {
   *   if (aps[i].accessible != bps[i].accessible || aps[i].servicePermission != bps[i].servicePermission) {
   *        console.log("oops~")
   *   }
   * }
   *
   * bps.forEach(v => {
   *    v.accessible = !v.accessible
   * })
   *
   * mng.setPermissions(newId, bps)
   *
   * ```
   *
   */
  export declare function newProfileManager(): ProfileManager
  /**
   * service permission manager
   *
   *@example
   *```ts
   *import * as permission from 'permission';
   *
   *let mng = permission.newPermissionManager();
   *
   *let ps = mng.getList();
   *ps.forEach((v) => console.log(v.name));
   *ps.forEach((v) => console.log(v));
   *
   *let categories = mng.getCategoryList();
   *categories.forEach((v) => {
   *   console.log("category: ", v);
   *   let cp = mng.getListByCategory(v);
   *   cp.forEach((d) => console.log(d));
   *})
   *
   *console.log("no categories");
   *let cp = mng.getListByCategory("");
   *cp.forEach((d) => console.log(d.name))
   *
   *
   *let id = mng.create("name_2", "新建的标签", "test");
   *console.log(id);
   *
   *cp = mng.getListByCategory("test")
   *cp.forEach((v) => console.log(v.id, v.name, v.label, v.category));
   *
   *mng.delete(id);
   *```
   */
  export declare function newPermissionManager(): PermissionManager
  export interface AppProfile {
    applicationID: string
    name?: string
    label?: string
    visible: boolean
    default: boolean
  }
  export interface AppMenuProfile {
    menu: string
    label?: string
    visible: boolean
    default: boolean
  }
}

declare module 'user' {
  /**
   * user information
   */
  export interface UserInfo extends Entity {
    userName?: Text
    password?: Text
    alias?: Text
    email?: Text
    phone?: Phone
    photo?: Text
    profile?: Lookup
    role?: Lookup
    languageLocaleKey?: Text
    timeZoneSidKey?: Text
    address?: Text
    city?: Text
    communityNickname?: Text
    companyName?: Text
    country?: Text
    department?: Text
    manager?: Hierarchy
    occupation?: Text
    postalCode?: PostalCode
    province?: Text
    status?: Checkbox
    extIdentityID?: Text
  }
  /**
   * 创建一个全局的平台用户
   *
   * 在开启安全配置情况下， 需要 '管理用户&权限' 权限才能访问
   *
   * 使用独立的事务，不与调用脚本共用一个事务，执行成功后即持久化到数据库中
   *
   *  @example
   * ```ts
   * import * as user from 'user'
   *
   * let res=user.create(userInfo)
   *
   * ```
   * @param userInfo user information
   */
  export declare function create(userInfo: UserInfo): string
  /**
   * 创建一个平台用户，只存在于当前租户，不能通过账号密码登录
   *
   * 在开启安全配置情况下， 需要 '管理用户&权限' 权限才能访问
   *
   * 使用独立的事务，不与调用脚本共用一个事务，执行成功后即持久化到数据库中
   *
   *  @example
   * ```ts
   * import * as user from 'user'
   *
   * let res=user.createInnerUser(userInfo)
   *
   * ```
   * @param userInfo user information
   */
  export declare function createInnerUser(userInfo: UserInfo): string
  /**
   *  列举所有的用户。
   *
   *  在开启安全配置情况下， 需要 '查看所有用户' 权限才能访问
   *
   *  @example
   * ```ts
   * import * as user from 'user'
   *
   * let res=user.list()
   *
   * ```
   */
  export declare function list(): UserInfo[]
  /**
   * 根据ID获取用户信息
   *
   * @example
   * ```ts
   * import * as user from 'user'
   *
   * let res=user.get(id)
   *
   * ```
   * @param id user id
   */
  export declare function get(id: ID): UserInfo
  /**
   * 根据用户 ID 修改 用户信息
   *
   * 在开启安全配置情况下， 需要 '管理用户&权限' 权限才能访问
   *
   * @example
   * ```ts
   * import * as user from 'user'
   *
   * let res=user.update(id,userInfo)
   *
   * ```
   * @param id user id
   * @param userInfo new user info
   */
  export declare function update(id: ID, userInfo: UserInfo): number
  /**
   *
   * 根据用户ID 激活用户
   *
   * 在开启安全配置情况下， 需要 '管理用户&权限' 权限才能访问
   *
   * @example
   * ```ts
   * import * as user from 'user'
   *
   * let res=user.activate(id)
   *
   * ```
   * @param id user id
   */
  export declare function activate(id: ID): number
  /**
   * 根据ID 冻结用户
   *
   * 在开启安全配置情况下， 需要 '管理用户&权限' 权限才能访问
   *
   * @example
   * ```ts
   * import * as user from 'user'
   *
   * let res=user.deactivate(id)
   *
   * ```
   * @param id user id
   */
  export declare function deactivate(id: ID): number
  /**
   * 检查指定的用户名是否存在。
   *
   * 在开启安全配置情况下， 需要 '查看所有用户' 权限才能访问
   *
   * check the username exists in current tenant or not
   * @example
   * ```ts
   * import * as user from 'user'
   *
   * let res=user.exists(username)
   *
   * ```
   * @param username
   */
  export declare function exists(username: string): boolean
}

declare module 'wechat' {
  /**
   * @deprecated new wechat client by connector id
   * @example
   * ```ts
   * import * as client from 'wechat'
   * let wechatClient=client.newWechatClient(connectorId）
   * ```
   * @param connectorId
   */
  export declare function newWechatClient(connectorId: string): WechatLoginHandler
  /**
   * [recommend]
   * new wechat client by connector name
   * @example
   * ```ts
   * import * as client from 'wechat'
   * let wechatClient=client.newClient(name）
   * ```
   * @param name connector name
   */
  export declare function newClient(name: string): WechatLoginHandler
  export interface WechatLoginResponse {
    /**
     * access token
     */
    accessToken: string
    /**
     * expires in
     */
    expiresIn: number
    /**
     * refresh token
     */
    refreshToken: string
    /**
     * open id
     */
    openId: string
    /**
     * scope
     */
    scope: string
  }
  /**
   * wechat login handler
   */
  export interface WechatLoginHandler {
    /**
     * get code url
     * * @example
     * ```ts
     * import * as client from 'wechat'
     * let wechatClient=client.newClient(name）
     * let res = wechatClient.getCodeUrl(state)
     * ```
     * @param state
     */
    getCodeUrl(state: string): string
    /**
     * get access token
     *
     * @example
     * ```ts
     * import * as client from 'wechat'
     *
     * let wechatClient=client.newClient(connectorID）
     *
     * let res=wechatClient.getAccessToken(code)
     * ```
     * @param code
     */
    getAccessToken(code: string): WechatLoginResponse
  }
}

declare module 'typeorm' {
  import * as db from 'db'
  /**
   *  Entity option interface
   */
  export interface EntityOption {
    name: string
    label?: string
    description?: string
  }
  /**
   *  column option interface
   */
  export interface ColumnOption {
    name?: string
    label?: string
    type: string
    length?: number
    help?: string
    description?: string
    default?: any
    caseSensitive?: boolean
    unique?: boolean
    required?: boolean
  }
  interface FieldMap {
    [id: string]: ColumnOption
  }
  /**
   * decorator
   */
  declare class Schema {
    name: string
    fieldMap: FieldMap
  }
  /**
   * 装饰器，将字段数据的映射等信息存储在schema属性中
   * @param option
   *
   * @example
   * ```ts
   *import * as typeorm from 'typeorm';
   * typeorm.Entity({
   *      name:
   *      label:
   *      description:
   * })
   * ```
   */
  export declare function Entity(option: EntityOption): (target: any) => void
  /**
   * 装饰器 将propertyKey和装饰器参数作为键值对存入fieldMap中
   * @param option 字段所包含的数据
   * @example
   * ```ts
   * import * as typeorm from 'typeorm';
   *
   */
  export declare function Column(option: ColumnOption): (target: any, propertyKey: string) => void
  /**
   * Represents some Type of the Object.
   */
  export declare type ObjectType<T> = {
    new (): T
    fromRecord<T extends BaseEntity>(record: db.Record): T
    fromRecordList<T extends BaseEntity>(records: db.Record[]): T[]
    findRecordList<T extends BaseEntity>(conditions?: DeepPartial<T>): db.Record[]
  }
  /**
   * Same as Partial<T> but goes deeper and makes Partial<T> all its properties and sub-properties.
   */
  export declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>
  }
  declare type EntityOrm = db.Orm | db.Setup
  /**
   * base entity
   * @example
   * ```ts
   *
   * import { BaseEntity } from 'typeorm';
   * let baseEntity = new BaseEntity();
   * let res = baseEntity.createOrm();
   */
  export declare class BaseEntity {
    /**
     * 标准字段，所有对象都拥有的字段，集中在基类中定义
     */
    id: ID
    name: Text
    createdBy: Text
    createdDate: Datetime
    lastModifiedBy: Text
    lastModifiedDate: Datetime
    owner: Lookup
    currencyIsoCode: Text
    installedPackage: Lookup
    custom: Checkbox
    protected schema: Schema
    protected orm: EntityOrm
    constructor()
    /**
     * 创建orm
     * @returns 对象
     */
    private createOrm
    /**
     * 创建记录
     * @returns 记录
     */
    private createRecord
    /**
     * Checks if entity has an id.
     * If entity composite compose ids, it will check them all.
     */
    hasId(): boolean
    /**
     * 保存对象，如果首次保存则是创建一条新记录，否则保存当前记录
     * @returns 当前对象
     */
    save(): this
    /**
     * 删除对象
     * @returns 当前对象
     */
    remove(): this
    /**
     * 增量更新当前记录，需要更新的记录值由参数record传入。
     * @param record
     * @returns 更新后的当前对象
     */
    update(record: db.Record): this
    /**
     * 获取记录。
     * @returns 目标记录
     */
    toRecord(): db.Record
    /**
     * 批量插入记录
     * @param this 当前对象
     * @param records 待插入的记录数据
     * @returns 记录id数组
     */
    static batchInsert<T extends BaseEntity>(this: ObjectType<T>, records: db.Record[]): ID[]
    /**
     * 批量更新
     * @param this 当前对象
     * @param records 待更新的记录数据
     * @returns 记录id数组
     */
    static batchUpdate<T extends BaseEntity>(this: ObjectType<T>, records: db.Record[]): ID[]
    /**
     * 根据条件查询记录
     * @param this 当前对象
     * @param conditions 条件
     * @returns 满足条件的记录数据
     */
    static find<T extends BaseEntity>(this: ObjectType<T>, conditions?: DeepPartial<T>): T[]
    /**
     * 根据条件查询记录
     * @param this
     * @param conditions 条件
     * @returns 满足条件的记录数据
     */
    static findRecordList<T extends BaseEntity>(this: ObjectType<T>, conditions?: DeepPartial<T>): db.Record[]
    /**
     * 根据id查询记录
     * @param this 当前对象
     * @param id 记录id
     * @returns 满足条件的记录数据
     */
    static findOne<T extends BaseEntity>(this: ObjectType<T>, id: ID): T
    /**
     * 根据数据生成记录
     * @param this 当前对象
     * @param record 数据
     * @returns 记录
     */
    static fromRecord<T extends BaseEntity>(this: ObjectType<T>, record: db.Record): T
    /**
     * 根据数据列表生成记录
     * @param this 当前对象
     * @param records 数据列表
     * @returns 记录列表
     */
    static fromRecordList<T extends BaseEntity>(this: ObjectType<T>, records: db.Record[]): T[]
    /**
     * 根据对象名称生成orm
     * @param objectName 对象名称
     * @returns 对象
     */
    static createOrmByNam(objectName: string): EntityOrm
  }
  export {}
}

declare module 'sso' {
  export interface Attributes {
    [id: string]: any
  }
  /**
   * sso client interface
   */
  export interface Client {
    /**
     * validate ticket and return username if succeed
     */
    validateTicket(): string
    /**
     * login with sso type and return access-token
     */
    login(): string
    /**
     * get username after successfully validate ticket
     */
    getUsername(): string
    /**
     * get additional attributes about user
     */
    getAttributes(): Attributes
  }
  /**
   * create an sso client with default cas server
   *
   * @param service
   * @param ticket
   */
  export declare function newClient(service: string, ticket: string): Client
  /**
   * create an sso client with cas server
   *
   * @param service
   * @param ticket
   * @param casUrl
   */
  export declare function newClientWithCas(service: string, ticket: string, casUrl: string): Client
}

declare module 'redis' {
  /**
   * redis键值对
   */
  export interface StringDict {
    [id: string]: string
  }
  /**
   * 有序集合的成员，分数对
   */
  export interface SortedSetPair {
    /**
     * 分数
     */
    score: number
    /**
     * 成员
     */
    member: string
  }
  /**
   * set 命令可选参数
   */
  export interface SetOption {
    /**
     * 将键的过期时间设置为指定秒秒数，不设置则默认不超时
     */
    ex?: number
    /**
     * 可选参数， 如果设置为 true 则表示只在键不存在时，才对键进行设置操作。
     */
    nx?: boolean
    /**
     * 可选参数， 如果设置为 true 则表示只在键已经存在时， 才对键进行设置操作。
     */
    xx?: boolean
  }
  /**
   *  scan 可选参数
   */
  export interface ScanOption {
    /**
     * 如果指定 match, 则只返回和给定模式相匹配的元素。
     *
     * 最多允许 200 个字符
     */
    match?: string
    /**
     * count 选项的作用就是让用户告知迭代命令， 在每次迭代中应该返回多少元素。 默认值为 10， 最大值为2000。
     * 需要注意的是 count 只是一种提示，虽然大多数情况下都是有效的。
     *
     * 在迭代一个编码为整数集合（intset，一个只由整数值构成的小集合）、
     * 或者编码为压缩列表（ziplist，由不同值构成的一个小哈希或者一个小有序集合）时，
     * 增量式迭代命令通常会无视 COUNT 选项指定的值， 在第一次迭代就将数据集包含的所有元素都返回给用户。
     *
     * 并非每次迭代都要使用相同的 count 值。
     */
    count?: number
  }
  /**
   * HScan 命令的返回结果
   */
  export interface HScanResult {
    /**
     * 用于进行下一次迭代的新游标； 如果为0， 代表迭代已经结束，整个数据集已经被完整遍历。
     */
    cursor: number
    /**
     * 哈希表键值对列表
     */
    hash: StringDict
  }
  /**
   * ZScan 命令的返回结果
   */
  export interface ZScanResult {
    /**
     * 用于进行下一次迭代的新游标； 如果为0， 代表迭代已经结束，整个数据集已经被完整遍历。
     */
    cursor: number
    /**
     * 有序集合列表，每个元素都是一个有序集合元素。
     */
    members: SortedSetPair[]
  }
  /**
   * SScan 命令的返回结果
   */
  export interface SScanResult {
    /**
     * 用于进行下一次迭代的新游标； 如果为0， 代表迭代已经结束，整个数据集已经被完整遍历。
     */
    cursor: number
    /**
     * 集合元素列表
     */
    sets: string[]
  }
  /**
   * 字符串
   */
  export interface StringClient {
    /**
     *
     * 将字符串值 value 关联到 key
     *
     * @param key 键
     * @param value 值
     * @param expireInSeconds 超时时间，如果为0表示永不超时
     */
    set(key: string, value: string, expireInSeconds: number): boolean
    /**
     * 将字符串值 value 关联到 key
     *
     * 只在设置操作成功完成时才返回 OK ； 如果命令使用了 NX 或者 XX 选项， 但是因为条件没达到而造成设置操作未执行， 那么命令将返回空批量回复
     *
     * @param key 键
     * @param value 值
     * @param opt 可选参数，参考 {@link setOption}
     */
    set(key: string, value: string, opt?: SetOption): string
    /**
     * 返回与键 key 相关联的字符串值。
     *
     * @param key 键值
     */
    get(key: string): string
    /**
     * 将键 key 的值设为 value ， 并返回键 key 在被设置之前的旧值。
     *
     * 返回给定键 key 的旧值。
     *
     * 如果键 key 没有旧值， 也即是说， 键 key 在被设置之前并不存在， 那么命令返回 nil 。
     *
     * @param key
     * @param value
     */
    getset(key: string, value: string): string
    /**
     * 返回键 key 储存的字符串值的长度。
     *
     * @param key
     */
    strlen(key: string): number
    /**
     * 如果键 key 已经存在并且它的值是一个字符串， APPEND 命令将把 value 追加到键 key 现有值的末尾。
     *
     * 如果 key 不存在， APPEND 就简单地将键 key 的值设为 value ， 就像执行 SET key value 一样。
     *
     * @param key
     * @param value
     */
    append(key: string, value: string): number
    /**
     * 为键 key 储存的数字值加上 1
     *
     * @param key 键值
     */
    incr(key: string): number
    /**
     * 为键 key 储存的数字值加上增量 increment
     *
     * @param key 键值
     * @param increment 必须是正整数
     */
    incrBy(key: string, increment: number): number
    /**
     * 为键 key 储存的数字值减去一。
     *
     * @param key 键值
     */
    decr(key: string): number
    /**
     * 将键 key 储存的整数值减去减量 decrement 。
     *
     * @param key 键值
     * @param decrement 必须是正整数
     */
    decrBy(key: string, decrement: number): any
  }
  /**
   * 哈希表
   */
  export interface HashClient {
    /**
     * 将哈希表 hash 中域 field 的值设置为 value
     *
     * @param key 哈希表
     * @param field 域
     * @param value 字段值, 如果值为null或者undefined，设置成空字符串
     *
     * @return 当 HSET 命令在哈希表中新创建 field 域并成功为它设置值时， 命令返回 1 ； 如果域 field 已经存在于哈希表， 并且 HSET 命令成功使用新值覆盖了它的旧值， 那么命令返回 0 。
     */
    hset(key: string, field: string, value: string): number
    /**
     * 当且仅当域 field 尚未存在于哈希表的情况下， 将它的值设置为 value
     *
     * @param key 哈希表
     * @param field 域
     * @param value 字段值
     *
     * @returns HSETNX 命令在设置成功时返回 1 ， 在给定域已经存在而放弃执行设置操作时返回 0
     */
    hsetnx(key: string, field: string, value: string): number
    /**
     * 返回哈希表中给定域的值。
     *
     * @param key 哈希表
     * @param field 域
     *
     * @return 如果存在则返回值，不存在则返回空字符串
     */
    hget(key: string, field: string): string
    /**
     * 检查给定域 field 是否存在于哈希表 hash 当中
     *
     * @param key 哈希表
     * @param field 域
     *
     * @return 给定域存在时返回 1 ， 在给定域不存在时返回 0
     */
    hexists(key: string, field: string): number
    /**
     * 删除哈希表 key 中的一个或多个指定域，不存在的域将被忽略
     *
     * @param key 哈希表
     * @param fields 域列表
     *
     * @return 被成功移除的域的数量，不包括被忽略的域
     */
    hdel(key: string, ...fields: string[]): number
    /**
     * 返回哈希表 key 中域的数量。
     *
     * @param key 哈希表
     *
     * @return 哈希表中域的数量。 当 key 不存在时，返回 0 。
     */
    hlen(key: string): number
    /**
     * 返回哈希表 key 中， 与给定域 field 相关联的值的字符串长度（string length）
     *
     * @param key 哈希表
     * @param field 域
     *
     * @return 如果给定的键或者域不存在， 那么命令返回 0
     */
    hstrlen(key: string, field: string): number
    /**
     * 为哈希表 key 中的域 field 的值加上增量 increment
     *
     * @param key 哈希表， 如果 key 不存在，一个新的哈希表被创建并执行 HINCRBY 命令
     * @param field 域，如果域 field 不存在，那么在执行命令前，域的值被初始化为 0。 如果存在且值是字符串的， 则抛异常
     * @param increment 增量，可为负数，本操作的值被限制在 64 位(bit)有符号数字表示之内
     *
     * @return 执行 HINCRBY 命令之后，哈希表 key 中域 field 的值
     */
    hincrby(key: string, field: string, increment: number): number
    /**
     * 同时将多个 field-value (域-值)对设置到哈希表 key 中。
     * 此命令会覆盖哈希表中已存在的域。
     *
     * @param key 哈希表，如果 key 不存在，一个空哈希表被创建并执行 HMSET 操作
     * @param map 必须是<string, string>键值对
     *
     * @returns 如果命令执行成功，返回 OK。 当 key 不是哈希表(hash)类型时，返回一个错误
     */
    hmset(key: string, map: StringDict): string
    /**
     * 返回哈希表 key 中，一个或多个给定域的值。
     *
     * @param key 哈希表
     * @param fields 域列表
     *
     * @return 一个包含多个给定域的关联值的表，表值的排列顺序和给定域参数的请求顺序一样。
     */
    hmget(key: string, ...fields: string[]): string[]
    /**
     * 返回哈希表 key 中的所有域。
     *
     * @param key 哈希表
     *
     * @return 一个包含哈希表中所有域的表。 当 key 不存在时，返回一个空表。
     */
    hkeys(key: string): string[]
    /**
     * 返回哈希表 key 中所有域的值。
     *
     * @param key 哈希表
     *
     * @return 一个包含哈希表中所有值的表。 当 key 不存在时，返回一个空表。
     */
    hvals(key: string): string[]
    /**
     * 返回哈希表 key 中，所有的域和值。
     *
     * @param key 哈希表
     *
     * @return 键值对
     */
    hgetAll(key: string): StringDict
    /**
     * 哈希表的增量式迭代命令， 用于增量地迭代一个哈希表上的元素。
     *
     * @example
     * ```ts
     * import * as redis from 'redis';
     *
     * let cli = redis.newClient("test");
     * let key = "hash_test_scan_1";
     *
     * // 预置数据用于测试
     * // for (let i = 0; i < 2000; i++) {
     * //     cli.hset(key, `F:${i}`, `VBCCCCC_${i}`);
     * // }
     *
     * // console.log(cli.hmset(key, { A: "A", B: "B", C: "C2", D: "D2" }));
     * console.log("no option", cli.hscan(key, 0));
     * console.log("empty option", cli.hscan(key, 0, {}));
     * console.log("count 5", cli.hscan(key, 0, { match: "F:1*", count: 5 }));
     *
     *
     * // scan all
     * let pattern = "F:1*";
     * let count = 100;
     *
     * console.log("scan all with iteration ", hscan(key, count, pattern));
     * console.log("scan all with iteration ", hscan(key, 50, pattern));
     *
     * function hscan(key: string, count: number, pattern: string): number {
     * 	let cursor = 0;
     * 	let iter = 1;
     * 	let m = {}
     * 	while (true) {
     * 		console.log("iteration ", iter, "cursor ", cursor);
     * 		let res = cli.hscan(key, cursor, { match: pattern, count: count });
     * 		// 仅用于检查是否会出现重复，按cursor迭代不会出现重复。
     * 		for (let k in res.hash) {
     * 			if (m[k]) {
     * 				throw new Error(`duplicated hash field ${k}`);
     * 			}
     * 			m[k] = res.hash[k];
     * 			console.log(k, " => ", res.hash[k]);
     * 		}
     * 		// 如果 cursor 为 0 代表已经遍历完了整个数据集
     * 		if (res.cursor == 0) {
     * 			// console.log("end with iteration ", iter);
     * 			console.log("all fields ", Object.keys(m).length)
     * 			return iter;
     * 		}
     * 		iter++;
     * 		cursor = res.cursor;
     * 	}
     * }
     *
     * ```
     *
     * @param key 哈希表
     * @param cursor 起始游标
     * @param opt scan 可选参数
     */
    hscan(key: string, cursor: number, opt?: ScanOption): HScanResult
  }
  /**
   * 有序集合按score排序的可选参数
   */
  export interface RangeByScoreOption {
    /**
     * 是否同时返回 score
     */
    withScores?: boolean
    /**
     * Limit 参数中的偏移量， offset与count 必须同时指定
     */
    offset?: number
    /**
     * Limit 参数中的成员个数，offset与count 必须同时指定
     */
    count?: number
  }
  /**
   * 有序集合
   */
  export interface SortedSet {
    /**
     * 将一个或多个 member 元素及其 score 值加入到有序集 key 当中
     *
     * 返回被成功添加的新成员的数量，不包括那些被更新的、已经存在的成员。
     *
     * @param key 键值
     * @param map <score,member>键值对， 即key为score，value是member
     */
    zadd(key: string, map: StringDict): number
    /**
     * 功能同 {@link zadd}
     *
     * @param key
     * @param pairs
     */
    zaddPair(key: string, ...pairs: SortedSetPair[]): number
    /**
     * 返回有序集 key 中，成员 member 的 score 值。
     * 如果 member 元素不是有序集 key 的成员，或 key 不存在，返回 nil
     *
     * @param key 键值
     * @param member 成员
     */
    zscore(key: string, member: string): string
    /**
     * 为有序集 key 的成员 member 的 score 值加上增量 increment
     *
     * member 成员的新 score 值，以字符串形式表示
     *
     * @param key 键值
     * @param increment 增量， 可以是负数值
     * @param member 成员
     */
    zincrby(key: string, increment: string, member: string): string
    /**
     *  返回有序集 key 中， score 值在 min 和 max 之间(默认包括 score 值等于 min 或 max )的成员的数量.
     *
     * @param key 键值
     * @param min 最小值
     * @param max 最大值
     */
    zcount(key: string, min: string, max: string): number
    /**
     * 返回有序集 key 的基数
     *
     * @param key 键值
     */
    zcard(key: string): number
    /**
     * 移除有序集 key 中，指定排名(rank)区间内的所有成员。
     * 区间分别以下标参数 start 和 stop 指出，包含 start 和 stop 在内。
     * 下标参数 start 和 stop 都以 0 为底，也就是说，以 0 表示有序集第一个成员，以 1 表示有序集第二个成员，以此类推。
     * 你也可以使用负数下标，以 -1 表示最后一个成员， -2 表示倒数第二个成员，以此类推。
     *
     * 返回被移除成员的数量
     *
     * @param key 键值
     * @param start 起始位置
     * @param stop 结束位置
     */
    zremrangebyrank(key: string, start: string, stop: string): number
    /**
     * 返回有序集 key 中，指定区间内的成员。
     * 其中成员的位置按 score 值递增(从小到大)来排序。
     * 具有相同 score 值的成员按字典序(lexicographical order )来排列。
     *
     * 下标参数 start 和 stop 都以 0 为底，也就是说，以 0 表示有序集第一个成员，以 1 表示有序集第二个成员，以此类推。
     * 你也可以使用负数下标，以 -1 表示最后一个成员， -2 表示倒数第二个成员，以此类推。
     *
     * @param key 键值
     * @param start 起始位置
     * @param stop 结束位置
     * @param withScores 是否同时返回score，默认不返回
     */
    zrange(key: string, start: string, stop: string, withScores?: boolean): string[]
    /**
     *
     * 返回有序集 key 中，指定区间内的成员
     * 其中成员的位置按 score 值递减(从大到小)来排列。
     * 具有相同 score 值的成员按字典序的逆序(reverse lexicographical order)排列。
     *
     * @param key 键值
     * @param start 其实位置
     * @param stop 结束位置
     * @param withScores 是否同时返回score
     */
    zrevrange(key: string, start: string, stop: string, withScores?: boolean): string[]
    /**
     * 返回有序集 key 中，所有 score 值介于 min 和 max 之间(包括等于 min 或 max )的成员。
     * 有序集成员按 score 值递增(从小到大)次序排列
     *
     * min 和 max 可以是 -inf 和 +inf ，这样一来，你就可以在不知道有序集的最低和最高 score 值的情况下，使用 ZRANGEBYSCORE 这类命令。
     *
     * 默认情况下，区间的取值使用闭区间 (小于等于或大于等于)，你也可以通过给参数前增加 ( 符号来使用可选的开区间 (小于或大于)。
     *
     * @example
     * ```ts
     * import * as redis from 'redis';
     *
     * let cli = redis.newClient("test");
     *
     * console.log(cli.zrangebysocre("test_key", "(1", "5"));
     *
     * ```
     *
     * @param key 键值
     * @param min 最小值
     * @param max 最大值
     * @param option 可选参数，参考{@link RangeByScoreOption}
     */
    zrangebyscore(key: string, min: string, max: string, option?: RangeByScoreOption): string[]
    /**
     * 返回有序集 key 中， score 值介于 max 和 min 之间(默认包括等于 max 或 min )的所有的成员。
     * 有序集成员按 score 值递减(从大到小)的次序排列。
     *
     * @param key 键值
     * @param max 最大值
     * @param min 最小值
     * @param option 可选参数，参考{@link RangeByScoreOption}
     */
    zrevrangebyscore(key: string, max: string, min: string, option?: RangeByScoreOption): string[]
    /**
     * 返回有序集 key 中成员 member 的排名。其中有序集成员按 score 值递增(从小到大)顺序排列。
     * 排名以 0 为底，也就是说， score 值最小的成员排名为 0 。
     *
     * 如果 member 是有序集 key 的成员，返回 member 的排名。 如果 member 不是有序集 key 的成员，返回 nil
     *
     * @param key 键值
     * @param member 成员
     */
    zrank(key: string, member: string): number
    /**
     * 返回有序集 key 中成员 member 的排名。其中有序集成员按 score 值递减(从大到小)排序。
     * 排名以 0 为底，也就是说， score 值最大的成员排名为 0 。
     *
     * 如果 member 是有序集 key 的成员，返回 member 的排名。 如果 member 不是有序集 key 的成员，返回 nil
     *
     * @param key 键值
     * @param member 成员
     */
    zrevrank(key: string, member: string): number
    /**
     *
     * 移除有序集 key 中的一个或多个成员，不存在的成员将被忽略。
     *
     * 返回被成功移除的成员的数量，不包括被忽略的成员。
     *
     * @param key 键值
     * @param members 成员列表
     */
    zrem(key: string, ...members: string[]): number
    /**
     * 移除有序集 key 中，指定排名(rank)区间内的所有成员。
     * 区间分别以下标参数 start 和 stop 指出，包含 start 和 stop 在内。
     *
     * 返回被移除成员的数量。
     *
     * @param key 键值
     * @param start 其实位置
     * @param stop 结束位置
     */
    zremrangebyrank(key: string, start: string, stop: string): number
    /**
     * 移除有序集 key 中，所有 score 值介于 min 和 max 之间(包括等于 min 或 max )的成员。
     *
     * 返回被移除成员的数量
     *
     * @param key 键值
     * @param min 最小值
     * @param max 最大值
     */
    zremrangebyscore(key: string, min: string, max: string): number
    /**
     * 有序集合的增量式迭代命令， 用于增量地迭代一个有序集合上的元素。
     *
     * @param key 有序集合
     * @param cursor 起始游标
     * @param opt scan 可选参数
     */
    zscan(key: string, cursor: number, opt?: ScanOption): ZScanResult
  }
  /**
   * 自动过期
   */
  export interface ExpirationClient {
    /**
     * 以秒为单位，返回给定 key 的剩余生存时间(TTL, time to live)。
     *
     * 当 key 不存在时，返回 -2 。 当 key 存在但没有设置剩余生存时间时，返回 -1 。 否则，以秒为单位，返回 key 的剩余生存时间。
     *
     * @param key 键值
     */
    ttl(key: string): number
    /**
     * 为给定 key 设置生存时间，当 key 过期时(生存时间为 0 )，它会被自动删除。
     *
     * 可以对一个已经带有生存时间的 key 执行 EXPIRE 命令，新指定的生存时间会取代旧的生存时间。
     *
     * 设置成功返回 1 。 当 key 不存在或者不能为 key 设置生存时间时(比如在低于 2.1.3 版本的 Redis 中你尝试更新 key 的生存时间)，返回 0 。
     *
     * @param key 键值
     * @param seconds 生存时间（秒）
     */
    expire(key: string, seconds: number): number
  }
  /**
   * 数据库
   */
  export interface DatabaseClient {
    /**
     * 检查给定 key 是否存在。
     *
     * 存在返回 true， 失败返回 false
     *
     * @param key 键值
     */
    exists(key: string): boolean
    /**
     * 删除给定的一个或多个 key
     *
     * @param keys 待删除的键值列表
     */
    del(...keys: string[]): number
  }
  /**
   * 相对位置
   */
  export declare enum Position {
    Before = 'BEFORE',
    After = 'AFTER',
  }
  /**
   * 列表
   */
  export interface ListClient {
    /**
     * 将一个或多个值 value 插入到列表 key 的表头
     *
     * 如果 key 不存在，一个空列表会被创建并执行 LPUSH 操作
     *
     * 返回执行 LPUSH 命令后，列表的长度。
     *
     * @param key 键
     * @param values 值列表
     */
    lpush(key: string, ...values: string[]): number
    /**
     * 将值 value 插入到列表 key 的表头，当且仅当 key 存在并且是一个列表。
     *
     * 和 {@link lpush} 命令相反，当 key 不存在时， LPUSHX 命令什么也不做
     *
     * 返回 LPUSHX 命令执行之后，表的长度。
     *
     * @param key 键
     * @param value 值
     */
    lpushx(key: string, value: string): number
    /**
     * 将一个或多个值 value 插入到列表 key 的表尾(最右边)。
     *
     * 如果 key 不存在，一个空列表会被创建并执行 RPUSH 操作。
     *
     * 返回执行 RPUSH 操作后，表的长度。
     *
     * @param key 键
     * @param values 值列表
     */
    rpush(key: string, ...values: string[]): number
    /**
     * 将值 value 插入到列表 key 的表尾，当且仅当 key 存在并且是一个列表。
     *
     * 和 {@link rpush}命令相反，当 key 不存在时， RPUSHX 命令什么也不做。
     *
     * 返回 RPUSHX 命令执行之后，表的长度
     *
     * @param key
     * @param value
     */
    rpushx(key: string, value: string): number
    /**
     * 移除并返回列表 key 的头元素。
     *
     * 列表的头元素。 当 key 不存在时，返回 nil 。
     *
     * @param key 键
     *
     */
    lpop(key: string): string
    /**
     * 移除并返回列表 key 的尾元素。
     *
     * 返回列表的尾元素。 当 key 不存在时，返回 nil 。
     *
     * @param key 键
     */
    rpop(key: string): string
    /**
     * 命令 RPOPLPUSH 在一个原子时间内，执行以下两个动作：
     * 1. 将列表 source 中的最后一个元素(尾元素)弹出，并返回给客户端。
     * 2. 将 source 弹出的元素插入到列表 destination ，作为 destination 列表的的头元素。
     *
     * 如果 source 不存在，值 nil 被返回，并且不执行其他动作。
     *
     * 如果 source 和 destination 相同，则列表中的表尾元素被移动到表头，并返回该元素，可以把这种特殊情况视作列表的旋转(rotation)操作。
     *
     * 注意， 如果redis是集群模式的，source 与 destination 必须是同一个分片下的。 可以通过添加花括号的方式， 如{key}1 {key}2 模式来的保证。
     *
     * 返回被弹出的元素
     *
     * @param source
     * @param destination
     */
    rpoplpush(source: string, destination: string): string
    /**
     * 根据参数 count 的值，移除列表中与参数 value 相等的元素
     * count 的值可以是以下几种：
     * 1. count > 0 : 从表头开始向表尾搜索，移除与 value 相等的元素，数量为 count 。
     *
     * 2. count < 0 : 从表尾开始向表头搜索，移除与 value 相等的元素，数量为 count 的绝对值。
     *
     * 3. count = 0 : 移除表中所有与 value 相等的值。
     *
     * 返回被移除元素的数量。 因为不存在的 key 被视作空表(empty list)，所以当 key 不存在时， LREM 命令总是返回 0 。
     *
     * @param key
     * @param count
     * @param value
     */
    lrem(key: string, count: number, value: string): number
    /**
     * 返回列表 key 的长度。
     *
     * 如果 key 不存在，则 key 被解释为一个空列表，返回 0 .
     *
     * 如果 key 不是列表类型，返回一个错误。
     *
     * @param key
     */
    llen(key: string): number
    /**
     * 返回列表 key 中，下标为 index 的元素。
     *
     * 下标(index)参数 start 和 stop 都以 0 为底，也就是说，以 0 表示列表的第一个元素，以 1 表示列表的第二个元素，以此类推。
     *
     * 你也可以使用负数下标，以 -1 表示列表的最后一个元素， -2 表示列表的倒数第二个元素，以此类推。
     *
     * 如果 key 不是列表类型，返回一个错误。
     *
     * 返回列表中下标为 index 的元素。 如果 index 参数的值不在列表的区间范围内(out of range)，返回 nil
     *
     * @param key
     * @param index
     */
    lindex(key: string, index: number): string
    /**
     * 将值 value 插入到列表 key 当中，位于值 pivot 之前或之后。
     *
     * 当 pivot 不存在于列表 key 时，不执行任何操作。
     *
     * 当 key 不存在时， key 被视为空列表，不执行任何操作。
     *
     * 如果命令执行成功，返回插入操作完成之后，列表的长度。 如果没有找到 pivot ，返回 -1 。 如果 key 不存在或为空列表，返回 0
     *
     * @param key
     * @param pos
     * @param pivot
     * @param value
     */
    linsert(key: string, pos: Position, pivot: string, value: string): number
    /**
     * 将列表 key 下标为 index 的元素的值设置为 value 。
     *
     * 当 index 参数超出范围，或对一个空列表( key 不存在)进行 LSET 时，返回一个错误。
     *
     * 操作成功返回 ok ，否则返回错误信息。
     *
     * @param key
     * @param index
     * @param value
     */
    lset(key: string, index: number, value: string): number
    /**
     * 返回列表 key 中指定区间内的元素，区间以偏移量 start 和 stop 指定。
     *
     * 下标(index)参数 start 和 stop 都以 0 为底，也就是说，以 0 表示列表的第一个元素，以 1 表示列表的第二个元素，以此类推。
     *
     * 返回一个列表，包含指定区间内的元素。
     *
     * @param key
     * @param start
     * @param stop
     */
    lrange(key: string, start: number, stop: number): string[]
    /**
     * 对一个列表进行修剪(trim)，就是说，让列表只保留指定区间内的元素，不在指定区间之内的元素都将被删除。
     *
     * 下标(index)参数 start 和 stop 都以 0 为底，也就是说，以 0 表示列表的第一个元素，以 1 表示列表的第二个元素，以此类推。
     *
     * 命令执行成功时，返回 ok
     *
     * @param key
     * @param start
     * @param stop
     */
    ltrim(key: string, start: number, stop: number): string[]
  }
  /**
   * 集合
   */
  export interface SetClient {
    /**
     * 将一个或多个 member 元素加入到集合 key 当中，已经存在于集合的 member 元素将被忽略
     *
     * 假如 key 不存在，则创建一个只包含 member 元素作成员的集合。
     *
     * 当 key 不是集合类型时，返回一个错误。
     *
     * 返回被添加到集合中的新元素的数量，不包括被忽略的元素。
     *
     * @param key
     * @param members
     */
    sadd(key: string, ...members: string[]): number
    /**
     * 判断 member 元素是否集合 key 的成员。
     *
     * 如果 member 元素是集合的成员，返回 1 。 如果 member 元素不是集合的成员，或 key 不存在，返回 0 。
     *
     * @param key
     * @param member
     */
    sismember(key: string, member: string): number
    /**
     * 移除并返回集合中的一个随机元素。
     *
     * @param key
     */
    spop(key: string): string
    /**
     * 如果命令执行时，只提供了 key 参数，那么返回集合中的一个随机元素。
     *
     * count 参数：
     *
     * 如果 count 为正数，且小于集合基数，那么命令返回一个包含 count 个元素的数组，数组中的元素各不相同。
     *
     * 如果 count 大于等于集合基数，那么返回整个集合。
     *
     * 如果 count 为负数，那么命令返回一个数组，数组中的元素可能会重复出现多次，而数组的长度为 count 的绝对值。
     *
     * 如果集合为空，返回空数组。
     *
     * @param key
     * @param count
     */
    srandmember(key: string, count: number): string[]
    /**
     * 移除集合 key 中的一个或多个 member 元素，不存在的 member 元素会被忽略。
     *
     * 返回被成功移除的元素的数量，不包括被忽略的元素。
     *
     * @param key
     * @param members
     */
    srem(key: string, ...members: string[]): number
    /**
     *  将 member 元素从 source 集合移动到 destination 集合, SMOVE 是一个原子操作。
     *
     *  如果 source 集合不存在或不包含指定的 member 元素，则 SMOVE 命令不执行任何操作，仅返回 0 。
     *  否则， member 元素从 source 集合中被移除，并添加到 destination 集合中去。
     *
     *  当 destination 集合已经包含 member 元素时， SMOVE 命令只是简单地将 source 集合中的 member 元素删除。
     *
     * 如果 member 元素被成功移除，返回 1 。
     * 如果 member 元素不是 source 集合的成员，并且没有任何操作对 destination 集合执行，那么返回 0 。
     *
     * 注意如果是 redis 集群的话， source 与 destination 必须在同一个分片上。
     *
     * @param source
     * @param destination
     * @param member
     */
    smove(source: string, destination: string, member: string): number
    /**
     * 返回集合 key 的基数(集合中元素的数量)。
     *
     * @param key
     */
    scard(key: string): number
    /**
     * 返回集合 key 中的所有成员。
     *
     * @param key
     */
    smembers(key: string): string[]
    /**
     * 返回一个集合的全部成员，该集合是所有给定集合的交集
     *
     * @param keys
     */
    sinter(...keys: string[]): string[]
    /**
     * 这个命令类似于 {@link sinter}命令，但它将结果保存到 destination 集合，而不是简单地返回结果集。
     *
     * 如果 destination 集合已经存在，则将其覆盖。
     *
     * 返回结果集中的成员数量。
     *
     * @param destination
     * @param keys
     */
    sinterstore(destination: string, ...keys: string[]): number
    /**
     * 返回一个集合的全部成员，该集合是所有给定集合的并集。
     *
     * @param keys
     */
    sunion(...keys: string[]): string[]
    /**
     * 这个命令类似于 {@link sunion} 命令，但它将结果保存到 destination 集合，而不是简单地返回结果集。
     *
     * 如果 destination 集合已经存在，则将其覆盖。
     *
     * 返回结果集中的元素数量
     *
     * @param destination
     * @param keys
     */
    sunionstore(destination: string, ...keys: string[]): number
    /**
     * 返回一个集合的全部成员，该集合是所有给定集合之间的差集。
     *
     * @param keys
     */
    sdiff(...keys: string[]): string[]
    /**
     * 这个命令的作用和 {@link sdiff}类似，但它将结果保存到 destination 集合，而不是简单地返回结果集。
     *
     * 如果 destination 集合已经存在，则将其覆盖。
     *
     * 返回结果集中的元素数量。
     *
     * @param destination
     * @param keys
     */
    sdiffstore(destination: string, ...keys: string[]): number
    /**
     * 集合的增量式迭代命令， 用于增量地迭代一个集合上的元素。
     *
     * @param key 集合
     * @param cursor 起始游标
     * @param opt scan 可选参数
     */
    sscan(key: string, cursor: number, opt?: ScanOption): SScanResult
  }
  /**
   * RedisClient Redis 客户端
   *
   * ```markdown
   * 参考自 [Redis Doc](http://redisdoc.com/)
   *
   * ## 字符串相关
   * - [x] SET: 通过 {@link StringClient.setEx}
   * - [ ] SETNX
   * - [ ] SETEX
   * - [ ] PSETEX
   * - [x] GET
   * - [x] GETSET
   * - [x] STRLEN
   * - [x] APPEND
   * - [ ] SETRANGE
   * - [ ] GETRANGE
   * - [x] INCR
   * - [x] INCRBY
   * - [ ] INCRBYFLOAT
   * - [x] DECR
   * - [x] DECRBY
   * - [ ] MSET
   * - [ ] MSETNX
   * - [ ] MGET
   *
   * ## 哈希表
   * - [x] HSET
   * - [x] HSETNX
   * - [x] HGET
   * - [x] HEXISTS
   * - [x] HDEL
   * - [x] HLEN
   * - [x] HSTRLEN
   * - [x] HINCRBY
   * - [ ] HINCRBYFLOAT
   * - [x] HMSET
   * - [x] HMGET
   * - [x] HKEYS
   * - [x] HVALS
   * - [x] HGETALL
   * - [x] HSCAN
   *
   * ## 列表
   * - [x] LPUSH
   * - [x] LPUSHX
   * - [x] RPUSH
   * - [x] RPUSHX
   * - [x] LPOP
   * - [x] RPOP
   * - [x] RPOPLPUSH
   * - [x] LREM
   * - [x] LLEN
   * - [x] LINDEX
   * - [x] LINSERT
   * - [x] LSET
   * - [x] LRANGE
   * - [x] LTRIM
   * - [ ] BLPOP: 暂不提供阻塞式的命令
   * - [ ] BRPOP: 暂不提供阻塞式的命令
   * - [ ] BRPOPLPUSH: 暂不提供阻塞式的命令
   *
   * ## 集合
   * - [x] SADD
   * - [x] SISMEMBER
   * - [x] SPOP
   * - [x] SRANDMEMBER
   * - [x] SREM
   * - [x] SMOVE
   * - [x] SCARD
   * - [x] SMEMBERS
   * - [x] SSCAN
   * - [x] SINTER
   * - [x] SINTERSTORE
   * - [x] SUNION
   * - [x] SUNIONSTORE
   * - [x] SDIFF
   * - [x] SDIFFSTORE
   *
   * ## 有序集合
   * - [x] ZADD
   * - [x] ZSCORE
   * - [x] ZINCRBY
   * - [x] ZCARD
   * - [x] ZCOUNT
   * - [x] ZRANGE
   * - [x] ZREVRANGE
   * - [x] ZRANGEBYSCORE
   * - [x] ZREVRANGEBYSCORE
   * - [x] ZRANK
   * - [x] ZREVRANK
   * - [x] ZREM
   * - [x] ZREMRANGEBYRANK
   * - [x] ZREMRANGEBYSCORE
   * - [ ] ZRANGEBYLEX
   * - [ ] ZLEXCOUNT
   * - [ ] ZREMRANGEBYLEX
   * - [x] ZSCAN
   * - [ ] ZUNIONSTORE
   * - [ ] ZINTERSTORE
   *
   * ## 数据库
   * - [x] EXISTS
   * - [ ] TYPE
   * - [ ] RENAME
   * - [ ] RENAMENX
   * - [ ] MOVE
   * - [x] DEL: 之前只支持删除一个，现在改成多个，且返回被删除的key的个数。
   * - [ ] RANDOMKEY
   * - [ ] DBSIZE
   * - [ ] KEYS
   * - [ ] SCAN
   * - [ ] SORT
   * - [ ] FLUSHDB
   * - [ ] FLUSHALL
   * - [ ] SELECT
   * - [ ] SWAPDB
   *
   * ## 自动过期
   * - [x] EXPIRE
   * - [ ] EXPIREAT
   * - [x] TTL
   * - [ ] PERSIST
   * - [ ] PEXPIRE
   * - [ ] PEXPIREAT
   * - [ ] PTTL
   * ```
   *
   * 由于脚本引擎的特性，会将实参类型隐式转换成兼容的入参类型，因此引擎在执行过程中可以接受非严格匹配的类型，
   *
   * 如 string 类型的入参可以接受 number 类型的实参， 但该行为是不可靠的，请按照方法签名指定的类型来传参。
   */
  export interface RedisClient extends StringClient, ListClient, SetClient, HashClient, SortedSet, ExpirationClient, DatabaseClient {}
  /**
   * 创建一个 redis client 实例
   *
   * @example
   * ```ts
   *
   * import * as redis from 'redis';
   * // 您需要事先在 redis 连接器上创建一个名字为 xxxx 的实例
   * let cli = redis.newClient("xxxx");
   *
   * ```
   * @param name redis 连接器的名字
   */
  export declare function newClient(name: string): RedisClient
}

declare module 'objectstorage' {
  /**
   * object type: s3, obs, minio
   */
  export declare enum StoreType {
    S3 = 's3',
    OBS = 'obs',
    MINIO = 'minio',
    PROXY = 'proxy',
  }
  /**
   * 创建对象存储client, newClient方法里参数不能为变量，否则打包解析不到连接器依赖
   *
   *
   * @param storeType obs/minio/s3
   * @param name name of connector
   * @param bucket bucket
   */
  export declare function newClient(storeType: StoreType, name: string, bucket?: string): Client
  /**
   * create object storage via proxy
   *
   * @param name name of proxy
   * @param bucket optional, if not set use default bucket set on proxy
   */
  export declare function newProxy(name: string, bucket?: string): Client
  /**
   * OBS object
   */
  export interface ObsObject {
    /**
     * object name
     */
    name: string
    /**
     * Whether is a dir
     */
    isDir: boolean
    /**
     * link
     */
    link: string
    /**
     * size of object
     */
    size?: number
  }
  /**
   * view object option
   */
  export interface ViewOption {
    /**
     * the same as Range header in http request, default view all data
     *
     * format:
     *  <unit>=<range-start>-<range-end>
     *
     * example:
     *  bytes=0-
     *  bytes=0-100
     *  bytes=100-200
     */
    range?: string
  }
  /**
   * view object result
   */
  export interface ViewResult {
    /**
     * hold object data
     */
    data: any
    /**
     * content type of object
     */
    contentType: string
    /**
     * content length
     */
    contentLength: number
  }
  /**
   * upload object option
   */
  export interface UploadOption {
    /**
     * public-read | private
     */
    acl?: string
    /**
     * content type of object
     */
    contentType?: string
  }
  /**
   * ListPartOption: 列举已上传分段的可选参数
   */
  export interface ListPartOption {
    /**
     * maxParts: 表示列举已上传的段返回结果最大段数目，即分页时每一页中段数目
     */
    maxParts?: number
    /**
     * partNumberMarker: 表示待列出段的起始位置，只有Part Number大于该参数的段会被列出。
     */
    partNumberMarker?: number
  }
  /**
   * 列举分段结果
   */
  export interface ListPartsOutput {
    partNumberMarker: number
    nextPartNumberMarker: number
    maxParts: number
    parts: Part[]
  }
  /**
   * 分段信息
   */
  export interface Part {
    /**
     * 分段大小
     */
    size: number
    /**
     * 分段号
     */
    partNumber: number
  }
  /**
   * list dir option
   */
  export interface ListDirOption {
    /**
     * recursively traverse all subdirectories
     */
    recursive?: boolean
    /**
     * maximum number of returns, max number is 1000
     */
    maxKeys?: number
    /**
     *  starts listing after this specified key, can be any key in the bucket
     */
    marker?: string
  }
  /**
   * complete part
   */
  export interface CompletedPart {
    /**
     * etag from upload part interface
     */
    eTag: string
    /**
     * part number
     */
    partNumber: number
  }
  /**
   * 完成分段上传的可选参数
   */
  export interface CompleteUploadOption {
    /**
     * 是否需要异步。
     *
     * 在分段上传场景下，如果文件比较大，上传的分段比较多，那么在指定的时间内，服务器合并分段所需的时间比较长，导致请求未返回。
     * 这种情况下就可以将 async 参数设置成 true， 只要请求成功即可返回。 等待服务器合并成功后， 客户端再次调用查询等请求来确认文件已经上传。
     *
     */
    async?: boolean
  }
  /**
* Store client api
*
* @example
* ```ts
* // 脚本库打包依赖规范：
* // import * as objectstorage from 'objectstorage' 导入模块不能修改为其他的别名，必须和模块名一致；
* // newClient方法里参数不能为变量，否则打包解析不到连接器依赖
* import * as objectstorage from 'objectstorage';
* import * as buffer from 'buffer';
*
* let minioCli = objectstorage.newClient(objectstorage.StoreType.MINIO, "minio1", "mybucket");
* console.log(minioCli.putObject("minio.text", "老的"));
* let data = minioCli.getObject("minio.text");
* let buf = buffer.fromBytes(data);
* console.log(buf.toString());
* console.log(minioCli.getEndpoint());
*
* let oldCli = objectstorage.newClient(objectstorage.StoreType.PROXY, "NS__testbucket");
* console.log(oldCli.putObject("a.txt", "选择默认的桶"));
* data = oldCli.getObject("a.txt");
* buf = buffer.fromBytes(data);
* console.log(buf.toString());
* console.log(oldCli.getEndpoint());
*
* let newCli = objectstorage.newClient(objectstorage.StoreType.PROXY, "NS__testbucket", "cbucket");
* console.log(newCli.putObject("a.txt", "不是选择默认的桶"));
* data = newCli.getObject("a.txt");
* buf = buffer.fromBytes(data);
* console.log(buf.toString());
```
*/
  export interface Client {
    /**
     * 是否存在对象
     *
     * @param name 对象名
     */
    hasObject(name: string): boolean
    /**
     * @deprecated 优先使用 {@link viewObject}
     *
     * 获取对象数据，对象名必须是在桶上的全路径
     *
     * @param name 对象名
     *
     * @returns object 对象的二进制文件内容
     */
    getObject(name: string): any
    /**
     * 查看对象内容
     *
     * @param name 对象内容
     * @param opt 可选查询参数 {@link ViewOption}
     */
    viewObject(name: string, opt?: ViewOption): ViewResult
    /**
     * @deprecated 优先使用 {@link uploadObject}
     *
     * 上传对象
     *
     * @param name 对象名（全路径）
     * @param data 对象二进制内容
     * @param args acl
     */
    putObject(name: string, data: any, ...args: string[]): string
    /**
     * 上传对象
     *
     * @param name 对象名（全路径）
     * @param data 对象二进制内容
     * @param opt 上传可选参数 {@link UploadOption}
     */
    uploadObject(name: string, data: any, opt?: UploadOption): void
    /**
     * 删除对象
     *
     * @param name 对象名
     */
    deleteObject(name: string): void
    /**
     * @deprecated 优先使用 {@link listDir}
     * 列举目录
     *
     * @param dir 目录
     * @param recursive 是否递归查询所有子目录
     */
    lsDir(dir: string, recursive: boolean): ObsObject[]
    /**
     * 列举目录
     *
     * @param dir 目录
     * @param opt 可选参数 {@link ListDirOption}
     */
    listDir(dir: string, opt?: ListDirOption): ObsObject[]
    /**
     * 创建目录
     *
     * @param dir 目录名
     * @param withParent 如果为true则创建其所有的父目录, 类似 mkdir -p
     */
    createDir(dir: string, withParent: boolean): void
    /**
     * 删除目录及其下面的所有文件
     *
     * @param dir 目录名
     */
    deleteDir(dir: string): void
    /**
     * 获取 endpoint
     */
    getEndpoint(): string
    /**
     * 初始化分段上传
     *
     * @param name 对象名
     * @param opt 上传参数
     */
    createMultipartUpload(name: string, opt: UploadOption): string
    /**
     * 上传分段
     *
     * @param name 对象名
     * @param uploadID 上传ID
     * @param partNum 分段号
     * @param data 分段数据
     */
    uploadPart(name: string, uploadID: string, partNum: number, data: any): CompletedPart
    /**
     * 完成分段上传
     *
     * @param name 对象名
     * @param uploadID 上传ID
     * @param cps 分段信息
     * @param opt 完成上传可选参数
     */
    completeUpload(name: string, uploadID: string, cps: CompletedPart[], opt?: CompleteUploadOption): void
    /**
     * 列举已上传分段
     * @param name: 对象名字
     * @param uploadId: 分段上传id
     * @param opt: 可选参数
     */
    listParts(name: string, uploadId: string, opt?: ListPartOption): ListPartsOutput
    /**
     * 放弃上传
     *
     * @param name 对象名
     * @param uploadID 分段上传id
     */
    abortUpload(name: string, uploadID: string): void
    /**
     * 获取分享凭证用于查看对象
     *
     * @param name 对象名
     * @param timeoutInMinutes 凭证的有效时长（分钟）
     */
    getShareToken(name: string, timeoutInMinutes: number): string
    /**
     * 获取上传凭证
     *
     * @param name 对象名
     */
    getUploadToken(name: string): string
  }
}

declare module 'ocr' {
  export interface IdentifierInfo {
    [id: string]: any
  }
  /**
   * OCR Connector client interface
   */
  export interface OCRClient {
    /**
     * 根据图片进行证件识别
     * @param image Base64后的字符串
     * @param side 指证件的正反面，取值有front和back，默认值front
     */
    idCardWithImage(image: string, side: string): IdentifierInfo
    /**
     * 根据url进行证件识别
     * @param url 证件识别云平台的证件资源路径及文件名
     * @param side 指证件的正反面，取值有front和back，默认值front
     */
    idCardWithURL(url: string, side: string): IdentifierInfo
  }
  /**
   * Client api for OCR client.
   * @example
   * ```ts
   *
   * import * as ocr from 'ocr';
   *
   * let client = ocr.newClient(instanceName);
   * let resp = client.idCardWithURL(url, side);
   * let resp1 = client.idCardWithImage(image, side);
   * ```
   * @param name connector instance name
   */
  export declare function newClient(name: string): OCRClient
}

declare module 'ief' {
  export interface IdentifierInfo {
    [id: string]: any
  }
  export interface IEFClient {
    /**
     * get the edge nodes of the project
     * @param projectID project id
     */
    getProjectNode(projectID: string): IdentifierInfo
    /**
     * get the devices(only camera) of the project
     * @param projectID project id
     */
    getProjectDevice(projectID: string): IdentifierInfo
    /**
     * get the detail of the edge node
     * @param projectID project id
     * @param nodeID node id
     */
    getNode(projectID: string, nodeID: string): IdentifierInfo
    /**
     * get the detail of the device
     * @param projectID project id
     * @param deviceID device id
     */
    getNodeDevice(projectID: string, deviceID: string): IdentifierInfo
    /**
     * send the message to the node
     * @param nodeID node id
     * @param topic topic
     * @param msg  message
     */
    getMSG(nodeID: string, topic: string, msg: string): IdentifierInfo
  }
  /**
   * Client api for IEF client.
   * @example
   * ```ts
   *
   * import * as ief from 'ief';
   *
   * let client = ief.newClient(instanceName);
   * let nodes = client.getProjectNode(projectId);
   * let devices = client.getProjectDevice(projectId);
   * let nodeData = client.getNode(projectId, nodeId);
   * let deviceData = client.getNodeDevice(projectId, deviceID);
   * let resp = client.getMSG(nodeId, topic, msg);
   * ```
   * @param name ief instance name
   */
  export declare function newClient(name: string): IEFClient
}

declare module 'msgsms' {
  export interface Response {
    [id: string]: any
  }
  /**
   * SMS client interface
   */
  export interface SMSClient {
    /**
     * @param templateName sms template name in connector
     * @param to  receiver
     * @parama msg  template parameters,  for example: "[\"1234\",\"congratulations\"]"
     */
    sendByName(templateName: string, to: string, msg: string): Response
  }
  /**
   * Client api for SMS client.
   * @example
   * ```ts
   *
   * import * as msgsms from 'msgsms';
   *
   * let client = msgsms.newClient(connectorName);
   * let resp = client.sendByName(templateName, to, msg);
   * ```
   * @param instanceName connector instance name
   */
  export declare function newClient(name: string): SMSClient
}

declare module 'es' {
  export interface Response {
    [id: string]: any
  }
  export interface CatInfo {
    IndexName: string
    Aliases: string[]
    DocCount: number
  }
  export interface ScrSearchResult {
    Res: Dict[]
    ScrollID: string
    DocCount: number
  }
  export interface ESClient {
    /**
     * create a new index
     *
     *
     * @example
     * ```ts
     * import * as es from 'es';
     * let client = es.newClient('es_connector_instance');
     * client.createIndex("my_index");
     *
     * ```
     *
     * @param indexName
     * @return
     */
    createIndex(indexName: string): void
    /**
     * create a new index with mapping
     *
     * @example
     * ```ts
     *
     * import * as es from 'es'
     * let client = es.newClient('es_connector_instance')
     * let m = {
     *    dynamic: "strict",
     *    properties: {
     *         name: {
     *              properties: {
     *                  first_name: {
     *                     type: "text",
     *                  },
     *                  last_name: {
     *                     type: "text",
     *                     analyzer: "english"
     *                  }
     *              }
     *         },
     *         age: {
     *             type: "integer"
     *         }
     *    }
     * }
     * client.createIndexWithMapping("my_index", m)
     * ```
     *
     * @param indexName
     * @param mapping
     * @return
     */
    createIndexWithMapping(indexName: string, mapping: Dict): void
    /**
     * delete an index. Notice: cannot delete alias directly
     *
     * @example
     * ```ts
     *
     * import * as es from 'es'
     * let client = es.newClient('es_connector_instance')
     * client.dropIndex("my_index");
     * // index name 'my_index' was dropped
     *
     * ```
     * @param indexName the index to be dropped
     * @return
     */
    dropIndex(indexName: string): void
    /**
     * get all indexes for the current tenant
     *
     * @example
     * ```ts
     *
     * import * as es from 'es'
     * let client = es.newClient('es_connector_instance')
     * let indexes = client.getAllIndexes(); // an array of indexes was returned
     *
     * ```
     *
     * @return index name list
     */
    getAllIndexes(): string[]
    /**
     * check whether the specified index is existing
     *
     * @example
     * ```ts
     *
     * import * as es from 'es'
     * let client = es.newClient('es_connector_instance')
     * let hasIndex = client.checkIndexExist("my_index");
     * // hasIndex is true if index "my_index" exists, otherwise false
     *
     * ```
     *
     * @param indexName
     * @return boolean true for exist, otherwise false
     */
    checkIndexExist(indexName: string): boolean
    /**
     * get attached concrete indexes by alias
     *
     * @example
     * ```ts
     *
     * import * as es from 'es'
     * let client = es.newClient('es_connector_instance')
     * let indexes = client.getAttachedIndexes("my_index_alias");
     * // indexes attached to "my_index_alias" were returned
     *
     * ```
     *
     * @param alias the index name which created in connector
     * @return attached indexes
     */
    getAttachedIndexes(alias: string): string[]
    /**
     * input index name return associated aliases
     *
     * @example
     * ```ts
     *
     * import * as es from 'es'
     * let client = es.newClient('es_connector_instance')
     * let aliases = client.getAlias("my_index");
     * // aliases of index named "my_index" were returned
     *
     * ```
     *
     * @param indexName
     * @return associated aliases
     */
    getAlias(indexName: string): string[]
    /**
     * attach concrete index with alias
     *
     * @example
     * ```ts
     *
     * import * as es from 'es'
     * let client = es.newClient('es_connector_instance')
     * client.getAlias("my_index", "my_index_alias");
     * // my_index_alias was attached to my_index
     *
     * ```
     *
     * @param indexName concrete index
     * @param alias the name of alias
     */
    attachAlias(indexName: string, alias: string): void
    /**
     * detachAlias detach concrete index with alias
     *
     * @example
     * ```ts
     *
     * import * as es from 'es'
     * let client = es.newClient('es_connector_instance')
     * client.detachAlias("my_index", "my_index_alias");
     * // my_index_alias was detached
     *
     * ```
     *
     * @param indexName concrete index
     * @param alias the name of alias
     */
    detachAlias(indexName: string, alias: string): void
    /**
     * attachAndDetachAlias attach and detach alias in one request, used to smoothly convert indexes within one alias
     *
     * @example
     * ```ts
     *
     * import * as es from 'es'
     * let client = es.newClient('es_connector_instance')
     * client.detachAlias("new_index", "old_index", "my_index_alias");
     * // my_index_alias was detached from old_index and attached to new_index
     *
     * ```
     *
     * @param attachIndexName index to attach
     * @param detachIndexName index to detach
     * @param alias the name of alias
     */
    attachAndDetachAlias(attachIndexName: string, detachIndexName: string, alias: string): void
    /**
     * getMapping get mapping for an index or alias
     *
     * @example
     * ```ts
     *
     * import * as es from 'es'
     * let client = es.newClient('es_connector_instance')
     * let m = client.getMapping("new_index");
     *
     * @param indexName the index Name or alias
     * @return mapping for an index
     * ```json
     * {
     *   "age": {
     *      "type": "integer"
     *   },
     *   "name": {
     *      "dynamic": "strict",
     *      "properties": {
     *          "first_name": {
     *               "type": "text"
     *          },
     *          "last_name": {
     *               "type": "text"
     *           }
     *       }
     *    }
     * }
     * ```
     */
    getMapping(indexName: string): Dict
    /**
     *  cat show indexes basic information
     *
     *  @example
     *  ```ts
     *
     * import * as es from 'es';
     * let client = es.newClient('es_connector_instance');
     * let cats = client.cat();
     *
     *  ```
     *  @return basic info for each index, for example:
     * ```json
     * [
     *  {
     *       "IndexName": "foo",
     *       "Aliases": null,
     *       "DocCount": 2
     *   } {
     *       "IndexName": "bar",
     *       "Aliases": [
     *           "a"
     *       ],
     *       "DocCount": 0
     *   }
     * ]
     * ```
     */
    cat(): CatInfo[]
    /**
     * reindex copy old index to new index
     * @example
     *  ```ts
     *
     * import * as es from 'es';
     * let client = es.newClient('es_connector_instance'); // 要修改为云搜索连接器名字
     * // 重建索引mapping，完成数据从旧索引到新索引的转移，且支持在新索引新增字段
     * let oldIndex = "test"
     * let existOldIndex = client.checkIndexExist(oldIndex) // 检查索引是否存在
     * if (existOldIndex) { client.dropIndex(oldIndex) } // 存在就删除重复索引,这里测试用例写了删除索引方法，实际情况要注意
     * let m1 = {
     *       properties: {
     *           name: {
     *               type: "text",
     *           },
     *           age: {
     *              type: "integer"
     *           }
     *       }
     *   }
     *    client.createIndexWithMapping("test", m1) // 测试给test赋值m1结构
     *    let doc = {
     *   "name": "Joe",
     *   "age": 25
     *   }
     *    let docID = client.indexDoc('test', doc)   // 插入一条数据测试
     *    client.refresh('test') // 新增数据后需刷新索引
     *
     *    let newIndex = "newTest"
     *    let exist = client.checkIndexExist(newIndex) // 检查索引是否存在
     *    if (exist) { client.dropIndex(newIndex) } // 存在就删除重复索引,这里测试用例写了删除索引方法，实际情况要注意
     *    // //建newIndex的字段
     *    let m2 = {
     *       properties: {
     *           name: {
     *               type: "text",
     *           },
     *           age: {
     *               type: "integer"
     *           },
     *           sex: {
     *               type: "text",
     *           }
     *       }
     *   }
     *    client.createIndexWithMapping("newTest", m2)
     *    client.reindex(oldIndex, newIndex) // newIndex新增了sex字段，复制oldIndex的数据
     *    let docNew = {
     *       "name": "Tom",
     *       "age": 26,
     *       "sex": "男"
     *   }
     *    let docIDNew = client.indexDoc('newTest', docNew)   //新插入一条数据测试
     *    client.refresh(newIndex) // 需刷新，1s后才可被搜
     *    let res = client.query("", true, newIndex)
     *    console.log(res) // 期望保留name和age的数据，有一条数据有sex值，其它数据无sex值
     *  ```
     *
     * @param oldIndex
     * @param newIndex
     * @return
     */
    reindex(oldIndex: string, newIndex: string): void
    /**
     * insert or fully update a document in the specified index
     * Notice: if doc contains field "_id", the value will be used as self-defined Doc ID, "_id" itself will not be stored in to search engine
     * If document with self-defined Doc ID is already exist, this operation will perform a full-doc update, otherwise, insert the document with self-defined Doc ID
     * If no "_id" specified, document will be inserted with a random Doc ID.
     *
     * @example
     * ```ts
     *
     * import * as es from 'es';
     * let client = es.newClient('es_connector_instance')
     * let doc = {
     *     "_id": "1001",
     *     "name": "Joe",
     *     "age": 25
     * }
     * let docID = client.indexDoc('indexName', doc)   //docID is supposed to be "1001" in this case
     * ```
     *
     * @param indexName the specify index
     * @param doc the document to be indexed.
     * @return inserted document id
     */
    indexDoc(indexName: string, doc: Dict): string
    /**
     * delete a document by document id
     * docID is got by search or query interface, which is named as `_id`.
     * see the [[query]] interface for more details
     *
     * @example
     * ```ts
     *
     * import * as es from 'es';
     * let client = es.newClient('es_connector_instance')
     * let docId = '1001'; // suppose that you've got the docId in some way
     * client.deleteDocByDocID('indexName', docId)   //doc with id '1001' is deleted if exists
     * ```
     *
     * @param indexName the specify index
     * @param docID the specify document id
     * @return
     */
    deleteDocByDocID(indexName: string, docID: string): void
    /**
     * partly update a document by given data
     *
     * @example
     * ```ts
     *
     * import * as es from 'es';
     * let client = es.newClient('es_connector_instance')
     * let doc = {
     *     "name": "Jerry",
     *     "age": 12
     * }
     * let docId = '1001'; // suppose that you've got the docId in some way
     * client.updateDocByDocID('indexName', docId, doc); // doc with id '1001' has updated
     * ```
     *
     * @param indexName the specify index
     * @param docID id of document to be updated
     * @param updateData the data use for update
     * @return
     */
    updateDocByDocID(indexName: string, docID: string, updateData: Dict): void
    /**
     * insert or full-doc update multiple documents in the specified index
     * Notice: if one doc contains field "_id", the value will be used as self-defined Doc ID, "_id" itself will not be stored in to search engine
     * If document with self-defined Doc ID is already exist, this operation will perform a full-doc update, otherwise, insert the document with self-defined Doc ID
     * If no "_id" specified, document will be inserted with a random Doc ID.
     *
     * @example
     * ```ts
     *
     * import * as es from 'es';
     * let client = es.newClient('es_connector_instance')
     * let docs = [
     *    {
     *       "_id": "1001",   //this document has specific doc id
     *       "name": "Joe",
     *       "age": 25
     *    },
     *    {
     *       "name": "Amy",   //this document has auto-generated doc id
     *       "age": 35
     *    }
     * ]
     * client.bulkIndexDocs('indexName', docs)
     * ```
     *
     * @param indexName
     * @param docs
     * @return
     */
    bulkIndexDocs(indexName: string, docs: Dict[]): void
    /**
     * delete multiple documents in the specified index
     *
     * @example
     * ```ts
     *
     * import * as es from 'es';
     * let client = es.newClient('es_connector_instance')
     * let docIds = ["1001", "1002", "1003"];
     * client.bulkDeleteDocs('indexName', docIds); // docs with id in the docId list will be deleted if exists
     * ```
     *
     * @param indexName the specify index name
     * @param docIdList array of doc ids to be deleted
     * @return
     */
    bulkDeleteDocs(indexName: string, docIdList: string[]): void
    /**
     * update documents by query
     *
     * @example
     * ```ts
     *
     * import * as es from 'es';
     * let client = es.newClient('es_connector_instance')
     * let script = 'ctx._source.price = 200'
     * let query = {
     *     range: {
     *         foo: {
     *             gt:  10
     *          }
     *     }
     * }
     * let updatedCount = client.updateByQuery('indexName', query, script)
     * ```
     *
     * @param indexName the specify index
     * @param dsl condition dsl
     * @param script groovy script
     * @return updated count
     */
    updateByQuery(indexName: string, dsl: Dict, script: string): number
    /**
     * delete documents by query
     *
     * @example
     * ```ts
     *
     * import * as es from 'es';
     * let client = es.newClient('es_connector_instance')
     * let query = {
     *      range: {
     *          foo: {
     *              gt:  10
     *          }
     *      }
     * }
     * let deletedCount = client.deleteByQuery('indexName', query)
     * ```
     *
     * @param indexName
     * @param query condition dsl
     * @return deleted count
     */
    deleteByQuery(indexName: string, dsl: Dict): number
    /**
     * make documents in specified index available for search immediately
     * 每次索引的数据发生增删改后，可以选择手动刷新索引，使变化内容立即可被搜索到（否则会等约1秒时间）
     *
     * Notice: This operation is resource-intensive.
     * To ensure good performance, recommend to wait for periodic refresh(usually 1s) rather than performing an explicit refresh when possible.
     * 重要： 当写测试的时候，手动刷新或许有用，但在生产环境下每次增删改一个文档就调用refresh函数会产生很大的性能开销
     * 不用担心更新的数据无法被搜索，通常集群会在1秒钟内自动进行刷新。所以在开发时请意识到 Elasticsearch 的近实时搜索的特性，并接受它的不足
     * 仅仅在非常需要进行实时搜索的情况下，再选择调用refresh接口
     *
     * @example
     * ```ts
     *
     * import * as es from 'es';
     * let client = es.newClient('es_connector_instance');
     * // It's recommend to wait for periodic refresh(usually 1s) rather than performing an explicit refresh when possible.
     * client.refresh('indexToBeRefresh'); // docs within the specify index would be refreshed
     *
     * ```
     *
     * @param indexName
     * @return
     */
    refresh(indexName: string): void
    /**
     * get documents by provided JSON DSL condition
     *
     * @example
     * ```ts
     *
     * import * as es from 'es';
     * let client = es.newClient('es_connector_instance')
     * let dsl = {
     *    query: {
     *        match: {
     *            foo: "bar"
     *         }
     *     },
     *     from: 5,
     *     size: 5
     * }
     * let searchRes = client.search(dsl, 'indexName')
     * ```
     *
     * @param indexName the specify indexes, if no index is provided then all indexes will be searched
     * @param condition the condition
     * @return retrieved documents and total hits. For example,
     * ```json
     *  "hits": {
     *  [
     *       {
     *           "_id": "Z77z1GoBFqkjW4TNVqT9",
     *           "_index": "0000000000kmfw1lhyz7:myindex1",
     *           "_score": 1,
     *           "_source": {
     *               "age": 50,
     *               "name": {
     *                   "first_name": "foo",
     *                   "last_name": "bar"
     *               }
     *           },
     *           "_type": "t"
     *       }
     * ],
     *   "max_score": 1,
     *   "total": 1
     * }
     * ```
     */
    search(condition: Dict, ...indexName: string[]): Dict
    /**
     * get documents by provided JSON DSL condition
     *
     * @example
     * ```ts
     *
     * // 与search的用法完全一样，区别是：内部默认了偏好参数preference若为"_local"，防止通过修改from size查询多个批次结果时，多个批次之间存在重复或不一致数据的问题。
     * // 参考文档：https://www.elastic.co/guide/en/elasticsearch/reference/7.11/search-search.html#search-preference
     * let searchRes = client.searchPre(dsl, 'indexName')
     *
     * ```
     */
    searchPre(condition: Dict, ...indexName: string[]): Dict
    /**
     * provides light-weight querying. You can use `*` to match zero or more characters
     *
     * @example
     * ```ts
     *
     * import * as es from 'es';
     * let client = es.newClient('es_connector_instance')
     * let docs = client.query('value1 OR field2:value2', true, 'indexName')
     * ```
     *
     * @param queryString 传参如： "foo", "foo:bar", "foo:bar AND qux:baz".
     * @param getAll true时默认最多返回5000条数据，可改osql的elasticsearch_querydocs_size值（最多10万）返回更多, 如果还需要更多数据，建议用scrollSearch接口， false时返回10条数据。
     * @param indexName 可以传入多个索引名。如果没有传入indexName，则搜索所有索引。
     * @return 已创建文档数组。例如：
     * ```json
     * [
     *  {
     *       "_id": "fGGoNGoBvz7NQ98rl2Sn",
     *       "_index": "user-defined-index-name",
     *       "field1": "apple",
     *       "field2": "orange"
     *  },
     *  {
     *       "_id": "CTZiOGoBZQ34Z4YeRxSv",
     *       "_index": "user-defined-index-name",
     *       "field1": "banana",
     *       "field2": "coconut"
     *  }
     * ]
     * ```
     */
    query(queryString: string, getAll: boolean, ...indexName: string[]): Dict[]
    /**
     * search by dsl condition and only return matched document id list
     *
     * @example
     * ```ts
     *
     * import * as es from 'es';
     * let client = es.newClient('es_connector_instance');
     *
     * let condition = {
     *     "query": {
     *         "bool": {
     *             "must": [
     *                 { "match": { "title": "Demo" }},
     *                 { "match": { "author": "Test" }}
     *             ],
     *             "filter": [
     *                 { "term":  { "author": "Test" }},
     *                 { "range": { "saleCnt": { "gte": "4000" }}}
     *             ]
     *         }
     *     }
     * }
     * let indexName = ""my_index;
     * let ids = client.searchIDList(indexName, condition); // id of docs math condition will be returned
     *
     * ```
     *
     *
     * @param indexName the specify index
     * @param condition the condition
     * @return matched id list
     */
    searchIDList(indexName: string, condition: Dict): string[]
    /**
     * check if document is existing
     *
     * @example
     * ```ts
     *
     * import * as es from 'es';
     * let client = es.newClient('es_connector_instance');
     *
     * let indexName = "my_index";
     * let docId = "1001";
     * let hasDoc = client.checkDocExist(indexName, docId);
     * ```
     *
     * @param indexName
     * @param docID
     * @return
     */
    checkDocExist(indexName: string, docID: string): boolean
    /**
     *  count documents in an index
     *
     * @example
     * ```ts
     *
     * import * as es from 'es';
     * let client = es.newClient('es_connector_instance');
     * let num = client.countDocs("my_index");
     *
     * ```
     *
     *  @param indexName
     *  @return documents count
     */
    countDocs(indexName: string): number
    /**
     *  count documents by dsl
     *
     * @example
     * ```ts
     *
     * import * as es from 'es';
     * let client = es.newClient('es_connector_instance')
     * let queryDSL = {
     *     range: {
     *         foo: {
     *             gt:  10
     *         }
     *     }
     * }
     * let count = client.countDocsByCondition('indexName', queryDSL)
     * ```
     *
     *  @param indexName
     *  @param dsl condition in ES dsl format
     *  @return documents count
     */
    countDocsByCondition(indexName: string, dsl: Dict): number
    /**
     *  count documents by light-weight query string
     *
     * @example
     * ```ts
     *
     * import * as es from 'es';
     * let client = es.newClient('es_connector_instance')
     * let count = client.countDocsByQuery('indexName', 'value1 OR field2:value2')
     * ```
     *
     *  @param indexName
     *  @param query light-weight query string
     *  @return documents count
     */
    countDocsByQuery(indexName: string, query: string): number
    /**
     * get one document by document id
     *
     * @example
     * ```ts
     *
     * import * as es from 'es';
     * let client = es.newClient('es_connector_instance')
     * let indexName = "my_index";
     * let docId = "1001";
     * let doc = client.getDocByDocID(indexName, docId);
     *
     * ```
     *
     * @param indexName the specify index
     * @param docID the specify document id
     * @return document the doc
     */
    getDocByDocID(indexName: string, docID: string): Dict
    /**
     * first scrollSearch records
     *
     * 游标查询三个接口：scrollSearch，scrollIDSearch，clearScroll 需一起用
     *
     *   @example
     * ```ts
     *
     * let indexName1 = "indexName1" // 定义一个索引例子
     * //let exist = client.checkIndexExist(indexName1) // 检查索引是否存在
     * //if (exist) { client.dropIndex(indexName1) } // 存在就删除重复索引,这里测试用例写了删除索引方法，实际情况要注意
     * //client.createIndex(indexName1) // 创建索引
     * let docs = [] // 批量建数据
     * for (let i = 0; i < 1001; i++) {
     *   docs.push({
     *       "foo": "banana",
     *       "bar": 50,
     *   })
     * }
     * client.bulkIndexDocs(indexName1, docs) // 批量插入上面创建的数据
     * client.refresh(indexName1) // 增删改之后要刷新，1s后才可被搜
     *
     * let query = {
     *      range: {
     *          bar: {
     *              gt:  10
     *          }
     *      }
     * }
     *
     * let result = client.scrollSearch(indexName1, query) // 游标查询第一次，query是dsl语句
     * let scrollID = result.ScrollID  // 结果会有scrollID，用做下一次游标查询
     * console.log("countFirstSearch:", result.Res.length)
     * console.log("matchedCount:", result.DocCount)
     * console.log("scrollID", scrollID) // 符合的索引条数不小于osql配置的elasticsearch_scrollsearch_size默认数1000，才会有scrollID
     * for (let i = 1; i < 3; i++) {
     *   let result1 = client.scrollIDSearch(scrollID)  // 根据第一次获取的scrollID进行下一次游标查询，如果没有scrollID会报错
     *   if (result1.length == 0) {
     *       break
     *   }
     *  console.log(i, result1.length)
     * }
     *  client.clearScroll(result.ScrollID)  // 必须清除ScrollID，清缓存
     *
     * ```
     *
     * @param index
     * @param query condition dsl
     * @return matched list, scrollID, matched documents count
     */
    scrollSearch(index: string, dsl: Dict): ScrSearchResult
    /**
     * search records using scrollID， use after scrollSearch
     *
     * 游标查询三个接口：scrollSearch，scrollIDSearch，clearScroll 需一起用，详细用例见scrollSearch
     *
     * @example
     * ```ts
     *
     * for (let i = 1; i < 3; i++) {
     *   let result1 = client.scrollIDSearch(scrollID)  // 如果没有scrollID，会报错
     *   if (result1.length == 0) {
     *       client.clearScroll(scrollID)
     *       break
     *   }
     *  console.log(i, result1.length)
     * }
     *
     * ```
     *
     * @param scrollID
     * @return
     */
    scrollIDSearch(scrollID: string): Dict
    /**
     * clear scrollID
     *
     * 游标查询三个接口：scrollSearch，scrollIDSearch，clearScroll 需一起用，详细用例见scrollSearch
     *
     * @example
     * ```ts
     *
     * client.clearScroll(result.ScrollID) //scrollID from scrollSearch
     *
     * ```
     *
     * @param scrollID
     * @return
     */
    clearScroll(scrollID: string): void
  }
  /**
   * create elasticsearch client
   *
   * @example
   *
   * ```ts
   * import * as es from 'es';
   * let client = es.newClient('es_connector_instance')
   * // client can be use for ES operations
   * ```
   * @param name the name of connector instance
   */
  export declare function newClient(name: string): ESClient
}

declare module 'connector' {
  /**
   * Connector client interface
   */
  export interface Client {
    /**
     * 调用华为云开放API、5G消息、自定义、functiongraph类型的连接器方法
     *
     * @param operation 连接器操作名
     * @param requestParam 操作的请求参数
     *
     * @example
     * ```ts
     *
     * import * as connector from 'connector';
     *
     * let client = connector.newClient("HC_NLP", "LT929__LT1227"); // HC_NLP/LT929__LT1227参数从连接器详情页获取(HC_NLP详情 : LT929__LT1227)
     * let req = { "IntentReq": { "lang": "华为云", "text": "zh_CN" } };
     * let resps = client.invoke("RunSemanticParser", req); // RunSemanticParser参数从连接器详情页测试部分卡片获取
     * ```
     */
    invoke(operation: string, requestParam: any): any
  }
  /**
   * 连接器的API，支持华为云开放API、5G消息、自定义、functiongraph类型的连接器
   *
   * @example
   * ```ts
   *
   * import * as connector from 'connector';
   *
   * // 华为云开放API类型的连接器、5G消息类型连接器调用方法
   *
   * let client = connector.newClient("HC_NLP", "LT929__LT1227"); // 参数从连接器详情页标题获取(HC_NLP详情 : LT929__LT1227)
   *
   * let req = { "IntentReq": { "lang": "华为云", "text": "zh_CN" } };
   * let resps = client.invoke("RunSemanticParser", req);
   *
   * // 页面上自己创建的自定义连接器的调用方法，第一个参数是创建的自定义连接器名称，第二个参数是认证信息名称
   * let client2 = connector.newClient("hx_card", "hx_auth1");
   *
   * // 调用functiongraph连接器，第一个参数是创建的functiongraph连接器名称，第二个参数是动作名称
   * let client3 = connector.newClient("functiongraph", "hx_hello");
   *
   * let input2 = {"name": "zhangsan", "age", "14"};;
   * // 第一个入参是动作名称， 第二个参数是入参
   * let resp2 = client2.invoke("queryCars", input2);
   *
   * ```
   * @param connectorType 连接器类型
   * @param instanceName 连接器名字
   */
  export declare function newClient(connectorType: string, instanceName: string): Client
}

declare module 'bp' {
  import * as db from 'db'
  export interface BPClient {
    /**
   * start executing a BP
   * @example
   * ```ts
   * import * as bp from 'bp'
   * let client = bp.newClientV1()
   * let res = client.start("test", {  "foo": 1,  "bar": 3}, "1.0.1")
   * ```
   * @param name the name of the bp
   * @input input the parameters of bp
   * @param version the version of bp, optional
   * @return result. For example,
   * ```json
   *  {
         "interviewId": "002N000000FdtN6xwgjI",
         "screen": {
         "allowBack": false,
         "allowFinish": true,
         "allowNext": true,
         "allowPause": false,
         "helpText": "",
         "label": "input phone number",
         "name": "inputphonenumber",
         "pausedText": "",
         "screenFields": [
           {
             "dataType": "text",
             "defaultValue": "135xxxxxxxx",
             "fieldType": "InputField",
             "helpText": "",
             "isRequired": false,
             "label": "phone number",
             "name": "phoneNumber"
           }
          ]
      }
   * ```
   */
    start(name: string, input: Dict, version?: string): Dict
    /**
     * add history record of BP to db
     * @example
     * ```ts
     * import {addHistory} bp from 'bp';
     * addHistory("iid","message");
     * ```
     * @param iid bp interview id
     * @param msg message
     * @return inserted record id
     */
    addHistory(iid: string, msg: string): string
    /**
     * get values of variables
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let client=bp.newClientV1();
     * let vars = client.getVars("002N000000VwBrSDISbQ", ["foo", "bar"])
     * console.log(vars)
     * ```
     * @param instanceID instance id
     * @param names get values by names. if names is empty then get values of all variables
     * @return variable values
     */
    getVars(instanceID: string, names: string[]): Dict
    /**
     * set values to according variables
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let client = bp.newClientV1()
     * client.setVars("002N000000VwBrSDISbQ", {"foo": "aaa","bar": "bbb"})
     * ```
     * @param instanceID instance id
     * @param values variables
     */
    setVars(instanceID: string, values: Dict): void
    /**
     * continue to complete current task
     * @example
     * ```ts
     * import {continue} bp from 'bp';
     * let client = bp.newClientV1()
     * let res=client.continue("bpId","inputData");
     * ```
     * @param iid bp interview id
     * @param input input parameters
     * @result result
     */
    continue(iid: string, input: Dict): Dict
    /**
     * suspend bp
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let client = bp.newClientV1()
     * let res = client.suspend("002N000000VwBrSDISbQ")
     * ```
     * @param instanceID instance id
     */
    suspend(instanceID: string): void
    /**
     * resume bp
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let client = bp.newClientV1()
     * let res = client.resume("002N000000VwBrSDISbQ")
     * ```
     * @param instanceID instance id
     */
    resume(instanceID: string): void
    /**
     * complete current task(fill page/screen and commit) and continue the BP instance
     * @example
     * ```ts
     * import {complete} bp from 'bp';
     * let client = bp.newClientV1()
     * let res=client.complete("bpId","inputData");
     * ```
     * @param iid bp interview id
     * @param input input parameters
     * @return result
     */
    complete(iid: string, input: Dict): Dict
    /**
     * terminate BP and related resource
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let client = bp.newClientV1()
     * client.terminate("bpId","bp is end")
     * ```
     * @param instanceID instance id
     * @param reason terminate reason
     */
    terminate(instanceID: string, reason: string): void
    /**
     * delete flow instance and related resource
     * @example
     * ```ts
     * import {deleteInstance} from 'bp'
     * let client = bp.newClientV1()
     * client.deleteInstance（"flowId","Unnecessary flow"）;
     * ```
     * @param instanceID
     * @param reason delete reason
     */
    deleteInstance(instanceID: string, reason: string): void
    /**
     * delegate task to another user or queue to process
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let client = bp.newClientV1()
     * client.delegate("002N000000VwBrSDISbQ","user","resons")
     * ```
     * @param iid bp interview id
     * @param assignee
     * @param reason
     */
    delegate(iid: string, assignee: string, reason: string): void
    /**
     * get active tasks
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let client = bp.newClientV1()
     * let res=client.activeTask("iid");
     *
     * ```
     * @param iid
     * @return active tasks
     */
    activeTask(iid: string): Dict[]
    /**
     * create a new FSM in BP
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let client = bp.newClientV1()
     * let fsm = client.createFSM("data");
     * ```
     * @param data the bp content
     * @return if create fsm, only return record id
     */
    createFSM(data: Dict): Dict
    /**
     * active one FSM in BP
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let client = bp.newClientV1()
     * let res=client.activateFSM("id");
     *
     * ```
     * @param id record id
     * @return return compile result
     */
    activateFSM(id: string): Dict
    /**
     * deactivate one FSM in BP
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let client = bp.newClientV1()
     * let fsm = client.createFSM("data");
     * fsm.deactivateFSM("fsmId");
     * ```
     * @param id record id
     */
    deactivateFSM(id: string): void
    /**
     * modify one FSM in BP
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let instClient = bp.newClientV1();
     * let res = bp.modifyFSM("002N000000VwBrSDISbQ","FSMData") // 返回null代表成功，失败的话会抛出错误信息
     * ```
     * @param id record id
     * @param data FSM content
     * @return compile result
     */
    modifyFSM(id: string, data: Dict): Dict
    /**
     * add one fsm step
     * @example
     * ```ts
     * import {fsmAddStep} from 'bp'
     * fsm.fsmAddStep("stepId","stepData"); // 返回null代表成功，失败的话会抛出错误信息
     * ```
     * @param id record id
     * @param data content
     * @param objName optional
     * @return compile result
     */
    fsmAddStep(id: string, data: Dict, objName?: string): Dict
    /**
     * add one fsm var
     * @example
     * ```ts
     * import {fsmAddVar} from 'bp'
     * fsm.fsmAddVar("varId","varData"); // 返回null代表成功，失败的话会抛出错误信息
     * ```
     * @param id record id
     * @param data content
     * @param objName optional
     * @return compile result
     */
    fsmAddVar(id: string, data: Dict, objName?: string): Dict
    /**
     * add one fsm sla
     * @example
     * ```ts
     * import {fsmAddSLA} from 'bp'
     * let res =fsmAddSLA("id","data"）; // 返回null代表成功，失败的话会抛出错误信息
     * ```
     * @param id record id
     * @param data content
     * @param objName optional
     * @return compile result
     */
    fsmAddSLA(id: string, data: Dict, objName?: string): Dict
    /**
     * delete one fsm step
     * @example
     * ```ts
     * import {fsmDeleteStep} from 'bp
     * fsm.fsmDeleteStep("002N000000VwBrSDISbQ")
     * ```
     * @param id record id
     * @param objName optional
     * @return deleted count
     */
    fsmDeleteStep(id: string, objName?: string): number
    /**
     * delete one fsm SLA
     * @example
     * ```ts
     * import {fsmDeleteSLA} from 'bp'
     * let res=fsm.fsmDeleteSLA("002N000000VwBrSDISbQ")
     * ```
     * @param id record id
     * @param objName optional
     * @return deleted count
     */
    fsmDeleteSLA(id: string, objName?: string): number
    /**
     * delete one bp record
     * @example
     * ```ts
     * import {delete} from 'bp'
     * let res=delete（"002N000000VwBrSDISbQ"）;
     * ```
     * @param id record id
     * @return deleted number
     */
    delete(id: string): number
    /**
     * get process steps in one bp record
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let bpInstance=bp.newClientV1();
     * let progessList = bpInstance.getProcessSteps("002N000000VwBrSDISbQ")
     * ```
     * @param id
     * @return process steps
     */
    getProcessSteps(id: string): Dict[]
    /**
     * get sla in one bp record
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let bpInstance=bp.newClientV1();
     * let slaList = bpInstance.getSLA("002N000000VwBrSDISbQ")
     * ```
     * @param id
     * @return sla
     */
    getSLA(id: string): Dict[]
  }
  /**
   * Create a BPM V1 Client
   *
   * @example
   *
   * ```ts
   *
   * import {newClientV1} from 'bp';
   * let bpV1=newClientV1();
   *
   * ```
   */
  export declare function newClientV1(): BPClient
  export declare enum State {
    New = 'New',
    Running = 'Running',
    WaitingUserInteract = 'Waiting for user interaction',
    WaitingPageEvent = 'Waiting for page event',
    CompletedOk = 'Completed OK',
    Completed = 'Completed',
    Paused = 'Paused',
    Suspended = 'Suspended',
    Terminated = 'Terminated',
    Dispatched = 'Dispatched',
  }
  export interface ConditionOption {
    condition?: db.Condition
    options?: db.OptionItem
  }
  export interface QueryCondition {
    owner?: string
    creator?: string
    options?: db.OptionItem
  }
  export interface StateCondition {
    owner?: string
    creator?: string
    states?: string[]
  }
  export interface ActiveTaskCondition {
    owner?: string
    creator?: string
    rootID?: string
    instID?: string
    options?: db.OptionItem
  }
  export interface MyTaskCondition {
    rootID?: string
    instID?: string
    options?: db.OptionItem
  }
  export interface MyTaskRootIDListCondition {
    rootIDList?: string[]
    options?: db.OptionItem
  }
  /**
   * 根据流程定义 ID 查询我的任务的条件结构
   */
  export interface MyTaskProessDefIDListCondition {
    processDefIDList?: string[]
    options?: db.OptionItem
  }
  /**
   * 我的待办列表的结果
   */
  export interface MyListResult {
    recs: Dict[]
    total: number
  }
  export interface TerminatedTasksRootIDListCondition {
    owner?: string
    creator?: string
    rootIDList?: string[]
    options?: db.OptionItem
  }
  export interface QueryTaskListCondition {
    owner?: string
    creator?: string
    rootID?: string
    procInsID?: string
    states?: string[]
    options?: db.OptionItem
  }
  export interface BPMInstanceClient {
    /**
     * 按自定condition和option来查询BPM实例
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * import * as db from 'db'
     * let instClient = bp.newInstanceClient()
     * let res = instClient.queryByCondition({
     *       condition: {
     *               conjunction: db.Conjunction.AND,
     *               conditions: [
     *                       {
     *                               field: "createdDate",
     *                               operator: db.Operator.gt,
     *                               value: "2019-08-01 00:00:00"
     *                       }
     *               ]
     *       },
     *      options: {
     *               fields: ["name", "state", "version", "bpStatus", "createdDate"],
     *               orderby: [
     *                       {
     *                               field: "name",
     *                               order: db.Order.desc
     *                       }
     *               ],
     *       }
     * })
     * console.log(res)
     * ```
     * @param condition 指定的查询条件，若不指定具体condition或option留空即可
     * @return 查询出BPM实例的记录
     */
    queryByCondition(condition?: ConditionOption): Dict[]
    /**
     * 查询激活状态的bpm实例（激活状态是指以下几种状态"New"、"Waiting for user interaction"、"Waiting for page event"、"Paused"、"Dispatched"）
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let instClient = bp.newInstanceClient()
     * let recs = instClient.queryActiveList({
     *    owner: "10gd000000KMFW1lhYZ6",
     *    options: {
     *            fields: ["name", "bpStatus", "createdDate", "owner"],
     *    }
     * })
     * console.log(recs)
     * ```
     *
     * @param queryCondition 查询条件，可部分留空或全部留空
     * @return 查询出BPM实例的记录
     */
    queryActiveList(queryCondition?: QueryCondition): Dict[]
    /**
     * 查询属主是调用者本人的bpm实例
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let instClient = bp.newInstanceClient()
     * let recs = instClient.queryMyList({
     *      fields: ["name", "bpStatus", "createdDate", "owner"],
     * })
     * console.log(recs)
     * ```
     *
     * @param options 查询设置，可为空
     * @return 查询出BPM实例的记录
     */
    queryMyList(options?: db.OptionItem): Dict[]
    /**
     * 查询suspended状态的bpm实例， 示例与queryActiveList类似
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let instClient = bp.newInstanceClient()
     * let res=instClient.querySuspendList(owner: "10gd000000KMFW1lhYZ6",
     *    options: {
     *            fields: ["name", "bpStatus", "createdDate", "owner"],
     *    }
     * })
     * ```
     * @param queryCondition 查询条件，可部分留空或全部留空
     * @return 查询出BPM实例的记录
     */
    querySuspendList(queryCondition?: QueryCondition): Dict[]
    /**
     * 按指定条件查询BPM实例
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let instClient = bp.newInstanceClient()
     * let recs = instClient.queryList({
     *     creator: "10gd000000KMFW1lhYZ6",
     *     states: [
     *         bp.State.New,
     *         bp.State.Suspended,
     *         bp.State.Dispatched,
     *     ]
     * })
     * console.log(recs)
     * ```
     * @param stateCondition 查询条件，可部分留空或全部留空，其中states参数可使用预定义枚举值
     * @return 返回BPM实例记录
     */
    queryList(stateCondition?: StateCondition): Dict[]
    /**
     * 启动一个BPM实例
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let instClient = bp.newInstanceClient()
     * let res = instClient.start("test", "1.0.1", {
     *   "foo": 1,
     *   "bar": 3
     * })
     * console.log(res)
     * ```
     *
     * @param name BPM名
     * @param version 版本号，如"1.0.1"
     * @param inputs 入参，如无入参，可放置空Map{}
     * @return BPM实例运行状态信息
     * ```json
     * {
     *    "name": "test",
     *    "version": "1.0.1",
     *    "id": "002N000000VwAuoT0WjA",
     *    "processDefID": "001L000000VBjcAIJjGa",
     *    "interviewLabel": "test",
     *    "nextElem": "userTask",
     *    "isTest": true,
     *    "state": "Dispatched",
     *    "bpStatus": "新建",
     *    ...
     *    ...
     * }
     * ```
     */
    start(name: string, version: string, inputs: Dict): Dict
    /**
     * 暂停一个运行的BPM实例
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let instClient = bp.newInstanceClient()
     * let res = instClient.suspend("002N000000VwBrSDISbQ")
     * console.log(res)
     * ```
     * @param instanceId BPM实例ID，若ID不存在会报错
     * @return BPM实例运行状态信息
     */
    suspend(instanceId: string): Dict
    /**
     * 恢复一个suspended状态的BPM实例
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let instClient = bp.newInstanceClient()
     * let res = instClient.resume("002N000000VwBrSDISbQ")
     * console.log(res)
     * ```
     *
     * @param instanceId BPM实例ID，若ID不存在会报错，若该实例非suspended状态，则无返回
     * @return BPM实例运行状态信息
     */
    resume(instanceId: string): Dict
    /**
     * 终结一个BPM实例以及相关资源
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let instClient = bp.newInstanceClient()
     * instClient.terminate("bpId","bp is end")
     * ```
     * @param instanceId BPM实例ID，若ID不存在会报错
     * @param reason 可选参数，终结实例原因，不写可留空或写undefined
     */
    terminate(instanceId: string, reason?: string): void
    /**
     * 删除BPM实例以及相关资源
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let instClient = bp.newInstanceClient()
     * instClient.delete("bpInstanceId")
     *
     * ```
     * @param instanceId BPM实例ID，若ID不存在会报错
     */
    delete(instanceId: string): void
    /**
     * 撤销BPM流程实例
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let instClient = bp.newInstanceClient()
     * instClient.cancel("002N000000VwBrSDISbQ", "my reason")
     *
     * ```
     * @param instanceId BPM实例ID，若ID不存在会报错
     * @param reason 撤销原因，可选
     * @return BPM实例运行状态信息
     */
    cancel(instID: string, reason?: string): Dict
    /**
     * 重置BPM流程实例。即撤销正在执行的流程实例并重新启动
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let instClient = bp.newInstanceClient()
     * instClient.restart("002N000000VwBrSDISbQ", "my reason", {
     *   "foo": 1,
     *   "bar": 3
     * })
     *
     * ```
     * @param instanceId BPM实例ID，若ID不存在会报错
     * @param reason 撤销原因，可选
     * @inputs 需要修改的流程变量值，可选
     * @return BPM实例运行状态信息
     */
    restart(instID: string, reason?: string, inputs?: Dict): Dict
    /**
     * 打回用户任务
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let instClient = bp.newInstanceClient()
     * instClient.rollBackPreTask("002N000000VwBrSDISbQ", "002Q000000VwBrSDISbQ",true,true)
     *
     * ```
     * @param instID BPM实例ID，若ID不存在会报错
     * @param taskID task实例ID，若task已完成，则可以不填写
     * @param allowClose 是允许打回已完成task
     * @param create 是否重新创建打回节点的上一个节点
     * @constructor 打回用户任务
     */
    rollBackPreTask(instID: string, taskID?: string, allowClose?: boolean, create?: boolean): FlowInstance
    /**
     * 撤回用户任务
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let instClient = bp.newInstanceClient()
     * instClient.revokePreTask("002N000000VwBrSDISbQ", "002Q000000VwBrSDISbQ",true,true)
     *
     * ```
     * @param instID BPM实例ID，若ID不存在会报错
     * @param taskID task实例ID，若task已完成，则可以不填写
     * @param allowClose 是允许撤回已完成task
     * @param create 是否重新创建撤回节点的上一个节点
     * @constructor 撤回用户任务
     */
    revokePreTask(instID: string, taskID?: string, allowClose?: boolean, create?: boolean): FlowInstance
    /**
     * 查询具体BPM实例状态信息
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let instClient = bp.newInstanceClient()
     * let res = instClient.query("002N000000VwBrSDISbQ", {
     *     fields: ["name", "bpStatus", "createdDate", "owner"],
     * })
     * console.log(res)
     * ```
     *
     * @param instanceId BPM实例ID
     * @param options 可选参数，可部分留空或全部留空
     * @return BPM实例状态信息
     */
    query(instanceId: string, options?: db.OptionItem): Dict
    /**
     * 查询BPM实例的历史记录
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let instClient = bp.newInstanceClient()
     * let res = instClient.queryHistory("002N000000VwBrSDISbQ", undefined, {
     *     fields: ["name", "bpStatus", "category", "owner"],
     * }, ["Process","UserTask"], ["created", "completed"])
     * console.log(res)
     * ```
     *
     * @param instanceId BPM实例ID
     * @param category 可选参数，指定查询历史的category，可以留空或置为undefined
     * @param options 可选参数，可部分留空或全部留空
     * @param sources 可选参数，历史记录的产生来源，用来根据数据来源筛选查询的历史记录。
     * Process: BPM流程实例上报的历史日志
     * UserTask: 用户任务图元上报的历史日志
     * CallActivity: 调用其他BPM流程图元上报的历史日志
     * Wait: 事件等待图元上报的历史日志
     * Task: 代办任务实例上报的历史日志
     *
     * @param kinds 流程、任务状态。用于BPM历史记录查询接口，用来根据状态筛选历史日志。
     *  created: 流程、图元或者任务创建/启动
     *  completed: 流程、图元或者任务正常完成
     *  suspended: 流程或者任务被挂起
     *  resumed: 流程或者任务被恢复
     *  terminated: 流程或者任务被终止
     *  canceled: 流程或者任务被取消/撤回
     *  delegated: 任务被委托
     *  claimed: 任务（分配群组的）被认领
     *  transferred: 任务被转移
     *
     *  @return 多条关于指定BPM实例的历史记录
     */
    queryHistory(instanceId: string, category?: string, options?: db.OptionItem, sources?: string[], kinds?: string[]): Dict[]
    /**
     * 为运行BPM实例添加文件附件
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let instClient = bp.newInstanceClient()
     * let res = instClient.addAttachments("002N000000VwBrSDISbQ", [
     * {
     *    "name": "aaa",
     *    "fileName": "a/b/c",
     *    "category": "xxx",
     *    "url": "xxx.com/xxx/xxx",
     *    "taskID": "xxx",
     * },
     * {
     *    "name": "bbb",
     *    "fileName": "a/b/c/d",
     *    "category": "yyy",
     *    "url": "yyy.com/yyy/yyy",
     *    "taskID": "yyy",
     * }
     * ])
     * console.log(res)
     * ```
     *
     * @param instanceId BPM实例ID
     * @param recs 添加文件信息的记录，需要符合attachfile表的字段要求
     * @return 添加成功的文件附件信息的记录id列表
     */
    addAttachments(instanceId: string, recs: Dict[]): string[]
    /**
     * 为运行BPM实例删除文件附件
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let instClient = bp.newInstanceClient()
     * instClient.deleteAttachments("002N000000VwBrSDISbQ", ["10gh000000VwbArnQ75E"])
     * ```
     *
     * @param instanceId BPM实例ID
     * @param idList 需要删除的文件附件记录id列表
     */
    deleteAttachments(instanceId: string, idList: string[]): void
    /**
     * 查询BPM运行实例的文件附件记录
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let instClient = bp.newInstanceClient()
     * let recs = instClient.queryAttachments("002N000000VwBrSDISbQ", {
     *     fields: ["taskID", "name", "fileName", "url"],
     *     limit: 5,
     * })
     * console.log(recs)
     * ```
     *
     * @param instanceId BPM实例ID
     * @param options 可选参数，可部分留空或全部留空
     * @return 多条关于指定BPM实例的文件附件信息
     */
    queryAttachments(instanceId: string, options?: db.OptionItem): Dict[]
    /**
     * 查询BPM实例相关的评论
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let instClient = bp.newInstanceClient()
     * instClient.queryComments("bpInstanceId")
     * ```
     * @param instanceId BPM实例ID
     * @param options 可选参数，可部分留空或全部留空
     * @return BPM实例的评论记录
     */
    queryComments(instanceId: string, options?: db.OptionItem): Dict[]
    /**
     * 设置BPM实例相关的变量值
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let instClient = bp.newInstanceClient()
     * instClient.setVars("002N000000VwBrSDISbQ", {
     *      "foo": "aaa",
     *      "bar": "bbb"
     * })
     * ```
     *
     * @param instanceId BPM实例ID
     * @param inputs 参数key-value键值对，注意设置的变量名是BPM定义过的变量
     */
    setVars(instanceId: string, inputs: Dict): void
    /**
     * 获取BPM实例相关的变量值
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let instClient=bp.newInstanceClient()
     * let vars = instClient.getVars("002N000000VwBrSDISbQ", ["foo", "bar"])
     * console.log(vars)
     * ```
     *
     * @param instanceId BPM实例ID
     * @param names 想查询的变量名清单，如果填入空数组，则查询所有变量
     * @return 查询出的变量值
     */
    getVars(instanceId: string, names: string[]): Dict
    /**
     * 查询一个BPM实例所对应的任务列表
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let instClient = bp.newInstanceClient()
     * let res = instClient.queryTasks("002N000000VwBrSDISbQ", [bp.State.Terminated, "Closed"], {
     *      fields: ["name", "owner", "state"]
     * })
     * console.log(res)
     * ```
     *
     * @param instanceId BPM实例ID
     * @param states 指定要查询任务的状态，可使用枚举值，如不指定具体内容可留空或写为undefined
     * @param options 可选参数，可部分留空或全部留空
     */
    queryTasks(instanceId: string, states?: string[], options?: db.OptionItem): Dict[]
    /**
     * 获取可跳转的元素列表。
     *
     * 目前仅支持以下节点的跳转：
     *
     * 1. 无法跨子流程回退 即无法回退到流程外的节点，无法回退第一个节点。具体来说，分为 3 个子场景限制：
     *    1. 并行网关场（AppCube BPM 中每个并行分支为一个子流程）
     *       1. 第一个节点无法回退，即无法回退并行任务；
     *       2. 并行网关内的节点无法回退到并行网关外；
     *       3. 并行网关外的节点无法跳转到并行网关内；
     *    2. 内嵌子流程场景：不能跳转到外部节点，外部节点无法跳转到内部；
     *    3. 调用活动场景：不能跳转到调用活动外的流程，外部节点无法跳转到内部。
     * 2. 只能跳转到人工节点。
     *
     * 确定流程实例的方法主要通过任务的 parentId 确定。对于会签来说，需要获取个人任务的父任务（会签任务）的 parentId 才能确定。
     *
     * @param instanceId BPM实例ID
     */
    getJumpableElements(instanceId: string): Set<string>
    /**
     * 关闭当前任务并跳转到指定名称的任务。
     *
     * @see getJumpableElements 获取可跳转节点列表
     * @param instanceId BPM实例ID
     * @param name 用户任务的名称
     */
    jumpToElement(instanceId: string, name: string): any
  }
  /**
   * Create a BPM V2 client for managing BPM instances.
   *
   * @example
   *
   * ```ts
   *
   * import {newInstanceClient} from 'bp';
   * let bpV2=newInstanceClient();
   *
   * ```
   */
  export declare function newInstanceClient(): BPMInstanceClient
  export interface BPMTaskClient {
    /**
     * 按照指定条件查BPM任务
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * import * as db from 'db'
     * let taskClient = bp.newTaskClient()
     * let res = taskClient.queryByCondition({
     *      condition: {
     *          conjunction: db.Conjunction.AND,
     *          conditions: [
     *               {
     *                       field: "createdDate",
     *                       operator: db.Operator.gt,
     *                       value: "2019-08-01 00:00:00"
     *               }
     *           ]
     *      },
     *      options: {
     *          fields: ["assignee", "assigneeID", "assigneeType", "assigneeName", "name"],
     *            orderby: [
     *                {
     *                        field: "assignee",
     *                        order: db.Order.desc
     *                }
     *          ],
     *      }
     * })
     * console.log(res)
     * ```
     *
     * @param condition 指定的查询条件，若不指定具体condition或option留空即可
     * @return 返回查询出的BPM任务的记录
     */
    queryByCondition(condition?: ConditionOption): Dict[]
    /**
     * 查询活跃状态的BPM任务列表，这里激活状态包括New/Dispatched/InProcess这三种任务状态
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * let tasks = taskClient.queryActiveList({
     *      owner: "002I000000VBjYt2OCYK",
     *      rootID: "002N000000VBjj8I66gC",
     *      options: {
     *           fields: ["assignee", "assigneeID", "assigneeType", "assigneeName", "name", "state", "rootID", "owner"],
     *      }
     * })
     * console.log(tasks)
     * ```
     *
     * @param activeTaskCondition 查询活跃状态任务的条件，可部分留空或全部留空
     * @return 返回匹配的任务列表
     */
    queryActiveList(activeTaskCondition?: ActiveTaskCondition): Dict[]
    /**
     * 查询属主是调用者本人的BPM任务列表
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * let tasks = taskClient.queryMyList({
     *      instID: "002N000000VwBrSDISbQ",
     *      rootID: "002N000000VBjj8I66gC",
     *      options: {
     *           fields: ["assignee", "assigneeID", "assigneeType", "assigneeName", "name", "state", "rootID", "owner"],
     *      }
     * })
     * console.log(tasks)
     * ```
     *
     * @param myTaskCondition 查询自己BPM任务的条件，可部分留空或全部留空
     * @return 返回匹配的任务列表
     */
    queryMyList(myTaskCondition?: MyTaskCondition): Dict[]
    /**
     * 查询suspended状态的bpm任务
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * let res = taskClient.querySuspendList({
     *      creator: "002I000000VBjYt2OCYK",
     *      owner: "002I000000VBjYt2OCYK"
     * })
     * console.log(res)
     * ```
     *
     * @param queryCondition 查询条件，可以全部为空或部分为空
     * @return 查询返回的任务列表
     */
    querySuspendList(queryCondition?: QueryCondition): Dict[]
    /**
     * 查询closed状态的bpm任务，示例与querySuspendList类似
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * let res = taskClient.queryClosedList({
     *      creator: "002I000000VBjYt2OCYK",
     *      owner: "002I000000VBjYt2OCYK"
     * })
     * console.log(res)
     * ```
     * @param queryCondition 查询条件，可以全部为空或部分为空
     * @return 查询返回的任务列表
     */
    queryClosedList(queryCondition?: QueryCondition): Dict[]
    /**
     * 查询completed状态的bpm任务，示例与querySuspendList类似
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * let res = taskClient.queryCompletedList({
     *      creator: "002I000000VBjYt2OCYK",
     *      owner: "002I000000VBjYt2OCYK"
     * })
     * console.log(res)
     * ```
     * @param queryCondition 查询条件，可以全部为空或部分为空
     * @return 查询返回的任务列表
     */
    queryCompletedList(queryCondition?: QueryCondition): Dict[]
    /**
     * 按照指定条件查询BPM任务列表
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * let res = taskClient.queryList({
     *      rootID: "002N000000VBk5qqWi1I",
     *      states: [bp.State.Terminated, bp.State.New],
     *      procInsID: "xxxxxxxxxxxxxxxxxx",
     * })
     * console.log(res)
     * ```
     *
     * @param queryTaskListCondition  查询条件
     * @return 查询返回的任务列表
     */
    queryList(queryTaskListCondition?: QueryTaskListCondition): Dict[]
    /**
     * 创建一个BPM子任务实例，注意parentId对应任务不能是用户任务
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * let res = taskClient.createSubTask(
     *      "002N000000VBk5qqWi1I",
     *      "002N000000VBk5qqWaSd",
     *      "user",
     * })
     * console.log(res)
     * ```
     * @param procInsId  bp实例的ID
     * @param parentId 父任务的ID
     * @param assignee 用户标识，可以是用户的登录账号，也可以是用户的ID
     * @return 任务状态信息
     */
    createSubTask(procInsId: string, parentId: string, assignee: string): Dict
    /**
     * 申请处理指定的任务
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * let res = taskClient.claim(
     *      "002N000000VBk5qqWi1I"
     * )
     * ```
     *
     * @param taskInsId 任务实例ID
     * @return 任务状态信息
     */
    claim(taskInsId: string): Dict
    /**
     * 将任务进行委托
     * @example
     * ```ts
     * import {delegate}from 'bp'
     * delegate("002N000000VwBrSDISbQ","user","resons")
     * ```
     * @param taskInsId 任务实例ID
     * @param assignee 被委托的用户标识，可以是用户的登录账号，也可以是用户的ID
     * @param reason 可以置空
     * @return 任务状态信息
     */
    delegate(taskInsId: string, assignee: string, reason?: string): Dict
    /**
     * 让系统将任务转移给他人
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * taskClient.transfer("bpId","userId","")
     * ```
     * @param taskInsId 任务实例ID
     * @param assignee 被委托的用户标识
     * @param reason 可以置空
     * @return 任务状态信息
     */
    transfer(taskInsId: string, assignee: string, reason?: string): Dict
    /**
     * 终止任务
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * taskClient.terminate("bpId","bp is end")
     * ```
     * @param taskInsId 任务实例ID
     * @param reason 可以置空
     * @return 任务状态信息
     */
    terminate(taskInsId: string, reason?: string): Dict
    /**
     * 取消并行任务
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * let tasks = taskClient.cancel(
     *      "002N000000VBk5qqWi1I",
     *      "task is end"
     * )
     * console.log(tasks)
     * ```
     * @param taskInsId 任务实例ID
     * @param reason 可以置空
     * @return 任务状态信息
     */
    cancel(taskInsId: string, reason?: string): Dict
    /**
     * 结束任务
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * let res = taskClient.complete(
     *      "002N000000VBk5qqWi1I",
     *      "",
     *      {}
     * )
     * console.log(res)
     * ```
     * @param taskInsId 任务实例ID
     * @param outcome 可以指定任务结果状态，如果为空字符串，任务状态将默认置为"complete"
     * @param inputs 可以设置BPM任务的变量，如果为空Map{}则不修改变量值
     * @return 任务状态信息
     */
    complete(taskInsId: string, outcome: string, inputs: Dict): Dict
    /**
     * 结束任务，并指定下一个任务的参与者（必须在下一个任务的参与者列表中，或具有管理权限）。
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * let res = taskClient.completeWithAssignee(
     *      "002N000000VBk5qqWi1I",
     *      "user",
     *      "",
     *      {}
     * )
     * console.log(res)
     * ```
     *
     * @param taskInsId 任务实例ID
     * @param outcome 可以指定任务结果状态，如果为空字符串，任务状态将默认置为"complete"
     * @param inputs 可以设置BPM任务的变量，如果为空Map{}则不修改变量值
     * @return 任务状态信息
     */
    completeWithAssignee(taskInsId: string, assignee: string, outcome: string, inputs: Dict): Dict
    /**
     * 删除任务
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let task = bp.newTaskClient()
     * task.delete("taskInsId")
     *
     * ```
     * @param taskInsId 任务实例ID
     */
    delete(taskInsId: string): void
    /**
     * 指定具体BPM任务ID，查任务信息
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * let res = taskClient.query("002N000000VwBrSDISbQ", {
     *     fields: ["name", "bpStatus", "createdDate", "owner"],
     * })
     * console.log(res)
     * ```
     * @param taskInsId 任务实例ID
     * @param options 可选，可部分置空或全部置空
     * @return 任务信息
     */
    query(taskInsId: string, options?: db.OptionItem): Dict
    /**
     * 设置BPM任务中定义变量的值
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * taskClient.setVars("002N000000VwBrSDISbQ", {
     *      "foo": "aaa",
     *      "bar": "bbb"
     * })
     * ```
     * @param taskInsId 任务实例ID
     * @param inputs 参数key-value键值对，注意设置的变量名是BPM定义过的变量
     */
    setVars(taskInsId: string, inputs: Dict): void
    /**
     * 获取BPM任务的变量值
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let taskClient=bp.newTaskClient()
     * let vars = taskClient.getVars("002N000000VwBrSDISbQ", ["foo", "bar"])
     * console.log(vars)
     * ```
     * @param taskInsId 任务实例ID
     * @param names 要查询的变量值列表，如果填入空数组，则查询所有变量
     * @return 变量Key-Value键值对
     */
    getVars(taskInsId: string, names: string[]): Dict
    /**
     * 为BPM任务添加文件附件信息
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * let res = taskClient.addAttachments("002N000000VwBrSDISbQ", [
     * {
     *    "name": "aaa",
     *    "fileName": "a/b/c",
     *    "category": "xxx",
     *    "url": "xxx.com/xxx/xxx",
     *    "taskID": "xxx",
     * },
     * {
     *    "name": "bbb",
     *    "fileName": "a/b/c/d",
     *    "category": "yyy",
     *    "url": "yyy.com/yyy/yyy",
     *    "taskID": "yyy",
     * }
     * ])
     * console.log(res)
     * ```
     * @param taskInsId 任务实例ID
     * @param recs 文件附件信息记录
     * @return 返回新增文件附件信息记录的id列表
     */
    addAttachments(taskInsId: string, recs: Dict[]): string[]
    /**
     * 删除BPM任务的文件附件信息
     * @param taskInsId 任务实例ID
     * @param idList 要删除的附件信息记录id列表
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * taskClient.deleteAttachments("002N000000VwBrSDISbQ",["id1","id2"])
     *
     * ```
     */
    deleteAttachments(taskInsId: string, idList: string[]): void
    /**
     * 查询BPM任务的文件附件信息记录
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * let recs = taskClient.queryAttachments("002N000000VwBrSDISbQ", {
     *     fields: ["taskID", "name", "fileName", "url"],
     *     limit: 5,
     * })
     * console.log(recs)
     * ```
     * @param taskInsId 任务实例ID
     * @param options 可选，可部分置空或全部置空
     * @return 查询到的文件附件信息记录
     */
    queryAttachments(taskInsId: string, options?: db.OptionItem): Dict[]
    /**
     * 为BPM任务添加评论
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * let res = taskClient.addComment("comments")
     * ```
     * @param taskInsId 任务实例ID
     * @param comment 评论信息
     * @return 返回添加的评论相关记录
     */
    addComment(taskInsId: string, comment: string): Dict
    /**
     * 获取BPM任务的评论
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * let res = taskClient.getComments("taskInsId")
     * ```
     * @param taskInsID 任务实例ID
     * @param options 可选，可部分置空或全部置空
     * @return 返回相关的评论记录
     */
    getComments(taskInsId: string, options?: db.OptionItem): Dict[]
    /**
     * 更新BPM任务的评论
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * let res = taskClient.updateComment("taskInsId","commentId","comment")
     * ```
     * @param taskInsId 任务实例ID
     * @param commentId 评论实例ID
     * @param comment  评论信息
     */
    updateComment(taskInsId: string, commentId: string, comment: string): void
    /**
     * 删除BPM任务的评论
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * let res = taskClient.deleteComment("taskInsId","commentId")
     * ```
     * @param taskInsId  任务实例ID
     * @param commentId  评论实例ID
     */
    deleteComment(taskInsId: string, commentId: string): void
    /**
     * 获取某个具体的BPM任务评论
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let taskClient = bp.newTaskClient()
     * let res = taskClient.getComment("taskInsId","commentId")
     * ```
     * @param taskInsId 任务实例ID
     * @param commentId  评论实例ID
     * @param options 可选参数，可部分置空或全部置空
     * @return 返回某个具体的评论记录
     */
    getComment(taskInsId: string, commentId: string, options?: db.OptionItem): Dict
  }
  /**
   * BPM client, which is used to manage BPM tasks.
   *
   * @example
   *
   * ```ts
   *
   * import {newTaskClient} from 'bp';
   * let bpV2Task=newTaskClient();
   *
   * ```
   */
  export declare function newTaskClient(): BPMTaskClient
  export interface BPMQueryTaskClient {
    /**
     * * 按照指定条件查BPM任务，与bp.newTaskClient的queryByCondition用法完全一样，只是多返回total值
     *
     * @example
     * ```ts
     * import * as bp from 'bp'
     * import * as db from 'db'
     * let queryTaskClient = bp.newQueryTaskClient()
     * let res = queryTaskClient.queryByCondition({
     *      condition: {
     *          conjunction: db.Conjunction.AND,
     *          conditions: [
     *               {
     *                       field: "createdDate",
     *                       operator: db.Operator.gt,
     *                       value: "2019-08-01 00:00:00"
     *               }
     *           ]
     *      },
     *      options: {
     *          fields: ["assignee", "assigneeID", "assigneeType", "assigneeName", "name"],
     *            orderby: [
     *                {
     *                        field: "assignee",
     *                        order: db.Order.desc
     *                }
     *          ],
     *      }
     * })
     * console.log(res.recs) // 数组结果
     * console.log(res.total) // 统计数
     * ```
     *
     * @param condition 指定的查询条件，若不指定具体condition或option留空即可
     * @return 返回查询出的BPM任务的记录
     */
    queryByCondition(cond?: ConditionOption): Dict
    /**
     * 查询活跃状态的BPM任务列表，这里激活状态包括New/Dispatched/InProcess这三种任务状态，与bp.newTaskClient的queryActiveList用法完全一样，只是多返回total值
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let queryTaskClient = bp.newQueryTaskClient()
     * let res = queryTaskClient.queryActiveList({
     *      owner: "002I000000VBjYt2OCYK",
     *      rootID: "002N000000VBjj8I66gC",
     *      options: {
     *           fields: ["assignee", "assigneeID", "assigneeType", "assigneeName", "name", "state", "rootID", "owner"],
     *      }
     * })
     * console.log(res.recs) // 数组结果
     * console.log(res.total) // 统计数
     * ```
     *
     * @param activeTaskCondition 查询活跃状态任务的条件，可部分留空或全部留空
     * @return 返回匹配的任务列表
     */
    queryActiveList(activeTaskCond?: ActiveTaskCondition): Dict
    /**
     * 查询属主是调用者本人的BPM任务列表，与bp.newTaskClient的queryMyList用法完全一样，只是多返回total值
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let queryTaskClient = bp.newQueryTaskClient()
     * let res = queryTaskClient.queryMyLis({
     *      instID: "002N000000VwBrSDISbQ",
     *      rootID: "002N000000VBjj8I66gC",
     *      options: {
     *           fields: ["assignee", "assigneeID", "assigneeType", "assigneeName", "name", "state", "rootID", "owner"],
     *      }
     * })
     * console.log(res.recs) // 数组结果
     * console.log(res.total) // 统计数
     * ```
     *
     * @param myTaskCondition 查询自己BPM任务的条件，可部分留空或全部留空
     * @return 返回匹配的任务列表
     */
    queryMyList(myTaskCond?: MyTaskCondition): Dict
    /**
     * 查询suspended状态的bpm任务，与bp.newTaskClient的querySuspendList用法完全一样，只是多返回total值
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let queryTaskClient = bp.newQueryTaskClient()
     * let res = queryTaskClient.querySuspendList({
     *      creator: "002I000000VBjYt2OCYK",
     *      owner: "002I000000VBjYt2OCYK"
     * })
     * console.log(res.recs) // 数组结果
     * console.log(res.total) // 统计数
     * ```
     *
     * @param queryCondition 查询条件，可以全部为空或部分为空
     * @return 查询返回的任务列表
     */
    querySuspendList(queryCond?: QueryCondition): Dict
    /**
     * 查询closed状态的bpm任务，与bp.newTaskClient的queryClosedList用法完全一样，只是多返回total值
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let queryTaskClient = bp.newQueryTaskClient()
     * let res = queryTaskClient.queryClosedList({
     *      creator: "002I000000VBjYt2OCYK",
     *      owner: "002I000000VBjYt2OCYK"
     * })
     * console.log(res.recs) // 数组结果
     * console.log(res.total) // 统计数
     * ```
     * @param queryCondition 查询条件，可以全部为空或部分为空
     * @return 查询返回的任务列表
     */
    queryClosedList(queryCond?: QueryCondition): Dict
    /**
     * 查询completed状态的bpm任务，与bp.newTaskClient的queryCompletedList用法完全一样，只是多返回total值
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let queryTaskClient = bp.newQueryTaskClient()
     * let res = queryTaskClient.queryCompletedList({
     *      creator: "002I000000VBjYt2OCYK",
     *      owner: "002I000000VBjYt2OCYK"
     * })
     * console.log(res.recs) // 数组结果
     * console.log(res.total) // 统计数
     * ```
     * @param queryCondition 查询条件，可以全部为空或部分为空
     * @return 查询返回的任务列表
     */
    queryCompletedList(queryCond?: QueryCondition): Dict
    /**
     * 按照指定条件查询BPM任务列表，与bp.newTaskClient的queryList用法完全一样，只是多返回total值
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let queryTaskClient = bp.newQueryTaskClient()
     * let res = queryTaskClient.queryList({
     *      rootID: "002N000000VBk5qqWi1I",
     *      states: [bp.State.Terminated, bp.State.New],
     *      procInsID: "xxxxxxxxxxxxxxxxxx",
     * })
     * console.log(res.recs) // 数组结果
     * console.log(res.total) // 统计数
     * ```
     *
     * @param queryTaskListCondition  查询条件
     * @return 查询返回的任务列表
     */
    queryList(queryTaskListCond?: QueryTaskListCondition): Dict
    /**
     * 查询BPM任务的文件附件信息记录，与bp.newTaskClient的queryAttachments用法完全一样，只是多返回total值
     *
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let queryTaskClient = bp.newQueryTaskClient()
     * let res = queryTaskClient.queryAttachments("002N000000VwBrSDISbQ", {
     *     fields: ["taskID", "name", "fileName", "url"],
     *     limit: 5,
     * })
     * console.log(res.recs) // 数组结果
     * console.log(res.total) // 统计数
     * ```
     * @param taskInsId 任务实例ID
     * @param options 可选，可部分置空或全部置空
     * @return 查询到的文件附件信息记录
     */
    queryAttachments(taskInsID: string, options?: db.OptionItem): Dict
    /**
     * 获取BPM任务的评论，与bp.newTaskClient的getComments用法完全一样，只是多返回total值
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let queryTaskClient = bp.newQueryTaskClient()
     * let res = taskClient.getComments("taskInsId")
     * console.log(res.recs) // 数组结果
     * console.log(res.total) // 统计数
     * ```
     * @param taskInsID 任务实例ID
     * @param options 可选，可部分置空或全部置空
     * @return 返回相关的评论记录
     */
    getComments(taskInsID: string, options?: db.OptionItem): Dict
    /**
     * 查询属主是调用者本人的BPM任务列表和总数，支持同时查询多个rootID
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let queryTaskClient = bp.newQueryTaskClient()
     * let tasks = queryTaskClient.queryMyListWithMultipleRootID({
     *      rootIDList: ["002N000000VBjj8I66gC","002N000000VBjj8I66gD","002N000000VBjj8I66gE"]
     *      options: {
     *           fields: ["assignee", "assigneeID", "assigneeType", "assigneeName", "name", "state", "rootID", "owner"],
     *      }
     * })
     * console.log(tasks)
     * ```
     *
     * @param myTaskRootIDListCondition 查询自己BPM任务的条件，支持同时查询多个rootID留空，可部分留空或全部留空
     * @return 返回匹配的任务列表和符合条件的统计数量，limit限制5000条
     */
    queryMyListWithMultipleRootID(myTaskRootIDListCondition?: MyTaskRootIDListCondition): Dict
    /**
     * 查询属主是调用者本人的BPM任务列表和总数，支持同时查询多个流程定义 ID
     *
     * @example
     * ```ts
     * import * as bp from 'bp'
     * let queryTaskClient = bp.newQueryTaskClient()
     * let tasks = queryTaskClient.queryMyListWithProcDefIDs({
     *      processDefIDList: ["003i000000kmKb3rA8X2"],
     *      options: {
     *           fields: ["assignee", "assigneeID", "assigneeType", "assigneeName", "name", "state", "rootID", "owner"],
     *      }
     * })
     * console.log(tasks)
     * ```
     *
     * @param myTaskProcDefIdListCondition 查询自己BPM任务的条件，支持同时查询多个流程定义ID留空，可部分留空或全部留空
     * @return 返回匹配的任务列表和符合条件的统计数量，单次查询限制5000条
     */
    queryMyListWithProcDefIDs(myTaskProcDefIdListCondition?: MyTaskProessDefIDListCondition): MyListResult
    /**
     * 查询closed状态的bpm任务，支持同时查询多个rootID
     *
     * @example
     * ```ts
     *
     * import * as bp from 'bp'
     * let queryTaskClient = bp.queryTaskClient()
     * let res = queryTaskClient.queryClosedListWithMultipleRootID({
     *      creator: "002I000000VBjYt2OCYK",
     *      owner: "002I000000VBjYt2OCYK",
     *      rootIDList: ["002N000000VBjj8I66gC","002N000000VBjj8I66gD","002N000000VBjj8I66gE"]
     * })
     * console.log(res.recs) // 数组结果
     * console.log(res.total) // 统计数
     * ```
     * @param terminatedTasksRootIDListCondition 查询条件，可以全部为空或部分为空
     * @return 查询返回的任务列表
     */
    queryClosedListWithMultipleRootID(terminatedTasksRootIDListCondition?: TerminatedTasksRootIDListCondition): Dict
  }
  /**
   * BPM client, which is used to manage BPM query tasks.
   *
   * @example
   *
   * ```ts
   *
   * import {newQueryTaskClient} from 'bp';
   * let bpV2Task=newQueryTaskClient();
   *
   * ```
   */
  export declare function newQueryTaskClient(): BPMQueryTaskClient
}

declare module 'error' {
  /**
   * The error class
   */
  export declare class Error implements Error {
    /**
     * the error no
     */
    name: string
    /**
     * the error message
     */
    message: string
    /**
     * the error stack info.
     */
    stack?: string
    constructor(name: string, message: string)
  }
  /**
   * the i18n error class
   */
  export declare class I18nError implements Error {
    /**
     * the error no
     */
    name: string
    /**
     * the i18n message
     */
    message: string
    /**
     * the error stack info.
     */
    stack?: string
    constructor(name: string, ...args: any[])
  }
}

declare module 'roma' {
  /**
   * ROMA Connector client interface
   */
  export interface ROMAClient {
    /**
     * @param operation ROMA API name
     * @param input ROMA API input parameter map (header and body)
     */
    sendRest(operation: string, input: Dict): Dict
    /**
     * @param method ROMA API method
     * @param url ROMA API URL
     * @param input ROMA API input parameter map (header and body)
     */
    sendRestByURL(method: string, url: string, input: Dict): Dict
  }
  /**
   * Name type enum, support: AppId, AppName
   */
  export declare enum NameType {
    AppId = 'APPID',
    AppName = 'APPNAME',
  }
  /**
   * Client api for ROMA connectors.
   * @example
   * ```ts
   *
   * import * as roma from 'roma';
   *
   * // warn
   * // When the script calls connector, if variable input parameters are used, the connector component may be missing when packaging
   *
   * let client = roma.newClient("romaAppName");
   * let appId = "abc123456";
   * let appKey = "base64example==";
   * let resp = client.sendRest("romaAPIName", {"X-HW-ID": appId, "X-HW-APPKEY": appKey, "$body": {}});
   *
   * console.log(resp);
   *
   * let client2 = roma.newClient("romaAppID", roma.NameType.AppId);
   * let appId2 = "abc123456";
   * let appKey2 = "base64example==";
   * let resp2 = client2.sendRestByURL("POST", "/testapi", {"X-HW-ID": appId, "X-HW-APPKEY": appKey, "$body": {}});
   *
   * ```
   * @param name ROMA connector instance name
   * @param type ROMA connector instance name type
   */
  export declare function newClient(name: string, type?: NameType): ROMAClient
}

declare module 'portaluser' {
  /**
   * profile
   */
  export interface Profile {
    id: string
    name: string
  }
  /**
   * portal user
   */
  export interface PortalUser {
    /**
     * id of portal user
     */
    id: string
    /**
     * username of portal user
     */
    username: string
    /**
     * profile list of portal user
     */
    profiles: Profile[]
    /**
     * timezone of portal user
     */
    timezone: string
    /**
     * email of portal user
     */
    email: string
    /**
     * contactPhone of portal user
     */
    contactPhone: string
    /**
     * extIdentityID of portal user
     */
    extIdentityID: string
  }
  /**
   * 业务用户管理
   *
   * 在开启安全配置情况下，需要对应的权限才可以执行， 如对业务用户进行增删改需要 '管理业务用户'， 查看需要 '查看业务用户'
   *
   */
  export interface Manager {
    /**
     * get portal user list
     *
     * @param offset
     * @param limit total count, max limit is 5000
     */
    getList(offset: number, limit: number): PortalUser[]
    /**
     * get portal user by id
     *
     * @param id portal user id
     */
    getById(id: string): PortalUser
    /**
     * get portal user by username
     *
     * @param username
     */
    getByUsername(username: string): PortalUser
    /**
     * get portal users by usernames
     *
     * @param usernames
     */
    getByUsernames(usernames: string[]): PortalUser[]
    /**
     * set profiles by id
     *
     * @param id
     * @param profiles profile id list
     */
    setProfilesById(id: string, profiles: string[]): void
    /**
     * add profiles to portal user
     *
     * @param id
     * @param profiles profile id list
     */
    addProfilesById(id: string, profiles: string[]): void
    /**
     * set timezone for portal user by id
     *
     * @param id
     * @param timezone timezone id
     */
    setTimezoneById(id: string, timezone: string): void
    /**
     * delete portaluser by id
     *
     * @param id
     */
    deleteById(id: string): void
    /**
     * get portal user by extIdentityID
     *
     * @param extIdentityID
     */
    getByExtIdentityID(extIdentityID: string): Dict
  }
  /**
   * create a portal user manager
   *
   * @example
   * ```ts
   *import * as portaluser from 'portaluser';
   *
   * let mng = portaluser.newManager();
   * let pu = mng.getByUsername("pu1");
   * let pus = mng.getByUsernames(["pu1", "pu2"]);
   * // console.log(pu);
   * console.log(pu.id);
   * console.log(pu.username);
   * for(let i in pu.profiles) {
   *    console.log(pu.profiles[i].id);
   *    console.log(pu.profiles[i].name);
   * }
   * console.log(pu.timezone);
   *
   * let pu1 = mng.getById("10gg000000QW0pp5EnWy");
   * console.log(pu1);
   *
   * // let pus = mng.getList(0, 10);
   * // for (let i in pus) {
   * //     console.log(pus[i]);
   * // }
   *
   * mng.setTimezoneById("10gg000000QW0pp5EnWy", "10");
   *
   * try {
   *    mng.addProfilesById("10gg000000QW0pp5EnWy", ["000T000000R1ErfLemCe"]);
   * } catch (e) {
   *    console.log("error", e.message);
   * }
   *
   * // console.log(mng.getById("10gg000000QW0pp5EnWy"));
   *
   *
   * // mng.setProfilesById("10gg000000QW0pp5EnWy", ["1"])
   *
   * // console.log(mng.getById("10gg000000QW0pp5EnWy"));
   * ```
   *
   */
  export declare function newManager(): Manager
}

declare module 'publicgroup' {
  /**
   * 创建公共组管理实例
   *
   * @return 管理实例
   */
  export declare function newManager(): Manager
  /**
   * 公共组管理对象
   *
   * 公共组的增删改查
   */
  export interface Manager {
    /**
     * 获取公共组列表
     *
     * @param qo 查询参数
     * @return 公共组列表（不包含成员信息）
     */
    getList(qo?: QueryOption): PublicGroup[]
    /**
     * 获取公共组对象
     * @param id 公共组ID
     */
    getByID(id: string): PublicGroup
    /**
     * 获取公共组对象
     * @param name 公共组名
     */
    getByName(name: string): PublicGroup
    /**
     * 创建公共组
     *
     * @example
     * ```ts
     *
     * import * as pg from "publicgroup"
     *
     * let mgr = pg.newManager()
     * let id = mgr.create({ name: "kwtest",
     *                       label: "kwtest",
     *                       memberMap: { user: ["10gd000000En2xfeFqQy"] } })
     * let publicGroup = mgr.getByID(id)
     * ```
     *
     * @param ps 公共组参数，必选参数name，label，memberMap，且memberMap至少包含一个成员。
     * @return 公共组ID
     */
    create(ps: PublicGroupOpts): string
    /**
     * 删除公共组
     *
     * @param id 公共组ID
     */
    remove(id: string): void
    /**
     * 获取成员用户
     *
     * @param pgID 公共组ID
     * @param qo 查询参数
     */
    getUsersByID(pgID: string, qo?: QueryOption): string[]
    /**
     * 获取成员业务用户
     *
     * @param pgID 公共组ID
     * @param qo 查询参数
     */
    getPortalUsersByID(pgID: string, qo?: QueryOption): string[]
    /**
     * 获取成员角色
     *
     * @param pgID 公共组ID
     * @param qo 查询参数
     */
    getRolesByID(pgID: string, qo?: QueryOption): string[]
    /**
     * 获取成员角色及下属
     *
     * @param pgID 公共组ID
     * @param qo 查询参数
     */
    getRolesAndSubsByID(pgID: string, qo?: QueryOption): string[]
    /**
     * 获取成员公共组
     *
     * @param pgID 公共组ID
     * @param qo 查询参数
     */
    getPublicGroupsByID(pgID: string, qo?: QueryOption): string[]
    /**
     * 添加用户
     *
     * @param pgID
     * @param userIDs
     */
    addUsersByID(pgID: string, userIDs: string[]): void
    /**
     * 添加业务用户
     *
     * @param pgID
     * @param portalUserIDs
     */
    addPortalUsersByID(pgID: string, portalUserIDs: string[]): void
    /**
     * 添加角色
     *
     * @param pgID
     * @param RoleIDs
     */
    addRolesByID(pgID: string, RoleIDs: string[]): void
    /**
     * 添加角色及下属
     *
     * @param pgID
     * @param RoleIDs
     */
    addRolesAndSubsByID(pgID: string, RoleIDs: string[]): void
    /**
     * 添加公共组
     *
     * @param pgID
     * @param groupIDs
     */
    addPublicGroupsByID(pgID: string, groupIDs: string[]): void
    /**
     * 移除成员用户
     *
     * @param pgID
     * @param userIDs
     */
    removeUsersByID(pgID: string, userIDs: string[]): void
    /**
     * 移除成员业务用户
     *
     * @param pgID
     * @param portalUserIDs
     */
    removePortalUsersByID(pgID: string, portalUserIDs: string[]): void
    /**
     * 移除成员角色
     *
     * @param pgID
     * @param RoleIDs
     */
    removeRolesByID(pgID: string, RoleIDs: string[]): void
    /**
     * 移除成员角色及下属
     *
     * @param pgID
     * @param RoleIDs
     */
    removeRolesAndSubsByID(pgID: string, RoleIDs: string[]): void
    /**
     * 移除成员公共组
     *
     * @param pgID
     * @param groupIDs
     */
    removePublicGroupsByID(pgID: string, groupIDs: string[]): void
  }
  /**
   * 公共组的创建参数
   */
  export interface PublicGroupOpts {
    /**
     * 名称
     */
    name: string
    /**
     * 标签
     */
    label: string
    /**
     * 是否使用层级结构授予访问权限
     */
    usingHierarchies?: boolean
    /**
     * 成员Map
     */
    memberMap?: {
      user?: string[]
      role?: string[]
      roleAndSubordinates?: string[]
      group?: string[]
      puser?: string[]
    }
  }
  /**
   * 查询参数
   */
  export interface QueryOption {
    /**
     * 数据页数，从第1页开始
     */
    page?: number
    /**
     * 每页的记录数
     */
    pagesize?: number
  }
  /**
   * 公共组对象
   *
   */
  export interface PublicGroup {
    id: string
    name: string
    label: string
    usingHierarchies: boolean
    createdBy: string
    createdByName: string
    createdDate: string
    lastModifiedBy: string
    lastModifiedByName: string
    lastModifiedDate: string
  }
}

declare module 'role' {
  /**
   * 创建角色管理实例
   *
   * @return 管理实例
   */
  export declare function newManager(): Manager
  export interface Manager {
    /**
     * 获取角色列表
     *
     * @param qo 查询参数
     * @return 角色列表（不返回用户列表、管理者列表）
     */
    getList(qo?: QueryOption): Role[]
    /**
     * 获取角色
     *
     * @param id 角色ID
     * @return 返回Role对象
     */
    getByID(id: string): Role
    /**
     * 获取角色
     *
     * @param name 角色名称
     * @return 返回Role对象
     */
    getByName(name: string): Role
    /**
     * 创建角色
     *
     * @example
     * ```typescript
     * import * as r from "role"
     * let mgr = r.newManager()
     * let id = mgr.create({ name: "test", label: "test" })
     * let testRole = mgr.getByID(id)
     *
     * @param ro 角色创建参数 - 必选字段label、name，可选字段reportTo、description。
     * @return 角色ID
     */
    create(ro: RoleOptions): string
    /**
     * 删除角色
     *
     * 不能删除被 用户、其他角色、组或者分享规则 所引用的角色。
     * @param id 角色ID
     */
    remove(id: string): void
    /**
     * 更新角色元数据
     *
     * 仅修改角色的元数据，不会修改用户的角色身份
     *
     * @param role RoleOptions接口，必须包含id。
     */
    update(role: Role): void
  }
  export interface RoleOptions {
    /**
     * 角色ID
     */
    id?: string
    /**
     * 名称
     */
    name: string
    /**
     * 标签
     */
    label: string
    /**
     * 直属上司的角色ID
     */
    reportTo?: string
    /**
     * 描述信息
     */
    description?: string
  }
  /**
   * 查询参数
   */
  export interface QueryOption {
    /**
     * 数据页数，从第1页开始
     */
    page?: number
    /**
     * 每页的记录数
     */
    pagesize?: number
  }
  export declare function buildRole(
    p:
      | string
      | {
          [key: string]: any
        },
  ): Role
  export interface Role {
    readonly id: string
    readonly name: string
    label: string
    reportTo: string
    reportToName: string
    reportToLabel: string
    manager: string[]
    description: string
    readonly createdBy: string
    readonly createdByName: string
    readonly createdDate: string
    readonly lastModifiedBy: string
    readonly lastModifiedByName: string
    readonly lastModifiedDate: string
    /**
     * 根据角色ID获取用户列表
     *
     * @param recursive 是否获取下属角色的用户，默认为false
     * @param qo 查询参数
     * @return 用户ID列表
     */
    getUsers(recursive?: boolean, qo?: QueryOption): string[]
    /**
     * 根据角色ID获取业务用户列表
     *
     * @param recursive 是否获取下属角色的用户，默认为false
     * @param qo 查询参数
     */
    getPortalUsers(recursive?: boolean, qo?: QueryOption): string[]
    /**
     * 用户是否拥有该角色身份，或该角色的下属身份
     *
     * @param userID 用户ID
     */
    containsUser(userID: string): boolean
    /**
     * 业务用户是否拥有该角色身份
     *
     * @param userID 用户ID
     * @param recursive 是否获取下属角色的用户，默认为false
     */
    containsPortalUser(userID: string, recursive?: boolean): boolean
    /**
     * 为用户添加角色
     *
     * 写入数据库
     *
     * @param user 用户ID
     */
    assignUser(user: string): void
    /**
     * 为业务用户添加角色
     *
     * 写入数据库
     *
     * @param puserID 用户ID
     */
    assignPortalUser(puserID: string): void
    /**
     * 将角色指派给指定的部分用户
     *
     * 其他用户将失去这个角色
     *
     * @param userIDs 用户ID
     */
    assignUsers(userIDs: string[]): void
    /**
     * 将角色指派给指定的部分业务用户
     *
     * 其他业务用户将失去这个角色
     *
     * @param puserIDs 业务用户用户ID
     */
    assignPortalUsers(puserIDs: string[]): void
  }
}

declare module 'queue' {
  /**
   * 创建工作队列管理实例
   * @return 管理实例
   */
  export declare function newManager(): Manager
  /**
   * 工作队列管理对象
   *
   * 工作队列的增删改查
   */
  export interface Manager {
    /**
     * 获取工作队列列表
     *
     * @param qo 查询参数
     * @return 工作队列列表（不包含成员信息和队列对象信息）
     */
    getList(qo?: QueryOption): Queue[]
    /**
     * 获取工作队列
     * @param id 工作队列ID
     */
    getByID(id: string): Queue
    /**
     * 获取工作队列
     * @param name 工作队列名称
     */
    getByName(name: string): Queue
    /**
     * 创建工作队列
     *
     * @example
     * ```typescript
     * import * as queue from "queue"
     * let mgr = queue.newManager()
     * let id = mgr.create({ name: "test",
     *                       label: "test",
     *                       memberMap: { user: [{租户ID},] } })
     * let testQueue = mgr.getByID(id)
     * ```
     * @param ps 工作队列创建参数。必填参数：name、label、memberMap，且memberMap至少包含一个成员。
     * @return 角色ID
     */
    create(ps: QueueOpts): string
    /**
     * 删除工作队列
     * @param id 工作队列ID
     */
    remove(id: string): void
    /**
     * 获取成员用户
     *
     * @param qID 工作队列ID
     * @param qo 查询参数
     */
    getUsersByID(qID: string, qo?: QueryOption): string[]
    /**
     * 获取成员业务用户
     *
     * @param qID 工作队列ID
     * @param qo 查询参数
     */
    getPortalUsersByID(qID: string, qo?: QueryOption): string[]
    /**
     * 获取成员角色
     *
     * @param qID 工作队列ID
     * @param qo 查询参数
     */
    getRolesByID(qID: string, qo?: QueryOption): string[]
    /**
     * 获取成员角色及下属
     *
     * @param qID 工作队列ID
     * @param qo 查询参数
     */
    getRolesAndSubsByID(qID: string, qo?: QueryOption): string[]
    /**
     * 获取成员公共组
     *
     * @param qID 工作队列ID
     * @param qo 查询参数
     */
    getPublicGroupsByID(qID: string, qo?: QueryOption): string[]
    /**
     * 添加用户
     *
     * @param qID
     * @param userIDs
     */
    addUsersByID(qID: string, userIDs: string[]): void
    /**
     * 添加业务用户
     *
     * @param qID
     * @param portalUserIDs
     */
    addPortalUsersByID(qID: string, portalUserIDs: string[]): void
    /**
     * 添加角色
     *
     * @param qID
     * @param RoleIDs
     */
    addRolesByID(qID: string, RoleIDs: string[]): void
    /**
     * 添加角色及下属
     *
     * @param qID
     * @param RoleIDs
     */
    addRolesAndSubsByID(qID: string, RoleIDs: string[]): void
    /**
     * 添加公共组
     *
     * @param qID
     * @param groupIDs
     */
    addPublicGroupsByID(qID: string, groupIDs: string[]): void
    /**
     * 移除成员用户
     *
     * @param qID
     * @param userIDs
     */
    removeUsersByID(qID: string, userIDs: string[]): void
    /**
     * 移除成员业务用户
     *
     * @param qID
     * @param portalUserIDs
     */
    removePortalUsersByID(qID: string, portalUserIDs: string[]): void
    /**
     * 移除成员角色
     *
     * @param qID
     * @param RoleIDs
     */
    removeRolesByID(qID: string, RoleIDs: string[]): void
    /**
     * 移除成员角色及下属
     *
     * @param qID
     * @param RoleIDs
     */
    removeRolesAndSubsByID(qID: string, RoleIDs: string[]): void
    /**
     * 移除成员公共组
     *
     * @param qID
     * @param groupIDs
     */
    removePublicGroupsByID(qID: string, groupIDs: string[]): void
  }
  /**
   * 工作队列的创建参数
   */
  export interface QueueOpts {
    /**
     * 名称
     */
    name: string
    /**
     * 标签
     */
    label: string
    /**
     * 公共邮箱
     */
    email?: string
    /**
     * 是否给成员发送邮件
     */
    sendEmail?: boolean
    /**
     * 邮件模板ID
     */
    emailTemp?: string
    /**
     * 管理者ID
     */
    manager?: string
    /**
     * 队列对象列表
     */
    objects?: string[]
    /**
     * 成员
     */
    memberMap: {
      user?: string[]
      role?: string[]
      roleAndSubordinates?: string[]
      group?: string[]
      puser?: string[]
    }
  }
  /**
   * 查询参数
   */
  export interface QueryOption {
    /**
     * 数据页数，从第1页开始
     */
    page?: number
    /**
     * 每页的记录数
     */
    pagesize?: number
  }
  /**
   * 工作队列对象
   *
   * 修改该对象后，需要通过Manager的update方法写入数据库
   */
  export interface Queue {
    name: string
    label: string
    id: string
    createdBy: string
    createdByName: string
    createdDate: string
    lastModifiedBy: string
    lastModifiedByName: string
    lastModifiedDate: string
    owner: string
    ownerName: string
    email: string
    manager: string
    managerName: string
    emailTemplate: string
    sendEmailToMembers: boolean
    type: string
    refCount: number
    objects: string[]
  }
}

declare module 'hms' {
  /**
   * HMS Connector client interface
   */
  export interface HMSClient {
    /**
     * @param deviceTokens device token list
     * @param payload message payload
     * @param expireTime message expire time, formate: yyyy-MM-dd'T'HH:mm:ssXXX.
     */
    pushMessage(deviceTokens: string[], payload: string, expireTime: string): Dict
  }
  /**
   * Client api for HMS connectors.
   * @example
   * ```ts
   *
   * import * as hms from 'hms';
   *
   * let client = hms.newClient("instanceName");
   * let deviceTokens = ["**********123", "*********123"];
   * let resp = client.pushMessage(deviceTokens, payload, expireTime);
   * ```
   * @param instanceName connector instance name
   */
  export declare function newClient(instanceName: string): HMSClient
}

declare module 'sequence' {
  /**
   * sequence
   *
   * @example
   * ```ts
   *import * as sequence from 'sequence';
   *
   *let seq = new sequence.Sequence();
   *
   *let key = "A";
   *
   *for (let i=0; i < 10; i++) {
   *   let v = seq.next(key);
   *   console.log(v);
   * }
   *
   *let keyB = "B";
   *console.log(seq.next(keyB));
   * ```
   */
  export declare class Sequence {
    private seq
    constructor()
    /**
     * get next number of the sequence
     *
     * @param key key of sequence
     */
    next(key: string): number
    /**
     * clear sequence
     *
     * @param key key of sequence
     */
    clear(key: string): void
    /**
     * set key to specified value
     *
     * @param key key of sequence
     * @param value current value of key
     */
    set(key: string, value: number): void
  }
}

declare module 'url' {
  /**
   * Query
   */
  export declare type Query = {
    [key: string]: any
  }
  /**
   * URL
   */
  export interface URL {
    join(path: string): URL
    toString(): string
    scheme: string
    path: string
    isAbs: boolean
    host: string
    hostname: string
    port: string
    query: Query
    fragment: string
  }
  /**
   * parse url string to URL
   *
   * @example
   * ```ts
   *
   * import * as url from 'url';
   *
   * url.parse('https://xxx.com/example?x=1#y=2')
   *
   * ```
   * @param raw (string): url string
   * @returns parsed URL
   */
  export declare function parse(raw: string): URL
  /**
   * join url path
   *
   * @example
   * ```ts
   *
   * import * as url from 'url'
   *
   * const base = url.parse('https://xxx.com')
   * url.join(base, '/hello')
   *
   * ```
   * @param base (string | URL): url string or URL
   * @param paths (string | URL): relative paths
   * @returns joined raw url
   */
  export declare function join(base: string | URL, ...paths: string[]): string
  /**
   * parse query string
   *
   * @example
   * ```ts
   *
   * import * as url from 'url'
   *
   * const q = url.parseQuery('x=2&y=3')
   *
   * ```
   * @param raw (string): query string
   * @returns parsed Query
   */
  export declare function parseQuery(raw: string): Query
  /**
   * stringlify query to string
   *
   * @example
   * ```ts
   *
   * import * as url from 'url'
   *
   * const q = url.parseQuery('x=2&y=3')
   * url.stringifyQuery(q) === 'x=2&y=3'
   *
   * ```
   * @param raw (Query): Query
   * @returns query string
   */
  export declare function stringifyQuery(query: Query): string
}

declare module 'dcb' {
  /**
   * DCB Connector client interface
   */
  export interface DCBClient {
    /**
     * @param msisdn phone number
     * @param templateID short message template
     * @param templateParams parameter values of short message template
     * @param operatorCode operator code, optional
     * @param countryID country code, optional
     * @param transactionID transaction ID, optional
     */
    sendTemplateSms(msisdn: string, templateID: string, templateParams: Dict, operatorCode: string, countryID: string, transactionID: string): Dict
  }
  /**
   * Client api for DCB connectors.
   * @example
   * ```ts
   *
   * import * as dcb from 'dcb';
   *
   * let client = dcb.newClient("instanceName");
   * let msisdn = "135xxxxxxxxx";
   * let resp = client.sendTemplateSms(msisdn, templateID, templateParams, operatorCode, countryID, transactionID);
   * ```
   * @param instanceName connector instance name
   * @return DCBClient a DCBClient corresponding to the name
   */
  export declare function newClient(instanceName: string): DCBClient
}

declare module 'crc32' {
  import * as buffer from 'buffer'
  /**
   * Checksum returns the CRC-32 checksum of data using the polynomial represented by the Table.
   *
   * @example
   * ```ts
   *
   * import * as crc32 from 'crc32';
   *
   * crc32.checksum(data,0xedb88320)
   *
   * ```
   * @param data CRC-32 Checked data
   * @param poly CRC-32 polynomial
   * @description any | buffer.Buffer variable is any type or buffer.Buffer type
   */
  export declare function checksum(data: any | buffer.Buffer, poly: number): number
  /**
   * ChecksumIEEE returns the CRC-32 checksum of data using the IEEE polynomial.
   *
   * @example
   * ```ts
   *
   * import * as crc32 from 'crc32';
   *
   * crc32.checksumIEEE(data)
   *
   * ```
   * @param data CRC-32 Checked data
   * @description any | buffer.Buffer variable is any type or buffer.Buffer type
   */
  export declare function checksumIEEE(data: any | buffer.Buffer): number
  /**
   * checksumCastagnoli returns the CRC-32 checksum of data using the Castagnoli's polynomial.
   *
   * @example
   * ```ts
   *
   * import * as crc32 from 'crc32';
   *
   * crc32.checksumCastagnoli(data)
   *
   * ```
   * @param data CRC-32 Checked data
   * @description any | buffer.Buffer variable is any type or buffer.Buffer type
   */
  export declare function checksumCastagnoli(data: any | buffer.Buffer): number
  /**
   * checksumKoopman returns the CRC-32 checksum of data using the Koopman's polynomial
   *
   * @example
   * ```ts
   *
   * import * as crc32 from 'crc32';
   *
   * crc32.checksumKoopman(data)
   *
   * ```
   * @param data CRC-32 Checked data
   * @description any | buffer.Buffer variable is any type or buffer.Buffer type
   */
  export declare function checksumKoopman(data: any | buffer.Buffer): number
  /**
   * ChecksumIEEE returns the CRC-32 checksum of data using the 0xD5828281 polynomial.
   *
   * @example
   * ```ts
   *
   * import * as crc32 from 'crc32';
   *
   * crc32.checksumQ(data)
   *
   * ```
   * @param data CRC-32 Checked data
   * @description any | buffer.Buffer variable is any type or buffer.Buffer type
   */
  export declare function checksumQ(data: any | buffer.Buffer): number
}

declare module 'casclient' {
  /**
   * CasClient client interface
   */
  export interface Client {
    /**
     * authentication
     *
     * @param casServerPrefix cas sever 登录接口url
     * @param service 当前请求资源url
     */
    authentication(casServerPrefix: string, service: string): void
    /**
     * check ticket interface
     *
     * @param casServerPrefix string cas server 验证ticket接口url
     * @param service 当前请求资源url(带ticket参数)
     */
    ticketValidation(casServerPrefix: string, service: string): void
    /**
     * get general token
     *
     * @param tenantId  tenant id
     * @return string
     */
    generalToken(tenantId: string): string
    /**
     * logout
     *
     * @param casServerPrefix string
     * @param service url
     */
    logout(casServerPrefix: string, service: string): void
    /**
     * Page redirect  to service
     *
     * @param service redirect url
     */
    redirect(service: string): void
  }
  /**
   * 创建cas客户端.
   */
  export declare function newClient(): Client
}

declare module 'multipart' {
  import { Buffer } from 'buffer'
  /**
   * multipart Writer interface
   */
  export interface MultiPartWriter {
    /**
     * get the Writer's boundary
     */
    boundary(): string
    /**
     * finish the multipart message and writes the trailing boundary end line to the output.
     */
    close(): void
    /**
     * get the Content-Type for an HTTP multipart/form-data with this Writer's Boundary.
     */
    formDataContentType(): string
    /**
     * set the boundary. setBoundary must be called before any parts are created.
     * @param boundary boundary separator
     */
    setBoundary(boundary: string): void
    /**
     * create form field, and then writes the given value
     * @param fieldname field name
     * @param value value
     */
    writeField(fieldname: string, value: string): void
    /**
     * write the mimeHeader data to the buffer
     * @param mimeHeader mime header
     * @param buf buffer
     */
    writeBuffer(mimeHeader: Object, buf: Buffer): void
    /**
     * get the buffer of the Writer
     */
    buffer(): Buffer
  }
  /**
   * @example
   * ```
   *
   * import * as http from 'http';
   * import * as mp from 'multipart';
   * import * as buffer from 'buffer';
   *
   * let w = mp.newWriter();
   *
   * let bytes = buffer.from("hello,中国");
   *
   * w.setBoundary("--ABC");
   *
   * let mimeHeader = {
   *   "Content-Disposition": ['form-data; name="upload_file"; filename="a.txt"'],
   *   "Content-Type": ['application/octet-stream']
   * }
   *
   * w.writeBuffer(mimeHeader, bytes);
   *
   * w.writeField("name", "Trump");
   * w.close();
   * let client = http.newClient();
   *
   * let req : http.Request = {
   *   data: w.buffer().bytes(),
   *   headers: {
   *       "Content-Type": w.formDataContentType(),
   *   }
   * }
   * let resp = client.post('ip', req);
   *
   * console.log("response = ", resp);
   * ```
   */
  export declare function newWriter(): MultiPartWriter
}

declare module 'rand' {
  /**
* get rand string
* @param size the length of the random number
*
* @returns string of random number
*
* @example
* ```ts
*
* import * as rand from "rand"
*
* let str =rand.random(5)
* ```

*/
  export declare function random(size: number): string
}

declare module 'taskplan' {
  export declare enum TaskType {
    Flow = 'FlowTask',
    Script = 'ScriptTask',
  }
  /**
   * The interval unit enumeration
   */
  export declare enum IntervalUnit {
    Minute = 'Minute',
    Hour = 'Hour',
    Day = 'Day',
    Month = 'Month',
  }
  /**
   *  The content for task plan that only executes once
   */
  export interface OneTimeTaskContent {
    /**
     * name of the task plan
     */
    name: string
    /**
     * specify the type of the task
     */
    taskType: TaskType
    /**
     * first schedule time, e.g. 2019-09-12 00:00:00
     */
    firstScheduleDate: string
    /**
     * flow name or script name
     */
    assetName: string
    /**
     * if corresponding flow or script has inputs, pass inputs map
     */
    inputs?: Dict
  }
  /**
   *  The content for task plan that executes multi-times
   */
  export interface MultiTimeTaskContent extends OneTimeTaskContent {
    /**
     * required, to set interval time unit
     */
    intervalUnit: IntervalUnit
    /**
     * required, task execute interval
     */
    scheduleInterval: number
  }
  /**
   * 创建一个只执行一次的定时任务，新建的任务模式是处于激活状态
   *
   * 在开启安全配置情况下，需要 '管理定时任务' 权限
   *
   * create new task plan which only executes once, created task plan is activated by default
   *
   * @example
   * ```ts
   * import * as tp from 'taskplan'
   * let id = tp.createOneTimeTask({
   *   name: "taskName",
   *   assetName: "scriptName",
   *   firstScheduleDate: "2019-09-10 00:00:00",
   *   taskType: tp.TaskType.Script,
   *   inputs: {
   *       foo: {
   *           bar: "xxxxxx"
   *       }
   *   }
   * })
   *
   * ```
   * @param content the content of task plan
   * @return id of new created task plan
   */
  export declare function createOneTimeTask(content: OneTimeTaskContent): string
  /**
   * 创建一个周期性定时任务，新建的任务模式是处于激活状态
   *
   * 在开启安全配置情况下，需要 '管理定时任务' 权限
   *
   * @example
   * ```ts
   * import * as tp from 'taskplan'
   * let id = tp.createMultiTimeTask({
   *   name: "taskName",
   *   assetName: "scriptName",
   *   firstScheduleDate: "2019-09-10 00:00:00",
   *   scheduleInterval: 1,
   *   intervalUnit: tp.IntervalUnit.Minute,
   *   taskType: tp.TaskType.Script,
   *   inputs: {
   *       foo: {
   *           bar: "xxxxxx"
   *       }
   *   }
   * })
   *
   * ```
   * @param content the content of task plan
   * @return id of new created task plan
   */
  export declare function createMultiTimeTask(content: MultiTimeTaskContent): string
  /**
   * 更新任务的输入，如果没有输入，则传入一个空的 map
   *
   * 在开启安全配置情况下，需要 '管理定时任务' 权限
   *
   * @example
   * ```ts
   * import * as tp from 'taskplan'
   * tp.updateTaskInputs("task_name", {
   *     foo: "apple",
   *     bar: 123,
   * })
   * ```
   *
   * @param taskName
   * @param inputs the inputs for corresponding flow or script
   */
  export declare function updateTaskInputs(taskName: string, inputs: Dict): void
  /**
   * 将一个任务设置成激活状态。 注意： 只允许激活周期性的定时任务
   *
   * 在开启安全配置情况下，需要 '管理定时任务' 权限
   *
   * activate a task, set the task status to Active. Notice: only activate multi-time task is allowed
   * @example
   * ```ts
   * import * as tp from 'taskplan'
   * tp.activateTask("task_name")
   * ```
   * @param taskName
   */
  export declare function activateTask(taskName: string): void
  /**
   * 将一个任务置成非状态。 注意：只允许冻结周期性的定时任务
   *
   * 在开启安全配置情况下，需要 '管理定时任务' 权限
   *
   * deactivate a task, set the task status to Suspend. Notice: only deactivate multi-time task is allowed
   * @example
   * ```ts
   * import * as tp from 'taskplan'
   * tp.deactivateTask("task_name")
   * ```
   * @param taskName
   */
  export declare function deactivateTask(taskName: string): void
  /**
   * 删除一个定时任务， 激活状态下的任务也是允许删除的。
   *
   * 在开启安全配置情况下，需要 '管理定时任务' 权限
   *
   * @example
   * ```ts
   * import * as tp from 'taskplan'
   * tp.deleteTask("task_name")
   * ```
   * @param taskName
   */
  export declare function deleteTask(taskName: string): void
}

declare module 'zip' {
  /**
   * any的值即字典中value的值支持byte[],string两种类型的数据
   */
  export interface ZipMap {
    [key: string]: any
  }
  /**
   * @example
   * ```ts
   *
   * import  * as zip from 'zip'
   *
   * import * as buffer from 'buffer'
   *
   * import * as text from 'text';
   *
   *  let bytes = text.bytes('I want to be binary');
   *
   *  let buff = buffer.from("some data");
   *
   *  let fileMap = {
   *
   *      "/testdir/test.txt": "this is the data in test.txt",
   *
   *      "/testdir/demo/bytes.txt": bytes,
   *
   *      "/testdir/demo/buff.txt": buff.bytes(),
   *
   *  }
   *
   * let strm = zip.compression(fileMap);
   * ```
   *
   * @param data
   *
   * @return []byte
   */
  export declare function compression(data: ZipMap): any
}

declare module 'native' {
  /**
   * native service instance interface
   */
  export interface ServiceInstance {
    /**
     * @param methodName The name of method to invoke under current service instance
     * @param input Input for the method
     */
    invoke(methodName: string, input: Dict): Dict
  }
  /**
   * get a native service instance by service name
   * @example
   * ```ts
   *
   * import * as native from 'native';
   *
   * // namespace is needed for the service name
   * let instance = native.getServiceInstance('nativeServiceName');
   * let params = {};
   * let res = instance.invoke('methodName', params);
   *
   * ```
   * @param serviceName
   */
  export declare function getServiceInstance(serviceName: string): ServiceInstance
}

declare module 'oauth' {
  export interface OauthClient {
    getCodeURL(): String
    getTokenURL(): String
  }
  export interface HandleAuthorize {
    /**
     * checkOauthClient
     * @example
     * ```ts
     * import * as oauth from oauth
     * ah=oauth.getAuthorizeHandle()
     * clientData = new Map()
     * clientData.set("client_id","sadsadasdsa")
     * clientData.set("redirectURI","xxx.com")
     *
     * let pass=ah.checkURL(clientData)
     * let code=ah.getAuthCode(clientData,userInfo)
     *
     * @param clientData  客户端请求的中的一些参数，例如scop,client_id,redirectURI,state等
     *
     */
    checkURL(clientData: clientDataFromApp): Boolean
    /**
     * checkOauthClient
     * @example
     * ```ts
     * import * as oauth from oauth
     * ah=oauth.getAuthorizeHandle()
     * let userInfo =new Map()
     * userInfo.set("name"，"jack")
     * userInfo.set("phone"，"158xxx")
     * let code=ah.getAuthCode(clientData,userInfo)
     * @param clientData  客户端请求的中的一些参数，例如scop,client_id,redirectURI,state等
     * @param userInfo 需要保存的授权用户的信息，例如用户名，电话，地址等
     */
    getAuthCode(clientData: clientDataFromApp, userInfo: Dict): string
  }
  /**
   * checkOauthClient
   * @example
   * ```ts
   * import * as oauth from oauth
   * ah=oauth.getAuthorizeHandle()
   * clientData = new Map()
   * clientData.set("client_id","sadsadasdsa")
   * clientData.set("redirectURI","xxx.com")
   * let userInfo =new Map()
   * userInfo.set("name"，"jack")
   * userInfo.set("phone"，"158xxx")
   *
   * let pass=ah.checkURL(clientData)
   * let code=ah.getAuthCode(clientData,userInfo)
   * ```
   *
   * @param clientData  客户端请求的中的一些参数，例如scop,client_id,redirectURI,state等
   * @param userInfo 需要保存的授权用户的信息，例如用户名，电话，地址等
   */
  export declare function getAuthorizeHandle(): HandleAuthorize
  export interface clientDataFromApp {
    client_id: string
    redirect_uri: string
    scope?: string
    state?: string
  }
  /**
   * 组装获取code的URL的参数
   * @example
   * ```ts
   * import * as oauth from 'oauth'
   * let codeConfPara: oauth.AuthCodeParameters = {
   *      client_id: "xxxxxx948484283fc25ba0a207ea7",
   *      scopes: ["read", "wride"],
   *      state: "ss",
   *      auth_url: "xxx.com/baas/auth/v1.0/oauth2/authorize",
   *      redirect_url: "xxx.com"
   *      }
   *```
   * @param client_id clientID
   * @param scopes  Authorization scopes,it is a list of string
   * @param redirect_url Redirect address
   * @param state state
   * @param auth_url  Apply for the address of the code from the oauth server
   */
  export interface AuthCodeParameters {
    client_id: string
    scopes: string[]
    redirect_url: string
    state: string
    auth_url: string
  }
  /**
   * 返回获取code的url
   * @example
   * ```ts
   * import * as oauth from 'oauth'
   * let codeConfPara: oauth.AuthCodeParameters = {
   *      client_id: "xxxxx48484283fc25ba0a207ea7",
   *      scopes: ["read", "wride"],
   *      state: "ss",
   *      auth_url: "xxx.com/baas/auth/v1.0/oauth2/authorize",
   *      redirect_url: "xxx.com"
   *      }
   * let authCodeUrl = oauth.getCodeURL(codeConfPara)
   * ```
   * @param client_id clientID
   * @param scopes  Authorization scopes,it is a list of string
   * @param redirect_url Redirect address
   * @param state state
   * @param auth_url  Apply for the address of the code from the oauth server
   */
  export declare function getCodeURL(paras: AuthCodeParameters): String
  /**
   * 获取token的参数
   * @example
   * let tokenConfPara:oauth.AuthTokenParameters ={
   *  client_id: "xxxxxx8484283fc25ba0a207ea7",
   *  client_secret: "xxxxxxxxxxxxx",
   *  redirect_url:"xxx.com",
   *  scopes:["read", "write"],
   *  state:"ss",
   *  code: "xxxx25ba0a207e",
   *  token_url:"xxx.com/baas/auth/v1.0/oauth2/token",
   *  auth_style: oauth.AuthStye.AuthStyleInParams,
   *  opts: {
   *          "appid":"xxxxfa6fde11f686edbe0"
   *      }
   *   }
   * @param client_id clientID
   * @param client_secret clientSecret
   * @param scopes  Authorization scopes,it is a list of string
   * @param redirect_url Redirect address
   * @param state state
   * @param token_url  Apply for the address of the token from the oauth server
   * @param auth_style How to place the client_id and client_secret parameters when initiating a request to obtain a token,in header or in url Params
   * @param code The code returned by the first step request
   */
  export interface AuthTokenParameters {
    client_id: string
    client_secret: string
    scopes?: string[]
    redirect_url: string
    state?: string
    token_url: string
    auth_style: AuthStye
    code: string
    opts?: Dict
  }
  /**
   * 发起获取token的请求时client_id和client_secret参数放置的方式
   * @param AuthStyleInParams in url param
   * @param AuthStyleInHeader in header
   */
  export declare enum AuthStye {
    AuthStyleInParams = 1,
    AuthStyleInHeader = 2,
  }
  export interface Token {
    access_token: string
    token_type: string
    refresh_token: string
    expiry: Datetime
    raw: any
  }
  /**
   * 获取token
   * @example
   * @example
   * ```ts
   * let code = ctx.getHttp().request.queries["code"]
   * let tokenConfPara:oauth.AuthTokenParameters ={
   *  client_id: "xxxx8484283fc25ba0a207ea7",
   *  client_secret: "xxxxxxxxxxxxx",
   *  redirect_url:"xxx.com",
   *  scopes:["read", "write"],
   *  state:"ss",
   *  token_url:"xxx.com/baas/auth/v1.0/oauth2/token",
   *  auth_style: oauth.AuthStye.AuthStyleInParams,
   *  code: code,
   *  opts: {
   *          "appid":"xxxxa6fde11f686edbe0"
   *      }
   *   }
   * let token=oauth.getToken(tokenConfPara)
   * ```
   *
   * @param client_id clientID
   * @param client_secret clientSecret
   * @param scopes  Authorization scopes,it is a list of string
   * @param redirect_url Redirect address
   * @param state state
   * @param token_url  Apply for the address of the token from the oauth server
   * @param auth_style How to place the client_id and client_secret parameters when initiating a request to obtain a token,in header or in url Params
   */
  export declare function getToken(paras: AuthTokenParameters): Token
}

declare module 'signer' {
  declare function urlEncode(str: any): any
  declare function HttpRequest(method: string, url: string, headers?: any, body?: any): void
  declare function findHeader(r: any, header: any): any
  /**
   * @return {string}
   */
  declare function CanonicalRequest(r: any, signedHeaders: any): string
  declare function SignedHeaders(r: any): any[]
  /**
   * @return {string}
   */
  declare function StringToSign(canonicalRequest: any, t: any): string
  declare function Signer(): void
  /**
   * Get ak/sk signature to access HUAWEI CLOUD APIs
   * @example
   * ```ts
   *
   * import * as signer from 'signer';
   *
   * var sig = new signer.Signer(); //Set the AK/SK to sign and authenticate the request.
   * sig.Key = "";
   * sig.Secret = "";
   *
   * let url = "";
   * let body = `{}`;
   *
   * var r = new signer.HttpRequest("GET", url);
   * r.headers = {
   *     "Content-Type": "application/json",
   *     "X-Sdk-Date": "20201024T065239Z",
   * };
   *
   * r.body = body;
   * var opt = sig.Sign(r);
   *
   * console.log("option = ", opt);
   * let client = http.newClient({});
   *
   * let option: http.Request = {
   *      headers: opt.headers,
   *      data: body,
   *    }
   * let resp = client.post(url, option)
   * ```
   */
  export { HttpRequest, Signer, urlEncode, findHeader, SignedHeaders, CanonicalRequest, StringToSign }
}

declare module 'msgtemplate' {
  /**
   * Copyright (c) Huawei Technologies Co., Ltd. 2016-2020. All rights reserved.
   *
   */
  /**
   * Get 5G message template
   * @example
   * ```ts
   *
   * import * as msgtemplate from 'msgtemplate';
   *
   * let res = msgtemplate.getMessageTemplate("5GTemplateName")
   * console.log(res)
   * ```
   * @param name 5G template name
   */
  export declare function getMessageTemplate(name: string): Dict
}

declare module 'lock' {
  /**
   * 锁参数
   */
  export interface lockOption {
    /**
     * 锁定时长（秒），如果不指定或者指定为0，默认为 30 秒。 最长锁定时长为 120 秒
     */
    lockTimeInSeconds?: number
    /**
     * 最大等待时长（秒），不指定或者指定为0时，如果获取不了锁则直接失败； 不为0则等待直到获取锁或者指定时长结束。
     */
    maxWaitTimeInSeconds?: number
  }
  /**
   * 回调函数
   */
  export declare type callbackFn = () => void
  /**
   * 分布式锁管理
   */
  export interface LockManager {
    /**
     * 查看键值是否被锁
     *
     * @param key 键值
     */
    isLocked(key: string): boolean
    /**
     * 对指定的键值进行上锁操作，成功则执行回调函数，执行完回调函数后释放锁。
     *
     * @param key 键值
     * @param callback 回调函数
     * @param option 分布锁参数 {@link lockOption}
     */
    lock(key: string, callback: callbackFn, option?: lockOption): void
  }
  /**
   * 创建一个锁管理对象
   *
   * @example
   * ```ts
   * import * as lock from 'lock';
   *
   * let mng = lock.newLockManager();
   * let key = "locktest";
   *
   * // isLocked 方法判断指定的 key 是否被锁定
   * console.log(`${key} is locked:`, mng.isLocked(key));
   *
   * try {
   *     // newLocker 方法尝试获取指定的key的锁， 成功则执行 回调函数。
   *     // 获取失败则抛异常
   *     mng.lock(key, function () {
   *         console.log("do something while get lock");
   *     }, { lockTimeInSeconds: 60, maxWaitTimeInSeconds: 0 });
   * } catch (e) {
   *     console.log(e);
   * }
   * ```
   */
  export declare function newLockManager(): LockManager
}

declare module 'welink' {
  import TaskData = __bingo_builtin.TaskData
  /**
* @example
*
* ```ts
*
// Here's your code.
import * as welink from "welink";

const client = welink.newClient();
//let result = client.user.queryWeLinkUserInfoByID("lisixxxx1");

//console.log(client.user.queryWeLinkUserInfoByID("lisixxxx1"));
//let result = client.user.queryUserDomainScopes("lisixxxx1");
// let result = client.user.queryUserDomainRoles("lisixxxx1");
let data = {
  "taskId": "202008fangiia3",
  "taskTitle": "周五上午请假",
  "userId": "xxxxxxxxxx1",
  "userNameCn": "lisi",
  "userNameEn": "李四",
  "detailsUrl": "https://xxx/url1",
  "detailsUrlPc": "https://xxx/url2",
  "appName": "请假",
  "applicantUserId": "xxxxxxxxxx2",
  "applicantUserNameCn": "张三",
  "applicantUserNameEn": "zhangsan",
  "isMsg": 1,
  "isShowApplicantUserName": true,
  "applicantId": "202008fangjia1",
  "businessCode": "202101111556shenpibianma"

}
//let result = client.task.addTask(data);
// let result = client.task.updateTask("202008fangiia3", "xxxxxxxxxx1", "张三", "zhangsan");
let result = client.task.delTask("202008fangiia3");
console.log(result)
* ```
*/
  export declare function newClient(): WeLinkClientImpl
  interface WeLinkTask {
    /**
     * addTask add a task for welink user
     * @param data TaskData
     */
    addTask(data: TaskData): Map<string, any>
    /**
     * update a task to next welink user
     * @param taskId string
     * @param userId string
     * @param userNameCn string
     * @param userNameEn string
     */
    updateTask(taskId: string, userId: string, userNameCn: string, userNameEn: string): Map<string, any>
    /**
     * update a task to next welink user by portalUserId
     * @param taskId string
     * @param portalUserID string
     */
    updateTaskByPortalUserID(taskId: string, portalUserID: string): Map<string, any>
    /**
     * delete a task
     * @param taskId string
     */
    delTask(taskId: string): Map<string, any>
  }
  interface WeLinkUser {
    /**
     * query welink user detail by current portal user
     */
    queryWeLinkUserInfo(): Map<string, any>
    /**
     * query user detail by weLinkUserId
     * @param weLinkUserId
     */
    queryWeLinkUserInfoByID(weLinkUserId: string): Map<string, any>
    /**
     * query user domain appcube role by weLinkUserId
     * @param weLinkUserId
     */
    queryUserDomainScopes(weLinkUserId: string): Array<string>
    /**
     * query user domain roles by weLinkUserId
     * @param weLinkUserId
     */
    queryUserDomainRoles(weLinkUserId: string): Array<string>
  }
  declare class WeLinkClientImpl {
    task: WeLinkTask
    user: WeLinkUser
    constructor()
  }
  export {}
}

declare module 'limit' {
  export declare enum LimitLevel {
    Second = 0,
    Minute = 1,
  }
  export interface Limiter {
    limit(key: string, limitLevel: LimitLevel, limits: number): boolean
  }
  export declare function newSimpleLimiter(): Limiter
}

declare module 'modelartspro' {
  export interface IdentifierInfo {
    [id: string]: any
  }
  /**
   * ModelArtsPro Connector client interface
   */
  export interface ModelArtsProClient {
    /**
     * 根据base64图片进行ocr识别
     * @param image Base64后的字符串
     */
    customOCRWithImage(image: string, isMultiTemplate: boolean, modelID: string): IdentifierInfo
    /**
     * 根据图片url进行ocr识别
     * @param url 图片地址
     */
    customOCRWithURL(url: string, isMultiTemplate: boolean, modelID: string): IdentifierInfo
    /**
     * 根据text文本进行nlp处理
     */
    customNLPWithText(text: string, apigCode: string, modelID: string): IdentifierInfo
  }
  /**
   * Client api for ModelArtsPro client.
   * @example
   * ```ts
   *
   * import * modelartspro from 'modelartspro';
   *
   * let client = modelartspro.newClient(instanceName);
   * // 文字识别套件
   * let resp = client.customerOCRWithURL(url, isMultiTemplate, modelID);
   * let resp1 = client.customerOCRWithImage(image, isMultiTemplate, modelID);
   * // 自然语言处理套件
   * let resp2 = client.customNLPWithText(text, apigCode, modelID);
   * ```
   * @param name connector instance name
   */
  export declare function newClient(name: string): ModelArtsProClient
}

declare module 'modelarts' {
  export interface IdentifierInfo {
    [id: string]: any
  }
  /**
   * ModelArts Connector client interface
   */
  export interface ModelArtsClient {
    /**
     * 根据base64进行图片识别
     * @param image Base64后的字符串
     */
    modelartsWithImage(image: string, apigCode: string, modelID: string): IdentifierInfo
    /**
     * 根据图片url进行图片识别
     * @param url 图片地址
     */
    modelArtsWithURL(url: string, apigCode: string, modelID: string): IdentifierInfo
    /**
     * 根据text文本进行nlp处理
     */
    modelartsWithText(text: string, apigCode: string, modelID: string): IdentifierInfo
  }
  /**
   * Client api for ModelArts client.
   * @example
   * ```ts
   *
   * import * modelarts from 'modelarts';
   *
   * let client = modelarts.newClient(instanceName);
   * let resp = client.modelartsWithImage(url, apigCode, modelID);
   * let resp1 = client.modelArtsWithURL(image, apigCode, modelID);
   * let resp2 = client.modelartsWithText(text, apigCode, modelID);
   * ```
   * @param name connector instance name
   */
  export declare function newClient(name: string): ModelArtsClient
}

declare module 'aienable' {
  export interface AIEnableClient {
    /**
     * @param restaction input
     * @return recognize license plate result
     */
    recognizeLicensePlate(input: Dict): Dict
    /**
     * @param restaction input
     * @return vehicle detection result
     */
    vehicleDetection(input: Dict): Dict
    /**
     * @param restaction input
     * @return helmet detection result
     */
    helmetDetection(input: Dict): Dict
    /**
     * @param restaction input
     * @return face detection result
     */
    faceDetection(input: Dict): Dict
    /**
     * @param restaction input
     * @return face and card comparision result
     */
    faceAndCardComparison(input: Dict): Dict
    /**
     * @param restaction input
     * @return face and face comparision result
     */
    faceAndFaceComparison(input: Dict): Dict
    /**
     * @param restaction input
     * @return silent liveness detection result
     */
    silentLivenessDetection(input: Dict): Dict
    /**
     * @param restaction input
     * @return dynamic liveness detection result
     */
    dynamicLivenessDetection(input: Dict): Dict
    /**
     * @param name connector instance name
     * @param restaction input
     * @return predict result
     */
    predict(operation: string, input: Dict): Dict
    /**
     * @param name connector instance name
     * @param restaction input
     * @return recommend result
     */
    recommend(operation: string, input: Dict): Dict
    /**
     * @param name connector instance name
     * @param restaction input
     * @return workorder result
     */
    workorder(operation: string, input: Dict): Dict
  }
  /**
   * Client api for AIEnable client.
   * @example
   * ```ts
   * import * as aienable from 'aienable';
   *
   * var input: Dict = {
   *                  "images":
   *                      [{"type": "url",
   *                           "image": "https://xxx/xxx.jpg"
   *                        }, ]
   *                     }
   *   // 车牌识别
   *  let client1 = aienable.newClient("license_plate_recognition")
   *  return client1.recognizeLicensePlate(input)
   *
   *  // 车辆检测
   *  let client2 = aienable.newClient("vehicle_detection")
   *  return client2.vehicleDetection(input)
   *
   *  // 安全帽检测
   *  let client3 = aienable.newClient("helmet_detection")
   *  return client3.helmetDetection(input)
   *
   *  // 人脸检测
   *  let client4 = aienable.newClient("face_detection")
   *  return client4.faceDetection(input)
   *
   *  // 静默活体检测
   *  let client7 = aienable.newClient("silent_liveness_detection")
   *  return client7.silentLivenessDetection(input)
   *
   * var input: Dict = {
   *                  "images":
   *                      [{"type": "url",
   *                           "image": "https://xxx/xxx.jpg"
   *                        },
   *                        {"type": "url",
   *                           "image": "https://xxx/xxx.jpg"
   *                        }]
   *                     }
   *  // 人证比对
   *  let clien5 = aienable.newClient("face_and_card_comparison")
   *  return client5.faceAndCardComparison(input)
   *
   *  // 人脸比对
   *  let client6 = aienable.newClient("face_and_face_comparison")
   *  return client6.faceAndFaceComparison(input)
   *
   * var input: Dict = {
   *                  "videos":
   *                      [{"type": "url",
   *                           "video": "https://xxx/xxx.mp4"
   *                        }]
   *                     }
   *  // 动态活体检测
   *  let client8 = aienable.newClient("dynamic_liveness_detection")
   *  return client8.dynamicLivenessDetection(input)
   *
   *
   * var name = "recommendationTest"
   * var dataInputs = {
   *               "USER_IDS": ["000379cdec625522490c315e70c7a9fb"],
   *               "N": 10
   *           }
   *  // 预测服务
   * let client9 = aienable.newClient("prediction_services")
   * return client9.predict(name, dataInputs)
   *
   *
   * var name = "purchase_intension"
   * var dataInputs = {
   *               "ai_kit__AdministrativeDuration__CST": 0,
   *               "ai_kit__Administrative__CST": 0,
   *               "ai_kit__BounceRates__CST": 0,
   *               "ai_kit__Browser__CST": 9,
   *               "ai_kit__InformationalDuration__CST": 0,
   *               "ai_kit__Informational__CST": 0,
   *               "ai_kit__Month__CST": "Nov",
   *               "ai_kit__OperatingSystems__CST": 1,
   *               "ai_kit__PageValues__CST": 0,
   *               "ai_kit__ProductRelatedDuration__CST": 242.75,
   *               "ai_kit__ProductRelated__CST": 16,
   *               "ai_kit__Region__CST": 2,
   *               "ai_kit__Revenue__CST": "FALSE",
   *               "ai_kit__SpecialDay__CST": 0,
   *               "ai_kit__TrafficType__CST": 11,
   *               "ai_kit__VisitorType__CST": "Returning_Visitor",
   *               "ai_kit__Weekend__CST": true,
   *               "ai_kit__ExitRates__CST": 0.004910714
   *           }
   *  // 推荐服务
   *  let client10 = aienable.newClient("recommendation_services")
   *  return client10.recommend(name, dataInputs)
   * ```
   * @param name connector instance name
   */
  export declare function newClient(name: string): AIEnableClient
}

declare module 'bpmmeta' {
  import { ConditionOption } from 'bp'
  export interface BPMDefinitionClient {
    /**
     * 创建一个bpm流程定义
     * @example
     * ```ts
     * import * as bpmmeta from 'bpmmeta';
     * let client = bpmmeta.newBPMDefinitionClient();
     * client.create({
     *     "name":"bpmNameTest",
     *      "startEvents": [
     *      {
     *      "connector": "userTask",
     *      "connectorPoint": "{\"fromPort\":\"R1\",\"toPort\":\"L1\",\"joints\":[\"174 80\",\"238 80\",\"238 75\"]}",
     *      "label": "Start",
     *      "locationX": 125,
     *      "locationY": 80,
     *      "name": "start",
     *      "type": "Start",
     *      "startType": "",
     *      "renderType": "",
     *      "render": "",
     *      "document": "",
     *      "description": ""
     *      }
     *  ],
     *  ...
     * });
     * ```
     *
     * @param data bpm definition data
     * @return include bpm definition compile info and record id
     */
    create(data: BPMMetadataDefinitionDetail): BPMMetaDataCompileInfo
    /**
     * 创建一个新的bpm流程定义版本
     * @example
     * ```ts
     * import * as bpmmeta from 'bpmmeta';
     * let client = bpmmeta.newBPMDefinitionClient();
     * client.createNewVersion({
     *     "name":"bpmNameTest",
     *      "startEvents": [
     *      {
     *      "connector": "userTask",
     *      "connectorPoint": "{\"fromPort\":\"R1\",\"toPort\":\"L1\",\"joints\":[\"174 80\",\"238 80\",\"238 75\"]}",
     *      "label": "Start",
     *      "locationX": 125,
     *      "locationY": 80,
     *      "name": "start",
     *      "type": "Start",
     *      "startType": "",
     *      "renderType": "",
     *      "render": "",
     *      "document": "",
     *      "description": ""
     *      }
     *  ],
     *  ...
     * });
     * ```
     *
     * @param data bpm definition data
     * @return include bpm definition compile info and record id
     */
    createNewVersion(data: BPMMetadataDefinitionDetail): BPMMetaDataCompileInfo
    /**
     * 查询bpm流程定义列表
     * @example
     * ```ts
     * import * as bpmmeta from 'bpmmeta';
     * let client = bpmmeta.newBPMDefinitionClient();
     * client.queryList({
     *     "like":true,
     *     "name":"BpmName",
     *     "limit":10,
     *     "skip":0,
     *     "active":true
     * })
     * ```
     * @param paramMap
     */
    queryList(): BPMMetadataDefinition[]
    queryByCondition(condition?: ConditionOption): BPMMetadataDefinition[]
    /**
     * 根据id查询bpm定义
     * @example
     * ```ts
     * import * as bpmmeta from 'bpmmeta';
     * let client = bpmmeta.newBPMDefinitionClient()
     * let res = client.queryByID(defId)
     * ```
     * @param defID bpm definition id
     */
    queryByID(defID: string): BPMMetadataDefinitionDetail
    /**
     * 激活指定的流程定义
     * @example
     * ```ts
     * import * as bpmmeta from 'bpmmeta';
     * let client = bpmmeta.newBPMDefinitionClient()
     * let res = client.activate(defId)
     * ```
     * @param defID bpm definition id
     */
    activate(defID: string): void
    /**
     * 禁用指定的流程定义
     * @example
     * ```ts
     * import * as bpmmeta from 'bpmmeta';
     * let client = bpmmeta.newBPMDefinitionClient()
     * let res = client.deactivate(defId)
     * ```
     * @param defID bpm definition id
     */
    deactivate(defID: string): void
    /**
     * 更新指定的流程定义
     * @example
     * ```ts
     * import * as bpmmeta from 'bpmmeta';
     * let client = bpmmeta.newBPMDefinitionClient()
     * let res = client.update(defId,{
     *     "name":"bpmNameTest",
     *      "startEvents": [
     *      {
     *      "connector": "userTask",
     *      "connectorPoint": "{\"fromPort\":\"R1\",\"toPort\":\"L1\",\"joints\":[\"174 80\",\"238 80\",\"238 75\"]}",
     *      "label": "Start",
     *      "locationX": 125,
     *      "locationY": 80,
     *      "name": "start",
     *      "type": "Start",
     *      "startType": "",
     *      "renderType": "",
     *      "render": "",
     *      "document": "",
     *      "description": ""
     *      }
     *  ],
     *  ...
     * })
     * ```
     * @param defID bpm definition id
     * @param data bpm definition data
     */
    update(defID: string, data: BPMMetadataDefinitionDetail): BPMMetaDataCompileInfo
    /**
     * 删除指定的流程定义
     * @example
     * ```ts
     * import * as bpmmeta from 'bpmmeta';
     * let client = bpmmeta.newBPMDefinitionClient()
     * let res = client.delete(defId)
     * ```
     * @param defID bpm definition id
     */
    delete(defID: string): number
  }
  export declare function newBPMDefinitionClient(): BPMDefinitionClient
}

declare module 'event' {
  export interface EventMetadataClient {
    /**
     * 前台元数据锁定操作
     * @example
     * ```ts
     * import * as eventClient from 'event';
     * let client = eventClient.newEventMetadataClient();
     * client.metadataLock("BusinessProcess","001L000000ruvmA2KCno")
     *
     * @param metaType  operator metadata type like BusinessProcess
     * @param metaID    the metadata id
     */
    metadataLock(metaType: string, metaID: string): void
    /**
     * 前台元数据解除锁定操作
     * @example
     * ```ts
     * import * as eventClient from 'event';
     * let client = eventClient.newEventMetadataClient();
     * client.metadataUnlock("BusinessProcess","001L000000ruvmA2KCno")
     *
     * @param metaType  operator metadata type like BusinessProcess
     * @param metaID    the metadata id
     */
    metadataUnlock(metaType: string, metaID: string): void
  }
  export declare function newEventMetadataClient(): EventMetadataClient
}

declare module 'editer' {
  export interface EditerLockClient {
    /**
     * 查询元数据编辑锁状态操作
     * @example
     * ```ts
     * import * as editerClient from 'editer';
     * let client = editerClient.newEditerLockClient();
     * client.editerLockState("bp","001L000000ruvmA2KCno")
     *
     * @param editerType  editer lock type like bp
     * @param id  the editer lock source id
     */
    editerLockState(editerType: string, id: string): EditerLockInfo
    /**
     * 元数据编辑锁的锁定操作
     * @example
     * ```ts
     * import * as editerClient from 'editer';
     * let client = editerClient.newEditerLockClient();
     * client.editerLock("bp","001L000000ruvmA2KCno")
     *
     * @param editerType  editer lock type like bp
     * @param id  the editer lock source id
     */
    editerLock(editerType: string, id: string): EditerLockInfo
    /**
     * 元数据编辑锁的刷新操作
     * @example
     * ```ts
     * import * as editerClient from 'editer';
     * let client = editerClient.newEditerLockClient();
     * client.refreshLock("bp","001L000000ruvmA2KCno")
     *
     * @param editerType  editer lock type like bp
     * @param id  the editer lock source id
     */
    refreshLock(editerType: string, id: string): boolean
    /**
     * 元数据编辑锁的解锁操作
     * @example
     * ```ts
     * import * as editerClient from 'editer';
     * let client = editerClient.newEditerLockClient();
     * client.editerUnlock("bp","001L000000ruvmA2KCno")
     *
     * @param editerType  editer lock type like bp
     * @param id  the editer lock source id
     */
    editerUnlock(editerType: string, id: string): void
    /**
     * 查询多个元数据编辑锁的状态操作
     * @example
     * ```ts
     * import * as editerClient from 'editer';
     * let client = editerClient.newEditerLockClient();
     * client.editerLocksState("bp",["001L000000ruvmA2KCno"])
     *
     * @param editerType  editer lock type like bp
     * @param id  the editer lock source id
     */
    editerLocksState(editerType: string, ids: string[]): EditerLockInfo[]
    /**
     * 元数据编辑锁的强制解锁操作
     * @example
     * ```ts
     * import * as editerClient from 'editer';
     * let client = editerClient.newEditerLockClient();
     * client.editerForceUnlock("bp","001L000000ruvmA2KCno")
     *
     * @param editerType  editer lock type like bp
     * @param id  the editer lock source id
     */
    editerForceUnlock(editerType: string, id: string): EditerLockInfo
  }
  export declare function newEditerLockClient(): EditerLockClient
}
