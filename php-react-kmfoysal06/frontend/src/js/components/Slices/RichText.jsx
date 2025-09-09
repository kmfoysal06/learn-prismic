import React from "react";


const RichText = ({ slice }) => {
  if (slice?.slice_type) {
    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        {JSON.stringify(slice.primary.content)}
      </section>
    );
  }
};

export default RichText;
