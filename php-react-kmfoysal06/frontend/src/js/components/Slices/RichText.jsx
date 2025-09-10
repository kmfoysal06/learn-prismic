import React from "react";

const RichText = ({ slice }) => {
  if (!slice?.slice_type) return null;

  const renderTextWithSpans = (text, spans) => {
    if (!spans || spans.length === 0) return text;

    let elements = [];
    let lastIndex = 0;

    spans.forEach((span, i) => {
      // Push plain text before the span
      if (span.start > lastIndex) {
        elements.push(text.slice(lastIndex, span.start));
      }

      const spanText = text.slice(span.start, span.end);

      switch (span.type) {
        case "strong":
          elements.push(<strong key={i}>{spanText}</strong>);
          break;
        case "em":
          elements.push(<em key={i}>{spanText}</em>);
          break;
        case "hyperlink":
          elements.push(
            <a
              key={i}
              href={span.data?.url || "#"}
              target="_blank"
              rel="noreferrer"
            >
              {spanText}
            </a>
          );
          break;
        default:
          elements.push(spanText);
      }

      lastIndex = span.end;
    });

    // Push remaining text
    if (lastIndex < text.length) {
      elements.push(text.slice(lastIndex));
    }

    return elements;
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="charming-portfolio-container charming-portfolio-hero-section"
    >
      {slice.primary.content?.map((block, idx) => {
        if (block.type === "paragraph") {
          return <p key={idx}>{renderTextWithSpans(block.text, block.spans)}</p>;
        }
        if (block.type === "heading1") {
          return <h1 key={idx}>{renderTextWithSpans(block.text, block.spans)}</h1>;
        }
        if (block.type === "heading2") {
          return <h2 key={idx}>{renderTextWithSpans(block.text, block.spans)}</h2>;
        }
        // fallback
        return <p key={idx}>{block.text}</p>;
      })}
    </section>
  );
};

export default RichText;

