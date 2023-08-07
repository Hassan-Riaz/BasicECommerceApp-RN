import React from 'react';
import Container from '../../components/Container';
import { UserStackNavigationRootProps } from '../constraints';
import { getStyles } from './styles';

//TODO: change any to relavant key
const TemplateScreen: React.FC<UserStackNavigationRootProps<any>> = props => {
    
    const styles = getStyles();

    return (
        <Container style={styles.screen}>

        </Container>
    );
};

export default TemplateScreen;