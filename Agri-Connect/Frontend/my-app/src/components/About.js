import React from "react";
export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "5rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          padding: "0 15px",
        }}
      >
        <div className="row justify-content-center">
          <div
            className="col-lg-8 col-md-10"
            style={{
              backgroundColor: "#ffffff", // White background for the box
              padding: "2rem",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "#333", // Dark text color for the heading
                marginBottom: "1.5rem",
              }}
            >
              About Us
            </h2>
            <p
              style={{
                textAlign: "justify",
                color: "#555", // Slightly lighter dark color for the paragraph text
                lineHeight: "1.8",
                marginBottom: "1.5rem", // Space between paragraphs
              }}
            >
              At Agriconnect, we are deeply committed to ensuring that every
              order you place with us meets the highest standards of quality.
              Our process begins with meticulous soil testing, where we analyze
              the nutrient profile and health of the soil to ensure that the
              crops we grow are rooted in the best possible conditions.
            </p>
            <p
              style={{
                textAlign: "justify",
                color: "#555",
                lineHeight: "1.8",
                marginBottom: "1.5rem",
              }}
            >
              By harmonizing traditional farming techniques—practices passed
              down through generations—with cutting-edge modern technology, we
              are able to maximize the nutritional value of our produce. This
              careful attention to detail ensures that our fruits, vegetables,
              and other agricultural products are not only fresh but also packed
              with essential vitamins and minerals.
            </p>
            <p
              style={{
                textAlign: "justify",
                color: "#555",
                lineHeight: "1.8",
                marginBottom: "1.5rem",
              }}
            >
              Once harvested, our produce undergoes a rigorous quality assurance
              process. Each item is carefully inspected, and only those that
              meet our strict criteria are approved for delivery. This ensures
              that what arrives at your doorstep is of the finest quality,
              reflecting our commitment to excellence in every bite.
            </p>
            <p
              style={{
                textAlign: "justify",
                color: "#555",
                lineHeight: "1.8",
                marginBottom: "1.5rem",
              }}
            >
              Agriconnect is proud to offer one of the most extensive selections
              of fresh fruits and vegetables available online. But we don’t stop
              there—our product range extends to a variety of kitchen
              essentials, including traditional village staples like fresh atta,
              aromatic flowers, and nutrient-rich cold-pressed oils.
              Additionally, we bring you the comforts of home with Mom's Kitchen
              snacks, ready-to-eat salads, and a variety of pan-mixes that make
              meal preparation a breeze.
            </p>
            <p
              style={{
                textAlign: "justify",
                color: "#555",
                lineHeight: "1.8",
                marginBottom: "1.5rem",
              }}
            >
              Our service is designed with your convenience in mind. With just a
              tap, you can access a world of fresh, farm-to-table produce,
              available whenever you need it. We take pride in being an
              integrated organization that handles every step of the
              journey—from the farm to your home—ensuring that you receive the
              highest quality food at a fair and reasonable price.
            </p>
            <p
              style={{
                textAlign: "justify",
                color: "#555",
                lineHeight: "1.8",
                marginBottom: "1.5rem",
              }}
            >
              Whether you're stocking up on pantry staples or looking for fresh
              ingredients for tonight's dinner, Agriconnect is your trusted
              partner in healthy, delicious, and sustainable eating. We are more
              than just a provider of fresh produce; we are stewards of the
              land, dedicated to bringing you the very best that nature has to
              offer, straight from our farms to your table.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
