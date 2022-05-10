import styles from "./About.module.css";
import Title from "../Title/Title";
// About Component
const About = () => {
    return (
        <div className={styles.about}>
            <Title title="About" />
            <p>
                A tote bag is a large and often unfastened bag with parallel handles
                that emerge from the sides of its pouch. Totes are often used as
                reusable shopping bags. <br /> The archetypal tote bag is made of sturdy cloth,
                perhaps with thick leather at its handles or bottom; leather versions
                often have a pebbled surface. Common fabrics include canvas, jute, nylon
                and other easy-care synthetics, which have become common, although these
                may degrade with prolonged exposure to sunlight. Many low-cost totes are
                often made from recycled matter, from minimally-processed natural
                fibers, or from byproducts of processes that refine organic materials.
            </p>
        </div>
    );
};
export default About;
