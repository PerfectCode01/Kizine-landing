interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2
        className="
          text-5xl
          md:text-6xl
          text-[var(--color-primary-dark)]
          leading-none
        "
        style={{
          fontFamily: "var(--font-heading)",
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-gray-600 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}