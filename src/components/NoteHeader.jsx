import { useState } from "react";

function NoteHeader({ notes, sortBy, onSort }) {
  return (
    <div className="note-header">
      <h1>My Notes({notes.length})</h1>
      <select value={sortBy} onChange={onSort}>
        <option value="latest">Latest notes</option>
        <option value="earliest">Earliest notes</option>
        <option value="completed">Completed notes</option>
      </select>
    </div>
  );
}

export default NoteHeader;
