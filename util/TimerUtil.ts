import { ITimer } from "../models/TimerModel";

export const loadTimers = async (): Promise<ITimer[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {name: "Timer 1", seconds: 100},
                {name: "Timer 2", seconds: 60},
                {name: "Timer 3", seconds: 100},
            ]);
        }, 2000);
    });
};