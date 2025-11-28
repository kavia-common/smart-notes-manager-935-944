import React from "react";
import styles from "./Navbar.module.css";

// PUBLIC_INTERFACE
function Navbar({
  searchValue = "",
  onSearchChange = () => {},
  onSecondaryAction = null,
  secondaryLabel = "New Note",
}) {
  return (
    <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
      <div className={styles.left}>
        <div className={styles.logo} aria-label="Smart Notes Logo" />
        <span className={styles.title}>Smart Notes</span>
      </div>
      <div className={styles.center}>
        <label htmlFor="note-search" className={styles.srOnly}>
          Search notes
        </label>
        <input
          id="note-search"
          type="text"
          className={styles.searchInput}
          placeholder="Search notes..."
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search notes"
          autoComplete="off"
        />
      </div>
      <div className={styles.right}>
        {onSecondaryAction && (
          <button
            className={styles.secondaryBtn}
            type="button"
            onClick={onSecondaryAction}
            aria-label={secondaryLabel}
          >
            {secondaryLabel}
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
