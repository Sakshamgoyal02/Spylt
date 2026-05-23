import { useRef } from "react";
import { cards } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(SplitText);

const TestimonialSection = () => {
  const vdRef = useRef([]);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {

    // TEXT SPLIT ANIMATION
    const testimonialsFirstSplit = SplitText.create(
      ".testimonials-first-split h1",
      {
        type: "chars",
      }
    );

    const testimonialsSecondSplit = SplitText.create(
      ".testimonials-second-split h1",
      {
        type: "chars",
      }
    );

    const testimonialsThirdSplit = SplitText.create(
      ".testimonials-third-split h1",
      {
        type: "chars",
      }
    );

    gsap.from(testimonialsFirstSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top 75%",
      },
    });

    gsap.from(testimonialsSecondSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top 70%",
      },
    });

    gsap.from(testimonialsThirdSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top 65%",
      },
    });

    // DESKTOP CARD ANIMATION
    if (!isMobile) {
      gsap.set(".testimonials-section", {
        marginTop: "-140vh",
      });

      const pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top top",
          end: "150% top",
          scrub: 1.5,
          pin: true,
        },
      });

      pinTl.fromTo(
        ".desktop-card",
        { yPercent: 120 },
        {
          yPercent: 0,
          stagger: 0.15,
          ease: "power2.out",
        }
      );
    }
  });

  const handlePlay = (index) => {
    const video = vdRef.current[index];
    if (video) video.play();
  };

  const handlePause = (index) => {
    const video = vdRef.current[index];
    if (video) video.pause();
  };

  return (
    <section className="testimonials-section">

      <div className="title-box">
        <div className="testimonials-first-split overflow-hidden">
          <h1 className="text-black">What's</h1>
        </div>

        <div className="testimonials-second-split overflow-hidden">
          <h1 className="text-light-brown">Everyone</h1>
        </div>

        <div className="testimonials-third-split overflow-hidden">
          <h1 className="text-black">Talking</h1>
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      {!isMobile && (
        <div className="pin-box">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`vd-card desktop-card ${card.translation} ${card.rotation}`}
              onMouseEnter={() => handlePlay(index)}
              onMouseLeave={() => handlePause(index)}
            >
              <video
                ref={(el) => (vdRef.current[index] = el)}
                src={card.src}
                playsInline
                muted
                loop
                className="size-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* MOBILE LAYOUT */}
      {isMobile && (
        <div className="mobile-grid">
          {cards.slice(0, 4).map((card, index) => (
            <div
              key={index}
              className="mobile-card"
            >
              <video
                ref={(el) => (vdRef.current[index] = el)}
                src={card.src}
                playsInline
                muted
                loop
                autoPlay
                className="size-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TestimonialSection;