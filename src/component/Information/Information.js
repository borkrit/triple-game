import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';
import s from './Information.module.css'


const Information = () => {
    return(
        <div className={s.root}>
            <Container>
                <Text element={'p'} strong>Style text strong</Text>
                <Text element={'div'} italic>
                    <Heading level={2}>
                        Style text italic
                    </Heading>
                </Text>
                <Text element={'span'} disabled>Style text disabled</Text>
            </Container>
        </div>

    );
}

export default Information; 
