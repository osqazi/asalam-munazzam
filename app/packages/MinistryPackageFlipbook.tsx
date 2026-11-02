"use client";

import { forwardRef, useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";
import { Partner } from "@/types/partners";

type MinistryPackage = {
  id: string;
  title: string;
  image: string;
  partner: Partner;
};

type FlipEvent = { data: number };
type FlipBookApi = {
  flipPrev: () => void;
  flipNext: () => void;
  turnToPage: (page: number) => void;
};
type FlipBookRef = { pageFlip: () => FlipBookApi };

const PackagePage = forwardRef<HTMLDivElement, { item: MinistryPackage; index: number }>(
  function PackagePage({ item, index }, ref) {
    return (
      <div ref={ref} className="h-full w-full overflow-hidden bg-white p-2 sm:p-3">
        <div className="relative h-full w-full bg-white">
          <Image
            src={item.image}
            alt={`${item.partner.name}, ${item.title}`}
            fill
            unoptimized
            priority={index < 4}
            sizes="(max-width: 640px) 92vw, (max-width: 1100px) 48vw, 1050px"
            className="object-contain"
          />
        </div>
      </div>
    );
  }
);

export default function MinistryPackageFlipbook({ packages }: { packages: MinistryPackage[] }) {
  const bookRef = useRef<FlipBookRef>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [requestedPage, setRequestedPage] = useState("1");
  const current = packages[Math.min(pageIndex, Math.max(packages.length - 1, 0))];
  const bookKey = useMemo(() => packages.map((item) => item.id).join("|"), [packages]);

  useEffect(() => {
    setPageIndex(0);
    setRequestedPage("1");
  }, [bookKey]);

  useEffect(() => {
    const updateFullscreen = () => setIsFullscreen(document.fullscreenElement === viewportRef.current);
    document.addEventListener("fullscreenchange", updateFullscreen);
    return () => document.removeEventListener("fullscreenchange", updateFullscreen);
  }, []);

  if (!packages.length || !current) return null;

  const turnTo = (page: number) => {
    const boundedPage = Math.max(0, Math.min(packages.length - 1, page));
    bookRef.current?.pageFlip().turnToPage(boundedPage);
    setPageIndex(boundedPage);
    setRequestedPage(String(boundedPage + 1));
  };

  const onFlip = (event: FlipEvent) => {
    setPageIndex(event.data);
    setRequestedPage(String(event.data + 1));
  };

  const toggleFullscreen = async () => {
    if (!viewportRef.current) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await viewportRef.current.requestFullscreen();
    }
  };

  const jumpToPage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const page = Number.parseInt(requestedPage, 10);
    if (Number.isFinite(page)) turnTo(page - 1);
  };

  return (
    <section className="package-book-section mb-12 rounded-3xl border border-emerald-100 bg-white p-2 shadow-xl sm:p-3 lg:p-4" aria-label="Hajj package flipbook">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-600">Ministry package directory</p>
          <h2 className="mt-1 text-2xl font-bold text-green-900 sm:text-3xl">Hajj package book</h2>
          <p className="mt-1 text-sm text-gray-600">Turn through the package pages submitted by each HGO.</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-800">{packages.length} pages</span>
      </div>

      <div ref={viewportRef} className={`package-book-viewport ${isFullscreen ? "package-book-viewport-fullscreen" : ""}`}>
        <div className="package-book-stage">
          <HTMLFlipBook
            key={bookKey}
            ref={bookRef}
            className="package-flipbook h-full w-full max-w-full"
            style={{ margin: "0 auto" }}
            width={650}
            height={920}
            size="stretch"
            minWidth={320}
            maxWidth={1050}
            minHeight={450}
            maxHeight={1485}
            startPage={0}
            drawShadow
            flippingTime={850}
            usePortrait
            startZIndex={0}
            autoSize={false}
            maxShadowOpacity={0.45}
            showCover={false}
            mobileScrollSupport={false}
            clickEventForward
            useMouseEvents
            swipeDistance={30}
            showPageCorners
            disableFlipByClick={false}
            renderOnlyPageLengthChange={false}
            onFlip={onFlip}
          >
            {packages.map((item, index) => (
              <PackagePage key={item.id} item={item} index={index} />
            ))}
          </HTMLFlipBook>
        </div>

        <div className="package-book-caption" aria-live="polite">
          <div className="min-w-0">
            <p className="truncate font-semibold text-white">{current.partner.name}</p>
            <p className="truncate text-sm text-emerald-100">{current.title} · Enrollment {current.partner.enrl}</p>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-2">
            <button type="button" onClick={() => bookRef.current?.pageFlip().flipPrev()} disabled={pageIndex === 0} aria-label="Previous package page" className="package-book-control">
              <ChevronLeft aria-hidden="true" /> <span className="hidden sm:inline">Previous</span>
            </button>
            <form onSubmit={jumpToPage} className="flex items-center gap-1 text-sm text-white">
              <label className="sr-only" htmlFor="package-book-page-number">Go to page</label>
              <input id="package-book-page-number" type="number" inputMode="numeric" min={1} max={packages.length} value={requestedPage} onChange={(event) => setRequestedPage(event.target.value)} className="w-14 rounded-md border border-white/30 bg-slate-800 px-2 py-1.5 text-center text-white" />
              <span>/ {packages.length}</span>
              <button type="submit" className="package-book-control px-2">Go</button>
            </form>
            <button type="button" onClick={() => bookRef.current?.pageFlip().flipNext()} disabled={pageIndex >= packages.length - 1} aria-label="Next package page" className="package-book-control">
              <span className="hidden sm:inline">Next</span> <ChevronRight aria-hidden="true" />
            </button>
            <button type="button" onClick={toggleFullscreen} aria-label={isFullscreen ? "Exit full screen" : "Open full screen"} className="package-book-control package-book-fullscreen-control">
              {isFullscreen ? <Minimize aria-hidden="true" /> : <Maximize aria-hidden="true" />}
              <span className="hidden sm:inline">{isFullscreen ? "Exit" : "Full screen"}</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .package-book-section { position: relative; left: 50%; width: min(96vw, 2200px); transform: translateX(-50%); }
        .package-book-viewport { width: 100%; min-width: 0; background: linear-gradient(135deg, #052e24, #064e3b 52%, #0f3b32); border-radius: 1rem; overflow: hidden; padding: clamp(.25rem, .8vw, .75rem); }
        .package-book-stage { display: flex; justify-content: center; width: 100%; min-width: 0; height: min(96vh, 1485px, 68vw); min-height: 450px; overflow: hidden; }
        .package-flipbook { width: 100%; height: 100%; max-width: 100%; }
        .package-flipbook .stf__parent { margin: 0 auto; }
        .package-book-caption { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: .75rem; padding: .85rem .25rem .1rem; }
        .package-book-control { display: inline-flex; min-height: 2.5rem; align-items: center; justify-content: center; gap: .35rem; border: 1px solid rgb(255 255 255 / .35); border-radius: .55rem; background: rgb(255 255 255 / .1); padding: .5rem .7rem; color: white; font-size: .875rem; font-weight: 600; }
        .package-book-control:disabled { cursor: not-allowed; opacity: .4; }
        .package-book-control svg { height: 1rem; width: 1rem; }
        .package-book-fullscreen-control { background: #fbbf24; border-color: #fbbf24; color: #14251f; }
        .package-book-viewport-fullscreen { display: flex; min-height: 100dvh; flex-direction: column; justify-content: center; border-radius: 0; padding: clamp(.4rem, 2vw, 1.5rem); background: #052e24; }
        .package-book-viewport-fullscreen .package-book-stage { flex: 1; align-items: center; height: min(84dvh, 1485px, 68vw); }
        @media (max-width: 640px) {
          .package-book-section { left: auto; width: 100%; transform: none; }
          .package-book-caption { align-items: stretch; flex-direction: column; }
          .package-book-caption > div:last-child { justify-content: space-between; }
          .package-book-stage { height: min(72vh, 700px); min-height: 450px; }
        }
      `}</style>
    </section>
  );
}
