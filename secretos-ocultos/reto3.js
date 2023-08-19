class Motor {
    constructor(propulsionTo, historyInstance) {
      this.status = "off"
      this.history = historyInstance;
  
      this.getStatus = () => this.status;
      this.setStatus = (newStatus) => {
        this.status = newStatus;
        if(this.history.history.length == 0) {
          this.history.history.push({
            "propulsionTo": propulsionTo,
            "status": this.status
          })
        }
        if(this.history.history[this.history.history.length - 1]["propulsionTo"] == propulsionTo && this.history.history[this.history.history.length - 1]["status"] == this.status) {
          return;
        } else {
          this.history.history.push({
            "propulsionTo": propulsionTo,
            "status": this.status
          })
        }
      };
  
      this.turnOn = () => this.setStatus("on");
      this.turnOff = () => this.setStatus("off");
      
      this.getHistory = () => this.history.getFullState();
    }
  }
  
class History {
    constructor() {
      this.history = [];
  
      this.getFullState = () => this.history;
    }
  }

  const history = new History();
  const motorUp = new Motor("up", history);
  const motorDown = new Motor("down", history);
  motorUp.turnOn();
  motorDown.turnOn();
  motorUp.turnOff();
  motorUp.turnOff(); // Repetido
  motorUp.turnOn();
  motorUp.turnOn(); // Repetido
  motorDown.turnOff();
  console.log(history.getFullState());
  