import React from "react";
import { Link } from "react-router-dom";

/**
 * useNavLink
 * Returns a function that renders either a <Link> (internal) or <a> (external).
 */
const useNavLink = () => {
  const renderNavLink = (url, text, key) => {
    if (!url) return <span key={key}>{text || "Link"}</span>;

    try {
      const linkUrl = new URL(url, BACKEND); // BACKEND is globally available
      const isInternal = linkUrl.origin === BACKEND;

      if (isInternal) {
        const relativePath =
          linkUrl.pathname + linkUrl.search + linkUrl.hash;
        return (
          <Link to={relativePath} key={key}>
            {text || "Link"}
          </Link>
        );
      } else {
        return (
          <a href={url} key={key} target="_blank" rel="noopener noreferrer">
            {text || "Link"}
          </a>
        );
      }
    } catch {
      return (
        <a href={url} key={key}>
          {text || "Link"}
        </a>
      );
    }
  };

  return renderNavLink;
};

export default useNavLink;

