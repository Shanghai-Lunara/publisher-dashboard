/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.github = (function() {

    var github = {};

    github.com = (function() {

        var com = {};

        com.nevercase = (function() {

            var nevercase = {};

            nevercase.publisher = (function() {

                var publisher = {};

                publisher.pkg = (function() {

                    var pkg = {};

                    pkg.types = (function() {

                        var types = {};

                        types.CompleteStepRequest = (function() {

                            function CompleteStepRequest(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            CompleteStepRequest.prototype.namespace = "";
                            CompleteStepRequest.prototype.groupName = "";
                            CompleteStepRequest.prototype.runnerName = "";
                            CompleteStepRequest.prototype.step = null;

                            CompleteStepRequest.create = function create(properties) {
                                return new CompleteStepRequest(properties);
                            };

                            CompleteStepRequest.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                                    writer.uint32(10).string(message.namespace);
                                if (message.groupName != null && Object.hasOwnProperty.call(message, "groupName"))
                                    writer.uint32(18).string(message.groupName);
                                if (message.runnerName != null && Object.hasOwnProperty.call(message, "runnerName"))
                                    writer.uint32(26).string(message.runnerName);
                                if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                                    $root.github.com.nevercase.publisher.pkg.types.Step.encode(message.step, writer.uint32(34).fork()).ldelim();
                                return writer;
                            };

                            CompleteStepRequest.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            CompleteStepRequest.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.CompleteStepRequest();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.namespace = reader.string();
                                        break;
                                    case 2:
                                        message.groupName = reader.string();
                                        break;
                                    case 3:
                                        message.runnerName = reader.string();
                                        break;
                                    case 4:
                                        message.step = $root.github.com.nevercase.publisher.pkg.types.Step.decode(reader, reader.uint32());
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            CompleteStepRequest.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            CompleteStepRequest.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.namespace != null && message.hasOwnProperty("namespace"))
                                    if (!$util.isString(message.namespace))
                                        return "namespace: string expected";
                                if (message.groupName != null && message.hasOwnProperty("groupName"))
                                    if (!$util.isString(message.groupName))
                                        return "groupName: string expected";
                                if (message.runnerName != null && message.hasOwnProperty("runnerName"))
                                    if (!$util.isString(message.runnerName))
                                        return "runnerName: string expected";
                                if (message.step != null && message.hasOwnProperty("step")) {
                                    var error = $root.github.com.nevercase.publisher.pkg.types.Step.verify(message.step);
                                    if (error)
                                        return "step." + error;
                                }
                                return null;
                            };

                            return CompleteStepRequest;
                        })();

                        types.CompleteStepResponse = (function() {

                            function CompleteStepResponse(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            CompleteStepResponse.create = function create(properties) {
                                return new CompleteStepResponse(properties);
                            };

                            CompleteStepResponse.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                return writer;
                            };

                            CompleteStepResponse.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            CompleteStepResponse.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.CompleteStepResponse();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            CompleteStepResponse.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            CompleteStepResponse.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                return null;
                            };

                            return CompleteStepResponse;
                        })();

                        types.Group = (function() {

                            function Group(properties) {
                                this.runners = [];
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            Group.prototype.runners = $util.emptyArray;

                            Group.create = function create(properties) {
                                return new Group(properties);
                            };

                            Group.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.runners != null && message.runners.length)
                                    for (var i = 0; i < message.runners.length; ++i)
                                        $root.github.com.nevercase.publisher.pkg.types.RunnerInfo.encode(message.runners[i], writer.uint32(18).fork()).ldelim();
                                return writer;
                            };

                            Group.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            Group.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.Group();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 2:
                                        if (!(message.runners && message.runners.length))
                                            message.runners = [];
                                        message.runners.push($root.github.com.nevercase.publisher.pkg.types.RunnerInfo.decode(reader, reader.uint32()));
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            Group.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            Group.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.runners != null && message.hasOwnProperty("runners")) {
                                    if (!Array.isArray(message.runners))
                                        return "runners: array expected";
                                    for (var i = 0; i < message.runners.length; ++i) {
                                        var error = $root.github.com.nevercase.publisher.pkg.types.RunnerInfo.verify(message.runners[i]);
                                        if (error)
                                            return "runners." + error;
                                    }
                                }
                                return null;
                            };

                            return Group;
                        })();

                        types.ListGroupNameRequest = (function() {

                            function ListGroupNameRequest(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            ListGroupNameRequest.prototype.namespace = "";

                            ListGroupNameRequest.create = function create(properties) {
                                return new ListGroupNameRequest(properties);
                            };

                            ListGroupNameRequest.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                                    writer.uint32(10).string(message.namespace);
                                return writer;
                            };

                            ListGroupNameRequest.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            ListGroupNameRequest.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.ListGroupNameRequest();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.namespace = reader.string();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            ListGroupNameRequest.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            ListGroupNameRequest.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.namespace != null && message.hasOwnProperty("namespace"))
                                    if (!$util.isString(message.namespace))
                                        return "namespace: string expected";
                                return null;
                            };

                            return ListGroupNameRequest;
                        })();

                        types.ListGroupNameResponse = (function() {

                            function ListGroupNameResponse(properties) {
                                this.items = [];
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            ListGroupNameResponse.prototype.items = $util.emptyArray;

                            ListGroupNameResponse.create = function create(properties) {
                                return new ListGroupNameResponse(properties);
                            };

                            ListGroupNameResponse.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.items != null && message.items.length)
                                    for (var i = 0; i < message.items.length; ++i)
                                        writer.uint32(10).string(message.items[i]);
                                return writer;
                            };

                            ListGroupNameResponse.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            ListGroupNameResponse.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.ListGroupNameResponse();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        if (!(message.items && message.items.length))
                                            message.items = [];
                                        message.items.push(reader.string());
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            ListGroupNameResponse.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            ListGroupNameResponse.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.items != null && message.hasOwnProperty("items")) {
                                    if (!Array.isArray(message.items))
                                        return "items: array expected";
                                    for (var i = 0; i < message.items.length; ++i)
                                        if (!$util.isString(message.items[i]))
                                            return "items: string[] expected";
                                }
                                return null;
                            };

                            return ListGroupNameResponse;
                        })();

                        types.ListNamespaceRequest = (function() {

                            function ListNamespaceRequest(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            ListNamespaceRequest.create = function create(properties) {
                                return new ListNamespaceRequest(properties);
                            };

                            ListNamespaceRequest.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                return writer;
                            };

                            ListNamespaceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            ListNamespaceRequest.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.ListNamespaceRequest();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            ListNamespaceRequest.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            ListNamespaceRequest.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                return null;
                            };

                            return ListNamespaceRequest;
                        })();

                        types.ListNamespaceResponse = (function() {

                            function ListNamespaceResponse(properties) {
                                this.items = [];
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            ListNamespaceResponse.prototype.items = $util.emptyArray;

                            ListNamespaceResponse.create = function create(properties) {
                                return new ListNamespaceResponse(properties);
                            };

                            ListNamespaceResponse.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.items != null && message.items.length)
                                    for (var i = 0; i < message.items.length; ++i)
                                        writer.uint32(10).string(message.items[i]);
                                return writer;
                            };

                            ListNamespaceResponse.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            ListNamespaceResponse.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.ListNamespaceResponse();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        if (!(message.items && message.items.length))
                                            message.items = [];
                                        message.items.push(reader.string());
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            ListNamespaceResponse.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            ListNamespaceResponse.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.items != null && message.hasOwnProperty("items")) {
                                    if (!Array.isArray(message.items))
                                        return "items: array expected";
                                    for (var i = 0; i < message.items.length; ++i)
                                        if (!$util.isString(message.items[i]))
                                            return "items: string[] expected";
                                }
                                return null;
                            };

                            return ListNamespaceResponse;
                        })();

                        types.ListRecordsRequest = (function() {

                            function ListRecordsRequest(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            ListRecordsRequest.prototype.namespace = "";
                            ListRecordsRequest.prototype.groupName = "";
                            ListRecordsRequest.prototype.runnerName = "";
                            ListRecordsRequest.prototype.page = 0;
                            ListRecordsRequest.prototype.length = 0;
                            ListRecordsRequest.prototype.isVersion = 0;

                            ListRecordsRequest.create = function create(properties) {
                                return new ListRecordsRequest(properties);
                            };

                            ListRecordsRequest.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                                    writer.uint32(10).string(message.namespace);
                                if (message.groupName != null && Object.hasOwnProperty.call(message, "groupName"))
                                    writer.uint32(18).string(message.groupName);
                                if (message.runnerName != null && Object.hasOwnProperty.call(message, "runnerName"))
                                    writer.uint32(26).string(message.runnerName);
                                if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                                    writer.uint32(32).int32(message.page);
                                if (message.length != null && Object.hasOwnProperty.call(message, "length"))
                                    writer.uint32(40).int32(message.length);
                                if (message.isVersion != null && Object.hasOwnProperty.call(message, "isVersion"))
                                    writer.uint32(48).int32(message.isVersion);
                                return writer;
                            };

                            ListRecordsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            ListRecordsRequest.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.ListRecordsRequest();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.namespace = reader.string();
                                        break;
                                    case 2:
                                        message.groupName = reader.string();
                                        break;
                                    case 3:
                                        message.runnerName = reader.string();
                                        break;
                                    case 4:
                                        message.page = reader.int32();
                                        break;
                                    case 5:
                                        message.length = reader.int32();
                                        break;
                                    case 6:
                                        message.isVersion = reader.int32();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            ListRecordsRequest.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            ListRecordsRequest.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.namespace != null && message.hasOwnProperty("namespace"))
                                    if (!$util.isString(message.namespace))
                                        return "namespace: string expected";
                                if (message.groupName != null && message.hasOwnProperty("groupName"))
                                    if (!$util.isString(message.groupName))
                                        return "groupName: string expected";
                                if (message.runnerName != null && message.hasOwnProperty("runnerName"))
                                    if (!$util.isString(message.runnerName))
                                        return "runnerName: string expected";
                                if (message.page != null && message.hasOwnProperty("page"))
                                    if (!$util.isInteger(message.page))
                                        return "page: integer expected";
                                if (message.length != null && message.hasOwnProperty("length"))
                                    if (!$util.isInteger(message.length))
                                        return "length: integer expected";
                                if (message.isVersion != null && message.hasOwnProperty("isVersion"))
                                    if (!$util.isInteger(message.isVersion))
                                        return "isVersion: integer expected";
                                return null;
                            };

                            return ListRecordsRequest;
                        })();

                        types.ListRecordsResponse = (function() {

                            function ListRecordsResponse(properties) {
                                this.records = [];
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            ListRecordsResponse.prototype.namespace = null;
                            ListRecordsResponse.prototype.records = $util.emptyArray;
                            ListRecordsResponse.prototype.recordNumber = 0;

                            ListRecordsResponse.create = function create(properties) {
                                return new ListRecordsResponse(properties);
                            };

                            ListRecordsResponse.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                                    $root.github.com.nevercase.publisher.pkg.types.ListRecordsRequest.encode(message.namespace, writer.uint32(10).fork()).ldelim();
                                if (message.records != null && message.records.length)
                                    for (var i = 0; i < message.records.length; ++i)
                                        $root.github.com.nevercase.publisher.pkg.types.Record.encode(message.records[i], writer.uint32(18).fork()).ldelim();
                                if (message.recordNumber != null && Object.hasOwnProperty.call(message, "recordNumber"))
                                    writer.uint32(24).int32(message.recordNumber);
                                return writer;
                            };

                            ListRecordsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            ListRecordsResponse.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.ListRecordsResponse();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.namespace = $root.github.com.nevercase.publisher.pkg.types.ListRecordsRequest.decode(reader, reader.uint32());
                                        break;
                                    case 2:
                                        if (!(message.records && message.records.length))
                                            message.records = [];
                                        message.records.push($root.github.com.nevercase.publisher.pkg.types.Record.decode(reader, reader.uint32()));
                                        break;
                                    case 3:
                                        message.recordNumber = reader.int32();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            ListRecordsResponse.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            ListRecordsResponse.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.namespace != null && message.hasOwnProperty("namespace")) {
                                    var error = $root.github.com.nevercase.publisher.pkg.types.ListRecordsRequest.verify(message.namespace);
                                    if (error)
                                        return "namespace." + error;
                                }
                                if (message.records != null && message.hasOwnProperty("records")) {
                                    if (!Array.isArray(message.records))
                                        return "records: array expected";
                                    for (var i = 0; i < message.records.length; ++i) {
                                        var error = $root.github.com.nevercase.publisher.pkg.types.Record.verify(message.records[i]);
                                        if (error)
                                            return "records." + error;
                                    }
                                }
                                if (message.recordNumber != null && message.hasOwnProperty("recordNumber"))
                                    if (!$util.isInteger(message.recordNumber))
                                        return "recordNumber: integer expected";
                                return null;
                            };

                            return ListRecordsResponse;
                        })();

                        types.ListRunnerRequest = (function() {

                            function ListRunnerRequest(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            ListRunnerRequest.prototype.namespace = "";
                            ListRunnerRequest.prototype.groupName = "";

                            ListRunnerRequest.create = function create(properties) {
                                return new ListRunnerRequest(properties);
                            };

                            ListRunnerRequest.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                                    writer.uint32(10).string(message.namespace);
                                if (message.groupName != null && Object.hasOwnProperty.call(message, "groupName"))
                                    writer.uint32(18).string(message.groupName);
                                return writer;
                            };

                            ListRunnerRequest.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            ListRunnerRequest.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.ListRunnerRequest();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.namespace = reader.string();
                                        break;
                                    case 2:
                                        message.groupName = reader.string();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            ListRunnerRequest.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            ListRunnerRequest.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.namespace != null && message.hasOwnProperty("namespace"))
                                    if (!$util.isString(message.namespace))
                                        return "namespace: string expected";
                                if (message.groupName != null && message.hasOwnProperty("groupName"))
                                    if (!$util.isString(message.groupName))
                                        return "groupName: string expected";
                                return null;
                            };

                            return ListRunnerRequest;
                        })();

                        types.ListRunnerResponse = (function() {

                            function ListRunnerResponse(properties) {
                                this.runners = [];
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            ListRunnerResponse.prototype.runners = $util.emptyArray;

                            ListRunnerResponse.create = function create(properties) {
                                return new ListRunnerResponse(properties);
                            };

                            ListRunnerResponse.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.runners != null && message.runners.length)
                                    for (var i = 0; i < message.runners.length; ++i)
                                        $root.github.com.nevercase.publisher.pkg.types.RunnerInfo.encode(message.runners[i], writer.uint32(10).fork()).ldelim();
                                return writer;
                            };

                            ListRunnerResponse.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            ListRunnerResponse.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.ListRunnerResponse();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        if (!(message.runners && message.runners.length))
                                            message.runners = [];
                                        message.runners.push($root.github.com.nevercase.publisher.pkg.types.RunnerInfo.decode(reader, reader.uint32()));
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            ListRunnerResponse.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            ListRunnerResponse.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.runners != null && message.hasOwnProperty("runners")) {
                                    if (!Array.isArray(message.runners))
                                        return "runners: array expected";
                                    for (var i = 0; i < message.runners.length; ++i) {
                                        var error = $root.github.com.nevercase.publisher.pkg.types.RunnerInfo.verify(message.runners[i]);
                                        if (error)
                                            return "runners." + error;
                                    }
                                }
                                return null;
                            };

                            return ListRunnerResponse;
                        })();

                        types.LogStreamRequest = (function() {

                            function LogStreamRequest(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            LogStreamRequest.prototype.namespace = "";
                            LogStreamRequest.prototype.groupName = "";
                            LogStreamRequest.prototype.runnerName = "";
                            LogStreamRequest.prototype.stepName = "";
                            LogStreamRequest.prototype.output = "";

                            LogStreamRequest.create = function create(properties) {
                                return new LogStreamRequest(properties);
                            };

                            LogStreamRequest.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                                    writer.uint32(10).string(message.namespace);
                                if (message.groupName != null && Object.hasOwnProperty.call(message, "groupName"))
                                    writer.uint32(18).string(message.groupName);
                                if (message.runnerName != null && Object.hasOwnProperty.call(message, "runnerName"))
                                    writer.uint32(26).string(message.runnerName);
                                if (message.stepName != null && Object.hasOwnProperty.call(message, "stepName"))
                                    writer.uint32(34).string(message.stepName);
                                if (message.output != null && Object.hasOwnProperty.call(message, "output"))
                                    writer.uint32(42).string(message.output);
                                return writer;
                            };

                            LogStreamRequest.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            LogStreamRequest.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.LogStreamRequest();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.namespace = reader.string();
                                        break;
                                    case 2:
                                        message.groupName = reader.string();
                                        break;
                                    case 3:
                                        message.runnerName = reader.string();
                                        break;
                                    case 4:
                                        message.stepName = reader.string();
                                        break;
                                    case 5:
                                        message.output = reader.string();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            LogStreamRequest.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            LogStreamRequest.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.namespace != null && message.hasOwnProperty("namespace"))
                                    if (!$util.isString(message.namespace))
                                        return "namespace: string expected";
                                if (message.groupName != null && message.hasOwnProperty("groupName"))
                                    if (!$util.isString(message.groupName))
                                        return "groupName: string expected";
                                if (message.runnerName != null && message.hasOwnProperty("runnerName"))
                                    if (!$util.isString(message.runnerName))
                                        return "runnerName: string expected";
                                if (message.stepName != null && message.hasOwnProperty("stepName"))
                                    if (!$util.isString(message.stepName))
                                        return "stepName: string expected";
                                if (message.output != null && message.hasOwnProperty("output"))
                                    if (!$util.isString(message.output))
                                        return "output: string expected";
                                return null;
                            };

                            return LogStreamRequest;
                        })();

                        types.LogStreamResponse = (function() {

                            function LogStreamResponse(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            LogStreamResponse.create = function create(properties) {
                                return new LogStreamResponse(properties);
                            };

                            LogStreamResponse.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                return writer;
                            };

                            LogStreamResponse.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            LogStreamResponse.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.LogStreamResponse();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            LogStreamResponse.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            LogStreamResponse.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                return null;
                            };

                            return LogStreamResponse;
                        })();

                        types.PingRequest = (function() {

                            function PingRequest(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            PingRequest.create = function create(properties) {
                                return new PingRequest(properties);
                            };

                            PingRequest.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                return writer;
                            };

                            PingRequest.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            PingRequest.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.PingRequest();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            PingRequest.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            PingRequest.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                return null;
                            };

                            return PingRequest;
                        })();

                        types.PongResponse = (function() {

                            function PongResponse(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            PongResponse.create = function create(properties) {
                                return new PongResponse(properties);
                            };

                            PongResponse.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                return writer;
                            };

                            PongResponse.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            PongResponse.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.PongResponse();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            PongResponse.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            PongResponse.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                return null;
                            };

                            return PongResponse;
                        })();

                        types.Record = (function() {

                            function Record(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            Record.prototype.id = 0;
                            Record.prototype.namespace = "";
                            Record.prototype.groupName = "";
                            Record.prototype.runnerName = "";
                            Record.prototype.stepInfo = $util.newBuffer([]);
                            Record.prototype.stepType = 0;
                            Record.prototype.createdTM = 0;

                            Record.create = function create(properties) {
                                return new Record(properties);
                            };

                            Record.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                                    writer.uint32(8).int32(message.id);
                                if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                                    writer.uint32(18).string(message.namespace);
                                if (message.groupName != null && Object.hasOwnProperty.call(message, "groupName"))
                                    writer.uint32(26).string(message.groupName);
                                if (message.runnerName != null && Object.hasOwnProperty.call(message, "runnerName"))
                                    writer.uint32(34).string(message.runnerName);
                                if (message.stepInfo != null && Object.hasOwnProperty.call(message, "stepInfo"))
                                    writer.uint32(42).bytes(message.stepInfo);
                                if (message.createdTM != null && Object.hasOwnProperty.call(message, "createdTM"))
                                    writer.uint32(56).int32(message.createdTM);
                                if (message.stepType != null && Object.hasOwnProperty.call(message, "stepType"))
                                    writer.uint32(64).int32(message.stepType);
                                return writer;
                            };

                            Record.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            Record.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.Record();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.id = reader.int32();
                                        break;
                                    case 2:
                                        message.namespace = reader.string();
                                        break;
                                    case 3:
                                        message.groupName = reader.string();
                                        break;
                                    case 4:
                                        message.runnerName = reader.string();
                                        break;
                                    case 5:
                                        message.stepInfo = reader.bytes();
                                        break;
                                    case 8:
                                        message.stepType = reader.int32();
                                        break;
                                    case 7:
                                        message.createdTM = reader.int32();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            Record.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            Record.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.id != null && message.hasOwnProperty("id"))
                                    if (!$util.isInteger(message.id))
                                        return "id: integer expected";
                                if (message.namespace != null && message.hasOwnProperty("namespace"))
                                    if (!$util.isString(message.namespace))
                                        return "namespace: string expected";
                                if (message.groupName != null && message.hasOwnProperty("groupName"))
                                    if (!$util.isString(message.groupName))
                                        return "groupName: string expected";
                                if (message.runnerName != null && message.hasOwnProperty("runnerName"))
                                    if (!$util.isString(message.runnerName))
                                        return "runnerName: string expected";
                                if (message.stepInfo != null && message.hasOwnProperty("stepInfo"))
                                    if (!(message.stepInfo && typeof message.stepInfo.length === "number" || $util.isString(message.stepInfo)))
                                        return "stepInfo: buffer expected";
                                if (message.stepType != null && message.hasOwnProperty("stepType"))
                                    if (!$util.isInteger(message.stepType))
                                        return "stepType: integer expected";
                                if (message.createdTM != null && message.hasOwnProperty("createdTM"))
                                    if (!$util.isInteger(message.createdTM))
                                        return "createdTM: integer expected";
                                return null;
                            };

                            return Record;
                        })();

                        types.RegisterRunnerRequest = (function() {

                            function RegisterRunnerRequest(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            RegisterRunnerRequest.prototype.runnerInfo = null;

                            RegisterRunnerRequest.create = function create(properties) {
                                return new RegisterRunnerRequest(properties);
                            };

                            RegisterRunnerRequest.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.runnerInfo != null && Object.hasOwnProperty.call(message, "runnerInfo"))
                                    $root.github.com.nevercase.publisher.pkg.types.RunnerInfo.encode(message.runnerInfo, writer.uint32(10).fork()).ldelim();
                                return writer;
                            };

                            RegisterRunnerRequest.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            RegisterRunnerRequest.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.RegisterRunnerRequest();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.runnerInfo = $root.github.com.nevercase.publisher.pkg.types.RunnerInfo.decode(reader, reader.uint32());
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            RegisterRunnerRequest.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            RegisterRunnerRequest.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.runnerInfo != null && message.hasOwnProperty("runnerInfo")) {
                                    var error = $root.github.com.nevercase.publisher.pkg.types.RunnerInfo.verify(message.runnerInfo);
                                    if (error)
                                        return "runnerInfo." + error;
                                }
                                return null;
                            };

                            return RegisterRunnerRequest;
                        })();

                        types.RegisterRunnerResponse = (function() {

                            function RegisterRunnerResponse(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            RegisterRunnerResponse.create = function create(properties) {
                                return new RegisterRunnerResponse(properties);
                            };

                            RegisterRunnerResponse.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                return writer;
                            };

                            RegisterRunnerResponse.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            RegisterRunnerResponse.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.RegisterRunnerResponse();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            RegisterRunnerResponse.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            RegisterRunnerResponse.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                return null;
                            };

                            return RegisterRunnerResponse;
                        })();

                        types.Request = (function() {

                            function Request(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            Request.prototype.type = null;
                            Request.prototype.data = $util.newBuffer([]);

                            Request.create = function create(properties) {
                                return new Request(properties);
                            };

                            Request.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                                    $root.github.com.nevercase.publisher.pkg.types.Type.encode(message.type, writer.uint32(10).fork()).ldelim();
                                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                                    writer.uint32(18).bytes(message.data);
                                return writer;
                            };

                            Request.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            Request.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.Request();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.type = $root.github.com.nevercase.publisher.pkg.types.Type.decode(reader, reader.uint32());
                                        break;
                                    case 2:
                                        message.data = reader.bytes();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            Request.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            Request.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.type != null && message.hasOwnProperty("type")) {
                                    var error = $root.github.com.nevercase.publisher.pkg.types.Type.verify(message.type);
                                    if (error)
                                        return "type." + error;
                                }
                                if (message.data != null && message.hasOwnProperty("data"))
                                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                                        return "data: buffer expected";
                                return null;
                            };

                            return Request;
                        })();

                        types.Response = (function() {

                            function Response(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            Response.prototype.code = 0;
                            Response.prototype.message = "";
                            Response.prototype.type = null;
                            Response.prototype.data = $util.newBuffer([]);

                            Response.create = function create(properties) {
                                return new Response(properties);
                            };

                            Response.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                                    writer.uint32(8).int32(message.code);
                                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                                    writer.uint32(18).string(message.message);
                                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                                    $root.github.com.nevercase.publisher.pkg.types.Type.encode(message.type, writer.uint32(26).fork()).ldelim();
                                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                                    writer.uint32(34).bytes(message.data);
                                return writer;
                            };

                            Response.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            Response.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.Response();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.code = reader.int32();
                                        break;
                                    case 2:
                                        message.message = reader.string();
                                        break;
                                    case 3:
                                        message.type = $root.github.com.nevercase.publisher.pkg.types.Type.decode(reader, reader.uint32());
                                        break;
                                    case 4:
                                        message.data = reader.bytes();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            Response.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            Response.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.code != null && message.hasOwnProperty("code"))
                                    if (!$util.isInteger(message.code))
                                        return "code: integer expected";
                                if (message.message != null && message.hasOwnProperty("message"))
                                    if (!$util.isString(message.message))
                                        return "message: string expected";
                                if (message.type != null && message.hasOwnProperty("type")) {
                                    var error = $root.github.com.nevercase.publisher.pkg.types.Type.verify(message.type);
                                    if (error)
                                        return "type." + error;
                                }
                                if (message.data != null && message.hasOwnProperty("data"))
                                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                                        return "data: buffer expected";
                                return null;
                            };

                            return Response;
                        })();

                        types.Result = (function() {

                            function Result(properties) {
                                this.items = [];
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            Result.prototype.items = $util.emptyArray;

                            Result.create = function create(properties) {
                                return new Result(properties);
                            };

                            Result.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.items != null && message.items.length)
                                    for (var i = 0; i < message.items.length; ++i)
                                        writer.uint32(10).string(message.items[i]);
                                return writer;
                            };

                            Result.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            Result.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.Result();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        if (!(message.items && message.items.length))
                                            message.items = [];
                                        message.items.push(reader.string());
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            Result.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            Result.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.items != null && message.hasOwnProperty("items")) {
                                    if (!Array.isArray(message.items))
                                        return "items: array expected";
                                    for (var i = 0; i < message.items.length; ++i)
                                        if (!$util.isString(message.items[i]))
                                            return "items: string[] expected";
                                }
                                return null;
                            };

                            return Result;
                        })();

                        types.RunStepRequest = (function() {

                            function RunStepRequest(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            RunStepRequest.prototype.namespace = "";
                            RunStepRequest.prototype.groupName = "";
                            RunStepRequest.prototype.runnerName = "";
                            RunStepRequest.prototype.step = null;

                            RunStepRequest.create = function create(properties) {
                                return new RunStepRequest(properties);
                            };

                            RunStepRequest.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                                    writer.uint32(10).string(message.namespace);
                                if (message.groupName != null && Object.hasOwnProperty.call(message, "groupName"))
                                    writer.uint32(18).string(message.groupName);
                                if (message.runnerName != null && Object.hasOwnProperty.call(message, "runnerName"))
                                    writer.uint32(26).string(message.runnerName);
                                if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                                    $root.github.com.nevercase.publisher.pkg.types.Step.encode(message.step, writer.uint32(34).fork()).ldelim();
                                return writer;
                            };

                            RunStepRequest.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            RunStepRequest.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.RunStepRequest();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.namespace = reader.string();
                                        break;
                                    case 2:
                                        message.groupName = reader.string();
                                        break;
                                    case 3:
                                        message.runnerName = reader.string();
                                        break;
                                    case 4:
                                        message.step = $root.github.com.nevercase.publisher.pkg.types.Step.decode(reader, reader.uint32());
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            RunStepRequest.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            RunStepRequest.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.namespace != null && message.hasOwnProperty("namespace"))
                                    if (!$util.isString(message.namespace))
                                        return "namespace: string expected";
                                if (message.groupName != null && message.hasOwnProperty("groupName"))
                                    if (!$util.isString(message.groupName))
                                        return "groupName: string expected";
                                if (message.runnerName != null && message.hasOwnProperty("runnerName"))
                                    if (!$util.isString(message.runnerName))
                                        return "runnerName: string expected";
                                if (message.step != null && message.hasOwnProperty("step")) {
                                    var error = $root.github.com.nevercase.publisher.pkg.types.Step.verify(message.step);
                                    if (error)
                                        return "step." + error;
                                }
                                return null;
                            };

                            return RunStepRequest;
                        })();

                        types.RunStepResponse = (function() {

                            function RunStepResponse(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            RunStepResponse.create = function create(properties) {
                                return new RunStepResponse(properties);
                            };

                            RunStepResponse.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                return writer;
                            };

                            RunStepResponse.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            RunStepResponse.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.RunStepResponse();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            RunStepResponse.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            RunStepResponse.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                return null;
                            };

                            return RunStepResponse;
                        })();

                        types.RunnerInfo = (function() {

                            function RunnerInfo(properties) {
                                this.steps = [];
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            RunnerInfo.prototype.name = "";
                            RunnerInfo.prototype.hostname = "";
                            RunnerInfo.prototype.namespace = "";
                            RunnerInfo.prototype.groupName = "";
                            RunnerInfo.prototype.runnerType = "";
                            RunnerInfo.prototype.steps = $util.emptyArray;

                            RunnerInfo.create = function create(properties) {
                                return new RunnerInfo(properties);
                            };

                            RunnerInfo.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                    writer.uint32(10).string(message.name);
                                if (message.hostname != null && Object.hasOwnProperty.call(message, "hostname"))
                                    writer.uint32(18).string(message.hostname);
                                if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                                    writer.uint32(26).string(message.namespace);
                                if (message.groupName != null && Object.hasOwnProperty.call(message, "groupName"))
                                    writer.uint32(34).string(message.groupName);
                                if (message.runnerType != null && Object.hasOwnProperty.call(message, "runnerType"))
                                    writer.uint32(42).string(message.runnerType);
                                if (message.steps != null && message.steps.length)
                                    for (var i = 0; i < message.steps.length; ++i)
                                        $root.github.com.nevercase.publisher.pkg.types.Step.encode(message.steps[i], writer.uint32(50).fork()).ldelim();
                                return writer;
                            };

                            RunnerInfo.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            RunnerInfo.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.RunnerInfo();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.name = reader.string();
                                        break;
                                    case 2:
                                        message.hostname = reader.string();
                                        break;
                                    case 3:
                                        message.namespace = reader.string();
                                        break;
                                    case 4:
                                        message.groupName = reader.string();
                                        break;
                                    case 5:
                                        message.runnerType = reader.string();
                                        break;
                                    case 6:
                                        if (!(message.steps && message.steps.length))
                                            message.steps = [];
                                        message.steps.push($root.github.com.nevercase.publisher.pkg.types.Step.decode(reader, reader.uint32()));
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            RunnerInfo.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            RunnerInfo.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.name != null && message.hasOwnProperty("name"))
                                    if (!$util.isString(message.name))
                                        return "name: string expected";
                                if (message.hostname != null && message.hasOwnProperty("hostname"))
                                    if (!$util.isString(message.hostname))
                                        return "hostname: string expected";
                                if (message.namespace != null && message.hasOwnProperty("namespace"))
                                    if (!$util.isString(message.namespace))
                                        return "namespace: string expected";
                                if (message.groupName != null && message.hasOwnProperty("groupName"))
                                    if (!$util.isString(message.groupName))
                                        return "groupName: string expected";
                                if (message.runnerType != null && message.hasOwnProperty("runnerType"))
                                    if (!$util.isString(message.runnerType))
                                        return "runnerType: string expected";
                                if (message.steps != null && message.hasOwnProperty("steps")) {
                                    if (!Array.isArray(message.steps))
                                        return "steps: array expected";
                                    for (var i = 0; i < message.steps.length; ++i) {
                                        var error = $root.github.com.nevercase.publisher.pkg.types.Step.verify(message.steps[i]);
                                        if (error)
                                            return "steps." + error;
                                    }
                                }
                                return null;
                            };

                            return RunnerInfo;
                        })();

                        types.Step = (function() {

                            function Step(properties) {
                                this.envs = {};
                                this.output = [];
                                this.uploadFiles = [];
                                this.writeFiles = [];
                                this.messages = [];
                                this.remarks = [];
                                this.sharingData = {};
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            Step.prototype.id = 0;
                            Step.prototype.name = "";
                            Step.prototype.status = "";
                            Step.prototype.policy = "";
                            Step.prototype.available = "";
                            Step.prototype.envs = $util.emptyObject;
                            Step.prototype.output = $util.emptyArray;
                            Step.prototype.uploadFiles = $util.emptyArray;
                            Step.prototype.writeFiles = $util.emptyArray;
                            Step.prototype.messages = $util.emptyArray;
                            Step.prototype.runnerName = "";
                            Step.prototype.durationInMs = 0;
                            Step.prototype.remarks = $util.emptyArray;
                            Step.prototype.sharingData = $util.emptyObject;
                            Step.prototype.sharingSetting = false;

                            Step.create = function create(properties) {
                                return new Step(properties);
                            };

                            Step.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                                    writer.uint32(8).int32(message.id);
                                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                    writer.uint32(18).string(message.name);
                                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                                    writer.uint32(26).string(message.status);
                                if (message.policy != null && Object.hasOwnProperty.call(message, "policy"))
                                    writer.uint32(34).string(message.policy);
                                if (message.available != null && Object.hasOwnProperty.call(message, "available"))
                                    writer.uint32(42).string(message.available);
                                if (message.envs != null && Object.hasOwnProperty.call(message, "envs"))
                                    for (var keys = Object.keys(message.envs), i = 0; i < keys.length; ++i)
                                        writer.uint32(50).fork().uint32(10).string(keys[i]).uint32(18).string(message.envs[keys[i]]).ldelim();
                                if (message.output != null && message.output.length)
                                    for (var i = 0; i < message.output.length; ++i)
                                        writer.uint32(58).string(message.output[i]);
                                if (message.uploadFiles != null && message.uploadFiles.length)
                                    for (var i = 0; i < message.uploadFiles.length; ++i)
                                        $root.github.com.nevercase.publisher.pkg.types.UploadFile.encode(message.uploadFiles[i], writer.uint32(66).fork()).ldelim();
                                if (message.writeFiles != null && message.writeFiles.length)
                                    for (var i = 0; i < message.writeFiles.length; ++i)
                                        $root.github.com.nevercase.publisher.pkg.types.WriteFile.encode(message.writeFiles[i], writer.uint32(74).fork()).ldelim();
                                if (message.messages != null && message.messages.length)
                                    for (var i = 0; i < message.messages.length; ++i)
                                        writer.uint32(82).string(message.messages[i]);
                                if (message.runnerName != null && Object.hasOwnProperty.call(message, "runnerName"))
                                    writer.uint32(90).string(message.runnerName);
                                if (message.durationInMs != null && Object.hasOwnProperty.call(message, "durationInMs"))
                                    writer.uint32(96).int32(message.durationInMs);
                                if (message.remarks != null && message.remarks.length)
                                    for (var i = 0; i < message.remarks.length; ++i)
                                        writer.uint32(106).string(message.remarks[i]);
                                if (message.sharingData != null && Object.hasOwnProperty.call(message, "sharingData"))
                                    for (var keys = Object.keys(message.sharingData), i = 0; i < keys.length; ++i)
                                        writer.uint32(114).fork().uint32(10).string(keys[i]).uint32(18).string(message.sharingData[keys[i]]).ldelim();
                                if (message.sharingSetting != null && Object.hasOwnProperty.call(message, "sharingSetting"))
                                    writer.uint32(120).bool(message.sharingSetting);
                                return writer;
                            };

                            Step.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            Step.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.Step(), key, value;
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.id = reader.int32();
                                        break;
                                    case 2:
                                        message.name = reader.string();
                                        break;
                                    case 3:
                                        message.status = reader.string();
                                        break;
                                    case 4:
                                        message.policy = reader.string();
                                        break;
                                    case 5:
                                        message.available = reader.string();
                                        break;
                                    case 6:
                                        if (message.envs === $util.emptyObject)
                                            message.envs = {};
                                        var end2 = reader.uint32() + reader.pos;
                                        key = "";
                                        value = "";
                                        while (reader.pos < end2) {
                                            var tag2 = reader.uint32();
                                            switch (tag2 >>> 3) {
                                            case 1:
                                                key = reader.string();
                                                break;
                                            case 2:
                                                value = reader.string();
                                                break;
                                            default:
                                                reader.skipType(tag2 & 7);
                                                break;
                                            }
                                        }
                                        message.envs[key] = value;
                                        break;
                                    case 7:
                                        if (!(message.output && message.output.length))
                                            message.output = [];
                                        message.output.push(reader.string());
                                        break;
                                    case 8:
                                        if (!(message.uploadFiles && message.uploadFiles.length))
                                            message.uploadFiles = [];
                                        message.uploadFiles.push($root.github.com.nevercase.publisher.pkg.types.UploadFile.decode(reader, reader.uint32()));
                                        break;
                                    case 9:
                                        if (!(message.writeFiles && message.writeFiles.length))
                                            message.writeFiles = [];
                                        message.writeFiles.push($root.github.com.nevercase.publisher.pkg.types.WriteFile.decode(reader, reader.uint32()));
                                        break;
                                    case 10:
                                        if (!(message.messages && message.messages.length))
                                            message.messages = [];
                                        message.messages.push(reader.string());
                                        break;
                                    case 11:
                                        message.runnerName = reader.string();
                                        break;
                                    case 12:
                                        message.durationInMs = reader.int32();
                                        break;
                                    case 13:
                                        if (!(message.remarks && message.remarks.length))
                                            message.remarks = [];
                                        message.remarks.push(reader.string());
                                        break;
                                    case 14:
                                        if (message.sharingData === $util.emptyObject)
                                            message.sharingData = {};
                                        var end2 = reader.uint32() + reader.pos;
                                        key = "";
                                        value = "";
                                        while (reader.pos < end2) {
                                            var tag2 = reader.uint32();
                                            switch (tag2 >>> 3) {
                                            case 1:
                                                key = reader.string();
                                                break;
                                            case 2:
                                                value = reader.string();
                                                break;
                                            default:
                                                reader.skipType(tag2 & 7);
                                                break;
                                            }
                                        }
                                        message.sharingData[key] = value;
                                        break;
                                    case 15:
                                        message.sharingSetting = reader.bool();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            Step.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            Step.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.id != null && message.hasOwnProperty("id"))
                                    if (!$util.isInteger(message.id))
                                        return "id: integer expected";
                                if (message.name != null && message.hasOwnProperty("name"))
                                    if (!$util.isString(message.name))
                                        return "name: string expected";
                                if (message.status != null && message.hasOwnProperty("status"))
                                    if (!$util.isString(message.status))
                                        return "status: string expected";
                                if (message.policy != null && message.hasOwnProperty("policy"))
                                    if (!$util.isString(message.policy))
                                        return "policy: string expected";
                                if (message.available != null && message.hasOwnProperty("available"))
                                    if (!$util.isString(message.available))
                                        return "available: string expected";
                                if (message.envs != null && message.hasOwnProperty("envs")) {
                                    if (!$util.isObject(message.envs))
                                        return "envs: object expected";
                                    var key = Object.keys(message.envs);
                                    for (var i = 0; i < key.length; ++i)
                                        if (!$util.isString(message.envs[key[i]]))
                                            return "envs: string{k:string} expected";
                                }
                                if (message.output != null && message.hasOwnProperty("output")) {
                                    if (!Array.isArray(message.output))
                                        return "output: array expected";
                                    for (var i = 0; i < message.output.length; ++i)
                                        if (!$util.isString(message.output[i]))
                                            return "output: string[] expected";
                                }
                                if (message.uploadFiles != null && message.hasOwnProperty("uploadFiles")) {
                                    if (!Array.isArray(message.uploadFiles))
                                        return "uploadFiles: array expected";
                                    for (var i = 0; i < message.uploadFiles.length; ++i) {
                                        var error = $root.github.com.nevercase.publisher.pkg.types.UploadFile.verify(message.uploadFiles[i]);
                                        if (error)
                                            return "uploadFiles." + error;
                                    }
                                }
                                if (message.writeFiles != null && message.hasOwnProperty("writeFiles")) {
                                    if (!Array.isArray(message.writeFiles))
                                        return "writeFiles: array expected";
                                    for (var i = 0; i < message.writeFiles.length; ++i) {
                                        var error = $root.github.com.nevercase.publisher.pkg.types.WriteFile.verify(message.writeFiles[i]);
                                        if (error)
                                            return "writeFiles." + error;
                                    }
                                }
                                if (message.messages != null && message.hasOwnProperty("messages")) {
                                    if (!Array.isArray(message.messages))
                                        return "messages: array expected";
                                    for (var i = 0; i < message.messages.length; ++i)
                                        if (!$util.isString(message.messages[i]))
                                            return "messages: string[] expected";
                                }
                                if (message.runnerName != null && message.hasOwnProperty("runnerName"))
                                    if (!$util.isString(message.runnerName))
                                        return "runnerName: string expected";
                                if (message.durationInMs != null && message.hasOwnProperty("durationInMs"))
                                    if (!$util.isInteger(message.durationInMs))
                                        return "durationInMs: integer expected";
                                if (message.remarks != null && message.hasOwnProperty("remarks")) {
                                    if (!Array.isArray(message.remarks))
                                        return "remarks: array expected";
                                    for (var i = 0; i < message.remarks.length; ++i)
                                        if (!$util.isString(message.remarks[i]))
                                            return "remarks: string[] expected";
                                }
                                if (message.sharingData != null && message.hasOwnProperty("sharingData")) {
                                    if (!$util.isObject(message.sharingData))
                                        return "sharingData: object expected";
                                    var key = Object.keys(message.sharingData);
                                    for (var i = 0; i < key.length; ++i)
                                        if (!$util.isString(message.sharingData[key[i]]))
                                            return "sharingData: string{k:string} expected";
                                }
                                if (message.sharingSetting != null && message.hasOwnProperty("sharingSetting"))
                                    if (typeof message.sharingSetting !== "boolean")
                                        return "sharingSetting: boolean expected";
                                return null;
                            };

                            return Step;
                        })();

                        types.Type = (function() {

                            function Type(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            Type.prototype.body = "";
                            Type.prototype.serviceApi = "";

                            Type.create = function create(properties) {
                                return new Type(properties);
                            };

                            Type.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                                    writer.uint32(10).string(message.body);
                                if (message.serviceApi != null && Object.hasOwnProperty.call(message, "serviceApi"))
                                    writer.uint32(18).string(message.serviceApi);
                                return writer;
                            };

                            Type.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            Type.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.Type();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.body = reader.string();
                                        break;
                                    case 2:
                                        message.serviceApi = reader.string();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            Type.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            Type.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.body != null && message.hasOwnProperty("body"))
                                    if (!$util.isString(message.body))
                                        return "body: string expected";
                                if (message.serviceApi != null && message.hasOwnProperty("serviceApi"))
                                    if (!$util.isString(message.serviceApi))
                                        return "serviceApi: string expected";
                                return null;
                            };

                            return Type;
                        })();

                        types.UpdateStepRequest = (function() {

                            function UpdateStepRequest(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            UpdateStepRequest.prototype.namespace = "";
                            UpdateStepRequest.prototype.groupName = "";
                            UpdateStepRequest.prototype.runnerName = "";
                            UpdateStepRequest.prototype.step = null;

                            UpdateStepRequest.create = function create(properties) {
                                return new UpdateStepRequest(properties);
                            };

                            UpdateStepRequest.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                                    writer.uint32(10).string(message.namespace);
                                if (message.groupName != null && Object.hasOwnProperty.call(message, "groupName"))
                                    writer.uint32(18).string(message.groupName);
                                if (message.runnerName != null && Object.hasOwnProperty.call(message, "runnerName"))
                                    writer.uint32(26).string(message.runnerName);
                                if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                                    $root.github.com.nevercase.publisher.pkg.types.Step.encode(message.step, writer.uint32(34).fork()).ldelim();
                                return writer;
                            };

                            UpdateStepRequest.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            UpdateStepRequest.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.UpdateStepRequest();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.namespace = reader.string();
                                        break;
                                    case 2:
                                        message.groupName = reader.string();
                                        break;
                                    case 3:
                                        message.runnerName = reader.string();
                                        break;
                                    case 4:
                                        message.step = $root.github.com.nevercase.publisher.pkg.types.Step.decode(reader, reader.uint32());
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            UpdateStepRequest.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            UpdateStepRequest.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.namespace != null && message.hasOwnProperty("namespace"))
                                    if (!$util.isString(message.namespace))
                                        return "namespace: string expected";
                                if (message.groupName != null && message.hasOwnProperty("groupName"))
                                    if (!$util.isString(message.groupName))
                                        return "groupName: string expected";
                                if (message.runnerName != null && message.hasOwnProperty("runnerName"))
                                    if (!$util.isString(message.runnerName))
                                        return "runnerName: string expected";
                                if (message.step != null && message.hasOwnProperty("step")) {
                                    var error = $root.github.com.nevercase.publisher.pkg.types.Step.verify(message.step);
                                    if (error)
                                        return "step." + error;
                                }
                                return null;
                            };

                            return UpdateStepRequest;
                        })();

                        types.UpdateStepResponse = (function() {

                            function UpdateStepResponse(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            UpdateStepResponse.create = function create(properties) {
                                return new UpdateStepResponse(properties);
                            };

                            UpdateStepResponse.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                return writer;
                            };

                            UpdateStepResponse.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            UpdateStepResponse.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.UpdateStepResponse();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            UpdateStepResponse.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            UpdateStepResponse.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                return null;
                            };

                            return UpdateStepResponse;
                        })();

                        types.UploadFile = (function() {

                            function UploadFile(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            UploadFile.prototype.sourceFile = "";
                            UploadFile.prototype.targetPath = "";
                            UploadFile.prototype.targetFile = "";

                            UploadFile.create = function create(properties) {
                                return new UploadFile(properties);
                            };

                            UploadFile.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.sourceFile != null && Object.hasOwnProperty.call(message, "sourceFile"))
                                    writer.uint32(10).string(message.sourceFile);
                                if (message.targetPath != null && Object.hasOwnProperty.call(message, "targetPath"))
                                    writer.uint32(18).string(message.targetPath);
                                if (message.targetFile != null && Object.hasOwnProperty.call(message, "targetFile"))
                                    writer.uint32(26).string(message.targetFile);
                                return writer;
                            };

                            UploadFile.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            UploadFile.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.UploadFile();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.sourceFile = reader.string();
                                        break;
                                    case 2:
                                        message.targetPath = reader.string();
                                        break;
                                    case 3:
                                        message.targetFile = reader.string();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            UploadFile.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            UploadFile.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                                    if (!$util.isString(message.sourceFile))
                                        return "sourceFile: string expected";
                                if (message.targetPath != null && message.hasOwnProperty("targetPath"))
                                    if (!$util.isString(message.targetPath))
                                        return "targetPath: string expected";
                                if (message.targetFile != null && message.hasOwnProperty("targetFile"))
                                    if (!$util.isString(message.targetFile))
                                        return "targetFile: string expected";
                                return null;
                            };

                            return UploadFile;
                        })();

                        types.WriteFile = (function() {

                            function WriteFile(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            WriteFile.prototype.content = $util.newBuffer([]);
                            WriteFile.prototype.targetFile = "";

                            WriteFile.create = function create(properties) {
                                return new WriteFile(properties);
                            };

                            WriteFile.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                                    writer.uint32(10).bytes(message.content);
                                if (message.targetFile != null && Object.hasOwnProperty.call(message, "targetFile"))
                                    writer.uint32(18).string(message.targetFile);
                                return writer;
                            };

                            WriteFile.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            WriteFile.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.github.com.nevercase.publisher.pkg.types.WriteFile();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.content = reader.bytes();
                                        break;
                                    case 2:
                                        message.targetFile = reader.string();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            WriteFile.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            WriteFile.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.content != null && message.hasOwnProperty("content"))
                                    if (!(message.content && typeof message.content.length === "number" || $util.isString(message.content)))
                                        return "content: buffer expected";
                                if (message.targetFile != null && message.hasOwnProperty("targetFile"))
                                    if (!$util.isString(message.targetFile))
                                        return "targetFile: string expected";
                                return null;
                            };

                            return WriteFile;
                        })();

                        return types;
                    })();

                    return pkg;
                })();

                return publisher;
            })();

            return nevercase;
        })();

        return com;
    })();

    return github;
})();

module.exports = $root;
