--
-- PostgreSQL database dump
--

\restrict nGvgCa8mMgIQazVoPgogyqkfcRLiBUGnK7N4GyBoRvDtl2kYiMDwyNAQP1R4bzj

-- Dumped from database version 18.0
-- Dumped by pg_dump version 18.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Album; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Album" (
    id integer NOT NULL,
    name text NOT NULL,
    "artistId" integer NOT NULL,
    image text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Album" OWNER TO postgres;

--
-- Name: Album_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Album_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Album_id_seq" OWNER TO postgres;

--
-- Name: Album_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Album_id_seq" OWNED BY public."Album".id;


--
-- Name: Artist; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Artist" (
    id integer NOT NULL,
    name text NOT NULL,
    image text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Artist" OWNER TO postgres;

--
-- Name: Artist_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Artist_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Artist_id_seq" OWNER TO postgres;

--
-- Name: Artist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Artist_id_seq" OWNED BY public."Artist".id;


--
-- Name: FavoriteTrackItem; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."FavoriteTrackItem" (
    "userId" integer NOT NULL,
    "trackId" integer NOT NULL,
    "addedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."FavoriteTrackItem" OWNER TO postgres;

--
-- Name: Playlist; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Playlist" (
    id integer NOT NULL,
    name text NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Playlist" OWNER TO postgres;

--
-- Name: Playlist_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Playlist_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Playlist_id_seq" OWNER TO postgres;

--
-- Name: Playlist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Playlist_id_seq" OWNED BY public."Playlist".id;


--
-- Name: RefreshToken; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."RefreshToken" (
    id integer NOT NULL,
    token text NOT NULL,
    expires timestamp(3) without time zone NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public."RefreshToken" OWNER TO postgres;

--
-- Name: RefreshToken_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."RefreshToken_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."RefreshToken_id_seq" OWNER TO postgres;

--
-- Name: RefreshToken_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."RefreshToken_id_seq" OWNED BY public."RefreshToken".id;


--
-- Name: Track; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Track" (
    id integer NOT NULL,
    name text NOT NULL,
    listens integer DEFAULT 0 NOT NULL,
    image text NOT NULL,
    audio text NOT NULL,
    "albumId" integer,
    "artistId" integer NOT NULL,
    "primaryColor" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Track" OWNER TO postgres;

--
-- Name: Track_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Track_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Track_id_seq" OWNER TO postgres;

--
-- Name: Track_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Track_id_seq" OWNED BY public."Track".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    role text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."User_id_seq" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: _PlaylistToTrack; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."_PlaylistToTrack" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_PlaylistToTrack" OWNER TO postgres;

--
-- Name: Album id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Album" ALTER COLUMN id SET DEFAULT nextval('public."Album_id_seq"'::regclass);


--
-- Name: Artist id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Artist" ALTER COLUMN id SET DEFAULT nextval('public."Artist_id_seq"'::regclass);


--
-- Name: Playlist id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Playlist" ALTER COLUMN id SET DEFAULT nextval('public."Playlist_id_seq"'::regclass);


--
-- Name: RefreshToken id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."RefreshToken" ALTER COLUMN id SET DEFAULT nextval('public."RefreshToken_id_seq"'::regclass);


--
-- Name: Track id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Track" ALTER COLUMN id SET DEFAULT nextval('public."Track_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: Album; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Album" (id, name, "artistId", image, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Artist; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Artist" (id, name, image, "createdAt") FROM stdin;
1	Num	/static/artist/image/a5c96c10-e921-472d-aed3-0e7e400d5e77.jpg	2026-01-01 20:11:41.248
2	Kreed	/static/artist/image/4d40fdd8-e32a-4bd3-9aae-6f47d2c65de9.png	2026-01-01 20:12:10.492
\.


--
-- Data for Name: FavoriteTrackItem; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."FavoriteTrackItem" ("userId", "trackId", "addedAt") FROM stdin;
1	2	2026-01-02 09:25:20.927
1	3	2026-01-02 09:25:29.069
1	11	2026-01-02 19:00:53.111
1	12	2026-01-02 19:00:54.621
1	13	2026-01-02 19:00:56.292
1	14	2026-01-02 19:00:57.845
1	15	2026-01-02 19:00:59.675
1	22	2026-01-02 19:01:02.401
1	29	2026-01-02 19:01:04.185
1	31	2026-01-02 19:01:10.455
1	38	2026-01-02 19:01:21.319
\.


--
-- Data for Name: Playlist; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Playlist" (id, name, "userId", "createdAt") FROM stdin;
\.


--
-- Data for Name: RefreshToken; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."RefreshToken" (id, token, expires, "userId") FROM stdin;
72	KNP7LYRjA71sCLZ7hqgeopNt_BjKN9u3VQZebr23rx0atFsJrxBQs7Fa5xoRZnR_	2026-01-10 19:13:13.412	1
74	CyUR0lZPBiOy-Bl1pvST7Yi3_vzRjCy4qyt7kt4RXto7C_FvHpTJbB0Kf5fzASLF	2026-01-10 19:21:56.496	1
\.


--
-- Data for Name: Track; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Track" (id, name, listens, image, audio, "albumId", "artistId", "primaryColor", "createdAt", "updatedAt") FROM stdin;
2	Travelling	0	/static/track/image/bdabb3e7-0c10-4242-86af-4bdf94436201.jpg	/static/track/audio/8cef2cd5-9424-4ad5-af77-840e9040a46c.mp3	\N	1	#21515f	2026-01-02 08:52:53.058	2026-01-02 08:52:53.058
3	Butterfly	0	/static/track/image/bb211da5-5735-4ebf-a564-f45c52bfd24e.jpg	/static/track/audio/fb768d3e-778e-4a32-91fa-bfcd4309f838.mp3	\N	2	#32313f	2026-01-02 09:17:32.45	2026-01-02 09:17:32.45
4	Flower	0	/static/track/image/62f78627-f484-4e84-9d4e-b55c5c65611c.jpg	/static/track/audio/f785f863-0fc4-4342-a43c-ae80d0071e36.mp3	\N	2	#495693	2026-01-02 10:05:52.366	2026-01-02 10:05:52.366
5	Snow	0	/static/track/image/b55e100a-47fc-4825-8ec0-18b3b40a6032.jpg	/static/track/audio/7ecb2219-a5a5-42e9-9b6c-9574da8d0746.mp3	\N	1	#313c48	2026-01-02 10:06:31.402	2026-01-02 10:06:31.402
6	Down	0	/static/track/image/b2dbf33a-2b6b-4bc5-a05f-6af2167d1a6c.jpg	/static/track/audio/366b8ee2-8fcd-4d19-b4c8-22f6b4470f74.mp3	\N	2	#eec8cc	2026-01-02 10:07:23.197	2026-01-02 10:07:23.197
7	1	0	/static/track/image/b6eb775b-1fbf-4366-86ee-50548e69cf0d.jpg	/static/track/audio/50a6d0d5-97db-46b3-bb79-4b096bab9ccd.mp3	\N	1	#495693	2026-01-02 10:18:36.36	2026-01-02 10:18:36.36
8	1	0	/static/track/image/171592c6-5263-4ef4-a871-8712e69cb91b.jpg	/static/track/audio/62ebcf4d-16fb-4d23-a207-d2f5d6b3cfd4.mp3	\N	1	#495693	2026-01-02 10:18:37.558	2026-01-02 10:18:37.558
9	1	0	/static/track/image/280ec383-19f2-4161-84e0-378c8b05a388.jpg	/static/track/audio/d8677797-d397-49f8-b31e-e5d58e9f411f.mp3	\N	1	#495693	2026-01-02 10:18:38.057	2026-01-02 10:18:38.057
10	1	0	/static/track/image/73f4d839-bd3b-43db-88f6-f9309e635c04.jpg	/static/track/audio/face6c75-8b53-4fd1-9867-9c8ffb1aa1e2.mp3	\N	1	#495693	2026-01-02 10:18:38.517	2026-01-02 10:18:38.517
11	1	0	/static/track/image/d20d6f66-8540-43bf-ad10-7fd3e2e70fcc.jpg	/static/track/audio/8b7aa608-fc46-42a2-b101-5cb4b875dfed.mp3	\N	1	#495693	2026-01-02 10:18:39.398	2026-01-02 10:18:39.398
12	1	0	/static/track/image/54d14767-d46c-4228-9f48-b6f4300b15a6.jpg	/static/track/audio/cf73db67-e893-4291-83ea-85df30301167.mp3	\N	1	#495693	2026-01-02 10:18:40.237	2026-01-02 10:18:40.237
13	1	0	/static/track/image/1681b960-eaa3-4c6f-bc79-09fe9822e66f.jpg	/static/track/audio/cb1e0a7f-a504-4f81-a9c7-92bd4c81cce9.mp3	\N	1	#495693	2026-01-02 10:18:40.887	2026-01-02 10:18:40.887
14	1	0	/static/track/image/fbcfbecd-ab93-4479-b25c-13bed9e58a32.jpg	/static/track/audio/308bc496-60e3-4f94-b5b0-6da2ec7b9c3e.mp3	\N	1	#495693	2026-01-02 10:18:41.483	2026-01-02 10:18:41.483
15	1	0	/static/track/image/9ee71d9b-95e7-407a-bdaf-3e8487247f46.jpg	/static/track/audio/e3360a31-90f1-437f-87cb-9cc50b1d4fc7.mp3	\N	1	#495693	2026-01-02 10:18:42.057	2026-01-02 10:18:42.057
16	1	0	/static/track/image/afaa2477-1d4b-4b5b-95e8-f4b78d4df0ac.jpg	/static/track/audio/d0dec708-be24-442f-8371-a2af19f9345a.mp3	\N	1	#495693	2026-01-02 10:18:42.587	2026-01-02 10:18:42.587
17	1	0	/static/track/image/8e8b5df9-ec45-40fa-953b-9c9cd0d84fa4.jpg	/static/track/audio/f92d977c-3241-4226-8ce5-f0534a4bd882.mp3	\N	1	#495693	2026-01-02 10:18:43.177	2026-01-02 10:18:43.177
18	1	0	/static/track/image/dbd70028-5e1b-4495-ab5c-85df583c16ae.jpg	/static/track/audio/8f89bc2d-1fe7-4d07-9245-1ce69175320f.mp3	\N	1	#495693	2026-01-02 10:18:43.724	2026-01-02 10:18:43.724
19	Smog	0	/static/track/image/d6e31bb6-f22f-4cba-9890-0e33c12917b2.jpg	/static/track/audio/a9e7a03b-63b2-4994-abd2-fadbaf11294e.mp3	\N	2	#e4c8cc	2026-01-02 10:19:38.332	2026-01-02 10:19:38.332
20	Smog	0	/static/track/image/be8efb9e-de3e-4951-bf8e-b334b7a609c8.jpg	/static/track/audio/fc51f876-0fdf-46ba-9515-952b7d2eeb6d.mp3	\N	2	#e4c8cc	2026-01-02 10:19:39.384	2026-01-02 10:19:39.384
21	Smog	0	/static/track/image/2ad848e3-0798-44f4-8dcc-7599c7493b72.jpg	/static/track/audio/ceb93381-4be0-42a0-a15f-899cd99e4280.mp3	\N	2	#e4c8cc	2026-01-02 10:19:40.167	2026-01-02 10:19:40.167
22	Smog	0	/static/track/image/e9bd9f49-279b-419e-a2c9-3775b89101da.jpg	/static/track/audio/df5a0d79-6433-4337-be87-9ad249132c33.mp3	\N	2	#e4c8cc	2026-01-02 10:19:40.986	2026-01-02 10:19:40.986
23	Smog	0	/static/track/image/8c914d85-dc6f-409e-8c0a-8636af7c04a8.jpg	/static/track/audio/910483fb-e438-4af7-a9ff-ff7ee8fc3312.mp3	\N	2	#e4c8cc	2026-01-02 10:19:42.053	2026-01-02 10:19:42.053
24	Smog	0	/static/track/image/064c6615-576d-47ee-b11f-c4565752554e.jpg	/static/track/audio/2b965a8c-c886-45b5-a645-e4194ade93b5.mp3	\N	2	#e4c8cc	2026-01-02 10:19:43.076	2026-01-02 10:19:43.076
25	Smog	0	/static/track/image/8ed36e5c-2abb-4430-bdbf-eb0600bc2575.jpg	/static/track/audio/69effbf6-3350-411e-a641-a7e65df10016.mp3	\N	2	#e4c8cc	2026-01-02 10:19:51.51	2026-01-02 10:19:51.51
26	Smog	0	/static/track/image/476d4c82-c129-46f1-9ad3-5433bc8c9475.jpg	/static/track/audio/e4798467-c801-44cb-8972-9320881ea362.mp3	\N	2	#e4c8cc	2026-01-02 10:19:52.248	2026-01-02 10:19:52.248
27	Smog	0	/static/track/image/1292c8bf-d94a-471b-be26-53fff69ade31.jpg	/static/track/audio/424158eb-30f7-4631-bc89-b5e8b41c3402.mp3	\N	2	#e4c8cc	2026-01-02 10:19:52.935	2026-01-02 10:19:52.935
28	Smog	0	/static/track/image/72a268d4-f20a-4bc6-bffc-a3f9248e792f.jpg	/static/track/audio/028d3a0a-ea9c-44d6-87f9-4c8f9ce16092.mp3	\N	2	#e4c8cc	2026-01-02 10:19:53.623	2026-01-02 10:19:53.623
29	Smog	0	/static/track/image/df96cb36-963f-461d-8cc6-34606c1486c0.jpg	/static/track/audio/52040e24-b49a-41aa-8f93-83d25c292d38.mp3	\N	2	#e4c8cc	2026-01-02 10:19:54.289	2026-01-02 10:19:54.289
30	Smog	0	/static/track/image/b21b0e7a-a835-439e-8eb5-1e4240a144e3.jpg	/static/track/audio/e8f2a5f2-a162-4127-8470-dd347cb2388a.mp3	\N	2	#e4c8cc	2026-01-02 10:19:54.908	2026-01-02 10:19:54.908
31	Smog	0	/static/track/image/72737aee-6348-4b9b-a3c7-e325872b1458.jpg	/static/track/audio/29cb8ec9-8c1b-4769-989b-ea97dff44d52.mp3	\N	2	#e4c8cc	2026-01-02 10:19:55.307	2026-01-02 10:19:55.307
32	Smog	0	/static/track/image/f8f15bc8-4e60-4f18-b072-4ef338ee5342.jpg	/static/track/audio/54bd5468-9b42-4eb0-b0af-54f4b4205795.mp3	\N	2	#e4c8cc	2026-01-02 10:19:55.575	2026-01-02 10:19:55.575
33	Smog	0	/static/track/image/058fa50c-a3c4-4890-aac5-7ee7c09b7570.jpg	/static/track/audio/d8c68cd8-896a-40ee-84af-7b5fa8fc47f8.mp3	\N	2	#e4c8cc	2026-01-02 10:19:55.786	2026-01-02 10:19:55.786
34	Smog	0	/static/track/image/b50c12e7-165c-4d6c-baa9-108900376158.jpg	/static/track/audio/a7aaec89-5821-428e-a9b8-afcd96858c9d.mp3	\N	2	#e4c8cc	2026-01-02 10:19:56.025	2026-01-02 10:19:56.025
35	Smog	0	/static/track/image/3bf8de6e-5c1b-407a-ad00-f33d973094c8.jpg	/static/track/audio/c83a47d5-9a36-4557-bf05-daf6be8f1788.mp3	\N	2	#e4c8cc	2026-01-02 10:19:57.289	2026-01-02 10:19:57.289
36	Smog	0	/static/track/image/4d387f1f-ee17-4b7f-9562-f8c92513a0dc.jpg	/static/track/audio/6bedfd47-bf30-4a19-a0a6-6fad7a22a90d.mp3	\N	2	#e4c8cc	2026-01-02 10:19:57.735	2026-01-02 10:19:57.735
37	Smog	0	/static/track/image/e0008d36-7b5e-44b6-8061-ce6f160e11fc.jpg	/static/track/audio/1f467d71-3420-446d-817c-6f1b35115c3b.mp3	\N	2	#e4c8cc	2026-01-02 10:19:58.289	2026-01-02 10:19:58.289
38	Smog	0	/static/track/image/ccb07d2b-7284-48ad-a871-2cff226998f2.jpg	/static/track/audio/1e7fc06d-f97a-43e8-ad5d-0ed1ba790ddb.mp3	\N	2	#e4c8cc	2026-01-02 10:19:58.786	2026-01-02 10:19:58.786
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, name, email, password, role, "createdAt") FROM stdin;
1	Pablo	0kvestik0@gmail.com	$2b$07$1DV4pKsmUZ.4zR5RE9N24eEyMAlfUt06Sw/WzBHgFl9lCaQ54FZtW	admin	2026-01-01 20:05:50.584
\.


--
-- Data for Name: _PlaylistToTrack; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."_PlaylistToTrack" ("A", "B") FROM stdin;
\.


--
-- Name: Album_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Album_id_seq"', 1, false);


--
-- Name: Artist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Artist_id_seq"', 2, true);


--
-- Name: Playlist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Playlist_id_seq"', 1, false);


--
-- Name: RefreshToken_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."RefreshToken_id_seq"', 74, true);


--
-- Name: Track_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Track_id_seq"', 38, true);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_id_seq"', 1, true);


--
-- Name: Album Album_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Album"
    ADD CONSTRAINT "Album_pkey" PRIMARY KEY (id);


--
-- Name: Artist Artist_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Artist"
    ADD CONSTRAINT "Artist_pkey" PRIMARY KEY (id);


--
-- Name: FavoriteTrackItem FavoriteTrackItem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FavoriteTrackItem"
    ADD CONSTRAINT "FavoriteTrackItem_pkey" PRIMARY KEY ("userId", "trackId");


--
-- Name: Playlist Playlist_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Playlist"
    ADD CONSTRAINT "Playlist_pkey" PRIMARY KEY (id);


--
-- Name: RefreshToken RefreshToken_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."RefreshToken"
    ADD CONSTRAINT "RefreshToken_pkey" PRIMARY KEY (id);


--
-- Name: Track Track_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Track"
    ADD CONSTRAINT "Track_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _PlaylistToTrack _PlaylistToTrack_AB_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_PlaylistToTrack"
    ADD CONSTRAINT "_PlaylistToTrack_AB_pkey" PRIMARY KEY ("A", "B");


--
-- Name: RefreshToken_token_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "RefreshToken_token_key" ON public."RefreshToken" USING btree (token);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: _PlaylistToTrack_B_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "_PlaylistToTrack_B_index" ON public."_PlaylistToTrack" USING btree ("B");


--
-- Name: Album Album_artistId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Album"
    ADD CONSTRAINT "Album_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES public."Artist"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: FavoriteTrackItem FavoriteTrackItem_trackId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FavoriteTrackItem"
    ADD CONSTRAINT "FavoriteTrackItem_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES public."Track"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: FavoriteTrackItem FavoriteTrackItem_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FavoriteTrackItem"
    ADD CONSTRAINT "FavoriteTrackItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Playlist Playlist_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Playlist"
    ADD CONSTRAINT "Playlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: RefreshToken RefreshToken_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."RefreshToken"
    ADD CONSTRAINT "RefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Track Track_albumId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Track"
    ADD CONSTRAINT "Track_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES public."Album"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Track Track_artistId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Track"
    ADD CONSTRAINT "Track_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES public."Artist"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: _PlaylistToTrack _PlaylistToTrack_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_PlaylistToTrack"
    ADD CONSTRAINT "_PlaylistToTrack_A_fkey" FOREIGN KEY ("A") REFERENCES public."Playlist"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _PlaylistToTrack _PlaylistToTrack_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_PlaylistToTrack"
    ADD CONSTRAINT "_PlaylistToTrack_B_fkey" FOREIGN KEY ("B") REFERENCES public."Track"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

\unrestrict nGvgCa8mMgIQazVoPgogyqkfcRLiBUGnK7N4GyBoRvDtl2kYiMDwyNAQP1R4bzj

