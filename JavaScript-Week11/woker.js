function TimeDate () {
    DateTime = new Date()
    postMessage(DateTime);
    
} 
setInterval(TimeDate,1000);
