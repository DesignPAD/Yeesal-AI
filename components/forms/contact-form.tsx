"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Field, TextArea, Select } from "@/components/forms/field";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

// No backend yet: the form opens WhatsApp with a pre-filled message.
// Swap handleSubmit for an API call when a backend exists.
export function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Bonjour YEESAL AI 👋",
      "",
      `Nom : ${data.get("name")}`,
      `Email : ${data.get("email")}`,
      `Organisation : ${data.get("organization") || "—"}`,
      `Sujet : ${data.get("topic")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");

    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-mint-500/30 bg-mint-400/5 px-8 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-mint-600" aria-hidden />
        <h3 className="mt-4 font-display text-xl font-semibold text-navy-950">
          Votre message est prêt à partir
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-navy-900/65">
          WhatsApp s&apos;est ouvert avec votre message pré-rempli.
          Envoyez-le, et nous vous répondrons sous 24h ouvrées.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 font-ui text-sm font-semibold text-electric-600 hover:text-electric-700"
        >
          Écrire un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Nom complet"
          name="name"
          required
          placeholder="Awa Ndiaye"
          autoComplete="name"
        />
        <Field
          label="Email professionnel"
          name="email"
          type="email"
          required
          placeholder="awa@entreprise.sn"
          autoComplete="email"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Organisation"
          name="organization"
          placeholder="Nom de votre structure"
          autoComplete="organization"
        />
        <Select
          label="Sujet"
          name="topic"
          required
          options={[
            "Demande de démo",
            "Diagnostic IA",
            "Agents IA",
            "Automatisation",
            "Data & décision",
            "Partenariat",
            "Autre",
          ]}
        />
      </div>
      <TextArea
        label="Votre message"
        name="message"
        required
        placeholder="Décrivez votre besoin, vos processus ou vos questions…"
      />
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Envoyer via WhatsApp
        <Send className="h-4 w-4" aria-hidden />
      </Button>
    </form>
  );
}
