import styles from "./Home.module.css"

export const Home = () => {

    
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img 
                    src="https://avatars.mds.yandex.net/get-ydo/6058772/2a0000017e8cdc2036a75b7a12f98078a826/diploma" 
                    alt="Mobile Store" 
                    className={styles.img}
                />
                <div className={styles.textOverlay}>
                    <h1>Welcome!</h1>
                    <p>Discover the latest smartphones with cutting-edge technology. Explore top brands and get the best deals on your favorite mobile devices.</p>
                </div>
            </div>
        </div>
    );
    
    
    

    }


  


