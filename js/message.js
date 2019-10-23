AV.init({
  appId: "51WMzRAv8rmg8PLhU8OTy554-gzGzoHsz",
  appKey: "6uPI3dcpSoC20fol1mKTQrSK",
  serverURLs: "https://51wmzrav.lc-cn-n1-shared.com"
});
var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.set('words', 'Hello world!');
testObject.save().then(function (testObject) {
  console.log('保存成功。')
})