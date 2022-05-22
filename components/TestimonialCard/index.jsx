import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Emoji from 'a11y-react-emoji'
import Divider from '@mui/material/Divider'

const TestimonialCard = ({
    title,
    user,
    rating,
    image,
    text,
    small,
}) => {
    return <Paper
        elevation={ 0 }
        sx={ {
            height: 'auto',
            borderRadius: '20px',
            padding: small ? '25px' : '50px',
        } }
    >
        <Typography
            variant='h5'
            sx={ {
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: small ? '18px' : '25px',
                lineHeight: small ? '25px' : '35px'
            } }
        >
            { title }
        </Typography>
        <br />
        <Grid
            container
            justifyContent='flex-start'
            alignItems='center'
            flexDirection='row'
            spacing={ 5 }
        >
            <Grid
                item
            >
                <Avatar
                    alt={ user }
                    src={ image }
                    sx={ {
                        height: small ? '30px' : '50px',
                        width: small ? '30px' : '50px',
                    } }
                />
            </Grid>
            <Grid
                item
            >
                <Typography
                    sx={ {
                        color: '#535A72',
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        fontSize: small ? '13px' : '16px',
                        lineHeight: small ? '18px' : '22px',
                    } }
                >
                    { user }
                </Typography>
            </Grid>
            <Grid
                item
            >
                <Emoji
                    symbol='⭐'
                    label='Rating'
                />
                &nbsp;
                <span
                    style={ {
                        color: '#535A72',
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        fontSize: small ? '13px' : '16px',
                        lineHeight: small ? '18px' : '22px',
                    } }
                >
                    { rating }
                </span>
            </Grid>
        </Grid>
        <br />
        <Divider />
        <br />
        <Typography
            sx={ {
                color: '#7D849D',
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: small ? '13px' : '16px',
                lineHeight: small ? '20px' : '30px',
            } }
        >
            { text }
        </Typography>
    </Paper>
}

export default TestimonialCard