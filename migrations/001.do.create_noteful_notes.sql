DROP TABLE IF EXISTS noteful_notes;

CREATE TABLE noteful_notes (
  notes_id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  name TEXT NOT NULL,
  content TEXT,
  modified TIMESTAMP DEFAULT now() NOT NULL,
  folderId INTEGER REFERENCES noteful_folders(id) ON DELETE CASCADE NOT NULL
); 
