import Image from "next/image";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center ${compact ? "gap-3" : "gap-4"}`}>
      <Image
        src="/brand/tollesding-logo.svg"
        alt="TollesDing Logo"
        width={compact ? 170 : 320}
        height={compact ? 50 : 96}
        priority={compact}
        className={compact ? "h-9 w-auto" : "h-14 w-auto sm:h-16"}
      />
    </span>
  );
}
