import Inventory from "../utils/inventoryClass.js"

export default class Model {
    constructor() {
        this.CowList = new Inventory;
        this.CowList.addCow("34-343", "Ole", 2359, "23/07/1998", 2021);
        this.CowList.addCow("34-234", "Per", 2455, "12/03/1989", 2022);
        this.CowList.addCow("34-543", "Jersey", 7643, "05/05/2012", 2020);
        this.CowList.addCow("34-353", "Mathilde", 6473, "20/09/2013", 2018);
        this.CowList.addCow("34-854", "Rikke", 4563, "03/12/2022", 2022);
    }
}