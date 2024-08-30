import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Lottie from 'react-lottie-player';
import lottiejson from '/public/mainpage.json';
import styles from './mainpage.module.css'
import { useRouter } from 'next/router';

export default function Mainpage() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/about-me');
    }
    return (
    <>
        <Grid container spacing={10}>
            <Grid size={4}>
                <div className={styles.introduce}>
                    <h2 style={{fontSize:'40px'}}>안녕하세요</h2>
                    <p>안녕하세요 저는 박혜성입니다. 저는 이야기를 만들어 그 스토리를 그리는 것을 좋아합니다. 지금 보다 더욱 성장하여 미래에 더 나은 나를 만드는 것이 목표입니다.</p>
                    <Button variant="outlined" onClick={handleClick}>프로젝트 보러가기</Button>
                </div>
            </Grid>
            <Grid size={7}>
                <div>
                    <Lottie
                        loop
                        animationData={lottiejson}
                        play
                        // style={{width : 1000, height : 1000}}
                    />
                </div>
            </Grid>
        </Grid>
    </>
    );
}