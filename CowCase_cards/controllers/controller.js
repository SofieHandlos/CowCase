export default class Controller {
    initialize(model, view) {
        this.model = model;
        this.view = view;
    }

    
    buildTemplate(Cow) {
        return `
        <div class="CowCard">
                <div>
                    <img src="profile_icon.png" alt="Profile icon">
                </div>
                <div>
                    <h3>Registrationnumber: ${Cow.getRegistrationNumber()}</h3>
                    <p>Breed: ${Cow.getBreed()}</p>
                    <p>Boothnumber: ${Cow.getBoothNumber()} DKK</p>
                    <p>Date of Birth: ${Cow.getBirthday()}</p>
                    <p>Milk production: ${Cow.getMilkProduction()}</p>
                    <button type="button" class="delete_button" id="${Cow.getRegistrationNumber()}">Delete</button>
                </div>  
        </div>`
    }

    snSearch(registrationnumber) {
        console.log(registrationnumber)
        const Cow = this.model.CowList.getCow(registrationnumber);
        let template = "";

        if (Cow !== null) {
            template = this.buildTemplate(Cow);
        } else {
            template = `
            <tr class="customerrow">
            <td colspan="8">Nothing to show</td>
            </tr>`;
        }
        this.view.message(template);
    }

    search(searchCows) {
        const Cow = this.model.CowList.search(searchCows);
        let template = "";

        if (Cow !== null) {
            template = this.buildTemplate(Cow);
        } else {
            template = `
            <tr class="customerrow">
            <td colspan="8">Nothing to show</td>
            </tr>`;
        }
        this.view.message(template);
    }

    showAllCows() {
        let template = "";
        for (const Cow of this.model.CowList.allCows()) {
            template += this.buildTemplate(Cow);
        }
        this.view.message(template);
    }

    newCow(Cow) {
        const doeswAlreadyExist = this.model.CowList.getCow(Cow.registrationnumber);

        if (doesCowAlreadyExist === null) {
            this.model.CowList.addCow(Cow.registrationnumber, Cow.breed, Cow.boothnumber, Cow.birthday, Cow.production);
            this.view.snackbar("The cow was saved");
            this.showAllCows();
        } else {
            this.view.snackbar("The cow already exist");
        }
    }

    deleteCow(sn) {
        this.model.CowList.deleteCow(sn);
        this.view.snackbar("The cow was deleted!");
    }
}
