type MyEvent = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<MyEvent, 'scroll'>; 
const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); 