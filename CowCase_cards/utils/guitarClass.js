export default class Cow {
    constructor(registrationnumber, breed, boothnumber, birthday, production) {
        this.registrationnumber = registrationnumber;
        this.breed = breed;
        this.boothnumber = boothnumber;
        this.birthday = birthday;
        this.production = production;
    }

    getRegistrationNumber() {
        return this.registrationnumber;
    }

    getBreed() {
        return this.breed;
    }

    getBoothNumber() {
        return this.boothnumber;
    }

    getBirthday() {
        return this.birthday;
    }

    getMilkProduction() {
        return this.production;
    }
}