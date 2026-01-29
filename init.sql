-- init.sql
CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE INDEX IF NOT EXISTS track_title_trgm_idx
    ON "Track" USING GIN (title gin_trgm_ops);

CREATE INDEX IF NOT EXISTS track_artist_trgm_idx
    ON "Track" USING GIN (artist gin_trgm_ops);

CREATE INDEX IF NOT EXISTS track_album_trgm_idx
    ON "Track" USING GIN (album gin_trgm_ops);