import classes from "@/_components/banner/BannerAnimation.module.css";

const BannerAnimation = ({ images, speed = 1000 }) => {
  return (
    <div className={classes.inner}>
      <div className={classes.wrapper}>
        <section
          className={classes.section}
          style={{ "--speed": `${speed}ms` }}
        >
          {images.map(({ id, image }) => (
            <div className={classes.image} key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
        </section>
        <section
          className={classes.section}
          style={{ "--speed": `${speed}ms` }}
        >
          {images.map(({ id, image }) => (
            <div className={classes.image} key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
        </section>
        <section
          className={classes.section}
          style={{ "--speed": `${speed}ms` }}
        >
          {images.map(({ id, image }) => (
            <div className={classes.image} key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export { BannerAnimation };
