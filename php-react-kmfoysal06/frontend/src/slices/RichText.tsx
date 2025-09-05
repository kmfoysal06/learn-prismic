import React, { FC } from "react";

import { SkillsSlice } from '../types';
interface RichTextProps {
  slice: RichTextSlice;
}

const RichText: FC<RichTextProps> = ({ slice }) => {
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
