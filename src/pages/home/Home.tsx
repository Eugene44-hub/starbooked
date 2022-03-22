import React from "react";
import { Booking, OurService } from "../../components";
import BannerSlider from "../../components/bannerSlider/BannerSlider";

import styles from "./Home.module.scss";
function Home() {
  return (
    <section className={`${styles.homeContainer}`}>
     <div className="bg-five">
     <div className={`${styles.banner} container  `}>
        <BannerSlider />
    
      </div>
     </div>
<OurService/>
      <Booking title="get in touch" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu duis donec non fames tellus."/>
    </section>
  );
}

export default Home;
