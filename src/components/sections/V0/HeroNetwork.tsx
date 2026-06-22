import type { ReactNode } from "react";
import { ShoppingBag, Store, Truck } from "lucide-react";
import logo from "../../../assets/logo.png";

export default function HeroNetwork() {
  return (
    <div className="relative flex min-h-[520px] items-center justify-center">
      <div className="absolute h-[430px] w-[430px] rounded-full border border-dashed border-[var(--color-primary)]/30" />
      <div className="absolute h-[280px] w-[280px] rounded-full border border-dashed border-[var(--color-secondary)]/70" />

      <div className="absolute inset-0 bg-[radial-gradient(circle,var(--color-primary)_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />

      <div className="relative z-10 flex h-44 w-44 items-center justify-center rounded-[44px] bg-white p-6 shadow-2xl">
        <img
          src={logo}
          alt="KIZINE"
          className="w-full object-contain"
        />
      </div>

      <NetworkCard
        className="top-0 left-1/2 -translate-x-1/2"
        icon={<ShoppingBag size={24} />}
        title="Clients"
        text="Commandes simples et rapides"
      />

      <NetworkCard
        className="bottom-12 left-0"
        icon={<Store size={24} />}
        title="Professionnels"
        text="Ventes, stock et commandes"
      />

      <NetworkCard
        className="bottom-12 right-0"
        icon={<Truck size={24} />}
        title="Logistique"
        text="Distribution locale optimisée"
      />
    </div>
  );
}

interface NetworkCardProps {
  icon: ReactNode;
  title: string;
  text: string;
  className?: string;
}

function NetworkCard({
  icon,
  title,
  text,
  className = "",
}: NetworkCardProps) {
  return (
    <div
      className={`absolute z-20 w-52 rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur-md ${className}`}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
        {icon}
      </div>

      <h3 className="mt-4 font-bold text-[var(--color-primary-dark)]">
        {title}
      </h3>

      <p className="mt-1 text-sm leading-relaxed text-gray-500">
        {text}
      </p>
    </div>
  );
}