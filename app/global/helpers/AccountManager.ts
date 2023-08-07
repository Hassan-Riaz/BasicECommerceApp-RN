import { showAlert } from "../common";
import { iCacheUser } from "../models/CacheUser";
import EncryptedStorageManager from "./EncryptedStorageManager"



export const AccountManager = {
    /**
     * Returns the active account credentials (phone, pincode)
    **/
    getActiveAccount(): Promise<iCacheUser | null> {
        return new Promise(async (resolve, reject) => {
            try {
                const loggedIn = await EncryptedStorageManager.fetchObject<iCacheUser>('LoggedInAccount')
                resolve(loggedIn);
            } catch (error) {
                resolve(null);
            }
        });
    },
    async isActiveAccount(phone: string): Promise<boolean> {
        let credentials = await this.getActiveAccount();
        return credentials != null && credentials.phone == phone;
    },
    getAllAccounts(): Promise<iCacheUser[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const allAccounts = await EncryptedStorageManager.fetchObject<iCacheUser[]>('AllAccounts')
                resolve(allAccounts?.sort((a,b) => a.name.localeCompare(b.name)) || []);
            } catch (error) {
                resolve([]);
            }
        });
    },
    async findAccount(phone: string){
        let accounts = await this.getAllAccounts();
        accounts = accounts.filter(item => item.phone == phone)
        return accounts.length > 0 ? accounts[0] : undefined;
    },
    async addActiveAccount(acc: iCacheUser) {
        //will filter out if already existed so we can have newest data without duplication)
        await this.updateAccount(acc);
        await EncryptedStorageManager.saveObject('LoggedInAccount', acc);
    },
    async updateAccount(acc: iCacheUser) {
        let accounts = await this.getAllAccounts();
        let newAcc: iCacheUser = acc;
        if (!acc.pinCode) {
            const oldAccounts = accounts.filter(item => item.phone == acc.phone);
            if (oldAccounts.length > 0) {
                newAcc = {
                    ...acc,
                    pinCode: oldAccounts[0].pinCode
                };
            }
        }
        accounts = accounts.filter(item => item.phone != acc.phone)
        accounts = [
            ...accounts,
            newAcc
        ];
        await EncryptedStorageManager.saveObject('AllAccounts', accounts);
    },
    async removeAccount(phone: string) {
        let accounts = await this.getAllAccounts();
        accounts = accounts.filter(item => item.phone != phone)
        await EncryptedStorageManager.saveObject('AllAccounts', accounts);
    },
    async clear(){
        await EncryptedStorageManager.remove('LoggedInAccount');
        return await EncryptedStorageManager.saveObject('AllAccounts', []);
    }
}

export default AccountManager;