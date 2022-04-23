import Container from "../Container/Container";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";

import s from "./Slider.module.css"

const Slider = () =>{
    return (
        <section className={s.section}>
        <div className={s.slider}>
        <Container className={s.sliderContent}>
              <h1 className={s.Slider}>Wow</h1>
              <Heading level={3} > wwww </Heading>
              <Heading level={2}  > 2sss </Heading>
                    
              <h2 className={s.subSlider}>Wow.Wow.Wow</h2>
              <div className={s.call}>
                <button className={s.button}>Wow</button>
              </div>
          </Container>
        </div>
      </section>
    )
}
export default Slider;