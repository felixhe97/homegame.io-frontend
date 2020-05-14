// reverytime chat is called

if (window.Worker) {
    const worker = new Worker('worker.js');

} else {
    console.error('Need browser that supports Web Workers');
}