const recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object, {[key]: value})
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
<<<<<<< HEAD
  var newobj = Object.assign({}, object)
  delete newobj[key]
  return newobj
}

function destructivelyDeleteFromObjectByKey(object, key){
delete object[key]
return object
=======
  var newobj = Object.assign({}, object, key)
  return delete newobj.key
}

function destructivelyDeleteFromObjectByKey(object, key){
>>>>>>> fa59890e80ca3cb3edcb76772124849067870a8d
  
}

