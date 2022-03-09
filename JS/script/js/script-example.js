document.addEventListener('DOMContentLoaded',function(){
	console.log('DOMContentLoaded');
});

console.log("async")

// 下面的语句会失败  Failed to execute 'write' on 'Document': It isn't possible to write into a document from an asynchronously-loaded external script unless it is explicitly opened.
// 因为 document.write 需要向文档流中写入内容，所以，若在一个已关闭（例如，已完成加载）的文档上调用 document.write，就会自动调用 document.open，这将清空该文档的内容。
// 执行 ayanc sript的时候 文档流已经完成加载了。DOMContentLoaded
document.write("<h1>Out with the old - in with the new!</h1>")


// 如果 document.write() 调用发生在 HTML 里的 <script> 标签中，那么它将不会自动调用 document.open()。
// 显示的open后 可以写入
// document.open();
// document.write("<h1>哈哈</h1>");
// document.close();
