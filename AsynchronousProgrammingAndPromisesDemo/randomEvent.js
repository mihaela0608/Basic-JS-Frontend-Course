function randomEvent() {
    setTimeout(() => {
      const events = ["The sun is shining", "It started raining", "A cat showed up"];
      const index = Math.floor(Math.random() * events.length);
      console.log(events[index]);
    }, 2000);
  }
  
  randomEvent();
  