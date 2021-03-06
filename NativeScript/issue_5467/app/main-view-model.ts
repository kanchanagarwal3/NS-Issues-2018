import { Observable } from 'data/observable';

export class HelloWorldModel extends Observable {

    private _counter: number;
    private _message: any;

    constructor() {
        super();

        // Initialize default values.
        this._counter = 42;
        this.updateMessage();
    }

    get message(): any {
        return this._message;
    }
    
    set message(value: any) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value)
        }
    }

    public onTap() {
        this._counter--;
        this.updateMessage();
    }

    private updateMessage() {
        if (this._counter <= 0) {
            this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
        } else {
            this.message = `${this._counter} taps left`;
        }

        console.log("[updateMessage] message: " + this.message);
    }
}
