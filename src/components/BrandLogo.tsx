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
        width={compact ? 176 : 400}
        height={compact ? 44 : 98}
        priority={compact}
        className={compact ? "h-8 w-auto" : "h-14 w-auto sm:h-16"}
      />
    </span>
  );
}
