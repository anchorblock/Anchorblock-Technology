import Image from "next/image";

/** First-visit logo intro; shown while the inline script in the root layout sets `brand-opening-pending`. */
export function BrandOpening() {
  return (
    <div className="brand-opening" aria-hidden="true">
      <Image
        src="/anchorblock_logo.jpeg"
        alt=""
        width={200}
        height={200}
        loading="eager"
        fetchPriority="high"
        sizes="288px"
      />
    </div>
  );
}
