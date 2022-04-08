// source: orders.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

import jspb from 'google-protobuf';
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

import products_pb from './products_pb.js';
goog.object.extend(proto, products_pb);
goog.exportSymbol('proto.Order', null, global);
goog.exportSymbol('proto.Order.Itens', null, global);
goog.exportSymbol('proto.Orders', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Order = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Order, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Order.displayName = 'proto.Order';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Order.Itens = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Order.Itens.repeatedFields_, null);
};
goog.inherits(proto.Order.Itens, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Order.Itens.displayName = 'proto.Order.Itens';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Orders = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Orders.repeatedFields_, null);
};
goog.inherits(proto.Orders, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Orders.displayName = 'proto.Orders';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Order.prototype.toObject = function(opt_includeInstance) {
  return proto.Order.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Order} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Order.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    desc: jspb.Message.getFieldWithDefault(msg, 2, ""),
    total: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Order}
 */
proto.Order.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Order;
  return proto.Order.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Order} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Order}
 */
proto.Order.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesc(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Order.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Order.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Order} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Order.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getDesc();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Order.Itens.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Order.Itens.prototype.toObject = function(opt_includeInstance) {
  return proto.Order.Itens.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Order.Itens} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Order.Itens.toObject = function(includeInstance, msg) {
  var f, obj = {
    itensList: jspb.Message.toObjectList(msg.getItensList(),
    products_pb.Product.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Order.Itens}
 */
proto.Order.Itens.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Order.Itens;
  return proto.Order.Itens.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Order.Itens} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Order.Itens}
 */
proto.Order.Itens.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new products_pb.Product;
      reader.readMessage(value,products_pb.Product.deserializeBinaryFromReader);
      msg.addItens(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Order.Itens.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Order.Itens.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Order.Itens} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Order.Itens.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItensList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      products_pb.Product.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Product itens = 4;
 * @return {!Array<!proto.Product>}
 */
proto.Order.Itens.prototype.getItensList = function() {
  return /** @type{!Array<!proto.Product>} */ (
    jspb.Message.getRepeatedWrapperField(this, products_pb.Product, 4));
};


/**
 * @param {!Array<!proto.Product>} value
 * @return {!proto.Order.Itens} returns this
*/
proto.Order.Itens.prototype.setItensList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.Product=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Product}
 */
proto.Order.Itens.prototype.addItens = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.Product, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Order.Itens} returns this
 */
proto.Order.Itens.prototype.clearItensList = function() {
  return this.setItensList([]);
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.Order.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Order} returns this
 */
proto.Order.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string desc = 2;
 * @return {string}
 */
proto.Order.prototype.getDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Order} returns this
 */
proto.Order.prototype.setDesc = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional float total = 3;
 * @return {number}
 */
proto.Order.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Order} returns this
 */
proto.Order.prototype.setTotal = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Orders.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Orders.prototype.toObject = function(opt_includeInstance) {
  return proto.Orders.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Orders} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Orders.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderList: jspb.Message.toObjectList(msg.getOrderList(),
    proto.Order.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Orders}
 */
proto.Orders.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Orders;
  return proto.Orders.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Orders} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Orders}
 */
proto.Orders.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Order;
      reader.readMessage(value,proto.Order.deserializeBinaryFromReader);
      msg.addOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Orders.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Orders.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Orders} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Orders.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Order.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Order order = 1;
 * @return {!Array<!proto.Order>}
 */
proto.Orders.prototype.getOrderList = function() {
  return /** @type{!Array<!proto.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Order, 1));
};


/**
 * @param {!Array<!proto.Order>} value
 * @return {!proto.Orders} returns this
*/
proto.Orders.prototype.setOrderList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Order}
 */
proto.Orders.prototype.addOrder = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Orders} returns this
 */
proto.Orders.prototype.clearOrderList = function() {
  return this.setOrderList([]);
};


// goog.object.extend(exports, proto);
export default proto;