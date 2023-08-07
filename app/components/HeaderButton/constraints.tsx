import { TBasicIcon } from "../AppIcon/constraints";

export interface TComponent {
    onPress: ()=>void;   
    children?: React.ReactNode | undefined;
}