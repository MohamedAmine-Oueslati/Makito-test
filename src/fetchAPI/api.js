import md5 from "md5";

export async function searchChar(name, $limit, $order) {
  var names = "nameStartsWith=" + name;
  var public_key = "73450e017d8b4f07a6d3cb3da2a88ab4";
  var private_key = "6ebf20194bd0ca2c77a391524f27552a30c70ee1";
  var ts = "1";
  var hash = md5(ts + private_key + public_key);
  var limit = $limit != 0 ? "&limit=" + $limit : "";
  var order = $order != "" ? "&orderBy=" + $order : "";
  var url = `https://gateway.marvel.com:443/v1/public/characters?${names}&apikey=${public_key}&ts=${ts}&hash=${hash}${order}${limit}`;
  console.log(url);
  var response = await fetch(url);
  var data = await response.json();
  return data;
}
export async function detailChar(charId) {
  var ts = "1";
  var public_key = "73450e017d8b4f07a6d3cb3da2a88ab4";
  var private_key = "6ebf20194bd0ca2c77a391524f27552a30c70ee1";
  var hash = md5(ts + private_key + public_key);
  var url = `https://gateway.marvel.com:443/v1/public/characters/${charId}?apikey=${public_key}&ts=${ts}&hash=${hash}`;
  var response = await fetch(url);
  var data = await response.json();
  return data;
}
export async function detailComic(charId) {
  var ts = "1";
  var public_key = "73450e017d8b4f07a6d3cb3da2a88ab4";
  var private_key = "6ebf20194bd0ca2c77a391524f27552a30c70ee1";
  var hash = md5(ts + private_key + public_key);
  var url = `https://gateway.marvel.com:443/v1/public/characters/${charId}/comics?apikey=${public_key}&ts=${ts}&hash=${hash}`;
  var response = await fetch(url);
  var data = await response.json();
  return data;
}
export async function detailSeries(charId) {
  var ts = "1";
  var public_key = "73450e017d8b4f07a6d3cb3da2a88ab4";
  var private_key = "6ebf20194bd0ca2c77a391524f27552a30c70ee1";
  var hash = md5(ts + private_key + public_key);
  var url = `https://gateway.marvel.com:443/v1/public/characters/${charId}/series?apikey=${public_key}&ts=${ts}&hash=${hash}`;
  var response = await fetch(url);
  var data = await response.json();
  return data;
}
