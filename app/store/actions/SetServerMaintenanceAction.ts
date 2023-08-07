export const SetServerMaintenanceActionKey = 'SetServerMaintenanceActionKey';


export const SetServerMaintenanceAction = (isEnabled: boolean) => {
    return {
        type: SetServerMaintenanceActionKey,
        isEnabled: isEnabled,
    };
};

export type TSetServerMaintenanceAction = ReturnType<typeof SetServerMaintenanceAction>;