# Ikhwanul Azka (Azkaik) — Personal Portfolio

Website portofolio pribadi modern untuk **Ikhwanul Azka (azkaik)** menggunakan **Svelte 5**, **Vite**, **Tailwind CSS v4**, dan **Lucide Icons**, dikelola dengan **Bun**.

## Tech Stack

- **Framework:** Svelte 5 + Vite
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons:** `lucide-svelte`
- **Fonts:** Google Fonts (`Anton` & `Plus Jakarta Sans`)
- **Runtime / Package Manager:** Bun

## Menjalankan Proyek

```bash
bun install
bun run dev
```

Build produksi:

```bash
bun run build
```

## Struktur Komponen

- `src/lib/components/Hero.svelte` — Bagian poster editorial utama dengan palet biru indigo, navigasi smooth-scroll, bar sosial vertikal, 3 sorotan pencapaian, dan efek parallax.
- `src/lib/components/AzkaikPortrait.svelte` — Ilustrasi potret bergaya anime cel-shaded dengan animasi mengambang dan parallax halus.
- `src/lib/components/AboutProfile.svelte` — Bagian About Me, Experience timeline, Education, Skills pills, dan Software badges.
- `src/lib/components/LearningJourney.svelte` — Grid 2x2 Learning Journey.
- `src/lib/components/ContactFooter.svelte` — Informasi kontak interaktif dengan fitur Copy Email dan notifikasi toast.
