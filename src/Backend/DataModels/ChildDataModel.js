

export class ChildDataModel{
    constructor(firstName, lastName, firebaseId, saveBalance, spendBalance, shareBalance){
        this.firstName = firstName;
        this.lastName = lastName;
        this.firebaseId = firebaseId;
        this.saveBalance = saveBalance;
        this.spendBalance = spendBalance;
        this.shareBalance = shareBalance;
    }

    getFirstName(){
        return this.firstName;
    }
    getSaveBalance(){
        return this.saveBalance;
    }
    getSpendBalance(){
        return this.spendBalance;
    }
    getShareBalance(){
        return this.shareBalance;
    }

    setName(name){
        this.firstName = name;
    }

    depositBalance(bank, amt, description){
        console.log(amt);
        switch (bank){
            case 'Save':
                this.saveBalance += Number(amt);
                return;
            
            case 'Spend':
                this.spendBalance += Number(amt);
                return;

            case 'Share':
                this.shareBalance += Number(amt);
                return;
            
            default:
                throw console.error("Unknown bank");
        }
    }

    withdrawBalance(bank, amt, description){
        switch (bank){
            case 'Save':
                this.saveBalance -= Number(amt);
                return;
            
            case 'Spend':
                this.spendBalance -= Number(amt);
                return;

            case 'Share':
                this.shareBalance -= Number(amt);
                return;
            
            default:
                throw console.error("Unknown bank: " + bank);
        }
    }


}