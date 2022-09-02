import Cow from "./guitarClass.js"

export default class Inventory {
    constructor() {
        this.Cows = [];
    }

    addCow(registrationnumber, breed, boothnumber, birthday, production) {
        const newCow = new Cow (registrationnumber, breed, boothnumber, birthday, production);
        this.Cows.push(newCow);
    }

    getCow(registrationnumber) {
        for (const Cow of this.Cows) {
            if (registrationnumber === Cow.registrationnumber) {
                return Cow;
            }
        }
        // The value null represents the intentional absence of an object value;
        return null;
    }

    search(idealCow) {
        // Destructuring
        const {registrationnumber, breed, boothnumber, birthday, production} = idealCow;

        for (const Cow of this.Cows) {
            if (Cow.registrationnumber === registrationnumber &&  Cow.breed===breed && Cow.boothnumber==boothnumber && Cow.birthday===birthday && Cow.production==production) {
                return Cow;
            }
        }
        return null;
    }

    allCows() {
        return this.Cows;
    }

    deleteCow(sn) {
        console.log(sn)
        const index = this.Cows.map(Cow => Cow.registrationnumber).indexOf(sn);
        this.Cows.splice(index, 1); // Removes guitars from guitar object list 
    }
}