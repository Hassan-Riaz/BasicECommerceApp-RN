import { Platform } from 'react-native';
import { version } from '../../../package.json';
import { AppLinks } from '../constants';
import CacheManager from './CacheManager';

const AppManager = {
    checkIfAllowed(minimumAllowedVersion: string){
        let minimumAllowedVersionArr = minimumAllowedVersion.split('.');
        const appVersionArr = version.split('.');
        console.log('version, buildNov',version, minimumAllowedVersion)
        for (let i = 0; i < minimumAllowedVersionArr.length; i++) {
            const minComp = parseInt(minimumAllowedVersionArr[i]);
            if (minComp < parseInt(appVersionArr[i]) || i == (minimumAllowedVersionArr.length - 1) && minComp == parseInt(appVersionArr[i])) {
                return false;
            }
        }
        return true;
    },
    getAppLink(){
        return Platform.OS == 'ios' ? AppLinks.ios : AppLinks.android; 
    },
    onMigrationNeeded(onMigration: ()=> void) {
        const MIGRATION_VERSION = '3';
        CacheManager.fetch('MIGRATION_VERSION', true).then(mv => {
            if (mv != null && MIGRATION_VERSION != mv) {
                onMigration();
            }
            CacheManager.saveValue('MIGRATION_VERSION', MIGRATION_VERSION)// So It have latest app migration Number
        })
    },
}

export default AppManager;