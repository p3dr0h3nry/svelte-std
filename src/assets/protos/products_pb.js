// source: products.proto
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
var global = (function() { return this || global || Function('return this')(); }).call(null);

goog.exportSymbol('proto.Product', null, global);
goog.exportSymbol('proto.Products', null, global);
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
proto.Product = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Product, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Product.displayName = 'proto.Product';
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
proto.Products = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Products.repeatedFields_, null);
};
goog.inherits(proto.Products, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Products.displayName = 'proto.Products';
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
proto.Product.prototype.toObject = function(opt_includeInstance) {
  return proto.Product.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Product} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Product.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    desc: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    stock: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.Product}
 */
proto.Product.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Product;
  return proto.Product.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Product} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Product}
 */
proto.Product.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStock(value);
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
proto.Product.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Product.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Product} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Product.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getStock();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.Product.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Product} returns this
 */
proto.Product.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string desc = 2;
 * @return {string}
 */
proto.Product.prototype.getDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Product} returns this
 */
proto.Product.prototype.setDesc = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional float value = 3;
 * @return {number}
 */
proto.Product.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Product} returns this
 */
proto.Product.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional int32 stock = 4;
 * @return {number}
 */
proto.Product.prototype.getStock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Product} returns this
 */
proto.Product.prototype.setStock = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Products.repeatedFields_ = [1];



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
proto.Products.prototype.toObject = function(opt_includeInstance) {
  return proto.Products.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Products} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Products.toObject = function(includeInstance, msg) {
  var f, obj = {
    productList: jspb.Message.toObjectList(msg.getProductList(),
    proto.Product.toObject, includeInstance)
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
 * @return {!proto.Products}
 */
proto.Products.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Products;
  return proto.Products.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Products} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Products}
 */
proto.Products.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Product;
      reader.readMessage(value,proto.Product.deserializeBinaryFromReader);
      msg.addProduct(value);
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
proto.Products.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Products.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Products} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Products.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Product.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Product product = 1;
 * @return {!Array<!proto.Product>}
 */
proto.Products.prototype.getProductList = function() {
  return /** @type{!Array<!proto.Product>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Product, 1));
};


/**
 * @param {!Array<!proto.Product>} value
 * @return {!proto.Products} returns this
*/
proto.Products.prototype.setProductList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Product=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Product}
 */
proto.Products.prototype.addProduct = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Product, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Products} returns this
 */
proto.Products.prototype.clearProductList = function() {
  return this.setProductList([]);
};


// goog.object.extend(exports, proto);
export default proto;
