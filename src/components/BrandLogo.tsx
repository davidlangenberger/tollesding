import Image from "next/image";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center ${compact ? "gap-3" : "gap-4"}`}>
      <Image
        src="/brand/logo.png"
        alt="TollesDing Logo"
        width={compact ? 208 : 460}
        height={compact ? 52 : 112}
        priority={compact}
        className={compact ? "h-10 w-auto" : "h-16 w-auto sm:h-20"}
      />
    </span>
  );
}
